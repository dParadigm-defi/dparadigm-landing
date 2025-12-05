import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactCTA } from "@/components/contact-cta"
import { BarChart3, TrendingUp, Rocket, Target } from "lucide-react"

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
                Portfolio Solutions
            </h1>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-1">
            {/* dParadigm Fund */}
            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20">
                  <BarChart3 className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-white">dParadigm Fund</h2>
                <p className="mb-6 text-gray-300">A diversified digital asset investment fund designed for family offices and institutional investors seeking secure, risk-managed exposure to the digital economy.</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                      Delta-Managed Crypto Exposure - Balanced participation in core digital assets through controlled risk frameworks.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                      Quantitative & Systematic Strategies - Data-driven investment models built for consistency and long-term performance.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                      DeFi & Tokenized Asset Access - Curated exposure to regulated decentralized finance protocols and tokenized investment vehicles.
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
                <h2 className="mb-4 text-2xl font-bold text-white">dParadigm Treasury Solutions</h2>
                <p className="mb-6 text-gray-300">A tailored family office and institutional treasury management program focused on capital preservation, yield optimization, and digital asset integration.</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                      Digital Treasury Structuring - Customized portfolio design for stablecoin, tokenized, and fiat balance optimization.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                      Risk & Compliance Oversight - Managed under institutional AML, KYC, and regulatory frameworks.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                      Strategic Allocation & Reporting - Transparent dashboards and analytics for real-time treasury visibility.
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
                <h2 className="mb-4 text-2xl font-bold text-white">Early-Stage Protocols & Web3 Ventures</h2>
                <p className="mb-6 text-gray-300">
                    A selective launchpad providing compliant, risk-adjusted access to high-potential blockchain and Web3 opportunities.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                      Curated Early-Stage Access - Participation in vetted, regulation-aligned digital projects.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                      Governance & Oversight - Institutional due diligence and structured exposure management.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                      Growth Alignment - Strategic partnerships and advisory support to enhance long-term protocol success.
                  </li>
                </ul>
              </CardContent>
            </Card>
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

