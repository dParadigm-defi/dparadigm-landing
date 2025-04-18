"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
  { name: "Our Firm", href: "/" },
  { name: "Mission", href: "/mission" },
  // { name: "Advantage", href: "/advantage" },
  { name: "Clients", href: "/clients" },
  // { name: "Team", href: "/team" },
  // { name: "Market Making", href: "/market-making" },
  { name: "Investment Products", href: "/products" },
  //{ name: "Partnerships", href: "/partnerships" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    // Cleanup function to ensure we reset the overflow when component unmounts
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-blue-900/10 bg-black/80 backdrop-blur-md">
      <nav
        className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-6">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image src="/logo_blue.svg" alt="dParadigm Logo" width={150} height={50} className="h-10 w-auto" />
          </Link>
          <div className="hidden lg:flex lg:gap-x-4 xl:gap-x-6">
            {navigation.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-semibold leading-6 transition",
                    isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-400",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name === "Advantage" ? "Competitive Advantage" : item.name}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex lg:hidden text-gray-400 hover:text-gray-300"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

          {/* Menu panel */}
          <div className="fixed inset-0 z-10 flex min-h-screen w-full flex-col bg-black">
            <div className="flex items-center justify-between p-6">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <Image src="/logo_blue.svg" alt="dParadigm Logo" width={150} height={50} className="h-10 w-auto" />
              </Link>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 pt-0">
              <div className="space-y-4">
                {navigation.map((item) => {
                  const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-lg font-semibold transition",
                        isActive
                          ? "bg-blue-900/20 text-blue-400"
                          : "text-gray-300 hover:bg-blue-900/10 hover:text-blue-400",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.name === "Advantage" ? "Competitive Advantage" : item.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

