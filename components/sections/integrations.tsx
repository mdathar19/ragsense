'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { Plug, Sparkles } from 'lucide-react'

const integrations = [
  { name: 'Shopify', logo: '🛍️', category: 'E-commerce' },
  { name: 'WordPress', logo: '📝', category: 'CMS' },
  { name: 'Slack', logo: '💬', category: 'Communication' },
  { name: 'Stripe', logo: '💳', category: 'Payment' },
  { name: 'Salesforce', logo: '☁️', category: 'CRM' },
  { name: 'HubSpot', logo: '🎯', category: 'Marketing' },
  { name: 'Zendesk', logo: '🎧', category: 'Support' },
  { name: 'Google Analytics', logo: '📊', category: 'Analytics' },
  { name: 'Mailchimp', logo: '📧', category: 'Email' },
  { name: 'Zapier', logo: '⚡', category: 'Automation' },
  { name: 'Microsoft Teams', logo: '👥', category: 'Communication' },
  { name: 'Notion', logo: '📔', category: 'Productivity' },
]

export default function Integrations() {
  return (
    <Section size="default" className="bg-gray-50 dark:bg-gray-900/50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <Badge variant="gradient" className="px-4 py-1.5">
              <Plug className="h-3 w-3 mr-2" />
              Integrations
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold mb-4"
          >
            Connects With Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700"> Favorite Tools</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Seamlessly integrate RagSense with your existing tech stack
          </motion.p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 text-center hover:shadow-lg">
                <div className="text-3xl mb-2">{integration.logo}</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  {integration.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {integration.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/20">
            <Sparkles className="h-4 w-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-900 dark:text-orange-100">
              + Many more integrations coming soon
            </span>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}