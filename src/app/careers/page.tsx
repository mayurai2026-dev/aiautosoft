import { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users, Heart, Zap, Globe, Coffee, Laptop, Home, Trophy,
  GraduationCap, Calendar, MapPin, Clock, Briefcase, ArrowRight,
  Code, Headphones, TrendingUp, Megaphone, CheckCircle2, Star
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Join Our Team - Ai Auto Soft",
  description: "Join Ai Auto Soft's mission to transform Indian businesses with WhatsApp automation. Explore career opportunities in engineering, sales, support, and marketing.",
  keywords: ["Ai Auto Soft careers", "SaaS jobs India", "software engineering jobs", "WhatsApp API developer", "startup careers"],
  openGraph: {
    title: "Careers at Ai Auto Soft",
    description: "Join our mission to transform Indian businesses with WhatsApp automation.",
    type: "website",
  },
};

const culturePoints = [
  {
    icon: Zap,
    title: "Innovation-Driven",
    description: "We encourage experimentation and embrace new ideas. Every team member can influence our product roadmap."
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "No silos here. Engineering, product, and customer success work closely to deliver exceptional value."
  },
  {
    icon: Heart,
    title: "Purpose & Impact",
    description: "Your work directly impacts 500+ businesses. See the difference you make in real entrepreneurs' lives."
  },
  {
    icon: Globe,
    title: "Remote-First",
    description: "Work from anywhere in India. We believe in outcomes, not hours in office chairs."
  }
];

const benefits = [
  {
    icon: Laptop,
    title: "Work Equipment",
    description: "MacBook Pro or equivalent, plus any tools you need to do your best work"
  },
  {
    icon: Home,
    title: "Remote Flexibility",
    description: "Fully remote with optional co-working space access in Noida/Delhi NCR"
  },
  {
    icon: Trophy,
    title: "Performance Bonus",
    description: "Quarterly performance bonuses and ESOPs for eligible roles"
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "₹50,000 annual budget for courses, conferences, and certifications"
  },
  {
    icon: Calendar,
    title: "Flexible PTO",
    description: "Unlimited PTO policy with mandatory 15 days off per year"
  },
  {
    icon: Coffee,
    title: "Team Events",
    description: "Quarterly offsites, hackathons, and team celebrations"
  },
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Comprehensive health insurance for you and your family"
  },
  {
    icon: Star,
    title: "Growth Path",
    description: "Clear career progression with mentorship and leadership opportunities"
  }
];

