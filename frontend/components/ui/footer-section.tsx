"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Moon, Send, Sun, Twitter, Github, MessageCircle } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"

function Footerdemo() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }

  if (!mounted) {
    return (
      <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
        <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="https://cdn.tomeku.com/logo/Realm-Light-logo.svg"
                alt="Relmn Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <p className="mb-6 text-muted-foreground">
              The universal cross-chain DeFi optimization protocol. Intelligently navigate fragmentation and maximize
              capital efficiency.
            </p>
            <form className="relative">
              <Input type="email" placeholder="Enter your email" className="pr-12 backdrop-blur-sm" />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-lime-500 hover:bg-lime-600 text-white transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-lime-500/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Product</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/features" className="block transition-colors hover:text-lime-600">
                Features
              </Link>
              <Link href="/technology" className="block transition-colors hover:text-lime-600">
                Technology
              </Link>
              <Link href="/security" className="block transition-colors hover:text-lime-600">
                Security
              </Link>
              <Link href="/documentation" className="block transition-colors hover:text-lime-600">
                Documentation
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/team" className="block transition-colors hover:text-lime-600">
                Team
              </Link>
              <Link href="/contact" className="block transition-colors hover:text-lime-600">
                Contact
              </Link>
            </nav>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-transparent"
                      onClick={() => window.open("https://discord.gg/TBzC88NasA", "_blank")}
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span className="sr-only">Discord</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Join our Discord</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Telegram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Join our Telegram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch id="dark-mode" checked={theme === "dark"} onCheckedChange={handleThemeChange} />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Relmn. All rights reserved. Built by{" "}
            <a href="https://tomeku.com" className="text-lime-600 hover:underline">
              Tomeku
            </a>
            .
          </p>
          <nav className="flex gap-4 text-sm">
            <Link href="/privacy" className="transition-colors hover:text-lime-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-lime-600">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export function Footer() {
  return (
    <div className="block">
      <Footerdemo />
    </div>
  )
}
