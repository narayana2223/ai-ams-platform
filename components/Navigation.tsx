"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, TrendingUp, DollarSign, Users, Target, FileText, Zap, BarChart3, Shield } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/competitive-intelligence", label: "Competitive Intel", icon: TrendingUp },
  { href: "/value-chain", label: "SDLC Value Chain", icon: Zap },
  { href: "/business-case", label: "Business Case & ROI", icon: DollarSign },
  { href: "/pricing-strategy", label: "Pricing Strategy", icon: BarChart3 },
  { href: "/execution-playbook", label: "Execution Playbook", icon: Target },
  { href: "/next-steps", label: "Next Steps", icon: FileText },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AI-AMS Platform</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
