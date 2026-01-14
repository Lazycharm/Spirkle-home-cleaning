import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { siteConfig } from "@/config/site"
import { createClient } from "@/lib/supabase/server"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

async function getSiteConfig() {
  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from("site_config")
      .select("*")
      .eq("key", "site")
      .single()

    if (data?.value) {
      return data.value
    }
  } catch (error) {
    console.warn("Failed to fetch site config for metadata, using fallback:", error)
  }
  return siteConfig
}

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig()
  
  return {
    title: config.seo?.title || siteConfig.seo.title,
    description: config.seo?.description || siteConfig.seo.description,
    generator: "v0.app",
    icons: {
      icon: [
        {
          url: "/icon-light-32x32.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/icon-dark-32x32.png",
          media: "(prefers-color-scheme: dark)",
        },
        {
          url: "/icon.svg",
          type: "image/svg+xml",
        },
      ],
      apple: "/apple-icon.png",
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${plusJakartaSans.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
