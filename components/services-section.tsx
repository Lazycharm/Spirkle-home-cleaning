"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, MessageCircle, Clock } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { servicesConfig, servicesSectionConfig } from "@/config/services"
import { imagesConfig, getImagePath } from "@/config/images"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { fadeInUp } from "@/lib/animations"

export function ServicesSection() {
  return (
    <section id="services" className="relative px-4 py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl -z-10" />

      <div className="container mx-auto">
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            {servicesSectionConfig.badge}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {servicesSectionConfig.title}
          </h2>
          <p className="text-lg text-muted-foreground">{servicesSectionConfig.description}</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesConfig.map((service, index) => (
            <motion.div
              key={service.id}
              initial={fadeInUp.hidden}
              whileInView={fadeInUp.visible}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden border-border/50 bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getImagePath(service.image)}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full glass px-3 py-1.5 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="font-medium">{service.duration}</span>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="mb-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
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
      </div>
    </section>
  )
}
