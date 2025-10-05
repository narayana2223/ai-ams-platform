"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MetricCardProps {
  icon?: ReactNode;
  label: string;
  value: string | number;
  subtitle?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  delay?: number;
  variant?: "default" | "success" | "warning" | "danger";
}

export function MetricCard({
  icon,
  label,
  value,
  subtitle,
  trend,
  trendValue,
  delay = 0,
  variant = "default",
}: MetricCardProps) {
  const variantStyles = {
    default: "from-blue-50 to-indigo-50 border-blue-200",
    success: "from-green-50 to-emerald-50 border-green-200",
    warning: "from-yellow-50 to-amber-50 border-yellow-200",
    danger: "from-red-50 to-rose-50 border-red-200",
  };

  const iconColors = {
    default: "text-blue-600",
    success: "text-green-600",
    warning: "text-yellow-600",
    danger: "text-red-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className={`rounded-xl border-2 bg-gradient-to-br p-6 shadow-sm transition-all hover:shadow-md ${variantStyles[variant]}`}
    >
      {icon && (
        <div className={`mb-3 flex justify-center ${iconColors[variant]}`}>
          {icon}
        </div>
      )}
      <div className="text-center">
        <div className="mb-1 text-4xl font-bold text-gray-900">{value}</div>
        <div className="text-sm font-medium uppercase tracking-wide text-gray-700">
          {label}
        </div>
        {subtitle && (
          <div className="mt-2 text-xs text-gray-600">{subtitle}</div>
        )}
        {trend && trendValue && (
          <div className="mt-2 flex items-center justify-center gap-1 text-xs">
            <span
              className={
                trend === "up"
                  ? "text-green-600"
                  : trend === "down"
                  ? "text-red-600"
                  : "text-gray-600"
              }
            >
              {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"} {trendValue}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
