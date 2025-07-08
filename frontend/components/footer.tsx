import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, MessageCircle, Send, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image
              src="https://cdn.tomeku.com/logo/Realm-Dark-Logo.svg"
              alt="Relmn Logo"
              width={120}
              height={32}
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              The universal cross-chain DeFi optimization protocol. Intelligently navigate fragmentation and maximize
              capital efficiency with AI-powered precision.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={Twitter} label="Twitter" />
              <SocialLink href="#" icon={Github} label="GitHub" />
              <SocialLink href="#" icon={MessageCircle} label="Discord" />
              <SocialLink href="#" icon={Send} label="Telegram" />
              <SocialLink href="#" icon={Facebook} label="Facebook" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#technology" className="text-gray-300 hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="#security" className="text-gray-300 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#team" className="text-gray-300 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Relmn. All rights reserved. Built by Tomeku Development.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <Link
    href={href}
    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </Link>
)
