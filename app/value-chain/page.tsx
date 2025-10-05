"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Zap, Code, TestTube, Rocket, Eye, Wrench, Settings } from "lucide-react";
import { Section } from "@/components/Section";
import { DataTable } from "@/components/DataTable";
import { MetricCard } from "@/components/MetricCard";
import { TabGroup } from "@/components/TabGroup";

export default function ValueChain() {
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
            href="/competitive-intelligence"
            className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Competitive Intelligence
          </Link>
          <h1 className="section-heading mb-4">
            AI-Augmented SDLC: <span className="gradient-text">Value Chain Transformation</span>
          </h1>
          <p className="text-xl text-gray-600">
            55+ GenAI Use Cases Across the Software Development Lifecycle
          </p>
        </motion.div>

        {/* Executive Summary */}
        <Section title="Transformation Impact Summary" icon={<Zap className="h-6 w-6" />}>
          <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              label="Productivity Gains"
              value="60-80%"
              subtitle="Code generation & testing"
              variant="success"
              delay={0.1}
            />
            <MetricCard
              label="Incident Noise Reduction"
              value="90%"
              subtitle="Intelligent correlation"
              variant="success"
              delay={0.2}
            />
            <MetricCard
              label="Faster Deployment"
              value="70%"
              subtitle="AI-powered DevOps"
              variant="success"
              delay={0.3}
            />
            <MetricCard
              label="Annual Savings"
              value="$2.5M"
              subtitle="Per 100-person team"
              variant="success"
              delay={0.4}
            />
          </div>
        </Section>

        {/* Phase 1: Requirements & Planning */}
        <Section
          title="1. Requirements & Planning Phase"
          icon={<Code className="h-6 w-6" />}
          subtitle="Intelligent requirements analysis and AI-powered design"
        >
          <DataTable
            title="1.1 Intelligent Requirements Analysis"
            columns={[
              { header: "Use Case", accessor: "useCase", className: "font-semibold text-gray-900" },
              { header: "Description", accessor: "description" },
              { header: "AI Technology", accessor: "aiTech" },
              { header: "Productivity Impact", accessor: "impact", className: "font-semibold text-green-600" },
              { header: "Market Leaders", accessor: "leaders", className: "text-xs" },
            ]}
            data={[
              {
                useCase: "Automated User Story Generation",
                description: "AI converts business requirements into detailed user stories",
                aiTech: "GPT-4, Claude",
                impact: "65% faster story creation",
                leaders: "Atlassian, Azure DevOps",
              },
              {
                useCase: "Requirements Traceability",
                description: "AI maps business needs to technical specifications",
                aiTech: "Knowledge Graphs, NLP",
                impact: "80% reduction in gaps",
                leaders: "IBM Engineering, Polarion",
              },
              {
                useCase: "Stakeholder Sentiment Analysis",
                description: "AI analyzes feedback to prioritize features",
                aiTech: "Sentiment Analysis, ML",
                impact: "40% better alignment",
                leaders: "ServiceNow, Freshservice",
              },
              {
                useCase: "Risk Prediction for Projects",
                description: "AI forecasts project risks from historical data",
                aiTech: "Predictive Analytics",
                impact: "50% fewer delays",
                leaders: "Microsoft Project, Asana",
              },
            ]}
          />

          <DataTable
            title="1.2 AI-Powered Design & Architecture"
            columns={[
              { header: "Use Case", accessor: "useCase", className: "font-semibold text-gray-900" },
              { header: "Description", accessor: "description" },
              { header: "AI Technology", accessor: "aiTech" },
              { header: "Productivity Impact", accessor: "impact", className: "font-semibold text-green-600" },
              { header: "Market Leaders", accessor: "leaders", className: "text-xs" },
            ]}
            data={[
              {
                useCase: "Architecture Pattern Recommendation",
                description: "AI suggests optimal design patterns",
                aiTech: "Code Analysis, ML",
                impact: "45% faster design",
                leaders: "GitHub Copilot, CodeT5",
              },
              {
                useCase: "Technology Stack Optimization",
                description: "AI recommends best tech stack for requirements",
                aiTech: "Decision Trees, Analytics",
                impact: "30% better performance",
                leaders: "StackOverflow, JetBrains",
              },
              {
                useCase: "API Design Automation",
                description: "AI generates RESTful API specifications",
                aiTech: "Code Generation, OpenAPI",
                impact: "70% faster API creation",
                leaders: "Swagger, Postman",
              },
            ]}
          />
        </Section>

        {/* Phase 2: Development & Coding */}
        <Section
          title="2. Development & Coding Phase"
          icon={<Code className="h-6 w-6" />}
          subtitle="AI-assisted code generation and intelligent code review"
        >
          <DataTable
            title="2.1 AI-Assisted Code Generation"
            columns={[
              { header: "Use Case", accessor: "useCase", className: "font-semibold text-gray-900" },
              { header: "Description", accessor: "description" },
              { header: "AI Technology", accessor: "aiTech" },
              { header: "Productivity Impact", accessor: "impact", className: "font-semibold text-green-600" },
              { header: "Market Leaders", accessor: "leaders", className: "text-xs" },
            ]}
            data={[
              {
                useCase: "Intelligent Code Completion",
                description: "Real-time AI-powered code suggestions",
                aiTech: "Transformer Models",
                impact: "35% faster coding",
                leaders: "GitHub Copilot, Tabnine",
              },
              {
                useCase: "Automated Unit Test Generation",
                description: "AI creates comprehensive test suites",
                aiTech: "Code Analysis, ML",
                impact: "80% test coverage increase",
                leaders: "testRigor, Mabl",
              },
              {
                useCase: "Code Refactoring Automation",
                description: "AI improves code quality and performance",
                aiTech: "Static Analysis, ML",
                impact: "60% technical debt reduction",
                leaders: "SonarQube, Sourcegraph",
              },
              {
                useCase: "Documentation Generation",
                description: "AI creates technical documentation from code",
                aiTech: "NLP, Code Analysis",
                impact: "90% documentation time savings",
                leaders: "Cursor, Replit",
              },
              {
                useCase: "Bug Prediction & Prevention",
                description: "AI identifies potential bugs before deployment",
                aiTech: "ML Classification",
                impact: "70% fewer production bugs",
                leaders: "Snyk, DeepCode",
              },
            ]}
          />

          <DataTable
            title="2.2 Intelligent Code Review & Quality"
            columns={[
              { header: "Use Case", accessor: "useCase", className: "font-semibold text-gray-900" },
              { header: "Description", accessor: "description" },
              { header: "AI Technology", accessor: "aiTech" },
              { header: "Productivity Impact", accessor: "impact", className: "font-semibold text-green-600" },
              { header: "Market Leaders", accessor: "leaders", className: "text-xs" },
            ]}
            data={[
              {
                useCase: "Automated Security Scanning",
                description: "AI detects vulnerabilities in real-time",
                aiTech: "Security ML Models",
                impact: "85% faster security reviews",
                leaders: "Snyk, Checkmarx",
              },
              {
                useCase: "Performance Optimization",
                description: "AI suggests code optimizations",
                aiTech: "Performance Analytics",
                impact: "40% performance improvement",
                leaders: "New Relic, Dynatrace",
              },
              {
                useCase: "Code Style Enforcement",
                description: "AI ensures consistent coding standards",
                aiTech: "Rule-based AI, NLP",
                impact: "95% style compliance",
                leaders: "ESLint, Prettier",
              },
            ]}
          />
        </Section>

        {/* Phase 3: Testing & QA */}
        <Section
          title="3. Testing & Quality Assurance Phase"
          icon={<TestTube className="h-6 w-6" />}
          subtitle="AI-powered test automation and intelligent quality assurance"
        >
          <DataTable
            title="3.1 AI-Powered Test Automation"
            columns={[
              { header: "Use Case", accessor: "useCase", className: "font-semibold text-gray-900" },
              { header: "Description", accessor: "description" },
              { header: "AI Technology", accessor: "aiTech" },
              { header: "Productivity Impact", accessor: "impact", className: "font-semibold text-green-600" },
              { header: "Market Leaders", accessor: "leaders", className: "text-xs" },
            ]}
            data={[
              {
                useCase: "Intelligent Test Case Generation",
                description: "AI creates test scenarios from requirements",
                aiTech: "NLP, Code Analysis",
                impact: "75% faster test creation",
                leaders: "testRigor, Functionize",
              },
              {
                useCase: "Self-Healing Test Scripts",
                description: "AI automatically fixes broken test automation",
                aiTech: "ML, Computer Vision",
                impact: "80% reduced maintenance",
                leaders: "Mabl, Testim",
              },
              {
                useCase: "Visual AI Testing",
                description: "AI validates UI/UX across browsers/devices",
                aiTech: "Computer Vision, ML",
                impact: "90% faster visual testing",
                leaders: "Applitools, Percy",
              },
              {
                useCase: "API Test Automation",
                description: "AI generates comprehensive API test suites",
                aiTech: "ML, API Analysis",
                impact: "70% better API coverage",
                leaders: "Postman, Insomnia",
              },
              {
                useCase: "Performance Test Optimization",
                description: "AI designs optimal load testing scenarios",
                aiTech: "Predictive Analytics",
                impact: "60% better performance insights",
                leaders: "BlazeMeter, LoadRunner",
              },
            ]}
          />

          <DataTable
            title="3.2 Intelligent Quality Assurance"
            columns={[
              { header: "Use Case", accessor: "useCase", className: "font-semibold text-gray-900" },
              { header: "Description", accessor: "description" },
              { header: "AI Technology", accessor: "aiTech" },
              { header: "Productivity Impact", accessor: "impact", className: "font-semibold text-green-600" },
              { header: "Market Leaders", accessor: "leaders", className: "text-xs" },
            ]}
            data={[
              {
                useCase: "Defect Prediction",
                description: "AI forecasts which code areas will have bugs",
                aiTech: "ML Classification",
                impact: "65% fewer escaped defects",
                leaders: "Microsoft, IBM",
              },
              {
                useCase: "Test Data Generation",
                description: "AI creates realistic test datasets",
                aiTech: "Synthetic Data, ML",
                impact: "80% faster test data creation",
                leaders: "Informatica, GenRocket",
              },
              {
                useCase: "Cross-Browser Testing",
                description: "AI optimizes testing across multiple platforms",
                aiTech: "ML, Cloud Computing",
                impact: "85% faster compatibility testing",
                leaders: "BrowserStack, Sauce Labs",
              },
            ]}
          />
        </Section>

        {/* Phase 4: Deployment & Release */}
        <Section
          title="4. Deployment & Release Management Phase"
          icon={<Rocket className="h-6 w-6" />}
          subtitle="AI-driven DevOps automation and cloud-native deployment intelligence"
        >
          <DataTable
            title="4.1 AI-Driven DevOps Automation"
            columns={[
              { header: "Use Case", accessor: "useCase", className: "font-semibold text-gray-900" },
              { header: "Description", accessor: "description" },
              { header: "AI Technology", accessor: "aiTech" },
              { header: "Productivity Impact", accessor: "impact", className: "font-semibold text-green-600" },
              { header: "Market Leaders", accessor: "leaders", className: "text-xs" },
            ]}
            data={[
              {
                useCase: "Intelligent Deployment Orchestration",
                description: "AI optimizes deployment sequences",
                aiTech: "ML, Orchestration",
                impact: "70% faster deployments",
                leaders: "GitLab, Harness",
              },
              {
                useCase: "Canary Release Optimization",
                description: "AI manages gradual rollouts with risk assessment",
                aiTech: "ML, Analytics",
                impact: "90% fewer rollback incidents",
                leaders: "LaunchDarkly, Split",
              },
              {
                useCase: "Infrastructure as Code Generation",
                description: "AI creates IaC templates from requirements",
                aiTech: "Code Generation, ML",
                impact: "80% faster infrastructure setup",
                leaders: "Terraform, Pulumi",
              },
              {
                useCase: "Container Optimization",
                description: "AI optimizes Docker/K8s configurations",
                aiTech: "Resource Analytics",
                impact: "50% better resource utilization",
                leaders: "Docker, Kubernetes",
              },
              {
                useCase: "Release Risk Assessment",
                description: "AI predicts deployment risks",
                aiTech: "Risk Analytics, ML",
                impact: "85% risk prediction accuracy",
                leaders: "Spinnaker, Armory",
              },
            ]}
          />

          <DataTable
            title="4.2 Cloud-Native Deployment Intelligence"
            columns={[
              { header: "Use Case", accessor: "useCase", className: "font-semibold text-gray-900" },
              { header: "Description", accessor: "description" },
              { header: "AI Technology", accessor: "aiTech" },
              { header: "Productivity Impact", accessor: "impact", className: "font-semibold text-green-600" },
              { header: "Market Leaders", accessor: "leaders", className: "text-xs" },
            ]}
            data={[
              {
                useCase: "Auto-Scaling Optimization",
                description: "AI manages dynamic resource allocation",
                aiTech: "Predictive Analytics",
                impact: "60% cost optimization",
                leaders: "AWS, Azure, GCP",
              },
              {
                useCase: "Multi-Cloud Deployment",
                description: "AI optimizes workload placement",
                aiTech: "Decision Analytics",
                impact: "40% better performance",
                leaders: "Vercel, Netlify",
              },
              {
                useCase: "Edge Computing Optimization",
                description: "AI determines optimal edge deployment",
                aiTech: "Geo-Analytics, ML",
                impact: "70% latency improvement",
                leaders: "Cloudflare, Fastly",
              },
            ]}
          />
        </Section>

        {/* Phase 5: Monitoring & Operations */}
        <Section
          title="5. Monitoring & Operations Phase"
          icon={<Eye className="h-6 w-6" />}
          subtitle="AI-powered observability and intelligent incident management"
        >
          <DataTable
            title="5.1 AI-Powered Observability"
            columns={[
              { header: "Use Case", accessor: "useCase", className: "font-semibold text-gray-900" },
              { header: "Description", accessor: "description" },
              { header: "AI Technology", accessor: "aiTech" },
              { header: "Productivity Impact", accessor: "impact", className: "font-semibold text-green-600" },
              { header: "Market Leaders", accessor: "leaders", className: "text-xs" },
            ]}
            data={[
              {
                useCase: "Anomaly Detection",
                description: "AI identifies unusual system behavior",
                aiTech: "Unsupervised ML",
                impact: "95% anomaly detection accuracy",
                leaders: "Datadog, Dynatrace",
              },
              {
                useCase: "Root Cause Analysis",
                description: "AI traces issues to their source",
                aiTech: "Causal AI, ML",
                impact: "80% faster issue resolution",
                leaders: "New Relic, Splunk",
              },
              {
                useCase: "Predictive Alerting",
                description: "AI forecasts issues before they occur",
                aiTech: "Time Series ML",
                impact: "90% proactive issue prevention",
                leaders: "PagerDuty, Opsgenie",
              },
              {
                useCase: "Log Analysis & Correlation",
                description: "AI extracts insights from log data",
                aiTech: "NLP, Pattern Recognition",
                impact: "85% faster log analysis",
                leaders: "Elastic, Sumo Logic",
              },
              {
                useCase: "Performance Baseline Learning",
                description: "AI establishes normal performance patterns",
                aiTech: "ML, Statistics",
                impact: "70% better performance insights",
                leaders: "AppDynamics, Honeycomb",
              },
            ]}
          />

          <DataTable
            title="5.2 Intelligent Incident Management"
            columns={[
              { header: "Use Case", accessor: "useCase", className: "font-semibold text-gray-900" },
              { header: "Description", accessor: "description" },
              { header: "AI Technology", accessor: "aiTech" },
              { header: "Productivity Impact", accessor: "impact", className: "font-semibold text-green-600" },
              { header: "Market Leaders", accessor: "leaders", className: "text-xs" },
            ]}
            data={[
              {
                useCase: "Automated Incident Classification",
                description: "AI categorizes and prioritizes incidents",
                aiTech: "Classification ML",
                impact: "90% faster triage",
                leaders: "ServiceNow, incident.io",
              },
              {
                useCase: "Intelligent Escalation",
                description: "AI determines optimal escalation paths",
                aiTech: "Decision Trees, ML",
                impact: "75% better resolution times",
                leaders: "PagerDuty, xMatters",
              },
              {
                useCase: "Automated Resolution",
                description: "AI resolves routine incidents without human intervention",
                aiTech: "Rule-based AI, ML",
                impact: "60% self-healing capability",
                leaders: "BigPanda, Keep",
              },
              {
                useCase: "Incident Prediction",
                description: "AI forecasts potential system failures",
                aiTech: "Predictive Analytics",
                impact: "80% proactive prevention",
                leaders: "Moogsoft, FixStream",
              },
            ]}
          />
        </Section>

        {/* Phase 6: Maintenance & Support */}
        <Section
          title="6. Maintenance & Support Phase"
          icon={<Wrench className="h-6 w-6" />}
          subtitle="AI-enhanced application support and legacy system modernization"
        >
          <DataTable
            title="6.1 AI-Enhanced Application Support"
            columns={[
              { header: "Use Case", accessor: "useCase", className: "font-semibold text-gray-900" },
              { header: "Description", accessor: "description" },
              { header: "AI Technology", accessor: "aiTech" },
              { header: "Productivity Impact", accessor: "impact", className: "font-semibold text-green-600" },
              { header: "Market Leaders", accessor: "leaders", className: "text-xs" },
            ]}
            data={[
              {
                useCase: "Intelligent Ticket Routing",
                description: "AI assigns tickets to optimal engineers",
                aiTech: "ML Classification",
                impact: "85% faster assignment",
                leaders: "ServiceNow, Freshservice",
              },
              {
                useCase: "Automated Problem Diagnosis",
                description: "AI analyzes symptoms to identify root causes",
                aiTech: "Expert Systems, ML",
                impact: "70% faster diagnosis",
                leaders: "IBM Watson, Microsoft AI",
              },
              {
                useCase: "Knowledge Base Intelligence",
                description: "AI maintains and updates solution repositories",
                aiTech: "NLP, Knowledge Graphs",
                impact: "80% better knowledge utilization",
                leaders: "Confluence, Notion",
              },
              {
                useCase: "Proactive Maintenance Scheduling",
                description: "AI optimizes maintenance windows",
                aiTech: "Predictive Analytics",
                impact: "60% reduced downtime",
                leaders: "BMC, CA Technologies",
              },
            ]}
          />

          <DataTable
            title="6.2 Legacy System Modernization"
            columns={[
              { header: "Use Case", accessor: "useCase", className: "font-semibold text-gray-900" },
              { header: "Description", accessor: "description" },
              { header: "AI Technology", accessor: "aiTech" },
              { header: "Productivity Impact", accessor: "impact", className: "font-semibold text-green-600" },
              { header: "Market Leaders", accessor: "leaders", className: "text-xs" },
            ]}
            data={[
              {
                useCase: "Code Migration Automation",
                description: "AI converts legacy code to modern languages",
                aiTech: "Code Translation, ML",
                impact: "70% faster migration",
                leaders: "Google, AWS",
              },
              {
                useCase: "Database Optimization",
                description: "AI optimizes database performance",
                aiTech: "Query Analytics, ML",
                impact: "50% performance improvement",
                leaders: "Oracle, MongoDB",
              },
              {
                useCase: "API Modernization",
                description: "AI creates APIs for legacy systems",
                aiTech: "Code Generation, ML",
                impact: "80% faster API creation",
                leaders: "MuleSoft, Kong",
              },
            ]}
          />
        </Section>

        {/* Phase 7: Change Management */}
        <Section
          title="7. Change Management & Configuration"
          icon={<Settings className="h-6 w-6" />}
          subtitle="Intelligent change control and environment management"
        >
          <DataTable
            title="7.1 Intelligent Change Control"
            columns={[
              { header: "Use Case", accessor: "useCase", className: "font-semibold text-gray-900" },
              { header: "Description", accessor: "description" },
              { header: "AI Technology", accessor: "aiTech" },
              { header: "Productivity Impact", accessor: "impact", className: "font-semibold text-green-600" },
              { header: "Market Leaders", accessor: "leaders", className: "text-xs" },
            ]}
            data={[
              {
                useCase: "Change Impact Analysis",
                description: "AI predicts consequences of changes",
                aiTech: "Dependency Analysis, ML",
                impact: "85% risk prediction accuracy",
                leaders: "GitLab, GitHub",
              },
              {
                useCase: "Automated Rollback",
                description: "AI triggers rollbacks when issues detected",
                aiTech: "Monitoring + ML",
                impact: "95% faster recovery",
                leaders: "Harness, Spinnaker",
              },
              {
                useCase: "Configuration Drift Detection",
                description: "AI identifies unauthorized changes",
                aiTech: "Configuration ML",
                impact: "90% compliance improvement",
                leaders: "Chef, Puppet",
              },
            ]}
          />

          <DataTable
            title="7.2 Environment Management"
            columns={[
              { header: "Use Case", accessor: "useCase", className: "font-semibold text-gray-900" },
              { header: "Description", accessor: "description" },
              { header: "AI Technology", accessor: "aiTech" },
              { header: "Productivity Impact", accessor: "impact", className: "font-semibold text-green-600" },
              { header: "Market Leaders", accessor: "leaders", className: "text-xs" },
            ]}
            data={[
              {
                useCase: "Environment Provisioning",
                description: "AI creates optimal development environments",
                aiTech: "Infrastructure ML",
                impact: "80% faster provisioning",
                leaders: "Docker, Vagrant",
              },
              {
                useCase: "Resource Optimization",
                description: "AI manages cloud resource allocation",
                aiTech: "Resource Analytics",
                impact: "60% cost reduction",
                leaders: "AWS, Azure, GCP",
              },
            ]}
          />
        </Section>

        {/* Implementation Strategy */}
        <Section
          title="Implementation Strategy & Business Value"
          subtitle="Phased approach to AI-AMS transformation"
        >
          <TabGroup
            tabs={[
              {
                id: "phase1",
                label: "Phase 1: Quick Wins (0-6 months)",
                content: (
                  <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6">
                    <h4 className="mb-4 text-lg font-semibold text-gray-900">High-Impact, Low-Complexity Use Cases</h4>
                    <ul className="mb-4 space-y-2 text-sm text-gray-700">
                      <li>✓ Intelligent code completion and generation</li>
                      <li>✓ Automated test case creation</li>
                      <li>✓ Basic incident classification and routing</li>
                      <li>✓ Log analysis and anomaly detection</li>
                    </ul>
                    <div className="rounded-lg bg-white p-4">
                      <p className="text-lg font-semibold text-green-600">Expected ROI: 150-200% within 6 months</p>
                    </div>
                  </div>
                ),
              },
              {
                id: "phase2",
                label: "Phase 2: Core Automation (6-18 months)",
                content: (
                  <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-6">
                    <h4 className="mb-4 text-lg font-semibold text-gray-900">Medium-Complexity, High-Value Use Cases</h4>
                    <ul className="mb-4 space-y-2 text-sm text-gray-700">
                      <li>✓ Self-healing test automation</li>
                      <li>✓ Automated deployment orchestration</li>
                      <li>✓ Predictive incident management</li>
                      <li>✓ Code quality and security automation</li>
                    </ul>
                    <div className="rounded-lg bg-white p-4">
                      <p className="text-lg font-semibold text-blue-600">Expected ROI: 300-400% within 18 months</p>
                    </div>
                  </div>
                ),
              },
              {
                id: "phase3",
                label: "Phase 3: Advanced Intelligence (18+ months)",
                content: (
                  <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 p-6">
                    <h4 className="mb-4 text-lg font-semibold text-gray-900">High-Complexity, Transformational Use Cases</h4>
                    <ul className="mb-4 space-y-2 text-sm text-gray-700">
                      <li>✓ Fully automated incident resolution</li>
                      <li>✓ Predictive system maintenance</li>
                      <li>✓ Legacy system modernization</li>
                      <li>✓ End-to-end SDLC automation</li>
                    </ul>
                    <div className="rounded-lg bg-white p-4">
                      <p className="text-lg font-semibold text-purple-600">Expected ROI: 500%+ within 24 months</p>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </Section>

        {/* Technology Stack */}
        <Section title="Technology Stack & Platform Requirements">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white border-2 border-gray-200 p-6">
              <h4 className="mb-3 font-semibold text-gray-900">AI/ML Infrastructure</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• GPT-4, Claude, PaLM</li>
                <li>• TensorFlow, PyTorch</li>
                <li>• Google AutoML, AWS SageMaker</li>
                <li>• MLflow, Kubeflow</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white border-2 border-gray-200 p-6">
              <h4 className="mb-3 font-semibold text-gray-900">Integration Platforms</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Kong, MuleSoft</li>
                <li>• Zapier, Power Automate</li>
                <li>• Apache Airflow, Prefect</li>
                <li>• Apache Kafka, Pulsar</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white border-2 border-gray-200 p-6">
              <h4 className="mb-3 font-semibold text-gray-900">Monitoring & Observability</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• New Relic, Datadog</li>
                <li>• Elastic Stack, Splunk</li>
                <li>• Prometheus, Grafana</li>
                <li>• FullStory, Hotjar</li>
              </ul>
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
          <h2 className="mb-4 text-2xl font-bold">55+ Use Cases, One Transformation</h2>
          <p className="text-gray-200">
            This comprehensive SDLC transformation map provides the strategic framework for positioning AI-augmented AMS capabilities
            to Fortune 500 clients, demonstrating clear business value and competitive differentiation across all seven phases
            of the software development lifecycle.
          </p>
        </motion.div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link
            href="/competitive-intelligence"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-gray-700 shadow-md transition-all hover:bg-gray-50 hover:shadow-lg"
          >
            <ArrowLeft className="h-5 w-5" />
            Competitive Intelligence
          </Link>
          <Link
            href="/business-case"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
          >
            Business Case & ROI
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
