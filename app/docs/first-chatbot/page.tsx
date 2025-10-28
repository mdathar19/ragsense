import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Section, Container } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import {
  Palette,
  MessageSquare,
  Settings,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Copy,
  Wand2,
  Eye,
  Type,
  Image as ImageIcon
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customize Your First Chatbot - Branding & Settings | RagSense',
  description: 'Complete guide to customizing your RagSense AI chatbot. Learn how to add custom colors, logo, welcome messages, and configure response styles to match your brand.',
  keywords: [
    'chatbot customization',
    'customize AI chatbot',
    'chatbot branding',
    'chatbot appearance',
    'welcome message setup',
    'chatbot widget styling',
    'brand colors chatbot',
    'personalize chatbot'
  ],
  openGraph: {
    title: 'Customize Your First Chatbot - Branding & Settings | RagSense',
    description: 'Make your chatbot uniquely yours with custom branding, colors, and personalized settings.',
    type: 'article',
    url: 'https://ragsense.co/docs/first-chatbot',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customize Your First Chatbot | RagSense',
    description: 'Brand your AI chatbot with custom colors, logo, and messages.',
  },
  alternates: {
    canonical: 'https://ragsense.co/docs/first-chatbot'
  }
}

export default function FirstChatbotPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <Section size="sm" className="bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 mb-6">
                <Wand2 className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-900 dark:text-orange-300">
                  Customization
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                Your First Chatbot
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Now that your chatbot is installed, let's customize it to perfectly match your brand and business needs.
              </p>
            </div>
          </Container>
        </Section>

        {/* Quick Overview */}
        <Section size="sm" className="bg-blue-50 dark:bg-blue-900/10">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">What You'll Learn</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { icon: Palette, text: 'Brand Colors' },
                  { icon: Type, text: 'Welcome Message' },
                  { icon: MessageSquare, text: 'Response Style' },
                  { icon: Settings, text: 'Widget Position' }
                ].map((item) => (
                  <div key={item.text} className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-900 rounded-lg">
                    <item.icon className="h-6 w-6 text-orange-600" />
                    <span className="text-sm font-medium text-center">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Access Dashboard */}
        <Section size="sm">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 text-white font-bold text-xl flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold">Access Your Dashboard</h2>
                  <p className="text-gray-600 dark:text-gray-400">Navigate to the customization settings</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <ol className="space-y-3">
                    <li>Log in to your <a href="https://labs.ragsense.co" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700">RagSense Dashboard</a></li>
                    <li>Navigate to <strong>Widget Settings</strong> tab</li>
                  </ol>
                </div>

                {/* TODO: Add dashboard screenshot */}
                <div className="rounded-xl flex items-center justify-center min-h-[500px]">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                     <Image
                        src="/docs/widget-installation.png"
                        alt="Widget Installation Guide"
                        width={800}
                        height={500}
                        className="rounded-lg shadow-lg"
                      />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Customize Appearance */}
        <Section size="sm" className="bg-gray-50 dark:bg-gray-900/50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 text-white font-bold text-xl flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold">Customize Appearance</h2>
                  <p className="text-gray-600 dark:text-gray-400">Make it match your brand</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Brand Colors */}
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Palette className="h-5 w-5 text-orange-600" />
                    Brand Colors
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Customize the widget colors to match your brand identity.
                  </p>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Primary Color</label>
                        <div className="flex gap-2 items-center">
                          <input
                            type="color"
                            defaultValue="#f97316"
                            className="w-12 h-12 rounded-lg border-2 border-gray-200 cursor-pointer"
                            disabled
                          />
                          <div className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                            <code className="text-sm">#f97316</code>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Used for header, buttons, and accents</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Secondary Color</label>
                        <div className="flex gap-2 items-center">
                          <input
                            type="color"
                            defaultValue="#ffffff"
                            className="w-12 h-12 rounded-lg border-2 border-gray-200 cursor-pointer"
                            disabled
                          />
                          <div className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                            <code className="text-sm">#ffffff</code>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Background and message bubbles</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Logo & Branding */}
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <ImageIcon className="h-5 w-5 text-orange-600" />
                    Logo & Branding
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Add your company logo to the chat widget header.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Logo URL</label>
                      <input
                        type="text"
                        placeholder="https://yourdomain.com/logo.png"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                        disabled
                      />
                      <p className="text-xs text-gray-500 mt-1">Recommended size: 120x40px (PNG or SVG)</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name</label>
                      <input
                        type="text"
                        placeholder="Your Company Name"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                        disabled
                      />
                    </div>
                  </div>
                </div>

                {/* Widget Position */}
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Settings className="h-5 w-5 text-orange-600" />
                    Widget Position
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Choose where the chat widget appears on your site.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      { value: 'bottom-right', label: 'Bottom Right', default: true },
                      { value: 'bottom-left', label: 'Bottom Left' },
                      { value: 'top-right', label: 'Top Right' },
                      { value: 'top-left', label: 'Top Left' }
                    ].map((position) => (
                      <button
                        key={position.value}
                        className={`p-4 rounded-lg border-2 text-left transition-colors ${
                          position.default
                            ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-orange-300'
                        }`}
                        disabled
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{position.label}</span>
                          {position.default && (
                            <span className="text-xs px-2 py-1 rounded-full bg-orange-600 text-white">Default</span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Configure Messages */}
        <Section size="sm">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 text-white font-bold text-xl flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold">Configure Messages</h2>
                  <p className="text-gray-600 dark:text-gray-400">Set up welcome messages and responses</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Welcome Message */}
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-orange-600" />
                    Welcome Message
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    The first message customers see when they open the chat.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-2">Welcome Message</label>
                      <textarea
                        rows={3}
                        placeholder="👋 Hello! I'm here to help answer your questions. How can I assist you today?"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                        disabled
                      />
                      <p className="text-xs text-gray-500 mt-1">Keep it friendly and clear about what the bot can do</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Preview & Test */}
        <Section size="sm" className="bg-gray-50 dark:bg-gray-900/50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 text-white font-bold text-xl flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold">Preview & Test</h2>
                  <p className="text-gray-600 dark:text-gray-400">See your changes in real-time</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Eye className="h-5 w-5 text-orange-600" />
                    Live Preview
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Most RagSense dashboards include a live preview panel where you can see your changes in real-time.
                  </p>

                  {/* Preview mockup */}
                  <div className="rounded-xl p-2 min-h-[500px] flex items-center justify-center">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                       <Image
                          src="/docs/chat-bot-test.png"
                          alt="Widget Installation Guide"
                          width={800}
                          height={500}
                          className="rounded-lg shadow-lg"
                        />
                      <p className="text-xs mt-2">Test your chatbot directly from the dashboard</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Testing Checklist
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>✓ Test on desktop and mobile</li>
                      <li>✓ Verify brand colors display correctly</li>
                      <li>✓ Check welcome message</li>
                      <li>✓ Test suggested questions</li>
                      <li>✓ Ask various questions</li>
                      <li>✓ Verify response accuracy</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-orange-600" />
                      Pro Tips
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Use your brand's exact hex colors</li>
                      <li>• Keep welcome messages under 50 words</li>
                      <li>• Test with real user questions</li>
                      <li>• Update content regularly</li>
                      <li>• Monitor analytics for improvements</li>
                      <li>• A/B test different messages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>


        {/* Success Section */}
        <Section size="sm" className="bg-gradient-to-br from-orange-600 to-orange-700">
          <Container>
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Your Chatbot is Ready!
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                You've successfully customized your first RagSense chatbot. Now let's explore more advanced features.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                  {/* <Link href="/docs/analytics/dashboard">
                    <Button variant="secondary" size="sm" asChild>
                        View Analytics
                        <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link> */}
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                  asChild
                >
                  <a href="https://labs.ragsense.co" target="_blank" rel="noopener noreferrer">
                    Open Dashboard
                  </a>
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}

// Import missing icons
import { Code, Zap } from 'lucide-react'
