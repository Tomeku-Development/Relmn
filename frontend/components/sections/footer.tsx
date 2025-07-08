"use client"

import Link from "next/link"
import { Facebook, Github, MessageCircle, Send, Twitter } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="bg-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="https://cdn.tomeku.com/logo/Realm-Dark-Logo.svg"
                alt="Relmn Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-zinc-400 mb-6 max-w-md">
              The universal cross-chain DeFi optimization protocol. Intelligently navigate cross-chain fragmentation and
              maximize capital efficiency with AI-powered precision.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://twitter.com/relmn" icon={Twitter} label="Twitter" />
              <SocialLink href="https://discord.gg/relmn" icon={MessageCircle} label="Discord" />
              <SocialLink href="https://github.com/relmn" icon={Github} label="GitHub" />
              <SocialLink href="https://facebook.com/relmn" icon={Facebook} label="Facebook" />
              <SocialLink href="https://t.me/relmn" icon={Send} label="Telegram" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-zinc-400">
              <li>
                <Link href="#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#technology" className="hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="#security" className="hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#docs" className="hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-zinc-400">
              <li>
                <Link href="#team" className="hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zinc-400 text-sm mb-4 md:mb-0">
              © 2024 Relmn. Built by{" "}
              <a href="https://tomeku.com" className="text-blue-400 hover:underline">
                Tomeku
              </a>
              . All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-zinc-400">
              <Link href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

interface SocialLinkProps {
  href: string
  icon: any
  label: string
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <a
    href={href}
    className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </a>
)
