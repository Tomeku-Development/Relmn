import { Card, CardContent } from "@/components/ui/card"

export function TechStack() {
  return (
    <section id="technology" className="py-24 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Battle-Tested Infrastructure</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Built on enterprise-grade technology stack with OKX DEX API as the core engine for universal liquidity
            access and seamless cross-chain interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TechCard
            title="OKX DEX API"
            description="Core engine for optimal trade execution and cross-chain liquidity"
            highlight={true}
          />

          <TechCard title="Smart Contracts" description="Solidity-based contracts for EVM compatibility and security" />

          <TechCard title="AI & Oracles" description="Chainlink & DIA for real-time data and predictive analytics" />

          <TechCard title="Multi-Chain" description="Support for Ethereum, BSC, Solana, Avalanche, and more" />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center rounded-full bg-lime-100 dark:bg-lime-900 px-6 py-3">
            <div className="w-3 h-3 bg-lime-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-lime-800 dark:text-lime-200 font-medium">
              99.9% Uptime SLA • Sub-100ms Response Time
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

interface TechCardProps {
  title: string
  description: string
  highlight?: boolean
}

const TechCard = ({ title, description, highlight }: TechCardProps) => (
  <Card className={`text-center ${highlight ? "ring-2 ring-lime-500 bg-lime-50 dark:bg-lime-900/20" : ""}`}>
    <CardContent className="pt-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </CardContent>
  </Card>
)
