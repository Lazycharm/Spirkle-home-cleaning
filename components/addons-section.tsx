"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { addonsConfig, addonsSectionConfig } from "@/config/addons"
import { fadeInUp } from "@/lib/animations"

export function AddonsSection() {
  return (
    <section className="relative px-4 py-20 md:py-28">
      <div className="container mx-auto">
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            {addonsSectionConfig.badge}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {addonsSectionConfig.title}
          </h2>
          <p className="text-lg text-muted-foreground">{addonsSectionConfig.description}</p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {addonsConfig.map((addon, index) => {
            const Icon = addon.icon
            return (
              <motion.div
                key={addon.id}
                initial={fadeInUp.hidden}
                whileInView={fadeInUp.visible}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20"
                    >
                      <Icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <h3 className="mb-1 font-semibold text-foreground">{addon.title}</h3>
                    <p className="mb-2 text-xs text-muted-foreground">{addon.description}</p>
                    <p className="text-lg font-bold text-primary">{addon.price}</p>
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
