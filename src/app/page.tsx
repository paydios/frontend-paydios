"use client";
import { Navbar } from "@/components/navbar";
import { UnicornStudioBackground } from "@/components/unicorn-background";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import AnimatedCard from "@/components/magicui/animated-card";
import CTA from "@/components/sections/cta/default";
import { GlobeDemo } from "@/components/GlobeDemo";
import Pricing from "@/components/Pricing";
import PaymentSolutionSection from "@/components/PaymentSolutionSection";

export default function Home() {
  return (
    <div className="min-h-screen text-white relative overflow-x-hidden mx-auto flex flex-col">
      {/* UnicornStudio 3D Background */}
      <UnicornStudioBackground />

      {/* Glass Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Paydios Connect */}
      <AnimatedCard />

      <PaymentSolutionSection></PaymentSolutionSection>
        
       {/* Pricing */}
      <Pricing className="py-30 px-2 lg:px-0"></Pricing>
     
     {/* Globe section */}
    
      <GlobeDemo></GlobeDemo>
  
      {/* Bootom CTA */}
      <div className="px-2 lg:px-0">
        <CTA></CTA>
      </div>
      <div className="px-2 lg:px-0">
        {/* Footer */}
      <Footer />
      </div>
    </div>
  );
}
