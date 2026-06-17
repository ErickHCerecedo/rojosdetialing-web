import { ADMIN_METRICS, APPOINTMENTS, REVENUE_BARS } from "@/lib/data";
import { statusColor } from "@/lib/admin-status";

export default function AdminDashboardPage() {
  return (
    <>
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {ADMIN_METRICS.map((m) => (
          <div key={m.label} className="rounded-2xl border border-line bg-surface p-5">
            <div className="mb-3 text-[13px] text-muted-foreground">{m.label}</div>
            <div className="flex items-end justify-between gap-2">
              <div className="font-heading text-[26px] font-extrabold leading-none">{m.value}</div>
              <div className="rounded-full bg-[rgba(61,220,132,.12)] px-2 py-[3px] text-xs font-bold text-success">
                {m.delta}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-line bg-surface p-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-heading text-base font-bold">Revenue · This Week</h3>
            <span className="text-[13px] font-bold text-brand-light">$6,420</span>
          </div>
          <div className="flex h-[180px] items-end gap-3">
            {REVENUE_BARS.map((b) => (
              <div key={b.day} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="flex h-full w-full items-end">
                  <div
                    className="w-full rounded-t-[7px] bg-gradient-to-t from-brand to-brand-light transition-[height]"
                    style={{ height: `${b.pct}%` }}
                  />
                </div>
                <span className="text-xs text-faint">{b.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-6">
          <h3 className="mb-[18px] font-heading text-base font-bold">Today&apos;s Appointments</h3>
          <div className="flex flex-col gap-3.5">
            {APPOINTMENTS.map((a, i) => {
              const sc = statusColor(a.status);
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-brand to-brand-light font-heading text-sm font-bold">
                    {a.initial}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold">{a.customer}</div>
                    <div className="text-xs text-faint">
                      {a.time} · {a.service}
                    </div>
                  </div>
                  <span
                    className="whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-bold"
                    style={{ color: sc.color, background: sc.bg }}
                  >
                    {a.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
