import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <main className="relative flex min-h-screen flex-col">
          <StarsCanvas />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
