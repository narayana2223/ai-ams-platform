"use client";

import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, DollarSign, Users, Zap, Shield, Cloud, Code, Target, AlertTriangle, CheckCircle, XCircle, Database, Rocket, Building } from "lucide-react";
import Link from "next/link";
import { DataTable } from "@/components/DataTable";
import { Section } from "@/components/Section";
import { MetricCard } from "@/components/MetricCard";
import { TabGroup } from "@/components/TabGroup";

export default function StartupEcosystemPage() {
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
            Early-Stage Startup Ecosystem Mapping
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            Comprehensive assessment of 78 high-impact B2B startups disrupting the AI-AMS value chain (Seed to Series C)
          </p>
        </motion.div>

        {/* Executive Summary Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <MetricCard
            label="Total Startups Analyzed"
            value="78"
            subtitle="Across 10 categories"
            icon={<Building className="h-8 w-8" />}
            variant="default"
          />
          <MetricCard
            label="Total Funding Raised"
            value="$8.2B+"
            subtitle="2024-2025 period"
            icon={<DollarSign className="h-8 w-8" />}
            variant="success"
          />
          <MetricCard
            label="Very High Threat"
            value="22 (28%)"
            subtitle="Immediate disruption risk"
            icon={<AlertTriangle className="h-8 w-8" />}
            variant="danger"
          />
          <MetricCard
            label="Average Productivity Gain"
            value="45-70%"
            subtitle="Faster development"
            icon={<TrendingUp className="h-8 w-8" />}
            variant="success"
          />
        </motion.div>

        {/* Key Findings */}
        <Section
          title="Critical Findings"
          subtitle="Market-shaping insights from startup ecosystem analysis"
          icon={<Target className="h-6 w-6" />}
          defaultExpanded={true}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Market Leadership</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>AI Code Generation</strong> leads with $1.4B+ raised (6 rounds &gt;$100M)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>AIOps/Observability</strong> shows 97% noise reduction capabilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>DevSecOps</strong> growing at 400% YoY (Socket)</span>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Market Opportunities</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>FinOps</strong> addressing $214B+ cloud waste (27% of budgets)</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Testing Automation</strong> achieving 80% manual effort reduction</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>40%</strong> of professional developers using AI coding tools (2024)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Threat Distribution */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-4">Threat Level Distribution</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3" />
                  <span className="text-gray-700">Very High Threat (Immediate 18-36 month disruption)</span>
                </div>
                <span className="font-semibold text-red-600">22 startups (28%)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">High Threat (24-48 month impact)</span>
                </div>
                <span className="font-semibold text-orange-600">31 startups (40%)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3" />
                  <span className="text-gray-700">Medium Threat (48+ month emerging)</span>
                </div>
                <span className="font-semibold text-yellow-600">25 startups (32%)</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Category 1: AI Code Generation */}
        <Section
          title="1. AI Code Generation & Developer Productivity"
          subtitle="Market Size: $50B+ TAM | Funding: $1.4B+ (2024)"
          icon={<Code className="h-6 w-6" />}
          badge="Very High Threat"
          defaultExpanded={true}
        >
          <DataTable
            title="Leading AI Code Generation Startups"
            description="8 startups achieving 45-70% faster development with AI-powered coding"
            columns={[
              { header: "Company", accessor: "company", className: "font-semibold text-gray-900" },
              { header: "Stage", accessor: "stage" },
              { header: "Funding", accessor: "funding", className: "text-blue-600 font-semibold" },
              { header: "Valuation", accessor: "valuation", className: "text-green-600 font-semibold" },
              { header: "Productivity Impact", accessor: "impact" },
              { header: "Threat", accessor: "threat", className: "font-semibold" },
            ]}
            data={[
              {
                company: "Cursor (Anysphere)",
                stage: "Series A",
                funding: "$60M (Aug 2024)",
                valuation: "$2.5B",
                impact: "55% faster coding, 40% code acceptance",
                threat: "Very High",
              },
              {
                company: "Codeium",
                stage: "Series C",
                funding: "$150M (Aug 2024)",
                valuation: "$1.25B",
                impact: "50% productivity gain, 30% faster dev",
                threat: "Very High",
              },
              {
                company: "Magic",
                stage: "Series B+",
                funding: "$320M (2024)",
                valuation: "$1.5B+",
                impact: "Autonomous coding, 70% boilerplate elimination",
                threat: "Very High",
              },
              {
                company: "Augment",
                stage: "Series B",
                funding: "$227M (Apr 2024)",
                valuation: "$977M",
                impact: "35% faster coding, 60% test generation",
                threat: "Very High",
              },
              {
                company: "Poolside AI",
                stage: "Series B",
                funding: "$500M (2024)",
                valuation: "$3B+",
                impact: "End-to-end software, 80% dev acceleration",
                threat: "Very High",
              },
              {
                company: "Tabnine",
                stage: "Series B",
                funding: "$32M total",
                valuation: "$250M+",
                impact: "30% productivity boost, privacy-first",
                threat: "High",
              },
              {
                company: "Replit",
                stage: "Series C",
                funding: "$150M (Aug 2024)",
                valuation: "$1.25B",
                impact: "Instant deployment, 90% faster prototyping",
                threat: "High",
              },
              {
                company: "Sourcegraph",
                stage: "Series D",
                funding: "$225M total",
                valuation: "$2.6B",
                impact: "50% faster code navigation, batch changes",
                threat: "High",
              },
            ]}
          />

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mt-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              Disruption Analysis
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <li><strong>Traditional L2/L3 Support:</strong> 60-70% reduction in routine coding tasks</li>
              <li><strong>Code Review:</strong> 50% faster with AI assistance</li>
              <li><strong>Documentation:</strong> 80% automation of technical docs</li>
              <li><strong>Bug Fixing:</strong> 40% faster incident resolution with AI-powered RCA</li>
            </ul>
          </div>
        </Section>

        {/* Category 2: AI Testing & QA */}
        <Section
          title="2. AI Testing & Quality Assurance"
          subtitle="Market Size: $15B+ TAM | Manual Testing Cost: $2.3M/year per 100-person team"
          icon={<CheckCircle className="h-6 w-6" />}
          badge="Very High Threat"
        >
          <DataTable
            title="AI-Powered Testing Automation Leaders"
            description="7 startups achieving 70-80% manual test reduction"
            columns={[
              { header: "Company", accessor: "company", className: "font-semibold text-gray-900" },
              { header: "Stage", accessor: "stage" },
              { header: "Funding/Growth", accessor: "funding", className: "text-blue-600 font-semibold" },
              { header: "Valuation", accessor: "valuation", className: "text-green-600 font-semibold" },
              { header: "Key Capability", accessor: "capability" },
              { header: "Threat", accessor: "threat", className: "font-semibold" },
            ]}
            data={[
              {
                company: "Synthesized",
                stage: "Series A",
                funding: "$20M (Sep 2024)",
                valuation: "$80M+",
                capability: "Autonomous QA agents, 70% manual test reduction",
                threat: "Very High",
              },
              {
                company: "testRigor",
                stage: "Growth",
                funding: "Inc. 5000 (521% growth)",
                valuation: "$150M+",
                capability: "Plain English tests, 95% maintenance reduction",
                threat: "Very High",
              },
              {
                company: "Mabl",
                stage: "Series C",
                funding: "$40M (2021)",
                valuation: "$200M+",
                capability: "Auto-healing tests, 60% faster test creation",
                threat: "High",
              },
              {
                company: "Applitools",
                stage: "Series D",
                funding: "$31M (2019)",
                valuation: "$200M+",
                capability: "Visual AI, 90% visual defect detection",
                threat: "High",
              },
              {
                company: "Functionize",
                stage: "Series B",
                funding: "$22M total",
                valuation: "$100M+",
                capability: "ML test creation, 80% maintenance savings",
                threat: "High",
              },
              {
                company: "BrowserStack",
                stage: "Unicorn",
                funding: "$4B valuation",
                valuation: "$4B",
                capability: "Real device testing, 70% faster cross-platform QA",
                threat: "High",
              },
              {
                company: "Sauce Labs",
                stage: "Unicorn",
                funding: "$500M+ valuation",
                valuation: "$500M+",
                capability: "Continuous testing cloud, 65% test time reduction",
                threat: "Medium",
              },
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Key Metrics</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Manual effort reduction:</strong> 70-80% for test creation/maintenance</li>
                <li>• <strong>Defect detection:</strong> 85-95% catch rate vs. 60% manual</li>
                <li>• <strong>Test execution:</strong> 5-10x faster than manual testing</li>
                <li>• <strong>ROI:</strong> 30-40% reduction in QA budgets</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Impact on Traditional QA</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>QA Teams:</strong> 50-60% headcount reduction potential</li>
                <li>• <strong>Test Coverage:</strong> 3-4x increase with same resources</li>
                <li>• <strong>Release Velocity:</strong> 2-3x faster time-to-market</li>
                <li>• <strong>Cost per Test:</strong> 75% reduction in TCO</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Category 3: AIOps & Observability */}
        <Section
          title="3. AIOps, Observability & Incident Management"
          subtitle="Market Size: $32B by 2028 | Alert Noise Problem: 95% false positives"
          icon={<Zap className="h-6 w-6" />}
          badge="Very High Threat"
        >
          <DataTable
            title="AIOps & Observability Innovation Leaders"
            description="6 startups achieving 40-70% MTTR reduction and 95%+ noise reduction"
            columns={[
              { header: "Company", accessor: "company", className: "font-semibold text-gray-900" },
              { header: "Stage", accessor: "stage" },
              { header: "Funding", accessor: "funding", className: "text-blue-600 font-semibold" },
              { header: "Key Innovation", accessor: "innovation" },
              { header: "Impact", accessor: "impact" },
              { header: "Threat", accessor: "threat", className: "font-semibold" },
            ]}
            data={[
              {
                company: "incident.io",
                stage: "Series B",
                funding: "$62M (2024)",
                innovation: "AI-powered incident resolution",
                impact: "70% MTTR reduction",
                threat: "Very High",
              },
              {
                company: "Keep",
                stage: "Pre-Seed",
                funding: "$2.7M (2024)",
                innovation: "Open-source AIOps platform",
                impact: "97% noise reduction",
                threat: "Very High",
              },
              {
                company: "Fiddler AI",
                stage: "Series B+",
                funding: "CB Insights AI 100",
                innovation: "AI observability, model monitoring",
                impact: "Real-time bias detection",
                threat: "High",
              },
              {
                company: "Arize",
                stage: "Series B+",
                funding: "Undisclosed",
                innovation: "ML observability platform",
                impact: "Real-time model performance",
                threat: "High",
              },
              {
                company: "Baserun",
                stage: "Seed/Series A",
                funding: "Undisclosed",
                innovation: "AI agent testing & observability",
                impact: "Agent performance monitoring",
                threat: "High",
              },
              {
                company: "Laminar",
                stage: "Seed",
                funding: "Open-source",
                innovation: "Text analytics, eval platform",
                impact: "AI agent evaluation",
                threat: "Medium",
              },
            ]}
          />

          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg mt-6">
            <h4 className="font-semibold text-gray-900 mb-3">Traditional AMS Disruption Impact</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 mb-2"><strong>Traditional L1 Monitoring:</strong></p>
                <p className="text-2xl font-bold text-red-600">80% automation potential</p>
              </div>
              <div>
                <p className="text-gray-700 mb-2"><strong>Incident Triage:</strong></p>
                <p className="text-2xl font-bold text-red-600">90% automated classification</p>
              </div>
              <div>
                <p className="text-gray-700 mb-2"><strong>Root Cause Analysis:</strong></p>
                <p className="text-2xl font-bold text-orange-600">60% faster with AI</p>
              </div>
              <div>
                <p className="text-gray-700 mb-2"><strong>Self-Healing:</strong></p>
                <p className="text-2xl font-bold text-orange-600">30-40% auto-resolved</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Category 4: DevSecOps */}
        <Section
          title="4. DevSecOps & Application Security"
          subtitle="Market Size: $12B+ TAM | Supply Chain Attacks: +650% (2024)"
          icon={<Shield className="h-6 w-6" />}
          badge="Very High Threat"
        >
          <DataTable
            title="DevSecOps Security Innovation"
            description="6 startups revolutionizing application security with AI"
            columns={[
              { header: "Company", accessor: "company", className: "font-semibold text-gray-900" },
              { header: "Stage", accessor: "stage" },
              { header: "Funding", accessor: "funding", className: "text-blue-600 font-semibold" },
              { header: "Valuation", accessor: "valuation", className: "text-green-600 font-semibold" },
              { header: "Security Focus", accessor: "focus" },
              { header: "Growth/Impact", accessor: "impact" },
            ]}
            data={[
              {
                company: "Socket",
                stage: "Series B",
                funding: "$40M (Oct 2024)",
                valuation: "$150M+",
                focus: "Supply chain security",
                impact: "400% revenue growth YoY",
              },
              {
                company: "Snyk",
                stage: "Series G",
                funding: "$196.5M (2022)",
                valuation: "$7.4B",
                focus: "Developer-first security",
                impact: "60% faster remediation",
              },
              {
                company: "Virtue AI",
                stage: "Seed+Series A",
                funding: "$30M (2025)",
                valuation: "$120M+",
                focus: "AI security gap bridging",
                impact: "Real-time protection",
              },
              {
                company: "Concentric AI",
                stage: "Series B",
                funding: "$45M (Oct 2024)",
                valuation: "$180M+",
                focus: "Autonomous data security",
                impact: "80% risk reduction",
              },
              {
                company: "CodeAnt AI",
                stage: "Seed",
                funding: "$2M (2025)",
                valuation: "$20M",
                focus: "AI code review",
                impact: "<5% false positives",
              },
              {
                company: "Corgea",
                stage: "YC-backed",
                funding: "Undisclosed",
                valuation: "$15M+",
                focus: "Auto security fixes",
                impact: "Business logic flaw detection",
              },
            ]}
          />

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mt-6">
            <h4 className="font-semibold text-gray-900 mb-3">Security Transformation Metrics</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">90%+</p>
                <p className="text-sm text-gray-600">Vulnerability detection accuracy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">85-95%</p>
                <p className="text-sm text-gray-600">False positive reduction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">50-70%</p>
                <p className="text-sm text-gray-600">Faster remediation</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">60%</p>
                <p className="text-sm text-gray-600">Faster tech debt resolution</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Category 5: Cloud FinOps */}
        <Section
          title="5. Cloud Cost Optimization & FinOps"
          subtitle="Market Size: $723B cloud spend (2025) | Waste: 27% = $195B+"
          icon={<Cloud className="h-6 w-6" />}
          badge="Very High Threat"
        >
          <DataTable
            title="FinOps & Cloud Optimization Leaders"
            description="5 startups addressing $195B+ cloud waste problem"
            columns={[
              { header: "Company", accessor: "company", className: "font-semibold text-gray-900" },
              { header: "Stage", accessor: "stage" },
              { header: "Funding", accessor: "funding", className: "text-blue-600 font-semibold" },
              { header: "Valuation", accessor: "valuation", className: "text-green-600 font-semibold" },
              { header: "Cost Reduction", accessor: "savings" },
              { header: "Threat", accessor: "threat", className: "font-semibold" },
            ]}
            data={[
              {
                company: "CloudZero",
                stage: "Series C",
                funding: "$56M (May 2025)",
                valuation: "$300M+",
                savings: "$2M avg savings per customer",
                threat: "Very High",
              },
              {
                company: "Finout",
                stage: "Series B",
                funding: "$26.3M (May 2024)",
                valuation: "$100M+",
                savings: "35% cost reduction",
                threat: "High",
              },
              {
                company: "Datafy",
                stage: "Seed",
                funding: "$20M (Jul 2025)",
                valuation: "$80M+",
                savings: "40% storage savings",
                threat: "High",
              },
              {
                company: "ProsperOps",
                stage: "Series B",
                funding: "$72M (2023)",
                valuation: "$250M+",
                savings: "30% AWS savings",
                threat: "High",
              },
              {
                company: "Kubecost",
                stage: "Acquired",
                funding: "$25M Series A",
                valuation: "Acquired by IBM",
                savings: "45% K8s waste reduction",
                threat: "Medium",
              },
            ]}
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-lg mt-6">
            <h4 className="font-semibold text-gray-900 mb-4">FinOps Market Impact</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Average Cost Reduction</p>
                <p className="text-3xl font-bold text-green-600">30-45%</p>
                <p className="text-xs text-gray-500 mt-1">of cloud spend</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">ROI Timeframe</p>
                <p className="text-3xl font-bold text-green-600">3-6 months</p>
                <p className="text-xs text-gray-500 mt-1">to positive ROI</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Addressable Waste</p>
                <p className="text-3xl font-bold text-green-600">$195B+</p>
                <p className="text-xs text-gray-500 mt-1">annual cloud waste (2025)</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Funding Analysis */}
        <Section
          title="Cross-Cutting Analysis: Funding Trends"
          subtitle="Investment patterns and stage distribution (2024-2025)"
          icon={<DollarSign className="h-6 w-6" />}
          defaultExpanded={true}
        >
          <DataTable
            title="Funding Trends by Stage"
            description="Investment distribution across startup lifecycle stages"
            columns={[
              { header: "Stage", accessor: "stage", className: "font-semibold text-gray-900" },
              { header: "# of Startups", accessor: "count" },
              { header: "Total Funding", accessor: "funding", className: "text-blue-600 font-semibold" },
              { header: "Avg. Round Size", accessor: "avg", className: "text-green-600 font-semibold" },
              { header: "Characteristics", accessor: "characteristics" },
            ]}
            data={[
              {
                stage: "Seed",
                count: "18 (23%)",
                funding: "$180M+",
                avg: "$10M",
                characteristics: "Quick validation, strong AI differentiation",
              },
              {
                stage: "Series A",
                count: "28 (36%)",
                funding: "$680M+",
                avg: "$24M",
                characteristics: "Product-market fit, initial enterprise adoption",
              },
              {
                stage: "Series B",
                count: "22 (28%)",
                funding: "$2.1B+",
                avg: "$95M",
                characteristics: "Scaling phase, proven ROI, competitive moats",
              },
              {
                stage: "Series C",
                count: "10 (13%)",
                funding: "$5.2B+",
                avg: "$520M",
                characteristics: "Market leadership, acquisition targets",
              },
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Geographic Distribution</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">United States</span>
                  <span className="font-semibold text-blue-600">64 startups (82%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">United Kingdom</span>
                  <span className="font-semibold text-blue-600">8 startups (10%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Israel</span>
                  <span className="font-semibold text-blue-600">3 startups (4%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Germany</span>
                  <span className="font-semibold text-blue-600">3 startups (4%)</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Productivity Impact Benchmarking</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Development Speed</span>
                  <span className="font-semibold text-green-600">55% faster (35-90%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Testing Efficiency</span>
                  <span className="font-semibold text-green-600">70% reduction (50-95%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Incident Resolution</span>
                  <span className="font-semibold text-green-600">60% MTTR reduction (40-80%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Security Scanning</span>
                  <span className="font-semibold text-green-600">85% FP reduction (70-95%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Cloud Costs</span>
                  <span className="font-semibold text-green-600">35% savings (25-50%)</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Threat Assessment Matrix */}
        <Section
          title="Threat Assessment Matrix"
          subtitle="Strategic categorization of startup disruption potential"
          icon={<AlertTriangle className="h-6 w-6" />}
          defaultExpanded={true}
        >
          {/* Top 10 Most Disruptive */}
          <div className="bg-gradient-to-r from-red-50 via-orange-50 to-amber-50 border-2 border-red-300 rounded-xl p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center text-lg">
              <Rocket className="w-6 h-6 text-red-600 mr-2" />
              Top 10 Most Disruptive Startups (Immediate 18-36 Month Impact)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">1. Cursor</p>
                    <p className="text-sm text-gray-600">$2.5B valuation, redefining code generation</p>
                  </div>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">Very High</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">2. Codeium</p>
                    <p className="text-sm text-gray-600">$1.25B valuation, GitHub Copilot competitor</p>
                  </div>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">Very High</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">3. Glean</p>
                    <p className="text-sm text-gray-600">$4.5B valuation, 87.5% increase in 8 months</p>
                  </div>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">Very High</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">4. Poolside AI</p>
                    <p className="text-sm text-gray-600">$3B+ valuation, $500M Series B funding</p>
                  </div>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">Very High</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">5. Snyk</p>
                    <p className="text-sm text-gray-600">$7.4B valuation, developer security leader</p>
                  </div>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">Very High</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">6. Socket</p>
                    <p className="text-sm text-gray-600">400% revenue growth, supply chain security</p>
                  </div>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">Very High</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">7. CloudZero</p>
                    <p className="text-sm text-gray-600">Most funded FinOps startup, $118M total</p>
                  </div>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">Very High</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">8. incident.io</p>
                    <p className="text-sm text-gray-600">$96M funding, AI-powered incident mgmt</p>
                  </div>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">Very High</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">9. Stainless</p>
                    <p className="text-sm text-gray-600">OpenAI, Anthropic, Meta as customers</p>
                  </div>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">Very High</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">10. testRigor</p>
                    <p className="text-sm text-gray-600">521% growth, autonomous QA pioneer</p>
                  </div>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">Very High</span>
                </div>
              </div>
            </div>
          </div>

          {/* Threat Level Characteristics */}
          <TabGroup
            tabs={[
              {
                id: "very-high",
                label: "Very High Threat",
                content: (
                  <div className="space-y-4">
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">Characteristics (22 startups - 28%)</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>$100M+ funding OR unicorn valuations ($1B+)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>400%+ revenue growth rates</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>70%+ productivity improvements demonstrated</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Enterprise adoption &gt;500 companies</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>AI-native architecture with generative AI capabilities</span>
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      <strong>Impact Timeline:</strong> Immediate 18-36 month disruption to traditional AMS
                    </p>
                  </div>
                ),
              },
              {
                id: "high",
                label: "High Threat",
                content: (
                  <div className="space-y-4">
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">Characteristics (31 startups - 40%)</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>$20M-$100M funding raised</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Strong product-market fit with 100-500 enterprise customers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>50-70% productivity improvements</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Series A/B stage with clear growth trajectory</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Proven ROI and competitive moats established</span>
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      <strong>Examples:</strong> Augment, Synthesized, Finout, Mabl, Applitools, Virtue AI, Concentric AI, Port, Arize, Fiddler AI
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      <strong>Impact Timeline:</strong> 24-48 month impact horizon
                    </p>
                  </div>
                ),
              },
              {
                id: "medium",
                label: "Medium Threat",
                content: (
                  <div className="space-y-4">
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">Characteristics (25 startups - 32%)</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Seed to early Series A funding stage</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Niche focus with 30-50% productivity improvements</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>&lt;100 customers but rapid adoption trajectory</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Innovative approach to specific problem domain</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Emerging technology with validation needed</span>
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      <strong>Examples:</strong> Keep, CodeAnt AI, Corgea, Laminar, Baserun, Hazy, Simulacra, Fly.io, Buildkite
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      <strong>Impact Timeline:</strong> 48+ month emerging threat horizon
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </Section>

        {/* Strategic Implications */}
        <Section
          title="Strategic Implications for AI-AMS"
          subtitle="Partnership strategy, revenue impact, and competitive response timeline"
          icon={<Target className="h-6 w-6" />}
          defaultExpanded={true}
        >
          {/* Revenue Impact Model */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-xl p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-4 text-lg flex items-center">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
              Traditional AMS Displacement Risk Analysis
            </h4>
            <DataTable
              title="Revenue Impact by AMS Layer"
              description="Quantifying the displacement threat from startup ecosystem"
              columns={[
                { header: "AMS Layer", accessor: "layer", className: "font-semibold text-gray-900" },
                { header: "Current Annual Value", accessor: "value", className: "text-blue-600 font-semibold" },
                { header: "Startup Displacement %", accessor: "displacement" },
                { header: "Net Risk", accessor: "risk", className: "text-red-600 font-bold" },
              ]}
              data={[
                {
                  layer: "L1 Support",
                  value: "$30M (30% of $100M AMS)",
                  displacement: "60-70% automation",
                  risk: "-$18-21M",
                },
                {
                  layer: "L2 Development",
                  value: "$40M",
                  displacement: "50-60% productivity gains",
                  risk: "-$20-24M",
                },
                {
                  layer: "L3 Architecture",
                  value: "$20M",
                  displacement: "30-40% efficiency",
                  risk: "-$6-8M",
                },
                {
                  layer: "Operations",
                  value: "$10M",
                  displacement: "70-80% automation",
                  risk: "-$7-8M",
                },
                {
                  layer: "TOTAL RISK",
                  value: "$100M baseline",
                  displacement: "51-61% overall displacement",
                  risk: "-$51-61M",
                },
              ]}
            />
          </div>

          {/* Mitigation Strategy */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-4 text-lg flex items-center">
              <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
              Mitigation through AI-AMS Transformation
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="text-sm text-gray-600 mb-1">AI Integration Services</p>
                <p className="text-2xl font-bold text-green-600">+$30M</p>
                <p className="text-xs text-gray-500">New revenue stream</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="text-sm text-gray-600 mb-1">Outcome-Based Premium</p>
                <p className="text-2xl font-bold text-green-600">+$15M</p>
                <p className="text-xs text-gray-500">20% pricing premium</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="text-sm text-gray-600 mb-1">Platform Orchestration</p>
                <p className="text-2xl font-bold text-green-600">+$10M</p>
                <p className="text-xs text-gray-500">Integration fees</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="text-sm text-gray-600 mb-1">AI Governance & Risk</p>
                <p className="text-2xl font-bold text-green-600">+$8M</p>
                <p className="text-xs text-gray-500">Compliance services</p>
              </div>
            </div>
            <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded-lg">
              <p className="text-gray-900">
                <strong>Net Impact:</strong> <span className="text-red-600">-$51M</span> (displacement) + <span className="text-green-600">+$63M</span> (new revenue) =
                <span className="text-2xl font-bold text-green-600 ml-2">+$12M (12% growth)</span>
              </p>
            </div>
          </div>

          {/* Partnership Strategy */}
          <TabGroup
            tabs={[
              {
                id: "tier1",
                label: "Tier 1 - Must-Partner",
                content: (
                  <div className="space-y-4">
                    <p className="text-gray-700 mb-4">
                      <strong>Strategic Rationale:</strong> Cannot build competitive alternatives - must integrate these category leaders
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Code Generation</h5>
                        <p className="text-sm text-gray-700 mb-2">Cursor, Codeium, GitHub Copilot</p>
                        <p className="text-xs text-gray-600">Rationale: AI code generation requires massive model training - partner vs. build</p>
                      </div>
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Security</h5>
                        <p className="text-sm text-gray-700 mb-2">Snyk, Socket</p>
                        <p className="text-xs text-gray-600">Rationale: Established enterprise trust and vulnerability databases</p>
                      </div>
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Cost Optimization</h5>
                        <p className="text-sm text-gray-700 mb-2">CloudZero</p>
                        <p className="text-xs text-gray-600">Rationale: Purpose-built FinOps platform with deep cloud integration</p>
                      </div>
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Enterprise Search</h5>
                        <p className="text-sm text-gray-700 mb-2">Glean</p>
                        <p className="text-xs text-gray-600">Rationale: Network effects and enterprise integrations already established</p>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: "tier2",
                label: "Tier 2 - Selective Integration",
                content: (
                  <div className="space-y-4">
                    <p className="text-gray-700 mb-4">
                      <strong>Strategic Rationale:</strong> Complementary capabilities - integrate selectively based on client needs
                    </p>
                    <div className="space-y-3">
                      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h5 className="font-semibold text-gray-900">Testing Automation</h5>
                            <p className="text-sm text-gray-700">testRigor, Synthesized, Mabl</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">Complementary to ARE framework - enhance with autonomous QA agents</p>
                      </div>
                      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h5 className="font-semibold text-gray-900">AI Observability</h5>
                            <p className="text-sm text-gray-700">Fiddler AI, Arize</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">AI-specific model monitoring and performance tracking</p>
                      </div>
                      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h5 className="font-semibold text-gray-900">API Management</h5>
                            <p className="text-sm text-gray-700">Stainless, Speakeasy</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">Developer experience enhancement for API-first architectures</p>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: "tier3",
                label: "Tier 3 - Build/Differentiate",
                content: (
                  <div className="space-y-4">
                    <p className="text-gray-700 mb-4">
                      <strong>Strategic Rationale:</strong> Build competitive offerings where ARE capabilities already exist
                    </p>
                    <div className="space-y-3">
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h5 className="font-semibold text-gray-900">Knowledge Management</h5>
                            <p className="text-sm text-gray-700">Build on ARE's kOnboard</p>
                          </div>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">80% comparable</span>
                        </div>
                        <p className="text-xs text-gray-600">ARE's kOnboard already achieves 80% knowledge transition reduction - enhance vs. partner</p>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h5 className="font-semibold text-gray-900">Incident Management</h5>
                            <p className="text-sm text-gray-700">Enhance ARE's agentic workflows</p>
                          </div>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Competitive</span>
                        </div>
                        <p className="text-xs text-gray-600">ARE's agentic workflows already competitive - enhance with AI correlation</p>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h5 className="font-semibold text-gray-900">Resilience Engineering</h5>
                            <p className="text-sm text-gray-700">Leverage ARE's 20+ resilience agents</p>
                          </div>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Unique strength</span>
                        </div>
                        <p className="text-xs text-gray-600">Proprietary resilience agents provide differentiation - build on this foundation</p>
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
          />

          {/* Competitive Response Timeline */}
          <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-4">Competitive Response Timeline</h4>
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-3">
                  <div className="w-32 flex-shrink-0">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">0-6 months</span>
                  </div>
                  <h5 className="font-semibold text-gray-900">Immediate Actions</h5>
                </div>
                <ul className="ml-32 space-y-2 text-sm text-gray-700">
                  <li>• Partner with top 5 code generation platforms (Cursor, Codeium, GitHub Copilot)</li>
                  <li>• Integrate Socket for supply chain security</li>
                  <li>• Deploy CloudZero for FinOps capabilities</li>
                  <li>• Launch ARE Agent Marketplace with 3rd-party integrations</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <div className="w-32 flex-shrink-0">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">6-18 months</span>
                  </div>
                  <h5 className="font-semibold text-gray-900">Short-term Strategy</h5>
                </div>
                <ul className="ml-32 space-y-2 text-sm text-gray-700">
                  <li>• Build agentic workflows matching incident.io capabilities</li>
                  <li>• Enhance kOnboard to compete with Glean</li>
                  <li>• Develop synthetic data integration for testing automation</li>
                  <li>• Establish formal partnerships with 10-15 strategic startups</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <div className="w-32 flex-shrink-0">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">18-36 months</span>
                  </div>
                  <h5 className="font-semibold text-gray-900">Medium-term Vision</h5>
                </div>
                <ul className="ml-32 space-y-2 text-sm text-gray-700">
                  <li>• Acquire or build stakes in 3-5 strategic startups</li>
                  <li>• Develop proprietary AI agents to compete with commodity offerings</li>
                  <li>• Create platform ecosystem with revenue share models</li>
                  <li>• Position as "AI-AMS orchestration layer" above point solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* M&A Opportunities */}
        <Section
          title="Investment & M&A Opportunities"
          subtitle="Prime acquisition targets and strategic rationale"
          icon={<DollarSign className="h-6 w-6" />}
        >
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-gray-900 mb-4">Prime Acquisition Targets (Series A/Early Series B)</h4>
            <p className="text-sm text-gray-600 mb-4">Strategic rationale: Fill capability gaps, acquire talent, eliminate competition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-purple-200">
              <div className="flex items-start justify-between mb-3">
                <h5 className="font-semibold text-gray-900">CodeAnt AI</h5>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-semibold">$50-80M</span>
              </div>
              <p className="text-sm text-gray-700 mb-2"><strong>Current:</strong> $20M valuation, $2M raised</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Rationale:</strong> Code review automation with &lt;5% false positives</p>
              <p className="text-sm text-gray-600"><strong>Strategic Value:</strong> Immediate DevSecOps offering</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-purple-200">
              <div className="flex items-start justify-between mb-3">
                <h5 className="font-semibold text-gray-900">Keep (Open-source AIOps)</h5>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-semibold">$30-50M</span>
              </div>
              <p className="text-sm text-gray-700 mb-2"><strong>Current:</strong> $10M valuation, $2.7M raised</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Rationale:</strong> 97% noise reduction, open-source community</p>
              <p className="text-sm text-gray-600"><strong>Strategic Value:</strong> AIOps leadership + developer community</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-purple-200">
              <div className="flex items-start justify-between mb-3">
                <h5 className="font-semibold text-gray-900">Synthesized</h5>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-semibold">$150-200M</span>
              </div>
              <p className="text-sm text-gray-700 mb-2"><strong>Current:</strong> $80M valuation, $20M raised</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Rationale:</strong> Autonomous QA agents, testing transformation</p>
              <p className="text-sm text-gray-600"><strong>Strategic Value:</strong> Complete testing automation suite</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-purple-200">
              <div className="flex items-start justify-between mb-3">
                <h5 className="font-semibold text-gray-900">incident.io</h5>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-semibold">$400-500M</span>
              </div>
              <p className="text-sm text-gray-700 mb-2"><strong>Current:</strong> $200M valuation, $96M raised</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Rationale:</strong> AI-powered incident management leader</p>
              <p className="text-sm text-gray-600"><strong>Strategic Value:</strong> Market leader position (competitive bid)</p>
            </div>
          </div>
        </Section>

        {/* Final Assessment */}
        <Section
          title="Final Threat Assessment & Survival Strategies"
          subtitle="Critical risk evaluation and transformation roadmap"
          icon={<AlertTriangle className="h-6 w-6" />}
          defaultExpanded={true}
        >
          <div className="bg-gradient-to-r from-red-100 via-red-50 to-orange-50 border-2 border-red-400 rounded-xl p-8 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-2xl font-bold text-gray-900">Risk to Traditional AMS</h4>
              <div className="text-center">
                <p className="text-5xl font-bold text-red-600">9/10</p>
                <p className="text-sm text-gray-600 mt-1">CRITICAL</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <XCircle className="w-5 h-5 text-red-600 mr-2" />
                  Key Vulnerabilities
                </h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">1.</span>
                    <span>Labor arbitrage model collapsing (automation &gt; offshore)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">2.</span>
                    <span>Pricing erosion due to productivity gains</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">3.</span>
                    <span>Talent shortage in AI-native skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">4.</span>
                    <span>Client direct procurement of AI tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">5.</span>
                    <span>Startup ecosystem moving faster than enterprises</span>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Survival Strategies
                </h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">1.</span>
                    <span><strong>Aggressive partnership</strong> with top 20 startups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">2.</span>
                    <span><strong>AI-first transformation</strong> of delivery model</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">3.</span>
                    <span><strong>Outcome-based pricing</strong> to capture AI gains</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">4.</span>
                    <span><strong>Talent transformation</strong> from manual to AI orchestration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">5.</span>
                    <span><strong>Platform strategy</strong> as integration layer</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
              <p className="text-gray-900">
                <strong>Estimated Timeline to Market Disruption:</strong>
                <span className="text-2xl font-bold text-red-600 ml-2">18-36 months</span>
              </p>
            </div>
          </div>

          {/* Market Evolution Timeline */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-4">Market Evolution Timeline</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h5 className="font-semibold text-gray-900 mb-2">2025-2026: Disruption Phase</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 40-50% adoption of AI coding tools in enterprises</li>
                  <li>• 60% reduction in L1 support headcount</li>
                  <li>• Traditional AMS pricing pressure: 20-30% rate reduction</li>
                </ul>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h5 className="font-semibold text-gray-900 mb-2">2027-2028: Transformation Phase</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 70%+ enterprises using autonomous testing</li>
                  <li>• L2/L3 roles shift to "AI-Ops Specialists"</li>
                  <li>• Outcome-based contracts become standard</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h5 className="font-semibold text-gray-900 mb-2">2029-2030: Consolidation Phase</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 3-5 dominant AI-AMS platforms emerge</li>
                  <li>• Traditional SIs merge or acquire AI startups</li>
                  <li>• Human+AI collaboration reaches 80/20 balance</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-300"
        >
          <div className="flex justify-between items-center">
            <Link
              href="/competitive-intelligence"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Competitive Intelligence
            </Link>
            <Link
              href="/business-case"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              Business Case & ROI
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
