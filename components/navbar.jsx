"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { LayoutWrapper } from "./layout-wrapper"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export function Navbar() {
  const navbarRef = useRef(null)

  useEffect(() => {
    if (navbarRef.current) {
      gsap.from(navbarRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
    }
  }, [])

  return (
    <header className="fixed top-6 w-full z-50">
      <LayoutWrapper>
        <div
          ref={navbarRef}
          className="px-6 py-4 rounded-full backdrop-blur-lg bg-white/10 shadow-lg flex items-center justify-between"
        >
          {/* Left: Logo + Brand */}
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Logo" width={28} height={28} className="rounded" />
            <span className="text-lg font-bold tracking-wide text-white">
              AI InterviewAgent
            </span>
          </div>

          {/* Center: Nav Links */}
          <nav className="hidden md:flex space-x-6 text-sm font-semibold gap-6">
            <Link href="#" className="hover:text-white/80 transition">Home</Link>
            <Link href="#" className="hover:text-white/80 transition">Pricing</Link>
            <Link href="#" className="hover:text-white/80 transition">About</Link>
            <Link href="#" className="hover:text-white/80 transition">Contact</Link>
          </nav>

          {/* Right: Login Button */}
          <div className="flex items-center gap-4">
            <Button className="bg-transparent rounded-full  bg-white text-black px-8 py-4 hover:bg-white/40 font-light hover:text-white transition text-base">
              Dashboard
            </Button>
            <Button className="bg-transparent border border-white text-white px-8 py-4 hover:bg-white/40 rounded-full font-light hover:text-white transition text-base">
              Get a Demo
            </Button>
          </div>
        </div>
      </LayoutWrapper>
    </header>
  )
}
