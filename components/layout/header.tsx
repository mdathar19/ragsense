'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/section'
import {
  Menu,
  X,
  ChevronDown,
  Brain,
  Sparkles,
  FileText,
  HelpCircle,
  Users,
  Mail,
  BookOpen,
  Code,
  Shield,
  Zap,
  Globe
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  {
    name: 'Features',
    href: '/features',
    icon: Sparkles,
    description: 'Explore our powerful capabilities'
  },
  // {
  //   name: 'Solutions',
  //   href: '#',
  //   icon: Zap,
  //   hasDropdown: true,
  //   dropdownItems: [
  //     { name: 'For E-commerce', href: '/solutions/ecommerce', icon: Globe, description: 'Boost sales with AI support' },
  //     { name: 'For SaaS', href: '/solutions/saas', icon: Code, description: 'Scale customer success' },
  //     { name: 'For Enterprise', href: '/solutions/enterprise', icon: Shield, description: 'Enterprise-grade AI solutions' },
  //   ]
  // },
  {
    name: 'Pricing',
    href: '/pricing',
    icon: FileText,
    description: 'Simple, transparent pricing'
  },
  {
    name: 'Docs',
    href: '/docs',
    icon: BookOpen,
    description: 'Learn how to use RagSense'
  },
  // {
  //   name: 'Blog',
  //   href: '/blog',
  //   icon: FileText,
  //   description: 'Latest insights and updates'
  // },
  // {
  //   name: 'About',
  //   href: '/about',
  //   icon: Users,
  //   description: 'Meet the team behind RagSense'
  // },
  // {
  //   name: 'Contact',
  //   href: '/contact',
  //   icon: Mail,
  //   description: 'Get in touch with us'
  // },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="relative w-10 h-10"
            >
              <Image
                src="/favicon/favicon-96x96.png"
                alt="RagSense Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </motion.div>
            <span className="font-display text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              RagSense
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {'hasDropdown' in item && item.hasDropdown ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className={cn(
                      'flex items-center gap-1 text-sm font-medium transition-colors hover:text-orange-600',
                      pathname === item.href ? 'text-orange-600' : 'text-gray-700 dark:text-gray-300'
                    )}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-orange-600',
                      pathname === item.href ? 'text-orange-600' : 'text-gray-700 dark:text-gray-300'
                    )}
                  >
                    {item.name}
                  </Link>
                )}

                {('hasDropdown' in item && item.hasDropdown && activeDropdown === item.name && 'dropdownItems' in item && item.dropdownItems) ? (
                  <AnimatePresence key={item.name}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
                    >
                      {item.dropdownItems.map((dropdownItem: any) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <dropdownItem.icon className="h-5 w-5 text-orange-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {dropdownItem.name}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {dropdownItem.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                ) : null}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://labs.ragsense.co/login">Sign In</Link>
            </Button>
            <Button variant="gradient" size="sm" asChild>
              <Link href="https://labs.ragsense.co/signup">
                Start Free Trial
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black"
          >
            <Container>
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {'hasDropdown' in item && item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <item.icon className="h-5 w-5 text-orange-600" />
                            <span className="font-medium">{item.name}</span>
                          </span>
                          <ChevronDown className={cn(
                            "h-4 w-4 transition-transform",
                            activeDropdown === item.name && "rotate-180"
                          )} />
                        </button>
                        {activeDropdown === item.name && 'dropdownItems' in item && item.dropdownItems && (
                          <div className="ml-7 mt-2 space-y-2">
                            {item.dropdownItems.map((dropdownItem: any) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                                onClick={() => {
                                  setMobileMenuOpen(false)
                                  setActiveDropdown(null)
                                }}
                              >
                                <dropdownItem.icon className="h-4 w-4 text-orange-600" />
                                <span className="text-sm">{dropdownItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className="h-5 w-5 text-orange-600" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-2">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://labs.ragsense.co/login">Sign In</Link>
                  </Button>
                  <Button variant="gradient" className="w-full" asChild>
                    <Link href="https://labs.ragsense.co/signup">Start Free Trial</Link>
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}