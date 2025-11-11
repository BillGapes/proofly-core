export type Relation = 'manager' | 'peer' | 'classmate' | 'other';

export interface User { id: string; handle: string; name: string; kycStatus?: 'unverified'|'pending'|'verified'; mbti?: string; photoUrl?: string; }
export interface Profile { userId: string; headline?: string; summary?: string; skills: string[]; visibility: 'public'|'employer_only'; }
export interface SkillRating { id: string; subjectUserId: string; verifierUserId: string; skill: string; stars: number; rationale: string; relation: Relation; createdAt: string; }
export interface Standout { id: string; subjectUserId: string; verifierUserId: string; text: string; createdAt: string; }
export interface WorkHistory { id: string; userId: string; org: string; title: string; start: string; end?: string; description?: string; }
export interface Education { id: string; userId: string; org: string; degree: string; start: string; end?: string; }

export const users: User[] = [
  { id: 'u1', handle: 'james', name: 'James Ralph', kycStatus: 'verified', mbti: 'ENTP', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James' },
  { id: 'u2', handle: 'kelly', name: 'Kelly M', kycStatus: 'verified', mbti: 'ENFP', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kelly' },
  { id: 'u3', handle: 'sarah', name: 'Sarah Chen', kycStatus: 'verified', mbti: 'ISTJ', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
  { id: 'u4', handle: 'michael', name: 'Michael Torres', kycStatus: 'verified', mbti: 'ESTJ', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael' },
  { id: 'u5', handle: 'priya', name: 'Priya Patel', kycStatus: 'verified', mbti: 'INFJ', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya' },
  { id: 'u6', handle: 'david', name: 'David Kim', kycStatus: 'verified', mbti: 'ENTJ', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David' },
  { id: 'u7', handle: 'maria', name: 'Maria Rodriguez', kycStatus: 'verified', mbti: 'ESFJ', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria' },
  { id: 'u8', handle: 'alex', name: 'Alex Johnson', kycStatus: 'verified', mbti: 'INTP', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
  { id: 'u9', handle: 'jessica', name: 'Jessica Williams', kycStatus: 'verified', mbti: 'ENFJ', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica' },
  { id: 'u10', handle: 'ryan', name: 'Ryan Murphy', kycStatus: 'verified', mbti: 'ISTP', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan' },
  { id: 'u11', handle: 'lisa', name: 'Lisa Anderson', kycStatus: 'verified', mbti: 'ESFP', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa' },
  { id: 'u12', handle: 'carlos', name: 'Carlos Martinez', kycStatus: 'verified', mbti: 'INTJ', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos' },
  { id: 'u13', handle: 'amanda', name: 'Amanda Lee', kycStatus: 'verified', mbti: 'ISFJ', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda' },
  { id: 'u14', handle: 'tyler', name: 'Tyler Brown', kycStatus: 'verified', mbti: 'ESTP', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tyler' },
];

export const profiles: Profile[] = [
  { userId: 'u1', headline: 'Account Manager • Sales Ops', summary: 'Credible, data-driven, people-first', skills: ['Sales Strategy', 'Account Mgmt', 'Negotiation'], visibility: 'public' },
  { userId: 'u2', headline: 'Senior AE • Team Lead', summary: 'Mentor, closer, process-driven', skills: ['Negotiation', 'Leadership', 'Coaching'], visibility: 'public' },
  { userId: 'u3', headline: 'Product Manager • B2B SaaS', summary: 'Strategic thinker, customer-focused', skills: ['Project Management', 'Communication', 'Problem Solving', 'Collaboration'], visibility: 'public' },
  { userId: 'u4', headline: 'Engineering Manager • Platform', summary: 'Technical leader, team builder', skills: ['Project Management', 'Communication', 'Problem Solving', 'Collaboration'], visibility: 'public' },
  { userId: 'u5', headline: 'UX Designer • Consumer Apps', summary: 'User advocate, design systems expert', skills: ['Project Management', 'Communication', 'Problem Solving', 'Collaboration'], visibility: 'public' },
  { userId: 'u6', headline: 'VP of Operations • Growth Stage', summary: 'Process optimizer, scaling expert', skills: ['Project Management', 'Communication', 'Problem Solving', 'Collaboration'], visibility: 'public' },
  { userId: 'u7', headline: 'Marketing Director • Digital', summary: 'Data-driven storyteller', skills: ['Project Management', 'Communication', 'Problem Solving', 'Collaboration'], visibility: 'public' },
  { userId: 'u8', headline: 'Senior Developer • Full Stack', summary: 'Problem solver, clean code advocate', skills: ['Project Management', 'Communication', 'Problem Solving', 'Collaboration'], visibility: 'public' },
  { userId: 'u9', headline: 'HR Manager • Talent Development', summary: 'People champion, culture builder', skills: ['Project Management', 'Communication', 'Problem Solving', 'Collaboration'], visibility: 'public' },
  { userId: 'u10', headline: 'Data Analyst • Business Intelligence', summary: 'Numbers storyteller, insights driver', skills: ['Project Management', 'Communication', 'Problem Solving', 'Collaboration'], visibility: 'public' },
  { userId: 'u11', headline: 'Customer Success Lead', summary: 'Client advocate, retention expert', skills: ['Project Management', 'Communication', 'Problem Solving', 'Collaboration'], visibility: 'public' },
  { userId: 'u12', headline: 'Solutions Architect • Enterprise', summary: 'Technical consultant, bridge builder', skills: ['Project Management', 'Communication', 'Problem Solving', 'Collaboration'], visibility: 'public' },
  { userId: 'u13', headline: 'Finance Manager • FP&A', summary: 'Strategic planner, detail-oriented', skills: ['Project Management', 'Communication', 'Problem Solving', 'Collaboration'], visibility: 'public' },
  { userId: 'u14', headline: 'Sales Engineer • Technical', summary: 'Demo expert, solution finder', skills: ['Project Management', 'Communication', 'Problem Solving', 'Collaboration'], visibility: 'public' },
];

export const ratings: SkillRating[] = [
  { id: 'r1', subjectUserId: 'u1', verifierUserId: 'u2', skill: 'Account Mgmt', stars: 5, rationale: 'Client retention 92%', relation: 'peer', createdAt: '2025-11-01' },
  { id: 'r2', subjectUserId: 'u1', verifierUserId: 'u2', skill: 'Negotiation',  stars: 4, rationale: 'Clear outcomes with clients', relation: 'peer', createdAt: '2025-10-12' },
  { id: 'r3', subjectUserId: 'u2', verifierUserId: 'u1', skill: 'Leadership',   stars: 5, rationale: 'Coaches team effectively', relation: 'peer', createdAt: '2025-10-20' },
  
  { id: 'r4', subjectUserId: 'u3', verifierUserId: 'u4', skill: 'Project Management', stars: 5, rationale: 'Delivered 3 major releases on time', relation: 'manager', createdAt: '2025-10-28' },
  { id: 'r5', subjectUserId: 'u3', verifierUserId: 'u5', skill: 'Communication', stars: 4, rationale: 'Clear stakeholder updates', relation: 'peer', createdAt: '2025-09-15' },
  { id: 'r6', subjectUserId: 'u3', verifierUserId: 'u6', skill: 'Problem Solving', stars: 5, rationale: 'Unblocked critical path issues', relation: 'peer', createdAt: '2025-08-22' },
  
  { id: 'r7', subjectUserId: 'u4', verifierUserId: 'u3', skill: 'Project Management', stars: 4, rationale: 'Manages team roadmap well', relation: 'peer', createdAt: '2025-10-05' },
  { id: 'r8', subjectUserId: 'u4', verifierUserId: 'u8', skill: 'Collaboration', stars: 5, rationale: 'Great cross-functional partner', relation: 'other', createdAt: '2025-09-10' },
  
  { id: 'r9', subjectUserId: 'u5', verifierUserId: 'u3', skill: 'Communication', stars: 5, rationale: 'Presents designs clearly to all levels', relation: 'peer', createdAt: '2025-10-18' },
  { id: 'r10', subjectUserId: 'u5', verifierUserId: 'u9', skill: 'Problem Solving', stars: 4, rationale: 'Creative solutions to UX challenges', relation: 'peer', createdAt: '2025-08-30' },
  { id: 'r11', subjectUserId: 'u5', verifierUserId: 'u4', skill: 'Collaboration', stars: 5, rationale: 'Works well with engineering', relation: 'peer', createdAt: '2025-09-25' },
  
  { id: 'r12', subjectUserId: 'u6', verifierUserId: 'u7', skill: 'Project Management', stars: 5, rationale: 'Scaled operations smoothly', relation: 'peer', createdAt: '2025-10-12' },
  { id: 'r13', subjectUserId: 'u6', verifierUserId: 'u4', skill: 'Problem Solving', stars: 4, rationale: 'Solves complex process issues', relation: 'other', createdAt: '2025-09-08' },
  
  { id: 'r14', subjectUserId: 'u7', verifierUserId: 'u6', skill: 'Communication', stars: 5, rationale: 'Excellent at storytelling with data', relation: 'manager', createdAt: '2025-10-22' },
  { id: 'r15', subjectUserId: 'u7', verifierUserId: 'u11', skill: 'Project Management', stars: 4, rationale: 'Manages campaigns effectively', relation: 'peer', createdAt: '2025-09-18' },
  { id: 'r16', subjectUserId: 'u7', verifierUserId: 'u3', skill: 'Collaboration', stars: 3, rationale: 'Good partner on product launches', relation: 'peer', createdAt: '2025-08-14' },
  
  { id: 'r17', subjectUserId: 'u8', verifierUserId: 'u4', skill: 'Problem Solving', stars: 5, rationale: 'Debugs complex issues quickly', relation: 'manager', createdAt: '2025-10-30' },
  { id: 'r18', subjectUserId: 'u8', verifierUserId: 'u12', skill: 'Collaboration', stars: 4, rationale: 'Great pair programmer', relation: 'peer', createdAt: '2025-09-22' },
  
  { id: 'r19', subjectUserId: 'u9', verifierUserId: 'u6', skill: 'Communication', stars: 5, rationale: 'Empathetic and clear communicator', relation: 'manager', createdAt: '2025-10-15' },
  { id: 'r20', subjectUserId: 'u9', verifierUserId: 'u7', skill: 'Project Management', stars: 4, rationale: 'Runs smooth onboarding programs', relation: 'peer', createdAt: '2025-09-12' },
  { id: 'r21', subjectUserId: 'u9', verifierUserId: 'u5', skill: 'Problem Solving', stars: 4, rationale: 'Resolves team conflicts well', relation: 'peer', createdAt: '2025-08-28' },
  
  { id: 'r22', subjectUserId: 'u10', verifierUserId: 'u6', skill: 'Problem Solving', stars: 5, rationale: 'Finds insights in complex data', relation: 'manager', createdAt: '2025-10-25' },
  { id: 'r23', subjectUserId: 'u10', verifierUserId: 'u7', skill: 'Communication', stars: 3, rationale: 'Clear dashboard presentations', relation: 'peer', createdAt: '2025-09-05' },
  
  { id: 'r24', subjectUserId: 'u11', verifierUserId: 'u6', skill: 'Communication', stars: 5, rationale: 'Excellent customer advocate', relation: 'manager', createdAt: '2025-10-20' },
  { id: 'r25', subjectUserId: 'u11', verifierUserId: 'u3', skill: 'Problem Solving', stars: 4, rationale: 'Resolves escalations smoothly', relation: 'peer', createdAt: '2025-09-16' },
  { id: 'r26', subjectUserId: 'u11', verifierUserId: 'u7', skill: 'Collaboration', stars: 5, rationale: 'Great partner on renewals', relation: 'peer', createdAt: '2025-08-19' },
  
  { id: 'r27', subjectUserId: 'u12', verifierUserId: 'u4', skill: 'Project Management', stars: 4, rationale: 'Manages client implementations well', relation: 'peer', createdAt: '2025-10-10' },
  { id: 'r28', subjectUserId: 'u12', verifierUserId: 'u8', skill: 'Problem Solving', stars: 5, rationale: 'Solves complex technical challenges', relation: 'peer', createdAt: '2025-09-20' },
  
  { id: 'r29', subjectUserId: 'u13', verifierUserId: 'u6', skill: 'Project Management', stars: 5, rationale: 'Excellent budget planning and tracking', relation: 'manager', createdAt: '2025-10-28' },
  { id: 'r30', subjectUserId: 'u13', verifierUserId: 'u7', skill: 'Communication', stars: 4, rationale: 'Clear financial reporting', relation: 'peer', createdAt: '2025-09-14' },
  { id: 'r31', subjectUserId: 'u13', verifierUserId: 'u3', skill: 'Collaboration', stars: 3, rationale: 'Helpful on P&L reviews', relation: 'peer', createdAt: '2025-08-25' },
  
  { id: 'r32', subjectUserId: 'u14', verifierUserId: 'u2', skill: 'Communication', stars: 5, rationale: 'Exceptional demo delivery', relation: 'peer', createdAt: '2025-10-18' },
  { id: 'r33', subjectUserId: 'u14', verifierUserId: 'u11', skill: 'Problem Solving', stars: 4, rationale: 'Handles technical objections well', relation: 'peer', createdAt: '2025-09-11' },
];

export const standouts: Standout[] = [
  { id: 's1', subjectUserId: 'u1', verifierUserId: 'u2', text: 'James is the glue in cross‑team projects; he unblocks others fast.', createdAt: '2025-10-30' },
];

export const workHistory: WorkHistory[] = [
  { id: 'w1', userId: 'u1', org: 'Acme Corp', title: 'Account Manager', start: 'Jan 2023', description: 'Managing key accounts and sales operations' },
  { id: 'w2', userId: 'u1', org: 'StartupXYZ', title: 'Sales Associate', start: 'Jun 2021', end: 'Dec 2022', description: 'Early-stage sales and customer success' },
  { id: 'w3', userId: 'u2', org: 'SalesCo', title: 'Senior AE', start: 'Mar 2022', description: 'Leading sales team and coaching new hires' },
  { id: 'w4', userId: 'u2', org: 'TechVentures', title: 'Account Executive', start: 'Aug 2019', end: 'Feb 2022' },
  { id: 'w5', userId: 'u3', org: 'CloudTech Inc', title: 'Product Manager', start: 'Mar 2022', description: 'B2B SaaS platform development' },
  { id: 'w6', userId: 'u3', org: 'DataFlow', title: 'Associate PM', start: 'Jun 2020', end: 'Feb 2022', description: 'Product analytics tools' },
  { id: 'w7', userId: 'u4', org: 'Platform Labs', title: 'Engineering Manager', start: 'Jan 2023', description: 'Leading 8-person platform team' },
  { id: 'w8', userId: 'u4', org: 'DevOps Co', title: 'Senior Engineer', start: 'Aug 2019', end: 'Dec 2022', description: 'Infrastructure and tooling' },
  { id: 'w9', userId: 'u5', org: 'AppStudio', title: 'UX Designer', start: 'Apr 2022', description: 'Consumer mobile apps' },
  { id: 'w10', userId: 'u5', org: 'DesignHub', title: 'Junior Designer', start: 'Sep 2020', end: 'Mar 2022' },
  { id: 'w11', userId: 'u6', org: 'GrowthCo', title: 'VP of Operations', start: 'Feb 2021', description: 'Scaling ops from 50 to 200 employees' },
  { id: 'w12', userId: 'u6', org: 'LogisticsPro', title: 'Director of Ops', start: 'May 2018', end: 'Jan 2021' },
  { id: 'w13', userId: 'u7', org: 'MarketBoost', title: 'Marketing Director', start: 'Jun 2022', description: 'Digital marketing and growth' },
  { id: 'w14', userId: 'u7', org: 'BrandWorks', title: 'Marketing Manager', start: 'Jan 2020', end: 'May 2022' },
  { id: 'w15', userId: 'u8', org: 'CodeCraft', title: 'Senior Developer', start: 'May 2021', description: 'Full-stack web applications' },
  { id: 'w16', userId: 'u8', org: 'WebStartup', title: 'Developer', start: 'Jul 2019', end: 'Apr 2021' },
  { id: 'w17', userId: 'u9', org: 'TalentFirst', title: 'HR Manager', start: 'Mar 2022', description: 'Learning and development programs' },
  { id: 'w18', userId: 'u9', org: 'PeopleOps Co', title: 'HR Coordinator', start: 'Oct 2019', end: 'Feb 2022' },
  { id: 'w19', userId: 'u10', org: 'DataInsights', title: 'Data Analyst', start: 'Apr 2022', description: 'Business intelligence and reporting' },
  { id: 'w20', userId: 'u10', org: 'Analytics Inc', title: 'Junior Analyst', start: 'Aug 2020', end: 'Mar 2022' },
  { id: 'w21', userId: 'u11', org: 'SuccessPro', title: 'Customer Success Lead', start: 'Feb 2023', description: 'Enterprise customer accounts' },
  { id: 'w22', userId: 'u11', org: 'SupportHub', title: 'CS Manager', start: 'May 2020', end: 'Jan 2023' },
  { id: 'w23', userId: 'u12', org: 'CloudSolutions', title: 'Solutions Architect', start: 'Jan 2022', description: 'Enterprise technical consulting' },
  { id: 'w24', userId: 'u12', org: 'TechConsult', title: 'Technical Consultant', start: 'Sep 2019', end: 'Dec 2021' },
  { id: 'w25', userId: 'u13', org: 'FinanceCorp', title: 'Finance Manager', start: 'Jun 2022', description: 'FP&A and strategic planning' },
  { id: 'w26', userId: 'u13', org: 'AccountingPro', title: 'Financial Analyst', start: 'Apr 2019', end: 'May 2022' },
  { id: 'w27', userId: 'u14', org: 'TechSales Inc', title: 'Sales Engineer', start: 'Mar 2023', description: 'Technical demos and POCs' },
  { id: 'w28', userId: 'u14', org: 'SaaS Ventures', title: 'Solutions Engineer', start: 'Jul 2020', end: 'Feb 2023' },
];

export const education: Education[] = [
  { id: 'e1', userId: 'u1', org: 'State University', degree: 'BS Business Administration', start: '2017', end: '2021' },
  { id: 'e2', userId: 'u2', org: 'City College', degree: 'BA Communication', start: '2015', end: '2019' },
  { id: 'e3', userId: 'u3', org: 'Tech University', degree: 'BS Computer Science', start: '2016', end: '2020' },
  { id: 'e4', userId: 'u4', org: 'Engineering Institute', degree: 'BS Software Engineering', start: '2015', end: '2019' },
  { id: 'e5', userId: 'u5', org: 'Design Academy', degree: 'BFA Interaction Design', start: '2016', end: '2020' },
  { id: 'e6', userId: 'u6', org: 'Business School', degree: 'MBA Operations Management', start: '2014', end: '2018' },
  { id: 'e7', userId: 'u7', org: 'Marketing College', degree: 'BA Marketing', start: '2016', end: '2020' },
  { id: 'e8', userId: 'u8', org: 'Code University', degree: 'BS Computer Science', start: '2015', end: '2019' },
  { id: 'e9', userId: 'u9', org: 'Human Resources Institute', degree: 'BA Human Resources', start: '2015', end: '2019' },
  { id: 'e10', userId: 'u10', org: 'Data Science Academy', degree: 'BS Statistics', start: '2016', end: '2020' },
  { id: 'e11', userId: 'u11', org: 'Service College', degree: 'BA Business Management', start: '2016', end: '2020' },
  { id: 'e12', userId: 'u12', org: 'Technical University', degree: 'BS Information Systems', start: '2015', end: '2019' },
  { id: 'e13', userId: 'u13', org: 'Finance University', degree: 'BS Finance', start: '2015', end: '2019' },
  { id: 'e14', userId: 'u14', org: 'Sales Institute', degree: 'BA Business', start: '2016', end: '2020' },
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
