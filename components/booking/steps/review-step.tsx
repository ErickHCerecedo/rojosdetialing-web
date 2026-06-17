"use client";

import { useMemo } from "react";
import { buildDates } from "@/lib/dates";
import { durationLabel, money } from "@/lib/format";
import { useBooking } from "@/lib/booking-context";
import { useLanguage } from "@/lib/i18n";

export function ReviewStep() {
  const { t, lang } = useLanguage();
  const { selectedService, selectedVehicle, selectedExtras, date, time } = useBooking();
  const dates = useMemo(() => buildDates(lang, 10), [lang]);
  const dateOption = dates.find((d) => d.key === date);
  const dateLabel = dateOption ? `${dateOption.dow}, ${dateOption.mon} ${dateOption.day}` : "—";

  return (
    <>
      <h2 className="mb-1.5 font-heading text-2xl font-bold">{t.book.review}</h2>
      <p className="mb-6 text-[15px] text-muted-foreground">{t.book.reviewSub}</p>
      <div className="flex flex-col gap-[18px] rounded-2xl border border-line bg-surface p-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="mb-1 text-[13px] text-faint">{t.book.s1}</div>
            <div className="font-heading text-[17px] font-bold">{selectedService ? selectedService.name[lang] : "—"}</div>
            <div className="mt-0.5 text-[13px] text-muted-foreground">
              {selectedService ? durationLabel(selectedService.durationMin) : "—"}
            </div>
          </div>
          <div className="font-heading text-[17px] font-bold">{selectedService ? money(selectedService.price) : "—"}</div>
        </div>
        <div className="h-px bg-line" />
        <div className="flex justify-between">
          <div>
            <div className="mb-1 text-[13px] text-faint">{t.book.s2}</div>
            <div className="text-[15px] font-semibold">{selectedVehicle ? selectedVehicle.name[lang] : "—"}</div>
          </div>
          <div className="font-bold text-brand-light">
            {selectedVehicle && selectedVehicle.add ? `+${money(selectedVehicle.add)}` : t.book.included}
          </div>
        </div>
        <div className="h-px bg-line" />
        <div className="flex flex-wrap gap-10">
          <div>
            <div className="mb-1 text-[13px] text-faint">{t.book.s3}</div>
            <div className="text-[15px] font-semibold">{dateLabel}</div>
          </div>
          <div>
            <div className="mb-1 text-[13px] text-faint">{t.book.s4}</div>
            <div className="text-[15px] font-semibold">{time ?? "—"}</div>
          </div>
        </div>
        {selectedExtras.length > 0 && (
          <>
            <div className="h-px bg-line" />
            <div>
              <div className="mb-2.5 text-[13px] text-faint">{t.book.addons}</div>
              <div className="flex flex-col gap-2">
                {selectedExtras.map((e) => (
                  <div key={e.id} className="flex justify-between text-sm">
                    <span className="text-[#dbe4f0]">{e.name[lang]}</span>
                    <span className="text-muted-foreground">{money(e.price)}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
