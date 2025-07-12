import React from 'react'
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import OutlineButtonWrapper from './OutlineButtonWrapper'
import { LayoutWrapper } from './layout-wrapper'

const ContactForm = ({ heading, description }) => {
    return (
        <LayoutWrapper>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
                                    {heading || "Ready to start screening?"}
                                </h2>
                                <p className="mt-4 text-gray-300 md:text-xl/relaxed">
                                    {description || "Send a note or call us. We reply within one business day."}
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-gradient-to-r from-indigo-600/20 to-teal-500/20 p-2">
                                        <Mail className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Email Us</h3>
                                        <p className="text-gray-300">
                                            <a href="mailto:support@collabai.com" className="hover:text-indigo-600">
                                                support@intervueai.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-gradient-to-r from-indigo-600/20 to-teal-500/20 p-2">
                                        <Phone className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Call Us</h3>
                                        <p className="text-gray-300">
                                            <a href="tel:+1-555-123-4567" className="hover:text-indigo-600">
                                                +1 (555) 123-4567
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-gradient-to-r from-indigo-600/20 to-teal-500/20 p-2">
                                        <MapPin className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Visit Us</h3>
                                        <p className="text-gray-300">
                                            123 Innovation Way
                                            <br />
                                            San Francisco, CA 94107
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Connect with us on Twitter, Instagram, and LinkedIn.</h3>
                                <div className="flex space-x-4">
                                    <Link
                                        href="#"
                                        className="rounded-full bg-gray-100 p-2 text-gray-300 hover:bg-indigo-100 hover:text-indigo-600"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5"
                                        >
                                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="rounded-full bg-gray-100 p-2 text-gray-300 hover:bg-indigo-100 hover:text-indigo-600"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5"
                                        >
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="rounded-full bg-gray-100 p-2 text-gray-300 hover:bg-indigo-100 hover:text-indigo-600"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5"
                                        >
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                            <rect width="4" height="12" x="2" y="9" />
                                            <circle cx="4" cy="4" r="2" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='spectacledcoder-gradient-card w-full'>
                            <Card className="spectacledcoder-content-card group relative overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all hover:shadow-xl">
                                <CardHeader>
                                    <CardTitle className='text-white'>Questions about AI-powered screening?</CardTitle>
                                    <CardDescription className='text-gray-300'>Tell us what you need. A member of our team replies within one business day.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="grid gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="name" className='text-white'>Name</Label>
                                            <Input id="name" placeholder="Your name" className="bg-[#050d1a] rounded-full px-4 border-gray-600 text-white" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="email" className='text-white'>Email</Label>
                                            <Input id="email" type="email" placeholder="Work email" className="bg-[#050d1a] px-4 rounded-full border-gray-600 text-white" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="subject" className='text-white'>Subject</Label>
                                            <Input id="subject" placeholder="Pricing, demo, or support" className="bg-[#050d1a] px-4 rounded-full border-gray-600 text-white" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="message" className='text-white'>Message</Label>
                                            <Textarea id="message" placeholder="Share the details" className="bg-[#050d1a] px-4 border-gray-600 rounded-3xl text-white min-h-[100px]" />
                                        </div>
                                        <OutlineButtonWrapper>
                                            Send Message
                                        </OutlineButtonWrapper>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutWrapper>
    )
}

export default ContactForm
