"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Shield, TrendingUp, Zap, AlertTriangle } from "lucide-react";
import { SourceCard } from "@/components/SourceCard";
import { CompetitorDeepDive } from "@/components/CompetitorDeepDive";
import competitiveData from "@/data/competitive-intelligence.json";

export default function CompetitiveIntelligence() {
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
            Competitive Intelligence: <span className="gradient-text">Know Your Enemy</span>
          </h1>
          <p className="text-xl text-gray-600">
            Deep analysis of platforms, strategies, and execution capabilities
          </p>
        </motion.div>

        {/* Key Insight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 p-8"
        >
          <div className="mb-4 flex items-start gap-4">
            <AlertTriangle className="h-8 w-8 flex-shrink-0 text-red-600" />
            <div>
              <h2 className="mb-2 text-2xl font-bold text-red-900">
                Three-Front Attack on Your Business
              </h2>
              <p className="mb-4 text-lg text-red-800">
                You have <span className="font-bold">18 months</span> to respond before significant market displacement.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-white p-4">
                  <div className="text-2xl font-bold text-blue-600">Big 4</div>
                  <div className="text-sm text-gray-700">$2-3B investments, 20-30% premium pricing</div>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <div className="text-2xl font-bold text-purple-600">Platform Giants</div>
                  <div className="text-sm text-gray-700">Automating L1/L2 support out of existence</div>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <div className="text-2xl font-bold text-orange-600">78 Startups</div>
                  <div className="text-sm text-gray-700">$8.2B funding, 70-90% productivity gains</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section A: Big 4 Deep Dives */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="subsection-heading mb-4">
              A. The Big 4 Consulting Giants - Deep Analysis
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive breakdown of platform architecture, unique capabilities, and market execution strategies
            </p>
          </motion.div>

          {competitiveData.big4.map((company, index) => (
            <motion.div
              key={company.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CompetitorDeepDive competitor={company} />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6"
          >
            <h4 className="mb-3 text-xl font-bold text-blue-900">💡 Strategic Insight: Big 4 Positioning</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span><strong>Premium Pricing:</strong> All commanding 20-30% premium through AI transformation story</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span><strong>C-Suite Access:</strong> Leveraging existing executive relationships for platform adoption</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span><strong>Hybrid Models:</strong> Combining consulting expertise with technology platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span><strong>Industry Specialization:</strong> Vertical-specific AI models providing competitive moats</span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Section B: Platform Giants */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="subsection-heading mb-8"
          >
            B. Platform Giants Eating the Stack
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2">
            {competitiveData.platformGiants.map((platform, index) => (
              <motion.div
                key={platform.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bcg-card"
              >
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-xl font-bold text-gray-900">{platform.company}</h3>
                  <Shield className="h-6 w-6 text-red-500" />
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  {platform.revenue && <p><strong>Revenue:</strong> {platform.revenue}</p>}
                  {platform.marketCap && <p><strong>Market Cap:</strong> {platform.marketCap}</p>}
                  {platform.penetration && <p><strong>Penetration:</strong> {platform.penetration}</p>}
                  <p><strong>AI Capability:</strong> {platform.aiCapability}</p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full bg-red-600"
                      style={{ width: `${platform.threatLevel * 10}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-red-600">
                    Threat: {platform.threatLevel}/10
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 rounded-2xl bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 p-6"
          >
            <h4 className="mb-3 text-xl font-bold text-red-900">💡 Strategic Insight: Platform Threat</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span><strong>ServiceNow:</strong> 80% Fortune 500 penetration - automating ITSM workflows end-to-end</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span><strong>GitHub Copilot:</strong> 50M+ developers - eliminating traditional development support needs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span><strong>Observability Platforms:</strong> Datadog & PagerDuty making L1/L2 monitoring obsolete</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span><strong>Direct Procurement:</strong> Enterprises buying platform subscriptions, bypassing services</span>
              </li>
            </ul>
          </motion.div>

          <SourceCard sources={["Public company filings", "Gartner Market Research"]} />
        </section>

        {/* Section C: Startup Swarm */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="subsection-heading mb-8"
          >
            C. The Startup Swarm ({competitiveData.startupSwarm.totalStartups} Disruptors)
          </motion.h2>

          <div className="mb-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 p-8">
            <div className="mb-6 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-red-600">
                  {competitiveData.startupSwarm.veryHighThreat.count}
                </div>
                <div className="text-sm font-medium text-gray-700">Very High Threat</div>
                <div className="mt-2 text-xs text-gray-600">
                  {competitiveData.startupSwarm.veryHighThreat.percentage}
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-orange-600">
                  {competitiveData.startupSwarm.highThreat.count}
                </div>
                <div className="text-sm font-medium text-gray-700">High Threat</div>
                <div className="mt-2 text-xs text-gray-600">
                  {competitiveData.startupSwarm.highThreat.percentage}
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-yellow-600">
                  {competitiveData.startupSwarm.mediumThreat.count}
                </div>
                <div className="text-sm font-medium text-gray-700">Medium Threat</div>
                <div className="mt-2 text-xs text-gray-600">
                  {competitiveData.startupSwarm.mediumThreat.percentage}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 font-semibold text-gray-900">Very High Threat Examples:</h4>
                <div className="flex flex-wrap gap-2">
                  {competitiveData.startupSwarm.veryHighThreat.examples.map((startup) => (
                    <span
                      key={startup}
                      className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800"
                    >
                      {startup}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Characteristics:</strong>{" "}
                {competitiveData.startupSwarm.veryHighThreat.characteristics}
              </p>
              <p className="text-lg font-semibold text-orange-900">
                💰 Total Funding: {competitiveData.startupSwarm.totalFunding}
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 p-6"
          >
            <h4 className="mb-3 text-xl font-bold text-orange-900">💡 Strategic Insight: Startup Integration</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span><strong>Direct Procurement Risk:</strong> Clients buying startups directly, bypassing traditional AMS providers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span><strong>Point Solution Excellence:</strong> 70-90% productivity gains in specific SDLC areas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span><strong>Partnership Imperative:</strong> Must integrate or face $51M displacement risk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span><strong>Revenue Opportunity:</strong> +$63M potential through smart ecosystem partnerships</span>
              </li>
            </ul>
          </motion.div>

          <SourceCard sources={["Crunchbase 2024-2025", "CB Insights", "TechCrunch"]} />
        </section>

        {/* Key Insights Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white"
        >
          <h2 className="mb-6 text-3xl font-bold">Strategic Takeaways for Leadership</h2>
          <ul className="space-y-3">
            {competitiveData.keyInsights.map((insight, index) => (
              <li key={index} className="flex items-start gap-3">
                <Zap className="mt-1 h-5 w-5 flex-shrink-0" />
                <span className="text-lg">{insight}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
          <Link
            href="/startup-ecosystem"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Next: Startup Ecosystem Deep-Dive
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
