import { HeroHeader } from "@/components/ui/hero-section-5"
import { Footer } from "@/components/ui/footer-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Users, FileCheck, AlertTriangle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Relmn Security - Enterprise-Grade DeFi Protection | Smart Contract Audits & Multi-Sig",
  description:
    "Discover Relmn's comprehensive security measures: smart contract audits, multi-signature governance, AI risk assessment, insurance coverage, and transparent operations. Built for maximum DeFi security and compliance.",
  keywords: [
    "DeFi security",
    "smart contract audits",
    "multi-signature governance",
    "AI risk assessment",
    "DeFi insurance",
    "blockchain security",
    "enterprise DeFi protection",
    "compliance ready DeFi",
  ],
  openGraph: {
    title: "Relmn Security - Enterprise-Grade DeFi Protection",
    description:
      "Discover Relmn's comprehensive security measures: smart contract audits, multi-signature governance, AI risk assessment, insurance coverage, and transparent operations.",
    images: [
      {
        url: "https://cdn.tomeku.com/meta-seo/relmn.png",
        width: 1200,
        height: 630,
        alt: "Relmn Security - Enterprise-Grade DeFi Protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relmn Security - Enterprise-Grade DeFi Protection",
    description:
      "Discover Relmn's comprehensive security measures: smart contract audits, multi-signature governance, AI risk assessment, and insurance coverage.",
    images: ["https://cdn.tomeku.com/meta-seo/relmn.png"],
  },
}

export default function SecurityPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen bg-white dark:bg-black pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Enterprise-Grade Security</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trust, reliability, and compliance at the core of our protocol design with multiple layers of protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <SecurityCard
              icon={FileCheck}
              title="Smart Contract Audits"
              description="Rigorous third-party audits of all critical smart contract code with public transparency reports"
              status="Completed"
              statusColor="green"
            />

            <SecurityCard
              icon={Users}
              title="Multi-Signature Governance"
              description="Critical protocol operations secured by multi-signature wallets for enhanced decentralization"
              status="Active"
              statusColor="lime"
            />

            <SecurityCard
              icon={AlertTriangle}
              title="AI Risk Assessment"
              description="Continuous evaluation of vulnerabilities, rug pulls, and economic exploits in integrated protocols"
              status="Real-time"
              statusColor="yellow"
            />

            <SecurityCard
              icon={Shield}
              title="Insurance Coverage"
              description="Integration with leading decentralized insurance protocols for additional capital protection"
              status="Available"
              statusColor="purple"
            />

            <SecurityCard
              icon={Eye}
              title="Transparent Operations"
              description="Open-source approach with transparent admin access controls and public governance"
              status="Public"
              statusColor="green"
            />

            <SecurityCard
              icon={Lock}
              title="Compliance Ready"
              description="Adherence to best practices for on-chain security and future regulatory frameworks"
              status="Compliant"
              statusColor="lime"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-700 dark:text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                  <span>Risk Mitigation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Real-time protocol health monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Automated emergency pause mechanisms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Multi-factor risk scoring algorithms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Proactive vulnerability detection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-950/20 dark:to-green-950/20 border-lime-200 dark:border-lime-800">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lime-700 dark:text-lime-400">
                  <Shield className="w-5 h-5" />
                  <span>Security Guarantees</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                    <span>99.9% uptime SLA with redundant systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                    <span>End-to-end encryption for all transactions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                    <span>Decentralized oracle network validation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                    <span>Community-driven security governance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

interface SecurityCardProps {
  icon: any
  title: string
  description: string
  status: string
  statusColor: "green" | "lime" | "yellow" | "purple"
}

const SecurityCard = ({ icon: Icon, title, description, status, statusColor }: SecurityCardProps) => {
  const statusColors = {
    green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    lime: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  }

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-lime-100 dark:bg-lime-900 text-lime-600">
              <Icon className="w-5 h-5" />
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <Badge className={statusColors[statusColor]}>{status}</Badge>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>
    </Card>
  )
}
