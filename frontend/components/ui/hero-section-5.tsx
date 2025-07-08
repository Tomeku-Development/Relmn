"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { cn } from "@/lib/utils"
import { Menu, X, ChevronRight, Moon, Sun } from "lucide-react"
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
                <div className="mb-6 inline-flex items-center rounded-full border border-lime-200 bg-lime-50 px-4 py-2 text-sm text-lime-700 dark:border-lime-800 dark:bg-lime-900/20 dark:text-lime-300">
                  <span className="mr-2 h-2 w-2 rounded-full bg-lime-500 animate-pulse"></span>
                  Powered by OKX DEX API
                </div>
                <h1 className="mt-8 max-w-4xl text-balance text-5xl font-bold md:text-6xl lg:mt-16 xl:text-7xl">
                  <span className="bg-gradient-to-r from-lime-400 to-lime-600 bg-clip-text text-transparent">
                    Relmn: Your Autonomous Gateway
                  </span>
                  <br />
                  to Universal DeFi Optimization
                </h1>
                <p className="mt-8 max-w-3xl text-balance text-lg text-muted-foreground">
                  Intelligently navigate cross-chain fragmentation, maximize capital efficiency, and unlock superior
                  returns with AI-powered precision across 20+ blockchains.
                </p>
                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-full pl-5 pr-3 text-base bg-lime-500 hover:bg-lime-600 text-white"
                  >
                    <Link href="#launch">
                      <span className="text-nowrap">Launch App</span>
                      <ChevronRight className="ml-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5"
                  >
                    <Link href="/features">
                      <span className="text-nowrap">Explore Features</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl border border-black/10 sm:aspect-video lg:rounded-[3rem] dark:border-white/5">
              <div className="size-full bg-gradient-to-br from-lime-500/20 via-lime-400/20 to-lime-600/20 relative">
                <CrossChainAnimation />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background pb-2">
          <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm text-muted-foreground">Powering the best protocols</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-lime-600">OKX</span>
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
        <div className="absolute w-4 h-4 bg-lime-500 rounded-full animate-pulse" style={{ top: "20%", left: "10%" }} />
        <div className="absolute w-4 h-4 bg-lime-400 rounded-full animate-pulse" style={{ top: "60%", right: "10%" }} />
        <div className="absolute w-4 h-4 bg-lime-600 rounded-full animate-pulse" style={{ top: "40%", left: "50%" }} />
        <div className="absolute w-4 h-4 bg-lime-300 rounded-full animate-pulse" style={{ top: "30%", right: "30%" }} />
        <div className="absolute w-4 h-4 bg-lime-700 rounded-full animate-pulse" style={{ top: "70%", left: "30%" }} />

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#84cc16" />
              <stop offset="100%" stopColor="#65a30d" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a3e635" />
              <stop offset="100%" stopColor="#84cc16" />
            </linearGradient>
          </defs>
          <path d="M 100 100 Q 300 50 500 200" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
          <path d="M 500 200 Q 300 350 100 300" stroke="url(#gradient2)" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  )
}

const menuItems = [
  { name: "Features", href: "/features" },
  { name: "Technology", href: "/technology" },
  { name: "Security", href: "/security" },
  { name: "Team", href: "/team" },
]

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return null
  }

  return (
    <header>
      <nav data-state={menuState && "active"} className="group fixed z-20 w-full pt-2">
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12",
            scrolled && "bg-background/50 backdrop-blur-2xl",
          )}
        >
          <div
            className={cn(
              "relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6",
              scrolled && "lg:py-4",
            )}
          >
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link href="/" aria-label="home" className="flex items-center space-x-2">
                <Logo />
              </Link>
              <div className="flex items-center gap-4 lg:hidden">
                <Button variant="ghost" size="icon" onClick={toggleTheme}>
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5"
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
                        className="text-muted-foreground hover:text-accent-foreground block duration-150 hover:text-lime-600"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" size="icon" onClick={toggleTheme}>
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
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild variant="outline" size="sm">
                  <Link href="/documentation">
                    <span>Documentation</span>
                  </Link>
                </Button>
                <Button asChild size="sm" className="bg-lime-500 hover:bg-lime-600 text-white">
                  <Link href="#launch">
                    <span>Launch App</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className="flex items-center space-x-3">
      <Image
        src="https://cdn.tomeku.com/logo/Realm-Light-logo.svg"
        alt="Relmn Logo"
        width={120}
        height={32}
        className={cn("h-8 w-auto", className)}
      />
    </div>
  )
}
