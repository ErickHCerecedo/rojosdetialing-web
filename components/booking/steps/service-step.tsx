"use client";

import { SERVICES } from "@/lib/data";
import { durationLabel, money } from "@/lib/format";
import { useBooking } from "@/lib/booking-context";
import { useLanguage } from "@/lib/i18n";

export function ServiceStep() {
  const { t, lang } = useLanguage();
  const { serviceId, setServiceId } = useBooking();

  return (
    <>
      <h2 className="mb-1.5 font-heading text-2xl font-bold">{t.book.selService}</h2>
      <p className="mb-6 text-[15px] text-muted-foreground">{t.book.selServiceSub}</p>
      <div className="flex flex-col gap-3">
        {SERVICES.map((s) => {
          const active = serviceId === s.id;
          return (
            <div
              key={s.id}
              onClick={() => setServiceId(s.id)}
              className={`cursor-pointer rounded-2xl border transition-all ${
                active
                  ? "border-brand-light bg-[rgba(0,102,255,.07)] shadow-[0_0_0_1px_#1D8CFF,0_0_30px_rgba(0,102,255,.2)]"
                  : "border-line bg-surface"
              }`}
            >
              <div className="flex items-center gap-[18px] p-5">
                <div className="flex-1">
                  <div className="mb-1.5 flex items-center gap-2.5">
                    <h3 className="font-heading text-lg font-bold">{s.name[lang]}</h3>
                    {s.popular && (
                      <span className="rounded-full bg-gradient-to-br from-brand to-brand-light px-[9px] py-[3px] text-[10px] font-bold uppercase tracking-[0.5px] text-white">
                        {t.services.popular}
                      </span>
                    )}
                  </div>
                  <p className="mb-2 text-sm leading-relaxed text-muted-foreground">{s.desc[lang]}</p>
                  <div className="flex items-center gap-1.5 text-[13px] text-faint">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" width="14" height="14">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    {durationLabel(s.durationMin)}
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-[11px] text-faint">{t.services.from}</div>
                  <div className="font-heading text-[22px] font-extrabold">{money(s.price)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
