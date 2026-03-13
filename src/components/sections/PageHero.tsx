"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  children?: React.ReactNode;
}

export default function PageHero({
  badge,
  title,
  highlight,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
}: PageHeroProps) {
  return (
    <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 via-white to-[#14B8A6]/5 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#14B8A6]/15 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {badge && (
            <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20 mb-4 sm:mb-6 rounded-lg px-4 py-1.5 text-sm">
              {badge}
            </Badge>
          )}

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4 sm:mb-6 leading-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-[#7C3AED]">{highlight}</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            {subtitle}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              {primaryCta && (
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
              )}
              {secondaryCta && (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white font-semibold px-8 py-3 rounded-lg transition-all"
                  asChild
                >
                  <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                </Button>
              )}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
