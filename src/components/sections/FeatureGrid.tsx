"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Bell,
  Lock,
  Users,
  BarChart3,
  TrendingDown,
  Clock,
  FileText,
  CreditCard,
  Zap,
  Calendar,
  MessageSquare,
  Package,
  ShoppingCart,
  Truck,
  MapPin,
  Camera,
  QrCode,
  Send,
  CheckCircle2,
  TrendingUp,
  Bot,
  MessageCircle,
  HeadphonesIcon,
  Globe,
  LucideIcon,
  // Additional icons used in solution pages
  Phone,
  Warehouse,
  Download,
  Wrench,
  Settings,
  Heart,
  Tag,
  Star,
  Gift,
  Store,
  Factory,
  Layers,
  Database,
  Route,
} from "lucide-react";

// Icon mapping - maps string names to actual icon components
const iconMap: Record<string, LucideIcon> = {
  Shield,
  Bell,
  Lock,
  Users,
  BarChart3,
  TrendingDown,
  Clock,
  FileText,
  CreditCard,
  Zap,
  Calendar,
  MessageSquare,
  Package,
  ShoppingCart,
  Truck,
  MapPin,
  Camera,
  QrCode,
  Send,
  CheckCircle2,
  TrendingUp,
  Bot,
  MessageCircle,
  HeadphonesIcon,
  Globe,
  Phone,
  Warehouse,
  Download,
  Wrench,
  Settings,
  Heart,
  Tag,
  Star,
  Gift,
  Store,
  Factory,
  Layers,
  Database,
  Route,
};

interface FeatureItem {
  icon: string; // Changed from LucideIcon to string
  title: string;
  description: string;
}

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 3,
}: FeatureGridProps) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
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

        <div className={`grid gap-6 ${gridCols[columns]} max-w-6xl mx-auto`}>
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Shield; // Default to Shield if icon not found
            
            return (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group rounded-xl"
              >
                <CardHeader className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <CardTitle className="text-lg text-[#0F172A]">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
