'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Server, Cpu, Globe, Shield, Clock } from 'lucide-react'

const specs = [
  {
    category: 'Performance',
    icon: Cpu,
    specs: [
      { label: 'Response Time', value: '< 100ms', description: 'Average API response latency' },
      { label: 'Concurrent Chats', value: 'Unlimited', description: 'No limits on simultaneous conversations' },
      { label: 'Messages/Second', value: '10,000+', description: 'Peak throughput capacity' },
      { label: 'Uptime SLA', value: '99.9%', description: 'Guaranteed availability' },
    ]
  },
  {
    category: 'Scalability',
    icon: Server,
    specs: [
      { label: 'Documents', value: 'Unlimited', description: 'No limits on content volume' },
      { label: 'Max File Size', value: '100MB', description: 'Per document upload limit' },
      { label: 'API Rate Limit', value: '10k/min', description: 'Per API key' },
      { label: 'Webhooks', value: 'Real-time', description: 'Instant event notifications' },
    ]
  },
  {
    category: 'Global Reach',
    icon: Globe,
    specs: [
      { label: 'Languages', value: '95+', description: 'Full multilingual support' },
      { label: 'Data Centers', value: '12', description: 'Worldwide presence' },
      { label: 'CDN Locations', value: '200+', description: 'Edge network coverage' },
      { label: 'Latency', value: '< 50ms', description: 'Global average' },
    ]
  },
  {
    category: 'Security',
    icon: Shield,
    specs: [
      { label: 'Encryption', value: 'AES-256', description: 'Military-grade encryption' },
      { label: 'Compliance', value: 'SOC 2, GDPR', description: 'Industry certifications' },
      { label: 'Backup', value: 'Hourly', description: 'Automated data backup' },
      { label: 'Recovery', value: '< 1 hour', description: 'RTO guarantee' },
    ]
  },
]

const integrations = [
  'REST API',
  'GraphQL',
  'Webhooks',
  'WebSocket',
  'Server-Sent Events',
  'gRPC',
  'OAuth 2.0',
  'SAML SSO',
  'LDAP',
  'Active Directory',
  'Okta',
  'Auth0',
]

export default function TechnicalSpecs() {
  return (
    <Section size="lg">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gradient" className="px-4 py-1.5 mb-4">
            <Server className="h-3 w-3 mr-2" />
            Technical Specifications
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Built for Scale,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
              Engineered for Reliability
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Enterprise-grade infrastructure that grows with your business
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {specs.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-orange-600 to-orange-700">
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.specs.map((spec) => (
                  <div key={spec.label} className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {spec.label}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {spec.description}
                      </div>
                    </div>
                    <div className="text-lg font-bold text-orange-600">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Protocols */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800"
        >
          <h3 className="text-xl font-semibold text-center mb-6">
            Integration Protocols & Standards
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-orange-200 dark:border-orange-700"
              >
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reliability Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Clock, label: 'Uptime', value: '99.99%', since: 'Last 90 days' },
            { icon: Cpu, label: 'API Latency', value: '47ms', since: 'P95 response' },
            { icon: Globe, label: 'Global Coverage', value: '195', since: 'Countries served' },
            { icon: Shield, label: 'Security Score', value: 'A+', since: 'SSL Labs rating' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            >
              <stat.icon className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {stat.since}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}