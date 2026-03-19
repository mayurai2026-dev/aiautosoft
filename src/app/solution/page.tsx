"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, Send, TrendingUp, Shield, Zap, 
  CheckCircle2, ArrowRight, Bot, CreditCard, Truck, BarChart3, Settings, Globe, Lock,
  Building2, Factory, Package, Store, FileText, Download, QrCode, Bell, Users, Calendar, MessageSquare, HeadphonesIcon, Star
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const industrySolutions = [
  {
    id: "distributors",
    icon: Store,
    title: "For Distributors & Wholesalers",
    description: "Handle high-volume invoices and manage thousands of customer queries effortlessly.",
    features: [
      { icon: FileText, title: "Bill-by-Bill Ledger Sharing", desc: "Send detailed account statements on demand" },
      { icon: Users, title: "Multi-Agent Inbox", desc: "Team of 50+ can manage queries simultaneously" },
      { icon: Bell, title: "Bulk Broadcast Campaigns", desc: "Announce schemes and offers at scale" },
      { icon: BarChart3, title: "Sales Analytics Dashboard", desc: "Track performance by region, product, agent" }
    ]
  },
  {
    id: "transport",
    icon: Truck,
    title: "For Transport & Logistics",
    description: "Automate shipment tracking and keep customers informed at every step.",
    features: [
      { icon: Truck, title: "Shipment Tracking", desc: "Real-time location updates via WhatsApp" },
      { icon: FileText, title: "Bilty Automation", desc: "Auto-send LR copies and delivery receipts" },
      { icon: Download, title: "POD Collection", desc: "Drivers upload proof-of-delivery photos" },
      { icon: Calendar, title: "Delivery Scheduling", desc: "Book and confirm slots via chat" }
    ]
  },
  {
    id: "manufacturers",
    icon: Factory,
    title: "For Manufacturers",
    description: "Streamline production updates and procurement communication.",
    features: [
      { icon: Package, title: "Inventory Alerts", desc: "Low stock notifications to procurement team" },
      { icon: Settings, title: "Production Status Updates", desc: "Live dashboards for order tracking" },
      { icon: Globe, title: "Google Sheets Integration", desc: "Sync data for custom reporting" },
      { icon: Users, title: "Dealer Portal", desc: "Self-service ordering for distributors" }
    ]
  },
  {
    id: "retailers",
    icon: Building2,
    title: "For Retailers",
    description: "Engage customers and drive repeat purchases with automated campaigns.",
    features: [
      { icon: MessageSquare, title: "Order Confirmation", desc: "Instant order acknowledgment" },
      { icon: Star, title: "Loyalty Programs", desc: "Points and rewards tracking via chat" },
      { icon: Bell, title: "Promotional Campaigns", desc: "Targeted offers based on purchase history" },
      { icon: HeadphonesIcon, title: "Customer Support", desc: "24/7 query resolution bot" }
    ]
  }
];

