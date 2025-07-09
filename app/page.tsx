"use client"

import { useEffect, useRef } from "react"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Edit3, MessageSquare } from "lucide-react"
import gsap from "gsap"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import InterviewShowcase from "@/components/InterviewShowcase"
import Footer from "@/components/Footer"
import Testimonials from "@/components/Testimonials"
import CtaSection from "@/components/ctaSection"
export default function Page() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.5, // 👈 starts after navbar finishes
      defaults: { ease: "power3.out", duration: 0.6 }
    })

    if (headingRef.current) {
      tl.from(headingRef.current, {
        x: -60,
        opacity: 0,
      })
    }

    if (imageRef.current) {
      tl.from(imageRef.current, {
        x: 60,
        opacity: 0,
      }, "<")
    }

    if (paragraphRef.current) {
      tl.from(paragraphRef.current, {
        x: -60,
        opacity: 0,
      }, "-=0.4") // slight overlap
    }

    if (buttonsRef.current) {
      const buttons = buttonsRef.current.querySelectorAll("a")
      tl.from(buttons, {
        x: -30,
        opacity: 0,
        stagger: 0.15,
      }, "-=0.3")
    }
  }, [])


  return (
    <section className="relative min-h-[80vh] pt-[20vh] overflow-hidden text-white">
      <div
        style={{ transform: "translateX(-50%)" }}
        className="absolute top-[-300px] left-[50%] w-[70%] h-[700px] bg-gradient-radial from-[#e072ff] via-[#8b5cf6] to-transparent opacity-55 blur-[200px] rounded-full pointer-events-none"
      ></div>

      <LayoutWrapper>
        <div className="w-full flex items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 font-medium text-sm">🚀 Launching Soon</span>
          </div>
        </div>
        <section className="w-full">
          <div className="text-center z-10 text-white flex flex-col relative overflow-hidden pt-[10vh] pb-[25vh]">
            <h1 className="text-3xl md:text-5xl font-normal leading-tight text-gray-300">
              Meet <span className="text-white font-light">Nova</span>.
              <br />
              <span className="text-gray-300 font-normal">Your Interview Assistant.</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl md:text-3xl text-gray-200">
              Automate interviewing and recruiting with Alex, your autonomous AI recruiter.               </p>
            <div className="mt-8 flex items-center gap-4 justify-center w-full">
              <Button className="px-8 py-4 rounded-full text-base border bg-white text-black border-white hover:bg-white hover:text-black transition">
                Start Screening
              </Button>
              <Button className="px-8 py-4 rounded-full text-base bg-transparent border border-white text-white hover:bg-white hover:text-black transition">
                Get a Demo
              </Button>
            </div>
            <div className="mt-10">
              <a href="#learn-more" className="text-gray-500 hover:text-white transition">Learn more ↓</a>
            </div>
          </div>
        </section>
        <section className="w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32">
          <InterviewShowcase />
        </section>
        <section className="w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32">
          <div className="">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Everything you need for smarter interviews</h2>
                <p className="max-w-[900px] mx-auto text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">One platform for Recruiters, HR Agencies, and Motivated Candidates.</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="spectacledcoder-gradient-card">
                <Card className="spectacledcoder-content-card group relative overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all hover:shadow-xl">
                  <CardHeader className="pb-2">
                    <div className="mb-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 p-2 w-fit">
                      <CheckCircle className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">AI-Powered Agent</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      Joins the call, asks every question for you, records and logs each answer.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="spectacledcoder-gradient-card">
                <Card className="spectacledcoder-content-card group relative overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all hover:shadow-xl">
                  <CardHeader className="pb-2">
                    <div className="mb-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 p-2 w-fit">
                      <Edit3 className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">Scripted Interviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      Every candidate hears the same set of questions that match your job requirement, so results stay fair.
                    </CardDescription>
                  </CardContent>
                </Card></div>

              <div className="spectacledcoder-gradient-card">
                <Card className="spectacledcoder-content-card group relative overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all hover:shadow-xl">
                  <CardHeader className="pb-2">
                    <div className="mb-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 p-2 w-fit">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">Mock Interview Mode</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      Candidates get instant practice with AI feedback and 15 free minutes that refill daily.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="spectacledcoder-gradient-card">
                <Card className="spectacledcoder-content-card group relative overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all hover:shadow-xl">
                  <CardHeader className="pb-2">
                    <div className="mb-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 p-2 w-fit">
                      <MessageSquare className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">Searchable Transcript</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      A time-stamped transcript and short summary land in your inbox when the call ends.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

       

        <Testimonials />

        <CtaSection />
<Footer />
      </LayoutWrapper>
    </section>
  )
}
