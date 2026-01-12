import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SocialProofStrip } from "@/components/social-proof-strip"
import { ServicesPricingSection } from "@/components/services-pricing-section"
import { TrustTestimonialsSection } from "@/components/trust-testimonials-section"
import { QuickBookingSection } from "@/components/quick-booking-section"
import { FaqContactSection } from "@/components/faq-contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <HeroSection />
      <SocialProofStrip />
      <ServicesPricingSection />
      <TrustTestimonialsSection />
      <QuickBookingSection />
      <FaqContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
