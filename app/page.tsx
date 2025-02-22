import { ProjectCards } from "@/components/ProjectCards";
import Hero from "@/components/Hero";
import { FloatingNavBar } from "@/components/FloatingNav";

export default function Home() {
  return (
    // This is the whole web
    <main
      className="relative bg-black-100 flex 
    justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
    >
      {/* This is the actual body of the web */}
      <div className="max-w-5xl w-full">
   
        <Hero />
        <ProjectCards />
        <FloatingNavBar />
      </div>
    </main>
  );
}
