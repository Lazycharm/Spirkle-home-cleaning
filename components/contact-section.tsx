"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contactConfig } from "@/config/contact"
import { siteConfig } from "@/config/site"
import { getWhatsAppLink, getWhatsAppDisplayNumber } from "@/lib/whatsapp"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

export function ContactSection() {
  return (
    <section id="contact" className="bg-card px-4 py-16 md:py-24">
      <div className="container mx-auto">
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            {contactConfig.contactSection.title}
          </h2>
          <p className="text-muted-foreground">{contactConfig.contactSection.description}</p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          <motion.div
            initial={fadeInUp.hidden}
            whileInView={fadeInUp.visible}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-border/50 bg-secondary/20">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <MessageCircle className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">{getWhatsAppDisplayNumber()}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={fadeInUp.hidden}
            whileInView={fadeInUp.visible}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-border/50 bg-secondary/20">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">Service Area</h3>
                <p className="text-sm text-muted-foreground">{contactConfig.serviceArea.primary}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={fadeInUp.hidden}
            whileInView={fadeInUp.visible}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-border/50 bg-secondary/20">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">Hours</h3>
                <p className="text-sm text-muted-foreground">{contactConfig.hours.weekdays}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-10 max-w-xl rounded-2xl bg-secondary/30 p-6 text-center"
        >
          <p className="mb-4 text-muted-foreground">{contactConfig.contactSection.trustMessage}</p>
          <Button asChild size="lg">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              {contactConfig.contactSection.cta.text}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
