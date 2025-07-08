import type React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Shield, Zap, TrendingUp, Brain, Globe, Lock } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Revolutionary DeFi Optimization</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Relmn delivers sophisticated, smart contract-powered DeFi protocol that functions as an intelligent,
            autonomous agent for dynamic capital deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Globe}
            title="Universal Cross-Chain Optimization"
            description="Continuously scan and analyze yield opportunities across 20+ blockchains with OKX DEX API integration for optimal liquidity routing."
          />

          <FeatureCard
            icon={Brain}
            title="AI-Powered Risk Assessment"
            description="Proprietary AI engine generates dynamic risk scores for each protocol, preventing deployment into vulnerable DeFi pools."
          />

          <FeatureCard
            icon={Zap}
            title="Autonomous Rebalancing"
            description="Real-time monitoring and proactive redeployment of capital to higher-yielding opportunities with sub-100ms response time."
          />

          <FeatureCard
            icon={TrendingUp}
            title="Yield Maximization"
            description="Access superior liquidity routing across 500+ DEXs with intelligent capital allocation strategies."
          />

          <FeatureCard
            icon={Shield}
            title="Enterprise Security"
            description="Multi-signature governance, comprehensive smart contract audits, and advanced risk mitigation algorithms."
          />

          <FeatureCard
            icon={Lock}
            title="Composable Capital"
            description="LP token staking for layered rewards and native governance participation across multiple chains."
          />
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-700">
    <CardHeader>
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </CardContent>
  </Card>
)
