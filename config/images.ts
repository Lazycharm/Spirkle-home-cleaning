/**
 * Image Configuration
 * Centralized image paths mapping
 * Update image filenames here when replacing images
 */

export const imagesConfig = {
  // Hero Section
  hero: {
    background: "modern-clean-apartment-living-room-bright-natural-.jpg",
    floatingCard: "professional-cleaner-woman-cleaning-modern-kitchen.jpg",
  },

  // Services
  services: {
    studio: "clean-modern-studio-apartment-bright-interior-mini.jpg",
    "1-bedroom": "clean-one-bedroom-apartment-modern-living-room-bri.jpg",
    "2-bedroom": "clean-two-bedroom-apartment-spacious-modern-interi.jpg",
  },

  // Trust Section
  trust: {
    background: "clean-bright-modern-apartment-interior-soft-warm-l.jpg",
  },

  // Placeholders
  placeholders: {
    default: "placeholder.svg",
    user: "placeholder-user.jpg",
    logo: "placeholder-logo.svg",
  },
} as const

/**
 * Get image path helper
 * Returns the full path from public directory
 */
export function getImagePath(imageName: string): string {
  return `/${imageName}`
}

