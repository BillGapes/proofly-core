# Proofly v3 (Next.js + Tailwind)

New:
- **Proofly Score Details modal**: explains the calculation + clear tips to increase score.
- **Proofly Score** bar (0–100) with sliding gradient + tier labels.
- **MBTI Connect** optional cultural-fit panel (mock connector for demo).

## Replit Instructions
1) Create/open your Replit (Next.js or Node.js).
2) Upload this ZIP and overwrite existing files.
3) Run `npm install` then `npm run dev`.
4) Visit `/u/james` to see the Score, the **How is this calculated?** button, and the modal.

## Where to customize
- `components/ProoflyScoreDetails.tsx` — copy, weights, and guidance.
- `lib/score.ts` — tweak factor weights (stars/volume/stories/recency).
- `components/MBTIConnect.tsx` — replace mock with real OAuth flow later.
