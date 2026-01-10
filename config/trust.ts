/**
 * Trust & Safety Configuration
 * Update trust points and safety features here
 */

import { UserCheck, Users, Lock, Leaf, ShieldCheck, Heart, LucideIcon } from "lucide-react"

export interface TrustPoint {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

export const trustPointsConfig: TrustPoint[] = [
  {
    id: "female-cleaner",
    icon: UserCheck,
    title: "Female Cleaner Available",
    description: "Request a female cleaner for your comfort and peace of mind",
  },
  {
    id: "family-run",
    icon: Users,
    title: "Family-Run Business",
    description: "We're a husband and wife team who care about our community",
  },
  {
    id: "privacy",
    icon: Lock,
    title: "Respect for Privacy",
    description: "Your belongings and personal space are always treated with care",
  },
  {
    id: "eco-friendly",
    icon: Leaf,
    title: "Safe Cleaning Products",
    description: "We use eco-friendly, non-toxic products safe for families and pets",
  },
  {
    id: "guarantee",
    icon: ShieldCheck,
    title: "Satisfaction Guaranteed",
    description: "Not happy? We'll re-clean for free or refund your payment",
  },
  {
    id: "trusted",
    icon: Heart,
    title: "Trusted by Neighbors",
    description: "Proudly serving City Tower residents with care and dedication",
  },
]

export const trustSectionConfig = {
  badge: "Why Choose Us",
  title: "Trust & Safety",
  description: "Your peace of mind is our priority. Here's why families trust us.",
} as const

