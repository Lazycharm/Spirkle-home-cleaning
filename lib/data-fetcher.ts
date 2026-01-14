/**
 * Data Fetcher Utility
 * Fetches data from Supabase API with fallback to config files
 * Used by frontend components to display content
 */

import { siteConfig } from "@/config/site"
import { servicesConfig } from "@/config/services"
import { pricingPlansConfig } from "@/config/pricing"
import { addonsConfig } from "@/config/addons"
import { contactConfig } from "@/config/contact"
import { faqsConfig } from "@/config/faq"
import { testimonialsConfig } from "@/config/testimonials"
import { stepsConfig } from "@/config/how-it-works"
import { trustPointsConfig } from "@/config/trust"

function mergeWithDefaults<T>(defaults: T, override: any): T {
  if (override === null || override === undefined) return defaults

  // Arrays: if override is an array, use it (even if empty) only when explicitly provided.
  // In practice we want to avoid crashing on undefined arrays, so we treat non-arrays as "missing".
  if (Array.isArray(defaults)) {
    return (Array.isArray(override) ? override : defaults) as T
  }

  // Objects: recursively merge keys from defaults
  if (typeof defaults === "object" && defaults !== null) {
    const out: any = Array.isArray(defaults) ? [] : { ...(defaults as any) }
    const overrideObj = typeof override === "object" && override !== null ? override : {}

    for (const key of Object.keys(defaults as any)) {
      out[key] = mergeWithDefaults((defaults as any)[key], overrideObj[key])
    }

    // Keep any extra keys from override (non-breaking)
    for (const key of Object.keys(overrideObj)) {
      if (!(key in out)) out[key] = overrideObj[key]
    }

    return out as T
  }

  // Primitives: override if defined
  return (override === undefined ? defaults : override) as T
}

// Icon mapping for dynamic imports
const iconMap: Record<string, any> = {}

async function loadIcons() {
  if (Object.keys(iconMap).length === 0) {
    const lucide = await import("lucide-react")
    iconMap.Refrigerator = lucide.Refrigerator
    iconMap.Flame = lucide.Flame
    iconMap.Sun = lucide.Sun
    iconMap.Shirt = lucide.Shirt
    iconMap.QrCode = lucide.QrCode
    iconMap.MessageCircle = lucide.MessageCircle
    iconMap.Sparkles = lucide.Sparkles
    iconMap.UserCheck = lucide.UserCheck
    iconMap.Users = lucide.Users
    iconMap.Lock = lucide.Lock
    iconMap.Leaf = lucide.Leaf
    iconMap.ShieldCheck = lucide.ShieldCheck
    iconMap.Heart = lucide.Heart
  }
}

async function fetchFromAPI<T>(endpoint: string, fallback: T): Promise<T> {
  try {
    const baseUrl = typeof window !== "undefined" 
      ? window.location.origin 
      : process.env.NEXT_PUBLIC_SITE_URL || ""
    
    const response = await fetch(`${baseUrl}/api/${endpoint}`, {
      cache: "no-store",
    })
    
    if (response.ok) {
      const result = await response.json()
      if (result.data !== null && result.data !== undefined) {
        if (Array.isArray(result.data)) {
          return result.data.length > 0 ? (result.data as T) : fallback
        }
        return result.data as T
      }
    }
  } catch (error) {
    console.warn(`Failed to fetch from ${endpoint}, using fallback:`, error)
  }
  return fallback
}

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

async function transformAddon(dbRecord: any) {
  await loadIcons()
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

async function transformStep(dbRecord: any) {
  await loadIcons()
  return {
    id: dbRecord.id,
    icon: iconMap[dbRecord.icon_name] || iconMap.QrCode,
    title: dbRecord.title,
    description: dbRecord.description,
  }
}

async function transformTrustPoint(dbRecord: any) {
  await loadIcons()
  return {
    id: dbRecord.id,
    icon: iconMap[dbRecord.icon_name] || iconMap.UserCheck,
    title: dbRecord.title,
    description: dbRecord.description,
  }
}

export const dataFetcher = {
  async getSiteConfig() {
    const data = await fetchFromAPI("config?key=site", null)
    return mergeWithDefaults(siteConfig, data)
  },

  async getServices() {
    const data = await fetchFromAPI("services", servicesConfig)
    return Array.isArray(data) && data.length > 0
      ? data.map(transformService)
      : servicesConfig
  },

  async getPricing() {
    const data = await fetchFromAPI("pricing", pricingPlansConfig)
    return Array.isArray(data) && data.length > 0
      ? data.map(transformPricingPlan)
      : pricingPlansConfig
  },

  async getAddons() {
    const data = await fetchFromAPI("addons", addonsConfig)
    if (Array.isArray(data) && data.length > 0) {
      return Promise.all(data.map(transformAddon))
    }
    return addonsConfig
  },

  async getContact() {
    const data = await fetchFromAPI("contact", null)
    return mergeWithDefaults(contactConfig, data)
  },

  async getFaqs() {
    const data = await fetchFromAPI("faqs", faqsConfig)
    return Array.isArray(data) && data.length > 0
      ? data.map(transformFaq)
      : faqsConfig
  },

  async getTestimonials() {
    const data = await fetchFromAPI("testimonials", testimonialsConfig)
    return Array.isArray(data) && data.length > 0
      ? data.map(transformTestimonial)
      : testimonialsConfig
  },

  async getHowItWorks() {
    const data = await fetchFromAPI("how-it-works", stepsConfig)
    if (Array.isArray(data) && data.length > 0) {
      return Promise.all(data.map(transformStep))
    }
    return stepsConfig
  },

  async getTrust() {
    const data = await fetchFromAPI("trust", trustPointsConfig)
    if (Array.isArray(data) && data.length > 0) {
      return Promise.all(data.map(transformTrustPoint))
    }
    return trustPointsConfig
  },
}
