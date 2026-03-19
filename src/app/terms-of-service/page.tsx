import { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/sections/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  Settings,
  Users,
  CreditCard,
  AlertTriangle,
  XCircle,
  Scale,
  FileSignature,
  Calendar,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Ai Auto Soft",
  description:
    "Read our terms of service for Ai Auto Soft&apos;s Busy ERP WhatsApp automation platform. Understand your rights and responsibilities when using our services.",
  keywords: [
    "Ai Auto Soft terms",
    "terms of service",
    "service agreement",
    "user responsibilities",
    "payment terms",
    "subscription terms",
  ],
  openGraph: {
    title: "Terms of Service | Ai Auto Soft",
    description:
      "Read our terms of service for Ai Auto Soft&apos;s Busy ERP WhatsApp automation platform. Understand your rights and responsibilities.",
    type: "website",
  },
};

const tableOfContents = [
  { title: "1. Service Description", href: "#service-description" },
  { title: "2. Account Registration", href: "#account-registration" },
  { title: "3. Acceptable Use", href: "#acceptable-use" },
  { title: "4. User Responsibilities", href: "#user-responsibilities" },
  { title: "5. Subscription & Payment", href: "#payment-terms" },
  { title: "6. Intellectual Property", href: "#intellectual-property" },
  { title: "7. Limitation of Liability", href: "#liability" },
  { title: "8. Termination", href: "#termination" },
  { title: "9. Dispute Resolution", href: "#dispute-resolution" },
  { title: "10. Changes to Terms", href: "#changes" },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        badge="Legal"
        title="Terms of "
        highlight="Service"
        subtitle="Please read these terms carefully before using Ai Auto Soft&apos;s WhatsApp automation services for Busy ERP."
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
                        <FileSignature className="w-6 h-6 text-[#7C3AED]" />
                      </div>
                      <div>
                        <h2
                          className="text-xl font-bold text-[#0F172A] mb-2"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          Agreement to Terms
                        </h2>
                        <p className="text-gray-600">
                          These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and
                          Ai Auto Soft (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) concerning your access to and use of our
                          WhatsApp automation services for Busy ERP integration. By accessing or using the Service, you agree
                          to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Section 1: Service Description */}
                <section id="service-description" className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#14B8A6]/10 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-[#14B8A6]" />
                    </div>
                    <h2
                      className="text-2xl font-bold text-[#0F172A]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      1. Service Description
                    </h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      Ai Auto Soft provides a cloud-based software platform that enables businesses to automate WhatsApp
                      communications integrated with Busy ERP accounting software. Our services include:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="rounded-xl border border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <CheckCircle className="w-5 h-5 text-[#14B8A6]" />
                            <h4 className="font-semibold text-[#0F172A]">Payment Reminders</h4>
                          </div>
                          <p className="text-sm">Automated payment collection and reminder campaigns</p>
                        </CardContent>
                      </Card>
                      <Card className="rounded-xl border border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <CheckCircle className="w-5 h-5 text-[#14B8A6]" />
                            <h4 className="font-semibold text-[#0F172A]">ERP Chatbot</h4>
                          </div>
                          <p className="text-sm">AI-powered customer self-service on WhatsApp</p>
                        </CardContent>
                      </Card>
                      <Card className="rounded-xl border border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <CheckCircle className="w-5 h-5 text-[#14B8A6]" />
                            <h4 className="font-semibold text-[#0F172A]">Credit Management</h4>
                          </div>
                          <p className="text-sm">Proactive credit control and customer notifications</p>
                        </CardContent>
                      </Card>
                      <Card className="rounded-xl border border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <CheckCircle className="w-5 h-5 text-[#14B8A6]" />
                            <h4 className="font-semibold text-[#0F172A]">Transport Automation</h4>
                          </div>
                          <p className="text-sm">Shipping updates and logistics coordination</p>
                        </CardContent>
                      </Card>
                    </div>

                    <p className="mt-4">
                      The Service is provided subject to these Terms and our Privacy Policy. We reserve the right to modify,
                      suspend, or discontinue any aspect of the Service at any time.
                    </p>
                  </div>
                </section>

                {/* Section 2: Account Registration */}
                <section id="account-registration" className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#F97316]/10 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#F97316]" />
                    </div>
                    <h2
                      className="text-2xl font-bold text-[#0F172A]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      2. Account Registration
                    </h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Account Requirements</h3>
                        <ul className="list-disc list-inside space-y-2">
                          <li>You must be at least 18 years old to create an account</li>
                          <li>You must provide accurate, current, and complete information during registration</li>
                          <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                          <li>You are responsible for all activities that occur under your account</li>
                          <li>You must notify us immediately of any unauthorized use of your account</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Business Verification</h3>
                        <p className="text-gray-600">
                          To use WhatsApp Business API features, you must complete Meta&apos;s business verification process.
                          We may require additional documentation to verify your business identity and comply with
                          WhatsApp Business policies.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Section 3: Acceptable Use */}
                <section id="acceptable-use" className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#7C3AED]/10 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-[#7C3AED]" />
                    </div>
                    <h2
                      className="text-2xl font-bold text-[#0F172A]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      3. Acceptable Use Policy
                    </h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>You agree NOT to use the Service to:</p>
                    <Card className="rounded-xl border-l-4 border-l-red-500 border border-gray-200 bg-red-50/30">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-3">Prohibited Activities</h3>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Send spam, unsolicited messages, or messages to individuals who have not consented</li>
                          <li>Violate any applicable laws or regulations (including anti-spam laws)</li>
                          <li>Infringe upon the intellectual property rights of others</li>
                          <li>Distribute malware, viruses, or harmful code</li>
                          <li>Engage in fraudulent or deceptive practices</li>
                          <li>Harass, abuse, or harm other users or third parties</li>
                          <li>Attempt to gain unauthorized access to our systems</li>
                          <li>Resell or redistribute the Service without authorization</li>
                          <li>Use the Service for any illegal or unauthorized purpose</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <p className="mt-4">
                      We reserve the right to suspend or terminate accounts that violate this Acceptable Use Policy.
                    </p>
                  </div>
                </section>

                {/* Section 4: User Responsibilities */}
                <section id="user-responsibilities" className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#14B8A6]/10 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#14B8A6]" />
                    </div>
                    <h2
                      className="text-2xl font-bold text-[#0F172A]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      4. User Responsibilities
                    </h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>As a user of Ai Auto Soft, you are responsible for:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Data Accuracy:</strong> Ensuring the accuracy of data synced from your Busy ERP system</li>
                      <li><strong>Consent Management:</strong> Obtaining proper consent from message recipients before sending communications</li>
                      <li><strong>Compliance:</strong> Complying with all applicable laws, including data protection and anti-spam regulations</li>
                      <li><strong>Template Compliance:</strong> Ensuring your WhatsApp templates comply with Meta&apos;s commerce policies</li>
                      <li><strong>Content:</strong> Ensuring all content sent through the Service is appropriate and lawful</li>
                      <li><strong>Backup:</strong> Maintaining backups of your data outside our platform</li>
                    </ul>

                    <Card className="rounded-xl border border-gray-200 mt-6">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-3">WhatsApp Business Policy Compliance</h3>
                        <p className="text-gray-600">
                          You must comply with all WhatsApp Business Terms of Service and Commerce Policies. Violations may
                          result in suspension of your WhatsApp Business API access by Meta, for which we bear no responsibility.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Section 5: Payment Terms */}
                <section id="payment-terms" className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#F97316]/10 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-[#F97316]" />
                    </div>
                    <h2
                      className="text-2xl font-bold text-[#0F172A]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      5. Subscription & Payment Terms
                    </h2>
                  </div>

                  <div className="space-y-6 text-gray-600">
                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Billing & Payments</h3>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Subscriptions are billed monthly or annually in advance</li>
                          <li>Payment is due at the beginning of each billing period</li>
                          <li>We accept major credit cards, UPI, and bank transfers</li>
                          <li>Prices are exclusive of applicable taxes unless otherwise stated</li>
                          <li>We may change pricing with 30 days&apos; notice</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">WhatsApp API Charges</h3>
                        <p className="mb-4">
                          In addition to subscription fees, WhatsApp Business API message charges apply as per Meta&apos;s pricing:
                        </p>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Message Type</th>
                                <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Price (India)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-gray-100">
                                <td className="py-3 px-4">Authentication</td>
                                <td className="py-3 px-4">₹0.13 per message</td>
                              </tr>
                              <tr className="border-b border-gray-100">
                                <td className="py-3 px-4">Marketing</td>
                                <td className="py-3 px-4">₹0.76 per message</td>
                              </tr>
                              <tr className="border-b border-gray-100">
                                <td className="py-3 px-4">Utility</td>
                                <td className="py-3 px-4">₹0.13 per message</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4">Service (User-initiated)</td>
                                <td className="py-3 px-4">Free (first 24 hours)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                          *Prices are subject to change by Meta. Current as of January 2025.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Refund Policy</h3>
                        <p className="text-gray-600">
                          Subscription fees are non-refundable except as required by law. You may cancel your subscription
                          at any time, and your access will continue until the end of your current billing period.
                          No prorated refunds are provided for partial months.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Section 6: Intellectual Property */}
                <section id="intellectual-property" className="mb-12">
                  <h2
                    className="text-2xl font-bold text-[#0F172A] mb-6"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    6. Intellectual Property
                  </h2>

                  <div className="space-y-4 text-gray-600">
                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-3">Our Intellectual Property</h3>
                        <p className="text-gray-600">
                          The Service and its original content, features, and functionality are owned by Ai Auto Soft and are
                          protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-3">Your Data</h3>
                        <p className="text-gray-600">
                          You retain ownership of all data you upload or sync to the Service, including ERP data, customer
                          information, and message templates. We do not claim ownership of your data.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-3">License to Use</h3>
                        <p className="text-gray-600">
                          We grant you a limited, non-exclusive, non-transferable license to use the Service for your
                          business purposes in accordance with these Terms. This license does not include the right to
                          modify, reverse-engineer, or create derivative works from the Service.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Section 7: Limitation of Liability */}
                <section id="liability" className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                    </div>
                    <h2
                      className="text-2xl font-bold text-[#0F172A]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      7. Limitation of Liability
                    </h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <Card className="rounded-xl border-l-4 border-l-[#F97316] border border-gray-200 bg-orange-50/30">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-3">Disclaimer of Warranties</h3>
                        <p className="text-gray-600">
                          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER
                          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
                          FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-3">Limitation of Damages</h3>
                        <p className="text-gray-600 mb-4">
                          IN NO EVENT SHALL AI AUTO SOFT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                          OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES,
                          REGARDLESS OF THE CAUSE OF ACTION OR THE THEORY OF LIABILITY.
                        </p>
                        <p className="text-gray-600">
                          Our total liability for any claims arising from the Service shall not exceed the amount you paid
                          for the Service in the twelve (12) months preceding the claim.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-3">Third-Party Services</h3>
                        <p className="text-gray-600">
                          We are not responsible for the actions, content, or policies of third-party services integrated
                          with our platform, including Meta/WhatsApp and Busy ERP. Your use of these third-party services
                          is subject to their respective terms and policies.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Section 8: Termination */}
                <section id="termination" className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <XCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <h2
                      className="text-2xl font-bold text-[#0F172A]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      8. Termination
                    </h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Termination by You</h3>
                        <p className="mb-4">You may terminate your account at any time by:</p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Contacting our support team</li>
                          <li>Using the account settings in your dashboard</li>
                          <li>Providing written notice to legal@aiautosoft.com</li>
                        </ul>
                        <p className="mt-4">
                          Upon termination, your access to the Service will cease at the end of your current billing period.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Termination by Us</h3>
                        <p className="mb-4">We may suspend or terminate your account if:</p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>You breach these Terms or our Acceptable Use Policy</li>
                          <li>Your account is inactive for more than 12 months</li>
                          <li>We receive a valid legal request requiring termination</li>
                          <li>We discontinue the Service (with 30 days&apos; notice)</li>
                          <li>Payment is overdue and not resolved within 15 days</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-3">Effect of Termination</h3>
                        <p className="text-gray-600">
                          Upon termination: (a) your right to use the Service will immediately cease; (b) we may delete
                          your account and associated data after 30 days; (c) outstanding charges remain due and payable;
                          (d) sections that by their nature should survive termination shall continue in effect.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Section 9: Dispute Resolution */}
                <section id="dispute-resolution" className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#7C3AED]/10 rounded-lg flex items-center justify-center">
                      <Scale className="w-5 h-5 text-[#7C3AED]" />
                    </div>
                    <h2
                      className="text-2xl font-bold text-[#0F172A]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      9. Dispute Resolution
                    </h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-3">Governing Law</h3>
                        <p className="text-gray-600">
                          These Terms shall be governed by and construed in accordance with the laws of India, without
                          regard to its conflict of law provisions. Any disputes shall be subject to the exclusive
                          jurisdiction of the courts in Noida, Uttar Pradesh.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="rounded-xl border border-gray-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-3">Arbitration</h3>
                        <p className="text-gray-600">
                          Any dispute arising out of or relating to these Terms shall first be attempted to be resolved
                          through good-faith negotiation. If negotiation fails, the dispute shall be resolved through
                          binding arbitration in accordance with the Arbitration and Conciliation Act, 1996.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Section 10: Changes to Terms */}
                <section id="changes" className="mb-12">
                  <h2
                    className="text-2xl font-bold text-[#0F172A] mb-6"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    10. Changes to Terms
                  </h2>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      We reserve the right to modify these Terms at any time. We will provide notice of material changes
                      by posting the updated Terms on our website and updating the &quot;Last Updated&quot; date.
                    </p>
                    <p>
                      Your continued use of the Service after any changes to the Terms constitutes acceptance of those changes.
                      If you do not agree to the modified Terms, you should discontinue your use of the Service.
                    </p>
                    <p>
                      For material changes that adversely affect your rights, we will provide at least 30 days&apos; notice
                      via email to your registered email address.
                    </p>
                  </div>
                </section>

                {/* Additional Terms */}
                <Card className="rounded-xl border border-gray-200 mb-8">
                  <CardContent className="p-6">
                    <h3
                      className="text-lg font-semibold text-[#0F172A] mb-4"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Additional Terms
                    </h3>
                    <div className="space-y-4 text-gray-600 text-sm">
                      <p><strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and Ai Auto Soft.</p>
                      <p><strong>Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>
                      <p><strong>No Waiver:</strong> Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
                      <p><strong>Assignment:</strong> You may not assign or transfer these Terms without our prior written consent.</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="rounded-xl border-0 bg-gradient-to-br from-[#7C3AED]/5 to-[#14B8A6]/5">
                  <CardContent className="p-8">
                    <h3
                      className="text-xl font-bold text-[#0F172A] mb-4"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Questions About These Terms?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Email:</strong> <a href="mailto:legal@aiautosoft.com" className="text-[#7C3AED] hover:underline">legal@aiautosoft.com</a></p>
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
