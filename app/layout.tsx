import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";
import StarsCanvas from "@/components/main/star-background";
import Footer from "@/components/main/Footer";
import { AppContext } from "@/context";

// const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-poppins',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
// })

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
      {/* <Script id='fb-pixel' strategy='afterInteractive'>
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
      </Script> */}
      <html lang="en">
        <body
          className={`bg-[#030014] overflow-y-scroll overflow-x-hidden`}
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
