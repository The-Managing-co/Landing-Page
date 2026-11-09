import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Geist } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Plus Jakarta Sans is the closest open-source geometric twin to Graphik
const graphikStyleFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-graphik',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Managing Co. — IT Services & Proprietary Ventures',
  description: 'Enterprise IT solutions and proprietary digital ventures.',
  icons: {
    icon: 'public/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="font-sans bg-[#08080a] text-neutral-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}