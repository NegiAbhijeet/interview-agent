"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import NormalButton from "./buttons/normalButton"
export function Navbar() {
  const pathname = usePathname()

  const isActive = (path) => pathname === path

  const linkClass = (path) =>
    `relative transition duration-200 font-medium 
     ${isActive(path)
      ? "text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black"
      : "text-black/60 hover:text-black/80 hover:scale-105"}`

  return (
    <header className="fixed top-4 w-full z-50" data-aos="fade-down" data-aos-duration="600">
      <section className="w-[90%] max-w-screen-xl mx-auto">
        <div
          className="px-6 py-3 rounded-full backdrop-blur-lg shadow-lg flex items-center justify-between transition"
          style={{
            background: "linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(236, 72, 153, 0.2))"
          }}

        >
          {/* Left: Logo + Brand */}
          <div className="flex items-center space-x-3 flex-1">
            <Image src="/logo.png" alt="Logo" width={28} height={28} className="rounded" />
            <span className="text-lg font-semibold tracking-wide text-black">
              AI InterviewAgent
            </span>
          </div>

          {/* Center: Nav Links */}
          <nav className="hidden md:flex space-x-6 text-sm gap-6">
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/about" className={linkClass("/about")}>About</Link>
            <Link href="/pricing" className={linkClass("/pricing")}>Pricing</Link>
            <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
          </nav>

          {/* Right: Login Button */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <NormalButton text="Login" />
          </div>
        </div>
      </section>
    </header>
  )
}
