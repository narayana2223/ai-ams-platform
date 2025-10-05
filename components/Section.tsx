"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  defaultExpanded?: boolean;
  collapsible?: boolean;
  icon?: ReactNode;
  badge?: string;
}

export function Section({
  title,
  subtitle,
  children,
  defaultExpanded = true,
  collapsible = false,
  icon,
  badge,
}: SectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="mb-8">
      <div
        className={`mb-4 flex items-center justify-between ${
          collapsible ? "cursor-pointer" : ""
        }`}
        onClick={() => collapsible && setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          {icon && <div className="text-blue-600">{icon}</div>}
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
              {badge && (
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  {badge}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
            )}
          </div>
        </div>
        {collapsible && (
          <button className="rounded-full p-2 transition-colors hover:bg-gray-100">
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-gray-600" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-600" />
            )}
          </button>
        )}
      </div>
      {isExpanded && (
        <motion.div
          initial={collapsible ? { opacity: 0, height: 0 } : {}}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
