import { HeroHeader } from "@/components/ui/hero-section-5"
import { Footer } from "@/components/ui/footer-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Relmn - Get in Touch with DeFi Experts | Partnership & Support",
  description:
    "Contact Relmn for partnerships, support, or questions about our DeFi optimization protocol. Reach our team via email, Discord, or Telegram. Located in NCR, Quezon City, Philippines. Built by Tomeku.",
  keywords: [
    "contact Relmn",
    "DeFi support",
    "blockchain partnerships",
    "DeFi consultation",
    "Tomeku contact",
    "DeFi protocol support",
    "cryptocurrency partnerships",
    "blockchain development contact",
  ],
  openGraph: {
    title: "Contact Relmn - Get in Touch with DeFi Experts",
    description:
      "Contact Relmn for partnerships, support, or questions about our DeFi optimization protocol. Reach our team via email, Discord, or Telegram.",
    images: [
      {
        url: "https://cdn.tomeku.com/meta-seo/relmn.png",
        width: 1200,
        height: 630,
        alt: "Contact Relmn - DeFi Support & Partnerships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Relmn - Get in Touch with DeFi Experts",
    description:
      "Contact Relmn for partnerships, support, or questions about our DeFi optimization protocol. Professional DeFi consultation and support.",
    images: ["https://cdn.tomeku.com/meta-seo/relmn.png"],
  },
}

export default function ContactPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen bg-white dark:bg-black pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our team for partnerships, support, or any questions about Relmn.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={5} />
                  </div>
                  <Button className="w-full bg-lime-500 hover:bg-lime-600 text-white">Send Message</Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-lime-100 dark:bg-lime-900 text-lime-600">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">hello@relmn.com</p>
                      <p className="text-muted-foreground">support@relmn.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-lime-100 dark:bg-lime-900 text-lime-600">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Community</h3>
                      <p className="text-muted-foreground">Discord: discord.gg/TBzC88NasA</p>
                      <p className="text-muted-foreground">Telegram: t.me/relmn</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-lime-100 dark:bg-lime-900 text-lime-600">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Office</h3>
                      <p className="text-muted-foreground">NCR, Quezon City, Philippines</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-lime-500 to-lime-600 text-white border-0">
                <CardHeader>
                  <CardTitle>Partnership Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lime-100 mb-4">
                    Interested in partnering with Relmn? We're always looking for strategic partnerships to expand the
                    DeFi ecosystem.
                  </p>
                  <Button variant="secondary" className="bg-white text-lime-600 hover:bg-lime-50">
                    Partnership Inquiry
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM PHT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM PHT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
