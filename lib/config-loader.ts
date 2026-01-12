/**
 * Config Loader Utility
 * Loads config data from localStorage (admin edits) or falls back to default configs
 * This allows the admin dashboard to control content without modifying config files
 */

import { adminStorage } from "./admin-storage"
import { siteConfig } from "@/config/site"
import { servicesConfig, servicesSectionConfig } from "@/config/services"
import { pricingPlansConfig, pricingSectionConfig } from "@/config/pricing"
import { addonsConfig, addonsSectionConfig } from "@/config/addons"
import { contactConfig } from "@/config/contact"
import { faqsConfig, faqSectionConfig } from "@/config/faq"
import { testimonialsConfig, testimonialsSectionConfig } from "@/config/testimonials"
import { stepsConfig, howItWorksSectionConfig } from "@/config/how-it-works"
import { trustPointsConfig, trustSectionConfig } from "@/config/trust"

// Helper to merge admin data with defaults
function mergeConfig<T>(adminKey: string, defaultConfig: T): T {
  const adminData = adminStorage.get(adminKey, null)
  if (!adminData) return defaultConfig
  
  // For now, return admin data if it exists
  // In production, you'd want to merge more intelligently
  return adminData as T
}

export const configLoader = {
  getSiteConfig: () => mergeConfig("siteConfig", siteConfig),
  getServices: () => mergeConfig("services", servicesConfig),
  getServicesSection: () => servicesSectionConfig,
  getPricing: () => mergeConfig("pricing", pricingPlansConfig),
  getPricingSection: () => pricingSectionConfig,
  getAddons: () => mergeConfig("addons", addonsConfig),
  getAddonsSection: () => addonsSectionConfig,
  getContact: () => mergeConfig("contact", contactConfig),
  getFaqs: () => mergeConfig("faqs", faqsConfig),
  getFaqSection: () => faqSectionConfig,
  getTestimonials: () => mergeConfig("testimonials", testimonialsConfig),
  getTestimonialsSection: () => testimonialsSectionConfig,
  getHowItWorks: () => mergeConfig("howItWorks", stepsConfig),
  getHowItWorksSection: () => howItWorksSectionConfig,
  getTrust: () => mergeConfig("trust", trustPointsConfig),
  getTrustSection: () => trustSectionConfig,
}
