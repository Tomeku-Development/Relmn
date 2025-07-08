import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function Team() {
  return (
    <section id="team" className="py-24 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet the Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Built by{" "}
            <a href="https://tomeku.com" className="text-lime-600 hover:underline font-semibold">
              Tomeku
            </a>{" "}
            - a team of visionary engineers and security experts dedicated to transforming the DeFi landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamCard
            name="Java Jay Bartolome"
            role="Founder & CTO"
            image="https://cdn.tomeku.com/headshots/javajay.jpg"
            description="Visionary leader with a passion for building groundbreaking technology."
          />

          <TeamCard
            name="Marvin James Erosa"
            role="Principal Engineer & CISO"
            image="https://cdn.tomeku.com/headshots/marvin.jpg"
            description="Expert in software architecture and cybersecurity."
          />

          <TeamCard
            name="Gladwin Del Rosario"
            role="Lead Engineer & Head of Infrastructure"
            image="https://cdn.tomeku.com/headshots/gladwin.jpg"
            description="Specialist in scalable systems and cloud architecture."
          />

          <TeamCard
            name="Honeylet Igot"
            role="Chief Marketing Officer"
            image="https://cdn.tomeku.com/headshots/honey.jpg"
            description="Expert at bridging complex technology and market needs."
          />
        </div>

        <div className="mt-16 text-center">
          <div className="flex items-center justify-center space-x-4">
            <span className="text-gray-600 dark:text-gray-400">Created by</span>
            <Image
              src="https://tomeku.com/tomeku-logo.svg"
              alt="Tomeku"
              width={100}
              height={30}
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface TeamCardProps {
  name: string
  role: string
  image: string
  description: string
}

const TeamCard = ({ name, role, image, description }: TeamCardProps) => (
  <Card className="text-center group hover:shadow-lg transition-all duration-300">
    <CardContent className="pt-6">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{name}</h3>
      <p className="text-lime-600 dark:text-lime-400 text-sm font-medium mb-2">{role}</p>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </CardContent>
  </Card>
)
