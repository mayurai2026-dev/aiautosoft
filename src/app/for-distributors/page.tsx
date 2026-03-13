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
  Warehouse, Users, FileText, CreditCard, ShoppingCart, CheckCircle2,
  Building2, Truck, Clock, TrendingUp, Star, ArrowRight, Phone
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WhatsApp Automation for Distributors & Wholesalers | Ai Auto Soft",
  description: "Streamline multi-location inventory, automate payment reminders, and empower your sales team with real-time stock visibility via WhatsApp. Trusted by 500+ Indian distributors.",
  keywords: ["distributor automation", "wholesale WhatsApp", "inventory management", "multi-location stock", "sales team automation", "Busy ERP distributor", "payment reminders wholesale"],
  openGraph: {
    title: "WhatsApp Automation for Distributors & Wholesalers",
    description: "Streamline multi-location inventory and automate payment reminders for distributors using Busy ERP WhatsApp integration.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Automation for Distributors | Ai Auto Soft",
    description: "Multi-location inventory visibility, sales team automation, and 20% fuel reduction for distributors.",
  },
};

const challenges = [
  {
    icon: Warehouse,
    title: "Multi-Location Inventory Blind Spots",
    description: "Lack of real-time visibility across warehouses leads to stockouts and missed sales opportunities."
  },
  {
    icon: Users,
    title: "Sales Team Information Gap",
    description: "Field sales teams struggle to access updated stock levels and pricing on the go."
  },
  {
    icon: FileText,
    title: "Manual Invoice Distribution",
    description: "Hours spent printing, scanning, and emailing invoices to hundreds of customers daily."
  },
  {
    icon: CreditCard,
    title: "Payment Collection Delays",
    description: "Awkward follow-up calls and missed payment deadlines affecting cash flow."
  }
];

const features = [
  {
    icon: "Warehouse",
    title: "Multi-Location Inventory Sync",
    description: "Real-time stock visibility across all warehouses with instant WhatsApp alerts on low stock."
  },
  {
    icon: "Phone",
    title: "Sales Team Mobile Access",
    description: "Field teams check stock, create orders, and share invoices directly via WhatsApp on the go."
  },
  {
    icon: "FileText",
    title: "Bill-by-Bill Ledger Sharing",
    description: "Customers get detailed account statements instantly by sending 'Ledger' on WhatsApp."
  },
  {
    icon: "Bell",
    title: "Bulk Broadcast Campaigns",
    description: "Announce new schemes, products, and offers to thousands of customers with a single click."
  },
  {
    icon: "BarChart3",
    title: "Sales Analytics Dashboard",
    description: "Track performance by region, product, and sales agent with live Google Sheets sync."
  },
  {
    icon: "Package",
    title: "Auto Order Confirmation",
    description: "Instant WhatsApp acknowledgment when orders are placed, with delivery timeline updates."
  }
];

const benefits = [
  { metric: "20%", label: "Fuel Cost Reduction", description: "Optimized delivery routes based on order data" },
  { metric: "35%", label: "Faster Collections", description: "Automated payment reminders" },
  { metric: "84%", label: "Fewer Support Calls", description: "24/7 self-service via WhatsApp" },
  { metric: "2x", label: "Sales Team Productivity", description: "Real-time info on mobile" }
];

export default function ForDistributorsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <PageHero
          badge="For Distributors & Wholesalers"
          title="WhatsApp Automation Built for"
          highlight="High-Volume Distribution"
          subtitle="Streamline multi-location inventory, empower your sales team with real-time stock data, and automate payment collections — all through WhatsApp."
          primaryCta={{ text: "Book Free Demo", href: "/home#contact" }}
          secondaryCta={{ text: "See How It Works", href: "/solution" }}
        />

        {/* Challenges Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-red-100 text-red-600 border-red-200 mb-4 rounded-lg px-4 py-1.5">
                Common Challenges
              </Badge>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Distribution Businesses Face Unique Hurdles
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Managing hundreds of customers, multiple warehouses, and field sales teams creates operational complexity.
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
          title="Features Built for Distributors"
          subtitle="Purpose-built workflows that understand the unique needs of wholesale and distribution businesses."
          features={features}
          columns={3}
        />

        {/* Workflow Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20 mb-4 rounded-lg px-4 py-1.5">
                Distribution Workflow
              </Badge>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                How It Works for Distributors
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From order to delivery, automate every customer touchpoint through WhatsApp.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7C3AED] via-[#14B8A6] to-[#F97316]" />
                
                {/* Steps */}
                <div className="space-y-6 sm:space-y-8">
                  {[
                    { step: 1, title: "Customer Places Order", desc: "Sales agent creates order in Busy ERP, or customer orders via WhatsApp bot", color: "#7C3AED", icon: ShoppingCart },
                    { step: 2, title: "Instant Order Confirmation", desc: "Customer receives WhatsApp confirmation with items, pricing, and expected delivery", color: "#6D28D9", icon: CheckCircle2 },
                    { step: 3, title: "Multi-Location Stock Check", desc: "System automatically checks stock across all warehouses and allocates inventory", color: "#14B8A6", icon: Warehouse },
                    { step: 4, title: "Invoice Auto-Delivery", desc: "PDF invoice generated and sent via WhatsApp with payment link", color: "#0D9488", icon: FileText },
                    { step: 5, title: "Payment Reminder Sequence", desc: "Automated reminders at 7 days before, on due date, and post-due", color: "#F97316", icon: CreditCard }
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
          title="Measurable Results for Distributors"
          subtitle="Real impact that distribution businesses have achieved with our automation."
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
                  Real Results from Real Distributors
                </h2>
              </div>

              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="bg-gradient-to-br from-[#7C3AED] to-[#14B8A6] p-6 sm:p-8 lg:p-10 text-white">
                    <div className="flex items-center gap-2 mb-4">
                      <Building2 className="w-6 h-6" />
                      <span className="text-sm font-medium text-white/80">Case Study</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      ABC Distributors Pvt Ltd
                    </h3>
                    <p className="text-white/90 mb-6">
                      A leading FMCG distributor in North India with 3 warehouses and 500+ retail customers.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">9 hrs/week</div>
                          <div className="text-sm text-white/70">Saved on manual invoicing</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">₹15L/month</div>
                          <div className="text-sm text-white/70">Faster payment collections</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Truck className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">20%</div>
                          <div className="text-sm text-white/70">Fuel cost reduction</div>
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
                      &ldquo;Earlier, our sales team had to call the office multiple times a day to check stock. Now they just message on WhatsApp and get instant updates. Payment reminders have also improved our cash flow significantly.&rdquo;
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#7C3AED]/20 flex items-center justify-center">
                        <Users className="w-6 h-6 text-[#7C3AED]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#0F172A]">Rajesh Kumar</div>
                        <div className="text-sm text-gray-500">Director, ABC Distributors</div>
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
          title="Ready to Transform Your Distribution Business?"
          highlight="Get Started Today"
          subtitle="Join 500+ Indian distributors who have automated their operations and improved cash flow with Ai Auto Soft."
          primaryCta={{ text: "Book Free Demo", href: "/home#contact" }}
          secondaryCta={{ text: "Talk to Expert", href: "https://wa.me/919203704508" }}
          variant="dark"
        />
      </main>
      
      <Footer />
    </div>
  );
}
