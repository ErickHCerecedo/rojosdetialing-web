import { REVIEW_QUEUE } from "@/lib/data";
import { statusColor } from "@/lib/admin-status";

export default function AdminReviewsPage() {
  return (
    <div className="flex flex-col gap-3.5">
      {REVIEW_QUEUE.map((r, i) => {
        const sc = statusColor(r.status === "Approved" ? "Confirmed" : "Pending");
        return (
          <div key={i} className="rounded-2xl border border-line bg-surface p-[22px]">
            <div className="mb-3.5 flex items-center gap-3">
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light font-heading text-base font-bold">
                {r.initial}
              </div>
              <div className="flex-1">
                <div className="text-[15px] font-semibold">{r.name}</div>
                <div className="text-xs text-faint">{r.vehicle}</div>
              </div>
              <span className="text-[15px] tracking-[1px] text-brand-light">{r.stars}</span>
              <span className="rounded-full px-2.5 py-1 text-xs font-bold" style={{ color: sc.color, background: sc.bg }}>
                {r.status}
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-[#dbe4f0]">{r.text}</p>
            <div className="flex gap-2">
              <button className="rounded-[9px] border border-[rgba(61,220,132,.25)] bg-[rgba(61,220,132,.1)] px-4 py-2 text-[13px] font-semibold text-success">
                Approve
              </button>
              <button className="rounded-[9px] border border-[rgba(29,140,255,.25)] bg-[rgba(0,102,255,.08)] px-4 py-2 text-[13px] font-semibold text-brand-light">
                Feature
              </button>
              <button className="rounded-[9px] border border-line bg-surface-2 px-4 py-2 text-[13px] font-semibold text-muted-foreground">
                Hide
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
