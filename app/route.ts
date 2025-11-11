// app/api/match/route.ts
import { NextResponse } from 'next/server';
import { matchCandidates } from '@/lib/match';

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const skills = (searchParams.get('skills') || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);
  const minScore = Number(searchParams.get('minScore') || '0');
  const useMBTI = (searchParams.get('useMBTI') || 'false') === 'true';
  const employerMBTI = searchParams.get('employerMBTI') || null;

  const results = matchCandidates({ requiredSkills: skills, minScore, useMBTI, employerMBTI });
  return NextResponse.json({ results });
}
