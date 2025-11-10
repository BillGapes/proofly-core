import Header from "@/components/Header";
import Card from "@/components/Card";
import Stars from "@/components/Stars";
import ProoflyScore from "@/components/ProoflyScore";
import MBTIConnect from "@/components/MBTIConnect";
import { users, profiles, workHistory, education, ratings, standouts, weightedSkillAverage } from "@/lib/mock";
import { computeProoflyScore } from "@/lib/score";
import Link from "next/link";

export default function ProfilePage({ params }: { params: { handle: string } }){
  const user = users.find(u => u.handle === params.handle);
  if (!user) return <div className="p-8">User not found.</div>;
  const profile = profiles.find(p => p.userId === user.id);
  const myRatings = ratings.filter(r => r.subjectUserId === user.id);
  const skills = Array.from(new Set(myRatings.map(r => r.skill).concat(profile?.skills ?? [])));
  const score = computeProoflyScore(user.id);

  return (
    <div>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-3 gap-6">
        <section className="md:col-span-2 space-y-4">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold">{user.name}</h1>
                <p className="text-slate-600">{profile?.headline}</p>
              </div>
              <span className="badge">{user.kycStatus === 'verified' ? 'ID Verified' : 'Unverified'}</span>
            </div>
            <p className="text-sm text-slate-600 mt-4">{profile?.summary}</p>
          </Card>

          <ProoflyScore value={score} />

          <Card>
            <h2 className="font-medium">Skills</h2>
            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              {skills.map((s) => {
                const avg = weightedSkillAverage(user.id, s);
                return (
                  <div key={s} className="p-3 rounded-xl border border-slate-200 bg-white/70">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{s}</div>
                      <div className="text-sm text-slate-600">{avg ? `${avg} / 5` : '—'}</div>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">weighted by relation + recency</div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card>
            <h2 className="font-medium">Standout stories</h2>
            <ul className="mt-3 space-y-3">
              {standouts.filter(s => s.subjectUserId === user.id).map(s => (
                <li key={s.id} className="p-3 rounded-xl border border-slate-200 bg-white/70">{s.text}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="font-medium">Work history</h2>
            <ul className="mt-3 space-y-2">
              {workHistory.filter(w => w.userId === user.id).map(w => (
                <li key={w.id} className="p-3 rounded-xl border border-slate-200 bg-white/70">
                  <div className="font-medium">{w.title} • {w.org}</div>
                  <div className="text-sm text-slate-600">{w.start} — {w.end ?? 'Present'}</div>
                  {w.description && <p className="text-sm text-slate-700 mt-1">{w.description}</p>}
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="font-medium">Education</h2>
            <ul className="mt-3 space-y-2">
              {education.filter(e => e.userId === user.id).map(e => (
                <li key={e.id} className="p-3 rounded-xl border border-slate-200 bg-white/70">
                  <div className="font-medium">{e.degree} • {e.org}</div>
                  <div className="text-sm text-slate-600">{e.start} — {e.end ?? 'Present'}</div>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        <aside className="space-y-4">
          <Card>
            <div className="font-medium">Verify {user.name}</div>
            <form className="mt-3 space-y-3">
              <div className="flex flex-col gap-1">
                <label>Skill</label>
                <input placeholder="e.g., Negotiation" />
              </div>
              <div className="flex flex-col gap-1">
                <label>Stars</label>
                <Stars />
              </div>
              <div className="flex flex-col gap-1">
                <label>Rationale</label>
                <textarea rows={4} placeholder="Explain why you gave this rating" />
              </div>
              <button className="btn btn-primary w-full" type="button">Submit verification</button>
            </form>
          </Card>

          <MBTIConnect />

          <Card>
            <div className="font-medium">Employer snapshot</div>
            <p className="text-sm text-slate-600 mt-2">Share read‑only view with a secure token.</p>
            <Link href="/employer/demo-token" className="btn w-full mt-2">Copy link</Link>
          </Card>
        </aside>
      </main>
    </div>
  );
}
