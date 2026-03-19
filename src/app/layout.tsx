import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ai Auto Soft | Busy ERP WhatsApp Automation for Indian Businesses",
  description: "Automate your Busy ERP workflows on WhatsApp. Recover payments 30% faster, automate shipping updates, and provide 24/7 AI-powered support. Trusted by 500+ Indian traders and manufacturers.",
  keywords: ["Ai Auto Soft", "Busy ERP", "WhatsApp Business API", "ERP automation", "payment reminders", "invoice automation", "India SME", "WhatsApp integration", "Busy accounting"],
  authors: [{ name: "Ai Auto Soft" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Ai Auto Soft | Busy ERP WhatsApp Automation",
    description: "Automate your Busy ERP workflows on WhatsApp. Recover payments 30% faster with AI-powered automation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ai Auto Soft | Busy ERP WhatsApp Automation",
    description: "Automate your Busy ERP workflows on WhatsApp. Recover payments 30% faster.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
