"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { cn } from "@/lib/utils"
import { Menu, X, ChevronRight, Moon, Sun } from "lucide-react"
import { useScroll, motion } from "motion/react"
import { useTheme } from "next-themes"
import Image from "next/image"

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                <h1 className="mt-8 max-w-4xl text-balance text-5xl font-bold md:text-6xl lg:mt-16 xl:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Relmn: Your Autonomous Gateway to Universal DeFi Optimization
                </h1>
                <p className="mt-8 max-w-3xl text-balance text-lg text-muted-foreground">
                  Intelligently navigate cross-chain fragmentation, maximize capital efficiency, and unlock superior
                  returns with AI-powered precision across 20+ blockchains.
                </p>
                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 rounded-full pl-6 pr-4 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Link href="#launch">
                      <span className="text-nowrap">Launch App</span>
                      <ChevronRight className="ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 rounded-full px-6 text-base border-2 hover:bg-blue-50 dark:hover:bg-blue-950/20 bg-transparent"
                  >
                    <Link href="#learn">
                      <span className="text-nowrap">Learn More</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl border border-black/10 sm:aspect-video lg:rounded-[3rem] dark:border-white/5">
              <div className="size-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-600/20 relative">
                <CrossChainAnimation />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background pb-2">
          <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm text-muted-foreground">Powered by industry leaders</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-blue-600">OKX</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-semibold text-muted-foreground">Chainlink</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-semibold text-muted-foreground">Ethereum</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-semibold text-muted-foreground">Solana</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-semibold text-muted-foreground">Arbitrum</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-semibold text-muted-foreground">Polygon</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-semibold text-muted-foreground">Avalanche</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-semibold text-muted-foreground">BSC</span>
                  </div>
                </InfiniteSlider>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

const CrossChainAnimation = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-full h-full max-w-2xl max-h-96">
        {/* Animated nodes */}
        <motion.div
          className="absolute w-4 h-4 bg-blue-500 rounded-full"
          animate={{
            x: [0, 100, 200, 100, 0],
            y: [0, -50, 0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ top: "20%", left: "10%" }}
        />
        <motion.div
          className="absolute w-4 h-4 bg-purple-500 rounded-full"
          animate={{
            x: [0, -100, -200, -100, 0],
            y: [0, 50, 0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{ top: "60%", right: "10%" }}
        />
        <motion.div
          className="absolute w-4 h-4 bg-green-500 rounded-full"
          animate={{
            x: [0, 150, 0, -150, 0],
            y: [0, 0, 100, 0, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
          style={{ top: "40%", left: "50%" }}
        />

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <motion.path
            d="M 100 100 Q 300 50 500 200"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M 500 200 Q 300 350 100 300"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

const menuItems = [
  { name: "Features", href: "#features" },
  { name: "Technology", href: "#technology" },
  { name: "Security", href: "#security" },
  { name: "Team", href: "#team" },
]

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollYProgress } = useScroll()
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <header>
      <nav data-state={menuState && "active"} className="group fixed z-20 w-full pt-2">
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12",
            scrolled && "bg-background/80 backdrop-blur-2xl border border-border/50",
          )}
        >
          <motion.div
            className={cn(
              "relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6",
              scrolled && "lg:py-4",
            )}
          >
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link href="/" aria-label="home" className="flex items-center space-x-2">
                <Logo />
              </Link>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="lg:hidden"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>
              <div className="hidden lg:flex lg:items-center lg:gap-8">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground block duration-150 hover:text-blue-600"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
              </div>
            </div>
            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className="text-muted-foreground hover:text-foreground block duration-150">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild variant="outline" size="sm">
                  <Link href="#docs">
                    <span>Documentation</span>
                  </Link>
                </Button>
                <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <Link href="#launch">
                    <span>Launch App</span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  )
}

const Logo = ({ className }: { className?: string }) => {
  const { theme } = useTheme()

  return (
    <div className="flex items-center space-x-3">
      <Image
        src={
          theme === "dark"
            ? "https://cdn.tomeku.com/logo/Realm-Dark-Logo.svg"
            : "https://cdn.tomeku.com/logo/Realm-Light-Logo.svg"
        }
        alt="Relmn Logo"
        width={120}
        height={32}
        className={cn("h-8 w-auto", className)}
      />
    </div>
  )
}
