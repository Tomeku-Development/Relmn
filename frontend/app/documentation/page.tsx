import { HeroHeader } from "@/components/ui/hero-section-5"
import { Footer } from "@/components/ui/footer-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Book, Zap, Shield, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Relmn Documentation - DeFi API Reference & Integration Guides | Developer Resources",
  description:
    "Comprehensive Relmn documentation: API references, integration guides, SDK downloads, security best practices, and developer resources for DeFi protocol integration. Get started with cross-chain optimization today.",
  keywords: [
    "Relmn documentation",
    "DeFi API reference",
    "blockchain integration guide",
    "DeFi SDK",
    "smart contract documentation",
    "developer resources",
    "DeFi protocol integration",
    "API documentation",
  ],
  openGraph: {
    title: "Relmn Documentation - DeFi API Reference & Integration Guides",
    description:
      "Comprehensive Relmn documentation: API references, integration guides, SDK downloads, security best practices, and developer resources for DeFi protocol integration.",
    images: [
      {
        url: "https://cdn.tomeku.com/meta-seo/relmn.png",
        width: 1200,
        height: 630,
        alt: "Relmn Documentation - Developer Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relmn Documentation - DeFi API Reference & Integration Guides",
    description:
      "Comprehensive Relmn documentation: API references, integration guides, SDK downloads, and developer resources for DeFi protocol integration.",
    images: ["https://cdn.tomeku.com/meta-seo/relmn.png"],
  },
}

export default function DocumentationPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen bg-white dark:bg-black pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive guides and API references to help you integrate with Relmn's DeFi optimization protocol.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <DocCard
              icon={Book}
              title="Getting Started"
              description="Quick start guide to begin using Relmn's optimization features"
              badge="Beginner"
              badgeColor="lime"
            />

            <DocCard
              icon={Code}
              title="API Reference"
              description="Complete API documentation with examples and code snippets"
              badge="Developer"
              badgeColor="blue"
            />

            <DocCard
              icon={Zap}
              title="Integration Guide"
              description="Step-by-step integration with popular DeFi protocols and wallets"
              badge="Advanced"
              badgeColor="purple"
            />

            <DocCard
              icon={Shield}
              title="Security Best Practices"
              description="Security guidelines and best practices for safe DeFi operations"
              badge="Security"
              badgeColor="red"
            />

            <DocCard
              icon={Code}
              title="Smart Contract Docs"
              description="Technical documentation for our smart contract architecture"
              badge="Technical"
              badgeColor="gray"
            />

            <DocCard
              icon={Book}
              title="FAQ & Troubleshooting"
              description="Common questions and solutions for typical integration issues"
              badge="Support"
              badgeColor="green"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-950/20 dark:to-green-950/20">
              <CardHeader>
                <CardTitle className="text-lime-700 dark:text-lime-400">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>API Endpoints</span>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>SDK Downloads</span>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Code Examples</span>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Browse
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Postman Collection</span>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Import
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Can't find what you're looking for? Our team is here to help you integrate successfully.
                </p>
                <div className="space-y-2">
                  <Button asChild className="w-full bg-lime-500 hover:bg-lime-600 text-white">
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="https://discord.gg/TBzC88NasA">Join Discord</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

interface DocCardProps {
  icon: any
  title: string
  description: string
  badge: string
  badgeColor: "lime" | "blue" | "purple" | "red" | "gray" | "green"
}

const DocCard = ({ icon: Icon, title, description, badge, badgeColor }: DocCardProps) => {
  const badgeColors = {
    lime: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200",
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    gray: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
    green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  }

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg cursor-pointer">
      <CardHeader>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-lime-100 dark:bg-lime-900 text-lime-600">
              <Icon className="w-5 h-5" />
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <Badge className={badgeColors[badgeColor]}>{badge}</Badge>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>
    </Card>
  )
}
