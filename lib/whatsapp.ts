/**
 * WhatsApp Utility Functions
 * Centralized WhatsApp link generation
 */

import { contactConfig } from "@/config/contact"

/**
 * Generate WhatsApp link with optional custom message
 */
export function getWhatsAppLink(customMessage?: string): string {
  const number = contactConfig.whatsapp.number
  const message = customMessage || contactConfig.whatsapp.defaultMessage
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${encodedMessage}`
}

/**
 * Get formatted WhatsApp number for display
 */
export function getWhatsAppDisplayNumber(): string {
  return contactConfig.whatsapp.displayNumber
}

/**
 * Get raw WhatsApp number
 */
export function getWhatsAppNumber(): string {
  return contactConfig.whatsapp.number
}

