'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, CheckCircle } from 'lucide-react'

export default function FeaturesCTA() {
  return (
    <Section size="lg" className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000" />
      </div>

      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-6"
          >
            <Zap className="h-8 w-8 text-white" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Ready to Experience the
            <span className="block text-yellow-300">Future of Customer Support?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of companies delivering exceptional customer experiences with RagSense.
            Get started in minutes, see results immediately.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>5-minute setup</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="xl"
              className="bg-white text-orange-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl group"
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
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/pricing">
                Compare Plans
              </Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}