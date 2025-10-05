"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
  icon?: ReactNode;
}

interface TabGroupProps {
  tabs: Tab[];
  defaultTab?: string;
}

export function TabGroup({ tabs, defaultTab }: TabGroupProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="mb-8">
      <div className="mb-4 flex flex-wrap gap-2 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 border-b-2 px-4 py-2 font-medium transition-colors ${
              activeTab === tab.id
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900"
            }`}
          >
            {tab.icon && <span className="h-5 w-5">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTabContent}
      </motion.div>
    </div>
  );
}
