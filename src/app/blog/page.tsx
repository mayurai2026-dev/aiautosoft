import { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Clock, User, ArrowRight, Search, BookOpen, FileText,
  MessageCircle, Shield, BarChart3, Zap, Bot, Truck,
  CreditCard, TrendingUp, CheckCircle2, Calendar
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Resources | WhatsApp ERP Insights - Ai Auto Soft",
  description: "Expert guides on WhatsApp automation, Busy ERP tips, industry best practices, and compliance guidelines. Stay updated with the latest in business automation.",
  keywords: ["WhatsApp automation blog", "Busy ERP tips", "business automation guides", "WhatsApp compliance", "ERP integration tutorials"],
  openGraph: {
    title: "Blog & Resources | Ai Auto Soft",
    description: "Expert guides and insights on WhatsApp automation and ERP integration.",
    type: "website",
  },
};

const categories = [
  { id: "all", name: "All Posts", count: 24 },
  { id: "whatsapp-compliance", name: "WhatsApp Compliance", count: 6, icon: Shield },
  { id: "busy-erp-tips", name: "Busy ERP Tips", count: 8, icon: BarChart3 },
  { id: "industry-guides", name: "Industry Guides", count: 10, icon: TrendingUp },
];

const featuredArticles = [
  {
    id: 1,
    title: "The Complete Guide to WhatsApp Business API Compliance in India 2025",
    excerpt: "Everything you need to know about TRAI regulations, DLT templates, and maintaining compliance while automating customer communication.",
    category: "whatsapp-compliance",
    author: "Priya Sharma",
    date: "Jan 15, 2025",
    readTime: "12 min read",
    featured: true,
    image: "/blog/whatsapp-compliance.jpg"
  },
  {
    id: 2,
    title: "10 Ways to Reduce DSO Using WhatsApp Payment Reminders",
    excerpt: "Proven strategies to accelerate collections and improve cash flow with automated reminder sequences that actually work.",
    category: "busy-erp-tips",
    author: "Sneha Gupta",
    date: "Jan 12, 2025",
    readTime: "8 min read",
    featured: true,
    image: "/blog/dso-reduction.jpg"
  },
];

const blogPosts = [
  {
    id: 3,
    title: "Setting Up Your First Payment Reminder Sequence",
    excerpt: "Step-by-step tutorial to configure automated reminders at 7, 15, 30, and 45-day intervals for maximum recovery.",
    category: "busy-erp-tips",
    author: "Amit Patel",
    date: "Jan 10, 2025",
    readTime: "6 min read",
    image: "/blog/payment-reminders.jpg"
  },
  {
    id: 4,
    title: "WhatsApp Business Policy: What You Can and Cannot Send",
    excerpt: "Understanding Meta's messaging policies, 24-hour window rules, and how to stay compliant while engaging customers.",
    category: "whatsapp-compliance",
    author: "Vikram Singh",
    date: "Jan 8, 2025",
    readTime: "7 min read",
    image: "/blog/whatsapp-policy.jpg"
  },
  {
    id: 5,
    title: "How Textile Businesses are Using ERP Chatbots",
    excerpt: "Industry spotlight: See how Surat's textile manufacturers improved customer service with WhatsApp automation.",
    category: "industry-guides",
    author: "Neha Reddy",
    date: "Jan 5, 2025",
    readTime: "5 min read",
    image: "/blog/textile-chatbot.jpg"
  },
  {
    id: 6,
    title: "Busy ERP Integration: Best Practices for Data Sync",
    excerpt: "Technical guide to ensuring seamless data flow between Busy Accounting and WhatsApp automation platform.",
    category: "busy-erp-tips",
    author: "Priya Sharma",
    date: "Jan 3, 2025",
    readTime: "10 min read",
    image: "/blog/erp-integration.jpg"
  },
  {
    id: 7,
    title: "DLT Template Registration: A Complete Walkthrough",
    excerpt: "How to register your message templates with DLT platforms and get approval faster for transactional messages.",
    category: "whatsapp-compliance",
    author: "Vikram Singh",
    date: "Dec 28, 2024",
    readTime: "9 min read",
    image: "/blog/dlt-registration.jpg"
  },
  {
    id: 8,
    title: "Manufacturing Industry: Automating Order Updates",
    excerpt: "How manufacturers can reduce customer queries by 80% with automated order and dispatch notifications.",
    category: "industry-guides",
    author: "Sneha Gupta",
    date: "Dec 25, 2024",
    readTime: "6 min read",
    image: "/blog/manufacturing-automation.jpg"
  },
  {
    id: 9,
    title: "Credit Management: Setting Up Smart Credit Limits",
    excerpt: "Configure automatic credit limit alerts and blocks to prevent overexposure and improve financial health.",
    category: "busy-erp-tips",
    author: "Amit Patel",
    date: "Dec 22, 2024",
    readTime: "7 min read",
    image: "/blog/credit-management.jpg"
  },
  {
    id: 10,
    title: "Transport & Logistics: Real-Time Shipment Tracking",
    excerpt: "Implement WhatsApp-based shipment tracking for your logistics business with LR sharing and POD collection.",
    category: "industry-guides",
    author: "Neha Reddy",
    date: "Dec 18, 2024",
    readTime: "8 min read",
    image: "/blog/transport-tracking.jpg"
  },
  {
    id: 11,
    title: "WhatsApp Chatbot Commands Your Customers Will Love",
    excerpt: "Design intuitive chatbot flows and commands that make it easy for customers to self-serve.",
    category: "busy-erp-tips",
    author: "Sneha Gupta",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "/blog/chatbot-commands.jpg"
  },
  {
    id: 12,
    title: "Distribution Business: Scaling Without Adding Staff",
    excerpt: "Case study on how distributors expanded retailer network 5x using WhatsApp automation for daily operations.",
    category: "industry-guides",
    author: "Rajesh Kumar",
    date: "Dec 12, 2024",
    readTime: "9 min read",
    image: "/blog/distribution-scaling.jpg"
  },
];

