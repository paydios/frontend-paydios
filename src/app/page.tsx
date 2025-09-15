"use client";
import { Navbar } from "@/components/navbar";
import { UnicornStudioBackground } from "@/components/unicorn-background";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import AnimatedCard from "@/components/magicui/animated-card";
import ScrollStackPage from "./scroll-stack";

export default function Home() {
  return (
    <div className="min-h-screen text-white relative overflow-x-hidden mx-auto flex flex-col px-3">
      {/* UnicornStudio 3D Background */}
      <UnicornStudioBackground />

      {/* Glass Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Paydios Connect */}
      <AnimatedCard />

      {/* Industry Showcase - ScrollStack */}
     
 
    <ScrollStackPage></ScrollStackPage>

      {/* Footer */}
      <Footer />
    </div>
  );
}
