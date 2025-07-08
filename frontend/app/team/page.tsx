import { HeroHeader } from "@/components/ui/hero-section-5"
import { Footer } from "@/components/ui/footer-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Relmn Team - Meet the Experts Behind DeFi Innovation | Tomeku Development",
  description:
    "Meet the Relmn team: Java Jay Bartolome (CTO), Marvin James Erosa (CISO), Gladwin Del Rosario (Infrastructure Lead), and Honeylet Igot (CMO). Built by Tomeku - experts in blockchain, DeFi, and enterprise security.",
  keywords: [
    "Relmn team",
    "DeFi developers",
    "blockchain experts",
    "Tomeku development",
    "DeFi leadership",
    "blockchain security experts",
    "cryptocurrency team",
    "DeFi protocol founders",
  ],
  openGraph: {
    title: "Relmn Team - Meet the Experts Behind DeFi Innovation",
    description:
      "Meet the Relmn team: Java Jay Bartolome (CTO), Marvin James Erosa (CISO), Gladwin Del Rosario (Infrastructure Lead), and Honeylet Igot (CMO). Built by Tomeku.",
    images: [
      {
        url: "https://cdn.tomeku.com/meta-seo/relmn.png",
        width: 1200,
        height: 630,
        alt: "Relmn Team - DeFi Innovation Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relmn Team - Meet the Experts Behind DeFi Innovation",
    description:
      "Meet the Relmn team: blockchain experts, security specialists, and DeFi innovators building the future of cross-chain optimization.",
    images: ["https://cdn.tomeku.com/meta-seo/relmn.png"],
  },
}

export default function TeamPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen bg-white dark:bg-black pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built by{" "}
              <a href="https://tomeku.com" className="text-lime-600 hover:underline font-semibold">
                Tomeku
              </a>{" "}
              - a team of visionary engineers and security experts dedicated to transforming DeFi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <TeamMember
              name="Java Jay Bartolome"
              role="Founder & Chief Technology Officer (CTO)"
              image="https://cdn.tomeku.com/headshots/javajay.jpg"
              description="Visionary leader with a passion for building groundbreaking technology. Java Jay founded Tomeku with the mission to transform complex challenges into powerful solutions through innovative engineering."
              badges={["Blockchain", "DeFi", "Leadership"]}
            />

            <TeamMember
              name="Marvin James Erosa"
              role="Principal Software Engineer & Chief Information Security Officer (CISO)"
              image="https://cdn.tomeku.com/headshots/marvin.jpg"
              description="Expert in software architecture and cybersecurity, Marvin is committed to building impenetrable digital fortresses while maintaining system performance and scalability."
              badges={["Security", "Architecture", "Cybersecurity"]}
            />

            <TeamMember
              name="Gladwin Del Rosario"
              role="Lead Software Engineer & Head of Infrastructure"
              image="https://cdn.tomeku.com/headshots/gladwin.jpg"
              description="Specialist in scalable systems and cloud architecture, Gladwin builds the backbone of modern applications that can handle massive scale and complexity."
              badges={["Infrastructure", "Cloud", "Scalability"]}
            />

            <TeamMember
              name="Honeylet Igot"
              role="Chief Marketing Officer (CMO)"
              image="https://cdn.tomeku.com/headshots/honey.jpg"
              description="Expert at bridging the gap between complex technology and market needs, Honeylet drives growth and brand strategy while ensuring our innovations reach the right audience."
              badges={["Marketing", "Strategy", "Growth"]}
            />
          </div>

          <div className="text-center">
            <Card className="inline-block bg-gradient-to-r from-lime-500 to-lime-600 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Powered by Tomeku</h3>
                <p className="text-lime-100 mb-6 max-w-2xl">
                  Tomeku is a cutting-edge technology company specializing in blockchain solutions, DeFi protocols, and
                  enterprise-grade security systems.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://www.facebook.com/TomekuOfficial"
                    className="text-white hover:text-lime-200 transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://github.com/Tomeku-Development"
                    className="text-white hover:text-lime-200 transition-colors"
                  >
                    GitHub
                  </a>
                  <a href="https://tomeku.com" className="text-white hover:text-lime-200 transition-colors">
                    Website
                  </a>
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

interface TeamMemberProps {
  name: string
  role: string
  image: string
  description: string
  badges: string[]
}

const TeamMember = ({ name, role, image, description, badges }: TeamMemberProps) => (
  <Card className="h-full transition-all duration-300 hover:shadow-lg">
    <CardContent className="p-6">
      <div className="text-center mb-4">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="rounded-full object-cover" />
        </div>
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className="text-lime-600 font-medium text-sm mb-3">{role}</p>
      </div>

      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2 justify-center">
        {badges.map((badge, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            {badge}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
)
