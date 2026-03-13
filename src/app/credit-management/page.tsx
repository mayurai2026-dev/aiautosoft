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
  title: "Credit Line & Approval Management | Ai Auto Soft",
  description:
    "Proactive credit risk management for Busy ERP. Get instant alerts when customers hit credit limits, automate approval workflows, and prevent bad debts before they happen.",
  keywords: [
    "credit management",
    "credit limit monitoring",
    "credit approval workflow",
    "Busy ERP credit control",
    "bad debt prevention",
    "credit risk management",
    "aging analysis",
    "customer credit limit",
    "credit exposure tracking",
    "Indian SME credit",
  ],
  openGraph: {
    title: "Credit Line & Approval Management | Ai Auto Soft",
    description:
      "Proactive credit risk management. Instant alerts on limit breaches, automated approvals, prevent bad debts.",
    type: "website",
    url: "https://aiautosoft.com/credit-management",
  },
  twitter: {
    card: "summary_large_image",
    title: "Credit Line & Approval Management | Ai Auto Soft",
    description:
      "Proactive credit risk management. Instant alerts, automated approvals, prevent bad debts.",
  },
  alternates: {
    canonical: "/credit-management",
  },
};

export default function CreditManagementPage() {
  const problemItems = [
    "Orders processed without credit limit checks",
    "Late discovery of customer credit overruns",
    "Manual approval delays slow down sales",
    "No visibility into aging receivables",
    "Sales team unaware of customer credit status",
    "Bad debts discovered only after they occur",
  ];

  const solutionItems = [
    "Real-time credit limit monitoring on every order",
    "Instant alerts when limits are approached",
    "Automated multi-level approval workflows",
    "Live aging analysis with proactive alerts",
    "Sales team gets credit status notifications",
    "Prevent bad debts before they happen",
  ];

  const features = [
    {
      icon: "Shield",
      title: "Real-Time Limit Monitoring",
      description:
        "Monitor customer credit exposure in real-time. Get alerts when customers approach or exceed their credit limits.",
    },
    {
      icon: "Bell",
      title: "Instant Breach Alerts",
      description:
        "Receive immediate WhatsApp notifications when a customer hits their credit limit or a risky order is placed.",
    },
    {
      icon: "Lock",
      title: "Order Blocking",
      description:
        "Automatically block orders that exceed credit limits pending approval. Prevent overexposure before it happens.",
    },
    {
      icon: "Users",
      title: "Multi-Level Approvals",
      description:
        "Route credit approvals through appropriate managers based on amount thresholds. Track approval history.",
    },
    {
      icon: "BarChart3",
      title: "Aging Analysis",
      description:
        "Real-time aging reports with proactive alerts on overdue accounts. Spot collection risks early.",
    },
    {
      icon: "TrendingDown",
      title: "Risk Scoring",
      description:
        "AI-powered customer risk scores based on payment history, aging patterns, and credit utilization.",
    },
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Order Placed in Busy ERP",
      description:
        "Sales team creates a new sales order in Busy ERP as part of their regular workflow.",
      color: "#7C3AED",
    },
    {
      step: 2,
      title: "Credit Check Triggered",
      description:
        "System automatically checks customer's current outstanding against their credit limit.",
      color: "#6D28D9",
    },
    {
      step: 3,
      title: "Decision Engine Evaluates",
      description:
        "Based on rules: within limit → approve, near limit → warn, over limit → hold for approval.",
      color: "#14B8A6",
    },
    {
      step: 4,
      title: "Alerts Sent",
      description:
        "Relevant stakeholders receive WhatsApp alerts with order details and credit status.",
      color: "#0D9488",
    },
    {
      step: 5,
      title: "Approval & Processing",
      description:
        "Manager approves/rejects via WhatsApp link. Approved orders proceed, blocked orders notify sales team.",
      color: "#F97316",
    },
  ];

  const benefits = [
    { metric: "90%", label: "Bad Debt Reduction", description: "Prevent risky exposures" },
    { metric: "5min", label: "Approval Time", description: "Down from hours or days" },
    { metric: "100%", label: "Visibility", description: "Real-time credit status" },
    { metric: "0", label: "Overrun Orders", description: "Caught before processing" },
  ];

  const faqs = [
    {
      question: "How does credit limit monitoring work?",
      answer:
        "Our system continuously monitors your customers' outstanding balances against their assigned credit limits in Busy ERP. When an order would cause a customer to approach or exceed their limit, the system triggers alerts and can hold the order for approval.",
    },
    {
      question: "Can I customize approval workflows?",
      answer:
        "Yes, you can create multi-level approval workflows based on criteria like amount thresholds, customer risk category, or sales region. For example, orders over ₹1 lakh might require sales manager approval, while orders over ₹5 lakh need finance approval too.",
    },
    {
      question: "What happens when a customer exceeds their limit?",
      answer:
        "You can configure the response: send an alert to the sales team, automatically hold the order for approval, notify the finance team, or block further orders until payment is received. The choice depends on your business policies.",
    },
    {
      question: "How does aging analysis help prevent bad debts?",
      answer:
        "Our aging analysis provides real-time visibility into overdue accounts by customer, amount, and days overdue. Proactive alerts notify you when customers have significant aging, allowing early intervention before accounts become uncollectible.",
    },
    {
      question: "Can sales team view credit status before taking orders?",
      answer:
        "Yes, sales team can query customer credit status via WhatsApp before placing orders. They can send a simple command like 'Credit <customer name>' and instantly see available credit, outstanding amount, and payment history.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHero
          badge="Risk Management"
          title="Credit Line & Approval"
          highlight="Management"
          subtitle="Proactive credit controls that prevent bad debts before they happen. Real-time monitoring, instant alerts, and automated approval workflows."
          primaryCta={{ text: "Start Protecting", href: "/home#contact" }}
          secondaryCta={{ text: "Learn More", href: "#workflow" }}
        />

        <ProblemSolution
          problemTitle="Credit Control Challenges"
          problemItems={problemItems}
          solutionTitle="Proactive Credit Protection"
          solutionItems={solutionItems}
        />

        <FeatureGrid
          title="Complete Credit Control Features"
          subtitle="Everything you need to manage credit risk and protect your business."
          features={features}
          columns={3}
        />

        <WorkflowDiagram
          title="How Credit Management Works"
          subtitle="From order placement to approval - automated credit control."
          steps={workflowSteps}
        />

        <BenefitsSection
          title="Protect Your Business"
          subtitle="Measurable impact on credit risk and collection efficiency."
          benefits={benefits}
        />

        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about credit management automation."
          faqs={faqs}
        />

        <CTASection
          title="Ready to Eliminate Credit Risks?"
          highlight="Get Protected"
          subtitle="Join 500+ Indian businesses preventing bad debts with proactive credit management."
          primaryCta={{ text: "Book Free Demo", href: "/home#contact" }}
          secondaryCta={{ text: "Talk to Expert", href: "https://wa.me/919203704508" }}
          variant="dark"
        />
      </main>

      <Footer />
    </div>
  );
}
