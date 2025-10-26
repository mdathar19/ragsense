'use client'

import React from 'react'
import { Section, Container } from '@/components/ui/section'
import Link from 'next/link'
import {
  BookOpen,
  Rocket,
  Code,
  Settings,
  Palette,
  Globe,
  Shield,
  BarChart3,
  Users,
  HelpCircle,
  FileText,
  Terminal
} from 'lucide-react'

const categories = [
  {
    title: 'Getting Started',
    icon: Rocket,
    links: [
      { name: 'Introduction', href: '/docs/introduction' },
      { name: 'Quick Start Guide', href: '/docs/quick-start' },
      { name: 'Installation', href: '/docs/installation' },
      { name: 'First Chatbot', href: '/docs/first-chatbot' },
    ]
  },
  {
    title: 'Core Concepts',
    icon: BookOpen,
    links: [
      { name: 'How RAG Works', href: '/docs/rag-explained' },
      { name: 'Web Crawling', href: '/docs/crawling' },
      { name: 'Content Indexing', href: '/docs/indexing' },
      { name: 'Response Generation', href: '/docs/responses' },
    ]
  },
  {
    title: 'Configuration',
    icon: Settings,
    links: [
      { name: 'Basic Settings', href: '/docs/basic-config' },
      { name: 'Advanced Options', href: '/docs/advanced-config' },
      { name: 'Environment Variables', href: '/docs/env-vars' },
      { name: 'Domain Settings', href: '/docs/domains' },
    ]
  },
  {
    title: 'Customization',
    icon: Palette,
    links: [
      { name: 'Appearance', href: '/docs/appearance' },
      { name: 'Branding', href: '/docs/branding' },
      { name: 'Response Style', href: '/docs/response-style' },
      { name: 'Widget Position', href: '/docs/widget-position' },
    ]
  },
  {
    title: 'API Reference',
    icon: Code,
    links: [
      { name: 'Authentication', href: '/docs/api/auth' },
      { name: 'Websites', href: '/docs/api/websites' },
      { name: 'Conversations', href: '/docs/api/conversations' },
      { name: 'Analytics', href: '/docs/api/analytics' },
    ]
  },
  {
    title: 'Integrations',
    icon: Globe,
    links: [
      { name: 'WordPress', href: '/docs/integrations/wordpress' },
      { name: 'Shopify', href: '/docs/integrations/shopify' },
      { name: 'React', href: '/docs/integrations/react' },
      { name: 'Webhooks', href: '/docs/integrations/webhooks' },
    ]
  },
  {
    title: 'Security',
    icon: Shield,
    links: [
      { name: 'Authentication', href: '/docs/security/auth' },
      { name: 'API Keys', href: '/docs/security/api-keys' },
      { name: 'Data Privacy', href: '/docs/security/privacy' },
      { name: 'Compliance', href: '/docs/security/compliance' },
    ]
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    links: [
      { name: 'Dashboard Overview', href: '/docs/analytics/dashboard' },
      { name: 'Conversation Metrics', href: '/docs/analytics/conversations' },
      { name: 'Knowledge Gaps', href: '/docs/analytics/gaps' },
      { name: 'Export Data', href: '/docs/analytics/export' },
    ]
  },
  {
    title: 'Team Management',
    icon: Users,
    links: [
      { name: 'User Roles', href: '/docs/team/roles' },
      { name: 'Permissions', href: '/docs/team/permissions' },
      { name: 'Collaboration', href: '/docs/team/collaboration' },
      { name: 'Audit Logs', href: '/docs/team/audit' },
    ]
  },
  {
    title: 'Best Practices',
    icon: FileText,
    links: [
      { name: 'Content Guidelines', href: '/docs/best-practices/content' },
      { name: 'Performance Tips', href: '/docs/best-practices/performance' },
      { name: 'SEO Optimization', href: '/docs/best-practices/seo' },
      { name: 'User Experience', href: '/docs/best-practices/ux' },
    ]
  },
  {
    title: 'Troubleshooting',
    icon: HelpCircle,
    links: [
      { name: 'Common Issues', href: '/docs/troubleshooting/common' },
      { name: 'Error Messages', href: '/docs/troubleshooting/errors' },
      { name: 'Debug Mode', href: '/docs/troubleshooting/debug' },
      { name: 'Support', href: '/docs/troubleshooting/support' },
    ]
  },
  {
    title: 'Developer Tools',
    icon: Terminal,
    links: [
      { name: 'CLI Reference', href: '/docs/cli' },
      { name: 'SDKs', href: '/docs/sdks' },
      { name: 'Testing', href: '/docs/testing' },
      { name: 'Migration Guide', href: '/docs/migration' },
    ]
  },
]

export default function DocsNavigation() {
  return (
    <Section size="sm" className="bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/20 dark:to-orange-800/20">
                  <category.icon className="h-5 w-5 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}