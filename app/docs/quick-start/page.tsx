import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Section, Container } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import {
  Rocket,
  CheckCircle2,
  ArrowRight,
  Copy,
  Globe,
  Code,
  Sparkles,
  Play,
  Palette, 
  BarChart3,
  AlertCircle
} from 'lucide-react'
import { FREE_TRIAL_DAYS, SITE_SIGNUP_URL } from '@/data/common'

export const metadata: Metadata = {
  title: 'Quick Start Guide - Set Up AI Chatbot in 5 Minutes | RagSense',
  description: 'Get your AI chatbot up and running in 5 minutes. Complete step-by-step tutorial to install RagSense on your website. No credit card required for 14-day free trial.',
  keywords: [
    'quick start guide',
    'AI chatbot setup',
    'chatbot installation tutorial',
    'RagSense setup',
    '5 minute chatbot',
    'website chatbot integration',
    'customer support automation',
    'chatbot tutorial'
  ],
  openGraph: {
    title: 'Quick Start Guide - Set Up AI Chatbot in 5 Minutes | RagSense',
    description: 'Set up your AI chatbot in 5 minutes with our comprehensive quick start guide. Video tutorials included.',
    type: 'article',
    url: 'https://ragsense.co/docs/quick-start',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quick Start Guide - Set Up AI Chatbot in 5 Minutes',
    description: 'Step-by-step guide to install your AI chatbot.',
  },
  alternates: {
    canonical: 'https://ragsense.co/docs/quick-start'
  }
}

