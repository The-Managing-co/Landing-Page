import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Antimetal — Handle everything that happens after you deploy',
  description: 'AI that investigates, fixes, and prevents issues by connecting your cloud platforms, observability tools, and code.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(geistSans.variable, geistMono.variable, "dark")}>
      <body className="font-sans antialiased bg-[#020617] text-neutral-100 selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}