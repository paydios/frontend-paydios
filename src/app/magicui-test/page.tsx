"use client";

import AnimatedCard from "@/components/magicui/animated-card";

export default function MagicUITest() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">MagicUI Animated Card Demo</h1>
      <div className="max-w-4xl mx-auto">
        <AnimatedCard />
      </div>
    </div>
  );
}
