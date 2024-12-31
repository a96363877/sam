import type { Metadata } from "next"
import { GoogleTagManager } from "@next/third-parties/google"
import { GeistMono } from "geist/font/mono"

import { Settings } from "@/lib/meta"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"
import { Header } from "@/components/header"
import { CartProvider } from "./context/cart-context"

const baseUrl = Settings.metadataBase

export const metadata: Metadata = {
  title: Settings.title,
  metadataBase: new URL(baseUrl),
  description: Settings.description,
  keywords: Settings.keywords,
  openGraph: {
    type: Settings.openGraph.type,
    url: baseUrl,
    title: Settings.openGraph.title,
    description: Settings.openGraph.description,
    siteName: Settings.openGraph.siteName,
    images: Settings.openGraph.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },
  twitter: {
    card: Settings.twitter.card,
    title: Settings.twitter.title,
    description: Settings.twitter.description,
    site: Settings.twitter.site,
    images: Settings.twitter.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },
  alternates: {
    canonical: baseUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" suppressHydrationWarning>
      {Settings.gtmconnected && <GoogleTagManager gtmId={Settings.gtm} />}
      <body
      className="bg-gray/50"
      >
<CartProvider>
      

          {children}
        </CartProvider>
        
      </body>
    </html>
  )
}
