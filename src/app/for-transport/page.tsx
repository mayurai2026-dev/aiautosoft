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
  Phone, MapPin, FileText, Package, Download, CheckCircle2, Users,
  Wrench, Clock, Truck, TrendingUp, Star, ArrowRight, QrCode, BarChart3, Route
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WhatsApp Automation for Transport & Logistics | Ai Auto Soft",
  description: "Automate shipment tracking, fleet management, and POD collection via WhatsApp. Improve logistics visibility by 25% and reduce 'Where is my order?' calls by 80%.",
  keywords: ["transport automation", "logistics WhatsApp", "fleet management", "POD automation", "bilty automation", "shipment tracking", "Busy ERP transport"],
  openGraph: {
    title: "WhatsApp Automation for Transport & Logistics",
    description: "Automate shipment tracking, bilty delivery, and POD collection for logistics businesses using Busy ERP WhatsApp integration.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Automation for Transport | Ai Auto Soft",
    description: "Fleet uptime, preventive maintenance, and 25% logistics visibility improvement for transport businesses.",
  },
};

const challenges = [
  {
    icon: Phone,
    title: "Endless Status Calls",
    description: "Customers constantly calling 'Where is my order?' creating a support nightmare."
  },
  {
    icon: MapPin,
    title: "Limited Fleet Visibility",
    description: "No real-time tracking of vehicles, drivers, and shipment status across routes."
  },
  {
    icon: FileText,
    title: "Manual Bilty Distribution",
    description: "Printing LR copies and manually sharing with customers and consignees."
  },
  {
    icon: Wrench,
    title: "Reactive Maintenance",
    description: "Vehicle breakdowns causing delays and expensive emergency repairs."
  }
];

const features = [
  {
    icon: "Truck",
    title: "Real-Time Shipment Tracking",
    description: "Customers track shipments via WhatsApp with live location updates and ETAs."
  },
  {
    icon: "FileText",
    title: "Automated Bilty Delivery",
    description: "LR copies and consignment notes sent instantly to customers via WhatsApp."
  },
  {
    icon: "Download",
    title: "POD Collection Automation",
    description: "Drivers upload proof-of-delivery photos through WhatsApp, auto-shared with customers."
  },
  {
    icon: "Wrench",
    title: "Preventive Maintenance Alerts",
    description: "Automated service reminders based on kilometers, days, or engine hours."
  },
  {
    icon: "Calendar",
    title: "Delivery Slot Booking",
    description: "Customers book and confirm delivery slots directly through WhatsApp chat."
  },
  {
    icon: "BarChart3",
    title: "Fleet Performance Dashboard",
    description: "Track vehicle uptime, fuel efficiency, and on-time delivery rates in real-time."
  }
];

const benefits = [
  { metric: "25%", label: "Better Visibility", description: "Real-time fleet and shipment tracking" },
  { metric: "80%", label: "Fewer Status Calls", description: "Self-service tracking via WhatsApp" },
  { metric: "15%", label: "Higher Fleet Uptime", description: "Preventive maintenance alerts" },
  { metric: "50%", label: "Faster POD Collection", description: "Digital proof-of-delivery" }
];

