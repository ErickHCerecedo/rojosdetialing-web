"use client";

import { DEPOSIT_PCT } from "@/lib/data";
import { money } from "@/lib/format";
import { useBooking } from "@/lib/booking-context";
import { useLanguage } from "@/lib/i18n";

export function OrderSummary({ variant = "booking" }: { variant?: "booking" | "payment" }) {
  const { t, lang } = useLanguage();
  const { selectedService, selectedVehicle, selectedExtras, subtotal, deposit, balance } = useBooking();

  const title = variant === "booking" ? t.book.summary : t.pay.order;
  const depositLabel = variant === "booking" ? t.book.deposit : t.pay.deposit;
  const depositNote =
    variant === "booking" ? `${DEPOSIT_PCT}% · ${t.pay.depositNote}` : t.pay.depositNote;
  const balanceLabel = variant === "booking" ? t.book.balance : t.pay.balance;

  return (
    <div className="sticky top-[90px] rounded-[18px] border border-line bg-surface p-6">
      <h3 className="mb-[18px] font-heading text-[17px] font-bold">{title}</h3>
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex justify-between gap-3">
          <span className="text-muted-foreground">{selectedService ? selectedService.name[lang] : "—"}</span>
          <span className="font-semibold">{selectedService ? money(selectedService.price) : "—"}</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="text-muted-foreground">{selectedVehicle ? selectedVehicle.name[lang] : "—"}</span>
          <span className="font-semibold text-brand-light">
            {selectedVehicle && selectedVehicle.add ? `+${money(selectedVehicle.add)}` : t.book.included}
          </span>
        </div>
        {selectedExtras.map((e) => (
          <div key={e.id} className="flex justify-between gap-3">
            <span className="text-muted-foreground">{e.name[lang]}</span>
            <span className="font-semibold">{money(e.price)}</span>
          </div>
        ))}
      </div>
      <div className="my-[18px] h-px bg-line" />
      <div className="mb-3.5 flex justify-between">
        <span className="text-sm text-muted-foreground">{t.book.subtotal}</span>
        <span className="font-heading text-xl font-extrabold">{money(subtotal)}</span>
      </div>
      <div className="mb-2.5 rounded-xl border border-[rgba(29,140,255,.3)] bg-[rgba(0,102,255,.08)] p-3.5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-white">{depositLabel}</span>
          <span className="font-heading text-lg font-extrabold text-brand-light">{money(deposit)}</span>
        </div>
        <div className="mt-1 text-xs text-muted-foreground">{depositNote}</div>
      </div>
      <div className="flex justify-between text-[13px] text-muted-foreground">
        <span>{balanceLabel}</span>
        <span className="font-semibold">{money(balance)}</span>
      </div>
    </div>
  );
}
