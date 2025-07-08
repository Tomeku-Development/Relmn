import { HeroHeader } from "@/components/ui/hero-section-5"
import { Features } from "@/components/ui/features-8"
import { Features2 } from "@/components/ui/features-10"
import { Features3 } from "@/components/ui/features-4"
import { Footer } from "@/components/ui/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Relmn Features - AI-Powered Cross-Chain DeFi Optimization | Advanced Yield Farming",
  description:
    "Discover Relmn's powerful DeFi features: AI-powered risk assessment, autonomous rebalancing, universal cross-chain optimization, and enterprise-grade security across 20+ blockchains. Maximize your yield farming returns.",
  keywords: [
    "DeFi features",
    "AI risk assessment",
    "autonomous rebalancing",
    "cross-chain optimization",
    "yield farming automation",
    "DeFi security features",
    "multi-chain protocol",
    "smart contract features",
  ],
  openGraph: {
    title: "Relmn Features - AI-Powered Cross-Chain DeFi Optimization",
    description:
      "Discover Relmn's powerful DeFi features: AI-powered risk assessment, autonomous rebalancing, universal cross-chain optimization, and enterprise-grade security across 20+ blockchains.",
    images: [
      {
        url: "https://cdn.tomeku.com/meta-seo/relmn.png",
        width: 1200,
        height: 630,
        alt: "Relmn Features - AI-Powered DeFi Optimization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relmn Features - AI-Powered Cross-Chain DeFi Optimization",
    description:
      "Discover Relmn's powerful DeFi features: AI-powered risk assessment, autonomous rebalancing, universal cross-chain optimization, and enterprise-grade security.",
    images: ["https://cdn.tomeku.com/meta-seo/relmn.png"],
  },
}

export default function FeaturesPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen bg-white dark:bg-black pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Relmn Features</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the powerful features that make Relmn the ultimate DeFi optimization protocol.
            </p>
          </div>
        </div>
        <Features />
        <Features2 />
        <Features3 />
      </main>
      <Footer />
    </>
  )
}
