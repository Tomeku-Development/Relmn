import { HeroHeader } from "@/components/ui/hero-section-5"
import { Footer } from "@/components/ui/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Relmn Privacy Policy - Data Protection & Security | DeFi Protocol Privacy",
  description:
    "Read Relmn's comprehensive privacy policy covering data collection, usage, security measures, and user rights. Learn how we protect your information while using our DeFi optimization protocol.",
  keywords: [
    "Relmn privacy policy",
    "DeFi data protection",
    "blockchain privacy",
    "cryptocurrency privacy",
    "data security DeFi",
    "user privacy rights",
    "DeFi protocol privacy",
    "GDPR compliance DeFi",
  ],
  openGraph: {
    title: "Relmn Privacy Policy - Data Protection & Security",
    description:
      "Read Relmn's comprehensive privacy policy covering data collection, usage, security measures, and user rights for our DeFi optimization protocol.",
    images: [
      {
        url: "https://cdn.tomeku.com/meta-seo/relmn.png",
        width: 1200,
        height: 630,
        alt: "Relmn Privacy Policy - Data Protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relmn Privacy Policy - Data Protection & Security",
    description:
      "Comprehensive privacy policy covering data protection, security measures, and user rights for Relmn's DeFi optimization protocol.",
    images: ["https://cdn.tomeku.com/meta-seo/relmn.png"],
  },
}

export default function PrivacyPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen bg-white dark:bg-black pt-20">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Relmn ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our DeFi optimization protocol and related services.
              </p>
              <p>
                By using our services, you agree to the collection and use of information in accordance with this
                policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-4">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Account information (email address, username)</li>
                <li>Transaction data and wallet addresses</li>
                <li>Communication preferences</li>
                <li>Support requests and feedback</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">2.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Usage data and analytics</li>
                <li>Device information and IP addresses</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Protocol interaction data</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Provide and maintain our DeFi optimization services</li>
                <li>Process transactions and optimize yield strategies</li>
                <li>Improve our protocol and user experience</li>
                <li>Communicate with you about updates and security</li>
                <li>Comply with legal obligations and prevent fraud</li>
                <li>Analyze usage patterns and performance metrics</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">4. Information Sharing</h2>
              <p className="mb-4">We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>With service providers who assist our operations</li>
                <li>In connection with business transfers or mergers</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
              <p>
                <strong>We never sell your personal information to third parties.</strong>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">5. Data Security</h2>
              <p className="mb-4">We implement industry-standard security measures to protect your information:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>End-to-end encryption for sensitive data</li>
                <li>Multi-signature wallet security</li>
                <li>Regular security audits and penetration testing</li>
                <li>Secure data storage and transmission protocols</li>
                <li>Access controls and employee training</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">6. Your Rights</h2>
              <p className="mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Access and review your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your personal information (subject to legal requirements)</li>
                <li>Restrict or object to certain processing activities</li>
                <li>Data portability for certain information</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">7. Cookies and Tracking</h2>
              <p className="mb-4">
                We use cookies and similar technologies to enhance your experience and analyze usage patterns. You can
                control cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">8. International Transfers</h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure
                appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">9. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new policy on our website and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">10. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-none mb-6">
                <li>Email: privacy@relmn.com</li>
                <li>Address: NCR, Quezon City, Philippines</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
