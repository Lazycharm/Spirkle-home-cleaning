/**
 * Site-wide configuration
 * Edit this file to update business information across the entire site
 */

export const siteConfig = {
  // Business Information
  businessName: "Sparkle Clean",
  tagline: "Your trusted, family-run apartment cleaning service",
  location: {
    city: "Ajman",
    area: "City Tower",
    fullAddress: "City Tower, Ajman, UAE",
    serviceArea: "City Tower & Nearby Buildings",
  },

  // Hero Section
  hero: {
    title: "Premium Apartment Cleaning in",
    titleHighlight: "City Tower, Ajman",
    description:
      "Your trusted, family-run cleaning service. We bring sparkle to your home with care, respect, and attention to every detail.",
    badge: {
      text: "Serving City Tower & Nearby Buildings",
      show: true,
    },
    stats: [
      { value: "500+", label: "Happy Homes" },
      { value: "5 Star", label: "Rating" },
      { value: "2 Years", label: "Experience" },
    ],
    cta: {
      primary: {
        text: "Book on WhatsApp",
      },
      secondary: {
        text: "See Pricing",
        href: "#pricing",
      },
    },
  },

  // SEO & Meta
  seo: {
    title: "Sparkle Clean Ajman | Trusted Apartment Cleaning in City Tower",
    description:
      "Professional, family-run apartment cleaning service in City Tower, Ajman. Reliable, female-friendly, and satisfaction guaranteed. Book via WhatsApp today!",
  },

  // Navigation
  navLinks: [
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#trust", label: "Trust & Safety" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ],

  // Social Proof
  socialProof: [
    { label: "Local Residents" },
    { label: "Female-Friendly" },
    { label: "Satisfaction Guaranteed" },
    { label: "Always On Time" },
  ],
} as const

