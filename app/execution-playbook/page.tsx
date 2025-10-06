"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Users, Shield, Handshake, TrendingUp, BookOpen, Award, DollarSign, Target } from "lucide-react";
import { SourceCard } from "@/components/SourceCard";
import { DataTable } from "@/components/DataTable";
import { Section } from "@/components/Section";
import workforceData from "@/data/workforce-data.json";
import riskData from "@/data/risk-data.json";
import competitiveData from "@/data/competitive-intelligence.json";

const tabs = [
  { id: "workforce", label: "Workforce Transformation", icon: Users },
  { id: "risk", label: "Risk & Governance", icon: Shield },
  { id: "ecosystem", label: "Startup Ecosystem", icon: Handshake },
];

export default function ExecutionPlaybook() {
  const [activeTab, setActiveTab] = useState("workforce");

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            href="/value-chain"
            className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Value Chain
          </Link>
          <h1 className="section-heading mb-4">
            The Execution Playbook: <span className="gradient-text">How to Win</span>
          </h1>
          <p className="text-xl text-gray-600">
            Workforce, Risk, and Ecosystem - the implementation trinity
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="mb-8 flex gap-2 border-b border-gray-200">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 border-b-2 px-6 py-3 font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-blue-600"
                }`}
              >
                <Icon className="h-5 w-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "workforce" && <WorkforceTab />}
          {activeTab === "risk" && <RiskTab />}
          {activeTab === "ecosystem" && <EcosystemTab />}
        </motion.div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between">
          <Link
            href="/value-chain"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Value Chain
          </Link>
          <Link
            href="/next-steps"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Next: Decision Framework
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}

function WorkforceTab() {
  return (
    <div className="space-y-8">
      {/* Executive Summary */}
      <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 p-8">
        <h2 className="mb-6 text-3xl font-bold text-purple-900">Workforce Transformation Analysis</h2>
        <p className="mb-6 text-lg text-purple-800">
          The AI revolution in AMS is fundamentally reshaping workforce requirements, transforming traditional reactive support models into proactive, intelligent operations.
        </p>
        <div className="grid gap-6 md:grid-cols-5">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">{workforceData.executiveSummary.l1Reduction}</div>
            <div className="mt-1 text-sm font-medium text-purple-700">L1 Role Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">{workforceData.executiveSummary.l2Evolution}</div>
            <div className="mt-1 text-sm font-medium text-purple-700">L2 Role Evolution</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">{workforceData.executiveSummary.upskillingRequired}</div>
            <div className="mt-1 text-sm font-medium text-purple-700">Upskilling Required</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">{workforceData.executiveSummary.annualSavings}</div>
            <div className="mt-1 text-sm font-medium text-purple-700">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">{workforceData.executiveSummary.transitionPeriod}</div>
            <div className="mt-1 text-sm font-medium text-purple-700">Transition Period</div>
          </div>
        </div>
      </div>

      {/* Traditional Structure */}
      <Section
        title="Current State: Traditional AMS Workforce"
        subtitle={`100 FTEs costing ${workforceData.traditionalStructure.totalCost} annually`}
        icon={<Users className="h-6 w-6" />}
      >
        <DataTable
          title="Traditional Support Tier Structure"
          columns={[
            { header: "Role Level", accessor: "level", className: "font-semibold text-gray-900" },
            { header: "Responsibilities", accessor: "responsibilities", className: "text-gray-700" },
            { header: "Skills", accessor: "skills", className: "text-sm text-gray-600" },
            { header: "Team Size", accessor: "teamSize", className: "text-center font-semibold text-blue-600" },
            { header: "Annual Cost", accessor: "annualCost", className: "text-right font-semibold text-green-600" }
          ]}
          data={workforceData.traditionalStructure.roles}
        />
      </Section>

      {/* Productivity Constraints */}
      <Section
        title="Current Productivity Constraints & AI Opportunities"
        subtitle="$8.5M in annual inefficiencies that AI can address"
        icon={<TrendingUp className="h-6 w-6" />}
      >
        <DataTable
          title="Cost of Inefficiency Analysis"
          columns={[
            { header: "Challenge Area", accessor: "challenge", className: "font-semibold text-gray-900" },
            { header: "Current Impact", accessor: "impact", className: "text-gray-700" },
            { header: "Annual Cost", accessor: "costOfInefficiency", className: "font-semibold text-red-600" },
            { header: "AI Automation Potential", accessor: "aiOpportunity", className: "font-semibold text-green-600" }
          ]}
          data={workforceData.productivityConstraints}
        />
      </Section>

      {/* New Role Architecture */}
      <Section
        title="AI-Augmented Role Architecture"
        subtitle="5 new role categories replacing traditional structure"
        icon={<Award className="h-6 w-6" />}
      >
        <DataTable
          title="New Role Framework"
          columns={[
            { header: "Role Category", accessor: "category", className: "font-semibold text-gray-900" },
            { header: "Evolution Path", accessor: "evolutionPath", className: "text-blue-600" },
            { header: "Core Responsibilities", accessor: "coreResponsibilities", className: "text-gray-700" },
            { header: "AI Integration", accessor: "aiIntegrationLevel", className: "font-semibold text-purple-600" }
          ]}
          data={workforceData.newRoleArchitecture}
        />
      </Section>

      {/* Role Transformations */}
      <Section
        title="Role Transformation Matrix"
        subtitle="Detailed transition pathways with timelines and success metrics"
      >
        <div className="space-y-4">
          {workforceData.roleTransformations.map((transformation: any, index: number) => (
            <div key={index} className="bcg-card bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-2 text-lg font-bold text-gray-900">{transformation.from}</div>
                  <div className="mb-1 text-sm text-gray-600">→ {transformation.to}</div>
                  <div className="text-sm font-medium text-blue-600">{transformation.transformation}</div>
                </div>
                <div className="text-right">
                  <div className="mb-1 text-sm text-gray-600">Timeline</div>
                  <div className="text-2xl font-bold text-purple-600">{transformation.timeline}</div>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded bg-white px-4 py-2">
                  <div className="text-xs font-medium text-gray-600">New Focus</div>
                  <div className="text-sm text-gray-900">{transformation.newFocus}</div>
                </div>
                <div className="rounded bg-white px-4 py-2">
                  <div className="text-xs font-medium text-gray-600">Success Metric</div>
                  <div className="text-sm font-semibold text-green-600">{transformation.successMetric}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Emerging Roles */}
      <Section
        title="Emerging AI Specialist Roles"
        subtitle="4 new high-value positions with career progression paths"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {workforceData.emergingRoles.map((role: any, index: number) => (
            <div key={index} className="bcg-card">
              <div className="mb-3">
                <h4 className="text-xl font-bold text-gray-900">{role.title}</h4>
                <div className="mt-1 text-sm text-blue-600">{role.evolution}</div>
                <div className="mt-2 text-2xl font-bold text-green-600">{role.salaryRange}</div>
                <div className="text-sm text-gray-600">{role.premium}</div>
              </div>

              <div className="mb-4 space-y-2">
                <div className="text-sm font-semibold text-gray-900">Key Responsibilities:</div>
                {role.responsibilities.map((resp: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1 text-blue-600">•</span>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <div className="mb-2 text-sm font-semibold text-gray-900">Required Skills:</div>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill: string, idx: number) => (
                    <span key={idx} className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded bg-purple-50 px-4 py-2 text-sm">
                <div className="font-medium text-purple-900">Career Path:</div>
                <div className="text-purple-700">{role.careerPath}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Competency Framework */}
      <Section
        title="Core AI Competency Framework"
        subtitle="Progressive skill development from foundation to expert"
        icon={<BookOpen className="h-6 w-6" />}
      >
        <DataTable
          title="Skill Progression Levels"
          columns={[
            { header: "Level", accessor: "level", className: "font-semibold text-gray-900" },
            { header: "Skills Required", accessor: "skills", className: "text-gray-700" },
            { header: "Training Duration", accessor: "duration", className: "text-blue-600" },
            { header: "Certification", accessor: "certification", className: "text-sm text-gray-600" },
            { header: "Business Impact", accessor: "impact", className: "font-semibold text-green-600" }
          ]}
          data={workforceData.competencyFramework}
        />
      </Section>

      {/* Learning Pathways */}
      <Section
        title="Role-Specific Learning Pathways"
        subtitle="Structured transition programs with detailed curricula"
      >
        <div className="space-y-8">
          {/* L1 to AI-Ops */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 p-6">
            <h4 className="mb-4 text-2xl font-bold text-blue-900">
              {workforceData.learningPathways.l1ToAIOps.title}
            </h4>
            <div className="mb-4 text-lg font-semibold text-blue-700">
              Duration: {workforceData.learningPathways.l1ToAIOps.duration}
            </div>
            <div className="space-y-4">
              {workforceData.learningPathways.l1ToAIOps.phases.map((phase: any, idx: number) => (
                <div key={idx} className="rounded-lg bg-white p-4">
                  <div className="mb-2 font-bold text-gray-900">{phase.phase}</div>
                  <ul className="space-y-1">
                    {phase.topics.map((topic: string, topicIdx: number) => (
                      <li key={topicIdx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-blue-600">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* L2 to Collaboration */}
          <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6">
            <h4 className="mb-4 text-2xl font-bold text-indigo-900">
              {workforceData.learningPathways.l2ToCollaboration.title}
            </h4>
            <div className="mb-4 text-lg font-semibold text-indigo-700">
              Duration: {workforceData.learningPathways.l2ToCollaboration.duration}
            </div>
            <div className="space-y-4">
              {workforceData.learningPathways.l2ToCollaboration.phases.map((phase: any, idx: number) => (
                <div key={idx} className="rounded-lg bg-white p-4">
                  <div className="mb-2 font-bold text-gray-900">{phase.phase}</div>
                  <ul className="space-y-1">
                    {phase.topics.map((topic: string, topicIdx: number) => (
                      <li key={topicIdx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-indigo-600">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Organizational Models */}
      <Section
        title="Organizational Structure Models"
        subtitle="3 proven approaches for AI team integration"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {workforceData.organizationalModels.map((model: any, index: number) => (
            <div key={index} className="bcg-card">
              <h4 className="mb-3 text-xl font-bold text-gray-900">{model.name}</h4>
              <div className="mb-4 space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-gray-900">Structure:</span>
                  <div className="text-gray-700">{model.structure}</div>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Benefits:</span>
                  <div className="text-gray-700">{model.benefits}</div>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Best For:</span>
                  <div className="text-gray-700">{model.bestFor}</div>
                </div>
              </div>
              <div className="rounded bg-blue-50 px-3 py-2 text-sm">
                <span className="font-semibold text-blue-900">Team Size:</span>
                <div className="text-blue-700">{model.teamSize}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Change Management Timeline */}
      <Section
        title="Change Management & Adoption Timeline"
        subtitle="5-phase, 24-month transformation roadmap"
        icon={<Target className="h-6 w-6" />}
      >
        <div className="space-y-4">
          {workforceData.changeManagementTimeline.map((phase: any, index: number) => (
            <div key={index} className="bcg-card bg-gradient-to-r from-gray-50 to-blue-50">
              <div className="mb-3 flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">{phase.phase}</h4>
                  <div className="text-sm text-gray-600">{phase.duration}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Investment</div>
                  <div className="text-2xl font-bold text-green-600">{phase.investment}</div>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded bg-white px-4 py-2">
                  <div className="text-xs font-medium text-gray-600">Activities</div>
                  <div className="text-sm text-gray-900">{phase.activities}</div>
                </div>
                <div className="rounded bg-white px-4 py-2">
                  <div className="text-xs font-medium text-gray-600">Success Metric</div>
                  <div className="text-sm font-semibold text-blue-600">{phase.successMetric}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Resistance Patterns */}
      <Section
        title="Resistance Management Framework"
        subtitle="Common challenges and proven mitigation strategies"
      >
        <DataTable
          title="Resistance Patterns & Solutions"
          columns={[
            { header: "Resistance Type", accessor: "type", className: "font-semibold text-gray-900" },
            { header: "Frequency", accessor: "frequency", className: "text-red-600 font-semibold" },
            { header: "Root Cause", accessor: "rootCause", className: "text-gray-700" },
            { header: "Mitigation Strategy", accessor: "mitigation", className: "text-blue-600" },
            { header: "Timeline", accessor: "timeline", className: "text-sm text-gray-600" }
          ]}
          data={workforceData.resistancePatterns}
        />
      </Section>

      {/* Compensation Framework */}
      <Section
        title="AI-Augmented Compensation Framework"
        subtitle="Salary benchmarks showing 20-28% premium for AI skills"
        icon={<DollarSign className="h-6 w-6" />}
      >
        <DataTable
          title="Salary Benchmarks"
          columns={[
            { header: "Role Category", accessor: "category", className: "font-semibold text-gray-900" },
            { header: "Traditional Salary", accessor: "traditional", className: "text-gray-700" },
            { header: "AI-Augmented Salary", accessor: "aiAugmented", className: "text-green-600 font-semibold" },
            { header: "Premium", accessor: "premium", className: "text-blue-600 font-bold" },
            { header: "Justification", accessor: "justification", className: "text-sm text-gray-600" }
          ]}
          data={workforceData.compensationBenchmarks}
        />

        <div className="mt-6 space-y-4 rounded-lg bg-gradient-to-r from-purple-50 to-indigo-50 p-6">
          <h4 className="font-bold text-gray-900">Career Progression Tracks</h4>
          <div className="space-y-3 text-sm">
            <div>
              <span className="font-semibold text-purple-900">Technical Track:</span>
              <div className="text-purple-700">{workforceData.careerTracks.technical}</div>
            </div>
            <div>
              <span className="font-semibold text-blue-900">Management Track:</span>
              <div className="text-blue-700">{workforceData.careerTracks.management}</div>
            </div>
            <div>
              <span className="font-semibold text-indigo-900">Hybrid Track:</span>
              <div className="text-indigo-700">{workforceData.careerTracks.hybrid}</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Training ROI */}
      <Section
        title="Workforce Transformation ROI"
        subtitle={`${workforceData.trainingROI.roi} return over 3 years`}
      >
        <div className="mb-6 grid gap-6 md:grid-cols-4">
          <div className="rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 p-6 text-center">
            <div className="text-sm text-gray-600">Total Investment</div>
            <div className="mt-2 text-3xl font-bold text-green-600">{workforceData.trainingROI.investment}</div>
            <div className="text-sm text-gray-600">{workforceData.trainingROI.timeline}</div>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 p-6 text-center">
            <div className="text-sm text-gray-600">Annual Return</div>
            <div className="mt-2 text-3xl font-bold text-blue-600">{workforceData.trainingROI.annualReturn}</div>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 p-6 text-center">
            <div className="text-sm text-gray-600">3-Year ROI</div>
            <div className="mt-2 text-3xl font-bold text-purple-600">{workforceData.trainingROI.roi}</div>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-orange-50 to-amber-50 p-6 text-center">
            <div className="text-sm text-gray-600">Productivity Gain</div>
            <div className="mt-2 text-3xl font-bold text-orange-600">{workforceData.trainingROI.productivityGain}</div>
          </div>
        </div>

        <DataTable
          title="Investment Breakdown"
          columns={[
            { header: "Category", accessor: "category", className: "font-semibold text-gray-900" },
            { header: "Year 1 Cost", accessor: "year1", className: "text-gray-700" },
            { header: "3-Year Total", accessor: "total3Year", className: "text-blue-600" },
            { header: "ROI", accessor: "roi", className: "font-semibold text-green-600" },
            { header: "Payback Period", accessor: "payback", className: "text-sm text-gray-600" }
          ]}
          data={workforceData.trainingROI.breakdown}
        />
      </Section>

      {/* Productivity Gains */}
      <Section
        title="Productivity & Efficiency Gains"
        subtitle="Measurable improvements across key metrics"
      >
        <DataTable
          title="Workforce Performance Metrics"
          columns={[
            { header: "Metric", accessor: "metric", className: "font-semibold text-gray-900" },
            { header: "Traditional", accessor: "traditional", className: "text-gray-700" },
            { header: "AI-Augmented", accessor: "aiAugmented", className: "text-blue-600 font-semibold" },
            { header: "Improvement", accessor: "improvement", className: "text-green-600 font-bold" },
            { header: "Annual Value", accessor: "annualValue", className: "text-green-700 font-bold" }
          ]}
          data={workforceData.productivityGains}
        />
      </Section>

      {/* Summary */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white">
        <h3 className="mb-4 text-2xl font-bold">Workforce Transformation Summary</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="mb-3 font-semibold">Financial Impact</h4>
            <ul className="space-y-2 text-sm text-purple-100">
              <li>• $4.6M annual savings per 100-person team</li>
              <li>• 485% ROI on training investment</li>
              <li>• 10-month payback period</li>
              <li>• 150% productivity gain</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Workforce Transformation</h4>
            <ul className="space-y-2 text-sm text-purple-100">
              <li>• 67% reduction in L1 support roles</li>
              <li>• 43% evolution of L2 technical roles</li>
              <li>• 85% of workforce requires upskilling</li>
              <li>• 8-12 month transition period</li>
            </ul>
          </div>
        </div>
      </div>

      <SourceCard sources={workforceData.sources} />
    </div>
  );
}

function RiskTab() {
  return (
    <div className="space-y-8">
      {/* Summary */}
      <div className="rounded-2xl bg-red-50 border-2 border-red-200 p-8">
        <h2 className="mb-4 text-2xl font-bold text-red-900">THE RISK REALITY</h2>
        <p className="text-lg text-red-800">
          Risk Mitigation Value: <span className="font-bold">{riskData.riskMitigationValue.penaltyAvoidance}</span> penalty avoidance
        </p>
      </div>

      {/* Security Threats */}
      <div>
        <h3 className="subsection-heading mb-6">AI Security Threats</h3>
        <div className="overflow-x-auto">
          <table className="w-full rounded-lg border bg-white">
            <thead className="bg-red-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Threat</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Severity</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Mitigation</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Effectiveness</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {riskData.securityThreats.map((threat: any, index: number) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">{threat.threat}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                      threat.severity === "Very High" ? "bg-red-100 text-red-800" : "bg-orange-100 text-orange-800"
                    }`}>
                      {threat.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{threat.mitigation}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-20 overflow-hidden rounded-full bg-gray-200">
                        <div className="h-full bg-green-500" style={{ width: threat.effectiveness }} />
                      </div>
                      <span className="text-sm text-gray-600">{threat.effectiveness}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Regulatory Compliance */}
      <div>
        <h3 className="subsection-heading mb-6">Regulatory Compliance</h3>
        <div className="space-y-4">
          {riskData.regulatoryCompliance.map((reg: any, index: number) => (
            <div key={index} className="bcg-card">
              <div className="mb-3 flex items-start justify-between">
                <h4 className="text-xl font-bold text-gray-900">{reg.regulation}</h4>
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                  {reg.timeline}
                </span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>Requirement:</strong> {reg.requirement}</div>
                <div className="text-red-600"><strong>Penalty:</strong> {reg.penalty}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Governance Framework */}
      <div className="rounded-2xl bg-blue-50 border-2 border-blue-200 p-8">
        <h3 className="mb-4 text-xl font-bold text-blue-900">Governance Framework</h3>
        <div className="mb-4">
          <strong className="text-blue-900">{riskData.governanceFramework.chiefAIOfficer}</strong>
        </div>
        <ul className="space-y-2">
          {riskData.governanceFramework.committees.map((committee: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-blue-800">
              <span>•</span>
              <span>{committee}</span>
            </li>
          ))}
        </ul>
      </div>

      <SourceCard sources={riskData.sources} />
    </div>
  );
}

