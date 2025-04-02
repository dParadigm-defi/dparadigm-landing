import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactCTA } from "@/components/contact-cta"
import { Coins, TrendingUp, BarChart3, Building, Landmark, Globe } from "lucide-react"

export default function Mission() {
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
              Our Mission
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">Bridging Traditional & Decentralized Finance</p>
          </div>
        </div>
      </section>

      {/* Main Mission */}
      <section className="bg-black/80 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xl leading-8 text-gray-300">
              We empower high-net-worth individuals (HNWIs), family offices, and institutional investors with tailored
              exposure to the DeFi ecosystem, digital asset funds, and next-gen yield strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Focus */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Investment Focus</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                    <Building className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">Early-stage blockchain & Web3 startups</h3>
                </CardContent>
              </Card>

              <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                    <Coins className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">Tokenized assets & digital asset portfolios</h3>
                </CardContent>
              </Card>

              <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                    <TrendingUp className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    DeFi yield farming, staking, and liquidity pools
                  </h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Liquidity & Market-Making */}
      <section className="bg-black/60 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Liquidity & Market-Making Expertise
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20">
                  <BarChart3 className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Enhancing liquidity for exchanges & crypto projects
                </h3>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20">
                  <Landmark className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Preventing price manipulation & wash trading</h3>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20">
                  <Coins className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Creating efficient, stable, and liquid markets</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driving Institutional Crypto Adoption */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/20">
                <Globe className="h-10 w-10 text-blue-500" />
              </div>
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Driving Institutional Crypto Adoption
            </h2>
            <p className="text-xl leading-8 text-gray-300">
              We believe digital assets are the future and work towards sustainable, compliant, and secure investment
              pathways for institutions worldwide.
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

