import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/landing/hero";
import { ServicesSection } from "@/components/landing/services-section";
import { GallerySection } from "@/components/landing/gallery-section";
import { WhySection } from "@/components/landing/why-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ReviewsSection } from "@/components/landing/reviews-section";
import { FaqSection } from "@/components/landing/faq-section";
import { ContactSection } from "@/components/landing/contact-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ServicesSection />
        <GallerySection />
        <WhySection />
        <ProcessSection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
