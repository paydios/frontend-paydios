"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { UnicornStudioBackground } from "@/components/unicorn-background";
import { PageHero } from "@/components/page-hero";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative mx-auto flex flex-col px-3">
      {/* UnicornStudio 3D Background */}
      <UnicornStudioBackground />

      {/* Glass Navbar */}
      <Navbar />

      {/* Page Hero Section */}
      <PageHero 
        title="Terms of Service"
        description="Please read these terms of service carefully before using our payment gateway services. By using our services, you agree to be bound by these terms."
      />

      {/* Terms Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16">
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              By accessing and using Paydios payment gateway services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">2. Use License</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Permission is granted to temporarily use Paydios services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-white/70 text-lg leading-relaxed ml-4 mt-4 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">3. Payment Processing</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Paydios provides payment processing services subject to the following terms:
            </p>
            <ul className="list-disc list-inside text-white/70 text-lg leading-relaxed ml-4 mt-4 space-y-2">
              <li>All transactions are processed securely using industry-standard encryption</li>
              <li>Transaction fees are clearly disclosed before processing</li>
              <li>Refunds are subject to our refund policy and applicable laws</li>
              <li>We reserve the right to refuse service to any merchant</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">4. Privacy Policy</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">5. Disclaimer</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              The materials on Paydios website are provided on an &apos;as is&apos; basis. Paydios makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">6. Limitations</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              In no event shall Paydios or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Paydios website, even if Paydios or a Paydios authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">7. Accuracy of Materials</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              The materials appearing on Paydios website could include technical, typographical, or photographic errors. Paydios does not warrant that any of the materials on its website are accurate, complete, or current. Paydios may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">8. Links</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Paydios has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Paydios of the site. Use of any such linked website is at the user&apos;s own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">9. Modifications</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Paydios may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">10. Governing Law</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Paydios operates and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>

          <section className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">Contact Information</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 text-white/70 text-lg">
              <p>Email: legal@paydios.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Payment Street, Financial District, NY 10001</p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
