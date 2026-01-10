/**
 * Pricing Plans Configuration
 * Update recurring plans, discounts, and pricing here
 */

export interface PricingPlan {
  id: string
  title: string
  frequency: string
  discount: string
  description: string
  highlight: boolean
  badge?: string
}

export const pricingPlansConfig: PricingPlan[] = [
  {
    id: "weekly",
    title: "Weekly Plan",
    frequency: "4 visits/month",
    discount: "15% OFF",
    description: "Best for busy professionals who want a consistently clean home",
    highlight: false,
  },
  {
    id: "bi-weekly",
    title: "Bi-Weekly Plan",
    frequency: "2 visits/month",
    discount: "10% OFF",
    description: "Perfect balance of cleanliness and value for most families",
    highlight: true,
    badge: "Best Value",
  },
  {
    id: "monthly",
    title: "Monthly Plan",
    frequency: "1 visit/month",
    discount: "5% OFF",
    description: "Great for maintaining a tidy home with occasional deep cleans",
    highlight: false,
  },
]

export const pricingSectionConfig = {
  badge: "Save More",
  title: "Monthly & Recurring Plans",
  description: "Save more with our recurring plans. Same trusted cleaner every visit for consistency.",
} as const

