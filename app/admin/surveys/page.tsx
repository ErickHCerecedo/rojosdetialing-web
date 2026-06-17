import { NPS_SCORE, SURVEY_BARS } from "@/lib/data";

export default function AdminSurveysPage() {
  return (
    <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[280px_1fr]">
      <div className="rounded-2xl border border-line-2 bg-[linear-gradient(135deg,rgba(0,102,255,.14),rgba(16,16,16,.4))] p-[26px] text-center">
        <div className="mb-2 text-[13px] text-muted-foreground">Net Promoter Score</div>
        <div className="font-heading text-[54px] font-extrabold leading-none text-brand-light">{NPS_SCORE}</div>
        <div className="mt-2 text-[13px] font-semibold text-success">Excellent · +6 this month</div>
      </div>
      <div className="rounded-2xl border border-line bg-surface p-[26px]">
        <h3 className="mb-1.5 font-heading text-base font-bold">Survey Results</h3>
        <p className="mb-[22px] text-[13px] text-faint">Auto-sent 24 hours after each completed service.</p>
        <div className="flex flex-col gap-[18px]">
          {SURVEY_BARS.map((s) => (
            <div key={s.label}>
              <div className="mb-2 flex justify-between gap-3 text-sm">
                <span className="whitespace-nowrap font-medium text-[#dbe4f0]">{s.label}</span>
                <span className="font-bold text-brand-light">{s.pct}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-line">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand to-brand-light"
                  style={{ width: `${s.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
