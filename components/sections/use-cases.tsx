'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import {
  ShoppingBag,
  Code,
  Building2,
  GraduationCap,
  HeartHandshake,
  Briefcase,
  Store,
  Rocket
} from 'lucide-react'

const useCases = [
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Reduce cart abandonment with instant product questions answered',
    benefits: [
      'Product recommendations',
      'Order tracking assistance',
      'Return policy clarification',
      'Size and fit guidance'
    ],
    metric: '35% reduction in support tickets',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Code,
    title: 'SaaS & Software',
    description: 'Provide technical support and onboarding at scale',
    benefits: [
      'Feature discovery',
      'Troubleshooting guides',
      'Integration help',
      'Billing inquiries'
    ],
    metric: '60% faster onboarding',
    color: 'from-orange-500 to-pink-500'
  },
  {
    icon: Building2,
    title: 'Enterprise',
    description: 'Scale support operations while maintaining quality',
    benefits: [
      'Multi-department support',
      'Compliance queries',
      'Internal knowledge base',
      'Employee assistance'
    ],
    metric: '70% cost reduction',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Support students and educators 24/7',
    benefits: [
      'Course information',
      'Enrollment assistance',
      'Campus resources',
      'Academic support'
    ],
    metric: '90% student satisfaction',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: HeartHandshake,
    title: 'Healthcare',
    description: 'Provide patient support while maintaining HIPAA compliance',
    benefits: [
      'Appointment scheduling',
      'Insurance queries',
      'Facility information',
      'General health FAQs'
    ],
    metric: '50% reduced wait times',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Briefcase,
    title: 'Financial Services',
    description: 'Deliver secure, compliant financial guidance',
    benefits: [
      'Account inquiries',
      'Transaction support',
      'Product information',
      'Security assistance'
    ],
    metric: '45% improved CSAT',
    color: 'from-indigo-500 to-orange-500'
  },
  {
    icon: Store,
    title: 'Real Estate',
    description: 'Qualify leads and answer property questions instantly',
    benefits: [
      'Property details',
      'Viewing schedules',
      'Neighborhood info',
      'Financing options'
    ],
    metric: '3x more qualified leads',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Rocket,
    title: 'Startups',
    description: 'Enterprise-level support without the enterprise budget',
    benefits: [
      'Product demos',
      'Pricing questions',
      'Feature requests',
      'Technical support'
    ],
    metric: 'Support team of 1',
    color: 'from-yellow-500 to-orange-500'
  }
]

export default function UseCases() {
  return (
    <Section size="lg" className="bg-gray-50 dark:bg-gray-900/50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gradient" className="px-4 py-1.5 mb-4">
            <Briefcase className="h-3 w-3 mr-2" />
            Use Cases
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Transforming Support Across
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
              Every Industry
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            See how leading companies use RagSense to deliver exceptional customer experiences
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${useCase.color} mb-4`}>
                  <useCase.icon className="h-6 w-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {useCase.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-4">
                  {useCase.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-600 mt-1.5 flex-shrink-0" />
                      <span className="text-xs text-gray-700 dark:text-gray-300">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Metric */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="text-sm font-semibold text-orange-600">
                    {useCase.metric}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800"
        >
          <h3 className="text-2xl font-semibold mb-2">Your Industry Not Listed?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            RagSense adapts to any business that needs intelligent customer support
          </p>
          <Badge variant="gradient" className="px-4 py-2">
            Works with any website or documentation
          </Badge>
        </motion.div>
      </Container>
    </Section>
  )
}