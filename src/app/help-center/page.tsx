import { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  Rocket,
  Link2,
  Wrench,
  MessageSquare,
  FileText,
  ChevronRight,
  Phone,
  Mail,
  Clock,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help Center & Knowledge Base | Ai Auto Soft",
  description:
    "Find answers to your questions about Busy ERP WhatsApp automation. Browse our knowledge base for setup guides, troubleshooting tips, and best practices.",
  keywords: [
    "Ai Auto Soft help",
    "Busy ERP support",
    "WhatsApp automation guide",
    "ERP integration help",
    "knowledge base",
    "troubleshooting",
  ],
  openGraph: {
    title: "Help Center & Knowledge Base | Ai Auto Soft",
    description:
      "Find answers to your questions about Busy ERP WhatsApp automation. Browse our comprehensive knowledge base.",
    type: "website",
  },
};

const categories = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "New to Ai Auto Soft? Start here with setup guides and tutorials.",
    articles: 12,
    color: "text-[#7C3AED]",
    bgColor: "bg-[#7C3AED]/10",
    href: "#getting-started",
  },
  {
    icon: Link2,
    title: "Busy ERP Integration",
    description: "Connect and sync your Busy ERP data with WhatsApp automation.",
    articles: 18,
    color: "text-[#14B8A6]",
    bgColor: "bg-[#14B8A6]/10",
    href: "#erp-integration",
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    description: "Solve common issues and get your automation running smoothly.",
    articles: 24,
    color: "text-[#F97316]",
    bgColor: "bg-[#F97316]/10",
    href: "#troubleshooting",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Templates",
    description: "Create and manage WhatsApp message templates for your business.",
    articles: 15,
    color: "text-[#7C3AED]",
    bgColor: "bg-[#7C3AED]/10",
    href: "#templates",
  },
];

const featuredArticles = [
  {
    title: "Quick Start Guide: Setting Up Your First Payment Reminder",
    category: "Getting Started",
    readTime: "5 min read",
    href: "#article-1",
  },
  {
    title: "How to Connect Busy ERP with WhatsApp Business API",
    category: "Busy ERP Integration",
    readTime: "8 min read",
    href: "#article-2",
  },
  {
    title: "Understanding WhatsApp Template Message Categories",
    category: "WhatsApp Templates",
    readTime: "6 min read",
    href: "#article-3",
  },
  {
    title: "Troubleshooting: Common Sync Errors and Solutions",
    category: "Troubleshooting",
    readTime: "4 min read",
    href: "#article-4",
  },
  {
    title: "Setting Up Automated Shipping Notifications",
    category: "Getting Started",
    readTime: "7 min read",
    href: "#article-5",
  },
  {
    title: "Best Practices for Payment Recovery Messages",
    category: "WhatsApp Templates",
    readTime: "5 min read",
    href: "#article-6",
  },
];

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        badge="Help Center"
        title="How can we "
        highlight="help you?"
        subtitle="Find answers to your questions about Busy ERP WhatsApp automation. Browse our knowledge base or contact our support team."
      >
        {/* Search Bar */}
        <div className="w-full max-w-2xl mx-auto mt-8 px-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for articles, guides, and tutorials..."
              className="w-full pl-12 pr-4 py-6 text-lg rounded-xl border-2 border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED]/20 shadow-lg"
            />
            <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-6 rounded-lg shadow-lg shadow-orange-500/25">
              Search
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-4 text-sm text-gray-500">
            <span>Popular:</span>
            {["Payment reminders", "Busy ERP setup", "WhatsApp templates", "API integration"].map((term) => (
              <button
                key={term}
                className="text-[#7C3AED] hover:text-[#6D28D9] font-medium"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </PageHero>

      {/* Categories Section */}
      <section className="py-12 lg:py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Browse by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the help you need organized by topic. Each category contains detailed guides and tutorials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.title} href={category.href}>
                <Card className="h-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-14 h-14 ${category.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <category.icon className={`w-7 h-7 ${category.color}`} />
                    </div>
                    <CardTitle
                      className="text-xl font-semibold text-[#0F172A] group-hover:text-[#7C3AED] transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{category.articles} articles</span>
                      <ChevronRight className="w-5 h-5 text-[#7C3AED] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Featured Articles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Most popular guides and tutorials to help you get the most out of Ai Auto Soft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredArticles.map((article, index) => (
              <Link key={index} href={article.href}>
                <Card className="h-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="w-4 h-4 text-[#14B8A6]" />
                      <span className="text-sm text-[#14B8A6] font-medium">{article.category}</span>
                    </div>
                    <h3
                      className="text-lg font-semibold text-[#0F172A] mb-3 group-hover:text-[#7C3AED] transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white font-semibold px-8 py-3 rounded-lg transition-all"
              asChild
            >
              <Link href="#all-articles">
                View All Articles
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-12 lg:py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Need More Help?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our support team is available to help you with any questions or issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-[#7C3AED]" />
                </div>
                <h3
                  className="text-lg font-semibold text-[#0F172A] mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Call Support
                </h3>
                <p className="text-gray-600 text-sm mb-4">Mon-Sat, 9 AM - 6 PM IST</p>
                <a
                  href="tel:+919203704508"
                  className="text-[#7C3AED] font-semibold hover:text-[#6D28D9]"
                >
                  +91 92037 04508
                </a>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-[#14B8A6]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-[#14B8A6]" />
                </div>
                <h3
                  className="text-lg font-semibold text-[#0F172A] mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Email Us
                </h3>
                <p className="text-gray-600 text-sm mb-4">24-48 hour response time</p>
                <a
                  href="mailto:aiautosoft26@gmail.com"
                  className="text-[#14B8A6] font-semibold hover:text-[#0D9488]"
                >
                  aiautosoft26@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-[#F97316]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-7 h-7 text-[#F97316]" />
                </div>
                <h3
                  className="text-lg font-semibold text-[#0F172A] mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  WhatsApp Support
                </h3>
                <p className="text-gray-600 text-sm mb-4">Quick responses via WhatsApp</p>
                <a
                  href="https://wa.me/919203704508"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F97316] font-semibold hover:text-[#EA580C]"
                >
                  Chat Now
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Automate Your "
        highlight="ERP Workflows?"
        subtitle="Join 500+ Indian businesses already using Ai Auto Soft to streamline their operations."
        primaryCta={{
          text: "Book Free Demo",
          href: "/home#contact",
        }}
        secondaryCta={{
          text: "Talk to Expert",
          href: "https://wa.me/919203704508",
        }}
      />

      <Footer />
    </div>
  );
}
