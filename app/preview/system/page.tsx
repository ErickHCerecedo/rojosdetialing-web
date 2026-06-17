const COLORS = [
  { name: "Primary Blue", hex: "#0066FF" },
  { name: "Electric Blue", hex: "#1D8CFF" },
  { name: "Dark BG", hex: "#050505" },
  { name: "Card BG", hex: "#101010" },
  { name: "Border", hex: "#1C1C1C" },
  { name: "Text Primary", hex: "#FFFFFF" },
  { name: "Text Secondary", hex: "#A8B3C5" },
];

export default function DesignSystemPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-5 py-14 md:px-7">
      <div className="mb-12">
        <div className="mb-3 text-[13px] font-bold uppercase tracking-[2px] text-brand-light">Design System</div>
        <h1 className="mb-2.5 font-heading text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-1px]">
          Design System
        </h1>
        <p className="max-w-[520px] text-base text-muted-foreground">
          Tokens, type, and components powering the Rojos platform.
        </p>
      </div>

      <h2 className="mb-[18px] font-heading text-xl font-bold">Color Tokens</h2>
      <div className="mb-12 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
        {COLORS.map((c) => (
          <div key={c.hex} className="overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="h-[84px] border-b border-line" style={{ background: c.hex }} />
            <div className="p-3.5">
              <div className="text-sm font-bold">{c.name}</div>
              <div className="mt-1 font-mono text-xs text-faint">{c.hex}</div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mb-[18px] font-heading text-xl font-bold">Typography</h2>
      <div className="mb-12 flex flex-col gap-[22px] rounded-2xl border border-line bg-surface p-7">
        <div className="flex items-baseline gap-5 border-b border-[#141414] pb-5">
          <span className="w-[130px] shrink-0 font-mono text-xs text-faint">Sora · 800</span>
          <span className="font-heading text-[40px] font-extrabold tracking-[-1px]">Display Heading</span>
        </div>
        <div className="flex items-baseline gap-5 border-b border-[#141414] pb-5">
          <span className="w-[130px] shrink-0 font-mono text-xs text-faint">Sora · 700</span>
          <span className="font-heading text-2xl font-bold">Section Title</span>
        </div>
        <div className="flex items-baseline gap-5 border-b border-[#141414] pb-5">
          <span className="w-[130px] shrink-0 font-mono text-xs text-faint">Manrope · 600</span>
          <span className="text-[17px] font-semibold">Body emphasis and labels</span>
        </div>
        <div className="flex items-baseline gap-5">
          <span className="w-[130px] shrink-0 font-mono text-xs text-faint">Manrope · 400</span>
          <span className="text-[15px] text-muted-foreground">
            Body copy — professional detailing delivered to your door.
          </span>
        </div>
      </div>

      <h2 className="mb-[18px] font-heading text-xl font-bold">Components</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-line bg-surface p-6">
          <div className="mb-4 text-[13px] font-semibold text-faint">Buttons</div>
          <div className="flex flex-col items-start gap-3">
            <button className="rounded-[11px] bg-gradient-to-br from-brand to-brand-light px-6 py-3 font-heading text-sm font-bold text-white shadow-[0_6px_20px_rgba(0,102,255,.4)]">
              Primary
            </button>
            <button className="rounded-[11px] border border-[#2a2f3a] bg-white/[0.02] px-6 py-3 font-heading text-sm font-bold text-white">
              Secondary
            </button>
            <button className="rounded-[11px] bg-[rgba(0,102,255,.1)] px-6 py-3 font-heading text-sm font-bold text-brand-light">
              Ghost
            </button>
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-6">
          <div className="mb-4 text-[13px] font-semibold text-faint">Badges &amp; Status</div>
          <div className="flex flex-wrap gap-2.5">
            <span className="rounded-full bg-gradient-to-br from-brand to-brand-light px-3.5 py-1.5 text-xs font-bold text-white">
              Most Popular
            </span>
            <span className="rounded-full bg-[rgba(61,220,132,.12)] px-3.5 py-1.5 text-xs font-bold text-success">
              Confirmed
            </span>
            <span className="rounded-full bg-[rgba(29,140,255,.14)] px-3.5 py-1.5 text-xs font-bold text-brand-light">
              In Progress
            </span>
            <span className="rounded-full bg-[rgba(245,166,35,.12)] px-3.5 py-1.5 text-xs font-bold text-warning">
              Pending
            </span>
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-6">
          <div className="mb-4 text-[13px] font-semibold text-faint">Input Field</div>
          <input
            placeholder="you@email.com"
            className="w-full rounded-[11px] border border-line bg-surface-2 px-[15px] py-3 text-[15px] text-white outline-none focus:border-brand-light"
          />
          <div className="mt-3.5 flex gap-2">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-line">
              <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-brand to-brand-light" />
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-6">
          <div className="mb-4 text-[13px] font-semibold text-faint">Radius &amp; Elevation</div>
          <div className="flex items-end gap-3.5">
            <div className="h-[60px] w-[60px] rounded-[11px] border border-line bg-surface-2" />
            <div className="h-[60px] w-[60px] rounded-2xl border border-line bg-surface-2 shadow-[0_12px_30px_rgba(0,0,0,.5)]" />
            <div className="h-[60px] w-[60px] rounded-full bg-gradient-to-br from-brand to-brand-light shadow-[0_0_30px_rgba(0,102,255,.5)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
