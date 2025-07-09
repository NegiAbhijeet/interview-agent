"use client"

import { useEffect, useRef } from "react"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Clock, Edit3, MessageSquare } from "lucide-react"
import Link from "next/link"
import gsap from "gsap"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
    <section className="relative min-h-screen pt-[15vh] overflow-hidden text-white">
      <div className="absolute top-[-300px] left-[40%] w-[700px] h-[700px] bg-gradient-radial from-[#e072ff] via-[#8b5cf6] to-transparent opacity-25 blur-[200px] rounded-full pointer-events-none"></div>

      <LayoutWrapper>
        <section className="w-full min-h-[80vh] flex items-center relative overflow-hidden">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center items-center lg:items-start space-y-4">
              <div className="space-y-2">
                <h1
                  ref={headingRef}
                  className="text-xl font-manrope text-center md:text-left font-bold tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                >
                  Hire faster and acg interviews with AI
                </h1>

                <p
                  ref={paragraphRef}
                  className="max-w-[600px] text-sm text-white/70 md:text-base lg:text-sm xl:text-base"
                >
                  AI Interview Agent runs first-round screens for HR teams and gives candidates free daily practice. Recruiters get 15 free minutes on your first live screen. Candidates enjoy 15 free minutes of mock interviews that reset each day.
                </p>
              </div>

              <div className="flex flex-col gap-4 min-[400px]:flex-row" ref={buttonsRef}>
                <Link href="/login">
                  <Button size="lg" className="group bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    Start Screening
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50 hover:text-purple-600 text-black">
                    Practice free
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center" ref={imageRef}>
              <div className="relative w-full max-w-[550px]">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 opacity-20 blur-xl"></div>
                <img
                  src="/image1.png"
                  alt="AI Interview Illustration"
                  width={550}
                  height={550}
                  className="relative rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Everything you need for smarter interviews</h2>
                <p className="max-w-[900px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">One platform for Recruiters, HR Agencies, and Motivated Candidates.</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="group relative overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all hover:shadow-xl">
                <CardHeader className="pb-2">
                  <div className="mb-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 p-2 w-fit">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">AI-Powered Agent</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Joins the call, asks every question for you, records and logs each answer.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all hover:shadow-xl">
                <CardHeader className="pb-2">
                  <div className="mb-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 p-2 w-fit">
                    <Edit3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">Scripted Interviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Every candidate hears the same set of questions that match your job requirement, so results stay fair.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all hover:shadow-xl">
                <CardHeader className="pb-2">
                  <div className="mb-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 p-2 w-fit">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">Mock Interview Mode</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Candidates get instant practice with AI feedback and 15 free minutes that refill daily.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all hover:shadow-xl">
                <CardHeader className="pb-2">
                  <div className="mb-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 p-2 w-fit">
                    <MessageSquare className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">Searchable Transcript</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    A time-stamped transcript and short summary land in your inbox when the call ends.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>


          </div>
        </section>
        {/* Testimonial Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-600">Trusted by leading HR teams</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">See how AI Interview Agent improves hiring and preparation</h2>
                <p className="max-w-[900px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Real stories from Recruiters, Agencies, and Candidates.</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-2">
              <Card className="group relative overflow-hidden rounded-2xl border-0 credit-card shadow-lg transition-all hover:shadow-xl">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 min-w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    <div>
                      <CardTitle className="text-lg font-bold">Priya Sharma</CardTitle>
                      <CardDescription className="line-clamp-2">Talent Acquisition Lead, NovaTech</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    “Our phone screens dropped from thirty minutes to five. We spend the extra time closing offers.”
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden rounded-2xl border-0 credit-card shadow-lg transition-all hover:shadow-xl">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 min-w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    <div>
                      <CardTitle className="text-lg font-bold">Miguel Torres</CardTitle>
                      <CardDescription className="line-clamp-2">Recruitment Operations Manager, StellarWorks</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    “The scorecards arrive in minutes and bias is gone. Hiring managers trust the data.”
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden rounded-2xl border-0 credit-card shadow-lg transition-all hover:shadow-xl">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 min-w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    <div>
                      <CardTitle className="text-lg font-bold">Alex Garcia</CardTitle>
                      <CardDescription className="line-clamp-2">Software Engineer Candidate</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    “15 free practice minutes a day let me fine-tune my answers. I walked into the real interview ready and confident.”
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden rounded-2xl border-0 credit-card shadow-lg transition-all hover:shadow-xl">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 min-w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    <div>
                      <CardTitle className="text-lg font-bold">Neha Verma</CardTitle>
                      <CardDescription className="line-clamp-2">HR Consultant, BrightHire Solutions</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    “Scheduling AI-led screenings is seamless. It saves us time and delivers consistent results.”
                  </p>
                </CardContent>
              </Card>
            </div>

          </div>
        </section>
      </LayoutWrapper>
    </section>
  )
}