const popularTopics = [
  { name: "Payment Automation", count: 12, icon: CreditCard },
  { name: "ERP Chatbot", count: 8, icon: Bot },
  { name: "Transport Updates", count: 6, icon: Truck },
  { name: "Credit Control", count: 5, icon: Shield },
  { name: "Customer Service", count: 10, icon: MessageCircle },
];

const recentUpdates = [
  { title: "New: Multi-language Chatbot Support", date: "Jan 18, 2025", type: "Feature" },
  { title: "Integration with Busy 21 Released", date: "Jan 10, 2025", type: "Update" },
  { title: "WhatsApp Flows Now Supported", date: "Dec 28, 2024", type: "Feature" },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHero
          badge="Insights & Resources"
          title="Learn, Grow,"
          highlight="Automate"
          subtitle="Expert guides on WhatsApp automation, Busy ERP tips, and industry best practices to transform your business operations."
        />

        {/* Search and Categories */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 h-12 border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED] rounded-lg"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category.id}
                    variant={category.id === "all" ? "default" : "outline"}
                    className={`px-4 py-2 rounded-lg cursor-pointer transition-all ${
                      category.id === "all"
                        ? "bg-[#7C3AED] text-white"
                        : "border-[#7C3AED]/30 text-[#7C3AED] hover:bg-[#7C3AED]/10"
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 text-xs opacity-70">({category.count})</span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-12 lg:py-16 bg-[#F8FAFC]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <Zap className="w-5 h-5 text-[#F97316]" />
              <h2
                className="text-xl sm:text-2xl font-bold text-[#0F172A]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Featured Articles
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {featuredArticles.map((article) => (
                <Card
                  key={article.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 rounded-xl overflow-hidden group"
                >
                  <div className="grid md:grid-cols-2">
                    {/* Image placeholder */}
                    <div className="bg-gradient-to-br from-[#7C3AED]/20 via-[#14B8A6]/20 to-[#F97316]/20 min-h-[200px] flex items-center justify-center">
                      <FileText className="w-16 h-16 text-[#7C3AED]/50" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-0 rounded-lg mb-3">
                        {categories.find(c => c.id === article.category)?.name}
                      </Badge>
                      <h3
                        className="text-lg font-bold text-[#0F172A] mb-3 group-hover:text-[#7C3AED] transition-colors"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Blog Posts Grid */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-8">
                  <BookOpen className="w-5 h-5 text-[#7C3AED]" />
                  <h2
                    className="text-xl sm:text-2xl font-bold text-[#0F172A]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Latest Articles
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {blogPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 rounded-xl overflow-hidden group cursor-pointer"
                    >
                      {/* Image placeholder */}
                      <div className="bg-gradient-to-br from-[#14B8A6]/20 via-[#7C3AED]/10 to-[#F97316]/20 h-40 flex items-center justify-center">
                        <FileText className="w-12 h-12 text-[#14B8A6]/50" />
                      </div>

                      <CardContent className="p-5">
                        <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] border-0 rounded-lg mb-3 text-xs">
                          {categories.find(c => c.id === post.category)?.name}
                        </Badge>
                        <h3
                          className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-[#7C3AED] transition-colors line-clamp-2"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-10">
                  <Button
                    variant="outline"
                    className="border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white font-semibold px-8 rounded-lg"
                  >
                    Load More Articles
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Popular Topics */}
                <Card className="border-0 shadow-lg rounded-xl">
                  <CardContent className="p-6">
                    <h3
                      className="text-lg font-bold text-[#0F172A] mb-4"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Popular Topics
                    </h3>
                    <div className="space-y-3">
                      {popularTopics.map((topic) => (
                        <div
                          key={topic.name}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-[#F8FAFC] cursor-pointer transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center group-hover:bg-[#7C3AED]/20 transition-colors">
                              <topic.icon className="w-4 h-4 text-[#7C3AED]" />
                            </div>
                            <span className="text-sm font-medium text-[#0F172A] group-hover:text-[#7C3AED] transition-colors">
                              {topic.name}
                            </span>
                          </div>
                          <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] border-0 rounded-lg text-xs">
                            {topic.count}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Updates */}
                <Card className="border-0 shadow-lg rounded-xl">
                  <CardContent className="p-6">
                    <h3
                      className="text-lg font-bold text-[#0F172A] mb-4"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Product Updates
                    </h3>
                    <div className="space-y-4">
                      {recentUpdates.map((update, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            update.type === "Feature" ? "bg-[#F97316]" : "bg-[#14B8A6]"
                          }`} />
                          <div>
                            <p className="text-sm text-[#0F172A] font-medium">{update.title}</p>
                            <p className="text-xs text-gray-500">{update.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter CTA */}
                <Card className="border-0 shadow-lg rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] text-white">
                  <CardContent className="p-6">
                    <MessageCircle className="w-10 h-10 mb-4 text-white/80" />
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Get Weekly Insights
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      Join 2,000+ business owners receiving automation tips every week.
                    </p>
                    <div className="space-y-3">
                      <Input
                        placeholder="Your email"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-11"
                      />
                      <Button className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-lg shadow-lg shadow-orange-500/25">
                        Subscribe
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                    <p className="text-white/60 text-xs mt-3">No spam. Unsubscribe anytime.</p>
                  </CardContent>
                </Card>

                {/* Quick Links */}
                <Card className="border-0 shadow-lg rounded-xl">
                  <CardContent className="p-6">
                    <h3
                      className="text-lg font-bold text-[#0F172A] mb-4"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Quick Resources
                    </h3>
                    <div className="space-y-2">
                      {[
                        "WhatsApp API Documentation",
                        "Busy ERP Setup Guide",
                        "DLT Registration Guide",
                        "Message Templates Library"
                      ].map((link) => (
                        <a
                          key={link}
                          href="#"
                          className="flex items-center gap-2 text-sm text-[#7C3AED] hover:text-[#7C3AED]/80 transition-colors py-2"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          {link}
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Transform Your"
          highlight="Business?"
          subtitle="Get started with a free demo and see how WhatsApp automation can revolutionize your operations."
          primaryCta={{ text: "Book Free Demo", href: "/home#contact" }}
          secondaryCta={{ text: "Talk to Expert", href: "https://wa.me/919203704508" }}
        />
      </main>

      <Footer />
    </div>
  );
}
