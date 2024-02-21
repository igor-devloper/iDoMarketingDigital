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
import { AppContext } from "@/context";
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
        <Script id='fb-pixel' strategy='afterInteractive'>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1057158705375107');
            fbq('track', 'PageView');
            
          `}
        </Script>
        <body className={`${poppins.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
          <noscript>
            <img
              height='1'
              width='1'
              style={{display: 'none'}}
              alt={'facebook pixel no script image'}
              src='https://www.facebook.com/tr?id=1057158705375107&ev=PageView&noscript=1'
            />
          </noscript>

          <main className="relative flex min-h-screen flex-col space-y-20">
            <StarsCanvas />
            {children}
            <Footer />
          </main>
          <Toaster />
        </body>
      </html>
    </AppContext>
  );
}
