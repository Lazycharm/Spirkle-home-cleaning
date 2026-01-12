/**
 * Admin Storage Utility
 * Handles saving and loading config data from localStorage
 * Can be easily replaced with API calls later
 */

export const adminStorage = {
  get: <T>(key: string, defaultValue: T): T => {
    if (typeof window === "undefined") return defaultValue
    try {
      const item = localStorage.getItem(`admin_${key}`)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue
    }
  },

  set: <T>(key: string, value: T): void => {
    if (typeof window === "undefined") return
    try {
      localStorage.setItem(`admin_${key}`, JSON.stringify(value))
    } catch (error) {
      console.error("Failed to save to localStorage:", error)
    }
  },

  remove: (key: string): void => {
    if (typeof window === "undefined") return
    localStorage.removeItem(`admin_${key}`)
  },

  clear: (): void => {
    if (typeof window === "undefined") return
    Object.keys(localStorage)
      .filter((key) => key.startsWith("admin_"))
      .forEach((key) => localStorage.removeItem(key))
  },
}
