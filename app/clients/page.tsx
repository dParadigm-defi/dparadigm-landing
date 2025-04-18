import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactCTA } from "@/components/contact-cta"
import { Users, Building2, Landmark } from "lucide-react"

export default function Clients() {
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
              Our Clients
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">Tailored Solutions for Investors & Institutions</p>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">

            {/* Institutional Investors */}
            <div className="flex flex-col">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20">
                <Landmark className="h-8 w-8 text-blue-500" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-white">Institutional Investors</h2>
              <p className="mb-6 text-gray-300">
                We provide customized institutional solutions for seamless managed digital asset exposure.
              </p>
              <ul className="mt-auto space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  Regulated CeFi and DeFi exposure
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  Compliant & secure custody solutions
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  Bespoke solutions and support
                </li>
              </ul>
            </div>

            {/* Family Offices */}
            <div className="flex flex-col">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20">
                <Building2 className="h-8 w-8 text-blue-500" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-white">Asset Managers & Family Offices</h2>
              <p className="mb-6 text-gray-300">
                Enhance portfolio diversification with risk-adjusted digital asset investments.
              </p>
              <ul className="mt-auto space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  Separately managed accounts (SMAs)
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  Exposure to tokenized assets
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  Private investments in early-stage DeFi projects
                </li>
              </ul>
            </div>

            {/* HNWIs */}
            <div className="flex flex-col">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20">
                <Users className="h-8 w-8 text-blue-500" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-white">Web3 Projects</h2>
              <p className="mb-6 text-gray-300">
                Exclusive access to institutional-grade investment products and high-growth opportunities.
              </p>
              <ul className="mt-auto space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  Diversified digital asset funds
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  Liquidity solutions
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  Bespoke treasury support and protection
                </li>
              </ul>
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

