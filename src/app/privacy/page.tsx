"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { UnicornStudioBackground } from "@/components/unicorn-background";
import { PageHero } from "@/components/page-hero";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative mx-auto flex flex-col px-3">
      {/* UnicornStudio 3D Background */}
      <UnicornStudioBackground />

      {/* Glass Navbar */}
      <Navbar />

      {/* Page Hero Section */}
      <PageHero 
        title="Privacy Policy"
        description="Your privacy is important to us. Learn how we collect, use, and protect your personal information when you use our payment gateway services."
      />

      {/* Privacy Content - You can add your privacy policy content here */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16">
        <div className="prose prose-invert max-w-none">
          <p className="text-white/70 text-lg leading-relaxed">
            Privacy policy content will be implemented here...
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
