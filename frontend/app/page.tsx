import { HeroSection } from "@/components/ui/hero-section-5"
import { Features } from "@/components/ui/features-8"
import { Features2 } from "@/components/ui/features-10"
import { Features3 } from "@/components/ui/features-4"
import { TechStack } from "@/components/tech-stack"
import { Security } from "@/components/security"
import { Team } from "@/components/team"
import { Footer } from "@/components/ui/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <HeroSection />
      <Features />
      <Features2 />
      <Features3 />
      <TechStack />
      <Security />
      <Team />
      <Footer />
    </main>
  )
}
