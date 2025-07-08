import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Zap, Shield, type LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

export function Features2() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Advanced DeFi Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience cutting-edge technology designed for the future of decentralized finance.
          </p>
        </div>
        <div className="mx-auto grid gap-4 lg:grid-cols-2">
          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={Zap}
                title="Real-time Optimization"
                description="Advanced rebalancing system that instantly optimizes your portfolio across chains."
              />
            </CardHeader>
            <div className="relative mb-6 border-t border-dashed sm:mb-0">
              <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,hsl(var(--muted)),white_125%)]"></div>
              <div className="aspect-[76/59] p-1 px-6">
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-lime-50 dark:from-blue-950/20 dark:to-lime-950/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-lime-600 mb-2">18.5%</div>
                    <div className="text-sm text-muted-foreground">Average APY</div>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>
          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={Shield}
                title="Enterprise Security"
                description="Multi-layered security with AI-powered risk assessment and smart contract audits."
              />
            </CardHeader>
            <CardContent>
              <div className="relative mb-6 sm:mb-0">
                <div className="absolute -inset-6 [background:radial-gradient(50%_50%_at_75%_50%,transparent,hsl(var(--background))_100%)]"></div>
                <div className="aspect-[76/59] border rounded-lg bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 p-6">
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
                        <div className="w-16 h-2 bg-lime-200 rounded-full">
                          <div className="w-12 h-2 bg-lime-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-lime-600">78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </FeatureCard>
          <FeatureCard className="p-6 lg:col-span-2">
            <p className="mx-auto my-6 max-w-md text-balance text-center text-2xl font-semibold">
              Intelligent capital allocation with automated risk management across all supported chains.
            </p>
            <div className="flex justify-center gap-6 overflow-hidden">
              <CircularUI label="Ethereum" circles={[{ pattern: "border" }, { pattern: "border" }]} />
              <CircularUI label="Solana" circles={[{ pattern: "none" }, { pattern: "lime" }]} />
              <CircularUI label="BSC" circles={[{ pattern: "blue" }, { pattern: "none" }]} />
              <CircularUI
                label="Arbitrum"
                circles={[{ pattern: "lime" }, { pattern: "none" }]}
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
  <Card className={cn("group relative rounded-none shadow-zinc-950/5", className)}>
    <CardDecorator />
    {children}
  </Card>
)

const CardDecorator = () => (
  <>
    <span className="border-lime-500 absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
    <span className="border-lime-500 absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
    <span className="border-lime-500 absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
    <span className="border-lime-500 absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
  </>
)

interface CardHeadingProps {
  icon: LucideIcon
  title: string
  description: string
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
  <div className="p-6">
    <span className="text-lime-600 flex items-center gap-2 font-medium">
      <Icon className="size-4" />
      {title}
    </span>
    <p className="mt-8 text-2xl font-semibold">{description}</p>
  </div>
)

interface CircleConfig {
  pattern: "none" | "border" | "lime" | "blue"
}

interface CircularUIProps {
  label: string
  circles: CircleConfig[]
  className?: string
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
  <div className={className}>
    <div className="bg-gradient-to-b from-border size-fit rounded-2xl to-transparent p-px">
      <div className="bg-gradient-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4">
        {circles.map((circle, i) => (
          <div
            key={i}
            className={cn("size-7 rounded-full border sm:size-8", {
              "border-lime-500": circle.pattern === "none",
              "border-lime-500 bg-[repeating-linear-gradient(-45deg,hsl(var(--border)),hsl(var(--border))_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "border",
              "border-lime-500 bg-background bg-[repeating-linear-gradient(-45deg,theme(colors.lime.500),theme(colors.lime.500)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "lime",
              "bg-background z-1 border-blue-500 bg-[repeating-linear-gradient(-45deg,theme(colors.blue.500),theme(colors.blue.500)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "blue",
            })}
          ></div>
        ))}
      </div>
    </div>
    <span className="text-muted-foreground mt-1.5 block text-center text-sm">{label}</span>
  </div>
)
