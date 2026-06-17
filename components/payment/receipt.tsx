"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { buildDates } from "@/lib/dates";
import { money } from "@/lib/format";
import { useBooking } from "@/lib/booking-context";
import { useLanguage } from "@/lib/i18n";

export function Receipt() {
  const { t, lang } = useLanguage();
  const router = useRouter();
  const { selectedService, selectedVehicle, date, time, subtotal, deposit, balance, reset } = useBooking();
  const dates = useMemo(() => buildDates(lang, 10), [lang]);
  const dateOption = dates.find((d) => d.key === date);
  const dateLabel = dateOption ? `${dateOption.dow}, ${dateOption.mon} ${dateOption.day}` : "—";

  const handleBackHome = () => {
    reset();
    router.push("/");
  };

  return (
    <div className="mx-auto mt-5 max-w-[520px] text-center">
      <div className="mx-auto mb-6 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light shadow-[0_0_50px_rgba(0,102,255,.5)]">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
          <path d="M5 12l4.5 4.5L19 7" />
        </svg>
      </div>
      <h1 className="mb-2.5 font-heading text-[32px] font-extrabold tracking-[-1px]">{t.pay.success}</h1>
      <p className="mb-8 text-base text-muted-foreground">{t.pay.successSub}</p>

      <div className="mb-6 rounded-[18px] border border-line bg-surface p-[26px] text-left">
        <div className="mb-[18px] flex items-center justify-between border-b border-line pb-[18px]">
          <span className="font-heading text-base font-bold">{t.pay.receipt}</span>
          <span className="font-mono text-[13px] text-faint">#RJS-4829</span>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">{t.book.s1}</span>
            <span className="font-semibold">{selectedService ? selectedService.name[lang] : "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">{t.book.s2}</span>
            <span className="font-semibold">{selectedVehicle ? selectedVehicle.name[lang] : "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">{t.book.when}</span>
            <span className="font-semibold">
              {dateLabel} · {time ?? "—"}
            </span>
          </div>
        </div>
        <div className="my-[18px] h-px bg-line" />
        <div className="mb-3 flex justify-between">
          <span className="text-sm text-muted-foreground">{t.book.total}</span>
          <span className="text-sm font-semibold">{money(subtotal)}</span>
        </div>
        <div className="mb-2.5 flex items-center justify-between rounded-[11px] border border-[rgba(61,220,132,.3)] bg-[rgba(61,220,132,.1)] p-[13px]">
          <span className="text-sm font-bold text-success">{t.pay.paidToday}</span>
          <span className="font-heading text-[17px] font-extrabold text-success">{money(deposit)}</span>
        </div>
        <div className="flex justify-between text-[13px] text-muted-foreground">
          <span>{t.pay.remaining}</span>
          <span className="font-semibold">{money(balance)}</span>
        </div>
      </div>
      <p className="mb-6 text-[13px] text-faint">{t.pay.emailed}</p>
      <div className="flex justify-center gap-3">
        <button
          onClick={handleBackHome}
          className="rounded-xl border border-[#2a2f3a] px-[26px] py-3.5 font-heading text-[15px] font-bold text-[#dbe4f0] transition-all hover:border-brand-light hover:text-white"
        >
          {t.pay.backHome}
        </button>
      </div>
    </div>
  );
}
