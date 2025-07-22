import type { Metadata } from 'next';
import './globals.css';

import AOSInit from '@/components/AOSInit';
import Parent from "./Parent";

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
      <body className="bg-white pt-[10vh] relative text-white font-sans">
        <AOSInit />
        <Parent>
          {children}
        </Parent>
      </body>
    </html>
  );
}