function EcosystemTab() {
  return (
    <div className="space-y-8">
      {/* Summary */}
      <div className="rounded-2xl bg-orange-50 border-2 border-orange-200 p-8">
        <h2 className="mb-4 text-2xl font-bold text-orange-900">PARTNER OR PERISH</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-3xl font-bold text-orange-600">{competitiveData.startupSwarm.totalStartups}</div>
            <div className="text-sm text-orange-700">Total Startups</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">{competitiveData.startupSwarm.totalFunding}</div>
            <div className="text-sm text-orange-700">Total Funding</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">-$51M</div>
            <div className="text-sm text-orange-700">Risk without integration</div>
          </div>
        </div>
      </div>

      {/* Integration Strategy */}
      <div>
        <h3 className="subsection-heading mb-6">Your Integration Strategy</h3>

        <div className="space-y-6">
          {/* Tier 1 */}
          <div className="bcg-card bg-red-50">
            <h4 className="mb-4 text-xl font-bold text-red-900">TIER 1: Must-Partner (Cannot Build)</h4>
            <div className="mb-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">•</span>
                <span>Cursor/Codeium (Code generation)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">•</span>
                <span>Snyk/Socket (Security scanning)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">•</span>
                <span>CloudZero (FinOps)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">•</span>
                <span>Glean (Enterprise search)</span>
              </div>
            </div>
            <div className="rounded bg-white px-4 py-2 text-sm font-medium text-red-700">
              → Revenue share model: 70/30 split
            </div>
          </div>

          {/* Tier 2 */}
          <div className="bcg-card bg-orange-50">
            <h4 className="mb-4 text-xl font-bold text-orange-900">TIER 2: Selective Integration</h4>
            <div className="mb-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">•</span>
                <span>testRigor, Mabl (Testing automation)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">•</span>
                <span>incident.io (Incident management)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">•</span>
                <span>Stainless (API generation)</span>
              </div>
            </div>
            <div className="rounded bg-white px-4 py-2 text-sm font-medium text-orange-700">
              → White-label or reseller agreements
            </div>
          </div>

          {/* Tier 3 */}
          <div className="bcg-card bg-green-50">
            <h4 className="mb-4 text-xl font-bold text-green-900">TIER 3: Build & Differentiate</h4>
            <div className="mb-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">•</span>
                <span>Knowledge management (proprietary)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">•</span>
                <span>Agentic workflows (competitive moat)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">•</span>
                <span>Industry-specific compliance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Impact */}
      <div className="rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 p-8 text-white">
        <h3 className="mb-6 text-2xl font-bold">Financial Impact</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="mb-2 text-3xl font-bold">-$51M</div>
            <div className="text-orange-200">Displacement risk without integration</div>
          </div>
          <div>
            <div className="mb-2 text-3xl font-bold">+$63M</div>
            <div className="text-orange-200">New revenue with smart partnerships</div>
          </div>
          <div>
            <div className="mb-2 text-3xl font-bold">+$12M</div>
            <div className="text-orange-200">Net impact (12% growth)</div>
          </div>
        </div>
      </div>

      <SourceCard sources={["Crunchbase startup data 2024-2025", "Vendor partnership models", "Revenue projection analysis"]} />
    </div>
  );
}
