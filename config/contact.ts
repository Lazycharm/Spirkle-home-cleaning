/**
 * Contact Information Configuration
 * Update WhatsApp number, hours, and contact details here
 */

export const contactConfig = {
  // WhatsApp Configuration
  whatsapp: {
    number: "971XXXXXXXXX", // Replace with actual number (format: country code + number without +)
    defaultMessage: "Hello! I'd like to book a cleaning service.",
    displayNumber: "+971 XX XXX XXXX", // Formatted for display
  },

  // Business Hours
  hours: {
    weekdays: "Sat–Thu: 8AM–8PM",
    display: "8:00 AM - 8:00 PM",
  },

  // Service Area
  serviceArea: {
    primary: "City Tower & Nearby, Ajman",
    description: "We primarily serve City Tower and nearby buildings in Ajman.",
  },

  // Contact Section
  contactSection: {
    title: "Get In Touch",
    description: "Ready to book or have questions? We're here to help!",
    trustMessage:
      "We're your neighbors — based right here in City Tower. We understand your needs and treat every home like our own.",
    cta: {
      text: "Message Us Now",
    },
  },
} as const

