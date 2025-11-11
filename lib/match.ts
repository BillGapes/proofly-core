import { users, profiles, ratings } from './mock';
import { computeProoflyScore } from './score';

type MatchOptions = {
  requiredSkills: string[];
  minScore?: number;
  useMBTI?: boolean;
  employerMBTI?: string | null;
};

function skillMatchScore(userId: string, requiredSkills: string[]): number {
  const lowerReq = requiredSkills.map(s => s.trim().toLowerCase()).filter(Boolean);
  if (!lowerReq.length) return 1;

  const userSkills = new Set(
    (profiles.find(p => p.userId === userId)?.skills || [])
      .map(s => s.toLowerCase())
      .concat(ratings.filter(r => r.subjectUserId === userId).map(r => r.skill.toLowerCase()))
  );

  let hits = 0;
  for (const req of lowerReq) if (userSkills.has(req)) hits++;
  return hits / lowerReq.length;
}

function managerWeightShare(userId: string): number {
  const my = ratings.filter(r => r.subjectUserId === userId);
  if (!my.length) return 0;
  const mgr = my.filter(r => r.relation === 'manager').length;
  return mgr / my.length;
}

function recencyScore(userId: string): number {
  const my = ratings.filter(r => r.subjectUserId === userId);
  if (!my.length) return 0;
  const now = Date.now();
  const halfLife = 1000 * 60 * 60 * 24 * 540;
  let sum = 0;
  for (const r of my) {
    const age = now - new Date(r.createdAt).getTime();
    sum += Math.pow(0.5, age / halfLife);
  }
  return Math.min(1, sum / Math.max(1, my.length));
}

function mbtiFit(userId: string, employerMBTI?: string | null): number {
  if (!employerMBTI) return 0.5;
  const u = users.find(u => u.id === userId);
  if (!u?.mbti) return 0.5;
  const a = employerMBTI.toUpperCase();
  const b = u.mbti.toUpperCase();
  if (a === b) return 1;
  let same = 0;
  for (let i = 0; i < 4; i++) if (a[i] === b[i]) same++;
  return [0.25, 0.5, 0.75, 1][Math.max(0, same - 1)];
}

export function matchCandidates(opts: MatchOptions) {
  const { requiredSkills, minScore = 0, useMBTI = false, employerMBTI = null } = opts;

  return users
    .map(u => {
      const proofly = computeProoflyScore(u.id) / 100;
      const skills = skillMatchScore(u.id, requiredSkills);
      const mgr = managerWeightShare(u.id);
      const recency = recencyScore(u.id);
      const culture = useMBTI ? mbtiFit(u.id, employerMBTI) : 0.5;

      const rank = 0.45*proofly + 0.25*skills + 0.15*mgr + 0.10*recency + 0.05*culture;

      return {
        userId: u.id,
        name: u.name,
        mbti: u.mbti || null,
        prooflyScore: Math.round(proofly * 100),
        skillMatch: Math.round(skills * 100),
        managerShare: Math.round(mgr * 100),
        recency: Math.round(recency * 100),
        cultureFit: Math.round(culture * 100),
        rank: Math.round(rank * 100),
      };
    })
    .filter(r => r.prooflyScore >= minScore)
    .sort((a, b) => b.rank - a.rank);
}
