import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-32 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built by{" "}
            <a href="https://tomeku.com" className="text-blue-600 hover:underline font-semibold">
              Tomeku
            </a>{" "}
            - a team of visionary engineers and security experts dedicated to transforming DeFi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        <div className="mt-16 text-center">
          <Card className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Powered by Tomeku</h3>
              <p className="text-blue-100 mb-6 max-w-2xl">
                Tomeku is a cutting-edge technology company specializing in blockchain solutions, DeFi protocols, and
                enterprise-grade security systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.facebook.com/TomekuOfficial"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://github.com/Tomeku-Development"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  GitHub
                </a>
                <a href="https://tomeku.com" className="text-white hover:text-blue-200 transition-colors">
                  Website
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
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
        <p className="text-blue-600 font-medium text-sm mb-3">{role}</p>
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
