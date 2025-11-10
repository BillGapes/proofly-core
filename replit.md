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
│   ├── globals.css           # Global Tailwind styles
│   ├── u/[handle]/           # User profile pages
│   ├── verify/               # Verification request page
│   └── employer/[token]/     # Employer snapshot view
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Card.tsx              # Reusable card component
│   └── Stars.tsx             # Star rating component
└── lib/
    ├── types.ts              # TypeScript type definitions
    └── mock.ts               # Mock data layer (to be replaced with DB)
```

## Key Features
- **Identity Verification**: ID-verified profiles for trust
- **Skill Ratings**: 1-5 star ratings with written rationale required
- **Weighted Credibility**: Manager ratings > peer > classmate, with time decay
- **Standout Stories**: Qualitative highlights of unique strengths
- **Employer Snapshots**: Secure token-based read-only views

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
