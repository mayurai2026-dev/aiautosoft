"use client";

import Link from "next/link";
import { MessageCircle, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Payment Reminders", href: "/payment-reminders" },
    { name: "ERP Chatbot", href: "/erp-chatbot" },
    { name: "Credit Management", href: "/credit-management" },
    { name: "Transport Automation", href: "/transport-automation" },
  ],
  solutions: [
    { name: "For Distributors", href: "/for-distributors" },
    { name: "For Transport", href: "/for-transport" },
    { name: "For Manufacturers", href: "/for-manufacturers" },
    { name: "For Retailers", href: "/for-retailers" },
  ],
  company: [
    { name: "About Us", href: "/about-us" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ],
  support: [
    { name: "Help Center", href: "/help-center" },
    { name: "API Documentation", href: "/api-documentation" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ],
};

const socialLinks = [
  { 
    name: "Facebook", 
    icon: Facebook, 
    href: "https://www.facebook.com/profile.php?id=61584157602190" 
  },
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://www.instagram.com/ai_autosoft/" 
  },
  { 
    name: "Twitter", 
    icon: Twitter, 
    href: "https://twitter.com/aiautosoft" // TODO: Replace with actual Twitter URL
  },
  { 
    name: "YouTube", 
    icon: Youtube, 
    href: "https://youtube.com/@aiautosoft" // TODO: Replace with actual YouTube URL
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#14B8A6] flex items-center justify-center shadow-lg">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Ai Auto<span className="text-[#A78BFA]">Soft</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Automate your Busy ERP workflows on WhatsApp. Trusted by 500+ Indian traders and manufacturers.
            </p>
            <div className="space-y-3">
              <a href="mailto:aiautosoft26@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-[#14B8A6] transition-colors">
                <Mail className="w-5 h-5" />
                aiautosoft26@gmail.com
              </a>
              <a href="tel:+919203704508" className="flex items-center gap-3 text-gray-400 hover:text-[#14B8A6] transition-colors">
                <Phone className="w-5 h-5" />
                +91 92037 04508
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>123 Business Park, Sector 62, Noida, UP 201301</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#14B8A6] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#14B8A6] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#14B8A6] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#14B8A6] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Ai Auto Soft. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#7C3AED] hover:text-white transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
