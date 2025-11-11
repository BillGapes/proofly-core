'use client';
import { useState } from 'react';
import Header from '@/components/Header';

export default function EmployerSearchPage(){
  const [skills, setSkills] = useState('Negotiation, Account Mgmt');
  const [minScore, setMinScore] = useState(60);
  const [useMBTI, setUseMBTI] = useState(false);
  const [employerMBTI, setEmployerMBTI] = useState('ENTP');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function search(){
    setLoading(true);
    const params = new URLSearchParams({
      skills,
      minScore: String(minScore),
      useMBTI: String(useMBTI),
      employerMBTI: useMBTI ? employerMBTI : ''
    });
    const res = await fetch(`/api/match?${params.toString()}`);
    const data = await res.json();
    setResults(data.results || []);
    setLoading(false);
  }

  return (
    <div>
      <Header />
      <main className="container">
        <div className="card">
          <h1 style={{marginTop:0}}>Employer Search</h1>
          <p>Find candidates ranked by Proofly Score, skill match, manager weight, recency, and optional MBTI fit.</p>

          <div className="row" style={{gridTemplateColumns:'1fr'}}>
            <div>
              <label>Required skills (comma separated)</label>
              <input className="input" value={skills} onChange={e=>setSkills(e.target.value)} />
            </div>
            <div>
              <label>Min Proofly Score: {minScore}</label>
              <input type="range" min={0} max={100} value={minScore} onChange={e=>setMinScore(Number(e.target.value))} style={{width:'100%'}} />
            </div>
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              <label>Use MBTI fit</label>
              <input type="checkbox" checked={useMBTI} onChange={e=>setUseMBTI(e.target.checked)} />
              {useMBTI && (<><span>Your MBTI</span><input className="input" style={{maxWidth:90}} value={employerMBTI} onChange={e=>setEmployerMBTI(e.target.value.toUpperCase())} /></>)}
            </div>
            <div><button className="btn" onClick={search} disabled={loading}>{loading?'Searching…':'Search'}</button></div>
          </div>
        </div>

        <div className="row" style={{marginTop:16}}>
          {results.length===0 && <div className="card">No results yet — try searching.</div>}
          {results.map((r:any)=>(
            <div key={r.userId} className="card">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{fontWeight:600}}>{r.name}</div>
                <div style={{color:'#64748b'}}>Overall Rank: <b>{r.rank}</b></div>
              </div>
              <div style={{marginTop:6,fontSize:14,color:'#111827'}}>
                Proofly: <b>{r.prooflyScore}</b> • Skill match: <b>{r.skillMatch}%</b> • Manager weight: <b>{r.managerShare}%</b> • Recency: <b>{r.recency}%</b> • MBTI fit: <b>{r.cultureFit}%</b>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
