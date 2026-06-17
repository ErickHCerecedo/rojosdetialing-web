"use client";

import { useMemo } from "react";
import { buildDates } from "@/lib/dates";
import { useBooking } from "@/lib/booking-context";
import { useLanguage } from "@/lib/i18n";

export function DateStep() {
  const { t, lang } = useLanguage();
  const { date, setDate } = useBooking();
  const dates = useMemo(() => buildDates(lang, 10), [lang]);

  return (
    <>
      <h2 className="mb-1.5 font-heading text-2xl font-bold">{t.book.selDate}</h2>
      <p className="mb-6 text-[15px] text-muted-foreground">{t.book.selDateSub}</p>
      <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-5">
        {dates.map((d) => {
          const active = date === d.key;
          return (
            <button
              key={d.key}
              onClick={() => setDate(d.key)}
              className={`flex flex-col items-center gap-0.5 rounded-xl border px-1.5 py-3.5 text-center font-semibold transition-all ${
                active
                  ? "border-transparent bg-gradient-to-br from-brand to-brand-light text-white shadow-[0_6px_20px_rgba(0,102,255,.4)]"
                  : "border-line bg-surface text-white"
              }`}
            >
              <span className="text-xs opacity-70">{d.dow}</span>
              <span className="font-heading text-xl font-extrabold">{d.day}</span>
              <span className="text-[11px] opacity-70">{d.mon}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
