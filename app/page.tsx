import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactCTA } from "@/components/contact-cta"
import {Shield, Zap, Scale, Globe, UserCheck, Brain, Lock} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg-cover-image.jpg"
            alt="Digital background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
              <h1 className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl pb-1">
                  Pioneering Compliant Digital Asset Management
              </h1>
            <p className="mt-6 text-xl text-muted-foreground">
                dParadigm Capital is a global multi-family office platform dedicated to helping clients navigate the digital economy with institutional discipline and regulatory integrity. We provide bespoke digital asset investment and family office services designed for long-term capital preservation, growth, and intergenerational wealth management.
            </p>
            {/* Buttons removed */}
          </div>
        </div>
      </section>

        {/* Mission Section */}
        <section className="bg-black/80 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Firm</h2>
                    <div className="mt-6 text-lg leading-8 text-gray-300">
                        <p className="mb-6">
                            Our mission is to bridge the gap between traditional finance (TradFi) and digital finance, offering institutional-grade access to blockchain-based assets, tokenized investments, and emerging decentralized finance (DeFi) opportunities.
                        </p>
                        <p className="mb-6">
                            We serve as a trusted partner to family offices, UHNWIs, and institutional investors - combining deep regulatory expertise, secure custody solutions, and tailored investment frameworks built on transparency, governance, and compliance.
                        </p>
                    </div>
                </div>
            </div>
        </section>

      {/* Key Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Key Highlights</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <Shield className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Regulated & Institutional-Grade</h3>
                <p className="text-gray-300">Operating under robust AML, KYC, and compliance frameworks, dParadigm Capital upholds the governance and transparency expected of global financial institutions.</p>
              </CardContent>
            </Card>

            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Multi-Asset Investment Expertise</h3>
                <p className="text-gray-300">Beyond digital assets, we manage diversified portfolios across private credit, venture capital, structured products, and tokenized real-world assets — tailored for family offices, UHNWIs, and institutional investors.</p>
              </CardContent>
            </Card>

            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <Scale className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Data-Driven, Quantitative Performance</h3>
                <p className="text-gray-300">Our strategies integrate proprietary quantitative models, blockchain analytics, and algorithmic execution to deliver consistent, risk-adjusted returns.</p>
              </CardContent>
            </Card>

              <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                          <Globe className="h-6 w-6 text-blue-500" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-white">Tailored Treasury Management & Financing Solutions</h3>
                      <p className="text-gray-300">We deliver bespoke treasury management and financing capabilities, connecting traditional capital with digital markets through regulated banking, custody, and tokenization infrastructure.</p>
                  </CardContent>
              </Card>

            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <Globe className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Global Reach, Local Expertise</h3>
                <p className="text-gray-300">With presence across major financial centers, dParadigm Capital bridges traditional finance and digital innovation, offering localized expertise and global market access.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Our Edge</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <UserCheck className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Trust & Proven Expertise</h3>
                <p className="text-gray-300">
                  Decades of experience from top-tier financial institutions, hedge funds and blockchain pioneers
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <Shield className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Client-Centric & Tailored Solutions</h3>
                <p className="text-gray-300">Dedicated to maximizing long-term value for investors</p>
              </CardContent>
            </Card>

            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <Brain className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Advanced Research & AI-Driven Strategies</h3>
                <p className="text-gray-300">Proprietary quantitative models & real-time risk analytics</p>
              </CardContent>
            </Card>

            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <Lock className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Institutional-Grade Security & Compliance</h3>
                <p className="text-gray-300">Stringent AML, CTF and regulatory adherence for investors' protection</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
0
      {/* Contact CTA */}
      <ContactCTA />

      <Footer />
    </div>
  )
}

