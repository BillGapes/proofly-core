'use client';
import { useMemo, useState } from 'react';
import ProoflyScoreDetails from './ProoflyScoreDetails';

export default function ProoflyScore({ value=0 }:{ value?: number }){
  const [open, setOpen] = useState(false);
  const clamped = Math.max(0, Math.min(100, value));
  const gradient = `linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(14,165,233,1) ${clamped}%, rgba(226,232,240,1) ${clamped}%)`;
  const tier = useMemo(()=>{
    if (clamped >= 85) return { label: 'Elite', tip: 'Your trust graph is exceptional.' };
    if (clamped >= 70) return { label: 'Strong', tip: 'Great momentum—keep stacking verified ratings.' };
    if (clamped >= 50) return { label: 'Growing', tip: 'Add a manager verification to boost quickly.' };
    return { label: 'Early', tip: 'Invite 2–3 peers to verify skills to lift your score.' };
  }, [clamped]);

  return (
    <div className="p-4 rounded-2xl border border-slate-200 bg-white/70">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-600">Proofly Score</div>
          <div className="text-2xl font-semibold">
            {Math.round(clamped)}<span className="text-sm ml-1 text-slate-500">/100</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn" onClick={()=>setOpen(true)}>How is this calculated?</button>
          <div className="px-3 py-1 rounded-full text-xs bg-slate-900 text-white">{tier.label}</div>
        </div>
      </div>
      <div className="mt-3 h-3 w-full rounded-full overflow-hidden border border-slate-200" style={{ background: gradient }} />
      <div className="mt-2 text-xs text-slate-600">{tier.tip}</div>
      <div className="mt-3 flex gap-2">
        <button className="btn btn-primary">Request a manager verification</button>
        <button className="btn">Share profile</button>
      </div>
      {open && <ProoflyScoreDetails onClose={()=>setOpen(false)} />}
    </div>
  );
}
