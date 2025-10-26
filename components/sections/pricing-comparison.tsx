'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { Check, X, Minus, TrendingUp } from 'lucide-react'

// Define feature categories
const featureCategories = [
  {
    name: 'Core Features',
    features: [
      {
        name: 'Monthly Conversations',
        starter: '1,000',
        professional: '10,000',
        enterprise: 'Unlimited'
      },
      {
        name: 'Websites',
        starter: '1',
        professional: '3',
        enterprise: 'Unlimited'
      },
      {
        name: 'Customization Level',
        starter: 'Basic',
        professional: 'Advanced',
        enterprise: 'White-label'
      },
      {
        name: 'AI Response Quality',
        starter: true,
        professional: true,
        enterprise: true
      },
      {
        name: 'Source Attribution',
        starter: true,
        professional: true,
        enterprise: true
      },
      {
        name: 'Multi-language Support',
        starter: false,
        professional: true,
        enterprise: true
      },
      {
        name: 'Custom AI Model Training',
        starter: false,
        professional: false,
        enterprise: true
      },
      {
        name: 'Knowledge Gap Analysis',
        starter: true,
        professional: true,
        enterprise: true
      }
    ]
  },
  {
    name: 'Support & Service',
    features: [
      {
        name: 'Email Support',
        starter: true,
        professional: true,
        enterprise: true
      },
      {
        name: 'Priority Chat Support',
        starter: false,
        professional: true,
        enterprise: true
      },
      {
        name: 'Dedicated Account Manager',
        starter: false,
        professional: false,
        enterprise: true
      },
      {
        name: 'SLA Guarantee',
        starter: false,
        professional: false,
        enterprise: true
      },
      {
        name: 'Response Time',
        starter: '24 hours',
        professional: '4 hours',
        enterprise: '1 hour'
      },
      {
        name: 'Phone Support',
        starter: false,
        professional: false,
        enterprise: true
      },
      {
        name: 'Onboarding Assistance',
        starter: 'Self-service',
        professional: 'Guided',
        enterprise: 'Full onboarding'
      }
    ]
  },
  {
    name: 'Analytics & Reporting',
    features: [
      {
        name: 'Basic Analytics Dashboard',
        starter: true,
        professional: true,
        enterprise: true
      },
      {
        name: 'Advanced Analytics',
        starter: false,
        professional: true,
        enterprise: true
      },
      {
        name: 'Custom Reporting',
        starter: false,
        professional: false,
        enterprise: true
      },
      {
        name: 'A/B Testing',
        starter: false,
        professional: true,
        enterprise: true
      },
      {
        name: 'User Behavior Tracking',
        starter: true,
        professional: true,
        enterprise: true
      },
      {
        name: 'Conversation Analytics',
        starter: true,
        professional: true,
        enterprise: true
      },
      {
        name: 'Export Data',
        starter: 'Limited',
        professional: 'Full',
        enterprise: 'Full + API'
      }
    ]
  },
  {
    name: 'Integrations & API',
    features: [
      {
        name: 'API Access',
        starter: false,
        professional: '5,000 calls/mo',
        enterprise: 'Unlimited'
      },
      {
        name: 'Webhooks',
        starter: false,
        professional: true,
        enterprise: true
      },
      {
        name: 'Shopify Integration',
        starter: false,
        professional: true,
        enterprise: true
      },
      {
        name: 'WordPress Integration',
        starter: false,
        professional: true,
        enterprise: true
      },
      {
        name: 'Slack Integration',
        starter: false,
        professional: true,
        enterprise: true
      },
      {
        name: 'Zendesk Integration',
        starter: false,
        professional: false,
        enterprise: true
      },
      {
        name: 'Salesforce Integration',
        starter: false,
        professional: false,
        enterprise: true
      },
      {
        name: 'Custom Integrations',
        starter: false,
        professional: false,
        enterprise: true
      }
    ]
  },
  {
    name: 'Security & Compliance',
    features: [
      {
        name: 'SSL Encryption',
        starter: true,
        professional: true,
        enterprise: true
      },
      {
        name: 'GDPR Compliance',
        starter: true,
        professional: true,
        enterprise: true
      },
      {
        name: 'SOC 2 Certified',
        starter: false,
        professional: true,
        enterprise: true
      },
      {
        name: 'Data Residency Options',
        starter: false,
        professional: false,
        enterprise: true
      },
      {
        name: 'On-premise Deployment',
        starter: false,
        professional: false,
        enterprise: true
      },
      {
        name: 'Single Sign-On (SSO)',
        starter: false,
        professional: false,
        enterprise: true
      },
      {
        name: 'Advanced Security Controls',
        starter: false,
        professional: false,
        enterprise: true
      },
      {
        name: 'Regular Security Audits',
        starter: false,
        professional: true,
        enterprise: true
      }
    ]
  }
]

