import type { Metadata } from 'next'
import './globals.css'
import { Plus_Jakarta_Sans, DM_Serif_Display, Manrope } from "next/font/google"
import { Navbar } from '@/components/navbar'
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
})

// For stylish headings
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
  display: "swap",
})
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI Interview Agent',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#050d1a] relative text-white ${plusJakarta.variable} ${dmSerif.variable} ${manrope.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
