"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
  title: string;
  highlight?: string;
  subtitle: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  variant?: "light" | "dark";
}

export default function CTASection({
  title,
  highlight,
  subtitle,
  primaryCta,
  secondaryCta,
  variant = "dark",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-12 lg:py-20 ${
        isDark
          ? "bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white"
          : "bg-[#F8FAFC]"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${
            isDark ? "" : "text-[#0F172A]"
          }`}
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {title}
          {highlight && (
            <>
              {" "}
              <span className={isDark ? "text-[#14B8A6]" : "text-[#7C3AED]"}>
                {highlight}
              </span>
            </>
          )}
        </h2>

        <p
          className={`text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto px-4 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Button
            size="lg"
            className="bg-[#F97316] text-white hover:bg-[#EA580C] font-semibold px-8 py-3 rounded-lg shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40"
            asChild
          >
            <Link href={primaryCta.href}>
              {primaryCta.text}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>

          {secondaryCta && (
            <Button
              size="lg"
              variant="outline"
              className={`font-semibold px-8 py-3 rounded-lg transition-all ${
                isDark
                  ? "border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white"
                  : "border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white"
              }`}
              asChild
            >
              <Link href={secondaryCta.href}>
                <Phone className="w-4 h-4 mr-2" />
                {secondaryCta.text}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
