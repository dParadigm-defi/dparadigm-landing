import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactCTA } from "@/components/contact-cta"
import { Shield, Zap, Scale, Globe } from "lucide-react"

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
            <h1 className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              Pioneering the Future of Digital Asset Investment
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              dParadigm Capital is a leading global digital asset investment manager and liquidity provider,
              specializing in blockchain-based assets, DeFi protocols, tokenized securities, and algorithmic trading
              strategies.
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
                Our mission is to bridge the gap between traditional finance (TradFi) and digital finance, offering
                institutional-grade investment solutions powered by cutting-edge technology and risk management
                frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Key Highlights</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <Shield className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Regulated & Institutional-Grade</h3>
                <p className="text-gray-300">Operating under strict AML, KYC, and compliance policies</p>
              </CardContent>
            </Card>

            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Market Leaders in DeFi & Crypto</h3>
                <p className="text-gray-300">Backed by seasoned professionals from top financial institutions</p>
              </CardContent>
            </Card>

            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <Scale className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Data-Driven, AI-Powered Investments</h3>
                <p className="text-gray-300">
                  Leveraging quantitative models & proprietary technology for superior returns
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <Globe className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Global Reach, Local Expertise</h3>
                <p className="text-gray-300">
                  Supporting HNWIs, family offices, institutions, and blockchain projects worldwide
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />

      <Footer />
    </div>
  )
}

