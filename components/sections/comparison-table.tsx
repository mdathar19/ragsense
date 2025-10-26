'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { Check, X, Minus } from 'lucide-react'

const features = [
  { name: 'AI-Powered Responses', ragsense: true, traditional: false, competitors: true },
  { name: 'Automatic Content Indexing', ragsense: true, traditional: false, competitors: 'partial' },
  { name: 'No Training Required', ragsense: true, traditional: false, competitors: false },
  { name: '5-Minute Setup', ragsense: true, traditional: false, competitors: false },
  { name: 'Source Attribution', ragsense: true, traditional: false, competitors: 'partial' },
  { name: 'Multi-language (95+)', ragsense: true, traditional: false, competitors: true },
  { name: 'Custom Branding', ragsense: true, traditional: true, competitors: true },
  { name: 'Real-time Analytics', ragsense: true, traditional: 'partial', competitors: true },
  { name: 'Knowledge Gap Analysis', ragsense: true, traditional: false, competitors: false },
  { name: 'Automatic Updates', ragsense: true, traditional: false, competitors: 'partial' },
  { name: 'API Access', ragsense: true, traditional: 'partial', competitors: true },
  { name: 'White Label Option', ragsense: true, traditional: false, competitors: 'partial' },
  { name: 'GDPR Compliant', ragsense: true, traditional: true, competitors: true },
  { name: 'SOC 2 Certified', ragsense: true, traditional: 'partial', competitors: 'partial' },
  { name: '24/7 Availability', ragsense: true, traditional: false, competitors: true },
  { name: 'No Per-Agent Pricing', ragsense: true, traditional: false, competitors: false },
  { name: 'Unlimited Conversations', ragsense: true, traditional: false, competitors: false },
  { name: 'Context Retention', ragsense: true, traditional: false, competitors: true },
]

const RenderValue = ({ value }: { value: boolean | string }) => {
  if (value === true) {
    return <Check className="h-5 w-5 text-green-500 mx-auto" />
  } else if (value === 'partial') {
    return <Minus className="h-5 w-5 text-yellow-500 mx-auto" />
  } else {
    return <X className="h-5 w-5 text-gray-400 mx-auto" />
  }
}

export default function ComparisonTable() {
  return (
    <Section size="lg">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gradient" className="px-4 py-1.5 mb-4">
            <Check className="h-3 w-3 mr-2" />
            Why RagSense
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            How We Compare to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
              Other Solutions
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            See why forward-thinking companies choose RagSense
          </p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="text-left py-4 px-4 font-medium text-gray-900 dark:text-white">
                  Feature
                </th>
                <th className="text-center py-4 px-4">
                  <div className="inline-flex flex-col items-center">
                    <Badge variant="gradient" className="mb-2">Recommended</Badge>
                    <span className="font-semibold text-gray-900 dark:text-white">RagSense</span>
                  </div>
                </th>
                <th className="text-center py-4 px-4 font-medium text-gray-600 dark:text-gray-400">
                  Traditional Chatbots
                </th>
                <th className="text-center py-4 px-4 font-medium text-gray-600 dark:text-gray-400">
                  Other AI Solutions
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={feature.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50"
                >
                  <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">
                    {feature.name}
                  </td>
                  <td className="py-4 px-4 text-center bg-orange-50/50 dark:bg-orange-900/10">
                    <RenderValue value={feature.ragsense} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <RenderValue value={feature.traditional} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <RenderValue value={feature.competitors} />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span className="text-gray-600 dark:text-gray-400">Full Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Minus className="h-5 w-5 text-yellow-500" />
            <span className="text-gray-600 dark:text-gray-400">Partial Support</span>
          </div>
          <div className="flex items-center gap-2">
            <X className="h-5 w-5 text-gray-400" />
            <span className="text-gray-600 dark:text-gray-400">Not Available</span>
          </div>
        </div>
      </Container>
    </Section>
  )
}