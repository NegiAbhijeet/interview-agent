"use client"

import Link from "next/link"
import Image from "next/image"
import FilledButtonWrapper from "./filledButtonWrapper"
import OutlineLinkWrapper from "./OurlineLinkWrapper"
export function Navbar() {
  return (
    <header className="fixed top-6 w-full z-50" data-aos="fade-down"
      data-aos-duration="600">
      <section className="w-[90%] max-w-screen-xl mx-auto">
        <div
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
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <Link href="/about" className="hover:text-white/80 transition">About</Link>
            <Link href="/pricing" className="hover:text-white/80 transition">Pricing</Link>
            <Link href="contact" className="hover:text-white/80 transition">Contact</Link>
          </nav>

          {/* Right: Login Button */}
          <div className="flex items-center gap-4">

            <FilledButtonWrapper>
              Dashboard
            </FilledButtonWrapper>
            <OutlineLinkWrapper link={"https://calendly.com/saurabhdocsightai-com/30min"} >
              Get a demo
            </OutlineLinkWrapper>

          </div>
        </div>
      </section>
    </header>
  )
}
