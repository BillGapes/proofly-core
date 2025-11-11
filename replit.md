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
│   ├── globals.css           # Global styles
│   ├── api/
│   │   └── match/route.ts    # Matching API endpoint (v4)
│   ├── employer/
│   │   ├── [token]/          # Employer snapshot view
│   │   └── search/page.tsx   # Employer search UI (v4)
│   ├── u/[handle]/           # User profile pages
│   └── verify/               # Verification request page
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
    ├── score.ts              # Proofly Score calculation logic
    └── match.ts              # Candidate matching algorithm (v4)
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
- **Employer Matching (v4)**: AI-powered candidate search and ranking by skills, score, manager weight, recency, and MBTI fit
- **Matching API (v4)**: RESTful endpoint for programmatic candidate search

## Routes
- `/` - Landing page with sign-up/login forms
- `/verify-email` - Email verification code input
- `/onboard/tour` - Welcome micro-tour (4 cards)
- `/onboard/setup` - Profile setup wizard (5 steps)
- `/u/[handle]` - Public user profile (e.g., `/u/james`)
- `/verify` - Verification request management
- `/employer/[token]` - Employer-only snapshot view
- `/employer/search` - Employer candidate search (v4)
- `/api/match` - Matching API endpoint (v4)

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
- 2025-11-11: **Upgraded to Proofly v4** with employer matching system, search UI, and ranking API
- 2025-11-11: Fixed Tailwind CSS loading issue - added @tailwind directives to globals.css for proper styling
- 2025-11-11: **Redesigned landing page** with engaging sign-up/login experience and colorful gradients
- 2025-11-11: **Added complete onboarding flow** - email verification, welcome tour, and profile setup wizard
- 2025-11-11: Updated "Weighted Ratings" copy to emphasize corporate hierarchy in review weight

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

## V4 Feature Details

### Employer Matching System
The v4 upgrade introduces a sophisticated candidate ranking system for employers:

**Matching Algorithm** (`lib/match.ts`):
- **Proofly Score (45%)**: Overall credibility and engagement
- **Skill Match (25%)**: Percentage of required skills possessed
- **Manager Weight (15%)**: Proportion of manager verifications
- **Recency (10%)**: Time decay of verifications (18-month half-life)
- **Cultural Fit (5%)**: Optional MBTI compatibility scoring

**Employer Search UI** (`/employer/search`):
- Interactive search form with skill input, score slider, and MBTI toggle
- Real-time candidate ranking and display
- Shows detailed breakdown: Proofly Score, skill match %, manager share %, recency %, MBTI fit %
- Responsive design with clean card-based layout

**Matching API** (`/api/match`):
- RESTful GET endpoint for programmatic access
- Query parameters: `skills` (comma-separated), `minScore`, `useMBTI`, `employerMBTI`
- Returns ranked candidates with detailed scoring metrics
- Example: `/api/match?skills=Negotiation,Account%20Mgmt&minScore=60&useMBTI=true&employerMBTI=ENTP`

## Onboarding Flow (v5)

### Email Verification (Simulated for MVP)
- **Current Implementation**: Email sending is simulated for MVP testing
- Verification code is displayed in browser alert and console (no real email sent)
- Code stored in sessionStorage for validation
- **Future**: Replace with Resend or SendGrid integration for production

### User Signup Journey
1. **Landing Page** (`/`)
   - Sign up form captures: Full Name, Email, Password
   - Generates 6-digit verification code
   - Shows code in alert (simulated email)
   - Redirects to `/verify-email`

2. **Email Verification** (`/verify-email`)
   - User enters 6-digit code
   - Resend code option available
   - Validates against sessionStorage
   - Redirects to `/onboard/tour` on success

3. **Welcome Tour** (`/onboard/tour`)
   - 4 swipeable cards with progress indicators (1/4...4/4)
   - Card 1: Welcome message
   - Card 2: Proofly Score explanation
   - Card 3: Employer value proposition
   - Card 4: Setup CTA
   - Final button redirects to `/onboard/setup`

4. **Profile Setup Wizard** (`/onboard/setup`)
   - 5-step form with progress bar and comprehensive validation
   - **Step 1**: Name + Professional Headline (both required)
   - **Step 2**: Skills selection (3-6 from 16 options) + Experience Level (both required)
   - **Step 3**: MBTI Type (optional, skippable)
   - **Step 4**: Photo URL + Bio/Summary (optional)
   - **Step 5**: Confirmation with starting Proofly Score (35/100)
   - **Validation Features**:
     - Real-time error display with red borders and inline messages
     - Errors clear automatically when users fix issues
     - Continue button disabled until required fields are filled
     - Skill selection enforced at 3-6 range with disabled state
     - "(maximum reached)" hint when 6 skills selected
   - Redirects to user profile after completion

### Data Storage (MVP)
- User data temporarily stored in sessionStorage
- **Note**: In production, integrate with PostgreSQL database and proper authentication
- New users need to be added to `lib/mock.ts` for persistence across sessions
