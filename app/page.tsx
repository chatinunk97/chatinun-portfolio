import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    // This is the whole web
    <main
      className="relative bg-black flex 
    justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
    >
      {/* This is the actual body of the web */}
      <div className="max-w-7xl w-full bg-black">
        <Hero />
      </div>
    </main>
  );
}
