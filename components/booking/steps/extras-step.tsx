"use client";

import { EXTRAS } from "@/lib/data";
import { money } from "@/lib/format";
import { useBooking } from "@/lib/booking-context";
import { useLanguage } from "@/lib/i18n";

export function ExtrasStep() {
  const { t, lang } = useLanguage();
  const { extraIds, toggleExtra } = useBooking();

  return (
    <>
      <h2 className="mb-1.5 font-heading text-2xl font-bold">{t.book.selExtras}</h2>
      <p className="mb-6 text-[15px] text-muted-foreground">{t.book.selExtrasSub}</p>
      <div className="flex flex-col gap-2.5">
        {EXTRAS.map((e) => {
          const active = extraIds.includes(e.id);
          return (
            <div
              key={e.id}
              onClick={() => toggleExtra(e.id)}
              className={`cursor-pointer rounded-2xl border transition-all ${
                active
                  ? "border-brand-light bg-[rgba(0,102,255,.07)] shadow-[0_0_0_1px_#1D8CFF,0_0_30px_rgba(0,102,255,.2)]"
                  : "border-line bg-surface"
              }`}
            >
              <div className="flex items-center gap-3.5 px-[18px] py-4">
                <div
                  className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[7px] text-[13px] text-white ${
                    active ? "border-transparent bg-gradient-to-br from-brand to-brand-light" : "border border-[#2a2f3a]"
                  }`}
                >
                  {active ? "✓" : ""}
                </div>
                <span className="flex-1 text-[15px] font-semibold">{e.name[lang]}</span>
                <span className="text-[15px] font-bold text-brand-light">+{money(e.price)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
