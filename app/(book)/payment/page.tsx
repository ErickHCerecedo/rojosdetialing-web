"use client";

import { Checkout } from "@/components/payment/checkout";
import { Receipt } from "@/components/payment/receipt";
import { useBooking } from "@/lib/booking-context";

export default function PaymentPage() {
  const { paid } = useBooking();
  return paid ? <Receipt /> : <Checkout />;
}
