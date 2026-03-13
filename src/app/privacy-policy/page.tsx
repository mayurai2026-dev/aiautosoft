import { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/sections/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Database,
  Eye,
  Share2,
  UserCheck,
  Globe,
  Lock,
  FileText,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Ai Auto Soft",
  description:
    "Learn how Ai Auto Soft collects, uses, and protects your data. Our privacy policy covers data collection, usage, sharing with Meta, and GDPR/CCPA compliance.",
  keywords: [
    "Ai Auto Soft privacy policy",
    "data protection",
    "GDPR compliance",
    "CCPA compliance",
    "WhatsApp data privacy",
    "ERP data security",
  ],
  openGraph: {
    title: "Privacy Policy | Ai Auto Soft",
    description:
      "Learn how Ai Auto Soft collects, uses, and protects your data. Comprehensive privacy policy for our Busy ERP WhatsApp automation platform.",
    type: "website",
  },
};

const tableOfContents = [
  { title: "1. Information We Collect", href: "#data-collection" },
  { title: "2. How We Use Your Information", href: "#data-usage" },
  { title: "3. Information Sharing & Disclosure", href: "#data-sharing" },
  { title: "4. Meta Platform Data", href: "#meta-data" },
  { title: "5. Data Security", href: "#data-security" },
  { title: "6. Your Rights", href: "#user-rights" },
  { title: "7. GDPR Compliance", href: "#gdpr" },
  { title: "8. CCPA Compliance", href: "#ccpa" },
  { title: "9. Cookies & Tracking", href: "#cookies" },
  { title: "10. Changes to This Policy", href: "#changes" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        badge="Legal"
        title="Privacy "
        highlight="Policy"
        subtitle="Your privacy is important to us. This policy explains how Ai Auto Soft collects, uses, and protects your data."
      />

      {/* Last Updated */}
      <section className="py-6 bg-[#F8FAFC] border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Last Updated: January 15, 2025</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="rounded-xl shadow-lg border-0 sticky top-24">
                <CardContent className="p-0">
                  <div className="p-4 border-b border-gray-100">
                    <h3
                      className="font-semibold text-[#0F172A]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Table of Contents
                    </h3>
                  </div>
                  <nav className="py-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-[#7C3AED] hover:bg-[#7C3AED]/5 transition-colors"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <Card className="rounded-xl border border-gray-200 mb-8">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center shrink-0">
                        <FileText className="w-6 h-6 text-[#7C3AED]" />
                      </div>
                      <div>
                        <h2
                          className="text-xl font-bold text-[#0F172A] mb-2"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          Introduction
                        </h2>
                        <p className="text-gray-600">
                          Ai Auto Soft (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                          This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                          when you use our WhatsApp automation services for Busy ERP integration.
                          Please read this policy carefully. If you do not agree with the terms of this policy, please do not access the service.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Section 1: Data Collection */}
                <section id="data-collection" className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#14B8A6]/10 rounded-lg flex items-center justify-center">
                      <Database className="w-5 h-5 text-[#14B8A6]" />
                    </div>
                    <h2
                      className="text-2xl font-bold text-[#0F172A]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      1. Information We Collect
                    </h2>
                  </div>

                  <div className="space-y-6 text-gray-600">
                    <p>We collect information from you when you register for our service, use our platform, or interact with our support team. This includes:</p>

                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Account Information</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Name, email address, and phone number</li>
                          <li>Company name and business details</li>
                          <li>Billing and payment information</li>
                          <li>Login credentials and authentication data</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Business Data</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Busy ERP data synced through our platform (contacts, invoices, transactions)</li>
                          <li>WhatsApp message templates and communication history</li>
                          <li>Campaign data and automation workflows</li>
                          <li>Customer contact information processed through our service</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Technical Data</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>IP address, device information, and browser type</li>
                          <li>Usage statistics and analytics data</li>
                          <li>Log files and error reports</li>
                          <li>Cookies and similar tracking technologies</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Section 2: Data Usage */}
                <section id="data-usage" className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#F97316]/10 rounded-lg flex items-center justify-center">
                      <Eye className="w-5 h-5 text-[#F97316]" />
                    </div>
                    <h2
                      className="text-2xl font-bold text-[#0F172A]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      2. How We Use Your Information
                    </h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Provide, maintain, and improve our WhatsApp automation services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send technical notices, updates, and support messages</li>
                      <li>Respond to your comments, questions, and requests</li>
                      <li>Monitor and analyze trends, usage, and activities</li>
                      <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
                      <li>Personalize and improve our services and marketing efforts</li>
                      <li>Comply with legal obligations and protect our rights</li>
                    </ul>
                  </div>
                </section>

                {/* Section 3: Data Sharing */}
                <section id="data-sharing" className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#7C3AED]/10 rounded-lg flex items-center justify-center">
                      <Share2 className="w-5 h-5 text-[#7C3AED]" />
                    </div>
                    <h2
                      className="text-2xl font-bold text-[#0F172A]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      3. Information Sharing & Disclosure
                    </h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>We may share your information in the following circumstances:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Service Providers:</strong> We share data with third-party vendors who perform services on our behalf (hosting, analytics, payment processing)</li>
                      <li><strong>Business Partners:</strong> With partners who help us provide our services (Meta/WhatsApp, Busy ERP)</li>
                      <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                      <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                      <li><strong>With Your Consent:</strong> When you authorize us to share your information</li>
                    </ul>
                    <p className="mt-4">
                      We do not sell your personal information to third parties for their marketing purposes.
                    </p>
                  </div>
                </section>

                {/* Section 4: Meta Data */}
                <section id="meta-data" className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <h2
                      className="text-2xl font-bold text-[#0F172A]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      4. Meta Platform Data
                    </h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <Card className="rounded-xl border-l-4 border-l-[#25D366] border border-gray-200 bg-green-50/30">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-3">WhatsApp Business API Integration</h3>
                        <p className="mb-4">
                          Our service integrates with the WhatsApp Business API, which is operated by Meta Platforms, Inc.
                          When you use our WhatsApp automation features, certain data is shared with Meta:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Message content and metadata sent through WhatsApp</li>
                          <li>Phone numbers of message recipients</li>
                          <li>Template message usage and approval status</li>
                          <li>Business verification information</li>
                        </ul>
                        <p className="mt-4 text-sm">
                          Meta&apos;s use of this data is governed by Meta&apos;s Privacy Policy and the WhatsApp Business Terms of Service.
                          We encourage you to review Meta&apos;s privacy practices at <a href="https://www.facebook.com/privacy/policy" className="text-[#7C3AED] hover:underline">facebook.com/privacy/policy</a>.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Section 5: Data Security */}
                <section id="data-security" className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#14B8A6]/10 rounded-lg flex items-center justify-center">
                      <Lock className="w-5 h-5 text-[#14B8A6]" />
                    </div>
                    <h2
                      className="text-2xl font-bold text-[#0F172A]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      5. Data Security
                    </h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      We implement appropriate technical and organizational measures to protect your data:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Encryption of data in transit (TLS/SSL) and at rest</li>
                      <li>Regular security assessments and vulnerability testing</li>
                      <li>Access controls and authentication mechanisms</li>
                      <li>Secure data storage with industry-leading cloud providers</li>
                      <li>Regular backups and disaster recovery procedures</li>
                      <li>Employee training on data protection practices</li>
                    </ul>
                    <p className="mt-4">
                      However, no method of transmission over the Internet or electronic storage is 100% secure.
                      While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
                    </p>
                  </div>
                </section>

                {/* Section 6: User Rights */}
                <section id="user-rights" className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#F97316]/10 rounded-lg flex items-center justify-center">
                      <UserCheck className="w-5 h-5 text-[#F97316]" />
                    </div>
                    <h2
                      className="text-2xl font-bold text-[#0F172A]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      6. Your Rights
                    </h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>You have the following rights regarding your personal information:</p>
                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-[#0F172A] mb-2">Access</h4>
                            <p className="text-sm">Request a copy of the personal information we hold about you.</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#0F172A] mb-2">Rectification</h4>
                            <p className="text-sm">Request correction of inaccurate or incomplete data.</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#0F172A] mb-2">Erasure</h4>
                            <p className="text-sm">Request deletion of your personal information in certain circumstances.</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#0F172A] mb-2">Portability</h4>
                            <p className="text-sm">Receive your data in a structured, machine-readable format.</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#0F172A] mb-2">Objection</h4>
                            <p className="text-sm">Object to processing of your personal information.</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#0F172A] mb-2">Restriction</h4>
                            <p className="text-sm">Request restriction of processing in certain circumstances.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <p>
                      To exercise any of these rights, please contact us at{" "}
                      <a href="mailto:privacy@aiautosoft.com" className="text-[#7C3AED] hover:underline">
                        privacy@aiautosoft.com
                      </a>
                    </p>
                  </div>
                </section>

                {/* Section 7: GDPR */}
                <section id="gdpr" className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#7C3AED]/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-[#7C3AED]" />
                    </div>
                    <h2
                      className="text-2xl font-bold text-[#0F172A]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      7. GDPR Compliance
                    </h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      If you are located in the European Economic Area (EEA), the General Data Protection Regulation (GDPR) provides you with certain rights:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>We process your data based on contractual necessity, legitimate interests, or your consent</li>
                      <li>You have the right to lodge a complaint with a supervisory authority</li>
                      <li>We will not transfer your data outside the EEA without appropriate safeguards</li>
                      <li>We have appointed a Data Protection Officer who can be contacted at dpo@aiautosoft.com</li>
                    </ul>
                  </div>
                </section>

                {/* Section 8: CCPA */}
                <section id="ccpa" className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#14B8A6]/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-[#14B8A6]" />
                    </div>
                    <h2
                      className="text-2xl font-bold text-[#0F172A]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      8. CCPA Compliance
                    </h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      Under the California Consumer Privacy Act (CCPA), California residents have the right to:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Know what personal information is collected, used, and shared</li>
                      <li>Delete their personal information (subject to certain exceptions)</li>
                      <li>Opt-out of the sale of their personal information</li>
                      <li>Non-discrimination for exercising their CCPA rights</li>
                    </ul>
                    <p className="mt-4">
                      We do not sell personal information as defined under the CCPA. To submit a CCPA request, please contact us at{" "}
                      <a href="mailto:privacy@aiautosoft.com" className="text-[#7C3AED] hover:underline">
                        privacy@aiautosoft.com
                      </a>
                    </p>
                  </div>
                </section>

                {/* Section 9: Cookies */}
                <section id="cookies" className="mb-12">
                  <h2
                    className="text-2xl font-bold text-[#0F172A] mb-6"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    9. Cookies & Tracking Technologies
                  </h2>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      We use cookies and similar tracking technologies to collect and track information about your browsing activities. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                      <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                      <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for advertising purposes</li>
                    </ul>
                  </div>
                </section>

                {/* Section 10: Changes */}
                <section id="changes" className="mb-12">
                  <h2
                    className="text-2xl font-bold text-[#0F172A] mb-6"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    10. Changes to This Policy
                  </h2>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date at the top.
                    </p>
                    <p>
                      We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                  </div>
                </section>

                {/* Contact Information */}
                <Card className="rounded-xl border-0 bg-gradient-to-br from-[#7C3AED]/5 to-[#14B8A6]/5">
                  <CardContent className="p-8">
                    <h3
                      className="text-xl font-bold text-[#0F172A] mb-4"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Contact Us
                    </h3>
                    <p className="text-gray-600 mb-4">
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Email:</strong> <a href="mailto:privacy@aiautosoft.com" className="text-[#7C3AED] hover:underline">privacy@aiautosoft.com</a></p>
                      <p><strong>Phone:</strong> <a href="tel:+919203704508" className="text-[#7C3AED] hover:underline">+91 92037 04508</a></p>
                      <p><strong>Address:</strong> 123 Business Park, Sector 62, Noida, UP 201301, India</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
