export type Lang = "en" | "es";

export interface LocalizedText {
  en: string;
  es: string;
}

export interface Service {
  id: string;
  price: number;
  durationMin: number;
  popular: boolean;
  icon: string;
  name: LocalizedText;
  desc: LocalizedText;
}

export interface Extra {
  id: string;
  price: number;
  name: LocalizedText;
}

export interface VehicleType {
  id: string;
  add: number;
  icon: string;
  name: LocalizedText;
}

export interface Review {
  name: string;
  vehicle: string;
  stars: number;
  text: LocalizedText;
}

export interface WhyItem {
  icon: string;
  title: LocalizedText;
  desc: LocalizedText;
}

export interface ProcessStep {
  title: LocalizedText;
  desc: LocalizedText;
}

export interface Faq {
  q: LocalizedText;
  a: LocalizedText;
}

export type GalleryCategory = "interior" | "exterior" | "full" | "ceramic";

export interface GalleryItem {
  category: GalleryCategory;
  label: LocalizedText;
}

export interface BookingSelection {
  serviceId: string;
  vehicleId: string;
  date: string | null;
  time: string | null;
  extraIds: string[];
}

export type AppointmentStatus =
  | "Confirmed"
  | "In Progress"
  | "Pending"
  | "Completed";

export interface Appointment {
  time: string;
  customer: string;
  vehicle: string;
  service: string;
  status: AppointmentStatus;
  amount: string;
  initial: string;
}

export interface Customer {
  name: string;
  email: string;
  visits: string;
  spent: string;
  initial: string;
}

export interface ReviewQueueItem {
  name: string;
  vehicle: string;
  stars: string;
  text: string;
  status: "Approved" | "Pending";
  initial: string;
}

export interface Metric {
  label: string;
  value: string;
  delta: string;
}
