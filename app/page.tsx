import Header from "@/components/Header";
export default function Page(){
  return (
    <div>
      <Header />
      <main className="container">
        <div className="card">
          <h1 style={{marginTop:0}}>Proofly</h1>
          <p>Verified references & skill ratings with credible, explainable proof.</p>
          <ul>
            <li>Proofly Score (0–100) with weighted ratings and recency</li>
            <li>Employer matching by skills, score, manager weight, recency, and optional MBTI</li>
          </ul>
          <p><a className="btn" href="/employer/search">Try Employer Search</a></p>
        </div>
      </main>
    </div>
  );
}
