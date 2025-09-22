import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 mt-20">
      <div className="container mx-auto lg:px-3 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/paydios.svg"
                alt="Paydios Logo"
                width={32}
                height={32}
                className="mr-3"
              />
              <span
                className="text-2xl font-body font-semibold tracking-tight text-[#D4FF00]"
                style={{ letterSpacing: '-0.02em' }}
              >
                paydios
              </span>
            </div>
            <p className="text-white/70 font-body text-sm leading-relaxed mb-4">
              Secure payment solutions designed for modern businesses. Accept payments globally with our advanced payment gateway.
            </p>
            <div className="relative">
              <Button
                asChild
                className="inline-flex items-center gap-2 rounded-xl bg-[#D4FF00] text-black font-heading font-semibold hover:text-black hover:bg-transparent border border-[#D4FF00] transition-all duration-300"
              >
                <Link href="/contact">
                  Need a Payment Gateway?
   
                </Link>
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/payment-processing" className="text-white/70 hover:text-white font-body text-sm transition-colors">
                  Payment Processing
                </Link>
              </li>
              <li>
                <Link href="/products/subscriptions" className="text-white/70 hover:text-white font-body text-sm transition-colors">
                  Subscriptions
                </Link>
              </li>
              <li>
                <Link href="/products/invoicing" className="text-white/70 hover:text-white font-body text-sm transition-colors">
                  Invoicing
                </Link>
              </li>
              <li>
                <Link href="/products/payouts" className="text-white/70 hover:text-white font-body text-sm transition-colors">
                  Payouts
                </Link>
              </li>
              <li>
                <Link href="/products/fraud-protection" className="text-white/70 hover:text-white font-body text-sm transition-colors">
                  Fraud Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions/ecommerce" className="text-white/70 hover:text-white font-body text-sm transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/solutions/saas" className="text-white/70 hover:text-white font-body text-sm transition-colors">
                  SaaS
                </Link>
              </li>
              <li>
                <Link href="/solutions/platforms" className="text-white/70 hover:text-white font-body text-sm transition-colors">
                  Platforms
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/70 hover:text-white font-body text-sm transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white font-body text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white font-body text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-white/70 hover:text-white font-body text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-white/70 hover:text-white font-body text-sm transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="text-center">
            <p className="text-white/50 font-body text-sm">
              &copy; 2025 Paydios. Built for modern businesses.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}