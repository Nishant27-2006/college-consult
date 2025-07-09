"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/packages", label: "Packages" },
    { href: "/team", label: "Team" },
  ]

  return (
    <nav className="bg-gradient-to-r from-white via-slate-50 to-white border-b border-slate-200 sticky top-0 z-50 shadow-sm backdrop-blur-md bg-opacity-95">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="College Consult" width={350} height={140} className="h-20 w-auto drop-shadow-sm hover:drop-shadow-md transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-all duration-300 px-4 py-2 rounded-lg ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 font-semibold shadow-sm"
                    : "text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:shadow-sm"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-700">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-gradient-to-b from-white to-slate-50 p-6">
                <div className="flex flex-col space-y-4 pt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`font-medium text-lg transition-all duration-300 py-2 px-3 rounded-lg ${
                        isActive(item.href)
                          ? "text-amber-800 bg-gradient-to-r from-amber-100 to-amber-50 shadow-sm"
                          : "text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/signup">
                    <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white w-full py-3 text-lg font-semibold rounded-lg mt-4 shadow-md hover:shadow-lg transition-all duration-300">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
