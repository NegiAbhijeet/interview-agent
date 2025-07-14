import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import OutlineButtonWrapper from "./OutlineButtonWrapper";
import { LayoutWrapper } from "./layout-wrapper";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactForm = ({ heading, description }) => {
  return (
    <LayoutWrapper>
      <section className="w-full">
        <div className="">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div
              className="space-y-8"
              data-aos="fade-right"
              data-aos-delay="200" // staggered delay
              data-aos-duration="600"
            >
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
                  {heading || "Ready to start screening?"}
                </h2>
                <p className="mt-4 text-gray-300 md:text-xl/relaxed">
                  {description ||
                    "Send a note or call us. We reply within one business day."}
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
                      <a
                        href="mailto:support@collabai.com"
                        className="hover:text-indigo-600"
                      >
                        contact@auring.in
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
                      <a
                        href="tel:+1-555-123-4567"
                        className="hover:text-indigo-600"
                      >
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
                      414,Vipul Business Park
                      <br />
                      Sector-48,Sohan Road, Gurugram
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Connect with us on Twitter, Instagram, and LinkedIn.
                </h3>
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://x.com/AinterviewAgent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-700 p-2 text-gray-300 hover:bg-indigo-100 hover:text-indigo-600"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/aiinterviewagents?igsh=ZXQwa2FtdmEwbWZn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-700 p-2 text-gray-300 hover:bg-indigo-100 hover:text-pink-600"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ai-interview-agent/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BJqRT4fS%2BROSIU6vuVd6WCQ%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-700 p-2 text-gray-300 hover:bg-indigo-100 hover:text-indigo-600"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="400" // staggered delay
              data-aos-duration="600"
              className="spectacledcoder-gradient-card w-full"
            >
              <Card className="spectacledcoder-content-card relative overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white">
                    Questions about AI-powered screening?
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Tell us what you need. A member of our team replies within
                    one business day.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name" className="text-white mb-1">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-[#050d1a] rounded-full px-4 border-gray-600 text-white"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-white mb-1">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Work email"
                        className="bg-[#050d1a] px-4 rounded-full border-gray-600 text-white"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="subject" className="text-white mb-1">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Pricing, demo, or support"
                        className="bg-[#050d1a] px-4 rounded-full border-gray-600 text-white"
                      />
                    </div>
                    <div className="grid gap-2 mb-4">
                      <Label htmlFor="message" className="text-white mb-1">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Share the details"
                        className="bg-[#050d1a] px-4 border-gray-600 rounded-3xl text-white min-h-[100px]"
                      />
                    </div>
                    <OutlineButtonWrapper>Send Message</OutlineButtonWrapper>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
};

export default ContactForm;
