import type { Metadata } from "next"
import { GoogleTagManager } from "@next/third-parties/google"
import { Settings } from "@/lib/meta"
import "./globals.css"
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
      url: new URL(image.url, baseUrl).toString(),
    })),
  },
  twitter: {
    card: Settings.twitter.card,
    title: Settings.twitter.title,
    description: Settings.twitter.description,
    site: Settings.twitter.site,
    images: Settings.twitter.images.map((image) => ({
      ...image,
      url: new URL(image.url, baseUrl).toString(),
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
      <head />
      <body className="bg-gray/50">
        <CartProvider>
          {children}
        </CartProvider>
        {Settings.gtmconnected && <GoogleTagManager gtmId={Settings.gtm} />}
      </body>
    </html>
  )
}

