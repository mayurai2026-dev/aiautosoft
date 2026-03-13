"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Clock,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Play,
  Phone,
  Bot,
  CreditCard,
  Truck,
  Building2,
  Factory,
  Package,
  Mail,
  Facebook,
  Instagram,
} from "lucide-react";
import WhatsAppChatDemo from "@/components/demo/WhatsAppChatDemo";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative pt-20 lg:pt-28 pb-16 lg:pb-24 overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FAFC] to-white -z-10" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#14B8A6]/15 rounded-full blur-3xl -z-10" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="text-center lg:text-left"
              >
                <motion.div variants={fadeInUp}>
                  <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20 mb-6 rounded-lg px-4 py-1.5">
                    <Zap className="w-3 h-3 mr-1" />
                    Trusted by 500+ Indian Businesses
                  </Badge>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Automate Your <span className="text-[#7C3AED]">Busy ERP</span>{" "}
                  Workflows on <span className="text-[#25D366]">WhatsApp</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
                >
                  Recover payments 30% faster, automate shipping updates, and
                  provide 24/7 AI-powered support. All integrated directly with
                  your Busy Accounting software.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Button
                    size="lg"
                    className="bg-[#F97316] text-white hover:bg-[#EA580C] font-semibold text-base px-8 py-6 rounded-lg shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40"
                    asChild
                  >
                    <a href="#contact">
                      Book a Free Demo
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white font-semibold text-base px-8 py-6 rounded-lg transition-all"
                    asChild
                  >
                    <Link href="/solution">
                      <Play className="w-5 h-5 mr-2" />
                      See How It Works
                    </Link>
                  </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-3 gap-4 sm:gap-6 mt-12 pt-8 border-t border-gray-200"
                >
                  <div className="text-center lg:text-left">
                    <div
                      className="text-2xl sm:text-3xl font-bold text-[#0F172A]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      500+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Businesses Automated
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div
                      className="text-2xl sm:text-3xl font-bold text-[#7C3AED]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      30%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Faster Recovery
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div
                      className="text-2xl sm:text-3xl font-bold text-[#14B8A6]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      84%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Less Support Calls
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Content - Hero Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="relative">
                  {/* Main Phone Mockup */}
                  <div className="relative z-10 mx-auto max-w-xs sm:max-w-sm">
                    <div className="bg-[#0F172A] rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl">
                      <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                        {/* Phone Screen Content */}
                        <div className="bg-[#075E54] p-3 sm:p-4 text-white">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                              <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm sm:text-base">
                                Ai Auto Soft Bot
                              </div>
                              <div className="text-[10px] sm:text-xs text-white/70">
                                Online • Typically replies instantly
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Interactive Chat Demo */}
                        <WhatsAppChatDemo />
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-6 sm:py-8 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12">
              <p className="text-gray-600 text-xs sm:text-sm text-center">
                Trusted by 500+ Traders and Manufacturers across India
              </p>
              <div className="flex items-center gap-4 sm:gap-8 flex-wrap justify-center opacity-60">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Building2 className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
                  <span className="text-xs sm:text-sm font-medium">
                    ABC Distributors
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <Factory className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
                  <span className="text-xs sm:text-sm font-medium">
                    XYZ Industries
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <Package className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
                  <span className="text-xs sm:text-sm font-medium">
                    Global Traders
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] border-0 text-[10px] sm:text-xs rounded-lg px-2 py-1">
                    <Shield className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                    Meta Business Partner
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Point Contrast Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3 sm:mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Stop Wasting 9 Hours Every Week
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Manual invoicing, payment follow-ups, and customer queries drain
                your productivity. Here&apos;s the transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {/* Before */}
              <Card className="border-red-200 bg-red-50/50 shadow-lg">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 text-red-600 mb-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium">
                      WITHOUT AUTOMATION
                    </span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-[#0F172A]">
                    The Manual Nightmare
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  {[
                    "Print invoices, scan, email individually",
                    "Make 50+ phone calls for payment follow-ups",
                    "Manually check stock and respond to queries",
                    "Update multiple Excel sheets daily",
                    "Handle 'Where is my order?' calls all day",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[10px] sm:text-xs text-red-600">
                          ✕
                        </span>
                      </div>
                      <span className="text-sm sm:text-base text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* After */}
              <Card className="border-[#14B8A6] bg-[#14B8A6]/10 shadow-lg">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 text-[#14B8A6] mb-2">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium">
                      WITH AUTOMATION
                    </span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-[#0F172A]">
                    The Automated Dream
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  {[
                    "Click 'Save' in Busy → Invoice sent on WhatsApp",
                    "Automatic payment reminders at set intervals",
                    "Customers self-serve via 24/7 WhatsApp Bot",
                    "Live sync with Google Sheets dashboards",
                    "Real-time bilty & dispatch notifications",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#14B8A6] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                      </div>
                      <span className="text-sm sm:text-base text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section
          id="services-preview"
          className="py-12 sm:py-16 lg:py-24 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-16">
              <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20 mb-3 sm:mb-4 rounded-lg px-4 py-1.5">
                Our Services
              </Badge>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3 sm:mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Powerful Automation Features
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Everything you need to transform your Busy ERP into a 24/7
                customer engagement machine.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Payment Reminders */}
              <Link href="/payment-reminders" className="block">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group rounded-xl h-full">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F97316]/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <CreditCard className="w-6 h-6 sm:w-7 sm:h-7 text-[#F97316]" />
                    </div>
                    <CardTitle className="text-base sm:text-lg text-[#0F172A]">
                      Payment Reminders
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Automated dunning that recovers 30% faster.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              {/* ERP Chatbot */}
              <Link href="/erp-chatbot" className="block">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group rounded-xl h-full">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#7C3AED]/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Bot className="w-6 h-6 sm:w-7 sm:h-7 text-[#7C3AED]" />
                    </div>
                    <CardTitle className="text-base sm:text-lg text-[#0F172A]">
                      24/7 ERP Chatbot
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Customer self-service via WhatsApp.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              {/* Credit Management */}
              <Link href="/credit-management" className="block">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group rounded-xl h-full">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0F172A]/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-[#0F172A]" />
                    </div>
                    <CardTitle className="text-base sm:text-lg text-[#0F172A]">
                      Credit Management
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Proactive credit controls & alerts.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              {/* Transport Automation */}
              <Link href="/transport-automation" className="block">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group rounded-xl h-full">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#14B8A6]/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Truck className="w-6 h-6 sm:w-7 sm:h-7 text-[#14B8A6]" />
                    </div>
                    <CardTitle className="text-base sm:text-lg text-[#0F172A]">
                      Transport Automation
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Real-time logistics updates.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Button
                size="lg"
                className="bg-[#7C3AED] text-white hover:bg-[#6D28D9] font-semibold px-8 py-3 rounded-lg shadow-lg shadow-violet-500/25 transition-all hover:shadow-violet-500/40"
                asChild
              >
                <Link href="/solution">
                  Explore All Solutions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section - Redesigned */}
        <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-8 sm:mb-12">
                <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20 mb-3 sm:mb-4 rounded-lg px-4 py-1.5">
                  Get Started
                </Badge>
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3 sm:mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Request Your Free Demo
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
                  See exactly how Ai Auto Soft can transform your business with
                  WhatsApp automation.
                </p>
              </div>

              {/* Form Card */}
              <Card className="border-0 shadow-xl bg-white rounded-2xl">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-sm font-medium text-[#0F172A]"
                        >
                          Your Name *
                        </Label>
                        <Input
                          id="name"
                          placeholder="Full name"
                          className="h-12 border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED] rounded-lg"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="businessName"
                          className="text-sm font-medium text-[#0F172A]"
                        >
                          Business Name *
                        </Label>
                        <Input
                          id="businessName"
                          placeholder="Company name"
                          className="h-12 border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED] rounded-lg"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-[#0F172A]"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="h-12 border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED] rounded-lg"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-sm font-medium text-[#0F172A]"
                        >
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 92037 04508"
                          className="h-12 border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED] rounded-lg"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="invoiceVolume"
                        className="text-sm font-medium text-[#0F172A]"
                      >
                        Monthly Invoice Volume
                      </Label>
                      <select
                        id="invoiceVolume"
                        className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 bg-white"
                      >
                        <option value="">Select volume range</option>
                        <option value="0-100">Less than 100 invoices</option>
                        <option value="100-500">100 - 500 invoices</option>
                        <option value="500-1000">500 - 1000 invoices</option>
                        <option value="1000+">More than 1000 invoices</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-[#0F172A]"
                      >
                        Tell us about your challenges (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="What manual tasks take most of your time?"
                        className="min-h-[100px] border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED] rounded-lg"
                        rows={3}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#F97316] text-white hover:bg-[#EA580C] font-semibold h-14 text-base sm:text-lg rounded-lg shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40"
                    >
                      Request Free Demo
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    <p className="text-xs sm:text-sm text-gray-500 text-center">
                      No credit card required • Response within 24 hours
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Alternative Contact */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">
                      Chat on WhatsApp
                    </div>
                    <a
                      href="https://wa.me/919203704508"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#0F172A] hover:text-[#7C3AED]"
                    >
                      +91 92037 04508
                    </a>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gray-200" />
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-[#7C3AED]/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Email us</div>
                    <a
                      href="mailto:aiautosoft26@gmail.com"
                      className="text-sm font-medium text-[#0F172A] hover:text-[#7C3AED]"
                    >
                      aiautosoft26@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61584157602190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#0F172A]/10 flex items-center justify-center text-[#0F172A] hover:bg-[#1877F2] hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/ai_autosoft/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#0F172A]/10 flex items-center justify-center text-[#0F172A] hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Stop Chasing Payments.
              <br />
              <span className="text-[#14B8A6]">Start Automating Today.</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join 500+ Indian businesses that have transformed their
              receivables and customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button
                size="lg"
                className="bg-[#F97316] text-white hover:bg-[#EA580C] font-semibold text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-lg shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40"
                asChild
              >
                <a href="#contact">
                  Get Started for Free
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white font-semibold text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-lg transition-all"
                asChild
              >
                <a
                  href="https://wa.me/919203704508"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Talk to an Expert
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
