"use client"

import { useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { faqsConfig } from "@/config/faq"
import { contactConfig } from "@/config/contact"
import { getWhatsAppLink, getWhatsAppDisplayNumber } from "@/lib/whatsapp"
import { fadeInUp } from "@/lib/animations"
import { dataFetcher } from "@/lib/data-fetcher"

export function FaqContactSection() {
  const [faqs, setFaqs] = useState(faqsConfig)
  const [contact, setContact] = useState(contactConfig)

  useEffect(() => {
    async function loadData() {
      try {
        const [fetchedFaqs, fetchedContact] = await Promise.all([
          dataFetcher.getFaqs(),
          dataFetcher.getContact(),
        ])
        setFaqs(fetchedFaqs)
        setContact(fetchedContact)
      } catch (error) {
        console.error("Failed to load FAQs/contact:", error)
      }
    }
    loadData()
  }, [])

  // Show only top 4 FAQs
  const topFaqs = faqs.slice(0, 4)
  return (
    <section id="faq" className="relative px-4 py-16 md:py-20">
      <div className="container mx-auto max-w-4xl">
        {/* FAQ Section */}
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-center text-3xl font-bold mb-8 text-foreground md:text-4xl">
            Common Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {topFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-border/50">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact Info - Compact */}
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-2xl font-bold mb-8 text-foreground">
            Get In Touch
          </h2>
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            <Card className="border-border/50">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">{getWhatsAppDisplayNumber()}</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">Service Area</h3>
                <p className="text-sm text-muted-foreground">{contact.serviceArea.primary}</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">Hours</h3>
                <p className="text-sm text-muted-foreground">{contact.hours.weekdays}</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="shadow-lg shadow-primary/25"
            >
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Message Us Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
