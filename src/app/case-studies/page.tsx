import { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2, Factory, Truck, Package, TrendingUp, Clock,
  DollarSign, Users, ArrowRight, CheckCircle2, BarChart3,
  MessageCircle, CreditCard, Bot
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | Customer Success Stories - Ai Auto Soft",
  description: "Discover how Indian businesses transformed their operations with Ai Auto Soft's WhatsApp automation. Real results from textile, manufacturing, distribution, and transport industries.",
  keywords: ["case studies", "customer success", "WhatsApp automation results", "ERP automation ROI", "Busy ERP success stories"],
  openGraph: {
    title: "Customer Success Stories | Ai Auto Soft",
    description: "Real results from Indian businesses using WhatsApp automation with Busy ERP.",
    type: "website",
  },
};

const industries = [
  { id: "all", name: "All Industries" },
  { id: "textile", name: "Textile" },
  { id: "manufacturing", name: "Manufacturing" },
  { id: "distribution", name: "Distribution" },
  { id: "transport", name: "Transport" },
];

const caseStudies = [
  {
    id: 1,
    title: "How Krishna Textiles Recovered ₹45 Lakhs in Pending Payments",
    industry: "textile",
    company: "Krishna Textiles",
    location: "Surat, Gujarat",
    employees: "50-100",
    image: "/case-studies/textile-1.jpg",
    summary: "Leading textile manufacturer and distributor with 30+ years in the industry, struggling with high DSO and manual follow-up processes.",
    problem: "Krishna Textiles was spending 6+ hours daily on payment follow-ups. With 200+ active accounts and ₹2.5 Crore in outstanding, their DSO had crossed 90 days. Staff was overwhelmed with customer queries about invoices and balances.",
    solution: "Implemented automated payment reminders at 7, 15, 30, and 45-day intervals. Deployed WhatsApp chatbot for balance inquiries and statement requests. Set up credit limit alerts for the sales team.",
    impact: [
      { metric: "DSO Reduction", value: "45 → 32 Days", icon: Clock },
      { metric: "Payments Recovered", value: "₹45 Lakhs", icon: DollarSign },
      { metric: "Time Saved", value: "25 hrs/week", icon: TrendingUp },
      { metric: "Customer Response Rate", value: "92%", icon: Users },
    ],
    testimonial: {
      quote: "We recovered ₹45 lakhs in just 3 months. The ROI was visible from week one. Our staff now focuses on growth, not chasing payments.",
      author: "Ramesh Agarwal",
      role: "Managing Director"
    }
  },
  {
    id: 2,
    title: "Precision Engineers: 84% Reduction in Customer Support Calls",
    industry: "manufacturing",
    company: "Precision Engineers Pvt Ltd",
    location: "Faridabad, Haryana",
    employees: "100-250",
    image: "/case-studies/manufacturing-1.jpg",
    summary: "Auto components manufacturer supplying to OEMs across India, facing customer service bottleneck during peak production.",
    problem: "With 500+ customers and growing, Precision Engineers received 80+ daily calls about order status, invoices, and stock availability. Their 3-member customer service team was stretched thin, affecting response quality.",
    solution: "Deployed 24/7 WhatsApp ERP chatbot for order tracking, invoice downloads, and stock checks. Integrated real-time production updates with automated notifications for dispatch status.",
    impact: [
      { metric: "Support Call Reduction", value: "84%", icon: Users },
      { metric: "Customer Satisfaction", value: "4.8/5 Rating", icon: TrendingUp },
      { metric: "Query Resolution Time", value: "2 min (avg)", icon: Clock },
      { metric: "Monthly Messages", value: "15,000+", icon: MessageCircle },
    ],
    testimonial: {
      quote: "Our customers prefer WhatsApp over calls now. They get instant answers 24/7. It's like having an extra team member who never sleeps.",
      author: "Sanjay Mehta",
      role: "Operations Director"
    }
  },
  {
    id: 3,
    title: "Sharma Distributors: Scaling from 100 to 500 Retailers with Same Team",
    industry: "distribution",
    company: "Sharma Distributors",
    location: "Jaipur, Rajasthan",
    employees: "25-50",
    image: "/case-studies/distribution-1.jpg",
    summary: "FMCG distributor looking to expand retailer base without proportionally increasing operational costs and staff.",
    problem: "Manual invoice sharing and order confirmations limited Sharma Distributors to serving 100 retailers effectively. Each new retailer meant 2+ hours of daily communication overhead. Scaling seemed impossible without doubling staff.",
    solution: "Automated invoice and challan delivery on WhatsApp. Implemented order confirmation and credit limit notification system. Enabled retailers to self-serve for balance inquiries and pending orders.",
    impact: [
      { metric: "Retailer Network", value: "100 → 500", icon: Users },
      { metric: "Order Processing Time", value: "60% Faster", icon: Clock },
      { metric: "Collection Efficiency", value: "35% Improvement", icon: DollarSign },
      { metric: "Staff Efficiency", value: "3x More Retailers/Staff", icon: TrendingUp },
    ],
    testimonial: {
      quote: "We 5x'd our retailer base without hiring. The automation handles 80% of routine communication. Our team now focuses on building relationships.",
      author: "Vikram Sharma",
      role: "Owner"
    }
  },
  {
    id: 4,
    title: "Singh Transport: Real-Time Shipment Updates Drive Customer Loyalty",
    industry: "transport",
    company: "Singh Transport Corporation",
    location: "Delhi NCR",
    employees: "50-100",
    image: "/case-studies/transport-1.jpg",
    summary: "Fleet operator with 50+ trucks providing pan-India logistics, struggling with customer anxiety around shipment tracking.",
    problem: "Customers constantly called for shipment status updates. Drivers were distracted by phone calls. No systematic way to share LR copies, POD updates, or delay notifications. Customer complaints were rising.",
    solution: "Implemented automated LR and bilty sharing on WhatsApp. Set up real-time dispatch notifications and delivery confirmations. Enabled customers to track shipments via WhatsApp commands.",
    impact: [
      { metric: "Status Inquiry Calls", value: "75% Reduction", icon: Users },
      { metric: "Customer Retention", value: "95%", icon: TrendingUp },
      { metric: "POD Collection Rate", value: "98%", icon: CheckCircle2 },
      { metric: "Repeat Business", value: "40% Increase", icon: DollarSign },
    ],
    testimonial: {
      quote: "Our customers now get updates before they even think to call. It's transformed how we're perceived in the market.",
      author: "Harpreet Singh",
      role: "Managing Partner"
    }
  },
  {
    id: 5,
    title: "Gupta Exports: Automating International Client Communication",
    industry: "manufacturing",
    company: "Gupta Exports",
    location: "Moradabad, UP",
    employees: "100-250",
    image: "/case-studies/manufacturing-2.jpg",
    summary: "Brass handicrafts exporter with clients in 20+ countries, challenged by time zone differences and document sharing.",
    problem: "With clients across US, Europe, and Middle East, Gupta Exports struggled with 24/7 communication expectations. Sharing PI, invoices, and shipping documents at odd hours was exhausting for the small export team.",
    solution: "Deployed WhatsApp automation for document sharing and order status updates. Implemented scheduled message delivery for different time zones. Created self-service portal for document download.",
    impact: [
      { metric: "Client Response Time", value: "< 2 mins (24/7)", icon: Clock },
      { metric: "Team Workload", value: "40% Reduction", icon: Users },
      { metric: "New Client Acquisition", value: "25% Growth", icon: TrendingUp },
      { metric: "Export Volume", value: "₹12 Cr → ₹18 Cr", icon: DollarSign },
    ],
    testimonial: {
      quote: "International clients love the instant document sharing. We close deals faster and our team doesn't work night shifts anymore.",
      author: "Anil Gupta",
      role: "Export Director"
    }
  },
  {
    id: 6,
    title: "Metro Fabrics: Converting COD to Prepaid with WhatsApp Reminders",
    industry: "textile",
    company: "Metro Fabrics",
    location: "Tiruppur, Tamil Nadu",
    employees: "50-100",
    image: "/case-studies/textile-2.jpg",
    summary: "Knitwear manufacturer selling to domestic retailers, dealing with high COD orders affecting cash flow.",
    problem: "60% of Metro Fabrics' orders were COD, causing cash flow issues and delayed payments. Converting retailers to advance payment was challenging with manual communication.",
    solution: "Created automated credit limit notifications and early payment incentive messages. Deployed payment link integration with WhatsApp reminders. Set up automatic order confirmation with payment terms.",
    impact: [
      { metric: "COD to Prepaid", value: "60% → 35%", icon: CreditCard },
      { metric: "Advance Payments", value: "₹30 Lakhs/month", icon: DollarSign },
      { metric: "Payment Defaults", value: "85% Reduction", icon: TrendingUp },
      { metric: "Cash Flow Cycle", value: "45 → 28 Days", icon: Clock },
    ],
    testimonial: {
      quote: "We dramatically improved our cash position. Retailers appreciate the payment reminders – it helps them plan better too.",
      author: "Karthik Rajan",
      role: "Finance Manager"
    }
  },
];

