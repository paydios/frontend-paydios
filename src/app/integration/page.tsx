"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { UnicornStudioBackground } from "@/components/unicorn-background";
import { PageHero } from "@/components/page-hero";
import { MagicCard } from "@/components/magicui/magic-card";

export default function IntegrationPage() {
  const integrations = [
    {
      title: "WordPress",
      description: "Seamlessly integrate Paydios payment gateway with your WordPress website. Easy setup with our dedicated plugin.",
      icon: "📝",
      features: ["Plugin Installation", "Custom Forms", "WooCommerce Support", "Easy Configuration"],
      status: "Available"
    },
    {
      title: "Shopify",
      description: "Accept payments on your Shopify store with our secure payment gateway integration. Boost your conversion rates.",
      icon: "🛒",
      features: ["Store Integration", "Checkout Optimization", "Multi-Currency", "Analytics Dashboard"],
      status: "Available"
    },
    {
      title: "React",
      description: "Build powerful payment experiences with our React SDK. Perfect for modern web applications and SPAs.",
      icon: "⚛️",
      features: ["React SDK", "Hooks Support", "TypeScript Ready", "Component Library"],
      status: "Available"
    },
    {
      title: "Next.js",
      description: "Server-side rendering support with our Next.js integration. Optimized for performance and SEO.",
      icon: "▲",
      features: ["SSR Support", "API Routes", "Middleware", "Performance Optimized"],
      status: "Available"
    },
    {
      title: "Laravel",
      description: "PHP developers can easily integrate Paydios with Laravel using our comprehensive package and documentation.",
      icon: "🐘",
      features: ["Laravel Package", "Eloquent Models", "Artisan Commands", "Blade Components"],
      status: "Available"
    },
    {
      title: "PHP",
      description: "Simple PHP integration for any website or application. Lightweight and easy to implement.",
      icon: "💻",
      features: ["Simple API", "cURL Support", "Webhook Handling", "Documentation"],
      status: "Available"
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden relative mx-auto flex flex-col px-3">
      {/* UnicornStudio 3D Background */}
      <UnicornStudioBackground />

      {/* Glass Navbar */}
      <Navbar />

      {/* Page Hero Section */}
      <PageHero 
        title="Integration"
        description="Connect Paydios payment gateway with your favorite platforms and frameworks. Easy setup, powerful features, and seamless integration."
      />

      {/* Integration Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration) => (
            <MagicCard
              key={integration.title}
              className="h-full border border-white/10"
              gradientColor="rgba(212, 255, 0, 0.1)"
              gradientOpacity={0.1}
              gradientFrom="#D4FF00"
              gradientTo="#B8E600"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{integration.icon}</div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-white mb-1">
                      {integration.title}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {integration.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 font-body text-sm leading-relaxed mb-6 flex-grow">
                  {integration.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-semibold text-white mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {integration.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-xs text-white/60">
                        <div className="w-1 h-1 rounded-full bg-[#D4FF00] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <button className="w-full bg-[#D4FF00] text-black font-heading font-semibold py-2 px-4 rounded-lg hover:bg-[#B8E600] transition-colors duration-200">
                    Get Started
                  </button>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>

        {/* Additional Integration Info */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-semibold text-white mb-6">
              Need a Custom Integration?
            </h2>
            <p className="text-white/70 font-body text-lg leading-relaxed mb-8">
              Don&apos;t see your platform? Our team can create custom integrations for any technology stack. 
              We support REST APIs, webhooks, and provide comprehensive documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#D4FF00] text-black font-heading font-semibold py-3 px-8 rounded-xl hover:bg-[#B8E600] transition-colors duration-200">
                Contact Our Team
              </button>
              <button className="border border-white/20 text-white font-heading font-semibold py-3 px-8 rounded-xl hover:bg-white/10 transition-colors duration-200">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
