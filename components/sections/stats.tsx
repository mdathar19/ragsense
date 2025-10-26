'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Users, MessageSquare, Globe, Zap } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Active Users',
    description: 'Businesses trust RagSense',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100 dark:bg-orange-900/20',
  },
  {
    icon: MessageSquare,
    value: '5M+',
    label: 'Messages Handled',
    description: 'Customer queries resolved',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20',
  },
  {
    icon: Globe,
    value: '120+',
    label: 'Countries',
    description: 'Global presence',
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/20',
  },
  {
    icon: Zap,
    value: '< 1s',
    label: 'Response Time',
    description: 'Average query resolution',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100 dark:bg-orange-900/20',
  },
]

export default function Stats() {
  return (
    <Section size="sm" className="bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex p-3 rounded-xl ${stat.bgColor} mb-3`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                {stat.label}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}