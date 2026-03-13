import { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle, Target, Lightbulb, Users, Shield, Award,
  CheckCircle2, Rocket, Heart, Globe, Zap, Bot, Building2,
  Linkedin, Twitter
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Ai Auto Soft - WhatsApp ERP Automation",
  description: "Learn about Ai Auto Soft's mission to transform Indian businesses through WhatsApp automation integrated with Busy ERP. Meet our team and discover our values.",
  keywords: ["Ai Auto Soft", "WhatsApp automation", "Busy ERP", "Indian startups", "ERP integration", "conversational ERP"],
  openGraph: {
    title: "About Ai Auto Soft - WhatsApp ERP Automation",
    description: "Transforming Indian businesses through WhatsApp automation integrated with Busy ERP.",
    type: "website",
  },
};

const values = [
  {
    icon: Target,
    title: "Customer First",
    description: "Every feature we build starts with understanding the real pain points of Indian traders and manufacturers.",
    color: "#F97316"
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Your data security is non-negotiable. We maintain the highest standards of data protection and compliance.",
    color: "#7C3AED"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously push boundaries to bring cutting-edge automation solutions to businesses of all sizes.",
    color: "#14B8A6"
  },
  {
    icon: Heart,
    title: "Simplicity",
    description: "Complex technology delivered through simple interfaces. If it's not easy to use, we haven't finished.",
    color: "#F97316"
  }
];

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    image: "/team/rajesh.jpg",
    bio: "15+ years in ERP solutions. Former TCS consultant with a vision to democratize automation for Indian SMBs.",
    linkedin: "#"
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    image: "/team/priya.jpg",
    bio: "IIT Delhi alumna. Built scalable systems at Flipkart before joining to lead our tech vision.",
    linkedin: "#"
  },
  {
    name: "Amit Patel",
    role: "Head of Product",
    image: "/team/amit.jpg",
    bio: "Product veteran from Zoho. Obsessed with creating seamless user experiences.",
    linkedin: "#"
  },
  {
    name: "Sneha Gupta",
    role: "Head of Customer Success",
    image: "/team/sneha.jpg",
    bio: "Transformed 500+ businesses from manual to automated workflows. Your success is her mission.",
    linkedin: "#"
  },
  {
    name: "Vikram Singh",
    role: "Lead Engineer",
    image: "/team/vikram.jpg",
    bio: "WhatsApp API expert. Architect of our robust messaging infrastructure.",
    linkedin: "#"
  },
  {
    name: "Neha Reddy",
    role: "Sales Director",
    image: "/team/neha.jpg",
    bio: "10+ years in B2B SaaS sales. Building relationships that drive mutual growth.",
    linkedin: "#"
  }
];

const trustIndicators = [
  {
    icon: Award,
    title: "Meta Business Partner",
    description: "Official WhatsApp Business Solution Provider"
  },
  {
    icon: Shield,
    title: "ISO 27001 Certified",
    description: "Enterprise-grade security standards"
  },
  {
    icon: CheckCircle2,
    title: "Busy Authorized Partner",
    description: "Certified integration partner"
  },
  {
    icon: Globe,
    title: "GDPR Compliant",
    description: "International data protection standards"
  }
];

