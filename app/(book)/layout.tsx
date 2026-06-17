import { SiteHeader } from "@/components/site-header";
import { BookingProvider } from "@/lib/booking-context";

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      <SiteHeader />
      <main className="w-full px-5 pb-[130px] pt-[46px] md:px-7">{children}</main>
    </BookingProvider>
  );
}
