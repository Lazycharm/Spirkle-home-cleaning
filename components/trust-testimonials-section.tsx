"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, UserCheck, ShieldCheck, Heart } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { trustPointsConfig } from "@/config/trust"
import { testimonialsConfig } from "@/config/testimonials"
import { imagesConfig, getImagePath } from "@/config/images"
import { fadeInUp } from "@/lib/animations"

// Show only top 3 trust points
const topTrustPoints = trustPointsConfig.slice(0, 3)
// Show only 2 testimonials
const topTestimonials = testimonialsConfig.slice(0, 2)

export function TrustTestimonialsSection() {
  return (
    <section className="relative px-4 py-16 md:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        {/* Trust Points - Visual Icons */}
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-center text-3xl font-bold mb-8 text-foreground md:text-4xl">
            Why Neighbors Trust Us
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-3xl mx-auto">
            {topTrustPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={point.id}
                  initial={fadeInUp.hidden}
                  whileInView={fadeInUp.visible}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Testimonials - Visual Cards */}
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-2xl font-bold mb-8 text-foreground">
            What Our Neighbors Say
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {topTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={fadeInUp.hidden}
                whileInView={fadeInUp.visible}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass border-border/30 hover:shadow-lg transition-all h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <Quote className="mb-3 h-8 w-8 text-primary/20" />
                    <p className="mb-4 text-foreground leading-relaxed text-sm">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-primary/20">
                        <Image
                          src={getImagePath(testimonial.avatar)}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
