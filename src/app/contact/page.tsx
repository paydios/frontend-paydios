"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { UnicornStudioBackground } from "@/components/unicorn-background";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";

export default function ContactPage() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative mx-auto flex flex-col px-3">
      {/* UnicornStudio 3D Background */}
      <UnicornStudioBackground />

      {/* Glass Navbar */}
      <Navbar />

      {/* Page Hero Section */}
      <PageHero 
        title="Contact Us"
        description="Ready to start your next project? Our team is here to help you succeed. Reach out and let's discuss how we can bring your ideas to life."
      />

      {/* Contact Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ContactInfo />
          
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