export default function ForTransportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <PageHero
          badge="For Transport & Logistics"
          title="WhatsApp Automation for"
          highlight="Modern Fleet Operations"
          subtitle="Automate shipment tracking, bilty delivery, and POD collection. Reduce 'Where is my order?' calls by 80% with real-time WhatsApp updates."
          primaryCta={{ text: "Book Free Demo", href: "/home#contact" }}
          secondaryCta={{ text: "See How It Works", href: "/solution" }}
        />

        {/* Challenges Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-red-100 text-red-600 border-red-200 mb-4 rounded-lg px-4 py-1.5">
                Industry Challenges
              </Badge>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Transport Businesses Face Operational Chaos
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Managing fleets, tracking shipments, and keeping customers informed creates constant pressure on operations teams.
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
          title="Features Built for Transport"
          subtitle="Purpose-built workflows that understand the unique needs of logistics and fleet management businesses."
          features={features}
          columns={3}
        />

        {/* Workflow Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] border-[#14B8A6]/20 mb-4 rounded-lg px-4 py-1.5">
                Transport Workflow
              </Badge>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                How It Works for Transporters
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From booking to delivery confirmation, automate every touchpoint with customers and drivers.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#14B8A6] via-[#7C3AED] to-[#F97316]" />
                
                {/* Steps */}
                <div className="space-y-6 sm:space-y-8">
                  {[
                    { step: 1, title: "Booking Created in Busy ERP", desc: "Consignment booked with pickup and delivery details, LR number generated", color: "#14B8A6", icon: Package },
                    { step: 2, title: "Bilty Auto-Sent on WhatsApp", desc: "Customer receives LR copy and tracking link instantly via WhatsApp", color: "#0D9488", icon: FileText },
                    { step: 3, title: "Real-Time Tracking Updates", desc: "Customers send 'Track' to get live location, ETA, and status updates", color: "#7C3AED", icon: MapPin },
                    { step: 4, title: "Driver POD Upload", desc: "Driver uploads delivery photo and signature via WhatsApp at drop location", color: "#6D28D9", icon: Download },
                    { step: 5, title: "Delivery Confirmation", desc: "Customer receives POD copy and delivery confirmation automatically", color: "#F97316", icon: CheckCircle2 }
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
          title="Measurable Results for Transport"
          subtitle="Real impact that logistics businesses have achieved with our automation."
          benefits={benefits}
        />

        {/* Fleet Management Feature Card */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="p-6 sm:p-8 lg:p-10">
                    <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] border-[#14B8A6]/20 mb-4 rounded-lg px-4 py-1.5">
                      Fleet Management
                    </Badge>
                    <h3
                      className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-4"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Preventive Maintenance & Fleet Uptime
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Move from reactive to proactive fleet management with automated service reminders and real-time vehicle health tracking.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/20 flex items-center justify-center shrink-0">
                          <Wrench className="w-5 h-5 text-[#14B8A6]" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#0F172A]">Service Reminders</div>
                          <p className="text-sm text-gray-600">Auto-alerts based on km, days, or engine hours</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/20 flex items-center justify-center shrink-0">
                          <Route className="w-5 h-5 text-[#7C3AED]" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#0F172A]">Route Deviation Alerts</div>
                          <p className="text-sm text-gray-600">Instant notifications for unauthorized route changes</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-[#F97316]/20 flex items-center justify-center shrink-0">
                          <BarChart3 className="w-5 h-5 text-[#F97316]" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#0F172A]">Performance Analytics</div>
                          <p className="text-sm text-gray-600">Track uptime, fuel efficiency, and on-time rates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#14B8A6] to-[#0D9488] p-6 sm:p-8 lg:p-10 text-white">
                    <div className="flex items-center gap-2 mb-6">
                      <QrCode className="w-6 h-6" />
                      <span className="text-sm font-medium text-white/80">Driver App Alternative</span>
                    </div>
                    
                    <h4 className="text-lg font-bold mb-4">No App Installation Needed</h4>
                    <p className="text-white/90 mb-6">
                      Drivers don&apos;t need to install any app. Everything works through WhatsApp - POD uploads, status updates, and trip reporting.
                    </p>
                    
                    <div className="bg-white/10 rounded-xl p-4 mb-6">
                      <div className="text-sm text-white/70 mb-2">Driver sends on WhatsApp:</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-white/20 text-white border-0">DELIVERED</Badge>
                        <Badge className="bg-white/20 text-white border-0">DELAY</Badge>
                        <Badge className="bg-white/20 text-white border-0">ISSUE</Badge>
                        <Badge className="bg-white/20 text-white border-0">FUEL</Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white/10 rounded-xl">
                        <div className="text-2xl font-bold">15%</div>
                        <div className="text-xs text-white/70">Higher Uptime</div>
                      </div>
                      <div className="text-center p-4 bg-white/10 rounded-xl">
                        <div className="text-2xl font-bold">30%</div>
                        <div className="text-xs text-white/70">Lower Breakdowns</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-12 lg:py-20 bg-[#F8FAFC]">
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
                  Real Results from Transport Businesses
                </h2>
              </div>

              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="bg-gradient-to-br from-[#14B8A6] to-[#0D9488] p-6 sm:p-8 lg:p-10 text-white">
                    <div className="flex items-center gap-2 mb-4">
                      <Truck className="w-6 h-6" />
                      <span className="text-sm font-medium text-white/80">Case Study</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      XYZ Transport Company
                    </h3>
                    <p className="text-white/90 mb-6">
                      A leading full-truckload carrier operating 150+ vehicles across North India with 200+ daily shipments.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">80%</div>
                          <div className="text-sm text-white/70">Reduction in status calls</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">2 hrs/day</div>
                          <div className="text-sm text-white/70">Saved on POD coordination</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">25%</div>
                          <div className="text-sm text-white/70">Better logistics visibility</div>
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
                      &ldquo;Our operations team was drowning in status calls. Now customers track their shipments on WhatsApp and get automatic updates. POD collection used to take days - now it&apos;s instant. This has transformed our operations.&rdquo;
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#14B8A6]/20 flex items-center justify-center">
                        <Users className="w-6 h-6 text-[#14B8A6]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#0F172A]">Suresh Sharma</div>
                        <div className="text-sm text-gray-500">Owner, XYZ Transport</div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <Button
                        className="bg-[#14B8A6] text-white hover:bg-[#0D9488] font-semibold rounded-lg"
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
          title="Ready to Modernize Your Transport Operations?"
          highlight="Start Today"
          subtitle="Join leading transport companies who have automated their operations and improved customer satisfaction with Ai Auto Soft."
          primaryCta={{ text: "Book Free Demo", href: "/home#contact" }}
          secondaryCta={{ text: "Talk to Expert", href: "https://wa.me/919203704508" }}
          variant="dark"
        />
      </main>
      
      <Footer />
    </div>
  );
}
