"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import NormalButton from "./buttons/normalButton"
import gsap from "gsap"

export function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const overlayRef = useRef(null)

  const isActive = (path) => pathname === path

  const linkClass = (path) =>
    `relative transition duration-200 font-medium 
     ${isActive(path)
      ? "text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black"
      : "text-black/60 hover:text-black/80 hover:scale-105"}`

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    if (menuOpen && overlayRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      )
    }
  }, [menuOpen])

  return (
    <>
      {/* Fixed Navbar */}
      <header className="fixed top-3 w-full z-50" data-aos="fade-down" data-aos-duration="600">
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
              <span className="text-lg font-semibold tracking-wide text-black hidden lg:inline">
                AI InterviewAgent
              </span>

            </div>

            {/* Center: Desktop Nav */}
            <nav className="hidden md:flex space-x-6 text-sm gap-6">
              <Link href="/" className={linkClass("/")}>Home</Link>
              <Link href="/about" className={linkClass("/about")}>About</Link>
              <Link href="/pricing" className={linkClass("/pricing")}>Pricing</Link>
              <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
            </nav>

            {/* Right: Login or Hamburger */}
            <div className="flex items-center gap-4 flex-1 justify-end">
              {/* Desktop */}
              <div className="hidden md:block">
                <NormalButton text="Login" />
              </div>

              {/* Hamburger for mobile */}


              <button
                className="md:hidden relative z-[60] w-8 h-6 flex flex-col justify-center items-center space-y-[4px]"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span className={`block h-[2px] w-6 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
                <span className={`block h-[2px] w-6 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-[2px] w-6 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
              </button>

            </div>
          </div>
        </section>
      </header>

      {/* Mobile Overlay outside fixed navbar */}
      {menuOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-10 text-xl font-medium"
        >
          <Link href="/" onClick={toggleMenu} className={linkClass("/")}>Home</Link>
          <Link href="/about" onClick={toggleMenu} className={linkClass("/about")}>About</Link>
          <Link href="/pricing" onClick={toggleMenu} className={linkClass("/pricing")}>Pricing</Link>
          <Link href="/contact" onClick={toggleMenu} className={linkClass("/contact")}>Contact</Link>
          <NormalButton text="Login" />
        </div>
      )}
    </>
  )
}