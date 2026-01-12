"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ChevronRight, Play } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import { imagesConfig, getImagePath } from "@/config/images"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { fadeInUp, slideInRight, scaleIn, transitions } from "@/lib/animations"

export function HeroSection() {
  const hero = siteConfig.hero

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getImagePath(imagesConfig.hero.background)}
          alt="Clean modern apartment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="max-w-2xl w-full">
          {hero.badge.show && (
            <motion.div
              initial={fadeInUp.hidden}
              animate={fadeInUp.visible}
              transition={transitions.default}
            >
              <Badge
                variant="secondary"
                className="mb-6 px-4 py-2 text-sm font-medium glass border-primary/20 shadow-lg"
              >
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
                {hero.badge.text}
              </Badge>
            </motion.div>
          )}

          <motion.h1
            initial={fadeInUp.hidden}
            animate={fadeInUp.visible}
            transition={{ ...transitions.default, delay: 0.1 }}
            className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {hero.title} <span className="text-primary">{hero.titleHighlight}</span>
          </motion.h1>

          <motion.p
            initial={fadeInUp.hidden}
            animate={fadeInUp.visible}
            transition={{ ...transitions.default, delay: 0.2 }}
            className="mb-8 text-lg text-muted-foreground sm:text-xl max-w-xl leading-relaxed"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={fadeInUp.hidden}
            animate={fadeInUp.visible}
            transition={{ ...transitions.default, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="text-base shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-105"
            >
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {hero.cta.primary.text}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base glass border-border/50 hover:bg-secondary/50 transition-all bg-transparent"
            >
              <a href={hero.cta.secondary.href}>
                {hero.cta.secondary.text}
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={fadeInUp.hidden}
            animate={fadeInUp.visible}
            transition={{ ...transitions.default, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-8"
          >
            {hero.stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Image Card (Desktop) */}
      <motion.div
        initial={slideInRight.hidden}
        animate={slideInRight.visible}
        transition={{ ...transitions.slow, delay: 0.4 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block"
      >
        <div className="relative">
          <div className="glass-strong rounded-3xl p-3 shadow-2xl">
            <Image
              src={getImagePath(imagesConfig.hero.floatingCard)}
              alt="Professional cleaner"
              width={400}
              height={500}
              className="rounded-2xl object-cover"
            />
          </div>
          {/* Floating Badge */}
          <motion.div
            initial={scaleIn.hidden}
            animate={scaleIn.visible}
            transition={{ delay: 0.8, type: "spring" }}
            className="absolute -bottom-4 -left-4 glass-strong rounded-2xl p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Play className="h-6 w-6 text-primary fill-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Watch Our Story</p>
                <p className="text-sm text-muted-foreground">2 min video</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
