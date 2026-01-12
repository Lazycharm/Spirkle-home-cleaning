"use client"

import { Button } from "@/components/ui/button"
import { QrCode, MessageCircle, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { fadeInUp } from "@/lib/animations"

const steps = [
  {
    icon: QrCode,
    title: "Scan & Browse",
    description: "See services instantly",
  },
  {
    icon: MessageCircle,
    title: "Message Us",
    description: "Book via WhatsApp",
  },
  {
    icon: Sparkles,
    title: "We Clean",
    description: "Your home sparkles",
  },
]

export function QuickBookingSection() {
  return (
    <section className="relative px-4 py-16 md:py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground md:text-4xl">
            Book in 3 Simple Steps
          </h2>
          <p className="text-muted-foreground">Get started in under a minute</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={fadeInUp.hidden}
                whileInView={fadeInUp.visible}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40"
          >
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Book Now on WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
