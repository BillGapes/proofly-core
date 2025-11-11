export type Relation = 'manager' | 'peer' | 'classmate' | 'other';

export interface User { id: string; handle: string; name: string; kycStatus?: 'unverified'|'pending'|'verified'; mbti?: string; photoUrl?: string; }
export interface Profile { userId: string; headline?: string; summary?: string; skills: string[]; visibility: 'public'|'employer_only'; }
export interface SkillRating { id: string; subjectUserId: string; verifierUserId: string; skill: string; stars: number; rationale: string; relation: Relation; createdAt: string; }
export interface Standout { id: string; subjectUserId: string; verifierUserId: string; text: string; createdAt: string; }
export interface WorkHistory { id: string; userId: string; company: string; title: string; startDate: string; endDate?: string; }
export interface Education { id: string; userId: string; school: string; degree: string; field: string; graduationYear: string; }

export const users: User[] = [
  { id: 'u1', handle: 'james', name: 'James Ralph', kycStatus: 'verified', mbti: 'ENTP', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James' },
  { id: 'u2', handle: 'kelly', name: 'Kelly M', kycStatus: 'verified', mbti: 'ENFP', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kelly' },
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

export const workHistory: WorkHistory[] = [
  { id: 'w1', userId: 'u1', company: 'Acme Corp', title: 'Account Manager', startDate: '2023-01', endDate: '2025-11' },
  { id: 'w2', userId: 'u1', company: 'StartupXYZ', title: 'Sales Associate', startDate: '2021-06', endDate: '2022-12' },
  { id: 'w3', userId: 'u2', company: 'SalesCo', title: 'Senior AE', startDate: '2022-03' },
  { id: 'w4', userId: 'u2', company: 'TechVentures', title: 'Account Executive', startDate: '2019-08', endDate: '2022-02' },
];

export const education: Education[] = [
  { id: 'e1', userId: 'u1', school: 'State University', degree: 'Bachelor of Science', field: 'Business Administration', graduationYear: '2021' },
  { id: 'e2', userId: 'u2', school: 'City College', degree: 'Bachelor of Arts', field: 'Communication', graduationYear: '2019' },
];

export function weightedSkillAverage(userId: string, skill: string): string | null {
  const skillRatings = ratings.filter(r => r.subjectUserId === userId && r.skill === skill);
  if (!skillRatings.length) return null;
  
  const relationWeights: Record<Relation, number> = { manager: 3, peer: 2, classmate: 1, other: 1 };
  const now = Date.now();
  const halfLife = 1000 * 60 * 60 * 24 * 540;
  
  let weightedSum = 0;
  let totalWeight = 0;
  
  for (const r of skillRatings) {
    const age = now - new Date(r.createdAt).getTime();
    const recencyFactor = Math.pow(0.5, age / halfLife);
    const relationWeight = relationWeights[r.relation] || 1;
    const weight = relationWeight * recencyFactor;
    
    weightedSum += r.stars * weight;
    totalWeight += weight;
  }
  
  return totalWeight > 0 ? (weightedSum / totalWeight).toFixed(1) : null;
}
