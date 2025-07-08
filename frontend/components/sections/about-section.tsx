import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Zap, Shield } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              The Universal Cross-Chain DeFi Optimization Protocol
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Relmn is not merely a yield aggregator; it's a pioneering universal cross-chain DeFi optimization
              protocol, meticulously engineered to autonomously identify, analyze, and strategically allocate capital to
              the highest-yielding opportunities across the entire blockchain spectrum.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Universal Scanning & Aggregation</h3>
                  <p className="text-muted-foreground">
                    Continuously scan and analyze yield opportunities across 20+ supported blockchains
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Automated Capital Allocation</h3>
                  <p className="text-muted-foreground">
                    Dynamically allocate funds to the most lucrative and rigorously vetted liquidity pools
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">AI-Powered Risk Mitigation</h3>
                  <p className="text-muted-foreground">
                    Advanced AI models assess and generate dynamic risk scores for each yield farm
                  </p>
                </div>
              </div>
            </div>
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Link href="#learn-more">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-0">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Total Value Locked</h3>
                  <span className="text-2xl font-bold text-blue-600">$2.4B+</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-0">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Average APY</h3>
                  <span className="text-2xl font-bold text-green-600">18.5%</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-0">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Supported Chains</h3>
                  <span className="text-2xl font-bold text-purple-600">20+</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                  <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                  <span className="text-muted-foreground">+15 more</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
