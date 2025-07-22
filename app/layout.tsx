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
          {/* --- Dotted Grid Background (Furthest Behind) --- */}
          <div className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#000000_1px,transparent_1px)] dark:[background-image:radial-gradient(#ffffff_1px,transparent_1px)] -z-30 opacity-25"></div>

          {/* --- Radial Mask Overlay --- */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] -z-10"></div>

          {children}
        </Parent>
      </body>
    </html>
  );
}
