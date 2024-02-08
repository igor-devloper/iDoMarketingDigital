import Head from "@/components/main/head";
import Projects from "@/components/main/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Head />
        {/* <Skills /> */}
        {/* <Encryption /> */}
        {/* <Projects /> */}
      </div>
    </main>
  );
}
