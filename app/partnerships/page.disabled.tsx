import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactCTA } from "@/components/contact-cta"
import { Building2, BarChart4, Landmark } from "lucide-react"

export default function Partnerships() {
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
              Partnerships & Collaborations
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">Join the dParadigm Ecosystem</p>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">We collaborate with:</h2>

            <div className="grid gap-12 md:grid-cols-3">
              {/* Crypto Exchanges */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/20">
                  <BarChart4 className="h-10 w-10 text-blue-500" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">Crypto Exchanges</h3>
                <p className="text-gray-300">Enhancing market liquidity & stability</p>
              </div>

              {/* Blockchain Startups */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/20">
                  <Building2 className="h-10 w-10 text-blue-500" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">Blockchain Startups</h3>
                <p className="text-gray-300">Supporting early-stage token economies</p>
              </div>

              {/* Institutional Investors */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/20">
                  <Landmark className="h-10 w-10 text-blue-500" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">Institutional Investors</h3>
                <p className="text-gray-300">Delivering compliant, institutional-grade exposure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />

      <Footer />
    </div>
  )
}