const openPositions = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
    experience: "4-6 years",
    icon: Code,
    description: "Build and scale our WhatsApp automation platform. Work with Node.js, React, PostgreSQL, and WhatsApp Business API.",
    requirements: [
      "4+ years experience with Node.js/TypeScript",
      "Strong understanding of REST APIs and webhooks",
      "Experience with PostgreSQL and Redis",
      "Familiarity with WhatsApp Business API is a plus",
      "Startup mindset and ownership attitude"
    ]
  },
  {
    id: 2,
    title: "Frontend Developer (React)",
    department: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
    experience: "2-4 years",
    icon: Code,
    description: "Create intuitive dashboards and interfaces for our customers. Focus on performance, accessibility, and user experience.",
    requirements: [
      "2+ years with React.js and TypeScript",
      "Experience with Tailwind CSS or similar frameworks",
      "Understanding of responsive design principles",
      "Knowledge of state management (Zustand/Redux)",
      "Eye for design and attention to detail"
    ]
  },
  {
    id: 3,
    title: "Customer Success Manager",
    department: "Support",
    location: "Remote (India)",
    type: "Full-time",
    experience: "3-5 years",
    icon: Headphones,
    description: "Be the voice of our customers. Help businesses maximize value from our platform and drive retention.",
    requirements: [
      "3+ years in customer success at a SaaS company",
      "Experience with B2B customers (SMB segment)",
      "Strong communication in Hindi and English",
      "Familiarity with Busy/Tally accounting software",
      "Ability to travel for customer visits"
    ]
  },
  {
    id: 4,
    title: "Technical Support Engineer",
    department: "Support",
    location: "Remote (India)",
    type: "Full-time",
    experience: "1-3 years",
    icon: Headphones,
    description: "Resolve customer issues, debug integration problems, and ensure smooth onboarding experience.",
    requirements: [
      "1+ year in technical support role",
      "Understanding of APIs and basic programming",
      "Knowledge of ERP systems (Busy, Tally)",
      "Excellent problem-solving skills",
      "Patient and empathetic communication"
    ]
  },
  {
    id: 5,
    title: "Enterprise Sales Manager",
    department: "Sales",
    location: "Delhi NCR / Remote",
    type: "Full-time",
    experience: "5-8 years",
    icon: TrendingUp,
    description: "Drive enterprise sales cycles, manage key accounts, and build relationships with large distributors and manufacturers.",
    requirements: [
      "5+ years in B2B SaaS enterprise sales",
      "Experience selling to manufacturing/distribution",
      "Track record of meeting $500K+ quotas",
      "Strong negotiation and closing skills",
      "Network in Indian trading community"
    ]
  },
  {
    id: 6,
    title: "Sales Development Representative",
    department: "Sales",
    location: "Remote (India)",
    type: "Full-time",
    experience: "0-2 years",
    icon: TrendingUp,
    description: "Generate and qualify leads, conduct demos, and support the sales team in achieving targets.",
    requirements: [
      "0-2 years experience (freshers welcome)",
      "Excellent communication in Hindi and English",
      "Comfortable with cold calling and demos",
      "Eager to learn and grow in sales",
      "Basic understanding of business software"
    ]
  },
  {
    id: 7,
    title: "Content Marketing Manager",
    department: "Marketing",
    location: "Remote (India)",
    type: "Full-time",
    experience: "3-5 years",
    icon: Megaphone,
    description: "Create compelling content that educates Indian businesses about automation. Own our blog, guides, and thought leadership.",
    requirements: [
      "3+ years in B2B content marketing",
      "Experience with SaaS or tech products",
      "Strong writing and editing skills",
      "SEO and analytics knowledge",
      "Portfolio of published content"
    ]
  },
  {
    id: 8,
    title: "Growth Marketing Specialist",
    department: "Marketing",
    location: "Remote (India)",
    type: "Full-time",
    experience: "2-4 years",
    icon: Megaphone,
    description: "Drive user acquisition through paid channels, optimize conversion funnels, and run experiments for growth.",
    requirements: [
      "2+ years in growth/performance marketing",
      "Experience with Google Ads, LinkedIn, Meta",
      "Data-driven approach to marketing",
      "A/B testing and analytics expertise",
      "Understanding of Indian SMB market"
    ]
  }
];

const departmentFilters = [
  { id: "all", name: "All Departments" },
  { id: "engineering", name: "Engineering" },
  { id: "sales", name: "Sales" },
  { id: "support", name: "Support" },
  { id: "marketing", name: "Marketing" },
];

