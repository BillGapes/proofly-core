export type Relation = 'manager' | 'peer' | 'classmate' | 'other';

export interface User { id: string; handle: string; name: string; kycStatus?: 'unverified'|'pending'|'verified'; mbti?: string; }
export interface Profile { userId: string; headline?: string; summary?: string; skills: string[]; visibility: 'public'|'employer_only'; }
export interface SkillRating { id: string; subjectUserId: string; verifierUserId: string; skill: string; stars: number; rationale: string; relation: Relation; createdAt: string; }
export interface Standout { id: string; subjectUserId: string; verifierUserId: string; text: string; createdAt: string; }

export const users: User[] = [
  { id: 'u1', handle: 'james', name: 'James Ralph', kycStatus: 'verified', mbti: 'ENTP' },
  { id: 'u2', handle: 'kelly', name: 'Kelly M', kycStatus: 'verified', mbti: 'ENFP' },
];

export const profiles: Profile[] = [
  { userId: 'u1', headline: 'Account Manager • Sales Ops', summary: 'Credible, data-driven, people-first', skills: ['Sales Strategy', 'Account Mgmt', 'Negotiation'], visibility: 'public' },
  { userId: 'u2', headline: 'Senior AE • Team Lead', summary: 'Mentor, closer, process-driven', skills: ['Negotiation', 'Leadership', 'Coaching'], visibility: 'public' },
];

export const ratings: SkillRating[] = [
  { id: 'r1', subjectUserId: 'u1', verifierUserId: 'u2', skill: 'Account Mgmt', stars: 5, rationale: 'Client retention 92%', relation: 'peer', createdAt: '2025-11-01' },
  { id: 'r2', subjectUserId: 'u1', verifierUserId: 'u2', skill: 'Negotiation',  stars: 4, rationale: 'Clear outcomes with clients', relation: 'peer', createdAt: '2025-10-12' },
  { id: 'r3', subjectUserId: 'u2', verifierUserId: 'u1', skill: 'Leadership',   stars: 5, rationale: 'Coaches team effectively', relation: 'peer', createdAt: '2025-10-20' },
];

export const standouts: Standout[] = [
  { id: 's1', subjectUserId: 'u1', verifierUserId: 'u2', text: 'James is the glue in cross‑team projects; he unblocks others fast.', createdAt: '2025-10-30' },
];
