/**
 * Add-on Services Configuration
 * Update add-on services, prices, and descriptions here
 */

import { Refrigerator, Flame, Sun, Shirt, LucideIcon } from "lucide-react"

export interface Addon {
  id: string
  icon: LucideIcon
  title: string
  price: string
  description: string
}

export const addonsConfig: Addon[] = [
  {
    id: "fridge",
    icon: Refrigerator,
    title: "Fridge Cleaning",
    price: "+AED 30",
    description: "Deep clean inside & out",
  },
  {
    id: "oven",
    icon: Flame,
    title: "Oven Cleaning",
    price: "+AED 40",
    description: "Remove grease & buildup",
  },
  {
    id: "balcony",
    icon: Sun,
    title: "Balcony Cleaning",
    price: "+AED 25",
    description: "Sweep, mop & organize",
  },
  {
    id: "ironing",
    icon: Shirt,
    title: "Ironing Service",
    price: "+AED 35",
    description: "Up to 10 garments",
  },
]

export const addonsSectionConfig = {
  badge: "Extras",
  title: "Add-on Services",
  description: "Customize your cleaning with these optional extras",
} as const

