/**
 * Shared Animation Variants
 * Centralized Framer Motion animations for consistency
 */

import { Variants } from "framer-motion"

/**
 * Fade in from bottom animation
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

/**
 * Fade in animation
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

/**
 * Scale in animation
 */
export const scaleIn: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
}

/**
 * Slide in from right
 */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
}

/**
 * Stagger children animation
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

/**
 * Common transition settings
 */
export const transitions = {
  default: { duration: 0.6 },
  fast: { duration: 0.3 },
  slow: { duration: 0.8 },
  spring: { type: "spring", stiffness: 100 },
} as const

