"use client"

import { useEffect, useRef } from "react"
import { LayoutWrapper } from "@/components/layout-wrapper"
import FilledButtonWrapper from "@/components/filledButtonWrapper"
import { CheckCircle, Clock, Edit3, MessageSquare } from "lucide-react"
import gsap from "gsap"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import InterviewShowcase from "@/components/InterviewShowcase"
import Footer from "@/components/Footer"
import Testimonials from "@/components/Testimonials"
import CtaSection from "@/components/ctaSection"
import LaunchToast from "@/components/LaunchToast"
import OutlineButtonWrapper from "@/components/OutlineButtonWrapper"
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
    <section className="relative overflow-hidden text-white">
      <LaunchToast />
      <div
        style={{ transform: "translateX(-50%)" }}
        className="absolute top-[-300px] left-[50%] w-[70%] h-[700px] bg-gradient-radial from-[#e072ff] via-[#8b5cf6] to-transparent opacity-55 blur-[200px] rounded-full pointer-events-none"
      ></div>

      <LayoutWrapper>
        <div className="text-center z-10 text-white flex flex-col relative overflow-hidden pt-[10%]">
          <h1 className="text-4xl md:text-6xl font-normal leading-tight text-gray-400">
            Meet <span className="text-white font-light">Nova</span>.
            <br />
            <span className="text-gray-400 font-normal">Your Interview Assistant.</span>
          </h1>
          <div className="mt-6 max-w-3xl mx-auto text-2xl font-light text-gray-200">
            Hire faster and ace your interview
          </div>
          <div className="mt-8 flex items-center gap-4 justify-center w-full">


            <FilledButtonWrapper>
              Start Screening
            </FilledButtonWrapper>
            <OutlineButtonWrapper>
              Get Demo
            </OutlineButtonWrapper>

          </div>
          <div className="mt-10">
            <a href="#learn-more" className="text-gray-500 hover:text-white transition">Learn more ↓</a>
          </div>
        </div>
      </LayoutWrapper>

      <LayoutWrapper>
        <InterviewShowcase />
      </LayoutWrapper>

      <LayoutWrapper id="learn-more">
        <div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Everything you need for smarter interviews</h2>
              <p className="max-w-[900px] mx-auto text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">One platform for Recruiters, HR Agencies, and Motivated Candidates.</p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-4 relative">
            <div style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "-1" }} className="opacity-70 blur-2xl absolute w-[70%] h-[100%] bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 rounded-3xl pointer-events-none " />

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
      </LayoutWrapper>


      <LayoutWrapper>
        <Testimonials />
      </LayoutWrapper>
      <LayoutWrapper>
        <CtaSection />
      </LayoutWrapper>
      <Footer />
    </section >
  )
}
