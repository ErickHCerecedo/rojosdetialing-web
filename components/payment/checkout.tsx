"use client";

import { useState } from "react";
import { confirmPayment, createPaymentIntent } from "@/lib/api";
import { money } from "@/lib/format";
import { useBooking } from "@/lib/booking-context";
import { useLanguage } from "@/lib/i18n";
import { OrderSummary } from "@/components/booking/order-summary";

const methods: { id: "card" | "apple" | "google"; labelKey: "card" | null; fallback?: string }[] = [
  { id: "card", labelKey: "card" },
  { id: "apple", labelKey: null, fallback: "Apple Pay" },
  { id: "google", labelKey: null, fallback: "Google Pay" },
];

const inputClasses =
  "w-full rounded-[11px] border border-line bg-surface-2 px-4 py-3.5 text-[15px] text-white outline-none transition-colors focus:border-brand-light";

export function Checkout() {
  const { t } = useLanguage();
  const { payMethod, setPayMethod, deposit, bookingId, setPaid } = useBooking();
  const [submitting, setSubmitting] = useState(false);

  const handlePay = async () => {
    setSubmitting(true);
    if (bookingId) {
      await createPaymentIntent(bookingId);
      await confirmPayment(bookingId);
    }
    setSubmitting(false);
    setPaid(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="mb-9 text-center">
        <h1 className="mb-2 font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-[-1px]">{t.pay.title}</h1>
        <p className="text-base text-muted-foreground">{t.pay.sub}</p>
      </div>
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_360px]">
        <div className="rounded-[18px] border border-line bg-surface p-7">
          <h3 className="mb-3.5 font-heading text-base font-bold">{t.pay.method}</h3>
          <div className="mb-6 flex gap-2.5">
            {methods.map((m) => {
              const active = payMethod === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setPayMethod(m.id)}
                  className={`flex-1 rounded-xl border px-2.5 py-3.5 text-sm font-semibold transition-all ${
                    active ? "border-brand-light bg-[rgba(0,102,255,.08)] text-white" : "border-line bg-surface-2 text-white"
                  }`}
                >
                  {m.labelKey ? t.pay[m.labelKey] : m.fallback}
                </button>
              );
            })}
          </div>

          {payMethod === "card" ? (
            <div className="flex flex-col gap-3.5">
              <div>
                <label className="mb-1.5 block text-[13px] text-muted-foreground">{t.pay.name}</label>
                <input placeholder="Marcus Thompson" className={inputClasses} />
              </div>
              <div>
                <label className="mb-1.5 block text-[13px] text-muted-foreground">{t.pay.number}</label>
                <div className="relative">
                  <input placeholder="4242 4242 4242 4242" className={inputClasses} />
                  <div className="absolute right-3.5 top-1/2 flex -translate-y-1/2 gap-1.5">
                    <div className="h-[19px] w-[30px] rounded-[4px] bg-gradient-to-br from-brand to-brand-light" />
                    <div className="h-[19px] w-[30px] rounded-[4px] bg-[#2a2f3a]" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="mb-1.5 block text-[13px] text-muted-foreground">{t.pay.exp}</label>
                  <input placeholder="12 / 28" className={inputClasses} />
                </div>
                <div>
                  <label className="mb-1.5 block text-[13px] text-muted-foreground">{t.pay.cvc}</label>
                  <input placeholder="123" className={inputClasses} />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3.5 py-[30px] text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-[18px] border border-line bg-surface-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1D8CFF" strokeWidth="1.6" width="30" height="30">
                  <rect x="4" y="6" width="16" height="13" rx="2" />
                  <path d="M4 10h16M9 15h3" strokeLinecap="round" />
                </svg>
              </div>
              <p className="max-w-[300px] text-[15px] text-muted-foreground">
                You&apos;ll be redirected to complete payment securely with your selected wallet.
              </p>
            </div>
          )}

          <button
            onClick={handlePay}
            disabled={submitting}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-[13px] bg-gradient-to-br from-brand to-brand-light py-4 font-heading text-base font-bold text-white shadow-[0_8px_28px_rgba(0,102,255,.4)] transition-all hover:-translate-y-px hover:shadow-[0_12px_38px_rgba(0,102,255,.6)] disabled:opacity-60"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" strokeLinecap="round" />
            </svg>
            {submitting ? "…" : `${t.pay.pay} ${money(deposit)}`}
          </button>
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-faint">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" strokeLinecap="round" />
            </svg>
            {t.pay.securedBy}
          </div>
        </div>

        <OrderSummary variant="payment" />
      </div>
    </>
  );
}
