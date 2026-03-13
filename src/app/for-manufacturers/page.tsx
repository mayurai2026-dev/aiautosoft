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
  Factory, Package, Settings, FileText, Users, CheckCircle2,
  BarChart3, Bell, Globe, Clock, ArrowRight, Star, TrendingUp,
  Layers, Database, Wrench
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WhatsApp Automation for Manufacturers | Ai Auto Soft",
  description: "Streamline BOM management, production reporting, and job-work workflows with WhatsApp automation for Busy ERP. Keep dealers informed with real-time order updates.",
  keywords: ["manufacturing automation", "BOM management", "production reporting", "job work management", "dealer portal", "Busy ERP manufacturing", "WhatsApp manufacturing"],
  openGraph: {
    title: "WhatsApp Automation for Manufacturers",
    description: "Streamline BOM management, production reporting, and job-work workflows for manufacturers using Busy ERP WhatsApp integration.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Automation for Manufacturers | Ai Auto Soft",
    description: "BOM management, production reporting, and job-work automation for manufacturing businesses.",
  },
};

const challenges = [
  {
    icon: Layers,
    title: "Complex BOM Management",
    description: "Tracking raw materials, sub-assemblies, and finished goods across multiple production stages."
  },
  {
    icon: Users,
    title: "Dealer Communication Gap",
    description: "Delayed order confirmations and status updates leading to dealer frustration."
  },
  {
    icon: Wrench,
    title: "Job-Work Tracking",
    description: "Difficulty tracking outsourced production and maintaining quality control."
  },
  {
    icon: BarChart3,
    title: "Manual Production Reporting",
    description: "Time-consuming daily production reports and inventory reconciliation."
  }
];

const features = [
  {
    icon: "Bell",
    title: "Low Stock Alerts",
    description: "Automatic WhatsApp alerts to procurement team when raw materials hit reorder levels."
  },
  {
    icon: "Settings",
    title: "Production Status Updates",
    description: "Real-time production dashboards with live order tracking for internal teams."
  },
  {
    icon: "Globe",
    title: "Google Sheets Integration",
    description: "Sync production data to Google Sheets for custom reporting and analysis."
  },
  {
    icon: "Users",
    title: "Dealer Self-Service Portal",
    description: "Dealers check order status, stock availability, and place orders via WhatsApp."
  },
  {
    icon: "FileText",
    title: "Job-Work Workflow",
    description: "Track outsourced production with automatic updates to contractors via WhatsApp."
  },
  {
    icon: "Package",
    title: "Finished Goods Dispatch",
    description: "Auto-notify dealers with dispatch details, LR numbers, and delivery ETAs."
  }
];

const benefits = [
  { metric: "40%", label: "Faster Procurement", description: "Instant low stock alerts" },
  { metric: "50%", label: "Less Dealer Calls", description: "Self-service order tracking" },
  { metric: "30%", label: "Better Job-Work Tracking", description: "Real-time contractor updates" },
  { metric: "4 hrs", label: "Saved Daily", description: "On production reporting" }
];

