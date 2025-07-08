import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Relmn - Universal Cross-Chain DeFi Optimization Protocol | AI-Powered Yield Farming",
  description:
    "Maximize your DeFi returns with Relmn's AI-powered cross-chain optimization protocol. Intelligently navigate 20+ blockchains, automate yield farming, and unlock superior returns with enterprise-grade security. Built by Tomeku.",
  keywords: [
    "DeFi optimization",
    "cross-chain yield farming",
    "AI-powered DeFi",
    "blockchain automation",
    "cryptocurrency yield",
    "OKX DEX API",
    "multi-chain DeFi",
    "smart contract audits",
    "decentralized finance",
    "Relmn protocol",
    "Tomeku",
    "DeFi security",
    "yield aggregator",
    "liquidity optimization",
  ],
  authors: [{ name: "Tomeku Development", url: "https://tomeku.com" }],
  creator: "Tomeku Development",
  publisher: "Relmn",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://relmn.com",
    siteName: "Relmn",
    title: "Relmn - Universal Cross-Chain DeFi Optimization Protocol | AI-Powered Yield Farming",
    description:
      "Maximize your DeFi returns with Relmn's AI-powered cross-chain optimization protocol. Intelligently navigate 20+ blockchains, automate yield farming, and unlock superior returns with enterprise-grade security.",
    images: [
      {
        url: "https://cdn.tomeku.com/meta-seo/relmn.png",
        width: 1200,
        height: 630,
        alt: "Relmn - Universal Cross-Chain DeFi Optimization Protocol",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@relmn",
    creator: "@tomeku",
    title: "Relmn - Universal Cross-Chain DeFi Optimization Protocol | AI-Powered Yield Farming",
    description:
      "Maximize your DeFi returns with Relmn's AI-powered cross-chain optimization protocol. Intelligently navigate 20+ blockchains, automate yield farming, and unlock superior returns.",
    images: [
      {
        url: "https://cdn.tomeku.com/meta-seo/relmn.png",
        alt: "Relmn - Universal Cross-Chain DeFi Optimization Protocol",
      },
    ],
  },
  alternates: {
    canonical: "https://relmn.com",
  },
  category: "technology",
  classification: "DeFi Protocol",
  other: {
    "msapplication-TileColor": "#84cc16",
    "theme-color": "#84cc16",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://relmn.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#84cc16" />
        <meta name="msapplication-TileColor" content="#84cc16" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
