import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold">Proofly</Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/verify">Verify</Link>
          <Link href="/employer/demo-token">Employer View</Link>
          <Link href="/u/james">My Profile</Link>
        </nav>
      </div>
    </header>
  );
}
