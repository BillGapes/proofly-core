# Proofly - Verified Skills & References Platform

## Overview
Proofly is a Next.js application for credential and reference verification. It provides identity-verified profiles with skill ratings, weighted credibility scores, and standout stories.

## Tech Stack
- **Framework**: Next.js 16.0.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Framer Motion
- **Icons**: Lucide React

## Project Structure
```
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global Tailwind styles + modal/button styles
│   ├── u/[handle]/           # User profile pages
│   ├── verify/               # Verification request page
│   └── employer/[token]/     # Employer snapshot view
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Card.tsx              # Reusable card component
│   ├── Stars.tsx             # Star rating component
│   ├── ProoflyScore.tsx      # Score visualization (0-100 with gradient bar)
│   ├── ProoflyScoreDetails.tsx # Modal explaining score calculation
│   └── MBTIConnect.tsx       # MBTI cultural fit integration
└── lib/
    ├── types.ts              # TypeScript type definitions
    ├── mock.ts               # Mock data layer (to be replaced with DB)
    └── score.ts              # Proofly Score calculation logic
```

## Key Features
- **Identity Verification**: ID-verified profiles for trust
- **Skill Ratings**: 1-5 star ratings with written rationale required
- **Weighted Credibility**: Manager ratings > peer > classmate, with time decay
- **Standout Stories**: Qualitative highlights of unique strengths
- **Employer Snapshots**: Secure token-based read-only views
- **Proofly Score (v3)**: 0-100 engagement score with gradient visualization and tier badges
- **Profile Photos**: Avatar support with fallback to gradient initials
- **MBTI Connect (v3)**: Optional cultural fit integration via MBTIonline

## Routes
- `/` - Landing page with feature overview
- `/u/[handle]` - Public user profile (e.g., `/u/james`)
- `/verify` - Verification request management
- `/employer/[token]` - Employer-only snapshot view

## Development
- **Dev Server**: Running on port 5000 (configured for Replit)
- **Hot Reload**: Enabled via Next.js Fast Refresh
- **TypeScript**: Strict mode enabled

## Next Steps
1. Replace `lib/mock.ts` with real database (Supabase/PostgreSQL)
2. Add API routes for ratings, verifications, standouts
3. Implement identity verification (Stripe Identity/Persona)
4. Add row-level security for employer-only data
5. Build authentication system

## Recent Changes
- 2025-11-10: Initial setup with Proofly codebase
- 2025-11-10: Fixed JSX syntax error in landing page
- 2025-11-10: Configured Next.js for Replit environment (port 5000, host 0.0.0.0)
- 2025-11-10: Fixed Next.js 16 async params compatibility for dynamic routes
- 2025-11-10: **Upgraded to Proofly v3** with Proofly Score (0-100), tier system, calculation modal
- 2025-11-10: Added MBTI Connect component for cultural fit integration
- 2025-11-10: **Added profile photos** with avatar support and gradient fallbacks

## V3 Feature Details

### Proofly Score (0-100)
- **Calculation**: Weighted formula based on:
  - Stars Quality (55%): Average rating across skills
  - Volume (20%): Number of verifications received
  - Stories (10%): Standout testimonials count
  - Freshness (15%): Recent activity vs time decay
- **Tier System**:
  - Elite: 85+ (cyan gradient)
  - Strong: 70-84 (blue gradient)
  - Growing: 50-69 (indigo gradient)
  - Early: <50 (muted gradient)
- **Interactive Details**: Click "How is this calculated?" to see modal with tips

### Profile Photos
- Supports custom photo URLs via `User.photoUrl` field
- Fallback: Gradient avatars with user initials (indigo → cyan)
- Uses DiceBear avatars for demo data
- Appears on both profile pages and employer snapshots
