"use client"

import { Users, Heart, Shield, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"
import { fadeInUp } from "@/lib/animations"

const iconMap: Record<string, typeof Users> = {
  "Local Residents": Users,
  "Female-Friendly": Heart,
  "Satisfaction Guaranteed": Shield,
  "Always On Time": Clock,
}

export function SocialProofStrip() {
  return (
    <section className="relative bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {siteConfig.socialProof.map((item, index) => {
            const Icon = iconMap[item.label] || Users
            return (
              <motion.div
                key={item.label}
                initial={fadeInUp.hidden}
                whileInView={fadeInUp.visible}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{item.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
