import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactCTA } from "@/components/contact-cta"
import { TrendingUp, Scale, BookOpen } from "lucide-react"

export default function Blog() {
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
              Blog & Market Insights
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">Stay Ahead with Expert Research & Analysis</p>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Market Trends */}
            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6 pt-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <TrendingUp className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Market Trends & Insights</h3>
                <p className="text-gray-300">Deep dives into DeFi, Web3, and institutional crypto adoption</p>
              </CardContent>
            </Card>

            {/* Compliance */}
            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6 pt-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <Scale className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Compliance & Regulation Updates</h3>
                <p className="text-gray-300">Guidance on AML, CTF, & evolving crypto laws</p>
              </CardContent>
            </Card>

            {/* Tokenomics */}
            <Card className="border-blue-600/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6 pt-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <BookOpen className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Tokenomics & Investment Strategies</h3>
                <p className="text-gray-300">Expert breakdowns of crypto investment opportunities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-black/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Recent Articles
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Sample Articles */}
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-blue-600/20 bg-black/50 backdrop-blur-sm overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt="Article thumbnail"
                    width={600}
                    height={340}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2 text-sm text-blue-400">June 15, 2023</div>
                  <h3 className="mb-2 text-xl font-bold text-white">The Future of DeFi: Trends to Watch in 2023</h3>
                  <p className="text-gray-300 line-clamp-3">
                    An in-depth analysis of emerging trends in decentralized finance and what institutional investors
                    should know.
                  </p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Link href="#" className="text-blue-400 hover:text-blue-300">
                    Read More →
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />

      <Footer />
    </div>
  )
}

