import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Users, FileCheck, AlertTriangle } from "lucide-react"

export function SecuritySection() {
  return (
    <section id="security" className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Enterprise-Grade Security</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trust, reliability, and compliance at the core of our protocol design with multiple layers of protection
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
            statusColor="blue"
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
            statusColor="blue"
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

          <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-700 dark:text-green-400">
                <Shield className="w-5 h-5" />
                <span>Security Guarantees</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>99.9% uptime SLA with redundant systems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>End-to-end encryption for all transactions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Decentralized oracle network validation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Community-driven security governance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

interface SecurityCardProps {
  icon: any
  title: string
  description: string
  status: string
  statusColor: "green" | "blue" | "yellow" | "purple"
}

const SecurityCard = ({ icon: Icon, title, description, status, statusColor }: SecurityCardProps) => {
  const statusColors = {
    green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  }

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600">
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
