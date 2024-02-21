"use client"

import Hero from '../components/main/hero';
import { Head } from 'next/document';






export default function Home() {
  return (
    <>
      <main className="h-full w-full scroll-mx-0">
        <div className="flex flex-col gap-20">
          <Hero />
        </div>
      </main>
    </>
  );
}