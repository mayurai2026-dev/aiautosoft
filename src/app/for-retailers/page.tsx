import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/sections/PageHero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CTASection from "@/components/sections/CTASection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// Icons are now passed as string names to FeatureGrid component
// But we still need these imports for inline JSX rendering in this Server Component
import { 
  Store, ShoppingCart, Users, Heart, MessageSquare, Bell,
  Star, Package, Tag, HeadphonesIcon, BarChart3, CheckCircle2,
  ArrowRight, Clock, TrendingUp, Gift
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WhatsApp Automation for Retailers | Ai Auto Soft",
  description: "Drive 3X conversions with hyper-personalized WhatsApp campaigns. Automate order confirmations, loyalty programs, and customer support for your retail business.",
  keywords: ["retail automation", "WhatsApp marketing", "customer engagement", "loyalty program", "retail chatbot", "Busy ERP retail", "hyper-personalization"],
  openGraph: {
    title: "WhatsApp Automation for Retailers",
    description: "Drive 3X conversions with hyper-personalized WhatsApp campaigns for retail businesses using Busy ERP integration.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Automation for Retailers | Ai Auto Soft",
    description: "Customer engagement, loyalty programs, and 3X conversion rates for retail businesses.",
  },
};

const challenges = [
  {
    icon: Users,
    title: "Low Customer Engagement",
    description: "Struggling to keep customers engaged between purchases and drive repeat business."
  },
  {
    icon: MessageSquare,
    title: "Generic Marketing",
    description: "One-size-fits-all broadcasts that fail to connect with different customer segments."
  },
  {
    icon: HeadphonesIcon,
    title: "Support Overload",
    description: "High volume of routine customer queries overwhelming your support team."
  },
  {
    icon: Tag,
    title: "Manual Loyalty Tracking",
    description: "Difficulty managing points, rewards, and personalized offers for customers."
  }
];

const features = [
  {
    icon: "MessageSquare",
    title: "Instant Order Confirmation",
    description: "Automatic WhatsApp acknowledgment with order details, images, and delivery timeline."
  },
  {
    icon: "Heart",
    title: "Loyalty Program on WhatsApp",
    description: "Customers check points, redeem rewards, and receive personalized offers via chat."
  },
  {
    icon: "Bell",
    title: "Hyper-Personalized Campaigns",
    description: "Target customers based on purchase history, preferences, and buying patterns."
  },
  {
    icon: "HeadphonesIcon",
    title: "24/7 Customer Support Bot",
    description: "AI-powered bot handles product queries, returns, and FAQs round the clock."
  },
  {
    icon: "Tag",
    title: "Abandoned Cart Recovery",
    description: "Automatic WhatsApp reminders for customers who left items in their cart."
  },
  {
    icon: "BarChart3",
    title: "Purchase Analytics",
    description: "Track customer behavior, campaign performance, and conversion rates in real-time."
  }
];

const benefits = [
  { metric: "3X", label: "Higher Conversions", description: "Via personalized WhatsApp" },
  { metric: "45%", label: "Repeat Purchase Rate", description: "With loyalty automation" },
  { metric: "70%", label: "Cart Recovery Rate", description: "With WhatsApp reminders" },
  { metric: "84%", label: "Less Support Calls", description: "AI-powered bot handles queries" }
];

