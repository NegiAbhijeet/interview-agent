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
import { LayoutWrapper } from "./layout-wrapper";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import NormalButton from "./buttons/normalButton";

const ContactForm = ({ heading, description }) => {
  return (
    <LayoutWrapper>
      <section className="w-full">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
          {/* Left: Contact Info */}
          <div
            className="space-y-8"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
                {heading || "Ready to start screening?"}
              </h2>
              <p className="mt-4 text-gray-900/80 md:text-xl/relaxed">
                {description ||
                  "Send a note or call us. We reply within one business day."}
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-indigo-100 p-2">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">Email Us</h3>
                  <p className="text-gray-900/80">
                    <a
                      href="mailto:contact@auring.in"
                      className="hover:text-indigo-600"
                    >
                      contact@auring.in
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-indigo-100 p-2">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">Call Us</h3>
                  <p className="text-gray-900/80">
                    <a
                      href="tel:+1-555-123-4567"
                      className="hover:text-indigo-600"
                    >
                      +1 (555) 123-4567
                    </a>
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-indigo-100 p-2">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">Visit Us</h3>
                  <p className="text-gray-900/80">
                    414, Vipul Business Park
                    <br />
                    Sector-48, Sohna Road, Gurugram
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-black">
                Connect with us on Twitter, Instagram, and LinkedIn.
              </h3>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://x.com/AinterviewAgent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-gray-100 p-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://www.instagram.com/aiinterviewagents?igsh=ZXQwa2FtdmEwbWZn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-gray-100 p-2 text-gray-700 hover:bg-pink-100 hover:text-pink-600"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/ai-interview-agent/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-gray-100 p-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="w-full"
          >
            <Card className="bg-white text-black shadow-lg">
              <CardHeader>
                <CardTitle className="text-black">
                  Questions about AI-powered screening?
                </CardTitle>
                <CardDescription className="text-gray-900/80">
                  Tell us what you need. A member of our team replies within one business day.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-black mb-1">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="border border-gray-300 px-4 text-black"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-black mb-1">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Work email"
                      className="border border-gray-300 px-4 text-black"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject" className="text-black mb-1">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Pricing, demo, or support"
                      className="border border-gray-300 px-4 text-black"
                    />
                  </div>
                  <div className="grid gap-2 mb-4">
                    <Label htmlFor="message" className="text-black mb-1">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Share the details"
                      className="border border-gray-300 px-4 text-black min-h-[100px]"
                    />
                  </div>
                  <NormalButton text="Send Message" className="w-full" />
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
};

export default ContactForm;