type FeatureValue = boolean | string

const RenderValue = ({ value }: { value: FeatureValue }) => {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="h-5 w-5 text-green-500 mx-auto" />
    ) : (
      <X className="h-5 w-5 text-gray-300 dark:text-gray-700 mx-auto" />
    )
  }

  return (
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {value}
    </span>
  )
}

export default function PricingComparison() {
  return (
    <Section size="lg" className="bg-gray-50 dark:bg-gray-900/50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <Badge variant="gradient" className="px-4 py-1.5">
              <TrendingUp className="h-3 w-3 mr-2" />
              Feature Comparison
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Compare Plans &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
              Choose What's Right for You
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Detailed feature breakdown across all pricing tiers
          </motion.p>
        </div>

        {/* Comparison Table - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden lg:block overflow-x-auto"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
              <div className="font-semibold text-gray-900 dark:text-white">
                Features
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900 dark:text-white mb-1">Starter</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">$29/mo</div>
              </div>
              <div className="text-center">
                <Badge variant="gradient" className="mb-2">Most Popular</Badge>
                <div className="font-semibold text-gray-900 dark:text-white mb-1">Professional</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">$79/mo</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900 dark:text-white mb-1">Enterprise</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Custom</div>
              </div>
            </div>

            {/* Table Body */}
            {featureCategories.map((category, categoryIndex) => (
              <div key={category.name} className="border-b border-gray-200 dark:border-gray-800 last:border-0">
                {/* Category Header */}
                <div className="px-6 py-4 bg-orange-50 dark:bg-orange-900/10">
                  <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-300">
                    {category.name}
                  </h3>
                </div>

                {/* Category Features */}
                {category.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (featureIndex * 0.02) }}
                    className="grid grid-cols-4 gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors"
                  >
                    <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                      {feature.name}
                    </div>
                    <div className="flex items-center justify-center">
                      <RenderValue value={feature.starter} />
                    </div>
                    <div className="flex items-center justify-center bg-orange-50/30 dark:bg-orange-900/5 -mx-4 px-4">
                      <RenderValue value={feature.professional} />
                    </div>
                    <div className="flex items-center justify-center">
                      <RenderValue value={feature.enterprise} />
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Cards - Mobile */}
        <div className="lg:hidden space-y-6">
          {['Starter', 'Professional', 'Enterprise'].map((plan, planIndex) => (
            <motion.div
              key={plan}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: planIndex * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
            >
              {/* Plan Header */}
              <div className="p-6 bg-orange-50 dark:bg-orange-900/10 border-b border-gray-200 dark:border-gray-800">
                {plan === 'Professional' && (
                  <Badge variant="gradient" className="mb-2">Most Popular</Badge>
                )}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{plan}</h3>
                <div className="text-lg text-gray-600 dark:text-gray-400">
                  {plan === 'Starter' && '$29/mo'}
                  {plan === 'Professional' && '$79/mo'}
                  {plan === 'Enterprise' && 'Custom'}
                </div>
              </div>

              {/* Plan Features */}
              <div className="p-6 space-y-6">
                {featureCategories.map((category) => (
                  <div key={category.name}>
                    <h4 className="text-sm font-semibold text-orange-900 dark:text-orange-300 mb-3">
                      {category.name}
                    </h4>
                    <div className="space-y-2">
                      {category.features.map((feature) => {
                        const value = plan === 'Starter' ? feature.starter :
                                     plan === 'Professional' ? feature.professional :
                                     feature.enterprise

                        return (
                          <div key={feature.name} className="flex items-center justify-between text-sm">
                            <span className="text-gray-700 dark:text-gray-300">{feature.name}</span>
                            <RenderValue value={value} />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm"
        >
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span className="text-gray-600 dark:text-gray-400">Included</span>
          </div>
          <div className="flex items-center gap-2">
            <X className="h-5 w-5 text-gray-300 dark:text-gray-700" />
            <span className="text-gray-600 dark:text-gray-400">Not Included</span>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
