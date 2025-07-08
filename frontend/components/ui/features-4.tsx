import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from "lucide-react"

export function Features3() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            The foundation for autonomous DeFi management
          </h2>
          <p className="text-muted-foreground">
            Relmn is evolving to be more than just yield optimization. It supports an entire ecosystem of APIs and
            platforms helping developers and businesses innovate in DeFi.
          </p>
        </div>
        <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-lime-600" />
              <h3 className="text-sm font-medium">Lightning Fast</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Sub-100ms response time with 99.9% uptime SLA for real-time rebalancing.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4 text-lime-600" />
              <h3 className="text-sm font-medium">AI-Powered</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Advanced machine learning for risk assessment and predictive analytics.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Fingerprint className="size-4 text-lime-600" />
              <h3 className="text-sm font-medium">Enterprise Security</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Multi-signature governance and comprehensive smart contract audits.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Pencil className="size-4 text-lime-600" />
              <h3 className="text-sm font-medium">Customizable</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Flexible strategies and parameters to match your risk tolerance.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Settings2 className="size-4 text-lime-600" />
              <h3 className="text-sm font-medium">Full Control</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Transparent operations with user-controlled governance and settings.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-lime-600" />
              <h3 className="text-sm font-medium">Built for DeFi</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Native integration with 20+ chains and 500+ DEXs for maximum opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
