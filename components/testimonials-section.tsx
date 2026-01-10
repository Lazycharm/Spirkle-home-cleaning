"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { testimonialsConfig, testimonialsSectionConfig } from "@/config/testimonials"
import { imagesConfig, getImagePath } from "@/config/images"
import { fadeInUp } from "@/lib/animations"

export function TestimonialsSection() {
  return (
    <section className="relative px-4 py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-primary/5 -z-10" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl -z-10" />

      <div className="container mx-auto">
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            {testimonialsSectionConfig.badge}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {testimonialsSectionConfig.title}
          </h2>
          <p className="text-lg text-muted-foreground">{testimonialsSectionConfig.description}</p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {testimonialsConfig.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={fadeInUp.hidden}
              whileInView={fadeInUp.visible}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group glass border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 h-full">
                <CardContent className="p-6">
                  <Quote className="mb-4 h-10 w-10 text-primary/20" />
                  <p className="mb-6 text-foreground leading-relaxed">{testimonial.text}</p>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary/20">
                      <Image
                        src={getImagePath(testimonial.avatar)}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
