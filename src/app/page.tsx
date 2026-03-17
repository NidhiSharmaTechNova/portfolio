import DragComponent from "@/components/about/DragComponent";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import QuoteSelector from "@/components/home/QuoteSelector";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohit Sharma",
  description: "Mohit Sharma full stack developer portfolio",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <QuoteSelector/>
   </div>
  );
}
