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
  title: "24/7 ERP Chatbot for Customer Self-Service | Ai Auto Soft",
  description:
    "Deploy a conversational AI chatbot on WhatsApp for your Busy ERP. Enable customers to check balances, download ledgers, track orders, and check stock 24/7. Reduce support calls by 84%.",
  keywords: [
    "ERP chatbot",
    "WhatsApp chatbot",
    "customer self-service",
    "Busy ERP integration",
    "AI chatbot",
    "conversational ERP",
    "balance inquiry bot",
    "stock check WhatsApp",
    "order tracking bot",
    "24/7 customer support",
  ],
  openGraph: {
    title: "24/7 ERP Chatbot for Customer Self-Service | Ai Auto Soft",
    description:
      "Deploy a conversational AI chatbot on WhatsApp. Customers check balances, orders, stock 24/7.",
    type: "website",
    url: "https://aiautosoft.com/erp-chatbot",
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 ERP Chatbot for Customer Self-Service | Ai Auto Soft",
    description:
      "Deploy a conversational AI chatbot on WhatsApp. Customers check balances, orders, stock 24/7.",
  },
  alternates: {
    canonical: "/erp-chatbot",
  },
};

export default function ERPChatbotPage() {
  const problemItems = [
    "Customer calls consume hours of staff time daily",
    "After-hours queries go unanswered until next day",
    "Simple balance inquiries take 10+ minutes each",
    "Staff overwhelmed with repetitive questions",
    "No instant access to ledger and order status",
    "Customers frustrated by wait times",
  ];

  const solutionItems = [
    "Chatbot handles 84% of queries automatically",
    "24/7 instant responses - even on weekends",
    "Balance, ledger, stock, orders in seconds",
    "Staff freed for high-value customer interactions",
    "PDF statements delivered instantly on demand",
    "Happy customers with zero wait time",
  ];

  const features = [
    {
      icon: "MessageCircle",
      title: "Balance Inquiry",
      description:
        "Customers send 'Balance' and instantly receive their outstanding amount with recent transactions summary.",
    },
    {
      icon: "FileText",
      title: "Ledger Download",
      description:
        "Request 'Ledger' and get a complete PDF account statement delivered in seconds - no waiting for staff.",
    },
    {
      icon: "Package",
      title: "Stock Availability",
      description:
        "Check real-time stock levels for any item. Send item name or code and get instant availability status.",
    },
    {
      icon: "ShoppingCart",
      title: "Order Tracking",
      description:
        "Track order status, dispatch details, and expected delivery dates. Full visibility without calling support.",
    },
    {
      icon: "BarChart3",
      title: "Analytics Dashboard",
      description:
        "Track chatbot performance, popular queries, peak hours, and customer satisfaction metrics.",
    },
    {
      icon: "Users",
      title: "Multi-Language Support",
      description:
        "Serve customers in Hindi, English, and regional languages. Auto-detect language and respond appropriately.",
    },
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Customer Sends Query",
      description:
        "Customer opens WhatsApp and sends a simple message like 'Balance', 'Stock', 'Order', or 'Ledger'.",
      color: "#7C3AED",
    },
    {
      step: 2,
      title: "AI Processes Request",
      description:
        "Our NLP engine understands the intent and extracts relevant parameters like item codes or date ranges.",
      color: "#6D28D9",
    },
    {
      step: 3,
      title: "Busy ERP Lookup",
      description:
        "System queries your Busy ERP database in real-time to fetch the requested information securely.",
      color: "#14B8A6",
    },
    {
      step: 4,
      title: "Response Generated",
      description:
        "Information is formatted into a clear, professional response. PDFs generated for ledger requests.",
      color: "#0D9488",
    },
    {
      step: 5,
      title: "Instant WhatsApp Reply",
      description:
        "Customer receives the response within seconds - 24/7, 365 days a year, with zero wait time.",
      color: "#F97316",
    },
  ];

  const benefits = [
    { metric: "84%", label: "Query Automation", description: "Handled without staff intervention" },
    { metric: "24/7", label: "Availability", description: "Round-the-clock customer service" },
    { metric: "10x", label: "Faster Response", description: "Seconds vs minutes on calls" },
    { metric: "0", label: "Wait Time", description: "Instant answers every time" },
  ];

  const faqs = [
    {
      question: "What queries can the chatbot handle?",
      answer:
        "The chatbot handles common customer queries including: outstanding balance, account statements, ledger downloads, stock availability, order status, dispatch details, and recent transactions. Custom queries can be added based on your business needs.",
    },
    {
      question: "How accurate is the chatbot's response?",
      answer:
        "The chatbot queries your live Busy ERP database, so responses are 100% accurate and real-time. There's no cached or outdated information - every response reflects current ERP data.",
    },
    {
      question: "Can customers place orders through the chatbot?",
      answer:
        "Yes, the chatbot can be configured to accept orders. Customers can browse stock, select items, specify quantities, and submit orders via WhatsApp. Orders sync directly to Busy ERP for processing.",
    },
    {
      question: "What if the chatbot can't answer a question?",
      answer:
        "For complex queries the chatbot can't handle, it seamlessly escalates to your support team. The conversation history is preserved, so your team has full context when they take over.",
    },
    {
      question: "Is customer data secure?",
      answer:
        "Absolutely. We use end-to-end encryption for all communications. Customer verification ensures only authorized parties can access account information. All data is stored in secure, SOC 2 compliant infrastructure.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHero
          badge="AI-Powered Support"
          title="24/7 ERP Chatbot for"
          highlight="Customer Self-Service"
          subtitle="Let customers check balances, download ledgers, track orders, and check stock - all via WhatsApp. No wait times, no after-hours gaps."
          primaryCta={{ text: "Deploy Chatbot", href: "/home#contact" }}
          secondaryCta={{ text: "Try Live Demo", href: "https://wa.me/919203704508" }}
        />

        <ProblemSolution
          problemTitle="Customer Support Overload"
          problemItems={problemItems}
          solutionTitle="Automated Customer Success"
          solutionItems={solutionItems}
        />

        <FeatureGrid
          title="Conversational ERP Features"
          subtitle="Turn WhatsApp into a powerful self-service portal for your customers."
          features={features}
          columns={3}
        />

        <WorkflowDiagram
          title="How the ERP Chatbot Works"
          subtitle="From customer query to instant answer - seamless automation."
          steps={workflowSteps}
        />

        <BenefitsSection
          title="Transform Your Customer Support"
          subtitle="Real metrics from businesses using our ERP chatbot."
          benefits={benefits}
        />

        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our ERP chatbot solution."
          faqs={faqs}
        />

        <CTASection
          title="Ready to Deploy Your 24/7 Chatbot?"
          highlight="Get Started"
          subtitle="Join 500+ Indian businesses automating customer support with AI-powered WhatsApp chatbot."
          primaryCta={{ text: "Book Free Demo", href: "/home#contact" }}
          secondaryCta={{ text: "Talk to Expert", href: "https://wa.me/919203704508" }}
          variant="dark"
        />
      </main>

      <Footer />
    </div>
  );
}
