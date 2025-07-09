import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Image src="/logo.png" alt="College Consult" width={200} height={80} className="h-10 w-auto mb-4" />
            <p className="text-slate-600 text-sm leading-relaxed">
              Empowering students to achieve their college dreams through personalized guidance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3 text-sm">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-amber-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-600 hover:text-amber-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-slate-600 hover:text-amber-600 transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-slate-600 hover:text-amber-600 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-slate-600 hover:text-amber-600 transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3 text-sm">Contact</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>colllegeconsult@gmail.com</li>
              <li>Free consultation available</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-6 pt-6 text-center">
          <p className="text-slate-600 text-sm">© 2024 College Consult. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
