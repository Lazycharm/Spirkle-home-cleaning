"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { faqsConfig, faqSectionConfig } from "@/config/faq"
import { fadeInUp } from "@/lib/animations"

export function FaqSection() {
  return (
    <section id="faq" className="bg-card px-4 py-16 md:py-24">
      <div className="container mx-auto">
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{faqSectionConfig.title}</h2>
          <p className="text-muted-foreground">{faqSectionConfig.description}</p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqsConfig.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-border/50">
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
