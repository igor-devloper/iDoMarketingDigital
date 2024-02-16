import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";
import StarsCanvas from "@/components/main/star-background";
import Footer from "@/components/main/Footer";
import { useEffect } from "react";
// import { FacebookPixel } from "../components/facebook-pixel";
import Script from "next/script";
import { Head } from "next/document";
import { AppContext } from "@/contexts";
// import { FB_PIXEL_ID } from "../lib/fbpixel";

const inter = Inter({ subsets: ["latin"] });
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
        {/* <Head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head> */}
        <body
          className={`${poppins.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        >

          <main className="relative flex min-h-screen flex-col space-y-20">
            <StarsCanvas />
            {children}
            <Footer />
          </main>
          <Toaster />
          {/* <FacebookPixel/> */}
        </body>
      </html>
    </AppContext>
  );
}
