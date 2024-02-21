"use client"

import Script from 'next/script';
import Hero from '../components/main/hero';
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react';
import { Head } from 'next/document';
// import * as fbq from "@/lib/fbpixel";


export function FacebookPixel() {
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID!);
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}



export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <FacebookPixel />

      <main className="h-full w-full scroll-mx-0">
        <div className="flex flex-col gap-20">
          <Hero />
        </div>
      </main>
    </>
  );
}