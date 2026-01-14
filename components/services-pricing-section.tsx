"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, MessageCircle, Clock, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { servicesConfig } from "@/config/services"
import { pricingPlansConfig } from "@/config/pricing"
import { addonsConfig } from "@/config/addons"
import { imagesConfig, getImagePath } from "@/config/images"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { fadeInUp } from "@/lib/animations"
import { dataFetcher } from "@/lib/data-fetcher"

export function ServicesPricingSection() {
  const [services, setServices] = useState(servicesConfig)
  const [pricing, setPricing] = useState(pricingPlansConfig)
  const [addons, setAddons] = useState(addonsConfig)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const [fetchedServices, fetchedPricing, fetchedAddons] = await Promise.all([
          dataFetcher.getServices(),
          dataFetcher.getPricing(),
          dataFetcher.getAddons(),
        ])
        setServices(fetchedServices)
        setPricing(fetchedPricing)
        setAddons(fetchedAddons)
      } catch (error) {
        console.error("Failed to load services/pricing/addons:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadData()
  }, [])
  return (
    <section id="services" className="relative px-4 py-16 md:py-20">
      <div className="container mx-auto">
        {/* Compact Header */}
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            Simple Pricing, Clear Value
          </h2>
          <p className="text-muted-foreground">Choose your perfect cleaning package</p>
        </motion.div>

        {/* Services Grid - Compact */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={fadeInUp.hidden}
              whileInView={fadeInUp.visible}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden border-border/50 bg-card hover:shadow-xl hover:shadow-primary/10 transition-all h-full">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={getImagePath(service.image)}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur-sm px-2.5 py-1 text-xs">
                    <Clock className="h-3 w-3 text-primary" />
                    <span className="font-medium">{service.duration}</span>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <span className="text-xl font-bold text-primary">{service.price}</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="mb-4 space-y-2">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full"
                    size="sm"
                  >
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Book Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pricing Plans - Compact Horizontal */}
        <div className="mb-12">
          <h3 className="text-center text-xl font-semibold mb-6 text-foreground">
            Save More with Recurring Plans
          </h3>
          <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
            {pricingPlansConfig.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={fadeInUp.hidden}
                whileInView={fadeInUp.visible}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full transition-all ${plan.highlight ? "border-2 border-primary shadow-lg shadow-primary/20" : ""}`}>
                  <CardHeader className="pb-3">
                    {plan.badge && (
                      <span className="mb-2 inline-block text-xs font-semibold text-primary">
                        {plan.badge}
                      </span>
                    )}
                    <CardTitle className="text-lg">{plan.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xl font-bold text-primary">{plan.discount}</span>
                      <span className="text-sm text-muted-foreground">• {plan.frequency}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <Button
                      asChild
                      variant={plan.highlight ? "default" : "outline"}
                      className="w-full"
                      size="sm"
                    >
                      <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                        Get Started
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Add-ons - Compact Grid */}
        <div>
          <h3 className="text-center text-lg font-semibold mb-4 text-foreground">
            Add Extra Services
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto">
            {addons.map((addon, index) => {
              const Icon = addon.icon
              return (
                <motion.div
                  key={addon.id}
                  initial={fadeInUp.hidden}
                  whileInView={fadeInUp.visible}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="text-center hover:shadow-lg transition-all h-full">
                    <CardContent className="p-4">
                      <div className="flex justify-center mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <h4 className="font-semibold text-sm mb-1">{addon.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{addon.description}</p>
                      <p className="text-sm font-bold text-primary">{addon.price}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
