"use client"

import { motion } from "framer-motion"
import { stepsConfig, howItWorksSectionConfig } from "@/config/how-it-works"
import { fadeInUp, scaleIn } from "@/lib/animations"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-4 py-20 md:py-28 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-accent/10 -z-10" />

      <div className="container mx-auto">
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            {howItWorksSectionConfig.badge}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {howItWorksSectionConfig.title}
          </h2>
          <p className="text-lg text-muted-foreground">{howItWorksSectionConfig.description}</p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {stepsConfig.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.id}
                initial={fadeInUp.hidden}
                whileInView={fadeInUp.visible}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Connector line */}
                {index < stepsConfig.length - 1 && (
                  <div className="absolute left-[calc(50%+50px)] top-12 hidden h-0.5 w-[calc(100%-100px)] bg-gradient-to-r from-primary/50 to-primary/10 md:block" />
                )}

                <motion.div whileHover={{ scale: 1.05 }} className="relative mb-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-card shadow-xl shadow-primary/10 border border-border/50">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <motion.div
                    initial={scaleIn.hidden}
                    whileInView={scaleIn.visible}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                    className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-lg"
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>

                <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground max-w-xs">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
