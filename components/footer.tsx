"use client"

import { useState, useEffect } from "react"
import { Sparkles, MessageCircle, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"
import { contactConfig } from "@/config/contact"
import { getWhatsAppLink, getWhatsAppDisplayNumber } from "@/lib/whatsapp"
import { fadeInUp } from "@/lib/animations"
import { dataFetcher } from "@/lib/data-fetcher"

export function Footer() {
  const [site, setSite] = useState(siteConfig)
  const [contact, setContact] = useState(contactConfig)

  useEffect(() => {
    async function loadData() {
      try {
        const [fetchedSite, fetchedContact] = await Promise.all([
          dataFetcher.getSiteConfig(),
          dataFetcher.getContact(),
        ])
        setSite(fetchedSite)
        setContact(fetchedContact)
      } catch (error) {
        console.error("Failed to load site/contact config:", error)
      }
    }
    loadData()
  }, [])
  return (
    <footer className="relative border-t border-border/40 bg-card px-4 py-12">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={fadeInUp.hidden}
            whileInView={fadeInUp.visible}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Link href="/" className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">{site.businessName}</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              {site.tagline} in {site.location.area}, {site.location.city}. We bring sparkle to every
              home.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={fadeInUp.hidden}
            whileInView={fadeInUp.visible}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4 font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <a
                href={getWhatsAppLink()}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                {getWhatsAppDisplayNumber()}
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {site.location.fullAddress}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {contact.hours.display}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={fadeInUp.hidden}
            whileInView={fadeInUp.visible}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-3">
              {(site.navLinks ?? siteConfig.navLinks).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {site.businessName} {site.location.city}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
