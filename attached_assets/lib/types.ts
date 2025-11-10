export type Relation = 'manager' | 'peer' | 'classmate' | 'other';

export interface User {
  id: string;
  handle: string;
  name: string;
  email?: string;
  kycStatus?: 'unverified' | 'pending' | 'verified';
}

export interface Profile {
  userId: string;
  headline?: string;
  summary?: string;
  skills: string[];
  visibility: 'public' | 'employer_only';
}

export interface WorkHistory {
  id: string;
  userId: string;
  org: string;
  title: string;
  start: string;
  end?: string;
  description?: string;
}

export interface Education {
  id: string;
  userId: string;
  org: string;
  degree: string;
  start: string;
  end?: string;
  notes?: string;
}

export interface SkillRating {
  id: string;
  subjectUserId: string;
  verifierUserId: string;
  skill: string;
  stars: number;
  rationale: string;
  relation: Relation;
  createdAt: string;
}

export interface Standout {
  id: string;
  subjectUserId: string;
  verifierUserId: string;
  text: string;
  createdAt: string;
}
