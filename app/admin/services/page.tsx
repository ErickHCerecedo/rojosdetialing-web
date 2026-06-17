import { SERVICES } from "@/lib/data";
import { durationLabel, money } from "@/lib/format";

export default function AdminServicesPage() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      {SERVICES.map((s) => (
        <div key={s.id} className="flex items-center gap-4 border-b border-[#141414] px-[22px] py-[18px] last:border-b-0">
          <div className="flex-1">
            <div className="font-heading text-base font-bold">{s.name.en}</div>
            <div className="mt-0.5 text-[13px] text-faint">{durationLabel(s.durationMin)}</div>
          </div>
          <div className="font-heading text-lg font-extrabold">{money(s.price)}</div>
          <div className="flex items-center gap-1.5 rounded-full bg-[rgba(61,220,132,.12)] px-[11px] py-[5px] text-xs font-bold text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Active
          </div>
          <button className="rounded-[9px] border border-line bg-surface-2 px-4 py-2 text-[13px] font-semibold text-muted-foreground transition-all hover:border-brand-light hover:text-white">
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}
