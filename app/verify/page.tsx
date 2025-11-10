import Header from "@/components/Header";
import Card from "@/components/Card";

export default function VerifyPage(){
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-2 gap-6">
        <Card>
          <h1 className="text-lg font-medium">Requests to verify</h1>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="p-3 rounded-xl border border-slate-200 bg-white/70">James asked you to verify “Account Mgmt” skill for 2024 project — <button className="btn btn-primary ml-2">Open</button></li>
          </ul>
        </Card>
        <Card>
          <h2 className="text-lg font-medium">Your outgoing requests</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="p-3 rounded-xl border border-slate-200 bg-white/70">Sent to Kelly • Work: Comparion Insurance role</li>
          </ul>
        </Card>
      </main>
    </div>
  );
}