const stats = [
  { value: "35+", label: "Team Members" },
  { value: "15", label: "Cities in India" },
  { value: "4.8/5", label: "Glassdoor Rating" },
  { value: "40%", label: "Referral Hires" },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHero
          badge="Join Our Team"
          title="Build the Future of"
          highlight="Business Automation"
          subtitle="Join a passionate team transforming how 500+ Indian businesses operate. Remote-first, impact-driven, and growing fast."
          primaryCta={{ text: "View Open Positions", href: "#positions" }}
          secondaryCta={{ text: "Our Culture", href: "#culture" }}
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

        {/* Culture Section */}
        <section id="culture" className="py-12 lg:py-20 bg-[#F8FAFC]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20 mb-4 rounded-lg px-4 py-1.5">
                <Heart className="w-3 h-3 mr-1" />
                Our Culture
              </Badge>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Why People Love Working Here
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                We're building more than a product. We're building a workplace where talented people can do their best work and grow together.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {culturePoints.map((point) => (
                <Card key={point.title} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 rounded-xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#7C3AED]/10 flex items-center justify-center mx-auto mb-4">
                      <point.icon className="w-7 h-7 text-[#7C3AED]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0F172A] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {point.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] border-[#14B8A6]/20 mb-4 rounded-lg px-4 py-1.5">
                <Star className="w-3 h-3 mr-1" />
                Benefits & Perks
              </Badge>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                We Take Care of Our Team
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="border border-gray-100 hover:border-[#7C3AED]/30 hover:shadow-lg transition-all rounded-xl">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center shrink-0">
                        <benefit.icon className="w-5 h-5 text-[#F97316]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0F172A] mb-1 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 text-xs">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial/Quote Section */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="text-5xl mb-6">&ldquo;</div>
              <p className="text-xl sm:text-2xl font-medium mb-6 leading-relaxed">
                Working at Ai Auto Soft means seeing real impact. When a customer tells us they recovered ₹10 lakhs because of a feature I built – that&apos;s unmatched satisfaction.
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                  VS
                </div>
                <div className="text-left">
                  <div className="font-semibold">Vikram Singh</div>
                  <div className="text-white/70 text-sm">Lead Engineer</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-12 lg:py-20 bg-[#F8FAFC]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <Badge className="bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20 mb-4 rounded-lg px-4 py-1.5">
                <Briefcase className="w-3 h-3 mr-1" />
                Open Positions
              </Badge>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Join Our Growing Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're looking for passionate individuals who want to make a difference in Indian businesses.
              </p>
            </div>

            {/* Department Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {departmentFilters.map((dept) => (
                <Badge
                  key={dept.id}
                  variant={dept.id === "all" ? "default" : "outline"}
                  className={`px-4 py-2 rounded-lg cursor-pointer transition-all ${
                    dept.id === "all"
                      ? "bg-[#7C3AED] text-white"
                      : "border-[#7C3AED]/30 text-[#7C3AED] hover:bg-[#7C3AED]/10"
                  }`}
                >
                  {dept.name}
                </Badge>
              ))}
            </div>

            {/* Job Cards */}
            <div className="grid gap-4 max-w-4xl mx-auto">
              {openPositions.map((job) => (
                <Card
                  key={job.id}
                  id={job.department.toLowerCase()}
                  className="border-0 shadow-lg hover:shadow-xl transition-all rounded-xl overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      {/* Job Info */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center shrink-0">
                          <job.icon className="w-6 h-6 text-[#7C3AED]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#0F172A] mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                            <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] border-0 rounded text-xs">
                              {job.department}
                            </Badge>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-3 h-3" />
                              {job.experience}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Apply Button */}
                      <Button
                        className="bg-[#F97316] text-white hover:bg-[#EA580C] font-semibold rounded-lg shadow-lg shadow-orange-500/25 shrink-0"
                        asChild
                      >
                        <a href="/home#contact">
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>

                    {/* Job Description */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-gray-600 text-sm mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.slice(0, 3).map((req, i) => (
                          <span key={i} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {req}
                          </span>
                        ))}
                        {job.requirements.length > 3 && (
                          <span className="text-xs text-[#7C3AED]">
                            +{job.requirements.length - 3} more requirements
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No matching position? */}
            <div className="text-center mt-10">
              <Card className="border-0 shadow-lg rounded-xl max-w-md mx-auto">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#0F172A] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Don't see a matching role?
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    We're always looking for talented individuals. Send us your resume!
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white font-semibold rounded-lg"
                    asChild
                  >
                    <a href="mailto:careers@aiautosoft.com">
                      Send Your Resume
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Hiring Process */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#0F172A]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Our Hiring Process
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { step: "01", title: "Apply", desc: "Submit your application through our portal or email" },
                { step: "02", title: "Screening", desc: "Quick call with our HR team to understand your background" },
                { step: "03", title: "Assessment", desc: "Technical or case study relevant to the role" },
                { step: "04", title: "Team Fit", desc: "Meet the team and ensure mutual fit" }
              ].map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="text-4xl font-bold text-[#7C3AED]/20 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-6 right-0 w-1/2 h-0.5 bg-gradient-to-r from-[#7C3AED]/30 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Build the"
          highlight="Future?"
          subtitle="Join our team and help transform how Indian businesses operate. Your next adventure starts here."
          primaryCta={{ text: "View All Positions", href: "#positions" }}
          secondaryCta={{ text: "Talk to HR", href: "https://wa.me/919203704508" }}
        />
      </main>

      <Footer />
    </div>
  );
}
