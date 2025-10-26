'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Section, Container } from '@/components/ui/section'
import {
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Shield,
  Brain,
  MessageSquare,
  Users,
  BarChart3,
  CheckCircle
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const features = [
  { icon: Zap, text: 'Instant Setup' },
  { icon: Shield, text: 'Enterprise Security' },
  { icon: Globe, text: 'Multi-language' },
]

export default function Hero() {
  return (
    <Section size="xl" className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white dark:from-orange-950/20 dark:via-black dark:to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000" />
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000" />
      </div>

      <Container className="relative">
        <div className="text-center max-w-5xl mx-auto pt-20 lg:pt-32">
          {/* Badge */}
          <motion.div {...fadeInUp} className="mb-6">
            <Badge variant="gradient" className="px-4 py-1.5">
              <Sparkles className="h-3 w-3 mr-2" />
              AI-Powered Customer Support Platform
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6"
          >
            <span className="text-gray-900 dark:text-white">
              Transform Your Website Into
            </span>
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-gradient">
                An Intelligent Support Agent
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q150,0 300,5"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ea580c" />
                    <stop offset="50%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            RagSense automatically crawls your website, indexes your content, and creates an AI chatbot
            that provides instant, accurate answers to customer questions. Deploy in minutes, not months.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-800"
              >
                <feature.icon className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {feature.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button size="xl" variant="gradient" className="group" asChild>
              <Link href="https://labs.ragsense.co/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link href="/demo">
                <MessageSquare className="mr-2 h-5 w-5" />
                See Live Demo
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Setup in 5 minutes</span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-orange-600/10 to-orange-700/10 p-1">
            <div className="rounded-xl bg-white dark:bg-gray-900 p-8">
              {/* Mock Dashboard UI */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
                  <div className="h-8 w-8 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
                </div>
              </div>

              {/* Mock Chat Interface */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                      <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-orange-600 flex items-center justify-center">
                      <Brain className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-full bg-orange-100 dark:bg-orange-900/20 rounded animate-pulse" />
                      <div className="h-4 w-5/6 bg-orange-100 dark:bg-orange-900/20 rounded animate-pulse" />
                      <div className="h-4 w-3/4 bg-orange-100 dark:bg-orange-900/20 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-semibold">Analytics</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                      <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                      <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-semibold">Active Users</span>
                    </div>
                    <div className="text-2xl font-bold text-orange-600">2,847</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 p-3 rounded-xl bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-800 animate-float">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-semibold">AI Powered</span>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 p-3 rounded-xl bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-800 animate-float animation-delay-2000">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="text-sm font-semibold">Secure</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}