'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  ArrowRight,
  Sparkles,
  CheckCircle,
  Zap,
  MessageSquare,
  Calendar,
  Shield,
  TrendingUp
} from 'lucide-react'

const benefits = [
  {
    icon: CheckCircle,
    text: '30-day free trial'
  },
  {
    icon: CheckCircle,
    text: 'No credit card required'
  },
  {
    icon: CheckCircle,
    text: 'Cancel anytime'
  },
  {
    icon: CheckCircle,
    text: 'Setup in 5 minutes'
  }
]

const trustIndicators = [
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'SOC 2 & GDPR ready'
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: '10,000+ happy customers'
  },
  {
    icon: Zap,
    title: 'Instant Setup',
    description: 'Live in under 5 minutes'
  },
  {
    icon: MessageSquare,
    title: '24/7 Support',
    description: 'Always here to help'
  }
]

export default function PricingCTA() {
  return (
    <Section size="lg" className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-900" />

      {/* Animated Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-4000" />
      </div>

      <Container className="relative">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Content */}
          <div className="text-center mb-12">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex mb-6"
            >
              <Badge className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white border-white/30">
                <Sparkles className="h-4 w-4 mr-2" />
                Limited Time Offer - Get 2 Months Free on Annual Plans
              </Badge>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Ready to Transform Your
              <span className="block text-yellow-300 mt-2">Customer Experience?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Join thousands of businesses using RagSense to deliver exceptional customer support.
              Start your free trial today and see the difference AI-powered assistance makes.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-white">
                  <benefit.icon className="h-5 w-5 text-green-400" />
                  <span className="text-sm md:text-base font-medium">{benefit.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Button
                size="xl"
                className="bg-white text-orange-700 hover:bg-gray-100 shadow-2xl hover:shadow-3xl group min-w-[200px]"
                asChild
              >
                <Link href="https://labs.ragsense.co/signup">
                  <Zap className="mr-2 h-5 w-5" />
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm min-w-[200px]"
                asChild
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Demo
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm"
                  >
                    {i === 3 ? '😊' : ''}
                  </div>
                ))}
              </div>
              <div className="text-white">
                <div className="font-semibold text-lg">10,000+ Companies</div>
                <div className="text-sm text-orange-200">already using RagSense</div>
              </div>
            </motion.div>
          </div>

          {/* Trust Indicators Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + (index * 0.1) }}
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <indicator.icon className="h-6 w-6 text-white" />
                </div>
                <div className="font-semibold text-white mb-1">{indicator.title}</div>
                <div className="text-sm text-orange-200">{indicator.description}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-orange-200 text-sm">
              Questions about pricing? <Link href="/contact" className="text-white underline hover:text-yellow-300 font-semibold">Talk to our team</Link> or check out our <Link href="#faq" className="text-white underline hover:text-yellow-300 font-semibold">FAQ section</Link>
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
