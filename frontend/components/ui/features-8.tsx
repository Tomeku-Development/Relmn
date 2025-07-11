import { Card, CardContent } from "@/components/ui/card"
import { Shield, Globe, Brain, TrendingUp } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Revolutionary DeFi Optimization</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Relmn delivers sophisticated, smart contract-powered DeFi protocol that functions as an intelligent,
            autonomous agent for dynamic capital deployment.
          </p>
        </div>
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">
            <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
              <CardContent className="relative m-auto size-fit pt-6">
                <div className="relative flex h-24 w-56 items-center">
                  <svg
                    className="text-muted absolute inset-0 size-full"
                    viewBox="0 0 254 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="mx-auto block w-fit text-5xl font-semibold text-lime-600">20+</span>
                </div>
                <h2 className="mt-6 text-center text-3xl font-semibold">Cross-Chain Networks</h2>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <Shield className="m-auto size-12 text-lime-600" />
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">
                    AI-Powered Security
                  </h2>
                  <p className="text-foreground">
                    Advanced AI models continuously evaluate and score DeFi protocols for optimal safety and risk
                    mitigation.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="pt-6 lg:px-6">
                  <div className="w-full h-24 bg-gradient-to-r from-lime-500/20 via-lime-400/20 to-lime-600/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-12 h-12 text-lime-600" />
                  </div>
                </div>
                <div className="relative z-10 mt-14 space-y-2 text-center">
                  <h2 className="text-lg font-medium transition">Yield Optimization</h2>
                  <p className="text-foreground">
                    Continuously scan and aggregate the highest-yielding opportunities across all supported chains.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                    <Globe className="m-auto size-5" strokeWidth={1} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="group-hover:text-secondary-950 text-lg font-medium text-zinc-800 transition dark:text-white">
                      Universal Cross-Chain
                    </h2>
                    <p className="text-foreground">
                      Seamlessly access 20+ blockchains with intelligent routing via OKX DEX API integration.
                    </p>
                  </div>
                </div>
                <div className="relative -mb-6 -mr-6 mt-6 h-fit border-l border-t p-6 py-6 sm:ml-6">
                  <div className="absolute left-3 top-2 flex gap-1">
                    <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                    <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                    <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-6">
                    <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ETH
                    </div>
                    <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      SOL
                    </div>
                    <div className="w-8 h-8 bg-lime-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      BSC
                    </div>
                    <div className="w-8 h-8 bg-lime-300 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ARB
                    </div>
                    <div className="w-8 h-8 bg-lime-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      POL
                    </div>
                    <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      +15
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                    <Brain className="m-auto size-6" strokeWidth={1} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-medium transition">Autonomous Rebalancing</h2>
                    <p className="text-foreground">
                      Real-time portfolio optimization with proactive capital redeployment for maximum yield.
                    </p>
                  </div>
                </div>
                <div className="relative mt-6 sm:-my-6 sm:-mr-6">
                  <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse">
                        AUTO
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-lime-400 rounded-full animate-bounce"></div>
                      <div
                        className="absolute -bottom-2 -left-2 w-6 h-6 bg-lime-600 rounded-full animate-bounce"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
