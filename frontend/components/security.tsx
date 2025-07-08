import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Eye, Users } from "lucide-react"

export function Security() {
  return (
    <section id="security" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Security at Core</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade security measures ensuring trust, reliability, and compliance for institutional and retail
            users alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SecurityCard
            icon={Shield}
            title="Smart Contract Audits"
            description="Rigorous third-party audits of all critical smart contract code with public transparency reports."
          />

          <SecurityCard
            icon={Users}
            title="Multi-Signature Governance"
            description="Critical operations secured by multi-signature wallets, enhancing decentralization and preventing single points of failure."
          />

          <SecurityCard
            icon={Eye}
            title="AI Risk Assessment"
            description="Continuous evaluation of potential vulnerabilities, rug pulls, and economic exploits in integrated protocols."
          />

          <SecurityCard
            icon={Lock}
            title="Insurance Integration"
            description="Active exploration with leading decentralized insurance protocols for additional capital protection layers."
          />
        </div>
      </div>
    </section>
  )
}

interface SecurityCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

const SecurityCard = ({ icon: Icon, title, description }: SecurityCardProps) => (
  <Card className="group hover:shadow-lg transition-all duration-300">
    <CardContent className="pt-6">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-lime-100 dark:bg-lime-900 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-lime-600 dark:text-lime-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
)
