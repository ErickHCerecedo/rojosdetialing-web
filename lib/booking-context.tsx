"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { DEPOSIT_PCT, EXTRAS, SERVICES, VEHICLES } from "./data";

export const TIME_SLOTS = ["8:00 AM", "9:30 AM", "11:00 AM", "12:30 PM", "2:00 PM", "3:30 PM", "5:00 PM"];

interface BookingState {
  step: number;
  serviceId: string;
  vehicleId: string;
  date: string | null;
  time: string | null;
  extraIds: string[];
  payMethod: "card" | "apple" | "google";
  paid: boolean;
  bookingId: string | null;
}

interface BookingContextValue extends BookingState {
  setStep: (n: number) => void;
  setServiceId: (id: string) => void;
  setVehicleId: (id: string) => void;
  setDate: (key: string) => void;
  setTime: (label: string) => void;
  toggleExtra: (id: string) => void;
  setPayMethod: (m: BookingState["payMethod"]) => void;
  setPaid: (v: boolean) => void;
  setBookingId: (id: string | null) => void;
  reset: () => void;
  selectedService: (typeof SERVICES)[number] | undefined;
  selectedVehicle: (typeof VEHICLES)[number] | undefined;
  selectedExtras: typeof EXTRAS;
  subtotal: number;
  deposit: number;
  balance: number;
}

const initialState: BookingState = {
  step: 1,
  serviceId: "full",
  vehicleId: "sedan",
  date: null,
  time: null,
  extraIds: [],
  payMethod: "card",
  paid: false,
  bookingId: null,
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<BookingState>(initialState);

  const selectedService = SERVICES.find((s) => s.id === state.serviceId);
  const selectedVehicle = VEHICLES.find((v) => v.id === state.vehicleId);
  const selectedExtras = EXTRAS.filter((e) => state.extraIds.includes(e.id));

  const subtotal =
    (selectedService?.price ?? 0) +
    (selectedVehicle?.add ?? 0) +
    selectedExtras.reduce((sum, e) => sum + e.price, 0);
  const deposit = Math.round((subtotal * DEPOSIT_PCT) / 100);
  const balance = subtotal - deposit;

  const value = useMemo<BookingContextValue>(
    () => ({
      ...state,
      setStep: (n) => setState((s) => ({ ...s, step: n })),
      setServiceId: (id) => setState((s) => ({ ...s, serviceId: id })),
      setVehicleId: (id) => setState((s) => ({ ...s, vehicleId: id })),
      setDate: (key) => setState((s) => ({ ...s, date: key })),
      setTime: (label) => setState((s) => ({ ...s, time: label })),
      toggleExtra: (id) =>
        setState((s) => ({
          ...s,
          extraIds: s.extraIds.includes(id) ? s.extraIds.filter((x) => x !== id) : [...s.extraIds, id],
        })),
      setPayMethod: (m) => setState((s) => ({ ...s, payMethod: m })),
      setPaid: (v) => setState((s) => ({ ...s, paid: v })),
      setBookingId: (id) => setState((s) => ({ ...s, bookingId: id })),
      reset: () => setState(initialState),
      selectedService,
      selectedVehicle,
      selectedExtras,
      subtotal,
      deposit,
      balance,
    }),
    [state, selectedService, selectedVehicle, selectedExtras, subtotal, deposit, balance]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking(): BookingContextValue {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within a BookingProvider");
  return ctx;
}