export default function SolutionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 via-white to-[#14B8A6]/5 -z-10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#14B8A6]/15 rounded-full blur-3xl -z-10" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp}>
                <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20 mb-4 sm:mb-6 rounded-lg px-4 py-1.5">
                  <Zap className="w-3 h-3 mr-1" />
                  Complete Solution Suite
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4 sm:mb-6 leading-tight"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Comprehensive WhatsApp Automation for{" "}
                <span className="text-[#7C3AED]">Busy ERP</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
              >
                Transform your accounting operations with intelligent automation that saves time, improves cash flow, and enhances customer satisfaction.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button 
                  size="lg" 
                  className="bg-[#F97316] text-white hover:bg-[#EA580C] font-semibold px-8 py-3 rounded-lg shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40"
                  asChild
                >
                  <Link href="/home#contact">
                    Book a Free Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white font-semibold px-8 py-3 rounded-lg transition-all"
                  asChild
                >
                  <Link href="/home">
                    Back to Home
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20 mb-4 rounded-lg px-4 py-1.5">
                Our Services
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Our Automation Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Powerful features designed specifically for Indian businesses using Busy ERP.
              </p>
            </div>
            
            {/* Service Cards */}
            <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Payment Reminders */}
              <Card id="payment-reminders" className="border-0 shadow-lg hover:shadow-xl transition-shadow group overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#F97316]/20 flex items-center justify-center mb-4">
                    <CreditCard className="w-7 h-7 text-[#F97316]" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-[#0F172A]">Automated Payment Reminders & Dunning</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Improve cash flow without the awkward phone calls. Our intelligent reminder system knows exactly when and how to follow up.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 pt-0">
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-[#F8FAFC] rounded-xl p-4 text-center">
                      <div className="text-xs font-medium text-gray-500 mb-1">7 Days Before</div>
                      <div className="text-sm text-[#0F172A] font-semibold">Friendly Reminder</div>
                      <p className="text-[10px] sm:text-xs text-gray-500 mt-1">"Your invoice #123 is due on 15th"</p>
                    </div>
                    <div className="bg-[#7C3AED]/10 rounded-xl p-4 text-center">
                      <div className="text-xs font-medium text-[#7C3AED] mb-1">On Due Date</div>
                      <div className="text-sm text-[#0F172A] font-semibold">Action-First</div>
                      <p className="text-[10px] sm:text-xs text-gray-500 mt-1">"Payment due today - Click to pay"</p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4 text-center">
                      <div className="text-xs font-medium text-red-600 mb-1">3 Days Overdue</div>
                      <div className="text-sm text-[#0F172A] font-semibold">Firm Follow-up</div>
                      <p className="text-[10px] sm:text-xs text-gray-500 mt-1">"Please clear overdue amount"</p>
                    </div>
                  </div>
                  <div className="p-4 bg-[#0F172A] rounded-xl text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-[#14B8A6]" />
                      <span className="font-semibold">Recovery Impact</span>
                    </div>
                    <p className="text-sm text-gray-300">29% of past-due customers simply forget to pay. Automation solves this without damaging relationships.</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* ERP Chatbot */}
              <Card id="erp-chatbot" className="border-0 shadow-lg hover:shadow-xl transition-shadow group overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#7C3AED]/20 flex items-center justify-center mb-4">
                    <Bot className="w-7 h-7 text-[#7C3AED]" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-[#0F172A]">24/7 ERP Chatbot & Customer Self-Service</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Empower your customers with instant answers via WhatsApp. No more waiting for business hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 pt-0">
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {[
                      { cmd: "Balance", desc: "Get outstanding amount" },
                      { cmd: "Ledger", desc: "Receive PDF statement" },
                      { cmd: "Stock", desc: "Check availability" },
                      { cmd: "Order", desc: "Track order status" }
                    ].map((item) => (
                      <div key={item.cmd} className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-xl">
                        <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                          <MessageCircle className="w-4 h-4 text-[#25D366]" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[#0F172A]">Send &quot;{item.cmd}&quot;</div>
                          <div className="text-xs text-gray-500">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-[#7C3AED]/10 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-[#7C3AED]" />
                      <span className="font-semibold text-[#0F172A]">Impact</span>
                    </div>
                    <p className="text-sm text-gray-600">Reduce support calls by 84%. Customers get instant answers 24/7, freeing your team for strategic work.</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Credit Management */}
              <Card id="credit-management" className="border-0 shadow-lg hover:shadow-xl transition-shadow group overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#0F172A]/10 flex items-center justify-center mb-4">
                    <Shield className="w-7 h-7 text-[#0F172A]" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-[#0F172A]">Credit Line & Approval Management</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Eliminate risk with proactive credit controls. Get alerts before problems occur.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 pt-0">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl">
                      <Bell className="w-5 h-5 text-amber-600 shrink-0" />
                      <span className="text-sm text-gray-700">Instant alert when customer hits credit limit</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-xl">
                      <Lock className="w-5 h-5 text-gray-600 shrink-0" />
                      <span className="text-sm text-gray-700">Auto-block risky orders pending approval</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-xl">
                      <BarChart3 className="w-5 h-5 text-gray-600 shrink-0" />
                      <span className="text-sm text-gray-700">Real-time credit exposure reports</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-xl">
                      <Users className="w-5 h-5 text-gray-600 shrink-0" />
                      <span className="text-sm text-gray-700">Sales team notifications for limit breaches</span>
                    </div>
                  </div>
                  <div className="p-4 bg-[#0F172A]/5 rounded-xl">
                    <p className="text-sm text-gray-600"><span className="font-semibold text-[#0F172A]">Prevent bad debts</span> by catching credit issues before they become problems.</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Transport Automation */}
              <Card id="transport-automation" className="border-0 shadow-lg hover:shadow-xl transition-shadow group overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#14B8A6]/20 flex items-center justify-center mb-4">
                    <Truck className="w-7 h-7 text-[#14B8A6]" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-[#0F172A]">Transportation & Bilty Automation</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Real-time logistics updates for better customer retention. Reduce &quot;Where is my order?&quot; calls by 80%.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 pt-0">
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/20 flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5 text-[#7C3AED]" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[#0F172A]">Auto Bilty Delivery</div>
                        <p className="text-xs text-gray-600">LR copies sent instantly via WhatsApp</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#F97316]/20 flex items-center justify-center shrink-0">
                        <QrCode className="w-5 h-5 text-[#F97316]" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[#0F172A]">Tracking Links</div>
                        <p className="text-xs text-gray-600">One-click shipment tracking</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0F172A]/10 flex items-center justify-center shrink-0">
                        <Download className="w-5 h-5 text-[#0F172A]" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[#0F172A]">POD Automation</div>
                        <p className="text-xs text-gray-600">Proof of delivery photos shared</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/20 flex items-center justify-center shrink-0">
                        <Bell className="w-5 h-5 text-[#14B8A6]" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[#0F172A]">Dispatch Alerts</div>
                        <p className="text-xs text-gray-600">Instant shipment notifications</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-[#14B8A6]/10 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-[#14B8A6]" />
                      <span className="font-semibold text-[#0F172A]">Customer Satisfaction</span>
                    </div>
                    <p className="text-sm text-gray-600">Keep customers informed at every step. Happy customers = repeat business.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Industry Solutions Section - Redesigned */}
        <section id="solutions" className="py-12 lg:py-20 bg-[#F8FAFC]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20 mb-4 rounded-lg px-4 py-1.5">
                Industry Solutions
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Built for Your Business Type
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Verticalized solutions designed for the specific workflows of Indian businesses.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {industrySolutions.map((solution) => (
                <Card 
                  key={solution.id}
                  id={solution.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all group rounded-2xl bg-white overflow-hidden"
                >
                  <CardHeader className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED]/20 to-[#14B8A6]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <solution.icon className="w-7 h-7 text-[#7C3AED]" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg sm:text-xl text-[#0F172A]">{solution.title}</CardTitle>
                        <CardDescription className="text-sm text-gray-600 mt-1">
                          {solution.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="grid gap-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-[#F8FAFC] rounded-xl group-hover:bg-white transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center shrink-0">
                            <feature.icon className="w-4 h-4 text-[#7C3AED]" />
                          </div>
                          <div>
                            <div className="font-medium text-sm text-[#0F172A]">{feature.title}</div>
                            <p className="text-xs text-gray-500">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meta Coexistence Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Shield className="w-6 h-6 text-[#14B8A6]" />
                  <span className="text-[#14B8A6] font-medium">Official Meta Partner</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Official Meta API with Zero Downtime
                </h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Keep your existing WhatsApp number for personal use while scaling professional communication through the Official API with Brand Verification.
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                  <Badge className="bg-[#25D366]/10 text-[#25D366] border-0 py-2 px-3 sm:px-4 text-xs sm:text-sm rounded-lg">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Green Tick Eligible
                  </Badge>
                  <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-0 py-2 px-3 sm:px-4 text-xs sm:text-sm rounded-lg">
                    <Lock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Enterprise Security
                  </Badge>
                  <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] border-0 py-2 px-3 sm:px-4 text-xs sm:text-sm rounded-lg">
                    <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    99.9% Uptime SLA
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Workflow Section */}
        <section className="py-12 lg:py-20 bg-[#F8FAFC]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20 mb-4 rounded-lg px-4 py-1.5">
                How It Works
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Simple Integration Process
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get started in less than 48 hours with our seamless Busy ERP integration.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7C3AED] via-[#14B8A6] to-[#F97316]" />
                
                {/* Steps */}
                <div className="space-y-6 sm:space-y-8">
                  {[
                    { step: 1, title: "Voucher Created in Busy ERP", desc: "An invoice or receipt is saved in Busy ERP as usual. No change to your workflow.", color: "#7C3AED" },
                    { step: 2, title: "API Trigger Activated", desc: "Busy calls our configured API with invoice details automatically.", color: "#6D28D9" },
                    { step: 3, title: "PDF Generated & Hosted", desc: "Our system generates a professional PDF and hosts it securely.", color: "#14B8A6" },
                    { step: 4, title: "WhatsApp Message Sent", desc: "Customer receives a pre-approved template with 'View Invoice' button.", color: "#0D9488" },
                    { step: 5, title: "Dunning Cycle Activated", desc: "If payment isn't recorded, reminders are scheduled automatically.", color: "#F97316" }
                  ].map((item) => (
                    <div key={item.step} className="relative flex items-start gap-4 sm:gap-6 pl-10 sm:pl-20">
                      <div 
                        className="absolute left-0 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.step}
                      </div>
                      <Card className="flex-1 border-0 shadow-md rounded-xl">
                        <CardContent className="p-4 sm:p-6">
                          <h3 className="font-semibold text-[#0F172A] mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto px-4">
              Join 500+ Indian businesses already saving time and improving cash flow with Ai Auto Soft.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" className="bg-[#F97316] text-white hover:bg-[#EA580C] font-semibold px-8 py-3 rounded-lg shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40" asChild>
                <Link href="/home#contact">
                  Get Started for Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white font-semibold px-8 py-3 rounded-lg transition-all" asChild>
                <Link href="/home">
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
