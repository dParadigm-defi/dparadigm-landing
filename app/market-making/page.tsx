import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactCTA } from "@/components/contact-cta"
import { TrendingDown, ShieldAlert, ListX, BarChart4, ArrowUpDown, BarChart, ShieldCheck } from "lucide-react"

export default function MarketMaking() {
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
              Market Making & Liquidity Solutions
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">Solving Liquidity Challenges in Crypto Markets</p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="bg-black/80 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Common Challenges
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20">
                  <TrendingDown className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Low Trading Volume</h3>
                <p className="text-gray-300">High transaction costs & slippage deter investors</p>
              </CardContent>
            </Card>

            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20">
                  <ShieldAlert className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Price Manipulation Risks</h3>
                <p className="text-gray-300">Vulnerability to bad actors & artificial price swings</p>
              </CardContent>
            </Card>

            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20">
                  <ListX className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Limited Interest & Exchange Listings</h3>
                <p className="text-gray-300">Harder to gain visibility on major platforms</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Our Market Making Solution
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <BarChart4 className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Higher Liquidity & Depth</h3>
                <p className="text-gray-300">Smoother order book activity</p>
              </CardContent>
            </Card>

            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <ArrowUpDown className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Increased Trading Volume</h3>
                <p className="text-gray-300">Reduced market impact & price slippage</p>
              </CardContent>
            </Card>

            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <BarChart className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Improved Exchange Listings</h3>
                <p className="text-gray-300">Higher chance of being listed on top-tier platforms</p>
              </CardContent>
            </Card>

            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <ShieldCheck className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Lower Price Manipulation Risk</h3>
                <p className="text-gray-300">Stronger, more resilient price action</p>
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

