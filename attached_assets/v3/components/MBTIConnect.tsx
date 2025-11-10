'use client';
import { useState, useEffect } from 'react';
export default function MBTIConnect(){
  const [connected, setConnected] = useState(false);
  const [type, setType] = useState<string | null>(null);

  useEffect(()=>{
    const saved = localStorage.getItem('mbti');
    if (saved) { const data = JSON.parse(saved); setConnected(true); setType(data.type); }
  }, []);

  function simulateConnect(){
    const t = prompt("Enter your MBTI result (e.g., ENTP, ISFJ):");
    if (t && /^[EI][NS][TF][JP]$/i.test(t.trim())) {
      const upper = t.toUpperCase();
      localStorage.setItem('mbti', JSON.stringify({ type: upper, verified: true, source: "MBTIonline.com" }));
      setType(upper); setConnected(true);
    } else if (t) { alert("Please enter a valid 4-letter MBTI type (e.g., ENTP)."); }
  }
  function disconnect(){ localStorage.removeItem('mbti'); setConnected(false); setType(null); }

  return (
    <div className="p-4 rounded-2xl border border-slate-200 bg-white/70">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-600">Cultural Fit (MBTI)</div>
          <div className="text-lg font-semibold">{connected ? type : "Not connected"}</div>
        </div>
        {connected ? <button className="btn" onClick={disconnect}>Disconnect</button>
                   : <button className="btn btn-primary" onClick={simulateConnect}>Connect MBTIonline</button>}
      </div>
      <p className="text-xs text-slate-600 mt-2">Optional: link MBTIonline.com results to enrich cultural fit insights.</p>
    </div>
  );
}
