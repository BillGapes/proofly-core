'use client';
export default function ProoflyScoreDetails({ onClose }:{ onClose: ()=>void }){
  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-card">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">Proofly Score – Calculation & Tips</h3>
          <button className="btn" onClick={onClose}>Close</button>
        </div>
        <div className="mt-3 text-sm text-slate-700 space-y-3">
          <div>
            <div className="font-medium">What affects your score</div>
            <ul className="list-disc list-inside text-slate-700">
              <li><strong>Average star ratings</strong> (1–5★), weighted by <em>relationship</em> (manager &gt; peer &gt; classmate) and <em>recency</em>.</li>
              <li><strong>Volume</strong> of verified ratings (saturates around ~15 recent ratings).</li>
              <li><strong>Standout stories</strong> (short qualitative highlights).</li>
              <li><strong>Recent activity</strong> (fresh verifications lift your score).</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Quick ways to increase it</div>
            <ul className="list-disc list-inside">
              <li>Request <strong>manager</strong> verifications for your top 2–3 skills.</li>
              <li>Invite <strong>peers</strong> who worked with you recently.</li>
              <li>Add a concise <strong>Standout story</strong> that names outcomes (e.g., “92% retention”).</li>
              <li>Keep activity <strong>fresh</strong> — new verifications have extra weight.</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Weighting (v1 heuristic)</div>
            <ul className="list-disc list-inside">
              <li>Stars × Relation Weight × Recency Decay (half‑life ≈ 18 months)</li>
              <li>Stars: 55% • Volume: 20% • Stories: 10% • Freshness: 15%</li>
            </ul>
          </div>
          <div className="text-xs text-slate-500">
            Tip: Press <kbd>V</kbd> to open your verification request dialog (coming soon).
          </div>
        </div>
      </div>
    </>
  );
}
