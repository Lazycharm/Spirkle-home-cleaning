/**
 * Testimonials Configuration
 * Update customer testimonials, names, and avatars here
 */

export interface Testimonial {
  id: string
  name: string
  location: string
  avatar: string
  text: string
}

export const testimonialsConfig: Testimonial[] = [
  {
    id: "1",
    name: "Amina K.",
    location: "City Tower, Floor 12",
    avatar: "professional-woman-portrait-smiling-arab.jpg",
    text: "They treat my home like their own. So professional and thorough every single time. Highly recommend!",
  },
  {
    id: "2",
    name: "Mohammed R.",
    location: "City Tower, Floor 8",
    avatar: "professional-man-portrait-smiling-arab-businessman.jpg",
    text: "As a busy professional, having a reliable cleaning service is essential. Bloom & Broom never disappoints.",
  },
  {
    id: "3",
    name: "Fatima A.",
    location: "Nearby Building",
    avatar: "professional-woman-portrait-hijab-smiling-friendly.jpg",
    text: "I love that I can request a female cleaner. They're always on time and my apartment looks amazing after.",
  },
]

export const testimonialsSectionConfig = {
  badge: "Testimonials",
  title: "What Our Neighbors Say",
  description: "Don't just take our word for it — hear from residents who trust us",
} as const

