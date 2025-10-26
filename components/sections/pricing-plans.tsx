'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  CheckCircle,
  Sparkles,
  Rocket,
  Building2,
  ArrowRight,
  MessageSquare,
  Globe,
  BarChart3,
  Shield,
  Headphones,
  Users,
  Zap,
  Database
} from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and personal websites',
    price: { monthly: 29, yearly: 278 },
    icon: Rocket,
    color: 'from-blue-500 to-cyan-500',
    popular: false,
    features: [
      { text: 'Up to 1,000 conversations/month', included: true },
      { text: '1 website', included: true },
      { text: 'Basic customization', included: true },
      { text: 'Email support', included: true },
      { text: 'Analytics dashboard', included: true },
      { text: 'Mobile responsive', included: true },
      { text: 'SSL encryption', included: true },
      { text: 'API access', included: false },
      { text: 'Custom branding', included: false },
      { text: 'Priority support', included: false },
    ],
    cta: 'Start Free Trial',
    highlight: null
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses and e-commerce',
    price: { monthly: 79, yearly: 758 },
    icon: Sparkles,
    color: 'from-orange-500 to-pink-500',
    popular: true,
    features: [
      { text: 'Up to 10,000 conversations/month', included: true },
      { text: '3 websites', included: true },
      { text: 'Advanced customization', included: true },
      { text: 'Priority email & chat support', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Multi-language support', included: true },
      { text: 'API access (5,000 calls)', included: true },
      { text: 'Custom branding', included: true },
      { text: 'A/B testing', included: true },
      { text: 'Integrations (Shopify, WordPress)', included: true },
    ],
    cta: 'Start Free Trial',
    highlight: 'MOST POPULAR'
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    price: { monthly: 'Custom', yearly: 'Custom' },
    icon: Building2,
    color: 'from-orange-500 to-red-500',
    popular: false,
    features: [
      { text: 'Unlimited conversations', included: true },
      { text: 'Unlimited websites', included: true },
      { text: 'White-label solution', included: true },
      { text: 'Dedicated support manager', included: true },
      { text: 'Custom analytics & reporting', included: true },
      { text: 'Unlimited languages', included: true },
      { text: 'Unlimited API access', included: true },
      { text: 'SLA guarantee', included: true },
      { text: 'On-premise deployment option', included: true },
      { text: 'Custom AI model training', included: true },
    ],
    cta: 'Contact Sales',
    highlight: null
  }
]

export default function PricingPlans() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <Section size="lg" className="bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                  <Badge variant="gradient" className="px-4 py-1.5 shadow-lg">
                    {plan.highlight}
                  </Badge>
                </div>
              )}

              <Card className={`h-full ${plan.popular ? 'border-orange-500 shadow-xl scale-105' : ''}`}>
                <CardHeader className="text-center pb-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.color} p-3 mx-auto mb-4`}>
                    <plan.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="mb-6">{plan.description}</CardDescription>

                  <div className="mb-6">
                    {typeof plan.price.monthly === 'number' ? (
                      <>
                        <div className="flex items-end justify-center gap-1">
                          <span className="text-4xl font-bold">
                            ${billingPeriod === 'monthly' ? plan.price.monthly : Math.floor(plan.price.yearly / 12)}
                          </span>
                          <span className="text-gray-600 dark:text-gray-400 mb-1">/month</span>
                        </div>
                        {billingPeriod === 'yearly' && (
                          <div className="text-sm text-gray-500 mt-1">
                            ${plan.price.yearly} billed annually
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-4xl font-bold">{plan.price.monthly}</div>
                    )}
                  </div>

                  <Button
                    size="lg"
                    className={`w-full ${plan.popular ? 'bg-orange-600 hover:bg-orange-700 text-white' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle
                          className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                            feature.included ? 'text-green-500' : 'text-gray-300 dark:text-gray-700'
                          }`}
                        />
                        <span className={`text-sm ${
                          feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-600 line-through'
                        }`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">All Plans Include</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-orange-600 text-white flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6" />
              </div>
              <div className="font-medium text-gray-900 dark:text-white">SSL Security</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Bank-level encryption</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-orange-600 text-white flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6" />
              </div>
              <div className="font-medium text-gray-900 dark:text-white">99.9% Uptime</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Guaranteed availability</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-orange-600 text-white flex items-center justify-center mx-auto mb-3">
                <Database className="h-6 w-6" />
              </div>
              <div className="font-medium text-gray-900 dark:text-white">Auto Backups</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Daily data backups</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-orange-600 text-white flex items-center justify-center mx-auto mb-3">
                <Headphones className="h-6 w-6" />
              </div>
              <div className="font-medium text-gray-900 dark:text-white">24/7 Support</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Always here to help</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}