import type { User, Profile, WorkHistory, Education, SkillRating, Standout } from './types';

export const users: User[] = [
  { id: 'u1', handle: 'james', name: 'James Ralph', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James', kycStatus: 'verified', mbti: 'ENTP' },
  { id: 'u2', handle: 'kelly', name: 'Kelly M', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kelly', kycStatus: 'verified', mbti: 'ENFP' },
];

export const profiles: Profile[] = [
  { userId: 'u1', headline: 'Account Manager • Sales Ops', summary: 'Credible, data-driven, people-first', skills: ['Sales Strategy', 'Account Mgmt', 'Negotiation'], visibility: 'public' },
  { userId: 'u2', headline: 'Senior AE • Team Lead', summary: 'Mentor, closer, process-driven', skills: ['Negotiation', 'Leadership', 'Coaching'], visibility: 'public' },
];

export const workHistory: WorkHistory[] = [
  { id: 'w1', userId: 'u1', org: 'Comparion Insurance', title: 'Sales Agent', start: '2023-07-01', end: '2025-11-01', description: '400+ lines, 92% retention' },
  { id: 'w2', userId: 'u1', org: 'US Cellular', title: 'Wireless Consultant', start: '2021-06-01', end: '2023-07-01' },
];

export const education: Education[] = [
  { id: 'e1', userId: 'u1', org: 'University of Oklahoma', degree: 'Entrepreneurship & Venture Mgmt', start: '2019-08-01', end: '2021-05-01' },
];

export const ratings: SkillRating[] = [
  { id: 'r1', subjectUserId: 'u1', verifierUserId: 'u2', skill: 'Account Mgmt', stars: 5, rationale: 'Client retention 92%', relation: 'peer', createdAt: '2025-11-01' },
  { id: 'r2', subjectUserId: 'u1', verifierUserId: 'u2', skill: 'Negotiation', stars: 4, rationale: 'Clear outcomes with clients', relation: 'peer', createdAt: '2025-10-12' },
  { id: 'r3', subjectUserId: 'u2', verifierUserId: 'u1', skill: 'Leadership', stars: 5, rationale: 'Coaches team effectively', relation: 'peer', createdAt: '2025-10-20' },
];

export const standouts: Standout[] = [
  { id: 's1', subjectUserId: 'u1', verifierUserId: 'u2', text: 'James is the glue in cross‑team projects; he unblocks others fast.', createdAt: '2025-10-30' },
];

export function weightedSkillAverage(userId: string, skill: string): number {
  const relWeight = { manager: 1.3, peer: 1.0, classmate: 0.8, other: 0.9 } as const;
  const halfLifeDays = 540; // ~18 months
  const now = new Date();
  const relevant = ratings.filter(r => r.subjectUserId === userId && r.skill.toLowerCase() === skill.toLowerCase());
  if (!relevant.length) return 0;
  let num = 0, den = 0;
  for (const r of relevant) {
    const ageDays = (now.getTime() - new Date(r.createdAt).getTime()) / 86400000;
    const timeDecay = Math.pow(0.5, ageDays / halfLifeDays);
    const w = (relWeight as any)[r.relation] * timeDecay;
    num += r.stars * w;
    den += w;
  }
  return Math.round((num / den) * 10) / 10;
}
