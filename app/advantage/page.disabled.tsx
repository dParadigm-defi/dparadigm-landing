import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactCTA } from "@/components/contact-cta"
import { Shield, Brain, UserCheck, Lock, Target } from "lucide-react"

export default function CompetitiveAdvantage() {
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
              Competitive Advantage
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">Why Choose dParadigm?</p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <UserCheck className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Trust & Proven Expertise</h3>
                <p className="text-gray-300">
                  Decades of experience from top-tier financial institutions, hedge funds, and blockchain pioneers
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
                <p className="text-gray-300">Stringent AML, CTF, and regulatory adherence for investors' protection</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="bg-black/60 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/20">
                <Target className="h-10 w-10 text-blue-500" />
              </div>
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Approach</h2>
            <p className="text-xl leading-8 text-gray-300">
              We combine expertise, technology, and a client-first approach to build the next era of digital asset
              investment
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