const milestones = [
  { year: "2020", event: "Founded in Noida with a vision to automate Indian businesses" },
  { year: "2021", event: "First 100 customers onboarded. Payment reminder feature launched." },
  { year: "2022", event: "Became Meta Business Partner. Launched ERP Chatbot." },
  { year: "2023", event: "Crossed 500+ customers. Transport automation module released." },
  { year: "2024", event: "Expanded to 15+ industries. AI-powered features introduced." },
  { year: "2025", event: "Target: 2000+ businesses. Conversational ERP vision realized." }
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHero
          badge="Our Story"
          title="Transforming Indian Businesses Through"
          highlight="WhatsApp Automation"
          subtitle="We believe every business deserves access to powerful automation tools. That's why we built Ai Auto Soft – to make ERP workflows as simple as sending a WhatsApp message."
        />

        {/* Mission Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] border-[#14B8A6]/20 mb-4 rounded-lg px-4 py-1.5">
                  Our Mission
                </Badge>
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-6 leading-tight"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Empowering Indian SMBs with
                  <span className="text-[#7C3AED]"> Enterprise-Grade </span>
                  Automation
                </h2>
                <p className="text-gray-600 mb-6 text-base sm:text-lg">
                  In a country where 63 million SMBs power the economy, we saw businesses struggling with manual processes – printing invoices, making endless follow-up calls, and managing customer queries manually. These are the same challenges faced by large enterprises, but without the budget for expensive solutions.
                </p>
                <p className="text-gray-600 mb-6 text-base sm:text-lg">
                  Our mission is simple: <strong className="text-[#0F172A]">bring enterprise-level automation to every Indian business</strong>, regardless of size. Through WhatsApp – the platform India already trusts and uses daily – we make ERP workflows accessible, affordable, and effortless.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#F97316]/20 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-[#F97316]" />
                    </div>
                    <span className="text-sm font-medium text-[#0F172A]">500+ Businesses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#7C3AED]/20 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-[#7C3AED]" />
                    </div>
                    <span className="text-sm font-medium text-[#0F172A]">15+ Industries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#14B8A6]/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-[#14B8A6]" />
                    </div>
                    <span className="text-sm font-medium text-[#0F172A]">10M+ Messages/Month</span>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <Card className="border-0 shadow-lg rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] text-white">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>500+</div>
                    <div className="text-white/80">Businesses Automated</div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#0D9488] text-white">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>₹50Cr+</div>
                    <div className="text-white/80">Payments Recovered</div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg rounded-xl bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>30%</div>
                    <div className="text-white/80">Faster Collections</div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg rounded-xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>84%</div>
                    <div className="text-white/80">Less Support Calls</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Product Vision - Conversational ERP */}
        <section className="py-12 lg:py-20 bg-[#F8FAFC]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20 mb-4 rounded-lg px-4 py-1.5">
                <Lightbulb className="w-3 h-3 mr-1" />
                Product Vision
              </Badge>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                The Future is <span className="text-[#7C3AED]">Conversational ERP</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Imagine talking to your ERP like you talk to a colleague. Ask for balances, send invoices, check stock – all through natural conversations on WhatsApp.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#7C3AED]/10 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Natural Language Interface
                  </h3>
                  <p className="text-gray-600 text-sm">
                    No training needed. Just type like you're texting a colleague. "What's ABC Corp's pending amount?" gets you instant answers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#14B8A6]/10 flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-8 h-8 text-[#14B8A6]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    AI-Powered Actions
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our AI understands context. It can proactively suggest actions, remind follow-ups, and even draft responses for your approval.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#F97316]/10 flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-[#F97316]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Seamless Integration
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Works with your existing Busy ERP. No migration, no new software to learn. Just enable and start automating immediately.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20 mb-4 rounded-lg px-4 py-1.5">
                Our Journey
              </Badge>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                From Idea to <span className="text-[#F97316]">500+ Businesses</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7C3AED] via-[#14B8A6] to-[#F97316]" />

                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-center mb-8 last:mb-0 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-[#7C3AED] rounded-full transform -translate-x-1/2 z-10" />

                    {/* Content */}
                    <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                      <Card className="border-0 shadow-lg rounded-xl inline-block">
                        <CardContent className="p-4">
                          <div className="text-[#7C3AED] font-bold text-lg mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            {milestone.year}
                          </div>
                          <p className="text-gray-600 text-sm">{milestone.event}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 lg:py-16 bg-[#0F172A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2
                className="text-2xl sm:text-3xl font-bold text-white mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Trusted & Certified
              </h2>
              <p className="text-gray-400">Our commitment to security and excellence</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustIndicators.map((indicator) => (
                <Card key={indicator.title} className="border border-white/10 bg-white/5 rounded-xl">
                  <CardContent className="p-6 text-center">
                    <indicator.icon className="w-10 h-10 text-[#14B8A6] mx-auto mb-4" />
                    <h3 className="text-white font-semibold mb-2">{indicator.title}</h3>
                    <p className="text-gray-400 text-sm">{indicator.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 lg:py-20 bg-[#F8FAFC]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20 mb-4 rounded-lg px-4 py-1.5">
                What We Stand For
              </Badge>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Our Core Values
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 rounded-xl group">
                  <CardContent className="p-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${value.color}20` }}
                    >
                      <value.icon className="w-7 h-7" style={{ color: value.color }} />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0F172A] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] border-[#14B8A6]/20 mb-4 rounded-lg px-4 py-1.5">
                <Users className="w-3 h-3 mr-1" />
                Our Team
              </Badge>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Meet the People Behind
                <span className="text-[#7C3AED]"> Ai Auto Soft</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A passionate team of engineers, product experts, and customer success specialists dedicated to your business growth.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {teamMembers.map((member) => (
                <Card key={member.name} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 rounded-xl group">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#14B8A6] flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-lg font-semibold text-[#0F172A] text-center mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {member.name}
                    </h3>
                    <p className="text-[#7C3AED] text-sm text-center mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm text-center mb-4">{member.bio}</p>
                    <div className="flex justify-center gap-3">
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 rounded-full bg-[#0F172A]/10 flex items-center justify-center text-[#0F172A] hover:bg-[#7C3AED] hover:text-white transition-all"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-[#0F172A]/10 flex items-center justify-center text-[#0F172A] hover:bg-[#14B8A6] hover:text-white transition-all"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Transform Your"
          highlight="Business?"
          subtitle="Join 500+ Indian businesses already saving 9+ hours every week with WhatsApp automation."
          primaryCta={{ text: "Book Free Demo", href: "/home#contact" }}
          secondaryCta={{ text: "Talk to Expert", href: "https://wa.me/919203704508" }}
        />
      </main>

      <Footer />
    </div>
  );
}
