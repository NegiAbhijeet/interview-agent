"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import FilledButtonWrapper from "./filledButtonWrapper"

export function Navbar() {
  const pathname = usePathname()

  const isActive = (path) => pathname === path

  const linkClass = (path) =>
    `hover:text-white/80 transition ${isActive(path) ? "text-white underline" : "text-white/60"}`

  return (
    <header className="fixed top-12 w-full z-50" data-aos="fade-down" data-aos-duration="600">
      <section className="w-[90%] max-w-screen-xl mx-auto">
        <div className="px-6 py-4 rounded-full backdrop-blur-lg bg-white/10 shadow-lg flex items-center justify-between">
          {/* Left: Logo + Brand */}
          <div className="flex items-center space-x-3 flex-1">
            <Image src="/logo.png" alt="Logo" width={28} height={28} className="rounded" />
            <span className="text-lg font-bold tracking-wide text-white">
              AI InterviewAgent
            </span>
          </div>

          {/* Center: Nav Links */}
          <nav className="hidden md:flex space-x-6 text-sm font-semibold gap-6">
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/about" className={linkClass("/about")}>About</Link>
            <Link href="/pricing" className={linkClass("/pricing")}>Pricing</Link>
            <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
          </nav>

          {/* Right: Login Button */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <FilledButtonWrapper>
              Login
            </FilledButtonWrapper>
          </div>
        </div>
      </section>
    </header>
  )
}
