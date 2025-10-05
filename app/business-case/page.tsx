"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, DollarSign, TrendingUp, Clock, Target, Users, Zap, Shield, Award, BarChart3, CheckCircle } from "lucide-react";
import { DataTable } from "@/components/DataTable";
import { Section } from "@/components/Section";
import { MetricCard } from "@/components/MetricCard";
import { TabGroup } from "@/components/TabGroup";

export default function BusinessCasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Business Case & ROI Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            Quantified business outcomes for AI-Augmented AMS implementation with transparent financial modeling
          </p>
        </motion.div>

        {/* Executive Dashboard Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12"
        >
          <MetricCard
            label="Net Present Value"
            value="$12.5M"
            subtitle="3-year, 500-person org"
            icon={<DollarSign className="h-8 w-8" />}
            variant="success"
          />
          <MetricCard
            label="Return on Investment"
            value="285%"
            subtitle="Within 24 months"
            icon={<TrendingUp className="h-8 w-8" />}
            variant="success"
          />
          <MetricCard
            label="Payback Period"
            value="14 months"
            subtitle="Break-even at month 18"
            icon={<Clock className="h-8 w-8" />}
            variant="default"
          />
          <MetricCard
            label="Productivity Gains"
            value="60-80%"
            subtitle="Across development lifecycle"
            icon={<Zap className="h-8 w-8" />}
            variant="success"
          />
          <MetricCard
            label="Quality Improvement"
            value="70%"
            subtitle="Reduction in defects"
            icon={<Shield className="h-8 w-8" />}
            variant="success"
          />
        </motion.div>

        {/* Section 1: Cost Reduction Metrics */}
        <Section
          title="1. Cost Reduction Metrics"
          subtitle="Comprehensive analysis of cost savings across development, operations, and infrastructure"
          icon={<DollarSign className="h-6 w-6" />}
          defaultExpanded={true}
        >
          <DataTable
            title="1.1 Development Cost Optimization"
            description="Annual savings of $8.2M through AI-augmented development processes"
            columns={[
              { header: "Metric Category", accessor: "category", className: "font-semibold text-gray-900" },
              { header: "Baseline Cost", accessor: "baseline", className: "text-gray-700" },
              { header: "AI-Augmented Cost", accessor: "aiCost", className: "text-blue-600" },
              { header: "Savings %", accessor: "savings", className: "text-green-600 font-semibold" },
              { header: "Annual Impact", accessor: "impact", className: "text-green-700 font-bold" },
            ]}
            data={[
              {
                category: "Code Development",
                baseline: "$5.2M",
                aiCost: "$2.1M",
                savings: "60%",
                impact: "$3.1M saved",
              },
              {
                category: "Manual Testing",
                baseline: "$2.8M",
                aiCost: "$0.8M",
                savings: "71%",
                impact: "$2.0M saved",
              },
              {
                category: "Code Review Process",
                baseline: "$1.5M",
                aiCost: "$0.5M",
                savings: "67%",
                impact: "$1.0M saved",
              },
              {
                category: "Documentation",
                baseline: "$800K",
                aiCost: "$200K",
                savings: "75%",
                impact: "$600K saved",
              },
              {
                category: "Bug Fixing",
                baseline: "$2.2M",
                aiCost: "$700K",
                savings: "68%",
                impact: "$1.5M saved",
              },
              {
                category: "Total Development",
                baseline: "$12.5M",
                aiCost: "$4.3M",
                savings: "66%",
                impact: "$8.2M saved",
              },
            ]}
          />

          <DataTable
            title="1.2 Operations Cost Reduction"
            description="Annual savings of $6.3M through AI-powered operations automation"
            columns={[
              { header: "Metric Category", accessor: "category", className: "font-semibold text-gray-900" },
              { header: "Baseline Cost", accessor: "baseline", className: "text-gray-700" },
              { header: "AI-Augmented Cost", accessor: "aiCost", className: "text-blue-600" },
              { header: "Savings %", accessor: "savings", className: "text-green-600 font-semibold" },
              { header: "Annual Impact", accessor: "impact", className: "text-green-700 font-bold" },
            ]}
            data={[
              {
                category: "Incident Response",
                baseline: "$3.5M",
                aiCost: "$1.1M",
                savings: "69%",
                impact: "$2.4M saved",
              },
              {
                category: "System Monitoring",
                baseline: "$1.8M",
                aiCost: "$600K",
                savings: "67%",
                impact: "$1.2M saved",
              },
              {
                category: "Change Management",
                baseline: "$1.2M",
                aiCost: "$400K",
                savings: "67%",
                impact: "$800K saved",
              },
              {
                category: "Performance Tuning",
                baseline: "$900K",
                aiCost: "$300K",
                savings: "67%",
                impact: "$600K saved",
              },
              {
                category: "Security Operations",
                baseline: "$2.1M",
                aiCost: "$800K",
                savings: "62%",
                impact: "$1.3M saved",
              },
              {
                category: "Total Operations",
                baseline: "$9.5M",
                aiCost: "$3.2M",
                savings: "66%",
                impact: "$6.3M saved",
              },
            ]}
          />

          <DataTable
            title="1.3 Infrastructure Cost Optimization"
            description="Annual savings of $1.56M through AI-driven infrastructure optimization"
            columns={[
              { header: "Metric Category", accessor: "category", className: "font-semibold text-gray-900" },
              { header: "Current Monthly", accessor: "current", className: "text-gray-700" },
              { header: "AI-Optimized", accessor: "optimized", className: "text-blue-600" },
              { header: "Savings %", accessor: "savings", className: "text-green-600 font-semibold" },
              { header: "Annual Impact", accessor: "impact", className: "text-green-700 font-bold" },
            ]}
            data={[
              {
                category: "Cloud Compute",
                current: "$180K",
                optimized: "$108K",
                savings: "40%",
                impact: "$864K saved",
              },
              {
                category: "Storage Costs",
                current: "$45K",
                optimized: "$32K",
                savings: "29%",
                impact: "$156K saved",
              },
              {
                category: "Monitoring Tools",
                current: "$25K",
                optimized: "$15K",
                savings: "40%",
                impact: "$120K saved",
              },
              {
                category: "License Costs",
                current: "$120K",
                optimized: "$85K",
                savings: "29%",
                impact: "$420K saved",
              },
              {
                category: "Total Infrastructure",
                current: "$370K/month",
                optimized: "$240K/month",
                savings: "35%",
                impact: "$1.56M saved",
              },
            ]}
          />
        </Section>

        {/* Section 2: Productivity Improvement Metrics */}
        <Section
          title="2. Productivity Improvement Metrics"
          subtitle="Quantified acceleration across development, quality assurance, and operations"
          icon={<Zap className="h-6 w-6" />}
          defaultExpanded={true}
        >
          <DataTable
            title="2.1 Development Velocity Acceleration"
            description="Total SDLC reduced from 103 days to 45 days - 56% faster delivery"
            columns={[
              { header: "Development Phase", accessor: "phase", className: "font-semibold text-gray-900" },
              { header: "Baseline Time", accessor: "baseline", className: "text-gray-700" },
              { header: "AI-Augmented Time", accessor: "aiTime", className: "text-blue-600" },
              { header: "Improvement", accessor: "improvement", className: "text-green-600 font-semibold" },
              { header: "Productivity Gain", accessor: "gain", className: "text-green-700 font-bold" },
            ]}
            data={[
              {
                phase: "Requirements Analysis",
                baseline: "15 days",
                aiTime: "8 days",
                improvement: "47% faster",
                gain: "87% productivity",
              },
              {
                phase: "Design & Architecture",
                baseline: "20 days",
                aiTime: "12 days",
                improvement: "40% faster",
                gain: "67% productivity",
              },
              {
                phase: "Code Development",
                baseline: "45 days",
                aiTime: "18 days",
                improvement: "60% faster",
                gain: "150% productivity",
              },
              {
                phase: "Unit Testing",
                baseline: "12 days",
                aiTime: "3 days",
                improvement: "75% faster",
                gain: "300% productivity",
              },
              {
                phase: "Integration Testing",
                baseline: "8 days",
                aiTime: "3 days",
                improvement: "63% faster",
                gain: "167% productivity",
              },
              {
                phase: "Deployment",
                baseline: "3 days",
                aiTime: "1 day",
                improvement: "67% faster",
                gain: "200% productivity",
              },
              {
                phase: "Total SDLC",
                baseline: "103 days",
                aiTime: "45 days",
                improvement: "56% faster",
                gain: "129% productivity",
              },
            ]}
          />

          <DataTable
            title="2.2 Quality Assurance Efficiency"
            description="Comprehensive QA transformation with 600% faster test creation and 80% maintenance reduction"
            columns={[
              { header: "QA Metric", accessor: "metric", className: "font-semibold text-gray-900" },
              { header: "Baseline", accessor: "baseline", className: "text-gray-700" },
              { header: "AI-Enhanced", accessor: "aiEnhanced", className: "text-blue-600" },
              { header: "Improvement", accessor: "improvement", className: "text-green-600 font-semibold" },
              { header: "Business Impact", accessor: "impact", className: "text-green-700 font-bold" },
            ]}
            data={[
              {
                metric: "Test Case Creation",
                baseline: "5 tests/day",
                aiEnhanced: "35 tests/day",
                improvement: "600% faster",
                impact: "$1.2M annual savings",
              },
              {
                metric: "Test Execution",
                baseline: "8 hours",
                aiEnhanced: "2 hours",
                improvement: "75% faster",
                impact: "$800K annual savings",
              },
              {
                metric: "Bug Detection Rate",
                baseline: "65%",
                aiEnhanced: "92%",
                improvement: "42% improvement",
                impact: "$2.1M fewer production costs",
              },
              {
                metric: "Test Maintenance",
                baseline: "40% of time",
                aiEnhanced: "8% of time",
                improvement: "80% reduction",
                impact: "$1.5M annual savings",
              },
              {
                metric: "Regression Testing",
                baseline: "2 days",
                aiEnhanced: "4 hours",
                improvement: "90% faster",
                impact: "$600K annual savings",
              },
            ]}
          />

          <DataTable
            title="2.3 Operations Efficiency Gains"
            description="Operations transformation with 69% faster incident resolution and 143% automation increase"
            columns={[
              { header: "Operations Metric", accessor: "metric", className: "font-semibold text-gray-900" },
              { header: "Baseline", accessor: "baseline", className: "text-gray-700" },
              { header: "AI-Optimized", accessor: "aiOptimized", className: "text-blue-600" },
              { header: "Improvement", accessor: "improvement", className: "text-green-600 font-semibold" },
              { header: "Annual Value", accessor: "value", className: "text-green-700 font-bold" },
            ]}
            data={[
              {
                metric: "Incident Resolution",
                baseline: "4.2 hours",
                aiOptimized: "1.3 hours",
                improvement: "69% faster",
                value: "$3.2M in uptime value",
              },
              {
                metric: "Deployment Frequency",
                baseline: "2x/month",
                aiOptimized: "8x/month",
                improvement: "300% increase",
                value: "$1.8M faster TTM",
              },
              {
                metric: "Change Success Rate",
                baseline: "78%",
                aiOptimized: "94%",
                improvement: "21% improvement",
                value: "$1.1M reduced rollbacks",
              },
              {
                metric: "Monitoring Accuracy",
                baseline: "72%",
                aiOptimized: "96%",
                improvement: "33% improvement",
                value: "$800K proactive savings",
              },
              {
                metric: "Automation Coverage",
                baseline: "35%",
                aiOptimized: "85%",
                improvement: "143% increase",
                value: "$2.5M manual effort savings",
              },
            ]}
          />
        </Section>

        {/* Section 3: Quality Enhancement Metrics */}
        <Section
          title="3. Quality Enhancement Metrics"
          subtitle="Comprehensive quality improvements across defects, code quality, and security"
          icon={<Shield className="h-6 w-6" />}
        >
          <DataTable
            title="3.1 Defect Reduction Analysis"
            description="70% reduction in production defects with $7.4M annual quality savings"
            columns={[
              { header: "Quality Metric", accessor: "metric", className: "font-semibold text-gray-900" },
              { header: "Pre-AI Baseline", accessor: "baseline", className: "text-gray-700" },
              { header: "Post-AI Implementation", accessor: "postAI", className: "text-blue-600" },
              { header: "Improvement", accessor: "improvement", className: "text-green-600 font-semibold" },
              { header: "Business Value", accessor: "value", className: "text-green-700 font-bold" },
            ]}
            data={[
              {
                metric: "Production Defects",
                baseline: "145/month",
                postAI: "43/month",
                improvement: "70% reduction",
                value: "$2.8M annual savings",
              },
              {
                metric: "Critical Incidents",
                baseline: "12/month",
                postAI: "3/month",
                improvement: "75% reduction",
                value: "$1.9M annual savings",
              },
              {
                metric: "Security Vulnerabilities",
                baseline: "28/month",
                postAI: "6/month",
                improvement: "79% reduction",
                value: "$1.2M annual savings",
              },
              {
                metric: "Performance Issues",
                baseline: "35/month",
                postAI: "8/month",
                improvement: "77% reduction",
                value: "$900K annual savings",
              },
              {
                metric: "Data Quality Issues",
                baseline: "22/month",
                postAI: "5/month",
                improvement: "77% reduction",
                value: "$600K annual savings",
              },
            ]}
          />

          <DataTable
            title="3.2 Code Quality Improvements"
            description="Comprehensive code quality enhancement with 57% technical debt reduction"
            columns={[
              { header: "Code Quality Metric", accessor: "metric", className: "font-semibold text-gray-900" },
              { header: "Baseline", accessor: "baseline", className: "text-gray-700" },
              { header: "AI-Enhanced", accessor: "aiEnhanced", className: "text-blue-600" },
              { header: "Improvement", accessor: "improvement", className: "text-green-600 font-semibold" },
              { header: "Impact", accessor: "impact", className: "text-green-700" },
            ]}
            data={[
              {
                metric: "Code Coverage",
                baseline: "65%",
                aiEnhanced: "92%",
                improvement: "42% increase",
                impact: "85% fewer bugs",
              },
              {
                metric: "Technical Debt Index",
                baseline: "7.2",
                aiEnhanced: "3.1",
                improvement: "57% reduction",
                impact: "$1.8M maintenance savings",
              },
              {
                metric: "Code Complexity",
                baseline: "8.5/10",
                aiEnhanced: "4.2/10",
                improvement: "51% reduction",
                impact: "60% easier maintenance",
              },
              {
                metric: "Documentation Coverage",
                baseline: "45%",
                aiEnhanced: "89%",
                improvement: "98% increase",
                impact: "70% faster onboarding",
              },
              {
                metric: "Security Score",
                baseline: "6.8/10",
                aiEnhanced: "9.1/10",
                improvement: "34% improvement",
                impact: "85% vulnerability reduction",
              },
            ]}
          />
        </Section>

        {/* Section 4: Time-to-Market Acceleration */}
        <Section
          title="4. Time-to-Market Acceleration"
          subtitle="Dramatic reduction in feature delivery time from 20 weeks to 9 weeks"
          icon={<Clock className="h-6 w-6" />}
        >
          <DataTable
            title="4.1 Feature Delivery Velocity"
            description="55% faster time-to-market with $925K/week competitive advantage"
            columns={[
              { header: "Delivery Metric", accessor: "metric", className: "font-semibold text-gray-900" },
              { header: "Traditional AMS", accessor: "traditional", className: "text-gray-700" },
              { header: "AI-Augmented AMS", accessor: "aiAugmented", className: "text-blue-600" },
              { header: "Acceleration", accessor: "acceleration", className: "text-green-600 font-semibold" },
              { header: "Revenue Impact", accessor: "impact", className: "text-green-700 font-bold" },
            ]}
            data={[
              {
                metric: "Feature Planning",
                traditional: "3 weeks",
                aiAugmented: "1.5 weeks",
                acceleration: "50% faster",
                impact: "$200K/week competitive advantage",
              },
              {
                metric: "Development Cycle",
                traditional: "12 weeks",
                aiAugmented: "5 weeks",
                acceleration: "58% faster",
                impact: "$450K/week earlier revenue",
              },
              {
                metric: "Testing Phase",
                traditional: "4 weeks",
                aiAugmented: "1 week",
                acceleration: "75% faster",
                impact: "$180K/week faster validation",
              },
              {
                metric: "Deployment Process",
                traditional: "1 week",
                aiAugmented: "2 days",
                acceleration: "71% faster",
                impact: "$95K/week faster GTM",
              },
              {
                metric: "Total Time-to-Market",
                traditional: "20 weeks",
                aiAugmented: "9 weeks",
                acceleration: "55% faster",
                impact: "$925K/week advantage",
              },
            ]}
          />

          <DataTable
            title="4.2 Release Frequency & Success"
            description="700% increase in release frequency with 97% success rate"
            columns={[
              { header: "Release Metric", accessor: "metric", className: "font-semibold text-gray-900" },
              { header: "Baseline", accessor: "baseline", className: "text-gray-700" },
              { header: "AI-Enhanced", accessor: "aiEnhanced", className: "text-blue-600" },
              { header: "Improvement", accessor: "improvement", className: "text-green-600 font-semibold" },
              { header: "Business Value", accessor: "value", className: "text-green-700 font-bold" },
            ]}
            data={[
              {
                metric: "Release Frequency",
                baseline: "Monthly",
                aiEnhanced: "2x/week",
                improvement: "700% increase",
                impact: "$3.6M faster revenue recognition",
              },
              {
                metric: "Release Success Rate",
                baseline: "82%",
                aiEnhanced: "97%",
                improvement: "18% improvement",
                impact: "$1.2M reduced rollback costs",
              },
              {
                metric: "Rollback Recovery",
                baseline: "4 hours",
                aiEnhanced: "45 minutes",
                improvement: "81% faster",
                impact: "$800K reduced downtime costs",
              },
              {
                metric: "Feature Flag Usage",
                baseline: "15%",
                aiEnhanced: "85%",
                improvement: "467% increase",
                impact: "$1.5M risk mitigation value",
              },
            ]}
          />
        </Section>

        {/* Section 5: Customer Satisfaction & Revenue Impact */}
        <Section
          title="5. Customer Satisfaction & Revenue Impact"
          subtitle="81% NPS improvement and 39% reduction in customer churn"
          icon={<Users className="h-6 w-6" />}
        >
          <DataTable
            title="5.1 Customer Experience Metrics"
            description="Comprehensive CX improvements with $13.8M annual revenue protection"
            columns={[
              { header: "CX Metric", accessor: "metric", className: "font-semibold text-gray-900" },
              { header: "Pre-AI", accessor: "preAI", className: "text-gray-700" },
              { header: "Post-AI", accessor: "postAI", className: "text-blue-600" },
              { header: "Improvement", accessor: "improvement", className: "text-green-600 font-semibold" },
              { header: "Revenue Impact", accessor: "impact", className: "text-green-700 font-bold" },
            ]}
            data={[
              {
                metric: "System Uptime",
                preAI: "99.2%",
                postAI: "99.8%",
                improvement: "0.6% increase",
                impact: "$2.4M annual revenue protection",
              },
              {
                metric: "Response Time",
                preAI: "2.8 sec",
                postAI: "1.1 sec",
                improvement: "61% faster",
                impact: "$1.8M conversion improvement",
              },
              {
                metric: "Customer Support Tickets",
                preAI: "1,250/month",
                postAI: "420/month",
                improvement: "66% reduction",
                impact: "$1.6M support cost savings",
              },
              {
                metric: "Net Promoter Score",
                preAI: "32",
                postAI: "58",
                improvement: "81% improvement",
                impact: "$3.2M customer retention value",
              },
              {
                metric: "Customer Churn Rate",
                preAI: "8.5%",
                postAI: "5.2%",
                improvement: "39% reduction",
                impact: "$4.8M annual revenue retention",
              },
            ]}
          />

          <DataTable
            title="5.2 Business Growth Metrics"
            description="Market share growth acceleration with $20.9M ecosystem value"
            columns={[
              { header: "Growth Metric", accessor: "metric", className: "font-semibold text-gray-900" },
              { header: "Baseline", accessor: "baseline", className: "text-gray-700" },
              { header: "AI-Enhanced", accessor: "aiEnhanced", className: "text-blue-600" },
              { header: "Improvement", accessor: "improvement", className: "text-green-600 font-semibold" },
              { header: "Annual Value", accessor: "value", className: "text-green-700 font-bold" },
            ]}
            data={[
              {
                metric: "New Feature Adoption",
                baseline: "35%",
                aiEnhanced: "67%",
                improvement: "91% increase",
                impact: "$2.9M additional usage revenue",
              },
              {
                metric: "API Usage Growth",
                baseline: "15%/year",
                aiEnhanced: "45%/year",
                improvement: "200% faster",
                impact: "$1.8M platform revenue",
              },
              {
                metric: "Partner Integrations",
                baseline: "3/quarter",
                aiEnhanced: "8/quarter",
                improvement: "167% increase",
                impact: "$1.2M ecosystem value",
              },
              {
                metric: "Market Share Growth",
                baseline: "2%/year",
                aiEnhanced: "7%/year",
                improvement: "250% faster",
                impact: "$15M competitive advantage",
              },
            ]}
          />
        </Section>

        {/* Section 6: Workforce Transformation ROI */}
        <Section
          title="6. Workforce Transformation ROI"
          subtitle="38% workforce cost reduction with 485% training ROI"
          icon={<Users className="h-6 w-6" />}
        >
          <DataTable
            title="6.1 Human Resource Optimization"
            description="Strategic workforce transformation with $4.6M annual savings"
            columns={[
              { header: "HR Metric", accessor: "metric", className: "font-semibold text-gray-900" },
              { header: "Traditional Model", accessor: "traditional", className: "text-gray-700" },
              { header: "AI-Augmented Model", accessor: "aiModel", className: "text-blue-600" },
              { header: "Efficiency", accessor: "efficiency", className: "text-green-600 font-semibold" },
              { header: "Cost Impact", accessor: "impact", className: "text-green-700 font-bold" },
            ]}
            data={[
              {
                metric: "L1 Support Engineers",
                traditional: "45 FTEs",
                aiModel: "15 FTEs",
                efficiency: "67% reduction",
                impact: "$2.7M annual savings",
              },
              {
                metric: "L2 Technical Engineers",
                traditional: "35 FTEs",
                aiModel: "20 FTEs",
                efficiency: "43% reduction",
                impact: "$1.8M annual savings",
              },
              {
                metric: "QA Engineers",
                traditional: "25 FTEs",
                aiModel: "8 FTEs",
                efficiency: "68% reduction",
                impact: "$1.7M annual savings",
              },
              {
                metric: "DevOps Engineers",
                traditional: "15 FTEs",
                aiModel: "12 FTEs",
                efficiency: "20% reduction",
                impact: "$360K annual savings",
              },
              {
                metric: "AI Specialists",
                traditional: "0 FTEs",
                aiModel: "8 FTEs",
                efficiency: "New roles",
                impact: "$1.2M investment",
              },
              {
                metric: "Net Workforce Cost",
                traditional: "$12M",
                aiModel: "$7.4M",
                efficiency: "38% reduction",
                impact: "$4.6M annual savings",
              },
            ]}
          />

          <DataTable
            title="6.2 Skill Development Investment ROI"
            description="Training investment of $900K yielding 485% ROI in 8 months"
            columns={[
              { header: "Training Investment", accessor: "training", className: "font-semibold text-gray-900" },
              { header: "Cost", accessor: "cost", className: "text-gray-700" },
              { header: "Productivity Gain", accessor: "gain", className: "text-blue-600" },
              { header: "ROI Period", accessor: "period", className: "text-green-600" },
              { header: "3-Year ROI", accessor: "roi", className: "text-green-700 font-bold" },
            ]}
            data={[
              {
                training: "AI/ML Fundamentals",
                cost: "$250K",
                gain: "25% individual productivity",
                period: "8 months",
                roi: "450%",
              },
              {
                training: "Prompt Engineering",
                cost: "$150K",
                gain: "40% code generation efficiency",
                period: "6 months",
                roi: "580%",
              },
              {
                training: "AIOps Certification",
                cost: "$300K",
                gain: "60% operations efficiency",
                period: "10 months",
                roi: "380%",
              },
              {
                training: "AI Security Training",
                cost: "$200K",
                gain: "80% vulnerability detection",
                period: "7 months",
                roi: "520%",
              },
              {
                training: "Total Training ROI",
                cost: "$900K",
                gain: "45% overall productivity",
                period: "8 months",
                roi: "485%",
              },
            ]}
          />
        </Section>

        {/* Section 7: Financial Model & Business Case */}
        <Section
          title="7. Financial Model & 3-Year Projection"
          subtitle="Comprehensive financial analysis with risk-adjusted scenarios"
          icon={<BarChart3 className="h-6 w-6" />}
          defaultExpanded={true}
        >
          <DataTable
            title="7.1 Investment Requirements (Year 1)"
            description="Total Year 1 investment of $3.3M yielding 285% ROI"
            columns={[
              { header: "Investment Category", accessor: "category", className: "font-semibold text-gray-900" },
              { header: "Amount", accessor: "amount", className: "text-blue-600 font-semibold" },
              { header: "Purpose", accessor: "purpose", className: "text-gray-700" },
              { header: "Expected ROI", accessor: "roi", className: "text-green-600 font-bold" },
            ]}
            data={[
              {
                category: "AI Platform Licensing",
                amount: "$1.2M",
                purpose: "Core AI/ML capabilities",
                roi: "340%",
              },
              {
                category: "Infrastructure Upgrade",
                amount: "$800K",
                purpose: "Cloud compute & storage",
                roi: "280%",
              },
              {
                category: "Training & Certification",
                amount: "$600K",
                purpose: "Workforce upskilling",
                roi: "485%",
              },
              {
                category: "Integration Services",
                amount: "$400K",
                purpose: "System integration",
                roi: "250%",
              },
              {
                category: "Change Management",
                amount: "$300K",
                purpose: "Organizational transformation",
                roi: "200%",
              },
              {
                category: "Total Investment",
                amount: "$3.3M",
                purpose: "Full AI-AMS transformation",
                roi: "285%",
              },
            ]}
          />

          <DataTable
            title="7.2 Three-Year Financial Projection"
            description="700% cumulative ROI with $37.6M net benefit over 3 years"
            columns={[
              { header: "Year", accessor: "year", className: "font-semibold text-gray-900" },
              { header: "Investment", accessor: "investment", className: "text-red-600" },
              { header: "Cost Savings", accessor: "savings", className: "text-green-600" },
              { header: "Revenue Impact", accessor: "revenue", className: "text-blue-600" },
              { header: "Net Benefit", accessor: "net", className: "text-green-700 font-bold" },
              { header: "Cumulative ROI", accessor: "roi", className: "text-green-700 font-bold" },
            ]}
            data={[
              {
                year: "Year 1",
                investment: "$3.3M",
                savings: "$4.2M",
                revenue: "$2.1M",
                net: "$3.0M",
                roi: "91%",
              },
              {
                year: "Year 2",
                investment: "$800K",
                savings: "$8.9M",
                revenue: "$5.8M",
                net: "$13.9M",
                roi: "285%",
              },
              {
                year: "Year 3",
                investment: "$600K",
                savings: "$12.1M",
                revenue: "$9.2M",
                net: "$20.7M",
                roi: "420%",
              },
              {
                year: "Total",
                investment: "$4.7M",
                savings: "$25.2M",
                revenue: "$17.1M",
                net: "$37.6M",
                roi: "700%",
              },
            ]}
          />

          {/* Risk-Adjusted NPV Analysis */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">7.3 Risk-Adjusted NPV Analysis</h4>
            <TabGroup
              tabs={[
                {
                  id: "best-case",
                  label: "Best Case",
                  content: (
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Probability</p>
                          <p className="text-3xl font-bold text-green-600">25%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">NPV (3-year)</p>
                          <p className="text-3xl font-bold text-green-600">$18.5M</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Expected Value</p>
                          <p className="text-3xl font-bold text-green-600">$4.6M</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mt-4">
                        <strong>Scenario:</strong> Exceptional AI adoption, 85% productivity gains, rapid market expansion, and industry leadership position achieved.
                      </p>
                    </div>
                  ),
                },
                {
                  id: "most-likely",
                  label: "Most Likely",
                  content: (
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Probability</p>
                          <p className="text-3xl font-bold text-blue-600">50%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">NPV (3-year)</p>
                          <p className="text-3xl font-bold text-blue-600">$12.5M</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Expected Value</p>
                          <p className="text-3xl font-bold text-blue-600">$6.3M</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mt-4">
                        <strong>Scenario:</strong> Strong AI adoption, 60-70% productivity gains, steady market growth, and competitive parity maintained.
                      </p>
                    </div>
                  ),
                },
                {
                  id: "conservative",
                  label: "Conservative",
                  content: (
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Probability</p>
                          <p className="text-3xl font-bold text-amber-600">25%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">NPV (3-year)</p>
                          <p className="text-3xl font-bold text-amber-600">$7.8M</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Expected Value</p>
                          <p className="text-3xl font-bold text-amber-600">$2.0M</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mt-4">
                        <strong>Scenario:</strong> Moderate AI adoption, 40-50% productivity gains, slower rollout, and some implementation challenges encountered.
                      </p>
                    </div>
                  ),
                },
              ]}
            />
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-300 p-6 rounded-lg mt-6">
              <h5 className="font-semibold text-gray-900 mb-2">Risk-Adjusted NPV Calculation</h5>
              <p className="text-gray-700 mb-3">
                Expected Value = (Best Case × 25%) + (Most Likely × 50%) + (Conservative × 25%)
              </p>
              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <p className="text-sm text-gray-600 mb-1">Risk-Adjusted Net Present Value</p>
                <p className="text-4xl font-bold text-indigo-600">$12.9M</p>
                <p className="text-xs text-gray-500 mt-1">Over 3 years, weighted by scenario probability</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 8: Implementation Roadmap */}
        <Section
          title="8. Implementation Roadmap & Milestones"
          subtitle="3-phase rollout strategy with progressive value realization"
          icon={<Target className="h-6 w-6" />}
        >
          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-gray-900">Phase 1: Foundation (Months 1-6)</h4>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Investment</p>
                  <p className="text-xl font-bold text-blue-600">$1.8M</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1">Expected Savings</p>
                <p className="text-2xl font-bold text-green-600">$2.1M</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Key Initiatives:</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• AI platform deployment and basic automation</li>
                  <li>• Core team training and certification</li>
                  <li>• Initial productivity tools implementation</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Key Metrics:</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white rounded p-3 border border-blue-200">
                    <p className="text-xs text-gray-600">Code Generation</p>
                    <p className="text-lg font-bold text-blue-600">35%</p>
                    <p className="text-xs text-gray-500">productivity gain</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-blue-200">
                    <p className="text-xs text-gray-600">Test Automation</p>
                    <p className="text-lg font-bold text-blue-600">50%</p>
                    <p className="text-xs text-gray-500">coverage</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-blue-200">
                    <p className="text-xs text-gray-600">Incident Resolution</p>
                    <p className="text-lg font-bold text-blue-600">25%</p>
                    <p className="text-xs text-gray-500">improvement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-gray-900">Phase 2: Scale (Months 7-18)</h4>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Investment</p>
                  <p className="text-xl font-bold text-indigo-600">$1.2M</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1">Expected Savings</p>
                <p className="text-2xl font-bold text-green-600">$8.5M</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Key Initiatives:</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Advanced AI capabilities and workflow automation</li>
                  <li>• Organization-wide rollout and adoption</li>
                  <li>• Advanced analytics and optimization</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Key Metrics:</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white rounded p-3 border border-indigo-200">
                    <p className="text-xs text-gray-600">Development Productivity</p>
                    <p className="text-lg font-bold text-indigo-600">65%</p>
                    <p className="text-xs text-gray-500">overall gain</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-indigo-200">
                    <p className="text-xs text-gray-600">Testing Coverage</p>
                    <p className="text-lg font-bold text-indigo-600">80%</p>
                    <p className="text-xs text-gray-500">automated</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-indigo-200">
                    <p className="text-xs text-gray-600">Self-Resolution</p>
                    <p className="text-lg font-bold text-indigo-600">70%</p>
                    <p className="text-xs text-gray-500">incident rate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-gray-900">Phase 3: Innovation (Months 19-36)</h4>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Investment</p>
                  <p className="text-xl font-bold text-purple-600">$700K</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1">Expected Savings</p>
                <p className="text-2xl font-bold text-green-600">$14.6M</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Key Initiatives:</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Cutting-edge AI research and development</li>
                  <li>• Industry leadership and thought leadership</li>
                  <li>• Ecosystem expansion and partnership</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Key Metrics:</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white rounded p-3 border border-purple-200">
                    <p className="text-xs text-gray-600">Development Productivity</p>
                    <p className="text-lg font-bold text-purple-600">80%</p>
                    <p className="text-xs text-gray-500">productivity gain</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-purple-200">
                    <p className="text-xs text-gray-600">Deployment Automation</p>
                    <p className="text-lg font-bold text-purple-600">95%</p>
                    <p className="text-xs text-gray-500">automated</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-purple-200">
                    <p className="text-xs text-gray-600">Predictive Prevention</p>
                    <p className="text-lg font-bold text-purple-600">90%</p>
                    <p className="text-xs text-gray-500">issue prevention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 9: Competitive Benchmarking & KPIs */}
        <Section
          title="9. Competitive Benchmarking & Success Metrics"
          subtitle="Industry performance comparison and comprehensive KPI framework"
          icon={<Award className="h-6 w-6" />}
        >
          <DataTable
            title="9.1 Industry Performance Comparison"
            description="Significant competitive advantage across all key metrics"
            columns={[
              { header: "Metric", accessor: "metric", className: "font-semibold text-gray-900" },
              { header: "Industry Average", accessor: "average", className: "text-gray-700" },
              { header: "Top Quartile", accessor: "topQuartile", className: "text-blue-600" },
              { header: "Our AI-AMS Target", accessor: "target", className: "text-green-600 font-bold" },
              { header: "Competitive Advantage", accessor: "advantage", className: "text-green-700 font-bold" },
            ]}
            data={[
              {
                metric: "Development Velocity",
                average: "100% baseline",
                topQuartile: "140%",
                target: "190%",
                advantage: "35% above top quartile",
              },
              {
                metric: "Defect Rate",
                average: "2.8 defects/KLOC",
                topQuartile: "1.2 defects/KLOC",
                target: "0.6 defects/KLOC",
                advantage: "50% better than leaders",
              },
              {
                metric: "System Uptime",
                average: "99.5%",
                topQuartile: "99.7%",
                target: "99.9%",
                advantage: "0.2% above leaders",
              },
              {
                metric: "Time to Market",
                average: "100% baseline",
                topQuartile: "75%",
                target: "45%",
                advantage: "40% faster than leaders",
              },
              {
                metric: "Cost per Feature",
                average: "$125K",
                topQuartile: "$85K",
                target: "$45K",
                advantage: "47% lower than leaders",
              },
            ]}
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Operational Excellence KPIs */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                Operational Excellence KPIs
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-700">Deployment Success Rate</span>
                  <span className="font-semibold text-blue-600">97%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Mean Time to Resolution</span>
                  <span className="font-semibold text-blue-600">1.3 hrs</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Automated Resolution</span>
                  <span className="font-semibold text-blue-600">85%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Predictive Accuracy</span>
                  <span className="font-semibold text-blue-600">92%</span>
                </li>
              </ul>
            </div>

            {/* Business Impact KPIs */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                Business Impact KPIs
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-700">Cost per Transaction</span>
                  <span className="font-semibold text-green-600">60% ↓</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Revenue per Developer</span>
                  <span className="font-semibold text-green-600">150% ↑</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Customer Satisfaction</span>
                  <span className="font-semibold text-green-600">35% NPS ↑</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Market Share Growth</span>
                  <span className="font-semibold text-green-600">7% annually</span>
                </li>
              </ul>
            </div>

            {/* Innovation Leadership KPIs */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                Innovation Leadership KPIs
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-700">AI Patent Applications</span>
                  <span className="font-semibold text-purple-600">12/year</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Industry Recognition</span>
                  <span className="font-semibold text-purple-600">3 awards</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Thought Leadership</span>
                  <span className="font-semibold text-purple-600">25 articles</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Ecosystem Partnerships</span>
                  <span className="font-semibold text-purple-600">15 alliances</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Final Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Boardroom-Ready Business Case Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Financial Impact</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>• $12.5M NPV over 3 years (500-person org)</li>
                <li>• 285% ROI within 24 months</li>
                <li>• 14-month payback period</li>
                <li>• $37.6M total net benefit</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Operational Excellence</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>• 60-80% productivity gains across SDLC</li>
                <li>• 70% reduction in production defects</li>
                <li>• 55% faster time-to-market</li>
                <li>• 38% workforce cost reduction</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-blue-400">
            <p className="text-sm text-blue-100 italic">
              This comprehensive ROI dashboard provides quantified justification for AI-AMS investment, demonstrating clear financial returns and competitive advantages for Fortune 500 implementations.
            </p>
          </div>
        </motion.div>

        {/* Footer Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-300"
        >
          <div className="flex justify-between items-center">
            <Link
              href="/startup-ecosystem"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Startup Ecosystem
            </Link>
            <Link
              href="/value-chain"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              SDLC Value Chain
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
