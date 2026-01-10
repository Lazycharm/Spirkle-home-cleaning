"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, MessageCircle, Repeat } from "lucide-react"
import { motion } from "framer-motion"
import { pricingPlansConfig, pricingSectionConfig } from "@/config/pricing"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { fadeInUp } from "@/lib/animations"

export function PlansSection() {
  return (
    <section id="pricing" className="relative px-4 py-20 md:py-28 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
      <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl -z-10" />

      <div className="container mx-auto">
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            {pricingSectionConfig.badge}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {pricingSectionConfig.title}
          </h2>
          <p className="text-lg text-muted-foreground">{pricingSectionConfig.description}</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {pricingPlansConfig.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={fadeInUp.hidden}
              whileInView={fadeInUp.visible}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={plan.highlight ? "md:-mt-4 md:mb-4" : ""}
            >
              <Card
                className={`relative overflow-hidden transition-all duration-500 hover:shadow-2xl h-full ${
                  plan.highlight
                    ? "border-2 border-primary shadow-xl shadow-primary/20 bg-gradient-to-b from-card to-primary/5"
                    : "border-border/50 hover:shadow-primary/10"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -right-12 top-6 rotate-45 bg-primary px-12 py-1 text-xs font-bold text-primary-foreground shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <CardHeader className="pb-4 pt-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Repeat className={`h-7 w-7 ${plan.highlight ? "text-primary" : "text-primary/70"}`} />
                  </div>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{plan.discount}</span>
                    <span className="text-muted-foreground">• {plan.frequency}</span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{plan.description}</p>

                  <div className="flex items-center gap-3 rounded-xl bg-secondary/50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">Same cleaner every visit</span>
                  </div>

                  <Button
                    asChild
                    variant={plan.highlight ? "default" : "outline"}
                    className={`w-full ${plan.highlight ? "shadow-lg shadow-primary/25" : ""}`}
                  >
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Get Started
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
