'use client';
import { useState } from 'react';

export default function Stars({ value=0, onChange }:{ value?: number; onChange?: (v:number)=>void }){
  const [v, setV] = useState(value);
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map(n => (
        <button key={n} onClick={()=>{ setV(n); onChange?.(n);}}
          className={n<=v ? 'text-yellow-500' : 'text-slate-300'} aria-label={`${n} star`}>
          ★
        </button>
      ))}
    </div>
  );
}
