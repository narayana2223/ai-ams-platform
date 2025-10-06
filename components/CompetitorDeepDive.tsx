"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Check, X, TrendingUp, Code, Target, Users, Shield, DollarSign, Zap } from "lucide-react";

interface Competitor {
  company: string;
  platform: string;
  positioning: string;
  scale: string;
  investment: string;
  workforce: string;
  threatLevel: number;
  platformArchitecture: Record<string, string>;
  techStack: string[];
  uniqueSellingPropositions: Array<{
    title: string;
    description: string;
    impact: string;
    differentiation: string;
  }>;
  amsCapabilities: Array<{
    name: string;
    description: string;
    impact: string;
    techApproach: string;
    maturity: string;
  }>;
  clientSuccessStories: Array<{
    client: string;
    challenge: string;
    solution: string;
    results: string[];
    industry: string;
    year: number;
  }>;
  marketApproach: {
    strategy: string;
    pricingModel: string;
    targetSegment: string;
    salesMotion: string;
    competitivePositioning: string;
  };
  competitiveAdvantages: string[];
  limitations: string[];
  keyDifferentiators: string[];
  sources: string[];
}

export function CompetitorDeepDive({ competitor }: { competitor: Competitor }) {
  // Track collapsed sections - all start expanded
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());

  const toggleSection = (section: string) => {
    const newCollapsed = new Set(collapsedSections);
    if (newCollapsed.has(section)) {
      newCollapsed.delete(section);
    } else {
      newCollapsed.add(section);
    }
    setCollapsedSections(newCollapsed);
  };

  const isExpanded = (section: string) => !collapsedSections.has(section);

  const getThreatColor = (level: number) => {
    if (level >= 8) return "bg-red-500";
    if (level >= 6) return "bg-orange-500";
    return "bg-yellow-500";
  };

  return (
    <div className="bcg-card mb-8 overflow-hidden">
      {/* Header */}
      <div className="mb-6 border-b border-gray-200 pb-6">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">{competitor.company}</h3>
            <div className="mt-2 text-lg font-semibold text-blue-600">{competitor.platform}</div>
            <div className="mt-1 text-sm italic text-gray-600">{competitor.positioning}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Threat Level</div>
            <div className="mt-1 flex items-center gap-2">
              <div className="h-3 w-32 overflow-hidden rounded-full bg-gray-200">
                <div
                  className={`h-full ${getThreatColor(competitor.threatLevel)}`}
                  style={{ width: `${competitor.threatLevel * 10}%` }}
                />
              </div>
              <span className="text-2xl font-bold text-red-600">{competitor.threatLevel}/10</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-blue-50 p-4">
            <div className="text-xs font-medium text-gray-600">Scale</div>
            <div className="mt-1 text-sm font-semibold text-gray-900">{competitor.scale}</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4">
            <div className="text-xs font-medium text-gray-600">Investment</div>
            <div className="mt-1 text-sm font-semibold text-gray-900">{competitor.investment}</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4">
            <div className="text-xs font-medium text-gray-600">Workforce</div>
            <div className="mt-1 text-sm font-semibold text-gray-900">{competitor.workforce}</div>
          </div>
        </div>
      </div>

      {/* Platform Architecture */}
      <Section
        title="Platform Architecture & Tech Stack"
        icon={<Code className="h-5 w-5" />}
        isExpanded={isExpanded("architecture")}
        onToggle={() => toggleSection("architecture")}
      >
        <div className="space-y-4">
          {Object.entries(competitor.platformArchitecture).map(([key, value]) => (
            <div key={key} className="rounded-lg bg-gray-50 p-3">
              <div className="text-xs font-semibold uppercase text-gray-600">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </div>
              <div className="mt-1 text-sm text-gray-900">{value}</div>
            </div>
          ))}
          <div className="mt-4">
            <div className="mb-2 text-sm font-semibold text-gray-900">Technology Stack:</div>
            <div className="flex flex-wrap gap-2">
              {competitor.techStack.map((tech, idx) => (
                <span key={idx} className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Unique Selling Propositions */}
      <Section
        title="Unique Selling Propositions"
        icon={<Target className="h-5 w-5" />}
        isExpanded={isExpanded("usp")}
        onToggle={() => toggleSection("usp")}
      >
        <div className="space-y-4">
          {competitor.uniqueSellingPropositions.map((usp, idx) => (
            <div key={idx} className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
              <h5 className="mb-2 text-lg font-bold text-blue-900">{usp.title}</h5>
              <p className="mb-3 text-sm text-gray-700">{usp.description}</p>
              <div className="grid gap-2 md:grid-cols-2">
                <div className="rounded bg-white px-3 py-2">
                  <div className="text-xs font-medium text-gray-600">Impact</div>
                  <div className="text-sm font-semibold text-green-700">{usp.impact}</div>
                </div>
                <div className="rounded bg-white px-3 py-2">
                  <div className="text-xs font-medium text-gray-600">Differentiation</div>
                  <div className="text-sm font-semibold text-purple-700">{usp.differentiation}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* AMS Capabilities */}
      <Section
        title="AMS-Specific Capabilities"
        icon={<Zap className="h-5 w-5" />}
        isExpanded={isExpanded("ams")}
        onToggle={() => toggleSection("ams")}
      >
        <div className="space-y-4">
          {competitor.amsCapabilities.map((capability, idx) => (
            <div key={idx} className="rounded-lg bg-gradient-to-r from-gray-50 to-blue-50 p-4">
              <h5 className="mb-2 font-bold text-gray-900">{capability.name}</h5>
              <p className="mb-3 text-sm text-gray-700">{capability.description}</p>
              <div className="grid gap-2 md:grid-cols-3">
                <div className="rounded bg-white px-3 py-2">
                  <div className="text-xs font-medium text-gray-600">Impact</div>
                  <div className="text-sm font-semibold text-green-600">{capability.impact}</div>
                </div>
                <div className="rounded bg-white px-3 py-2">
                  <div className="text-xs font-medium text-gray-600">Tech Approach</div>
                  <div className="text-sm text-gray-900">{capability.techApproach}</div>
                </div>
                <div className="rounded bg-white px-3 py-2">
                  <div className="text-xs font-medium text-gray-600">Maturity</div>
                  <div className="text-sm text-blue-600">{capability.maturity}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Client Success Stories */}
      <Section
        title="Client Success Stories"
        icon={<TrendingUp className="h-5 w-5" />}
        isExpanded={isExpanded("success")}
        onToggle={() => toggleSection("success")}
      >
        <div className="space-y-4">
          {competitor.clientSuccessStories.map((story, idx) => (
            <div key={idx} className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <h5 className="font-bold text-green-900">{story.client}</h5>
                  <div className="mt-1 text-xs text-gray-600">
                    {story.industry} • {story.year}
                  </div>
                </div>
              </div>
              <div className="mb-3 space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-gray-900">Challenge:</span>
                  <span className="text-gray-700"> {story.challenge}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Solution:</span>
                  <span className="text-gray-700"> {story.solution}</span>
                </div>
              </div>
              <div>
                <div className="mb-2 text-sm font-semibold text-gray-900">Results:</div>
                <ul className="space-y-1">
                  {story.results.map((result, resultIdx) => (
                    <li key={resultIdx} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Market Approach */}
      <Section
        title="Market Approach & Positioning"
        icon={<DollarSign className="h-5 w-5" />}
        isExpanded={isExpanded("market")}
        onToggle={() => toggleSection("market")}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(competitor.marketApproach).map(([key, value]) => (
            <div key={key} className="rounded-lg bg-purple-50 p-4">
              <div className="text-xs font-semibold uppercase text-purple-900">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </div>
              <div className="mt-2 text-sm text-gray-900">{value}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Competitive Advantages & Limitations */}
      <Section
        title="Competitive Analysis"
        icon={<Shield className="h-5 w-5" />}
        isExpanded={isExpanded("competitive")}
        onToggle={() => toggleSection("competitive")}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h5 className="mb-3 flex items-center gap-2 font-bold text-green-900">
              <Check className="h-5 w-5" />
              Competitive Advantages
            </h5>
            <ul className="space-y-2">
              {competitor.competitiveAdvantages.map((advantage, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1 text-green-600">•</span>
                  <span>{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="mb-3 flex items-center gap-2 font-bold text-red-900">
              <X className="h-5 w-5" />
              Limitations & Gaps
            </h5>
            <ul className="space-y-2">
              {competitor.limitations.map((limitation, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1 text-red-600">•</span>
                  <span>{limitation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Sources */}
      <div className="mt-6 rounded-lg bg-gray-50 p-4">
        <div className="mb-2 text-xs font-semibold uppercase text-gray-600">Sources</div>
        <div className="space-y-1">
          {competitor.sources.map((source, idx) => (
            <div key={idx} className="text-xs text-gray-600">
              • {source}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  icon,
  children,
  isExpanded,
  onToggle,
  defaultOpen = false,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  defaultOpen?: boolean;
}) {
  return (
    <div className="mb-4 border-b border-gray-200 pb-4">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-2 transition-colors hover:text-blue-600"
      >
        <div className="flex items-center gap-2">
          <span className="text-blue-600">{icon}</span>
          <h4 className="text-lg font-bold text-gray-900">{title}</h4>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-600" />
        )}
      </button>
      {isExpanded && <div className="mt-4">{children}</div>}
    </div>
  );
}
