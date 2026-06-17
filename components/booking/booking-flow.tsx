"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBooking } from "@/lib/api";
import { Stepper } from "./stepper";
import { OrderSummary } from "./order-summary";
import { ServiceStep } from "./steps/service-step";
import { VehicleStep } from "./steps/vehicle-step";
import { DateStep } from "./steps/date-step";
import { TimeStep } from "./steps/time-step";
import { ExtrasStep } from "./steps/extras-step";
import { ReviewStep } from "./steps/review-step";
import { useBooking } from "@/lib/booking-context";
import { useLanguage } from "@/lib/i18n";

export function BookingFlow() {
  const { t } = useLanguage();
  const router = useRouter();
  const { step, setStep, serviceId, vehicleId, date, time, extraIds, setBookingId } = useBooking();
  const [submitting, setSubmitting] = useState(false);

  const canContinue =
    (step === 1 && !!serviceId) ||
    (step === 2 && !!vehicleId) ||
    (step === 3 && !!date) ||
    (step === 4 && !!time) ||
    step >= 5;

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else router.push("/");
  };

  const handleNext = async () => {
    if (!canContinue) return;
    if (step < 6) {
      setStep(step + 1);
      window.scrollTo(0, 0);
      return;
    }
    setSubmitting(true);
    const result = await createBooking({ serviceId, vehicleId, date, time, extraIds });
    setBookingId(result?.id ?? null);
    setSubmitting(false);
    router.push("/payment");
  };

  return (
    <>
      <div className="mb-9 text-center">
        <h1 className="mb-2 font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-[-1px]">{t.book.title}</h1>
        <p className="text-base text-muted-foreground">{t.book.sub}</p>
      </div>

      <Stepper />

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_340px]">
        <div>
          {step === 1 && <ServiceStep />}
          {step === 2 && <VehicleStep />}
          {step === 3 && <DateStep />}
          {step === 4 && <TimeStep />}
          {step === 5 && <ExtrasStep />}
          {step === 6 && <ReviewStep />}

          <div className="mt-7 flex items-center justify-between">
            <button
              onClick={handleBack}
              className="rounded-xl border border-[#2a2f3a] px-[26px] py-3.5 font-heading text-[15px] font-bold text-[#dbe4f0] transition-all hover:border-brand-light hover:text-white"
            >
              {t.book.back}
            </button>
            <button
              onClick={handleNext}
              disabled={!canContinue || submitting}
              className={`rounded-xl px-[30px] py-[15px] font-heading text-[15px] font-bold text-white transition-all ${
                canContinue && !submitting
                  ? "cursor-pointer bg-gradient-to-br from-brand to-brand-light shadow-[0_8px_26px_rgba(0,102,255,.4)]"
                  : "cursor-not-allowed bg-line opacity-50"
              }`}
            >
              {submitting ? "…" : step === 6 ? t.book.toPayment : t.book.next}
            </button>
          </div>
        </div>

        <OrderSummary variant="booking" />
      </div>
    </>
  );
}
