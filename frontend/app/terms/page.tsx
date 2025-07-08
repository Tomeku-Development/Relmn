import { HeroHeader } from "@/components/ui/hero-section-5"
import { Footer } from "@/components/ui/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Relmn Terms of Service - DeFi Protocol Legal Terms | User Agreement",
  description:
    "Read Relmn's terms of service covering user responsibilities, DeFi risks, disclaimers, fees, and legal terms for using our cross-chain optimization protocol. Important legal information for DeFi users.",
  keywords: [
    "Relmn terms of service",
    "DeFi legal terms",
    "blockchain user agreement",
    "cryptocurrency terms",
    "DeFi protocol terms",
    "smart contract terms",
    "DeFi risks disclaimer",
    "blockchain legal agreement",
  ],
  openGraph: {
    title: "Relmn Terms of Service - DeFi Protocol Legal Terms",
    description:
      "Read Relmn's terms of service covering user responsibilities, DeFi risks, disclaimers, fees, and legal terms for using our cross-chain optimization protocol.",
    images: [
      {
        url: "https://cdn.tomeku.com/meta-seo/relmn.png",
        width: 1200,
        height: 630,
        alt: "Relmn Terms of Service - Legal Agreement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relmn Terms of Service - DeFi Protocol Legal Terms",
    description:
      "Comprehensive terms of service covering user responsibilities, DeFi risks, and legal terms for Relmn's cross-chain optimization protocol.",
    images: ["https://cdn.tomeku.com/meta-seo/relmn.png"],
  },
}

export default function TermsPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen bg-white dark:bg-black pt-20">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing or using Relmn's DeFi optimization protocol ("Service"), you agree to be bound by these
                Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the
                Service.
              </p>
              <p>These Terms apply to all visitors, users, and others who access or use the Service.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">2. Description of Service</h2>
              <p className="mb-4">Relmn provides a decentralized finance (DeFi) optimization protocol that:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Automatically optimizes yield farming strategies across multiple blockchains</li>
                <li>Provides AI-powered risk assessment and portfolio rebalancing</li>
                <li>Facilitates cross-chain asset management and liquidity optimization</li>
                <li>Offers analytics and insights for DeFi investments</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">3. User Responsibilities</h2>
              <h3 className="text-xl font-semibold mb-4">3.1 Eligibility</h3>
              <p className="mb-4">
                You must be at least 18 years old and legally capable of entering into binding contracts to use our
                Service.
              </p>

              <h3 className="text-xl font-semibold mb-4">3.2 Account Security</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Maintain the security of your wallet and private keys</li>
                <li>Use strong passwords and enable two-factor authentication where available</li>
                <li>Immediately notify us of any unauthorized access</li>
                <li>Take responsibility for all activities under your account</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">3.3 Prohibited Activities</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Violating any applicable laws or regulations</li>
                <li>Attempting to manipulate or exploit the protocol</li>
                <li>Interfering with the Service's operation or security</li>
                <li>Using the Service for money laundering or terrorist financing</li>
                <li>Impersonating others or providing false information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">4. Risks and Disclaimers</h2>
              <h3 className="text-xl font-semibold mb-4">4.1 DeFi Risks</h3>
              <p className="mb-4">
                <strong>WARNING:</strong> DeFi protocols involve significant risks, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Smart contract vulnerabilities and bugs</li>
                <li>Impermanent loss and market volatility</li>
                <li>Regulatory changes and compliance risks</li>
                <li>Liquidity risks and slippage</li>
                <li>Technical failures and network congestion</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">4.2 No Investment Advice</h3>
              <p className="mb-4">
                Our Service does not provide investment, financial, or legal advice. All decisions are made at your own
                risk and discretion.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">5. Fees and Payments</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Protocol fees may apply to certain transactions and optimizations</li>
                <li>Gas fees and network costs are separate and paid directly to blockchain networks</li>
                <li>Fee structures may change with advance notice</li>
                <li>All fees are non-refundable unless otherwise specified</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">6. Intellectual Property</h2>
              <p className="mb-4">
                The Service and its original content, features, and functionality are owned by Relmn and are protected
                by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">7. Limitation of Liability</h2>
              <p className="mb-4">
                <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Relmn shall not be liable for any indirect, incidental, or consequential damages</li>
                <li>Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim</li>
                <li>We provide the Service "as is" without warranties of any kind</li>
                <li>You assume all risks associated with using DeFi protocols</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">8. Indemnification</h2>
              <p className="mb-4">
                You agree to indemnify and hold harmless Relmn and its affiliates from any claims, damages, or expenses
                arising from your use of the Service or violation of these Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">9. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your access to the Service immediately, without prior notice, for conduct
                that we believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">10. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the Philippines, without
                regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">11. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of material changes by
                posting the updated Terms on our website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600">12. Contact Information</h2>
              <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
              <ul className="list-none mb-6">
                <li>Email: legal@relmn.com</li>
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
