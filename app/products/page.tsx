import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactCTA } from "@/components/contact-cta"
import { BarChart3, TrendingUp, Rocket, CheckCircle, Target } from "lucide-react"

export default function Products() {
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
              Investment Products
            </h1>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            {/* dParadigm Fund */}
            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20">
                  <BarChart3 className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-white">dParadigm Fund</h2>
                <p className="mb-6 text-gray-300">A diversified digital asset investment fund offering:</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Delta managed exposure to crypto assets
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Advanced risk management & quantitative strategies
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    DeFi exposure
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* dParadigm Yield Strategies */}
            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20">
                  <TrendingUp className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-white">dParadigm Liquidity Solutions</h2>
                <p className="mb-6 text-gray-300">A cutting-edge investment program powered by:</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Liquidity pool participation
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Macro AI-powered overview of the market
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Algorithmic and systematic trading
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Early-Stage Blockchain Ventures */}
            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20">
                  <Rocket className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-white">Early-Stage Protocols</h2>
                <p className="mb-6 text-gray-300">
                  A protected launchpad to exciting new markets:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Gain exclusive access to promising new blockchain & Web3 protocols
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Remain regulation compliant
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Managed exposure to high-growth markets
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Liquidity Services Section */}
      <section className="bg-black/80 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Liquidity Services
            </h2>
            <div className="rounded-xl border border-blue-600/20 bg-black/50 p-8 backdrop-blur-sm">
              <p className="mb-6 text-lg text-gray-300">
                We provide liquidity services for digital asset exchanges, ensuring:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-blue-500" />
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Increased Trading Volume</span> – Attracts high-frequency
                    traders & institutions
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-blue-500" />
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Lower Market Manipulation</span> – Stronger order book
                    integrity
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-blue-500" />
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Higher Exchange Revenue</span> – More transactions = more
                    exchange fees
                  </span>
                </li>
              </ul>
              <p className="mt-6 text-lg text-gray-300">
                Partner with us to enhance exchange liquidity & stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early-Stage Blockchain Ventures Section */}
      <section className="bg-black/60 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/20">
                <Target className="h-10 w-10 text-blue-500" />
              </div>
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Early-Stage Web3 Protocol Support
            </h2>
            <p className="text-xl leading-8 text-gray-300">
              Our Web3 and trading expertise positions protocols for success from day one, we ensure protocols thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />

      <Footer />
    </div>
  )
}

