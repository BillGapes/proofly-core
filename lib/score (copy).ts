import { ratings, standouts } from "@/lib/mock";
export function computeProoflyScore(userId: string): number {
  const my = ratings.filter(r => r.subjectUserId === userId);
  if (!my.length) return 20;
  const now = new Date().getTime();
  const halfLife = 1000 * 60 * 60 * 24 * 540;
  let starNum = 0, starDen = 0, freshBoost = 0;
  for (const r of my) {
    const age = now - new Date(r.createdAt).getTime();
    const decay = Math.pow(0.5, age / halfLife);
    const rel = r.relation === 'manager' ? 1.3 : r.relation === 'peer' ? 1.0 : r.relation === 'classmate' ? 0.8 : 0.9;
    starNum += r.stars * decay * rel;
    starDen += 5 * decay * rel;
    freshBoost += decay * 4;
  }
  const starPct = starDen ? (starNum / starDen) : 0;
  const volume = Math.min(1, my.length / 15);
  const stories = Math.min(1, (standouts.filter(s => s.subjectUserId === userId).length) / 5);
  const raw = (starPct * 0.55 + volume * 0.2 + stories * 0.1 + Math.min(1, freshBoost / 20) * 0.15) * 100;
  return Math.max(0, Math.min(100, Math.round(raw)));
}
