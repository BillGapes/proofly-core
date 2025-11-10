import Header from "@/components/Header";
import Card from "@/components/Card";
import { users, profiles, workHistory, education, ratings, standouts, weightedSkillAverage } from "@/lib/mock";

export default async function EmployerView({ params }: { params: Promise<{ token: string }> }){
  const { token } = await params;
  const user = users[0]; // demo
  const profile = profiles.find(p => p.userId === user.id);
  const grouped = groupBy(ratings.filter(r => r.subjectUserId === user.id), r => r.skill);

  return (
    <div>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
        <Card>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              {user.photoUrl ? (
                <img src={user.photoUrl} alt={user.name} className="w-16 h-16 rounded-full border-2 border-slate-200" />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white text-xl font-semibold">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm text-slate-500">Employer snapshot</div>
                  <h1 className="text-xl font-semibold">{user.name}</h1>
                  <p className="text-slate-600">{profile?.headline}</p>
                </div>
                <span className="badge flex-shrink-0">Token: {token}</span>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h2 className="font-medium">Skill summary</h2>
            <ul className="mt-3 space-y-2">
              {Object.keys(grouped).map(k => (
                <li key={k} className="p-3 rounded-xl border border-slate-200 bg-white/70 flex items-center justify-between">
                  <div className="font-medium">{k}</div>
                  <div className="text-sm text-slate-600">{weightedSkillAverage(user.id, k)} / 5</div>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="font-medium">Standout stories</h2>
            <ul className="mt-3 space-y-2">
              {standouts.filter(s => s.subjectUserId === user.id).map(s => (
                <li key={s.id} className="p-3 rounded-xl border border-slate-200 bg-white/70">{s.text}</li>
              ))}
            </ul>
          </Card>
        </div>

        <Card>
          <h2 className="font-medium">Experience & Education</h2>
          <div className="grid md:grid-cols-2 gap-3 mt-3">
            <div>
              <div className="text-sm text-slate-500 mb-1">Work</div>
              <ul className="space-y-2">
                {workHistory.filter(w => w.userId === user.id).map(w => (
                  <li key={w.id} className="p-3 rounded-xl border border-slate-200 bg-white/70">
                    <div className="font-medium">{w.title} • {w.org}</div>
                    <div className="text-sm text-slate-600">{w.start} — {w.end ?? 'Present'}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">Education</div>
              <ul className="space-y-2">
                {education.filter(e => e.userId === user.id).map(e => (
                  <li key={e.id} className="p-3 rounded-xl border border-slate-200 bg-white/70">
                    <div className="font-medium">{e.degree} • {e.org}</div>
                    <div className="text-sm text-slate-600">{e.start} — {e.end ?? 'Present'}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}

function groupBy<T>(arr: T[], fn: (x:T)=>string){
  return arr.reduce((acc:any, item:T) => {
    const k = fn(item);
    (acc[k] ||= []).push(item);
    return acc;
  }, {});
}
