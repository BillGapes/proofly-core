import Link from "next/link";
export default function Header(){
  return (
    <header style={{position:'sticky',top:0,backdropFilter:'blur(6px)',borderBottom:'1px solid #e5e7eb',background:'rgba(255,255,255,.85)'}}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Link href="/" style={{fontWeight:600}}>Proofly</Link>
        <nav style={{display:'flex',gap:16}}>
          <Link href="/employer/search">Employer Search</Link>
        </nav>
      </div>
    </header>
  );
}
