"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { UnicornStudioBackground } from "@/components/unicorn-background";
import { PageHero } from "@/components/page-hero";

export default function SecurityPage() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative mx-auto flex flex-col px-3">
      {/* UnicornStudio 3D Background */}
      <UnicornStudioBackground />

      {/* Glass Navbar */}
      <Navbar />

      {/* Page Hero Section */}
      <PageHero 
        title="Security"
        description="Your security is our top priority. Learn about the comprehensive security measures we implement to protect your data and transactions."
      />

      {/* Security Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16">
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">Data Protection & Encryption</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              At Paydios, we employ industry-leading security measures to protect your sensitive information. All data is encrypted using AES-256 encryption, the same standard used by banks and government agencies.
            </p>
            <ul className="list-disc list-inside text-white/70 text-lg leading-relaxed ml-4 mt-4 space-y-2">
              <li>End-to-end encryption for all payment transactions</li>
              <li>SSL/TLS encryption for all data transmission</li>
              <li>Tokenization of sensitive payment data</li>
              <li>Regular security audits and penetration testing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">PCI DSS Compliance</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Paydios is fully compliant with the Payment Card Industry Data Security Standard (PCI DSS) Level 1, the highest level of certification. This ensures that your payment data is handled according to the strictest security standards.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-4">
              <h3 className="text-xl font-heading font-semibold text-white mb-3">PCI DSS Requirements We Meet:</h3>
              <ul className="list-disc list-inside text-white/70 text-lg leading-relaxed space-y-2">
                <li>Build and maintain a secure network and systems</li>
                <li>Protect cardholder data</li>
                <li>Maintain a vulnerability management program</li>
                <li>Implement strong access control measures</li>
                <li>Regularly monitor and test networks</li>
                <li>Maintain an information security policy</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">Fraud Prevention</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Our advanced fraud detection system uses machine learning algorithms to identify and prevent fraudulent transactions in real-time, protecting both merchants and customers.
            </p>
            <ul className="list-disc list-inside text-white/70 text-lg leading-relaxed ml-4 mt-4 space-y-2">
              <li>Real-time transaction monitoring</li>
              <li>Machine learning-based fraud detection</li>
              <li>Device fingerprinting and behavioral analysis</li>
              <li>3D Secure authentication support</li>
              <li>Risk scoring for every transaction</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">Infrastructure Security</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Our infrastructure is built with security as the foundation, using enterprise-grade systems and processes to ensure maximum protection.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-heading font-semibold text-white mb-3">Physical Security</h3>
                <ul className="list-disc list-inside text-white/70 text-sm leading-relaxed space-y-1">
                  <li>24/7 monitored data centers</li>
                  <li>Biometric access controls</li>
                  <li>Redundant power and cooling systems</li>
                  <li>Fire suppression systems</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-heading font-semibold text-white mb-3">Network Security</h3>
                <ul className="list-disc list-inside text-white/70 text-sm leading-relaxed space-y-1">
                  <li>DDoS protection and mitigation</li>
                  <li>Intrusion detection systems</li>
                  <li>Network segmentation</li>
                  <li>Regular security updates</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">Access Controls</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              We implement strict access controls to ensure that only authorized personnel can access sensitive systems and data.
            </p>
            <ul className="list-disc list-inside text-white/70 text-lg leading-relaxed ml-4 mt-4 space-y-2">
              <li>Multi-factor authentication for all employees</li>
              <li>Role-based access controls</li>
              <li>Regular access reviews and audits</li>
              <li>Principle of least privilege</li>
              <li>Secure remote access protocols</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">Incident Response</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              In the unlikely event of a security incident, we have a comprehensive incident response plan to quickly identify, contain, and resolve any issues.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-4">
              <h3 className="text-lg font-heading font-semibold text-white mb-3">Our Response Process:</h3>
              <ol className="list-decimal list-inside text-white/70 text-lg leading-relaxed space-y-2">
                <li>Immediate detection and assessment</li>
                <li>Containment of the incident</li>
                <li>Investigation and analysis</li>
                <li>Eradication of threats</li>
                <li>Recovery and restoration</li>
                <li>Post-incident review and improvement</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">Compliance & Certifications</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Paydios maintains compliance with various industry standards and regulations to ensure the highest level of security and trust.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-heading font-semibold text-white mb-3">Certifications</h3>
                <ul className="list-disc list-inside text-white/70 text-sm leading-relaxed space-y-1">
                  <li>PCI DSS Level 1</li>
                  <li>ISO 27001</li>
                  <li>SOC 2 Type II</li>
                  <li>GDPR Compliant</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-heading font-semibold text-white mb-3">Regular Audits</h3>
                <ul className="list-disc list-inside text-white/70 text-sm leading-relaxed space-y-1">
                  <li>Quarterly security assessments</li>
                  <li>Annual penetration testing</li>
                  <li>Continuous vulnerability scanning</li>
                  <li>Third-party security audits</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">Report Security Issues</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              If you discover a security vulnerability or have concerns about our security practices, please report it to us immediately.
            </p>
            <div className="mt-4 text-white/70 text-lg">
              <p>Security Team Email: security@paydios.com</p>
              <p>Emergency Contact: +1 (555) 911-SECURITY</p>
              <p>We appreciate responsible disclosure and will work with security researchers to address any issues.</p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
