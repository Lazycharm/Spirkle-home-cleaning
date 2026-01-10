/**
 * Services Configuration
 * Update service packages, prices, and features here
 */

export interface Service {
  id: string
  title: string
  price: string
  duration: string
  image: string
  features: string[]
}

export const servicesConfig: Service[] = [
  {
    id: "studio",
    title: "Studio Apartment",
    price: "AED 80",
    duration: "1-2 hours",
    image: "clean-modern-studio-apartment-bright-interior-mini.jpg",
    features: [
      "Full floor mopping & vacuuming",
      "Kitchen cleaning & countertops",
      "Bathroom deep clean",
      "Dusting all surfaces",
      "Trash removal",
    ],
  },
  {
    id: "1-bedroom",
    title: "1 Bedroom Apartment",
    price: "AED 120",
    duration: "2-3 hours",
    image: "clean-one-bedroom-apartment-modern-living-room-bri.jpg",
    features: [
      "All rooms floor cleaning",
      "Kitchen deep clean",
      "Bathroom sanitization",
      "Dusting & surface wipe",
      "Bed making",
      "Trash removal",
    ],
  },
  {
    id: "2-bedroom",
    title: "2 Bedroom Apartment",
    price: "AED 160",
    duration: "3-4 hours",
    image: "clean-two-bedroom-apartment-spacious-modern-interi.jpg",
    features: [
      "All rooms floor cleaning",
      "Kitchen deep clean",
      "All bathrooms sanitized",
      "Dusting all surfaces",
      "Bed making",
      "Trash removal",
    ],
  },
]

export const servicesSectionConfig = {
  badge: "Our Services",
  title: "Professional Cleaning Packages",
  description: "Choose the perfect cleaning package for your home. Clear pricing, no hidden fees.",
} as const

