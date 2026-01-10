"use client"

import { Card, CardContent } from "@/components/ui/card"
import { QrCode, MessageCircle, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { fadeInUp, scaleIn } from "@/lib/animations"

export function QrBookingSection() {
  return (
    <section className="relative px-4 py-20 md:py-28 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80 -z-10" />
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white/10 blur-3xl -z-10" />

      <div className="container mx-auto">
        <motion.div initial={fadeInUp.hidden} whileInView={fadeInUp.visible} viewport={{ once: true }}>
          <Card className="mx-auto max-w-3xl border-0 glass-strong shadow-2xl">
            <CardContent className="flex flex-col items-center p-8 text-center md:p-12">
              <motion.div
                initial={scaleIn.hidden}
                whileInView={scaleIn.visible}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2 }}
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10"
              >
                <Zap className="h-8 w-8 text-primary" />
              </motion.div>

              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                Scan & Book in 30 Seconds
              </h2>
              <p className="mb-8 text-muted-foreground max-w-md">
                Instant booking via WhatsApp — it's quick, easy, and you'll get a response within minutes!
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mb-8 flex h-56 w-56 items-center justify-center rounded-3xl bg-white shadow-xl"
              >
                <QrCode className="h-40 w-40 text-primary" />
              </motion.div>

              <p className="mb-6 text-sm text-muted-foreground">Or click the button below to chat with us directly</p>

              <Button
                asChild
                size="lg"
                className="shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-105"
              >
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
