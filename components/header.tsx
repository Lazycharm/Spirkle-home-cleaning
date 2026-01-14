"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MessageCircle, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { fadeInUp, transitions } from "@/lib/animations"
import { dataFetcher } from "@/lib/data-fetcher"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={transitions.default}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-18 items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30"
          >
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </motion.div>
          <span className="text-xl font-bold text-foreground">{config.businessName}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {(config.navLinks ?? siteConfig.navLinks).map((link, index) => (
            <motion.div
              key={link.href}
              initial={fadeInUp.hidden}
              animate={fadeInUp.visible}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.div
            initial={fadeInUp.hidden}
            animate={fadeInUp.visible}
            transition={{ delay: 0.5 }}
          >
            <Button
              asChild
              className="hidden sm:flex shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              size="sm"
            >
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Book Now
              </a>
            </Button>
          </motion.div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-secondary">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[85vw] max-w-[320px] sm:w-[320px] bg-background/95 backdrop-blur-xl border-l border-border/50 p-0 flex flex-col"
            >
              {/* Header Section */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
                    <Sparkles className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-lg font-bold text-foreground">{config.businessName}</span>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-6 flex flex-col gap-1 overflow-y-auto">
                {(config.navLinks ?? siteConfig.navLinks).map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-4 py-3.5 rounded-lg text-base font-medium text-foreground transition-all hover:bg-primary/10 hover:text-primary active:bg-primary/20 group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* WhatsApp Button */}
              <div className="p-6 pt-4 border-t border-border/50">
                <Button 
                  asChild 
                  className="w-full h-12 text-base font-semibold shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all"
                  size="lg"
                >
                  <a 
                    href={getWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book via WhatsApp
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
