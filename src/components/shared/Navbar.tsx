"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MessageCircle, Phone, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "Home", href: "/home" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Payment Reminders", href: "/payment-reminders", description: "Automated dunning & collections" },
      { name: "ERP Chatbot", href: "/erp-chatbot", description: "24/7 customer self-service" },
      { name: "Credit Management", href: "/credit-management", description: "Proactive credit controls" },
      { name: "Transport Automation", href: "/transport-automation", description: "Logistics automation" },
    ]
  },
  {
    name: "Solutions",
    href: "/solutions",
    dropdown: [
      { name: "For Distributors", href: "/for-distributors", description: "Wholesale & distribution" },
      { name: "For Transport", href: "/for-transport", description: "Logistics & fleet" },
      { name: "For Manufacturers", href: "/for-manufacturers", description: "Production & inventory" },
      { name: "For Retailers", href: "/for-retailers", description: "Retail & e-commerce" },
    ]
  },
  {
    name: "Company",
    href: "/company",
    dropdown: [
      { name: "About Us", href: "/about-us", description: "Our story & mission" },
      { name: "Case Studies", href: "/case-studies", description: "Success stories" },
      { name: "Blog", href: "/blog", description: "Insights & updates" },
      { name: "Careers", href: "/careers", description: "Join our team" },
    ]
  },
  {
    name: "Support",
    href: "/support",
    dropdown: [
      { name: "Help Center", href: "/help-center", description: "Documentation & guides" },
      { name: "API Documentation", href: "/api-documentation", description: "Developer resources" },
      { name: "Privacy Policy", href: "/privacy-policy", description: "Data protection" },
      { name: "Terms of Service", href: "/terms-of-service", description: "Legal terms" },
    ]
  },
  { name: "Contact", href: "/home#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-[#0F172A]/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#14B8A6] flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#0F172A] dark:text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Ai Auto<span className="text-[#7C3AED]">Soft</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 text-[#0F172A] dark:text-white hover:text-[#7C3AED] transition-colors font-medium">
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64 bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl p-2">
                    {item.dropdown.map((subItem, idx) => (
                      <div key={subItem.name}>
                        <DropdownMenuItem asChild>
                          <Link
                            href={subItem.href}
                            className="cursor-pointer flex flex-col items-start p-3 rounded-lg hover:bg-[#7C3AED]/10 transition-colors"
                          >
                            <span className="font-medium text-[#0F172A] dark:text-white">{subItem.name}</span>
                            {subItem.description && (
                              <span className="text-xs text-gray-500 dark:text-gray-400">{subItem.description}</span>
                            )}
                          </Link>
                        </DropdownMenuItem>
                        {idx < item.dropdown!.length - 1 && (
                          <DropdownMenuSeparator className="my-1" />
                        )}
                      </div>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#0F172A] dark:text-white hover:text-[#7C3AED] transition-colors font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white font-medium px-5 py-2.5 rounded-lg transition-all"
              asChild
            >
              <a href="https://wa.me/919203704508" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                Talk to Expert
              </a>
            </Button>
            <Button
              className="bg-[#F97316] text-white hover:bg-[#EA580C] font-semibold px-6 py-2.5 rounded-lg shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40"
              asChild
            >
              <Link href="/home#contact">Book Free Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-[#0F172A] dark:text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-80 bg-white dark:bg-[#0F172A] overflow-y-auto px-6 py-6">
              <div className="flex flex-col gap-4 pt-4">
                {/* Logo in mobile menu */}
                <Link 
                  href="/home" 
                  className="flex items-center gap-2 mb-4"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#14B8A6] flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-bold text-[#0F172A] dark:text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Ai Auto<span className="text-[#7C3AED]">Soft</span>
                  </span>
                </Link>
                
                {/* Navigation items */}
                {navigation.map((item) => (
                  <div key={item.name} className="py-1">
                    <Link
                      href={item.href}
                      className="text-base font-medium text-[#0F172A] dark:text-white hover:text-[#7C3AED] transition-colors block py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-3 mt-1 space-y-1 border-l-2 border-gray-100 dark:border-gray-800 pl-4">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-sm text-gray-600 dark:text-gray-400 hover:text-[#7C3AED] py-1.5 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* CTA Buttons */}
                <div className="pt-6 mt-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white font-medium rounded-lg h-11"
                    asChild
                  >
                    <a href="https://wa.me/919203704508" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                      <Phone className="w-4 h-4 mr-2" />
                      Talk to Expert
                    </a>
                  </Button>
                  <Button
                    className="w-full bg-[#F97316] text-white hover:bg-[#EA580C] font-semibold rounded-lg shadow-lg shadow-orange-500/25 h-11"
                    asChild
                  >
                    <Link href="/home#contact" onClick={() => setIsOpen(false)}>
                      Book Free Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
