# Proofly (Next.js + Tailwind)

A web-first MVP for a credential/reference verifying platform:
- Identity-verified profiles
- 1–5 star skill ratings with required rationale
- Weighted credibility (manager > peer > classmate) + time decay
- “How they stand out” stories
- Employer snapshot view

## Quick start (Replit or local)

### Replit
1. Create a new **Node.js** or **Next.js** Repl.
2. Upload the contents of this folder (or the zip) into the repl.
3. Run `npm install` then `npm run dev`.
4. Open the web preview — you should see the Proofly landing page.

### Local
```bash
npm install
npm run dev
# visit http://localhost:3000
```

## Project structure
- `app/` — App Router pages (`/`, `/u/[handle]`, `/verify`, `/employer/[token]`)
- `components/` — UI primitives
- `lib/` — Types and a mock data layer (replace with Supabase/Postgres)
- `app/globals.css` — Tailwind styles

## Next steps
- Replace `lib/mock.ts` with a real DB and auth.
- Add POST routes: `/api/ratings`, `/api/verifications`, `/api/standouts`.
- Add identity verification (e.g., Stripe Identity/Persona).
- Row-level privacy (e.g., Supabase RLS) for employer-only data.
