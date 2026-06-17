"use client";

import { useBooking } from "@/lib/booking-context";
import { useLanguage } from "@/lib/i18n";

export function Stepper() {
  const { t } = useLanguage();
  const { step } = useBooking();
  const labels = [t.book.s1, t.book.s2, t.book.s3, t.book.s4, t.book.s5, t.book.s6];
  const fillPct = (90 * (step - 1)) / 5;

  return (
    <div className="relative mx-auto mb-11 flex max-w-[760px] justify-between">
      <div className="absolute left-[6%] right-[6%] top-[18px] h-[2px] bg-line" />
      <div
        className="absolute left-[6%] top-[18px] h-[2px] bg-gradient-to-r from-brand to-brand-light"
        style={{ width: `${fillPct}%` }}
      />
      {labels.map((label, i) => {
        const n = i + 1;
        const active = step === n;
        const done = step > n;
        return (
          <div key={label} className="relative z-[2] flex flex-1 flex-col items-center">
            <div
              className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full font-heading text-sm font-bold transition-all ${
                active || done
                  ? "bg-gradient-to-br from-brand to-brand-light text-white"
                  : "border border-line bg-surface text-faint"
              } ${active ? "shadow-[0_0_0_4px_rgba(0,102,255,.18)]" : ""}`}
            >
              {done ? "✓" : n}
            </div>
            <div
              className={`mt-2 text-center text-xs font-semibold ${
                active || done ? "text-[#dbe4f0]" : "text-faint"
              }`}
            >
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