const stats = [
  { value: "500+", label: "Businesses Transformed" },
  { value: "₹150 Cr+", label: "Payments Recovered" },
  { value: "30%", label: "Average DSO Reduction" },
  { value: "84%", label: "Support Call Reduction" },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHero
          badge="Success Stories"
          title="Real Results from"
          highlight="Real Businesses"
          subtitle="See how Indian traders, manufacturers, and distributors transformed their operations with Ai Auto Soft's WhatsApp automation."
        />

        {/* Stats Bar */}
        <section className="py-8 bg-[#0F172A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-[#14B8A6]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Filter Pills */}
        <section className="py-6 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <Badge
                  key={industry.id}
                  variant={industry.id === "all" ? "default" : "outline"}
                  className={`px-4 py-2 rounded-lg cursor-pointer transition-all ${
                    industry.id === "all"
                      ? "bg-[#7C3AED] text-white"
                      : "border-[#7C3AED]/30 text-[#7C3AED] hover:bg-[#7C3AED]/10"
                  }`}
                >
                  {industry.name}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-12 lg:py-20 bg-[#F8FAFC]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8">
              {caseStudies.map((study, index) => (
                <Card
                  key={study.id}
                  id={study.industry}
                  className="border-0 shadow-lg hover:shadow-xl transition-all rounded-xl overflow-hidden"
                >
                  <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    {/* Left - Content */}
                    <div className="p-6 lg:p-8">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-0 rounded-lg px-3 py-1">
                          {study.industry.charAt(0).toUpperCase() + study.industry.slice(1)}
                        </Badge>
                        <span className="text-gray-500 text-sm">{study.location}</span>
                        <span className="text-gray-500 text-sm">• {study.employees} employees</span>
                      </div>

                      <h3
                        className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-4"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {study.title}
                      </h3>

                      {/* Problem-Solution-Impact */}
                      <div className="space-y-4 mb-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                              <span className="text-red-600 text-xs font-bold">!</span>
                            </div>
                            <span className="font-semibold text-[#0F172A] text-sm">Challenge</span>
                          </div>
                          <p className="text-gray-600 text-sm pl-8">{study.problem}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-[#7C3AED]/10 flex items-center justify-center">
                              <CheckCircle2 className="w-3 h-3 text-[#7C3AED]" />
                            </div>
                            <span className="font-semibold text-[#0F172A] text-sm">Solution</span>
                          </div>
                          <p className="text-gray-600 text-sm pl-8">{study.solution}</p>
                        </div>
                      </div>

                      {/* Impact Metrics */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        {study.impact.map((item) => (
                          <div
                            key={item.metric}
                            className="bg-[#14B8A6]/10 rounded-lg p-3 text-center"
                          >
                            <item.icon className="w-4 h-4 text-[#14B8A6] mx-auto mb-1" />
                            <div className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                              {item.value}
                            </div>
                            <div className="text-xs text-gray-500">{item.metric}</div>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="bg-[#0F172A]/5 rounded-lg p-4 mb-6">
                        <p className="text-gray-700 text-sm italic mb-3">"{study.testimonial.quote}"</p>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#7C3AED] flex items-center justify-center text-white text-xs font-bold">
                            {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[#0F172A]">{study.testimonial.author}</div>
                            <div className="text-xs text-gray-500">{study.testimonial.role}, {study.company}</div>
                          </div>
                        </div>
                      </div>

                      <Button
                        className="bg-[#F97316] text-white hover:bg-[#EA580C] font-semibold rounded-lg shadow-lg shadow-orange-500/25"
                        asChild
                      >
                        <a href="/home#contact">
                          Get Similar Results
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>

                    {/* Right - Visual */}
                    <div className={`bg-gradient-to-br ${
                      index % 2 === 0
                        ? "from-[#7C3AED]/10 via-[#14B8A6]/10 to-[#F97316]/10"
                        : "from-[#14B8A6]/10 via-[#7C3AED]/10 to-[#F97316]/10"
                    } p-6 lg:p-8 flex items-center justify-center min-h-[300px]`}>
                      <div className="text-center">
                        <div className="w-24 h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                          {study.industry === "textile" && <Building2 className="w-10 h-10 text-[#7C3AED]" />}
                          {study.industry === "manufacturing" && <Factory className="w-10 h-10 text-[#7C3AED]" />}
                          {study.industry === "distribution" && <Package className="w-10 h-10 text-[#7C3AED]" />}
                          {study.industry === "transport" && <Truck className="w-10 h-10 text-[#7C3AED]" />}
                        </div>
                        <div className="text-2xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          {study.company}
                        </div>
                        <div className="text-gray-600 mb-4">{study.location}</div>
                        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow">
                          <BarChart3 className="w-4 h-4 text-[#14B8A6]" />
                          <span className="text-sm font-medium text-[#0F172A]">Verified Results</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Used */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20 mb-4 rounded-lg px-4 py-1.5">
                Key Features
              </Badge>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#0F172A]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Features That Drive These Results
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-xl text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#F97316]/20 flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-7 h-7 text-[#F97316]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Payment Reminders
                  </h3>
                  <p className="text-gray-600 text-sm">Automated dunning at configurable intervals with smart escalation.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-xl text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#7C3AED]/20 flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-7 h-7 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    24/7 ERP Chatbot
                  </h3>
                  <p className="text-gray-600 text-sm">Customer self-service for balances, orders, and documents.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-xl text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#14B8A6]/20 flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-7 h-7 text-[#14B8A6]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Transport Automation
                  </h3>
                  <p className="text-gray-600 text-sm">Real-time shipment tracking and delivery notifications.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Write Your"
          highlight="Success Story?"
          subtitle="Join 500+ businesses that have transformed their operations with Ai Auto Soft. Get started with a free demo today."
          primaryCta={{ text: "Book Free Demo", href: "/home#contact" }}
          secondaryCta={{ text: "Talk to Expert", href: "https://wa.me/919203704508" }}
        />
      </main>

      <Footer />
    </div>
  );
}
