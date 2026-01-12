"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { contactConfig } from "@/config/contact"

export function ContactForm({ onSave }: { onSave: () => void }) {
  const [isLoading, setIsLoading] = useState(false)
  const [contactData, setContactData] = useState<any>(null)

  useEffect(() => {
    fetchContactConfig()
  }, [])

  const fetchContactConfig = async () => {
    try {
      const response = await fetch("/api/contact")
      if (response.ok) {
        const result = await response.json()
        if (result.data) {
          setContactData(result.data)
        }
      }
    } catch (error) {
      console.error("Failed to fetch contact config:", error)
    }
  }

  const defaultValues = contactData ? {
    whatsappNumber: contactData.whatsapp?.number || contactConfig.whatsapp.number,
    whatsappMessage: contactData.whatsapp?.defaultMessage || contactConfig.whatsapp.defaultMessage,
    whatsappDisplay: contactData.whatsapp?.displayNumber || contactConfig.whatsapp.displayNumber,
    hoursWeekdays: contactData.hours?.weekdays || contactConfig.hours.weekdays,
    hoursDisplay: contactData.hours?.display || contactConfig.hours.display,
    serviceAreaPrimary: contactData.serviceArea?.primary || contactConfig.serviceArea.primary,
    serviceAreaDescription: contactData.serviceArea?.description || contactConfig.serviceArea.description,
    contactTitle: contactData.contactSection?.title || contactConfig.contactSection.title,
    contactDescription: contactData.contactSection?.description || contactConfig.contactSection.description,
    contactTrustMessage: contactData.contactSection?.trustMessage || contactConfig.contactSection.trustMessage,
    contactCtaText: contactData.contactSection?.cta?.text || contactConfig.contactSection.cta.text,
  } : {
    whatsappNumber: contactConfig.whatsapp.number,
    whatsappMessage: contactConfig.whatsapp.defaultMessage,
    whatsappDisplay: contactConfig.whatsapp.displayNumber,
    hoursWeekdays: contactConfig.hours.weekdays,
    hoursDisplay: contactConfig.hours.display,
    serviceAreaPrimary: contactConfig.serviceArea.primary,
    serviceAreaDescription: contactConfig.serviceArea.description,
    contactTitle: contactConfig.contactSection.title,
    contactDescription: contactConfig.contactSection.description,
    contactTrustMessage: contactConfig.contactSection.trustMessage,
    contactCtaText: contactConfig.contactSection.cta.text,
  }

  const { register, handleSubmit } = useForm({
    defaultValues,
  })

  const onSubmit = async (data: any) => {
    setIsLoading(true)
    try {
      const contactConfigData = {
        whatsapp: {
          number: data.whatsappNumber,
          defaultMessage: data.whatsappMessage,
          displayNumber: data.whatsappDisplay,
        },
        hours: {
          weekdays: data.hoursWeekdays,
          display: data.hoursDisplay,
        },
        serviceArea: {
          primary: data.serviceAreaPrimary,
          description: data.serviceAreaDescription,
        },
        contactSection: {
          title: data.contactTitle,
          description: data.contactDescription,
          trustMessage: data.contactTrustMessage,
          cta: {
            text: data.contactCtaText,
          },
        },
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactConfigData),
      })

      if (response.ok) {
        await fetchContactConfig()
        onSave()
      }
    } catch (error) {
      console.error("Failed to save contact config:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">WhatsApp</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
            <Input
              id="whatsappNumber"
              {...register("whatsappNumber")}
              placeholder="971XXXXXXXXX"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatsappDisplay">Display Number</Label>
            <Input
              id="whatsappDisplay"
              {...register("whatsappDisplay")}
              placeholder="+971 XX XXX XXXX"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="whatsappMessage">Default Message</Label>
            <Textarea
              id="whatsappMessage"
              {...register("whatsappMessage")}
              rows={2}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Business Hours</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="hoursWeekdays">Weekdays Display</Label>
            <Input id="hoursWeekdays" {...register("hoursWeekdays")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="hoursDisplay">Hours Display</Label>
            <Input id="hoursDisplay" {...register("hoursDisplay")} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Service Area</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="serviceAreaPrimary">Primary Service Area</Label>
            <Input id="serviceAreaPrimary" {...register("serviceAreaPrimary")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="serviceAreaDescription">Service Area Description</Label>
            <Textarea
              id="serviceAreaDescription"
              {...register("serviceAreaDescription")}
              rows={2}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Contact Section</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="contactTitle">Title</Label>
            <Input id="contactTitle" {...register("contactTitle")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactDescription">Description</Label>
            <Textarea
              id="contactDescription"
              {...register("contactDescription")}
              rows={2}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactTrustMessage">Trust Message</Label>
            <Textarea
              id="contactTrustMessage"
              {...register("contactTrustMessage")}
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactCtaText">CTA Button Text</Label>
            <Input id="contactCtaText" {...register("contactCtaText")} />
          </div>
        </div>
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Saving..." : "Save Changes"}
      </Button>
    </form>
  )
}
