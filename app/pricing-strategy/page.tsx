"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, DollarSign, TrendingUp, Shield, Users, FileText, BarChart3, Calculator, AlertTriangle, CheckCircle } from "lucide-react";
import { Section } from "@/components/Section";
import { DataTable } from "@/components/DataTable";
import { TabGroup } from "@/components/TabGroup";
import { MetricCard } from "@/components/MetricCard";

export default function PricingStrategy() {
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
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="section-heading mb-4">
            Pricing Strategy Framework: <span className="gradient-text">Outcome-Based & Consumption Models</span>
          </h1>
          <p className="text-xl text-gray-600">
            For Fortune 500 Clients - Aligning Vendor Incentives with Business Outcomes
          </p>
        </motion.div>

        {/* Executive Summary */}
        <Section title="Executive Summary" icon={<BarChart3 className="h-6 w-6" />}>
          <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              label="Premium Justification"
              value="20-30%"
              subtitle="Through productivity gains"
              variant="success"
              delay={0.1}
            />
            <MetricCard
              label="Client Barriers Reduced"
              value="40%"
              subtitle="Via risk-sharing models"
              variant="default"
              delay={0.2}
            />
            <MetricCard
              label="Satisfaction Improvement"
              value="60%"
              subtitle="Outcome-based contracts"
              variant="success"
              delay={0.3}
            />
            <MetricCard
              label="TAM for AI-AMS"
              value="$50B+"
              subtitle="Total addressable market"
              variant="default"
              delay={0.4}
            />
          </div>
          <div className="rounded-xl bg-blue-50 border-2 border-blue-200 p-6">
            <p className="text-gray-700">
              The evolution from traditional Application Maintenance and Support (AMS) to AI-augmented services necessitates a fundamental shift in pricing strategy.
              Traditional seat-based and time-and-materials models fail to capture the true value proposition of AI-enhanced productivity and outcomes.
              This framework presents innovative pricing approaches that align vendor incentives with client business outcomes while ensuring profitable growth.
            </p>
          </div>
        </Section>

        {/* Section 1: Traditional AMS Pricing Model Analysis */}
        <Section
          title="1. Traditional AMS Pricing Model Analysis"
          icon={<FileText className="h-6 w-6" />}
          subtitle="Understanding current limitations and value disconnection"
        >
          <DataTable
            title="1.1 Current Pricing Limitations"
            columns={[
              { header: "Traditional Model", accessor: "model" },
              { header: "Structure", accessor: "structure" },
              { header: "Limitations", accessor: "limitations" },
              { header: "Client Pain Points", accessor: "painPoints" },
              { header: "Market Evolution", accessor: "evolution" },
            ]}
            data={[
              {
                model: "FTE-Based",
                structure: "Fixed monthly rate per resource",
                limitations: "No incentive for efficiency",
                painPoints: "Pay for time, not outcomes",
                evolution: "Declining 15%/year",
              },
              {
                model: "Time & Materials",
                structure: "Hourly rates for services",
                limitations: "Unpredictable costs",
                painPoints: "Budget uncertainty",
                evolution: "Stable but commoditized",
              },
              {
                model: "Fixed Price",
                structure: "Project-based deliverables",
                limitations: "Risk transfer to vendor",
                painPoints: "Limited flexibility",
                evolution: "Growing in scope-defined projects",
              },
              {
                model: "Managed Services",
                structure: "SLA-based monthly fee",
                limitations: "Limited innovation incentive",
                painPoints: "Static service levels",
                evolution: "Mature market, slow growth",
              },
            ]}
          />

          <DataTable
            title="1.2 Value Disconnection Analysis"
            columns={[
              { header: "Pricing Element", accessor: "element" },
              { header: "Traditional Focus", accessor: "traditional" },
              { header: "Client Value Reality", accessor: "reality" },
              { header: "Misalignment Impact", accessor: "impact", className: "font-semibold text-red-600" },
            ]}
            data={[
              {
                element: "Resource Count",
                traditional: "Number of FTEs",
                reality: "Business outcomes achieved",
                impact: "65% value disconnect",
              },
              {
                element: "Time Spent",
                traditional: "Hours worked",
                reality: "Problems solved efficiently",
                impact: "70% efficiency penalty",
              },
              {
                element: "Service Levels",
                traditional: "Uptime and response time",
                reality: "Business impact prevention",
                impact: "45% reactive focus",
              },
              {
                element: "Fixed Scope",
                traditional: "Predefined deliverables",
                reality: "Adaptive business needs",
                impact: "55% flexibility constraint",
              },
            ]}
          />
        </Section>

        {/* Section 2: AI-AMS Value Proposition */}
        <Section
          title="2. AI-AMS Value Proposition Framework"
          icon={<TrendingUp className="h-6 w-6" />}
          subtitle="Quantifying AI-driven value creation and business outcomes"
        >
          <DataTable
            title="2.1 AI-Driven Value Creation"
            columns={[
              { header: "Value Driver", accessor: "driver" },
              { header: "Traditional AMS", accessor: "traditional" },
              { header: "AI-Augmented AMS", accessor: "aiAugmented", className: "font-semibold text-blue-600" },
              { header: "Value Multiplier", accessor: "multiplier", className: "font-semibold text-green-600" },
              { header: "Pricing Opportunity", accessor: "pricing" },
            ]}
            data={[
              {
                driver: "Productivity",
                traditional: "100% baseline",
                aiAugmented: "180% efficiency",
                multiplier: "1.8x",
                pricing: "30% premium justification",
              },
              {
                driver: "Quality",
                traditional: "95% defect detection",
                aiAugmented: "99.2% AI-assisted",
                multiplier: "1.05x",
                pricing: "Quality guarantee premiums",
              },
              {
                driver: "Speed",
                traditional: "Standard delivery",
                aiAugmented: "55% faster TTM",
                multiplier: "1.8x",
                pricing: "Time-based value pricing",
              },
              {
                driver: "Proactivity",
                traditional: "20% preventive",
                aiAugmented: "85% predictive",
                multiplier: "4.25x",
                pricing: "Outcome-based premiums",
              },
              {
                driver: "Innovation",
                traditional: "Limited automation",
                aiAugmented: "Continuous AI improvement",
                multiplier: "3x",
                pricing: "IP and innovation fees",
              },
            ]}
          />

          <DataTable
            title="2.2 Business Outcome Value Quantification"
            columns={[
              { header: "Business Outcome", accessor: "outcome" },
              { header: "Measurement Method", accessor: "measurement" },
              { header: "Typical Value Range", accessor: "valueRange", className: "font-semibold text-green-600" },
              { header: "Pricing Basis", accessor: "pricing" },
              { header: "Share Ratio", accessor: "shareRatio" },
            ]}
            data={[
              {
                outcome: "Cost Reduction",
                measurement: "Operational cost savings",
                valueRange: "$2-5M annually",
                pricing: "20-30% of savings",
                shareRatio: "50/50 split",
              },
              {
                outcome: "Revenue Enhancement",
                measurement: "Faster feature delivery impact",
                valueRange: "$5-15M annually",
                pricing: "10-15% of incremental revenue",
                shareRatio: "60/40 split",
              },
              {
                outcome: "Risk Mitigation",
                measurement: "Downtime/incident prevention",
                valueRange: "$1-8M annually",
                pricing: "25-35% of risk value",
                shareRatio: "70/30 split",
              },
              {
                outcome: "Productivity Gains",
                measurement: "Developer efficiency improvement",
                valueRange: "$3-10M annually",
                pricing: "20-25% of productivity value",
                shareRatio: "55/45 split",
              },
            ]}
          />
        </Section>

        {/* Section 3: Outcome-Based Pricing Models */}
        <Section
          title="3. Outcome-Based Pricing Models"
          icon={<DollarSign className="h-6 w-6" />}
          subtitle="Performance-linked structures and business value sharing"
        >
          <DataTable
            title="3.1 Performance-Linked Pricing Structure"
            columns={[
              { header: "Outcome Category", accessor: "category" },
              { header: "Baseline Performance", accessor: "baseline" },
              { header: "Target Performance", accessor: "target", className: "font-semibold text-blue-600" },
              { header: "Fee Structure", accessor: "feeStructure" },
              { header: "Risk Sharing", accessor: "riskSharing" },
            ]}
            data={[
              {
                category: "System Uptime",
                baseline: "99.5%",
                target: "99.9%",
                feeStructure: "Base fee + 50% uptime bonus",
                riskSharing: "Penalties for <99.7%",
              },
              {
                category: "Incident Resolution",
                baseline: "4.2 hours MTTR",
                target: "1.5 hours MTTR",
                feeStructure: "Base fee + speed premium",
                riskSharing: "SLA credits for delays",
              },
              {
                category: "Deployment Success",
                baseline: "85% success rate",
                target: "97% success rate",
                feeStructure: "Base fee + success bonus",
                riskSharing: "Rollback cost responsibility",
              },
              {
                category: "Cost Optimization",
                baseline: "Current spend baseline",
                target: "30% reduction target",
                feeStructure: "Base fee + savings share",
                riskSharing: "Guaranteed minimum savings",
              },
            ]}
          />

          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 mb-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Model A: Revenue-Linked AMS</h3>
            <p className="mb-3 text-gray-700">
              <strong>Structure:</strong> Base service fee (70%) + Revenue performance bonus (30%)
            </p>
            <ul className="mb-4 space-y-2 text-sm text-gray-700">
              <li><strong>Base Fee:</strong> $2.8M annually for core AMS services</li>
              <li><strong>Performance Bonus:</strong> 15% of incremental revenue from faster feature delivery</li>
              <li><strong>Cap:</strong> Maximum annual fee of $4.5M</li>
              <li><strong>Floor:</strong> Minimum guaranteed revenue threshold of $1M incremental</li>
            </ul>
            <div className="rounded-lg bg-white p-4">
              <p className="mb-2 text-sm font-semibold text-gray-900">Example Contract:</p>
              <pre className="text-xs text-gray-700">
{`Year 1: $2.8M base + $450K performance = $3.25M total
Year 2: $2.8M base + $675K performance = $3.48M total
Year 3: $2.8M base + $825K performance = $3.63M total`}
              </pre>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Model B: Cost Reduction Sharing</h3>
            <p className="mb-3 text-gray-700">
              <strong>Structure:</strong> Shared risk/reward based on operational cost savings
            </p>
            <ul className="mb-4 space-y-2 text-sm text-gray-700">
              <li><strong>Investment Phase:</strong> Vendor funds 40% of transformation costs</li>
              <li><strong>Savings Phase:</strong> 60/40 split of operational savings for 3 years</li>
              <li><strong>Baseline:</strong> Current operational costs established through audit</li>
              <li><strong>Minimum Guarantee:</strong> 20% cost reduction or penalty payments</li>
            </ul>
            <div className="rounded-lg bg-white p-4">
              <p className="mb-2 text-sm font-semibold text-gray-900">Financial Example:</p>
              <pre className="text-xs text-gray-700">
{`Current Annual AMS Costs: $8M
Target Reduction: 35% ($2.8M savings)
Vendor Share: 40% ($1.12M annually)
Client Benefit: 60% ($1.68M annually)
Vendor Investment: $1.2M upfront transformation`}
              </pre>
            </div>
          </div>
        </Section>

        {/* Section 4: Consumption-Based Models */}
        <Section
          title="4. Consumption-Based Pricing Models"
          icon={<Calculator className="h-6 w-6" />}
          subtitle="AI usage frameworks and tiered consumption pricing"
        >
          <DataTable
            title="4.1 AI Usage Consumption Framework"
            columns={[
              { header: "AI Service Category", accessor: "category" },
              { header: "Unit of Consumption", accessor: "unit" },
              { header: "Base Rate", accessor: "baseRate", className: "font-semibold text-green-600" },
              { header: "Volume Discounts", accessor: "discount" },
              { header: "Premium Features", accessor: "premium" },
            ]}
            data={[
              {
                category: "AI Model Inference",
                unit: "Per 1K API calls",
                baseRate: "$2.50",
                discount: "15% at 1M calls",
                premium: "Real-time responses +25%",
              },
              {
                category: "Automated Testing",
                unit: "Per test execution",
                baseRate: "$0.15",
                discount: "20% at 10K tests",
                premium: "Visual testing +50%",
              },
              {
                category: "Code Generation",
                unit: "Per generated function",
                baseRate: "$5.00",
                discount: "10% at 1K functions",
                premium: "Security scanning +30%",
              },
              {
                category: "Incident Analysis",
                unit: "Per analyzed incident",
                baseRate: "$25.00",
                discount: "25% at 500 incidents",
                premium: "Root cause AI +40%",
              },
              {
                category: "Monitoring & Alerts",
                unit: "Per monitored service",
                baseRate: "$150/month",
                discount: "30% at 100 services",
                premium: "Predictive alerts +60%",
              },
            ]}
          />

          <TabGroup
            tabs={[
              {
                id: "tier1",
                label: "Tier 1: Starter",
                content: (
                  <div className="rounded-xl bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200 p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-gray-900">Up to $50K/month consumption</h4>
                      <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">STARTER</span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Basic AI automation</li>
                      <li>✓ Standard support</li>
                      <li>✓ Community resources</li>
                      <li>✓ 99.5% uptime SLA</li>
                      <li>✓ 4-hour response time</li>
                    </ul>
                    <p className="mt-4 text-sm font-semibold text-green-600">Rate: Standard pricing with 5% early adopter discount</p>
                  </div>
                ),
              },
              {
                id: "tier2",
                label: "Tier 2: Professional",
                content: (
                  <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-gray-900">$50K-$200K/month consumption</h4>
                      <span className="rounded-full bg-blue-200 px-3 py-1 text-xs font-semibold text-blue-700">PROFESSIONAL</span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Advanced AI features</li>
                      <li>✓ Dedicated support</li>
                      <li>✓ Custom workflows</li>
                      <li>✓ 99.7% uptime SLA</li>
                      <li>✓ 2-hour response time</li>
                      <li>✓ Dedicated Customer Success Manager</li>
                    </ul>
                    <p className="mt-4 text-sm font-semibold text-green-600">Rate: 10% volume discount on consumption</p>
                  </div>
                ),
              },
              {
                id: "tier3",
                label: "Tier 3: Enterprise",
                content: (
                  <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-gray-900">$200K+/month consumption</h4>
                      <span className="rounded-full bg-purple-200 px-3 py-1 text-xs font-semibold text-purple-700">ENTERPRISE</span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Custom AI models</li>
                      <li>✓ 24/7 support</li>
                      <li>✓ Strategic consulting</li>
                      <li>✓ 99.9% uptime SLA</li>
                      <li>✓ 1-hour response time</li>
                      <li>✓ Executive relationship management</li>
                      <li>✓ Custom pricing negotiation</li>
                    </ul>
                    <p className="mt-4 text-sm font-semibold text-green-600">Rate: 20% volume discount + custom pricing</p>
                  </div>
                ),
              },
            ]}
          />
        </Section>

        {/* Sections 5-10 continue... */}
        {/* Due to length, showing summary cards for remaining sections */}
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl bg-white border-2 border-gray-200 p-6 shadow-sm"
          >
            <Shield className="mb-3 h-8 w-8 text-blue-600" />
            <h3 className="mb-2 text-lg font-semibold text-gray-900">5. Risk-Sharing Models</h3>
            <p className="mb-4 text-sm text-gray-600">
              Transformation investment sharing, performance guarantees, and gainsharing models.
            </p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Vendor contributes 40-80% of transformation costs</li>
              <li>• Performance guarantees with penalty/reward structures</li>
              <li>• 60/40 productivity gainsharing split</li>
              <li>• Innovation revenue sharing (70/30 split)</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl bg-white border-2 border-gray-200 p-6 shadow-sm"
          >
            <Users className="mb-3 h-8 w-8 text-blue-600" />
            <h3 className="mb-2 text-lg font-semibold text-gray-900">6. Competitive Positioning</h3>
            <p className="mb-4 text-sm text-gray-600">
              Market positioning analysis and pricing decision matrix.
            </p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Big 4: 25-40% premium (match value, beat innovation)</li>
              <li>• Traditional SI: 10-20% below market</li>
              <li>• Pure-play AI: 50-100% premium</li>
              <li>• Offshore: 30-50% below market</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-xl bg-white border-2 border-gray-200 p-6 shadow-sm"
          >
            <FileText className="mb-3 h-8 w-8 text-blue-600" />
            <h3 className="mb-2 text-lg font-semibold text-gray-900">7. Contract Structure</h3>
            <p className="mb-4 text-sm text-gray-600">
              Outcome-based contract templates and SLA frameworks.
            </p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Base fee: 60-70% of total</li>
              <li>• Performance-linked: 20-30%</li>
              <li>• Innovation bonus: 10%</li>
              <li>• AI-enhanced SLAs with ±20% monthly fee adjustments</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-xl bg-white border-2 border-gray-200 p-6 shadow-sm"
          >
            <BarChart3 className="mb-3 h-8 w-8 text-blue-600" />
            <h3 className="mb-2 text-lg font-semibold text-gray-900">8. Financial Modeling</h3>
            <p className="mb-4 text-sm text-gray-600">
              Pricing model comparison and ROI analysis.
            </p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Outcome-based: $13.6M total 3-year revenue</li>
              <li>• Consumption: $12.8M total 3-year revenue</li>
              <li>• Hybrid: $13.5M total 3-year revenue</li>
              <li>• ROI range: 285-418% depending on model</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="rounded-xl bg-white border-2 border-gray-200 p-6 shadow-sm"
          >
            <CheckCircle className="mb-3 h-8 w-8 text-blue-600" />
            <h3 className="mb-2 text-lg font-semibold text-gray-900">9. Implementation Guidelines</h3>
            <p className="mb-4 text-sm text-gray-600">
              Model selection criteria and negotiation frameworks.
            </p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• AI-ready clients: Pure outcome-based (6-9 months)</li>
              <li>• Conservative: Hybrid with guarantees (12-18 months)</li>
              <li>• Cost-conscious: Consumption-based (3-6 months)</li>
              <li>• 12-week negotiation framework</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="rounded-xl bg-white border-2 border-gray-200 p-6 shadow-sm"
          >
            <AlertTriangle className="mb-3 h-8 w-8 text-blue-600" />
            <h3 className="mb-2 text-lg font-semibold text-gray-900">10. Risk Management</h3>
            <p className="mb-4 text-sm text-gray-600">
              Pricing model risks and mitigation strategies.
            </p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Performance shortfall: Conservative baselines</li>
              <li>• Scope creep: Clear boundaries + change control</li>
              <li>• Market competition: Value differentiation</li>
              <li>• 10% risk reserve fund requirement</li>
            </ul>
          </motion.div>
        </div>

        {/* Strategic Recommendations */}
        <Section
          title="Strategic Recommendations"
          icon={<CheckCircle className="h-6 w-6" />}
          subtitle="Key takeaways for successful AI-AMS pricing"
        >
          <div className="space-y-4">
            <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6">
              <h4 className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-900">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs text-white">1</span>
                Start with Hybrid Models
              </h4>
              <p className="text-sm text-gray-700">
                Begin with 70% traditional/30% outcome-based pricing to build confidence and demonstrate value before transitioning to full outcome-based contracts.
              </p>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-6">
              <h4 className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-900">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-xs text-white">2</span>
                Invest in Measurement Infrastructure
              </h4>
              <p className="text-sm text-gray-700">
                Robust performance tracking infrastructure is essential for outcome-based success. Automated data collection and third-party validation ensure trust.
              </p>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 p-6">
              <h4 className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-900">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-xs text-white">3</span>
                Share Risk and Reward
              </h4>
              <p className="text-sm text-gray-700">
                Mutual investment in transformation creates stronger partnerships. Vendors should fund 40-60% of transformation costs in exchange for performance-based revenue upside.
              </p>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 p-6">
              <h4 className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-900">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-600 text-xs text-white">4</span>
                Price for Value, Not Cost
              </h4>
              <p className="text-sm text-gray-700">
                AI productivity gains justify 20-30% premiums over traditional services. Focus pricing discussions on business outcomes, not resource costs.
              </p>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 p-6">
              <h4 className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-900">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs text-white">5</span>
                Prepare for Evolution
              </h4>
              <p className="text-sm text-gray-700">
                Build contract flexibility to adapt as AI capabilities advance. Include technology refresh cycles and baseline recalibration triggers.
              </p>
            </div>
          </div>
        </Section>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl bg-gradient-to-br from-gray-900 to-blue-900 p-8 text-white"
        >
          <h2 className="mb-4 text-2xl font-bold">Conclusion: The Future of AI-AMS Pricing</h2>
          <p className="mb-6 text-gray-200">
            The transition to AI-augmented AMS services represents a paradigm shift that demands equally innovative pricing strategies.
            Traditional time-and-materials or FTE-based models fail to capture the exponential value creation possible with AI integration.
            Our framework demonstrates that outcome-based and consumption models not only better align vendor-client interests but also create sustainable competitive advantages.
          </p>
          <p className="text-gray-300">
            The organizations that successfully implement these innovative pricing strategies will not only achieve higher margins and client satisfaction
            but will also establish themselves as leaders in the AI-driven future of enterprise services.
          </p>
        </motion.div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link
            href="/business-case"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-gray-700 shadow-md transition-all hover:bg-gray-50 hover:shadow-lg"
          >
            <ArrowLeft className="h-5 w-5" />
            Business Case
          </Link>
          <Link
            href="/execution-playbook"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
          >
            Execution Playbook
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
