"use client"

import type React from "react"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactCTA } from "@/components/contact-cta"

export default function Contact() {

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
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Get in touch with our team to explore unique opportunities
            </p>
          </div>
            <div className="container relative z-10 mx-auto mt-12 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl rounded-2xl border border-blue-600/20 bg-black/70 p-8 text-center backdrop-blur-sm">
                    <p className="mt-4 text-lg text-gray-300">
                        We welcome enquiries from investors, partners, and industry professionals.&nbsp;
                        Reach out to our team for strategic discussions, investment opportunities, or any support you may need.
                    </p>

                    <div className="mt-6 flex flex-col items-center justify-center gap-4">
                        <p className="text-sm text-gray-400">📩 Email: dg@dparadigmcapital.com</p>
                    </div>
                </div>
            </div>
        </div>
        </section>


      <Footer />
    </div>
  )
}

