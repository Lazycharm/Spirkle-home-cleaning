"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Save, Home, Settings } from "lucide-react"
import Link from "next/link"
import { SiteConfigForm } from "@/components/admin/site-config-form"
import { ServicesForm } from "@/components/admin/services-form"
import { PricingForm } from "@/components/admin/pricing-form"
import { AddonsForm } from "@/components/admin/addons-form"
import { ContactForm } from "@/components/admin/contact-form"
import { FaqForm } from "@/components/admin/faq-form"
import { TestimonialsForm } from "@/components/admin/testimonials-form"
import { HowItWorksForm } from "@/components/admin/how-it-works-form"
import { TrustForm } from "@/components/admin/trust-form"

export default function AdminPage() {
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Settings className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="outline" size="sm">
                <Home className="h-4 w-4 mr-2" />
                View Site
              </Button>
            </Link>
            <Button onClick={handleSave} size="sm">
              <Save className="h-4 w-4 mr-2" />
              {saved ? "Saved!" : "Save All"}
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="site" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-9 mb-8">
            <TabsTrigger value="site">Site</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="addons">Addons</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
            <TabsTrigger value="trust">Trust</TabsTrigger>
          </TabsList>

          <TabsContent value="site">
            <Card>
              <CardHeader>
                <CardTitle>Site Configuration</CardTitle>
                <CardDescription>
                  Manage business information, hero section, and SEO settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SiteConfigForm onSave={handleSave} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Services</CardTitle>
                <CardDescription>
                  Manage cleaning service packages, prices, and features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ServicesForm onSave={handleSave} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing">
            <Card>
              <CardHeader>
                <CardTitle>Pricing Plans</CardTitle>
                <CardDescription>
                  Manage recurring plans, discounts, and pricing information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PricingForm onSave={handleSave} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="addons">
            <Card>
              <CardHeader>
                <CardTitle>Add-on Services</CardTitle>
                <CardDescription>
                  Manage optional add-on services and their pricing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AddonsForm onSave={handleSave} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Manage WhatsApp number, business hours, and service area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm onSave={handleSave} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>FAQ</CardTitle>
                <CardDescription>
                  Manage frequently asked questions and answers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FaqForm onSave={handleSave} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testimonials">
            <Card>
              <CardHeader>
                <CardTitle>Testimonials</CardTitle>
                <CardDescription>
                  Manage customer testimonials and reviews
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TestimonialsForm onSave={handleSave} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="how-it-works">
            <Card>
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
                <CardDescription>
                  Manage the booking process steps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <HowItWorksForm onSave={handleSave} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trust">
            <Card>
              <CardHeader>
                <CardTitle>Trust & Safety</CardTitle>
                <CardDescription>
                  Manage trust points and safety features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TrustForm onSave={handleSave} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
