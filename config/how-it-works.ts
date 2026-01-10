/**
 * How It Works Configuration
 * Update booking process steps here
 */

import { QrCode, MessageCircle, Sparkles, LucideIcon } from "lucide-react"

export interface Step {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

export const stepsConfig: Step[] = [
  {
    id: "1",
    icon: QrCode,
    title: "Scan QR or Visit Website",
    description: "Use our QR code or visit our website to see services and pricing",
  },
  {
    id: "2",
    icon: MessageCircle,
    title: "Book via WhatsApp",
    description: "Send us a message with your apartment details and preferred time",
  },
  {
    id: "3",
    icon: Sparkles,
    title: "Relax While We Clean",
    description: "Our trusted team arrives on time and leaves your home sparkling",
  },
]

export const howItWorksSectionConfig = {
  badge: "Simple Process",
  title: "How It Works",
  description: "Booking your cleaning is simple and hassle-free",
} as const

