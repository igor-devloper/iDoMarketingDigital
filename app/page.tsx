"use client"

import Script from 'next/script';
import Hero from '../components/main/hero';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
// import * as fbq from "@/lib/fbpixel";


export default function Home() {
  return (
    <main className="h-full w-full scroll-mx-0"> 
      <div className="flex flex-col gap-20">
        <Hero />
      </div>
    </main>
  );
}