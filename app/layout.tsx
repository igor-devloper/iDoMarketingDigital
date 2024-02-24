import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import StarsCanvas from "@/components/main/star-background";
import Footer from "@/components/main/Footer";
import { AppContext } from "@/context";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "iDo - Markenting Digital",
  description: "Marketing Digital",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppContext>
      <html lang="en">
        <body
          className={`${poppins.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        >
          <main className="relative flex min-h-screen flex-col space-y-20">
            <StarsCanvas />
            {children}
            <Analytics />
            <Footer />
          </main>
          <Toaster />
        </body>
      </html>
    </AppContext>
  );
}
