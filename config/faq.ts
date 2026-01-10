/**
 * FAQ Configuration
 * Update frequently asked questions and answers here
 */

export interface FAQ {
  id: string
  question: string
  answer: string
}

export const faqsConfig: FAQ[] = [
  {
    id: "1",
    question: "Do I need to be home during the cleaning?",
    answer:
      "No, you don't have to be home. Many of our clients give us access and we clean while they're at work. We take security very seriously and can discuss key handover arrangements.",
  },
  {
    id: "2",
    question: "Do you bring your own cleaning supplies?",
    answer:
      "Yes! We bring all necessary cleaning products and equipment. We use safe, eco-friendly products. If you prefer us to use specific products you have at home, just let us know.",
  },
  {
    id: "3",
    question: "How do I pay for the cleaning service?",
    answer:
      "We accept cash payment after the service is completed. We also accept bank transfers. Payment is due after you're satisfied with the cleaning.",
  },
  {
    id: "4",
    question: "Can I reschedule or cancel my booking?",
    answer:
      "Yes, we understand plans change. Please let us know at least 24 hours in advance via WhatsApp, and we'll reschedule at no extra charge.",
  },
  {
    id: "5",
    question: "Are monthly plans discounted?",
    answer:
      "Yes! Our recurring plans offer savings of 5-15% depending on frequency. Weekly plans get the biggest discount. Plus, you get the same trusted cleaner every visit.",
  },
  {
    id: "6",
    question: "What areas do you service?",
    answer:
      "We primarily serve City Tower and nearby buildings in Ajman. If you're in the area, send us a message and we'll confirm if we can reach you.",
  },
]

export const faqSectionConfig = {
  title: "Frequently Asked Questions",
  description: "Have questions? We've got answers.",
} as const

