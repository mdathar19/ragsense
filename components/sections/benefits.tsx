'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  HeartHandshake,
  BarChart3,
  Sparkles
} from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: '3x Higher Conversion',
    description: 'Convert more visitors into customers with instant, accurate responses to their questions.',
    stat: '+240%',
    statLabel: 'Average increase',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Your AI agent never sleeps, providing round-the-clock support across all time zones.',
    stat: '99.9%',
    statLabel: 'Uptime guaranteed',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: DollarSign,
    title: '70% Cost Reduction',
    description: 'Dramatically reduce support costs while improving response quality and speed.',
    stat: '$50k+',
    statLabel: 'Average yearly savings',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Scale Infinitely',
    description: 'Handle unlimited concurrent conversations without hiring additional support staff.',
    stat: '∞',
    statLabel: 'Concurrent chats',
    color: 'from-orange-500 to-pink-500',
  },
  {
    icon: HeartHandshake,
    title: '95% Satisfaction',
    description: 'Customers love getting instant, accurate answers to their questions.',
    stat: '4.9/5',
    statLabel: 'Customer rating',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: BarChart3,
    title: 'Actionable Insights',
    description: 'Understand what your customers need with detailed analytics and reporting.',
    stat: '100+',
    statLabel: 'Data points tracked',
    color: 'from-indigo-500 to-orange-500',
  },
]

export default function Benefits() {
  return (
    <Section size="lg">
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
              <Sparkles className="h-3 w-3 mr-2" />
              Benefits
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Transform Your Support
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
              See Real Results
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Join thousands of businesses achieving exceptional results with RagSense
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-800 group overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${benefit.color} group-hover:scale-110 transition-transform`}>
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {benefit.stat}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {benefit.statLabel}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white dark:border-gray-900"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Trusted by 10k+ users
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
          <h3 className="text-2xl font-semibold mb-2">Ready to see these results?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Start your free trial and transform your customer support today
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}