'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { BookOpen, Search, FileText, Code, HelpCircle } from 'lucide-react'

export default function DocsHero() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <Section size="lg" className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white dark:from-orange-950/20 dark:via-black dark:to-black pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
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
              <BookOpen className="h-3 w-3 mr-2" />
              Documentation
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6"
          >
            Everything You Need to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
              Get Started with RagSense
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            Complete guides, API documentation, tutorials, and best practices to help you
            integrate and optimize RagSense for your business.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-2xl mx-auto mb-12"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 h-14 text-lg border-2 border-orange-200 focus:border-orange-500 dark:border-orange-800 dark:focus:border-orange-500"
            />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <a
              href="#quick-start"
              className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-orange-500 transition-colors group"
            >
              <FileText className="h-6 w-6 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-gray-900 dark:text-white">Quick Start</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Get running in 5 minutes</div>
            </a>
            <a
              href="#api-reference"
              className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-orange-500 transition-colors group"
            >
              <Code className="h-6 w-6 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-gray-900 dark:text-white">API Reference</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Complete API docs</div>
            </a>
            <a
              href="#troubleshooting"
              className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-orange-500 transition-colors group"
            >
              <HelpCircle className="h-6 w-6 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-gray-900 dark:text-white">Help Center</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Common issues & FAQs</div>
            </a>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}