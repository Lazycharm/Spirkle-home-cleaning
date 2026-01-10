import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SocialProofStrip } from "@/components/social-proof-strip"
import { ServicesSection } from "@/components/services-section"
import { PlansSection } from "@/components/plans-section"
import { AddonsSection } from "@/components/addons-section"
import { HowItWorks } from "@/components/how-it-works"
import { TrustSection } from "@/components/trust-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { QrBookingSection } from "@/components/qr-booking-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <HeroSection />
      <SocialProofStrip />
      <ServicesSection />
      <PlansSection />
      <AddonsSection />
      <HowItWorks />
      <TrustSection />
      <TestimonialsSection />
      <FaqSection />
      <QrBookingSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
