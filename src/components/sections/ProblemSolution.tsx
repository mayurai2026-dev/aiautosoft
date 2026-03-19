"use client";

import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, X, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProblemSolutionProps {
  problemTitle: string;
  problemItems: string[];
  solutionTitle: string;
  solutionItems: string[];
}

export default function ProblemSolution({
  problemTitle,
  problemItems,
  solutionTitle,
  solutionItems,
}: ProblemSolutionProps) {
  return (
    <section className="py-12 lg:py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20 mb-4 rounded-lg px-4 py-1.5">
            The Transformation
          </Badge>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0F172A]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            From Chaos to Clarity
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Problem Card */}
          <Card className="border-red-200 bg-red-50/50 shadow-lg">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex items-center gap-2 text-red-600 mb-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium">WITHOUT AUTOMATION</span>
              </div>
              <CardTitle className="text-lg sm:text-xl text-[#0F172A]">{problemTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
              {problemItems.map((item, i) => (
                <div key={i} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-2 h-2 sm:w-3 sm:h-3 text-red-600" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Solution Card */}
          <Card className="border-[#14B8A6] bg-[#14B8A6]/10 shadow-lg">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex items-center gap-2 text-[#14B8A6] mb-2">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium">WITH AUTOMATION</span>
              </div>
              <CardTitle className="text-lg sm:text-xl text-[#0F172A]">{solutionTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
              {solutionItems.map((item, i) => (
                <div key={i} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#14B8A6] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
