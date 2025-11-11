# Proofly v4 – Matching API + Employer Search (Next.js App Router)

This bundle adds:
- `/app/api/match/route.ts` – API endpoint for ranked candidates
- `/app/employer/search/page.tsx` – UI to search by skills, min score, and optional MBTI
- `/lib/score.ts` – Proofly Score heuristic
- `/lib/match.ts` – matching algorithm
- `/lib/mock.ts` – mock users, profiles, ratings

## Replit Setup
1) Create/open a **Node.js / Next.js** Repl.
2) Upload this ZIP (allow overwrite).
3) In the Shell, run:
   npm install
   npm run dev
4) Open the preview and visit `/employer/search`.

## API test example
/api/match?skills=Negotiation,Account%20Mgmt&minScore=50&useMBTI=true&employerMBTI=ENTP
