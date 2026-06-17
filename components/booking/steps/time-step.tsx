"use client";

import { TIME_SLOTS, useBooking } from "@/lib/booking-context";
import { useLanguage } from "@/lib/i18n";

export function TimeStep() {
  const { t } = useLanguage();
  const { time, setTime } = useBooking();

  return (
    <>
      <h2 className="mb-1.5 font-heading text-2xl font-bold">{t.book.selTime}</h2>
      <p className="mb-6 text-[15px] text-muted-foreground">{t.book.selTimeSub}</p>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {TIME_SLOTS.map((slot) => {
          const active = time === slot;
          return (
            <button
              key={slot}
              onClick={() => setTime(slot)}
              className={`rounded-xl border px-2 py-3.5 text-center text-sm font-semibold transition-all ${
                active
                  ? "border-transparent bg-gradient-to-br from-brand to-brand-light text-white shadow-[0_6px_20px_rgba(0,102,255,.4)]"
                  : "border-line bg-surface text-white"
              }`}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </>
  );
}
