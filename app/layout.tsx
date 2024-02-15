import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";
import StarsCanvas from "@/components/main/star-background";
import Footer from "@/components/main/Footer";
import { useEffect } from "react";
import Script from "next/script";

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

// function FacebookPixel() {
//   React.useEffect(() => {
//     import("react-facebook-pixel")
//       .then((x) => x.default)
//       .then((ReactPixel) => {
//         ReactPixel.init('pixel ID here');
//         ReactPixel.pageView();

//         Router.events.on("routeChangeComplete", () => {
//           ReactPixel.pageView();
//         });
//       });
//   });
//   return null;
// }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // useEffect(() => {
  //   fbq.pageview()

  //   const handleRouteChange = () => {
  //     fbq.pageview()
  //   }

  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }, [router.events]
  // })
  return (
    <html lang="en">
    {/* useEffect(() => {
        import('react-facebook-pixel')
          .then((x) => x.default)
          .then((ReactPixel) => {
            ReactPixel.init('XXXXXXXXXXXXXXXXXXXXX') // facebookPixelId
            ReactPixel.pageView()

            router.events.on('routeChangeComplete', () => {
              ReactPixel.pageView()
            })
          })
      }, [router.events]) */}
      <body
        className={`${poppins.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >

        <main className="relative flex min-h-screen flex-col space-y-20">
          <StarsCanvas />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
