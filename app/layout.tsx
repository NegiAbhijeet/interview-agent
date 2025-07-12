import type { Metadata } from 'next';
import './globals.css';
import { Plus_Jakarta_Sans, DM_Serif_Display, Manrope } from 'next/font/google';

import AOSInit from '@/components/AOSInit'; // <-- import it here
import Parent from "./Parent"
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI Interview Agent',
  description: 'Created with v0',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#050d1a] relative text-white ${plusJakarta.variable} ${dmSerif.variable} ${manrope.variable}`}>
        <AOSInit /> {/* ✅ Initialize AOS here */}
        <div
          style={{ transform: 'translateX(-50%)' }}
          className="absolute top-[-300px] left-[50%] w-[70%] h-[700px] bg-gradient-radial from-[#e072ff] via-[#8b5cf6] to-transparent opacity-55 blur-[200px] rounded-full pointer-events-none"
        />
        <Parent>
        {children}
        </Parent>
      </body>
    </html>
  );
}