export default function ForManufacturersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <PageHero
          badge="For Manufacturers"
          title="WhatsApp Automation for"
          highlight="Production Excellence"
          subtitle="Streamline BOM management, production reporting, and job-work workflows. Keep dealers informed with real-time order updates."
          primaryCta={{ text: "Book Free Demo", href: "/home#contact" }}
          secondaryCta={{ text: "See How It Works", href: "/solution" }}
        />

        {/* Challenges Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-red-100 text-red-600 border-red-200 mb-4 rounded-lg px-4 py-1.5">
                Manufacturing Challenges
              </Badge>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Production Businesses Face Unique Complexity
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Managing multi-stage production, dealer networks, and outsourced job-work creates operational complexity.
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
          title="Features Built for Manufacturing"
          subtitle="Purpose-built workflows that understand the unique needs of production and manufacturing businesses."
          features={features}
          columns={3}
        />

        {/* BOM & Production Management */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="bg-[#0F172A]/10 text-[#0F172A] border-[#0F172A]/20 mb-4 rounded-lg px-4 py-1.5">
                  Production Management
                </Badge>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  BOM & Inventory Intelligence
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Never miss a reorder point or lose track of production materials again.
                </p>
              </div>

              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="p-6 sm:p-8 lg:p-10">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Multi-Level BOM Tracking
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Track raw materials through sub-assemblies to finished goods with real-time WhatsApp alerts at every stage.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/20 flex items-center justify-center shrink-0">
                          <Bell className="w-5 h-5 text-[#7C3AED]" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#0F172A]">Low Stock Alerts</div>
                          <p className="text-sm text-gray-600">Procurement team gets instant WhatsApp alerts when materials hit reorder levels</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/20 flex items-center justify-center shrink-0">
                          <Database className="w-5 h-5 text-[#14B8A6]" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#0F172A]">Production Stage Tracking</div>
                          <p className="text-sm text-gray-600">Monitor WIP across production stages with live updates</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-[#F97316]/20 flex items-center justify-center shrink-0">
                          <Globe className="w-5 h-5 text-[#F97316]" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#0F172A]">Google Sheets Sync</div>
                          <p className="text-sm text-gray-600">Live data sync for custom production dashboards</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 sm:p-8 lg:p-10 text-white">
                    <div className="flex items-center gap-2 mb-6">
                      <Layers className="w-6 h-6" />
                      <span className="text-sm font-medium text-white/80">BOM Alert Example</span>
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-4 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[#F97316] flex items-center justify-center">
                          <Bell className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Ai Auto Soft Bot</div>
                          <div className="text-xs text-white/60">Just now</div>
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="text-sm font-semibold text-[#F97316]">⚠️ Low Stock Alert</p>
                        <p className="text-sm mt-2">
                          <strong>Raw Material:</strong> Steel Rod (SR-100)<br />
                          <strong>Current Stock:</strong> 150 units<br />
                          <strong>Reorder Level:</strong> 200 units<br />
                          <strong>Production Impact:</strong> 3 orders at risk
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white/10 rounded-xl">
                        <div className="text-2xl font-bold">40%</div>
                        <div className="text-xs text-white/70">Faster Procurement</div>
                      </div>
                      <div className="text-center p-4 bg-white/10 rounded-xl">
                        <div className="text-2xl font-bold">Zero</div>
                        <div className="text-xs text-white/70">Production Stoppages</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Job-Work Workflow */}
        <section className="py-12 lg:py-20 bg-[#F8FAFC]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20 mb-4 rounded-lg px-4 py-1.5">
                Job-Work Management
              </Badge>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                How Job-Work Automation Works
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Track outsourced production with automated updates to contractors via WhatsApp.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7C3AED] via-[#14B8A6] to-[#F97316]" />
                
                {/* Steps */}
                <div className="space-y-6 sm:space-y-8">
                  {[
                    { step: 1, title: "Job-Work Order Created", desc: "PO issued to contractor with material issue details in Busy ERP", color: "#7C3AED", icon: FileText },
                    { step: 2, title: "Material Issue Alert", desc: "Contractor receives WhatsApp notification with material details and quantities", color: "#6D28D9", icon: Package },
                    { step: 3, title: "Progress Updates", desc: "Contractor sends 'UPDATE 50%' on WhatsApp - system tracks completion", color: "#14B8A6", icon: BarChart3 },
                    { step: 4, title: "Quality Check Request", desc: "Contractor sends 'READY' - QC team gets notification for inspection", color: "#0D9488", icon: CheckCircle2 },
                    { step: 5, title: "Receipt & Payment", desc: "Goods receipt recorded, payment advice sent to accounts automatically", color: "#F97316", icon: Settings }
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
          title="Measurable Results for Manufacturers"
          subtitle="Real impact that production businesses have achieved with our automation."
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
                  Real Results from Manufacturers
                </h2>
              </div>

              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] p-6 sm:p-8 lg:p-10 text-white">
                    <div className="flex items-center gap-2 mb-4">
                      <Factory className="w-6 h-6" />
                      <span className="text-sm font-medium text-white/80">Case Study</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Precision Components Ltd
                    </h3>
                    <p className="text-white/90 mb-6">
                      A mid-sized auto component manufacturer with 50+ dealers and multiple job-work contractors.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">4 hrs/day</div>
                          <div className="text-sm text-white/70">Saved on production reports</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">50%</div>
                          <div className="text-sm text-white/70">Fewer dealer status calls</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">30%</div>
                          <div className="text-sm text-white/70">Better job-work tracking</div>
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
                      &ldquo;We used to struggle with job-work tracking and dealer communications. Now our contractors send updates via WhatsApp and dealers check order status themselves. Production planning has become much more efficient.&rdquo;
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#7C3AED]/20 flex items-center justify-center">
                        <Users className="w-6 h-6 text-[#7C3AED]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#0F172A]">Vikram Patel</div>
                        <div className="text-sm text-gray-500">MD, Precision Components Ltd</div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <Button
                        className="bg-[#7C3AED] text-white hover:bg-[#6D28D9] font-semibold rounded-lg"
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
          title="Ready to Streamline Your Manufacturing Operations?"
          highlight="Get Started Today"
          subtitle="Join leading manufacturers who have automated their production workflows and improved dealer satisfaction with Ai Auto Soft."
          primaryCta={{ text: "Book Free Demo", href: "/home#contact" }}
          secondaryCta={{ text: "Talk to Expert", href: "https://wa.me/919203704508" }}
          variant="dark"
        />
      </main>
      
      <Footer />
    </div>
  );
}
