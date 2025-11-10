import type { User, Profile, WorkHistory, Education, SkillRating, Standout } from './types';

export const users: User[] = [
  { id: 'u1', handle: 'james', name: 'James Ralph', kycStatus: 'verified' },
  { id: 'u2', handle: 'kelly', name: 'Kelly M', kycStatus: 'verified' },
];

export const profiles: Profile[] = [
  { userId: 'u1', headline: 'Account Manager • Sales Ops', summary: 'Credible, data-driven, people-first', skills: ['Sales Strategy', 'Account Mgmt', 'Negotiation'], visibility: 'public' }
];

export const workHistory: WorkHistory[] = [
  { id: 'w1', userId: 'u1', org: 'Comparion Insurance', title: 'Sales Agent', start: '2023-07-01', end: '2025-11-01', description: '400+ lines, 92% retention' },
  { id: 'w2', userId: 'u1', org: 'US Cellular', title: 'Wireless Consultant', start: '2021-06-01', end: '2023-07-01' },
];

export const education: Education[] = [
  { id: 'e1', userId: 'u1', org: 'University of Oklahoma', degree: 'Entrepreneurship & Venture Mgmt', start: '2019-08-01', end: '2021-05-01' },
];

export const ratings: SkillRating[] = [
  { id: 'r1', subjectUserId: 'u1', verifierUserId: 'u2', skill: 'Account Mgmt', stars: 5, rationale: 'Consistently exceeded targets, excellent client retention', relation: 'peer', createdAt: '2025-11-01' },
  { id: 'r2', subjectUserId: 'u1', verifierUserId: 'u2', skill: 'Negotiation', stars: 4, rationale: 'Great outcomes; clear rationale with clients', relation: 'peer', createdAt: '2025-10-12' },
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
