import type { Metadata } from "next"
import { GoogleTagManager } from "@next/third-parties/google"
import { Settings } from "@/lib/meta"
import "./globals.css"
import { CartProvider } from "./context/cart-context"
import Head from "next/head"

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

  // Respond to OPTIONS method

  return (
    <html lang="ar" suppressHydrationWarning>
     <Head>
     <meta property="og:title" content="الشركة الوطنية للاسماك " />
        <meta property="og:description" content="الشركة الوطنية للاسماك " />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://www.bve.com" />
        <meta property="og:type" content="website" />
        
     </Head>
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