export default function QuickStartPage() {
  // HowTo structured data for better SEO and rich snippets
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Set Up RagSense AI Chatbot in 5 Minutes',
    description: 'Complete step-by-step guide to install and configure RagSense AI chatbot on your website.',
    totalTime: 'PT5M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0'
    },
    tool: {
      '@type': 'HowToTool',
      name: 'RagSense Platform'
    },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Create Your Account',
        text: 'Sign up for a free RagSense account at labs.ragsense.co/signup',
        url: 'https://ragsense.co/docs/quick-start#step-1'
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Add Your Website',
        text: 'Enter your website URL and let RagSense crawl and index your content',
        url: 'https://ragsense.co/docs/quick-start#step-2'
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Get Widget Code',
        text: 'Copy the provided JavaScript code snippet with your unique credentials',
        url: 'https://ragsense.co/docs/quick-start#step-3'
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Install on Website',
        text: 'Paste the code snippet before the closing body tag in your HTML',
        url: 'https://ragsense.co/docs/quick-start#step-4'
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Test & Go Live',
        text: 'Visit your website and test the chatbot by asking questions',
        url: 'https://ragsense.co/docs/quick-start#step-5'
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <Section size="sm" className="bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 mb-6">
                <Rocket className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-900 dark:text-orange-300">
                  5 Minute Setup
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                Quick Start Guide
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Get your AI-powered chatbot running on your website in just 5 minutes. Follow these simple steps to transform your customer support.
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Prerequisites */}
        <Section size="sm" className="bg-blue-50 dark:bg-blue-900/10">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-900 dark:text-blue-100">Before You Begin</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" />
                      A website with content you want to index
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" />
                      Ability to add code to your website (or access to your developer)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" />
                      5 minutes of your time
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Step 1: Sign Up */}
        <Section size="sm">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 text-white font-bold text-xl flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold">Create Your Account</h2>
                  <p className="text-gray-600 dark:text-gray-400">Sign up for a free RagSense account</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <ol className="space-y-3">
                    <li>Go to <a href={SITE_SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700">labs.ragsense.co/signup</a></li>
                    <li>Enter your email address</li>
                    <li>Verify your email address (check your inbox)</li>
                    <li>Complete your profile setup</li>
                  </ol>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <strong>Note:</strong> No credit card is required for the {FREE_TRIAL_DAYS}-day free trial. You can start using all features immediately.
                  </p>
                    <a href={SITE_SIGNUP_URL} target="_blank" rel="noopener noreferrer">
                      <Button variant="gradient" asChild>
                          Sign Up Now 
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </a>
                </div>

                {/* TODO: Add signup screenshot here */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl p-12 border border-gray-300 dark:border-gray-700 flex items-center justify-center min-h-[400px]">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <Image
                      src="/docs/signup-dashboard.png"
                      alt="RagSense Signup Dashboard"
                      width={800}
                      height={500}
                      className="rounded-lg shadow-lg"
                    />
                    {/* Placeholder - Replace with actual screenshot */}
                    <p className="mt-4 text-sm">Screenshot: RagSense Signup Page</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Step 2: Add Website */}
        <Section size="sm" className="bg-gray-50 dark:bg-gray-900/50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 text-white font-bold text-xl flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold">Add Your Website</h2>
                  <p className="text-gray-600 dark:text-gray-400">Let RagSense crawl and index your content</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <ol className="space-y-3">
                    <li>Click on <strong>"Add New Website"</strong> in your dashboard</li>
                    <li>Enter your website URL (e.g., <code>https://yourdomain.com</code>)</li>
                    <li>Configure crawling settings (optional):
                      <ul className="mt-2 space-y-1">
                        <li>Maximum pages to crawl</li>
                        <li>Specific pages to include/exclude</li>
                        <li>Crawl frequency</li>
                      </ul>
                    </li>
                    <li>Click <strong>"Start Crawling"</strong></li>
                  </ol>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                  <div className="flex gap-3">
                    <Globe className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Crawling Process</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        RagSense will automatically discover and index all public pages on your website.
                        The initial crawl typically takes 2-10 minutes depending on your site size.
                        You'll receive a notification when it's complete.
                      </p>
                    </div>
                  </div>
                </div>

                {/* TODO: Add website creation screenshot */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl p-12 border border-gray-300 dark:border-gray-700 flex items-center justify-center min-h-[400px]">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <Image
                      src="/docs/add-website.png"
                      alt="Add Website to RagSense"
                      width={800}
                      height={500}
                      className="rounded-lg shadow-lg"
                    />
                    {/* Placeholder - Replace with actual screenshot */}
                    <p className="mt-4 text-sm">Screenshot: Add Website Form</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Step 3: Get Integration Code */}
        <Section size="sm">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 text-white font-bold text-xl flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold">Get Your Widget Code</h2>
                  <p className="text-gray-600 dark:text-gray-400">Copy the installation code snippet</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <ol className="space-y-3">
                    <li>Once crawling is complete, go to <strong>"Installation"</strong> or <strong>"Integration"</strong> tab</li>
                    <li>Copy the provided JavaScript code snippet</li>
                    <li>You'll see something like this:</li>
                  </ol>
                </div>

                <div className="relative">
                  <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-mono text-gray-400">HTML</span>
                      <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm text-gray-300 transition-colors">
                        <Copy className="h-4 w-4" />
                        Copy
                      </button>
                    </div>
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{`<script>
(function(w, d, s, id) {
  w.RunItChat = w.RunItChat || function() {
    (w.RunItChat.q = w.RunItChat.q || []).push(arguments);
  };
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://brain.ragsense.co/chat-widget.js';
  js.setAttribute('data-broker-id', 'RAGS1761590037D533');
  js.setAttribute('data-api-key', 'runit_live_c57b5579e019bf5cda4e1ed17b936ec925155e0f')
  fjs.parentNode.insertBefore(js, fjs);
}(window, document, 'script', 'runit-chat-widget'));
</script>`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
                  <div className="flex gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Important</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Make sure to use the code provided in your dashboard - it contains your unique Broker ID and API Key.
                        Never share these credentials publicly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Step 4: Install on Website */}
        <Section size="sm" className="bg-gray-50 dark:bg-gray-900/50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 text-white font-bold text-xl flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold">Install on Your Website</h2>
                  <p className="text-gray-600 dark:text-gray-400">Add the code to your website</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>Paste the code snippet just before the closing <code>&lt;/body&gt;</code> tag in your HTML:</p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      title: 'Static HTML',
                      description: 'Add to your index.html or template file',
                      icon: Code
                    },
                    {
                      title: 'WordPress',
                      description: 'Use a code injection plugin or theme settings',
                      icon: Globe
                    },
                    {
                      title: 'React/Next.js',
                      description: 'Add to _app.js or layout component',
                      icon: Sparkles
                    }
                  ].map((method) => (
                    <div key={method.title} className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                      <method.icon className="h-8 w-8 text-orange-600 mb-3" />
                      <h3 className="font-semibold mb-2">{method.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{method.description}</p>
                    </div>
                  ))}
                </div>

                {/* TODO: Add widget installation screenshot */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl p-12 border border-gray-300 dark:border-gray-700 flex items-center justify-center min-h-[400px]">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <Image
                      src="/docs/widget-installation.png"
                      alt="Widget Installation Guide"
                      width={800}
                      height={500}
                      className="rounded-lg shadow-lg"
                    />
                    {/* Placeholder - Replace with your widget installation screenshot */}
                    <p className="mt-4 text-sm">Screenshot: Widget Installation Code</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border border-green-200 dark:border-green-800 rounded-xl p-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Need Help Installing?</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        Check out our detailed platform-specific installation guides:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Link href="/docs/installation" className="text-sm font-medium text-green-700 dark:text-green-300 hover:underline">
                          Full Installation Guide →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Step 5: Test & Go Live */}
        <Section size="sm">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 text-white font-bold text-xl flex items-center justify-center flex-shrink-0">
                  5
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold">Test & Go Live</h2>
                  <p className="text-gray-600 dark:text-gray-400">Verify everything works perfectly</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <ol className="space-y-3">
                    <li>Visit your website and look for the chat widget (usually in the bottom-right corner)</li>
                    <li>Click on the widget to open the chat interface</li>
                    <li>Ask a question related to your website content</li>
                    <li>Verify that the AI provides accurate answers based on your content</li>
                  </ol>
                </div>

                {/* Chatbot Demo Video */}
                <div className="relative rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 shadow-xl">
                  <video
                    controls
                    controlsList="nodownload"
                    className="w-full"
                    poster="/docs/video-thumbnail.png"
                  >
                    <source src="/docs/chat-bot-testing.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="text-white text-sm font-medium">Chatbot Demo - Live Testing</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      What to Test
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Widget appears correctly</li>
                      <li>• Chat opens and closes smoothly</li>
                      <li>• Questions are answered accurately</li>
                      <li>• Responses reference your content</li>
                      <li>• Mobile responsiveness</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-orange-600" />
                      Troubleshooting
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Clear browser cache if widget doesn't appear</li>
                      <li>• Check browser console for errors</li>
                      <li>• Verify API keys are correct</li>
                      <li>• Ensure crawling is complete</li>
                      <li>• Contact support if needed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Success Section */}
        <Section size="sm" className="mb-2 bg-gradient-to-br from-orange-600 to-orange-700">
          <Container>
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Congratulations! You're All Set
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Your AI chatbot is now live and ready to assist your customers 24/7.
                Monitor conversations and improve your bot from the dashboard.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/docs/first-chatbot">
                    <Button variant="secondary" size="lg" asChild>
                        Customize Your Chatbot
                        <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                  asChild
                >
                  <a href="https://labs.ragsense.co" target="_blank" rel="noopener noreferrer">
                    Go to Dashboard
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

