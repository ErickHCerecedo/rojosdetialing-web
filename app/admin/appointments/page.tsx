import { APPOINTMENTS } from "@/lib/data";
import { statusColor } from "@/lib/admin-status";

export default function AdminAppointmentsPage() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="grid grid-cols-[90px_1.4fr_1.4fr_1.4fr_130px_90px] gap-4 border-b border-line px-[22px] py-4 text-xs font-bold uppercase tracking-[0.5px] text-faint">
        <span>Time</span>
        <span>Customer</span>
        <span>Vehicle</span>
        <span>Service</span>
        <span>Status</span>
        <span className="text-right">Amount</span>
      </div>
      {APPOINTMENTS.map((a, i) => {
        const sc = statusColor(a.status);
        return (
          <div
            key={i}
            className="grid grid-cols-[90px_1.4fr_1.4fr_1.4fr_130px_90px] items-center gap-4 border-b border-[#141414] px-[22px] py-[18px] text-sm"
          >
            <span className="font-semibold text-muted-foreground">{a.time}</span>
            <span className="font-semibold">{a.customer}</span>
            <span className="text-muted-foreground">{a.vehicle}</span>
            <span className="text-muted-foreground">{a.service}</span>
            <span>
              <span className="whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-bold" style={{ color: sc.color, background: sc.bg }}>
                {a.status}
              </span>
            </span>
            <span className="text-right font-heading font-bold">{a.amount}</span>
          </div>
        );
      })}
    </div>
  );
}
