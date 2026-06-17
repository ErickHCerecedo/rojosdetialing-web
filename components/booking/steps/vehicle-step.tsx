"use client";

import { VEHICLES } from "@/lib/data";
import { money } from "@/lib/format";
import { useBooking } from "@/lib/booking-context";
import { useLanguage } from "@/lib/i18n";

export function VehicleStep() {
  const { t, lang } = useLanguage();
  const { vehicleId, setVehicleId } = useBooking();

  return (
    <>
      <h2 className="mb-1.5 font-heading text-2xl font-bold">{t.book.selVehicle}</h2>
      <p className="mb-6 text-[15px] text-muted-foreground">{t.book.selVehicleSub}</p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {VEHICLES.map((v) => {
          const active = vehicleId === v.id;
          return (
            <div
              key={v.id}
              onClick={() => setVehicleId(v.id)}
              className={`cursor-pointer rounded-2xl border transition-all ${
                active
                  ? "border-brand-light bg-[rgba(0,102,255,.07)] shadow-[0_0_0_1px_#1D8CFF,0_0_30px_rgba(0,102,255,.2)]"
                  : "border-line bg-surface"
              }`}
            >
              <div className="flex items-center justify-between gap-3 p-[22px]">
                <span className="font-heading text-[17px] font-bold">
                  {v.icon} {v.name[lang]}
                </span>
                <span className="text-sm font-bold text-brand-light">
                  {v.add ? `+${money(v.add)}` : t.book.included}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
