import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Zap, Shield, BarChart3, Cpu, Globe, TrendingUp } from "lucide-react"
import type { ReactNode } from "react"

export function FeaturesSection() {
  return (
    <section id="features" className="bg-zinc-50 py-16 md:py-32 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Revolutionary DeFi Features
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the future of decentralized finance with our cutting-edge optimization protocol
          </p>
        </div>

        <div className="mx-auto grid gap-6 lg:grid-cols-2">
          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={Globe}
                title="Universal Cross-Chain Optimization"
                description="Seamlessly access 20+ blockchains with intelligent routing via OKX DEX API integration."
              />
            </CardHeader>
            <div className="relative mb-6 border-t border-dashed sm:mb-0">
              <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,hsl(var(--muted)),white_125%)]"></div>
              <div className="aspect-[76/59] p-6">
                <CrossChainVisualization />
              </div>
            </div>
          </FeatureCard>

          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={Cpu}
                title="AI-Powered Risk Assessment"
                description="Advanced machine learning algorithms continuously evaluate and score DeFi protocols for optimal safety."
              />
            </CardHeader>
            <CardContent>
              <div className="relative mb-6 sm:mb-0">
                <div className="aspect-[76/59] border rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-6">
                  <RiskAssessmentChart />
                </div>
              </div>
            </CardContent>
          </FeatureCard>

          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={Zap}
                title="Autonomous Rebalancing"
                description="Real-time portfolio optimization with proactive capital redeployment for maximum yield."
              />
            </CardHeader>
            <CardContent>
              <div className="relative mb-6 sm:mb-0">
                <div className="aspect-[76/59] border rounded-lg bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 p-6">
                  <RebalancingAnimation />
                </div>
              </div>
            </CardContent>
          </FeatureCard>

          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={TrendingUp}
                title="Yield Optimization Engine"
                description="Continuously scan and aggregate the highest-yielding opportunities across all supported chains."
              />
            </CardHeader>
            <CardContent>
              <div className="relative mb-6 sm:mb-0">
                <div className="aspect-[76/59] border rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 p-6">
                  <YieldChart />
                </div>
              </div>
            </CardContent>
          </FeatureCard>

          <FeatureCard className="p-6 lg:col-span-2">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">Multi-Layer Security Architecture</h3>
              <p className="text-muted-foreground">
                Enterprise-grade security with comprehensive audits and insurance options
              </p>
            </div>
            <div className="flex justify-center gap-8 overflow-hidden">
              <SecurityFeature icon={Shield} label="Smart Contract Audits" status="verified" />
              <SecurityFeature icon={BarChart3} label="Multi-Sig Governance" status="active" />
              <SecurityFeature icon={Zap} label="Insurance Coverage" status="protected" />
              <SecurityFeature
                icon={Globe}
                label="Decentralized Oracles"
                status="connected"
                className="hidden sm:block"
              />
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  children: ReactNode
  className?: string
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card
    className={cn(
      "group relative rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-zinc-800",
      className,
    )}
  >
    <CardDecorator />
    {children}
  </Card>
)

const CardDecorator = () => (
  <>
    <span className="absolute -left-px -top-px block size-2 border-l-2 border-t-2 border-blue-500"></span>
    <span className="absolute -right-px -top-px block size-2 border-r-2 border-t-2 border-blue-500"></span>
    <span className="absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 border-blue-500"></span>
    <span className="absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 border-blue-500"></span>
  </>
)

interface CardHeadingProps {
  icon: any
  title: string
  description: string
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
  <div className="p-6">
    <span className="text-blue-600 flex items-center gap-2 font-medium">
      <Icon className="size-5" />
      {title}
    </span>
    <p className="mt-4 text-xl font-semibold text-foreground">{description}</p>
  </div>
)

const CrossChainVisualization = () => (
  <div className="flex items-center justify-center h-full">
    <div className="relative">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          ETH
        </div>
        <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
          SOL
        </div>
        <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-green-500"></div>
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
          BSC
        </div>
      </div>
    </div>
  </div>
)

const RiskAssessmentChart = () => (
  <div className="h-full flex flex-col justify-center">
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Protocol A</span>
        <div className="flex items-center space-x-2">
          <div className="w-16 h-2 bg-green-200 rounded-full">
            <div className="w-14 h-2 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm text-green-600">95%</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Protocol B</span>
        <div className="flex items-center space-x-2">
          <div className="w-16 h-2 bg-yellow-200 rounded-full">
            <div className="w-12 h-2 bg-yellow-500 rounded-full"></div>
          </div>
          <span className="text-sm text-yellow-600">78%</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Protocol C</span>
        <div className="flex items-center space-x-2">
          <div className="w-16 h-2 bg-red-200 rounded-full">
            <div className="w-8 h-2 bg-red-500 rounded-full"></div>
          </div>
          <span className="text-sm text-red-600">45%</span>
        </div>
      </div>
    </div>
  </div>
)

const RebalancingAnimation = () => (
  <div className="h-full flex items-center justify-center">
    <div className="relative">
      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse">
        AUTO
      </div>
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-bounce"></div>
      <div
        className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500 rounded-full animate-bounce"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
  </div>
)

const YieldChart = () => (
  <div className="h-full flex items-end justify-center space-x-2">
    <div className="w-4 bg-blue-500 rounded-t" style={{ height: "60%" }}></div>
    <div className="w-4 bg-purple-500 rounded-t" style={{ height: "80%" }}></div>
    <div className="w-4 bg-green-500 rounded-t" style={{ height: "100%" }}></div>
    <div className="w-4 bg-yellow-500 rounded-t" style={{ height: "70%" }}></div>
    <div className="w-4 bg-orange-500 rounded-t" style={{ height: "90%" }}></div>
  </div>
)

interface SecurityFeatureProps {
  icon: any
  label: string
  status: string
  className?: string
}

const SecurityFeature = ({ icon: Icon, label, status, className }: SecurityFeatureProps) => (
  <div className={className}>
    <div className="bg-gradient-to-b from-border to-transparent size-fit rounded-2xl p-px">
      <div className="bg-gradient-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center justify-center rounded-[15px] p-6">
        <Icon className="size-8 text-blue-600" />
      </div>
    </div>
    <div className="mt-3 text-center">
      <span className="block text-sm font-medium">{label}</span>
      <span className="text-xs text-green-600 capitalize">{status}</span>
    </div>
  </div>
)
