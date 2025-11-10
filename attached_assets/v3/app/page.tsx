import Link from "next/link";
import Header from "@/components/Header";

export default function Page(){
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-6">
        <section className="card p-6">
          <h1 className="text-2xl font-semibold">Proofly</h1>
          <p className="text-slate-600 mt-2">Verified references & skill ratings with credible, explainable proof.</p>
          <div className="mt-6 flex gap-2">
            <Link href="/u/james" className="btn btn-primary">View a profile</Link>
            <Link href="/verify" className="btn">Verify someone</Link>
          </div>
          <ul className="mt-6 text-sm text-slate-700 list-disc list-inside">
            <li>Proofly Score motivates high-quality engagement with a sliding gradient bar</li>
            <li>Weighted credibility (manager > peer) + time decay</li>
            <li>“How they stand out” highlight stories</li>
            <li>Optional MBTI connection for cultural fit context</li>
          </ul>
        </section>
        <section className="card p-6">
          <h2 className="text-lg font-medium">Why this matters</h2>
          <p className="text-slate-600 mt-2">Reference calls are slow and shallow. Proofly gives a verified, in‑depth view of skills and culture fit — instantly.</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="card p-3"><div className="font-medium">Trust</div><div className="text-slate-600">Identity-verified raters</div></div>
            <div className="card p-3"><div className="font-medium">Signal</div><div className="text-slate-600">Qual + quant, weighted</div></div>
            <div className="card p-3"><div className="font-medium">Speed</div><div className="text-slate-600">Share a link, not a phone tree</div></div>
            <div className="card p-3"><div className="font-medium">Privacy</div><div className="text-slate-600">Employer-only snapshots</div></div>
          </div>
        </section>
      </main>
    </div>
  );
}
