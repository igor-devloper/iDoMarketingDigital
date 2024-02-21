"use client"

import Hero from '../components/main/hero';
import { Head } from 'next/document';
import { FacebookPixel } from '@/components/faceboo-pixel';






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