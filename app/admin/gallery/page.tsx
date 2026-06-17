import { GALLERY } from "@/lib/data";

export default function AdminGalleryPage() {
  return (
    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex h-40 cursor-pointer flex-col items-center justify-center gap-2.5 rounded-2xl border-[1.5px] border-dashed border-[#2a2f3a] bg-surface-2 transition-all hover:border-brand-light hover:bg-[rgba(0,102,255,.04)]">
        <svg viewBox="0 0 24 24" fill="none" stroke="#1D8CFF" strokeWidth="1.7" width="26" height="26">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
        <span className="text-[13px] font-semibold text-muted-foreground">Upload Image</span>
      </div>
      {GALLERY.map((g, i) => (
        <div
          key={i}
          className="relative h-40 overflow-hidden rounded-2xl border border-line bg-[repeating-linear-gradient(125deg,#0b0d13_0,#0b0d13_16px,#0e111a_16px,#0e111a_32px)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(29,140,255,.14),transparent_65%)]" />
          <div className="absolute left-2.5 top-2.5 rounded-full bg-[rgba(0,102,255,.14)] px-[9px] py-1 text-[10px] font-bold text-brand-light">
            {g.category.toUpperCase()}
          </div>
          <div className="absolute right-2 top-2 flex gap-1.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[rgba(5,5,5,.7)] backdrop-blur-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" width="14" height="14">
                <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9z" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[rgba(5,5,5,.7)] backdrop-blur-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="1.7" width="14" height="14">
                <path d="M5 7h14M9 7V5h6v2M7 7l1 13h8l1-13" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(5,5,5,.9)] to-transparent p-3 text-xs font-semibold text-[#dbe4f0]">
            {g.label.en}
          </div>
        </div>
      ))}
    </div>
  );
}
