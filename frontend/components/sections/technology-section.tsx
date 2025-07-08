import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Zap, Shield, Globe, Cpu } from "lucide-react"

export function TechnologySection() {
  return (
    <section id="technology" className="py-16 md:py-32 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Battle-Tested Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built on enterprise-grade technology stack with cutting-edge integrations for maximum performance and
            security
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

        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Future Integration: XLayer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-blue-100 mb-6">
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
    </section>
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
    className={`h-full transition-all duration-300 hover:shadow-lg ${featured ? "ring-2 ring-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20" : ""}`}
  >
    <CardHeader>
      <div className="flex items-center space-x-3 mb-3">
        <div
          className={`p-2 rounded-lg ${featured ? "bg-blue-600 text-white" : "bg-blue-100 dark:bg-blue-900 text-blue-600"}`}
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
