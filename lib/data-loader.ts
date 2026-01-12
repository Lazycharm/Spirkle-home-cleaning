/**
 * Data Loader Utility
 * Fetches data from Supabase API with fallback to config files
 * This ensures the site works even if Supabase is not configured
 */

import { siteConfig } from "@/config/site"
import { servicesConfig, servicesSectionConfig } from "@/config/services"
import { pricingPlansConfig, pricingSectionConfig } from "@/config/pricing"
import { addonsConfig, addonsSectionConfig } from "@/config/addons"
import { contactConfig } from "@/config/contact"
import { faqsConfig, faqSectionConfig } from "@/config/faq"
import { testimonialsConfig, testimonialsSectionConfig } from "@/config/testimonials"
import { stepsConfig, howItWorksSectionConfig } from "@/config/how-it-works"
import { trustPointsConfig, trustSectionConfig } from "@/config/trust"

async function fetchFromAPI<T>(endpoint: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/${endpoint}`, {
      cache: "no-store",
    })
    if (response.ok) {
      const result = await response.json()
      if (result.data && (Array.isArray(result.data) ? result.data.length > 0 : true)) {
        return result.data as T
      }
    }
  } catch (error) {
    console.warn(`Failed to fetch from ${endpoint}, using fallback:`, error)
  }
  return fallback
}

// Transform database records to match config format
function transformService(dbRecord: any) {
  return {
    id: dbRecord.id,
    title: dbRecord.title,
    price: dbRecord.price,
    duration: dbRecord.duration,
    image: dbRecord.image,
    features: dbRecord.features || [],
  }
}

function transformPricingPlan(dbRecord: any) {
  return {
    id: dbRecord.id,
    title: dbRecord.title,
    frequency: dbRecord.frequency,
    discount: dbRecord.discount,
    description: dbRecord.description,
    highlight: dbRecord.highlight || false,
    badge: dbRecord.badge || undefined,
  }
}

function transformAddon(dbRecord: any) {
  // Import icons dynamically based on icon_name
  const iconMap: Record<string, any> = {
    Refrigerator: require("lucide-react").Refrigerator,
    Flame: require("lucide-react").Flame,
    Sun: require("lucide-react").Sun,
    Shirt: require("lucide-react").Shirt,
  }
  
  return {
    id: dbRecord.id,
    icon: iconMap[dbRecord.icon_name] || iconMap.Refrigerator,
    title: dbRecord.title,
    price: dbRecord.price,
    description: dbRecord.description,
  }
}

function transformFaq(dbRecord: any) {
  return {
    id: dbRecord.id,
    question: dbRecord.question,
    answer: dbRecord.answer,
  }
}

function transformTestimonial(dbRecord: any) {
  return {
    id: dbRecord.id,
    name: dbRecord.name,
    location: dbRecord.location,
    avatar: dbRecord.avatar,
    text: dbRecord.text,
  }
}

function transformStep(dbRecord: any) {
  const iconMap: Record<string, any> = {
    QrCode: require("lucide-react").QrCode,
    MessageCircle: require("lucide-react").MessageCircle,
    Sparkles: require("lucide-react").Sparkles,
  }
  
  return {
    id: dbRecord.id,
    icon: iconMap[dbRecord.icon_name] || iconMap.QrCode,
    title: dbRecord.title,
    description: dbRecord.description,
  }
}

function transformTrustPoint(dbRecord: any) {
  const iconMap: Record<string, any> = {
    UserCheck: require("lucide-react").UserCheck,
    Users: require("lucide-react").Users,
    Lock: require("lucide-react").Lock,
    Leaf: require("lucide-react").Leaf,
    ShieldCheck: require("lucide-react").ShieldCheck,
    Heart: require("lucide-react").Heart,
  }
  
  return {
    id: dbRecord.id,
    icon: iconMap[dbRecord.icon_name] || iconMap.UserCheck,
    title: dbRecord.title,
    description: dbRecord.description,
  }
}

export const dataLoader = {
  async getSiteConfig() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/config?key=site`, {
        cache: "no-store",
      })
      if (response.ok) {
        const result = await response.json()
        if (result.data) {
          return result.data
        }
      }
    } catch (error) {
      console.warn("Failed to fetch site config, using fallback:", error)
    }
    return siteConfig
  },

  async getServices() {
    const data = await fetchFromAPI("services", servicesConfig)
    return Array.isArray(data) ? data.map(transformService) : servicesConfig
  },

  getServicesSection: () => servicesSectionConfig,

  async getPricing() {
    const data = await fetchFromAPI("pricing", pricingPlansConfig)
    return Array.isArray(data) ? data.map(transformPricingPlan) : pricingPlansConfig
  },

  getPricingSection: () => pricingSectionConfig,

  async getAddons() {
    const data = await fetchFromAPI("addons", addonsConfig)
    if (Array.isArray(data) && data.length > 0) {
      return data.map(transformAddon)
    }
    return addonsConfig
  },

  getAddonsSection: () => addonsSectionConfig,

  async getContact() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/contact`, {
        cache: "no-store",
      })
      if (response.ok) {
        const result = await response.json()
        if (result.data) {
          return result.data
        }
      }
    } catch (error) {
      console.warn("Failed to fetch contact config, using fallback:", error)
    }
    return contactConfig
  },

  async getFaqs() {
    const data = await fetchFromAPI("faqs", faqsConfig)
    return Array.isArray(data) ? data.map(transformFaq) : faqsConfig
  },

  getFaqSection: () => faqSectionConfig,

  async getTestimonials() {
    const data = await fetchFromAPI("testimonials", testimonialsConfig)
    return Array.isArray(data) ? data.map(transformTestimonial) : testimonialsConfig
  },

  getTestimonialsSection: () => testimonialsSectionConfig,

  async getHowItWorks() {
    const data = await fetchFromAPI("how-it-works", stepsConfig)
    return Array.isArray(data) ? data.map(transformStep) : stepsConfig
  },

  getHowItWorksSection: () => howItWorksSectionConfig,

  async getTrust() {
    const data = await fetchFromAPI("trust", trustPointsConfig)
    return Array.isArray(data) ? data.map(transformTrustPoint) : trustPointsConfig
  },

  getTrustSection: () => trustSectionConfig,
}