export default function ForRetailersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <PageHero
          badge="For Retailers"
          title="WhatsApp Automation for"
          highlight="Customer Engagement"
          subtitle="Drive 3X conversions with hyper-personalized WhatsApp campaigns. Automate loyalty programs, order confirmations, and customer support."
          primaryCta={{ text: "Book Free Demo", href: "/home#contact" }}
          secondaryCta={{ text: "See How It Works", href: "/solution" }}
        />

        {/* Challenges Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-red-100 text-red-600 border-red-200 mb-4 rounded-lg px-4 py-1.5">
                Retail Challenges
              </Badge>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Retailers Face Customer Engagement Hurdles
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                In a competitive market, keeping customers engaged and driving repeat purchases is more important than ever.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {challenges.map((challenge, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all group rounded-xl bg-red-50/50"
                >
                  <CardHeader className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <challenge.icon className="w-6 h-6 text-red-500" />
                    </div>
                    <CardTitle className="text-lg text-[#0F172A]">{challenge.title}</CardTitle>
                    <CardDescription className="text-gray-600">{challenge.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeatureGrid
          title="Features Built for Retail"
          subtitle="Purpose-built workflows that understand the unique needs of retail and e-commerce businesses."
          features={features}
          columns={3}
        />

        {/* Hyper-Personalization Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20 mb-4 rounded-lg px-4 py-1.5">
                  Hyper-Personalization
                </Badge>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Target Customers with Precision
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Send the right message to the right customer at the right time with intelligent segmentation.
                </p>
              </div>

              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="p-6 sm:p-8 lg:p-10">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Intelligent Customer Segments
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Automatically segment customers based on their behavior and send personalized campaigns that convert.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-[#7C3AED]/10 to-transparent rounded-xl border-l-4 border-[#7C3AED]">
                        <div className="font-semibold text-[#0F172A]">High-Value Customers</div>
                        <p className="text-sm text-gray-600">VIP offers, early access to sales, exclusive previews</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-[#14B8A6]/10 to-transparent rounded-xl border-l-4 border-[#14B8A6]">
                        <div className="font-semibold text-[#0F172A]">At-Risk Customers</div>
                        <p className="text-sm text-gray-600">Win-back campaigns with special discounts</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-[#F97316]/10 to-transparent rounded-xl border-l-4 border-[#F97316]">
                        <div className="font-semibold text-[#0F172A]">Frequent Buyers</div>
                        <p className="text-sm text-gray-600">Loyalty rewards and bundle offers</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-[#0F172A]/10 to-transparent rounded-xl border-l-4 border-[#0F172A]">
                        <div className="font-semibold text-[#0F172A]">Cart Abandoners</div>
                        <p className="text-sm text-gray-600">Timely reminders with limited-time offers</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#F97316] to-[#EA580C] p-6 sm:p-8 lg:p-10 text-white">
                    <div className="flex items-center gap-2 mb-6">
                      <Gift className="w-6 h-6" />
                      <span className="text-sm font-medium text-white/80">Personalized Message Example</span>
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-4 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Store className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Fashion Store</div>
                          <div className="text-xs text-white/60">Just now</div>
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="text-sm">
                          Hi Priya! 👋<br /><br />
                          Based on your recent purchases, we thought you&apos;d love our new summer collection! 
                          <br /><br />
                          🎁 <strong>Special for you:</strong> 25% off on dresses<br />
                          ⏰ Valid for 48 hours only<br /><br />
                          Tap to explore 👇
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white/10 rounded-xl">
                        <div className="text-2xl font-bold">3X</div>
                        <div className="text-xs text-white/70">Higher Open Rate</div>
                      </div>
                      <div className="text-center p-4 bg-white/10 rounded-xl">
                        <div className="text-2xl font-bold">45%</div>
                        <div className="text-xs text-white/70">Conversion Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Loyalty Program Section */}
        <section className="py-12 lg:py-20 bg-[#F8FAFC]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] border-[#14B8A6]/20 mb-4 rounded-lg px-4 py-1.5">
                Loyalty Programs
              </Badge>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                WhatsApp-Powered Loyalty
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Replace physical loyalty cards with WhatsApp. Customers check points, redeem rewards, and receive personalized offers.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { cmd: "POINTS", desc: "Check loyalty balance", icon: Star },
                  { cmd: "REDEEM", desc: "Claim rewards", icon: Gift },
                  { cmd: "OFFERS", desc: "View personalized deals", icon: Tag },
                  { cmd: "HISTORY", desc: "Purchase history", icon: BarChart3 }
                ].map((item) => (
                  <Card key={item.cmd} className="border-0 shadow-lg hover:shadow-xl transition-all group rounded-xl">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-xl bg-[#14B8A6]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-[#14B8A6]" />
                      </div>
                      <div className="font-mono text-sm bg-[#F8FAFC] rounded-lg px-3 py-2 mb-2 text-[#0F172A]">
                        &quot;{item.cmd}&quot;
                      </div>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Customer Journey */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20 mb-4 rounded-lg px-4 py-1.5">
                Customer Journey
              </Badge>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                How the Retail Experience Works
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From browsing to purchase to loyalty, automate every customer touchpoint through WhatsApp.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F97316] via-[#7C3AED] to-[#14B8A6]" />
                
                {/* Steps */}
                <div className="space-y-6 sm:space-y-8">
                  {[
                    { step: 1, title: "Customer Browses & Inquires", desc: "Customer asks about product availability, price, or specs via WhatsApp bot", color: "#F97316", icon: MessageSquare },
                    { step: 2, title: "Instant Order Confirmation", desc: "Order placed → Customer receives confirmation with images, price, and delivery timeline", color: "#EA580C", icon: ShoppingCart },
                    { step: 3, title: "Proactive Delivery Updates", desc: "Automatic notifications at dispatch, in-transit, and delivery stages", color: "#7C3AED", icon: Package },
                    { step: 4, title: "Points & Rewards Credit", desc: "Loyalty points automatically credited with celebration message", color: "#6D28D9", icon: Star },
                    { step: 5, title: "Personalized Re-engagement", desc: "Targeted offers based on purchase history and preferences", color: "#14B8A6", icon: Heart }
                  ].map((item) => (
                    <div key={item.step} className="relative flex items-start gap-4 sm:gap-6 pl-10 sm:pl-20">
                      <div 
                        className="absolute left-0 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.step}
                      </div>
                      <Card className="flex-1 border-0 shadow-md rounded-xl hover:shadow-lg transition-shadow">
                        <CardContent className="p-4 sm:p-6 flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                            <item.icon className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-[#0F172A] mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <BenefitsSection
          title="Measurable Results for Retailers"
          subtitle="Real impact that retail businesses have achieved with our automation."
          benefits={benefits}
        />

        {/* Case Study Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] border-[#14B8A6]/20 mb-4 rounded-lg px-4 py-1.5">
                  Success Story
                </Badge>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Real Results from Retailers
                </h2>
              </div>

              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="bg-gradient-to-br from-[#F97316] to-[#EA580C] p-6 sm:p-8 lg:p-10 text-white">
                    <div className="flex items-center gap-2 mb-4">
                      <Store className="w-6 h-6" />
                      <span className="text-sm font-medium text-white/80">Case Study</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Trendy Fashion Store
                    </h3>
                    <p className="text-white/90 mb-6">
                      A multi-brand fashion retailer with 3 outlets and a growing online presence, serving 10,000+ customers.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">3X</div>
                          <div className="text-sm text-white/70">Higher conversion rate</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Heart className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">45%</div>
                          <div className="text-sm text-white/70">Repeat purchase rate</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <ShoppingCart className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">70%</div>
                          <div className="text-sm text-white/70">Cart recovery rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 mb-6">
                      &ldquo;We used to send generic SMS blasts that got ignored. Now we send personalized WhatsApp messages based on what customers actually buy. Our conversion rate tripled! The loyalty program on WhatsApp has also transformed customer retention.&rdquo;
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#F97316]/20 flex items-center justify-center">
                        <Users className="w-6 h-6 text-[#F97316]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#0F172A]">Neha Gupta</div>
                        <div className="text-sm text-gray-500">Owner, Trendy Fashion</div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <Button
                        className="bg-[#F97316] text-white hover:bg-[#EA580C] font-semibold rounded-lg shadow-lg shadow-orange-500/25"
                        asChild
                      >
                        <Link href="/home#contact">
                          Get Similar Results
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Transform Your Retail Customer Experience?"
          highlight="Get Started Today"
          subtitle="Join leading retailers who have automated customer engagement and achieved 3X conversion rates with Ai Auto Soft."
          primaryCta={{ text: "Book Free Demo", href: "/home#contact" }}
          secondaryCta={{ text: "Talk to Expert", href: "https://wa.me/919203704508" }}
          variant="dark"
        />
      </main>
      
      <Footer />
    </div>
  );
}
