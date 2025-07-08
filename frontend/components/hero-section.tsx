"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X, ArrowRight, Zap } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section className="relative min-h-screen flex items-center justify-center">
          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-black dark:to-gray-800" />
            <CrossChainAnimation />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
            <div className="text-center">
              <div className="mb-8 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
                <Zap className="mr-2 h-4 w-4" />
                Powered by OKX DEX API
              </div>

              <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl">
                <span className="block">Relmn: Your</span>
                <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                  Autonomous Gateway
                </span>
                <span className="block">to Universal DeFi</span>
              </h1>

              <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
                Intelligently navigate cross-chain fragmentation, maximize capital efficiency, and unlock superior
                returns with AI-powered precision.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="h-14 rounded-full px-8 text-lg">
                  <span>Launch App</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="h-14 rounded-full px-8 text-lg bg-transparent">
                  Learn More
                </Button>
              </div>

              {/* Key Stats */}
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Supported Chains</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">DEX Integrations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Uptime SLA</div>
                </div>
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
    <div className="absolute inset-0 opacity-20">
      <svg className="h-full w-full" viewBox="0 0 1200 800">
        {/* Animated connecting lines */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Network nodes */}
        <circle cx="200" cy="200" r="8" fill="#3B82F6" className="animate-pulse" />
        <circle cx="600" cy="150" r="8" fill="#10B981" className="animate-pulse" />
        <circle cx="1000" cy="250" r="8" fill="#8B5CF6" className="animate-pulse" />
        <circle cx="300" cy="400" r="8" fill="#F59E0B" className="animate-pulse" />
        <circle cx="800" cy="450" r="8" fill="#EF4444" className="animate-pulse" />

        {/* Connecting lines */}
        <line x1="200" y1="200" x2="600" y2="150" stroke="url(#lineGradient)" strokeWidth="2" />
        <line x1="600" y1="150" x2="1000" y2="250" stroke="url(#lineGradient)" strokeWidth="2" />
        <line x1="300" y1="400" x2="800" y2="450" stroke="url(#lineGradient)" strokeWidth="2" />
      </svg>
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

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header>
      <nav className="fixed z-50 w-full pt-2">
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12",
            scrolled && "bg-white/80 backdrop-blur-xl dark:bg-black/80",
          )}
        >
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://cdn.tomeku.com/logo/Realm-Light-Logo.svg"
                alt="Relmn Logo"
                width={120}
                height={32}
                className="h-8 w-auto dark:hidden"
              />
              <Image
                src="https://cdn.tomeku.com/logo/Realm-Dark-Logo.svg"
                alt="Relmn Logo"
                width={120}
                height={32}
                className="hidden h-8 w-auto dark:block"
              />
            </Link>

            <div className="hidden lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex bg-transparent">
                Connect Wallet
              </Button>
              <Button size="sm">Launch App</Button>

              <button onClick={() => setMenuState(!menuState)} className="lg:hidden">
                {menuState ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
