import { HeroHeader } from "@/components/ui/hero-section-5"
import { Footer } from "@/components/ui/footer-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Zap, Shield, Globe, Cpu } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Relmn Technology Stack - Enterprise-Grade DeFi Infrastructure | OKX DEX API Integration",
  description:
    "Explore Relmn's battle-tested technology stack: Next.js frontend, Solidity smart contracts, OKX DEX API integration, AI analytics, and enterprise security. Built for 99.9% uptime and maximum performance.",
  keywords: [
    "DeFi technology stack",
    "OKX DEX API",
    "Solidity smart contracts",
    "blockchain infrastructure",
    "DeFi architecture",
    "enterprise DeFi security",
    "multi-chain technology",
    "AI DeFi analytics",
  ],
  openGraph: {
    title: "Relmn Technology Stack - Enterprise-Grade DeFi Infrastructure",
    description:
      "Explore Relmn's battle-tested technology stack: Next.js frontend, Solidity smart contracts, OKX DEX API integration, AI analytics, and enterprise security.",
    images: [
      {
        url: "https://cdn.tomeku.com/meta-seo/relmn.png",
        width: 1200,
        height: 630,
        alt: "Relmn Technology Stack - Enterprise DeFi Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relmn Technology Stack - Enterprise-Grade DeFi Infrastructure",
    description:
      "Explore Relmn's battle-tested technology stack: OKX DEX API integration, Solidity smart contracts, AI analytics, and enterprise security.",
    images: ["https://cdn.tomeku.com/meta-seo/relmn.png"],
  },
}

export default function TechnologyPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen bg-white dark:bg-black pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Technology Stack</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on enterprise-grade technology with cutting-edge integrations for maximum performance and security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <TechCard
              icon={Code}
              title="Frontend Stack"
              description="Next.js, React, TypeScript, Tailwind CSS for blazing-fast, responsive user experience"
              technologies={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
            />

            <TechCard
              icon={Shield}
              title="Smart Contracts"
              description="Solidity-based contracts for broad EVM compatibility and secure protocol logic"
              technologies={["Solidity", "EVM Compatible", "Multi-Chain"]}
            />

            <TechCard
              icon={Database}
              title="Oracles & Data"
              description="Decentralized, real-time APY data and price feeds for accurate decision-making"
              technologies={["Chainlink", "DIA", "Real-time Data"]}
            />

            <TechCard
              icon={Globe}
              title="OKX DEX API"
              description="Core engine for optimal trade execution and deep liquidity access across 500+ DEXs"
              technologies={["OKX DEX API", "20+ Chains", "500+ DEXs", "99.9% Uptime"]}
              featured
            />

            <TechCard
              icon={Zap}
              title="Wallet Integration"
              description="Seamless integration with major wallet providers for broad user accessibility"
              technologies={["MetaMask", "WalletConnect", "Multi-Wallet"]}
            />

            <TechCard
              icon={Cpu}
              title="AI & Analytics"
              description="Advanced machine learning for risk assessment and predictive analytics"
              technologies={["Machine Learning", "Risk Scoring", "Predictive Analytics"]}
            />
          </div>

          <Card className="bg-gradient-to-r from-lime-500 to-lime-600 text-white border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Future Integration: XLayer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-lime-100 mb-6">
                Relmn is ideally positioned to leverage XLayer's robust EVM-compatible infrastructure for expanded
                cross-chain capabilities, reduced gas fees, and enhanced transaction throughput.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  Enhanced Cross-Chain
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  Reduced Gas Fees
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  Higher Throughput
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  Battle-Tested EVM
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}

interface TechCardProps {
  icon: any
  title: string
  description: string
  technologies: string[]
  featured?: boolean
}

const TechCard = ({ icon: Icon, title, description, technologies, featured }: TechCardProps) => (
  <Card
    className={`h-full transition-all duration-300 hover:shadow-lg ${featured ? "ring-2 ring-lime-500 bg-gradient-to-br from-lime-50 to-lime-100 dark:from-lime-950/20 dark:to-lime-900/20" : ""}`}
  >
    <CardHeader>
      <div className="flex items-center space-x-3 mb-3">
        <div
          className={`p-2 rounded-lg ${featured ? "bg-lime-600 text-white" : "bg-lime-100 dark:bg-lime-900 text-lime-600"}`}
        >
          <Icon className="w-5 h-5" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
)
