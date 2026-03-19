"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface Benefit {
  metric: string;
  label: string;
  description?: string;
}

interface BenefitsSectionProps {
  title?: string;
  subtitle?: string;
  benefits: Benefit[];
}

export default function BenefitsSection({
  title = "Key Benefits",
  subtitle,
  benefits,
}: BenefitsSectionProps) {
  return (
    <section className="py-12 lg:py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] border-[#14B8A6]/20 mb-4 rounded-lg px-4 py-1.5">
            Benefits
          </Badge>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all group rounded-xl bg-white"
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#7C3AED] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {benefit.metric}
                </div>
                <div className="text-sm font-semibold text-[#0F172A] mb-1">
                  {benefit.label}
                </div>
                {benefit.description && (
                  <p className="text-xs text-gray-500">{benefit.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
