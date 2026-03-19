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
  title: "Payment Reminders & Dunning Automation | Ai Auto Soft",
  description:
    "Accelerate collections with automated WhatsApp payment reminders. Achieve 98% open rates, reduce DSO by 30%, and recover payments faster without awkward phone calls. Perfect for Busy ERP users.",
  keywords: [
    "payment reminders",
    "dunning automation",
    "WhatsApp payment collection",
    "Busy ERP integration",
    "accounts receivable automation",
    "DSO reduction",
    "invoice reminders",
    "payment follow-up",
    "cash flow improvement",
    "Indian businesses",
  ],
  openGraph: {
    title: "Payment Reminders & Dunning Automation | Ai Auto Soft",
    description:
      "Accelerate collections with automated WhatsApp payment reminders. 98% open rate, 30% DSO reduction.",
    type: "website",
    url: "https://aiautosoft.com/payment-reminders",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payment Reminders & Dunning Automation | Ai Auto Soft",
    description:
      "Accelerate collections with automated WhatsApp payment reminders. 98% open rate, 30% DSO reduction.",
  },
  alternates: {
    canonical: "/payment-reminders",
  },
};

export default function PaymentRemindersPage() {
  const problemItems = [
    "Manual follow-ups consume 10+ hours per week",
    "Awkward phone calls strain customer relationships",
    "Inconsistent reminder timing leads to missed payments",
    "Low email open rates (avg 20%) waste effort",
    "No visibility into collection effectiveness",
    "Cash flow gaps from delayed payments",
  ];

  const solutionItems = [
    "Fully automated WhatsApp reminders save 10+ hours weekly",
    "Professional, consistent communication every time",
    "Smart timing based on invoice due dates",
    "98% open rate on WhatsApp vs 20% email",
    "Real-time analytics on delivery and engagement",
    "Faster collections improve cash flow by 30%",
  ];

  const features = [
    {
      icon: "Calendar",
      title: "Smart Scheduling",
      description:
        "Automated reminders at optimal times - 7 days before, on due date, and progressive follow-ups after overdue.",
    },
    {
      icon: "MessageSquare",
      title: "WhatsApp Delivery",
      description:
        "Send payment reminders via WhatsApp with 98% open rate. Include payment links for instant collection.",
    },
    {
      icon: "FileText",
      title: "Invoice Attachments",
      description:
        "Automatically attach PDF invoices to reminders. Customers get complete payment details instantly.",
    },
    {
      icon: "BarChart3",
      title: "Collection Analytics",
      description:
        "Track delivery rates, open rates, payment links clicked, and collection effectiveness in real-time.",
    },
    {
      icon: "Users",
      title: "Customer Segmentation",
      description:
        "Create custom reminder schedules for different customer tiers - VIP, regular, and high-risk accounts.",
    },
    {
      icon: "Zap",
      title: "Payment Links",
      description:
        "Include one-click payment links in reminders. Accept UPI, cards, and net banking for faster collection.",
    },
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Invoice Created in Busy ERP",
      description:
        "You create an invoice in Busy ERP as usual. Our integration detects the new invoice automatically.",
      color: "#7C3AED",
    },
    {
      step: 2,
      title: "Customer Data Synced",
      description:
        "Customer WhatsApp number and invoice details are securely synced to our platform.",
      color: "#6D28D9",
    },
    {
      step: 3,
      title: "Reminder Schedule Created",
      description:
        "System creates a personalized reminder schedule based on invoice due date and customer tier.",
      color: "#14B8A6",
    },
    {
      step: 4,
      title: "WhatsApp Reminder Sent",
      description:
        "Professional reminder message sent via official WhatsApp Business API with invoice attachment.",
      color: "#0D9488",
    },
    {
      step: 5,
      title: "Payment Recorded & Synced",
      description:
        "When payment is received in Busy, the system stops reminders and updates collection analytics.",
      color: "#F97316",
    },
  ];

  const benefits = [
    { metric: "98%", label: "Open Rate", description: "WhatsApp vs 20% email average" },
    { metric: "30%", label: "DSO Reduction", description: "Faster payment collection" },
    { metric: "10+", label: "Hours Saved", description: "Weekly on manual follow-ups" },
    { metric: "2x", label: "Recovery Rate", description: "On overdue accounts" },
  ];

  const faqs = [
    {
      question: "How do payment reminders integrate with Busy ERP?",
      answer:
        "Our system connects directly to your Busy ERP database. When an invoice is created, we automatically sync customer details and schedule reminders based on the due date. When payments are recorded in Busy, reminders are automatically stopped.",
    },
    {
      question: "Can I customize the reminder message templates?",
      answer:
        "Yes! You can create custom message templates for each reminder stage. Templates support variables like customer name, invoice number, amount, and due date. Our team helps you craft professional messages that maintain customer relationships.",
    },
    {
      question: "What happens if a customer doesn't have WhatsApp?",
      answer:
        "The system detects if a WhatsApp message cannot be delivered and can fall back to SMS or email notifications. You maintain visibility into delivery status for every reminder sent.",
    },
    {
      question: "How does the dunning escalation work?",
      answer:
        "You can configure escalation rules based on overdue days. For example: gentle reminder at 7 days overdue, firm notice at 15 days, and escalation to collection team at 30 days. Each stage can have different message tones and urgency levels.",
    },
    {
      question: "Is this compliant with WhatsApp Business policies?",
      answer:
        "Absolutely. We use the official WhatsApp Business API and all messages are sent through pre-approved templates. This ensures high deliverability and compliance with WhatsApp's policies. Your business can also qualify for the green tick verification.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHero
          badge="Payment Automation"
          title="Automated Payment Reminders"
          highlight="& Dunning"
          subtitle="Accelerate collections without awkward phone calls. Achieve 98% open rates on WhatsApp and reduce your Days Sales Outstanding by 30%."
          primaryCta={{ text: "Start Free Trial", href: "/home#contact" }}
          secondaryCta={{ text: "Watch Demo", href: "#workflow" }}
        />

        <ProblemSolution
          problemTitle="Manual Collection Struggles"
          problemItems={problemItems}
          solutionTitle="Automated Collection Success"
          solutionItems={solutionItems}
        />

        <FeatureGrid
          title="Powerful Features for Faster Collections"
          subtitle="Everything you need to transform your accounts receivable process and improve cash flow."
          features={features}
          columns={3}
        />

        <WorkflowDiagram
          title="How Payment Reminders Work"
          subtitle="From invoice creation to payment collection - fully automated workflow."
          steps={workflowSteps}
        />

        <BenefitsSection
          title="Measurable Results"
          subtitle="Real impact on your collections and cash flow."
          benefits={benefits}
        />

        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about payment reminder automation."
          faqs={faqs}
        />

        <CTASection
          title="Ready to Accelerate Your Collections?"
          highlight="Start Free"
          subtitle="Join 500+ Indian businesses recovering payments 30% faster with WhatsApp automation."
          primaryCta={{ text: "Book Free Demo", href: "/home#contact" }}
          secondaryCta={{ text: "Talk to Expert", href: "https://wa.me/919203704508" }}
          variant="dark"
        />
      </main>

      <Footer />
    </div>
  );
}
