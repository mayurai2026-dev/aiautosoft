"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, ArrowRight } from "lucide-react";

interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  color?: string;
}

interface WorkflowDiagramProps {
  title?: string;
  subtitle?: string;
  steps: WorkflowStep[];
}

export default function WorkflowDiagram({
  title,
  subtitle,
  steps,
}: WorkflowDiagramProps) {
  const defaultColors = ["#7C3AED", "#6D28D9", "#14B8A6", "#0D9488", "#F97316"];

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-8 sm:mb-12">
            {title && (
              <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20 mb-4 rounded-lg px-4 py-1.5">
                How It Works
              </Badge>
            )}
            {title && (
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7C3AED] via-[#14B8A6] to-[#F97316]" />

            {/* Steps */}
            <div className="space-y-6 sm:space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.step}
                  className="relative flex items-start gap-4 sm:gap-6 pl-10 sm:pl-20"
                >
                  <div
                    className="absolute left-0 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg"
                    style={{
                      backgroundColor: step.color || defaultColors[index % defaultColors.length],
                    }}
                  >
                    {step.step}
                  </div>
                  <Card className="flex-1 border-0 shadow-md rounded-xl hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="font-semibold text-[#0F172A] mb-1 sm:mb-2 text-sm sm:text-base">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
