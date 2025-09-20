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

      {/* Privacy Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16">
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">Information We Collect</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              We collect information you provide directly to us, such as when you create an account, make a payment, or contact us for support.
            </p>
            <ul className="list-disc list-inside text-white/70 text-lg leading-relaxed ml-4 mt-4 space-y-2">
              <li>Account information (name, email, phone number)</li>
              <li>Payment information (billing address, payment method details)</li>
              <li>Transaction data (amount, date, merchant information)</li>
              <li>Communication records (support tickets, emails)</li>
              <li>Device and usage information (IP address, browser type, device identifiers)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">How We Use Your Information</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              We use the information we collect to provide, maintain, and improve our services, process payments, and communicate with you.
            </p>
            <ul className="list-disc list-inside text-white/70 text-lg leading-relaxed ml-4 mt-4 space-y-2">
              <li>Process and complete payment transactions</li>
              <li>Verify your identity and prevent fraud</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send important service updates and notifications</li>
              <li>Improve our services and develop new features</li>
              <li>Comply with legal obligations and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">Information Sharing</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-white/70 text-lg leading-relaxed ml-4 mt-4 space-y-2">
              <li>With your explicit consent</li>
              <li>To complete payment transactions (with banks, card networks)</li>
              <li>With service providers who assist in our operations</li>
              <li>To comply with legal requirements or court orders</li>
              <li>To protect our rights, property, or safety</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">Data Security</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-4">
              <h3 className="text-lg font-heading font-semibold text-white mb-3">Security Measures Include:</h3>
              <ul className="list-disc list-inside text-white/70 text-sm leading-relaxed space-y-1">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and assessments</li>
                <li>Access controls and authentication systems</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">Your Rights and Choices</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              You have certain rights regarding your personal information, including the right to access, update, or delete your data.
            </p>
            <ul className="list-disc list-inside text-white/70 text-lg leading-relaxed ml-4 mt-4 space-y-2">
              <li>Access and review your personal information</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability (receive a copy of your data)</li>
              <li>Object to certain processing activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">Cookies and Tracking</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-heading font-semibold text-white mb-3">Essential Cookies</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Required for basic website functionality, security, and payment processing.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-heading font-semibold text-white mb-3">Analytics Cookies</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Help us understand how visitors interact with our website to improve user experience.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">Data Retention</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              We retain your personal information only as long as necessary to fulfill the purposes outlined in this privacy policy, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
            <ul className="list-disc list-inside text-white/70 text-lg leading-relaxed ml-4 mt-4 space-y-2">
              <li>Account information: Until account closure + 7 years</li>
              <li>Transaction records: 7 years (regulatory requirement)</li>
              <li>Support communications: 3 years</li>
              <li>Marketing data: Until you opt-out</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">International Transfers</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during international transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">Children&apos;s Privacy</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">Changes to This Policy</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="mt-4 text-white/70 text-lg">
              <p>Email: privacy@paydios.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Payment Street, Financial District, NY 10001</p>
              <p className="mt-4 text-sm text-white/50">Last Updated: December 2024</p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
