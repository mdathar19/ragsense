'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Sparkles, ArrowRight, Cpu, Globe, Shield, BarChart3 } from 'lucide-react'

const highlights = [
  { icon: Cpu, label: 'AI-Powered', value: 'GPT-4 & Claude' },
  { icon: Globe, label: 'Languages', value: '95+' },
  { icon: Shield, label: 'Security', value: 'SOC 2' },
  { icon: BarChart3, label: 'Uptime', value: '99.9%' },
]

export default function FeaturesHero() {
  return (
    <Section size="lg" className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white dark:from-orange-950/20 dark:via-black dark:to-black pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000" />
      </div>

      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Badge variant="gradient" className="px-4 py-1.5">
              <Sparkles className="h-3 w-3 mr-2" />
              Platform Features
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6"
          >
            Enterprise-Grade Features for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
              Modern Customer Support
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            Leverage cutting-edge AI technology to deliver exceptional customer experiences.
            From intelligent content indexing to real-time analytics, every feature is designed
            to help you support customers better and faster.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button size="lg" variant="gradient" className="group" asChild>
              <Link href="https://labs.ragsense.co/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/docs">
                View Documentation
              </Link>
            </Button>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <item.icon className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}