import { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/sections/PageHero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import FeatureGrid from "@/components/sections/FeatureGrid";
import WorkflowDiagram from "@/components/sections/WorkflowDiagram";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
// Icons are now passed as string names to FeatureGrid component

export const metadata: Metadata = {
  title: "Transportation & Bilty Automation | Ai Auto Soft",
  description:
    "Automate logistics communication for Busy ERP. Share bilty/LR copies instantly, track shipments in real-time, and reduce 'Where is my order?' calls by 80% with WhatsApp automation.",
  keywords: [
    "transport automation",
    "bilty automation",
    "LR copy sharing",
    "shipment tracking",
    "WhatsApp logistics",
    "Busy ERP transport",
    "POD automation",
    "delivery tracking",
    "logistics communication",
    "Indian transport",
  ],
  openGraph: {
    title: "Transportation & Bilty Automation | Ai Auto Soft",
    description:
      "Automate logistics communication. Share bilty instantly, track shipments, reduce tracking calls by 80%.",
    type: "website",
    url: "https://aiautosoft.com/transport-automation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transportation & Bilty Automation | Ai Auto Soft",
    description:
      "Automate logistics communication. Share bilty instantly, track shipments, reduce tracking calls.",
  },
  alternates: {
    canonical: "/transport-automation",
  },
};

export default function TransportAutomationPage() {
  const problemItems = [
    "Constant 'Where is my order?' calls overwhelm staff",
    "Bilty/LR copies manually shared via email",
    "No visibility into shipment location",
    "Customers anxious about delivery timing",
    "POD collection is manual and delayed",
    "Dispatch alerts sent irregularly",
  ];

  const solutionItems = [
    "Real-time tracking shared proactively via WhatsApp",
    "Bilty/LR auto-generated and sent instantly",
    "Live location updates at every checkpoint",
    "Customers informed at every step automatically",
    "Drivers upload POD photos directly via WhatsApp",
    "Automated dispatch and delivery notifications",
  ];

  const features = [
    {
      icon: "FileText",
      title: "Auto Bilty Delivery",
      description:
        "Lorry Receipt (LR) and bilty copies automatically generated from Busy and sent to customers via WhatsApp within seconds of dispatch.",
    },
    {
      icon: "MapPin",
      title: "Real-Time Tracking",
      description:
        "Share live tracking links with customers. They can check shipment location without calling your office.",
    },
    {
      icon: "Bell",
      title: "Dispatch Alerts",
      description:
        "Automatic WhatsApp notifications when orders are dispatched, including vehicle details, driver contact, and expected delivery.",
    },
    {
      icon: "Camera",
      title: "POD Collection",
      description:
        "Drivers upload proof-of-delivery photos via WhatsApp. System automatically matches to orders and archives in Busy.",
    },
    {
      icon: "Clock",
      title: "Delivery Confirmations",
      description:
        "Customers receive delivery confirmation requests via WhatsApp. Their response updates your delivery records automatically.",
    },
    {
      icon: "QrCode",
      title: "Tracking Links",
      description:
        "Generate shareable tracking links for each shipment. Customers can track their orders anytime without contacting support.",
    },
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Dispatch Entry in Busy",
      description:
        "Dispatch entry created in Busy ERP with vehicle number, transporter details, and destination information.",
      color: "#7C3AED",
    },
    {
      step: 2,
      title: "Bilty Auto-Generated",
      description:
        "System automatically generates professional bilty/LR document with all shipment details and tracking number.",
      color: "#6D28D9",
    },
    {
      step: 3,
      title: "Customer Notification",
      description:
        "Customer receives WhatsApp message with bilty copy, tracking link, driver details, and expected delivery date.",
      color: "#14B8A6",
    },
    {
      step: 4,
      title: "In-Transit Updates",
      description:
        "Automated updates at key checkpoints. Driver can send status updates via WhatsApp that sync to the system.",
      color: "#0D9488",
    },
    {
      step: 5,
      title: "Delivery & POD",
      description:
        "On delivery, driver uploads POD photo. Customer receives confirmation request. System updates Busy ERP automatically.",
      color: "#F97316",
    },
  ];

  const benefits = [
    { metric: "80%", label: "Fewer Tracking Calls", description: "Proactive updates reduce inquiries" },
    { metric: "60%", label: "Faster POD Collection", description: "Same-day POD available" },
    { metric: "24/7", label: "Tracking Access", description: "Customers track anytime" },
    { metric: "100%", label: "Bilty Delivery", description: "Instant vs hours manually" },
  ];

  const faqs = [
    {
      question: "How does bilty automation work?",
      answer:
        "When you create a dispatch entry in Busy ERP, our system automatically generates a professional bilty/LR document. The document is instantly sent to your customer via WhatsApp along with tracking information - all without manual intervention.",
    },
    {
      question: "Can customers track their shipments in real-time?",
      answer:
        "Yes, each shipment gets a unique tracking link that customers can access anytime. The link shows current status, expected delivery date, and can be configured to show live location if integrated with your transport partner's tracking system.",
    },
    {
      question: "How do drivers upload POD photos?",
      answer:
        "Drivers simply send the POD photo to your designated WhatsApp business number. Our AI system recognizes the shipment from the photo or accompanying message, matches it to the order, and archives it in your system. No app installation required for drivers.",
    },
    {
      question: "Can I customize the dispatch notification template?",
      answer:
        "Yes, you can customize the WhatsApp notification template to include your branding, specific information fields, tracking links, and contact details. We help you create templates that match your business communication style.",
    },
    {
      question: "Does this integrate with external transport companies?",
      answer:
        "Yes, the system can integrate with major transport companies' tracking APIs. If your transporter provides tracking data, we can pull that information and share consolidated updates with your customers. For non-integrated transporters, manual status updates can be sent via WhatsApp.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHero
          badge="Logistics Automation"
          title="Transportation & Bilty"
          highlight="Automation"
          subtitle="Smart logistics communication that keeps customers informed. Share bilty instantly, track shipments in real-time, and eliminate 'Where is my order?' calls."
          primaryCta={{ text: "Automate Logistics", href: "/home#contact" }}
          secondaryCta={{ text: "See It Work", href: "#workflow" }}
        />

        <ProblemSolution
          problemTitle="Logistics Communication Overload"
          problemItems={problemItems}
          solutionTitle="Automated Logistics Excellence"
          solutionItems={solutionItems}
        />

        <FeatureGrid
          title="Complete Transport Automation"
          subtitle="Everything you need to streamline logistics communication and improve customer satisfaction."
          features={features}
          columns={3}
        />

        <WorkflowDiagram
          title="How Transport Automation Works"
          subtitle="From dispatch to delivery - seamless automation at every step."
          steps={workflowSteps}
        />

        <BenefitsSection
          title="Transform Your Logistics"
          subtitle="Real impact on operations and customer satisfaction."
          benefits={benefits}
        />

        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about transport automation."
          faqs={faqs}
        />

        <CTASection
          title="Ready to Automate Your Logistics?"
          highlight="Get Started"
          subtitle="Join 500+ Indian businesses transforming logistics communication with WhatsApp automation."
          primaryCta={{ text: "Book Free Demo", href: "/home#contact" }}
          secondaryCta={{ text: "Talk to Expert", href: "https://wa.me/919203704508" }}
          variant="dark"
        />
      </main>

      <Footer />
    </div>
  );
}
