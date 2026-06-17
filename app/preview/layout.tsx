import Link from "next/link";

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-ink">
      <div className="border-b border-line bg-surface-2 px-5 py-3 text-center text-[13px] text-faint">
        Internal handoff reference — not linked from the public site ·{" "}
        <Link href="/" className="font-semibold text-brand-light">
          ← Back to site
        </Link>
      </div>
      {children}
    </div>
  );
}
