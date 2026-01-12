"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/config/site"

interface SiteConfigFormData {
  businessName: string
  tagline: string
  city: string
  area: string
  fullAddress: string
  serviceArea: string
  heroTitle: string
  heroTitleHighlight: string
  heroDescription: string
  heroBadgeText: string
  stats: { value: string; label: string }[]
  seoTitle: string
  seoDescription: string
}

export function SiteConfigForm({ onSave }: { onSave: () => void }) {
  const [isLoading, setIsLoading] = useState(false)
  const [siteData, setSiteData] = useState<any>(null)
  
  useEffect(() => {
    fetchSiteConfig()
  }, [])

  const fetchSiteConfig = async () => {
    try {
      const response = await fetch("/api/config?key=site")
      if (response.ok) {
        const result = await response.json()
        if (result.data) {
          setSiteData(result.data)
        }
      }
    } catch (error) {
      console.error("Failed to fetch site config:", error)
    }
  }

  const defaultValues: SiteConfigFormData = siteData ? {
    businessName: siteData.businessName || siteConfig.businessName,
    tagline: siteData.tagline || siteConfig.tagline,
    city: siteData.location?.city || siteConfig.location.city,
    area: siteData.location?.area || siteConfig.location.area,
    fullAddress: siteData.location?.fullAddress || siteConfig.location.fullAddress,
    serviceArea: siteData.location?.serviceArea || siteConfig.location.serviceArea,
    heroTitle: siteData.hero?.title || siteConfig.hero.title,
    heroTitleHighlight: siteData.hero?.titleHighlight || siteConfig.hero.titleHighlight,
    heroDescription: siteData.hero?.description || siteConfig.hero.description,
    heroBadgeText: siteData.hero?.badge?.text || siteConfig.hero.badge.text,
    stats: siteData.hero?.stats || siteConfig.hero.stats,
    seoTitle: siteData.seo?.title || siteConfig.seo.title,
    seoDescription: siteData.seo?.description || siteConfig.seo.description,
  } : {
    businessName: siteConfig.businessName,
    tagline: siteConfig.tagline,
    city: siteConfig.location.city,
    area: siteConfig.location.area,
    fullAddress: siteConfig.location.fullAddress,
    serviceArea: siteConfig.location.serviceArea,
    heroTitle: siteConfig.hero.title,
    heroTitleHighlight: siteConfig.hero.titleHighlight,
    heroDescription: siteConfig.hero.description,
    heroBadgeText: siteConfig.hero.badge.text,
    stats: siteConfig.hero.stats,
    seoTitle: siteConfig.seo.title,
    seoDescription: siteConfig.seo.description,
  }

  const { register, handleSubmit, setValue, watch } = useForm<SiteConfigFormData>({
    defaultValues,
  })

  const stats = watch("stats")

  const onSubmit = async (data: SiteConfigFormData) => {
    setIsLoading(true)
    try {
      const siteConfigData = {
        businessName: data.businessName,
        tagline: data.tagline,
        location: {
          city: data.city,
          area: data.area,
          fullAddress: data.fullAddress,
          serviceArea: data.serviceArea,
        },
        hero: {
          title: data.heroTitle,
          titleHighlight: data.heroTitleHighlight,
          description: data.heroDescription,
          badge: {
            text: data.heroBadgeText,
            show: true,
          },
          stats: data.stats,
          cta: {
            primary: { text: "Book on WhatsApp" },
            secondary: { text: "See Pricing", href: "#pricing" },
          },
        },
        seo: {
          title: data.seoTitle,
          description: data.seoDescription,
        },
      }

      const response = await fetch("/api/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: "site", value: siteConfigData }),
      })

      if (response.ok) {
        await fetchSiteConfig()
        onSave()
      }
    } catch (error) {
      console.error("Failed to save site config:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateStat = (index: number, field: "value" | "label", value: string) => {
    const newStats = [...stats]
    newStats[index] = { ...newStats[index], [field]: value }
    setValue("stats", newStats)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="businessName">Business Name</Label>
          <Input id="businessName" {...register("businessName")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tagline">Tagline</Label>
          <Input id="tagline" {...register("tagline")} />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Location</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" {...register("city")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="area">Area</Label>
            <Input id="area" {...register("area")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fullAddress">Full Address</Label>
            <Input id="fullAddress" {...register("fullAddress")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="serviceArea">Service Area</Label>
            <Input id="serviceArea" {...register("serviceArea")} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Hero Section</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="heroTitle">Hero Title</Label>
            <Input id="heroTitle" {...register("heroTitle")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="heroTitleHighlight">Hero Title Highlight</Label>
            <Input id="heroTitleHighlight" {...register("heroTitleHighlight")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="heroDescription">Hero Description</Label>
            <Textarea id="heroDescription" {...register("heroDescription")} rows={3} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="heroBadgeText">Hero Badge Text</Label>
            <Input id="heroBadgeText" {...register("heroBadgeText")} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Hero Stats</h3>
        {stats.map((stat, index) => (
          <div key={index} className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Value {index + 1}</Label>
              <Input
                value={stat.value}
                onChange={(e) => updateStat(index, "value", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Label {index + 1}</Label>
              <Input
                value={stat.label}
                onChange={(e) => updateStat(index, "label", e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">SEO</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="seoTitle">SEO Title</Label>
            <Input id="seoTitle" {...register("seoTitle")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="seoDescription">SEO Description</Label>
            <Textarea id="seoDescription" {...register("seoDescription")} rows={3} />
          </div>
        </div>
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Saving..." : "Save Changes"}
      </Button>
    </form>
  )
}
