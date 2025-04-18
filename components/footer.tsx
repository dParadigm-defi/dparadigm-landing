import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-blue-900/10 bg-black/90 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">dParadigm Capital</h3>
            <p className="text-sm text-gray-400">
              Leading global digital asset investment manager and liquidity provider.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 transition hover:text-blue-400">
                  Our Firm
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-gray-400 transition hover:text-blue-400">
                  Mission
                </Link>
              </li>
              {/*<li>*/}
              {/*  <Link href="/advantage" className="text-gray-400 transition hover:text-blue-400">*/}
              {/*    Competitive Advantage*/}
              {/*  </Link>*/}
              {/*</li>*/}
              <li>
                <Link href="/clients" className="text-gray-400 transition hover:text-blue-400">
                  Clients
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              {/*
              <li>
                <Link href="/market-making" className="text-gray-400 transition hover:text-blue-400">
                  Market Making
                </Link>
              </li>
              */}
              <li>
                <Link href="/products" className="text-gray-400 transition hover:text-blue-400">
                  Investment Products
                </Link>
              </li>
              {/*
              <li>
                <Link href="/blog" className="text-gray-400 transition hover:text-blue-400">
                  Blog
                </Link>
              </li>
              */}
              <li>
                <Link href="/contact" className="text-gray-400 transition hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📩 Email: dg@dparadigmcapital.com</li>
              <li className="flex items-center gap-2">
                Follow us:
                <Link href="#" className="inline-flex text-gray-400 hover:text-blue-400">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="inline-flex text-gray-400 hover:text-blue-400">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-blue-900/10 pt-8 text-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} dParadigm Capital. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-400">
            ⚠️ Risk Disclaimer: Digital asset trading involves a substantial risk of loss.
          </p>
        </div>
      </div>
    </footer>
  )
}

