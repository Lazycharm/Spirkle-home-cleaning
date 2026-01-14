"use client"

import { useState, useEffect } from "react"
import { Users, Heart, Shield, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"
import { fadeInUp } from "@/lib/animations"
import { dataFetcher } from "@/lib/data-fetcher"

const iconMap: Record<string, typeof Users> = {
  "Local Residents": Users,
  "Female-Friendly": Heart,
  "Satisfaction Guaranteed": Shield,
  "Always On Time": Clock,
}

export function SocialProofStrip() {
  const [config, setConfig] = useState(siteConfig)

  useEffect(() => {
    async function loadConfig() {
      try {
        const fetchedConfig = await dataFetcher.getSiteConfig()
        setConfig(fetchedConfig)
      } catch (error) {
        console.error("Failed to load site config:", error)
      }
    }
    loadConfig()
  }, [])
  return (
    <section className="relative bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {(config.socialProof ?? siteConfig.socialProof).map((item, index) => {
            const Icon = iconMap[item.label] || Users
            return (
              <motion.div
                key={item.label}
                initial={fadeInUp.hidden}
                whileInView={fadeInUp.visible}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2.5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
