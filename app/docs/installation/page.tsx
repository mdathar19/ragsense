import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Section, Container } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Code,
  Copy,
  Globe,
  Zap,
  Wrench,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  AlertCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Installation Guide - WordPress, React, Shopify & More | RagSense',
  description: 'Complete installation guide for RagSense AI chatbot on WordPress, React, Next.js, Shopify, and all major platforms. Platform-specific code snippets and examples included.',
  keywords: [
    'chatbot installation',
    'WordPress chatbot install',
    'React chatbot integration',
    'Next.js chatbot',
    'Shopify chatbot setup',
    'website widget installation',
    'JavaScript widget',
    'chatbot integration guide'
  ],
  openGraph: {
    title: 'Installation Guide - WordPress, React, Shopify & More | RagSense',
    description: 'Step-by-step installation instructions for every platform. Install RagSense chatbot in minutes.',
    type: 'article',
    url: 'https://ragsense.co/docs/installation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Installation Guide - All Platforms | RagSense',
    description: 'Install RagSense on WordPress, React, Shopify, and more.',
  },
  alternates: {
    canonical: 'https://ragsense.co/docs/installation'
  }
}

export default function InstallationPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <Section size="sm" className="bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 mb-6">
                <Wrench className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-900 dark:text-orange-300">
                  Installation
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                Installation Guide
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Comprehensive guide to installing RagSense on any platform. Choose your setup and follow the step-by-step instructions.
              </p>
            </div>
          </Container>
        </Section>

        {/* Standard Installation */}
        <Section size="sm">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-6">Standard Installation</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                The easiest way to add RagSense to any website. Works with all platforms and frameworks.
              </p>

              <div className="space-y-6">
                <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono text-gray-400">HTML</span>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm text-gray-300 transition-colors">
                      <Copy className="h-4 w-4" />
                      Copy
                    </button>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`<!-- Add this before the closing </body> tag -->
<script>
(function(w, d, s, id) {
  w.RunItChat = w.RunItChat || function() {
    (w.RunItChat.q = w.RunItChat.q || []).push(arguments);
  };
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://brain.ragsense.co/chat-widget.js';
  js.setAttribute('data-broker-id', 'RAGS177D533');
  js.setAttribute('data-api-key', 'runit_live_c57b5579e0a4e1ed17b936ec925155e0f')
  fjs.parentNode.insertBefore(js, fjs);
}(window, document, 'script', 'runit-chat-widget'));
</script>`}</code>
                  </pre>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
                  <div className="flex gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Get Your Credentials</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Replace <code className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 rounded">YOUR_BROKER_ID</code> and{' '}
                        <code className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 rounded">YOUR_API_KEY</code> with your actual credentials from the{' '}
                        <a href="https://labs.ragsense.co" target="_blank" rel="noopener noreferrer" className="text-yellow-700 dark:text-yellow-300 hover:underline">
                          RagSense Dashboard
                        </a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Platform-Specific Installations */}
        <Section size="sm" className="bg-gray-50 dark:bg-gray-900/50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-8 text-center">Platform-Specific Guides</h2>

              <div className="space-y-8">
                {/* WordPress */}
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20">
                      <Globe className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold">WordPress</h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Add RagSense to your WordPress site using a code injection plugin or theme customizer.
                  </p>

                  <div className="space-y-4">
                    <div className="pl-6 border-l-4 border-blue-500">
                      <h4 className="font-semibold mb-2">Method 1: Using a Plugin (Recommended)</h4>
                      <ol className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li>1. Install a plugin like <strong>"Insert Headers and Footers"</strong> or <strong>"Code Snippets"</strong></li>
                        <li>2. Go to <strong>Settings → Insert Headers and Footers</strong></li>
                        <li>3. Paste the RagSense code in the <strong>"Scripts in Footer"</strong> section</li>
                        <li>4. Save changes</li>
                      </ol>
                    </div>

                    <div className="pl-6 border-l-4 border-blue-300">
                      <h4 className="font-semibold mb-2">Method 2: Theme Customizer</h4>
                      <ol className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li>1. Go to <strong>Appearance → Customize</strong></li>
                        <li>2. Look for <strong>"Additional CSS"</strong> or <strong>"Custom Code"</strong> section</li>
                        <li>3. Some themes have a footer injection area - paste the code there</li>
                        <li>4. Publish changes</li>
                      </ol>
                    </div>

                    <div className="pl-6 border-l-4 border-blue-300">
                      <h4 className="font-semibold mb-2">Method 3: Edit footer.php (Advanced)</h4>
                      <ol className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li>1. Go to <strong>Appearance → Theme File Editor</strong></li>
                        <li>2. Select <strong>footer.php</strong></li>
                        <li>3. Paste the code before <code>&lt;/body&gt;</code></li>
                        <li>4. Update file (⚠️ Create a backup first!)</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* React / Next.js */}
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-900/20 dark:to-cyan-800/20">
                      <Code className="h-6 w-6 text-cyan-600" />
                    </div>
                    <h3 className="text-2xl font-bold">React / Next.js</h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Add RagSense to your React or Next.js application.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Next.js (App Router)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Add to your root <code>layout.tsx</code> or <code>layout.js</code>:
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-300">
                          <code>{`import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* RagSense Chat Widget */}
         <Script
          id="runit-chat-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: '
              window.RunItChat = window.RunItChat || function() {
                (window.RunItChat.q = window.RunItChat.q || []).push(arguments);
              };
            '
          }}
        />

        {/* RagSense Chat Widget - Main Script */}
        <Script
          id="runit-chat-widget"
          src="https://brain.ragsense.co/chat-widget.js"
          strategy="afterInteractive"
          data-broker-id="RAGS17615037D533"
          data-api-key="runit_live_c57b5579e0194ba4ed17b936ec925155e0f"
        />
      </body>
    </html>
  )
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Next.js (Pages Router)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Add to your <code>_app.js</code> or <code>_app.tsx</code>:
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-300">
                          <code>{`import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <Script
        id="ragsense-chat-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: \`
            window.RagSenseChat = window.RagSenseChat || function() {
              (window.RagSenseChat.q = window.RagSenseChat.q || []).push(arguments);
            };
          \`
        }}
      />
      <Script
        id="ragsense-chat-widget"
        src="https://brain.ragsense.co/chat-widget.js"
        strategy="afterInteractive"
        data-broker-id="YOUR_BROKER_ID"
        data-api-key="YOUR_API_KEY"
      />
    </>
  )
}

export default MyApp`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">React (Create React App)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Add to your <code>public/index.html</code> before <code>&lt;/body&gt;</code>:
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-300">
                          <code>{`<!-- Add before </body> -->
<script>
(function(w, d, s, id) {
  w.RunItChat = w.RunItChat || function() {
    (w.RunItChat.q = w.RunItChat.q || []).push(arguments);
  };
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://brain.ragsense.co/chat-widget.js';
  js.setAttribute('data-broker-id', 'RAGS1761537D533');
  js.setAttribute('data-api-key', 'runit_live_c57b5579e0194bf5cda4e1ed17b936ec925155e0f')
  fjs.parentNode.insertBefore(js, fjs);
}(window, document, 'script', 'runit-chat-widget'));
</script>`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shopify */}
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/20 dark:to-green-800/20">
                      <Globe className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Shopify</h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Add RagSense to your Shopify store.
                  </p>

                  <ol className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li>1. Go to your Shopify admin panel</li>
                    <li>2. Navigate to <strong>Online Store → Themes</strong></li>
                    <li>3. Click <strong>Actions → Edit code</strong> on your active theme</li>
                    <li>4. Find and open <code>theme.liquid</code></li>
                    <li>5. Scroll to the bottom and find the <code>&lt;/body&gt;</code> tag</li>
                    <li>6. Paste the RagSense code just before <code>&lt;/body&gt;</code></li>
                    <li>7. Click <strong>Save</strong></li>
                  </ol>

                  <div className="mt-6 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Tip:</strong> The chat widget will automatically work on all pages of your Shopify store,
                      including product pages, checkout, and blog posts.
                    </p>
                  </div>
                </div>

                {/* HTML/Static Sites */}
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20">
                      <Code className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Static HTML / Other Platforms</h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Works with any HTML-based website, including Wix, Squarespace, Webflow, and more.
                  </p>

                  <ol className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li>1. Locate your main HTML template or index file</li>
                    <li>2. Find the closing <code>&lt;/body&gt;</code> tag</li>
                    <li>3. Paste the RagSense installation code just before it</li>
                    <li>4. Save and deploy your changes</li>
                  </ol>

                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Platform-Specific Instructions:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li>• <strong>Wix:</strong> Use "Custom Code" in Settings → Custom Code → Add Code to Body End</li>
                        <li>• <strong>Squarespace:</strong> Settings → Advanced → Code Injection → Footer</li>
                        <li>• <strong>Webflow:</strong> Project Settings → Custom Code → Footer Code</li>
                        <li>• <strong>Ghost:</strong> Settings → Code Injection → Site Footer</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Verification */}
        <Section size="sm">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-6">Verify Installation</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Success Indicators
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>✓ Chat widget appears on your site (usually bottom-right)</li>
                    <li>✓ Widget opens when clicked</li>
                    <li>✓ Welcome message displays</li>
                    <li>✓ Questions receive responses</li>
                    <li>✓ No console errors</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                    Common Issues
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Check if API credentials are correct</li>
                    <li>• Verify script is before <code>&lt;/body&gt;</code></li>
                    <li>• Clear browser cache</li>
                    <li>• Disable ad blockers</li>
                    <li>• Check browser console for errors</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/10 dark:to-orange-800/10 border border-orange-200 dark:border-orange-800 rounded-xl p-6">
                <h3 className="font-semibold mb-3 text-orange-900 dark:text-orange-100">Need Help?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you're experiencing issues or need assistance with installation, we're here to help.
                </p>
                <div className="flex flex-wrap gap-3">
                    <a href="mailto:support@ragsense.co">
                      <Button variant="outline" asChild>
                          Contact Support
                          <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </a>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Next Steps */}
        <Section size="sm" className="bg-gray-50 dark:bg-gray-900/50">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-display font-bold mb-6">Installation Complete!</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Your RagSense chatbot is now installed. Let's customize it to match your brand.
              </p>
                <Link href="/docs/first-chatbot">
                  <Button variant="gradient" size="lg" asChild>
                      Customize Your Chatbot
                      <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
