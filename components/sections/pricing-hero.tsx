'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DollarSign, Sparkles, Shield, Users } from 'lucide-react'

export default function PricingHero() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <Section size="lg" className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white dark:from-orange-950/20 dark:via-black dark:to-black pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
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
              <DollarSign className="h-3 w-3 mr-2" />
              Simple, Transparent Pricing
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6"
          >
            Choose Your Perfect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
              AI Support Plan
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            Start with our free trial, scale as you grow. No hidden fees, no surprises.
            <span className="block mt-2 text-orange-600 font-semibold">
              🎉 Get 1 month FREE with any plan!
            </span>
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span className={`text-lg font-medium ${billingPeriod === 'monthly' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-200 dark:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-orange-600 transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${billingPeriod === 'yearly' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
              Yearly
              <Badge variant="success" className="ml-2">Save 20%</Badge>
            </span>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">14-day free trial</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium">No credit card required</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
              <Users className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">Join 5,000+ businesses</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}