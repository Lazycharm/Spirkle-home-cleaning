"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { trustPointsConfig, trustSectionConfig } from "@/config/trust"
import { imagesConfig, getImagePath } from "@/config/images"
import { fadeInUp } from "@/lib/animations"

export function TrustSection() {
  return (
    <section id="trust" className="relative px-4 py-20 md:py-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={getImagePath(imagesConfig.trust.background)}
          alt="Clean apartment background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            {trustSectionConfig.badge}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {trustSectionConfig.title}
          </h2>
          <p className="text-lg text-muted-foreground">{trustSectionConfig.description}</p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPointsConfig.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.id}
                initial={fadeInUp.hidden}
                whileInView={fadeInUp.visible}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group glass border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 h-full">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20"
                    >
                      <Icon className="h-7 w-7 text-primary" />
                    </motion.div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
