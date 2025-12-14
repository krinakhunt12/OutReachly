import { useState } from 'react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: 1,
      title: "Discover Local Businesses",
      subtitle: "Find Your Ideal Clients in Seconds",
      icon: "🔍",
      description: "Stop wasting hours scrolling through Google Maps and business directories. Our intelligent search engine helps you find exactly the businesses you want to reach out to.",
      features: [
        "Search by industry, location, and business size",
        "Filter by revenue, employee count, and more",
        "Get detailed business profiles instantly",
        "Access to millions of verified businesses",
        "Real-time data updates"
      ],
      details: [
        {
          heading: "Smart Filters",
          text: "Use advanced filters to narrow down your search. Target businesses by industry type, location radius, years in business, and more. Find exactly who you're looking for without the noise."
        },
        {
          heading: "Rich Business Data",
          text: "Each business profile includes address, phone, website, social media, industry classification, and estimated size. Know who you're reaching out to before you send that first email."
        },
        {
          heading: "Save Your Searches",
          text: "Create custom search lists and save them for later. Perfect for targeting specific niches or geographic areas. Your saved searches update automatically with new businesses."
        }
      ],
      image: "📊"
    },
    {
      number: 2,
      title: "Get Verified Contact Information",
      subtitle: "Reach the Right People, Every Time",
      icon: "📧",
      description: "We don't just give you generic info@company emails. Our system finds verified email addresses of decision-makers who can actually hire you.",
      features: [
        "Decision-maker email addresses",
        "Verified contact information",
        "Multiple contacts per business",
        "Direct phone numbers when available",
        "Social media profiles"
      ],
      details: [
        {
          heading: "Email Verification",
          text: "Every email address is verified before we show it to you. We use multiple verification methods to ensure emails are valid and deliverable. No more bounced emails wasting your time."
        },
        {
          heading: "Find Decision Makers",
          text: "We identify and provide contact info for owners, managers, and other decision-makers. Reach out directly to the people who can say yes to hiring you."
        },
        {
          heading: "Compliance Built-In",
          text: "All contact data is sourced ethically and complies with GDPR, CAN-SPAM, and other regulations. We only provide publicly available business contact information."
        }
      ],
      image: "✉️"
    },
    {
      number: 3,
      title: "AI Writes Personalized Emails",
      subtitle: "Custom Messages That Actually Get Read",
      icon: "✨",
      description: "Our AI analyzes each business and crafts personalized cold emails that reference their specific services, industry, and needs. No generic templates here.",
      features: [
        "Business-specific personalization",
        "Multiple tone options (professional, casual, friendly)",
        "Industry-aware messaging",
        "Automatic pain point identification",
        "Edit and refine before sending"
      ],
      details: [
        {
          heading: "Deep Personalization",
          text: "The AI reads the business website, analyzes their services, and identifies specific areas where you can help. Each email references actual details about their business."
        },
        {
          heading: "Your Voice, Enhanced",
          text: "Provide your background and service offering once, and the AI adapts it for each business. The emails sound like you, not a robot. You maintain full control with editing."
        },
        {
          heading: "A/B Testing Built-In",
          text: "Generate multiple versions of each email and see which performs better. Learn what messaging resonates with different industries and refine your approach over time."
        }
      ],
      image: "🤖"
    },
    {
      number: 4,
      title: "Send, Track & Follow Up",
      subtitle: "Stay Organized and Close More Deals",
      icon: "📊",
      description: "Send emails with one click, track opens and replies, and manage your entire outreach pipeline from a simple dashboard. No automation—you're always in control.",
      features: [
        "One-click sending",
        "Email open tracking",
        "Reply detection and alerts",
        "Follow-up reminders",
        "Pipeline management"
      ],
      details: [
        {
          heading: "Smart Dashboard",
          text: "See all your outreach in one place. Track which emails were sent, opened, and replied to. Get notified immediately when someone responds so you can follow up fast."
        },
        {
          heading: "Follow-Up Sequences",
          text: "Create follow-up email templates for non-responders. Set reminders to follow up at the right time. The AI can suggest optimal follow-up timing based on your industry."
        },
        {
          heading: "Analytics That Matter",
          text: "See your response rates, best-performing industries, and optimal sending times. Use data to improve your outreach strategy and land more clients."
        }
      ],
      image: "📈"
    }
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Header */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">O</span>
          </div>
          <h1 className="text-xl font-bold">OutReachly</h1>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
          Get Started Free
        </button>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-sm font-medium">
            🎯 Complete Guide
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            How OutReachly Works
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From finding your ideal clients to landing them in your inbox. Here's exactly how OutReachly helps you win more freelance work in less time.
          </p>
        </div>
      </section>

      {/* Step Navigation */}
      <section className="py-8 px-6 border-b border-gray-800 sticky top-0 bg-gray-950/95 backdrop-blur-sm z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`flex items-center gap-3 px-6 py-3 rounded-lg whitespace-nowrap transition ${
                  activeStep === i
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                }`}
              >
                <span className="text-2xl">{step.icon}</span>
                <div className="text-left">
                  <div className="text-xs opacity-70">Step {step.number}</div>
                  <div className="font-semibold text-sm">{step.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Step Header */}
          <div className="text-center mb-16">
            <div className="inline-block text-6xl mb-6">{steps[activeStep].icon}</div>
            <div className="text-sm text-blue-400 font-semibold mb-2">STEP {steps[activeStep].number} OF 4</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{steps[activeStep].title}</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">{steps[activeStep].subtitle}</p>
          </div>

          {/* Description */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 mb-12">
            <p className="text-lg text-gray-300 leading-relaxed">
              {steps[activeStep].description}
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {steps[activeStep].features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-900 p-4 rounded-xl border border-gray-800">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">How It Works in Detail</h3>
            <div className="space-y-6">
              {steps[activeStep].details.map((detail, i) => (
                <div key={i} className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                  <h4 className="text-xl font-semibold mb-3 text-blue-400">{detail.heading}</h4>
                  <p className="text-gray-300 leading-relaxed">{detail.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Demo Placeholder */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">See It In Action</h3>
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-16 rounded-2xl border border-gray-800 text-center">
              <div className="text-8xl mb-6">{steps[activeStep].image}</div>
              <p className="text-gray-400 text-lg">Interactive demo coming soon</p>
              <button className="mt-6 bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Watch Video Demo
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-800">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
                activeStep === 0
                  ? 'bg-gray-900 text-gray-600 cursor-not-allowed'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              <span>←</span>
              <span>Previous Step</span>
            </button>

            {activeStep < steps.length - 1 ? (
              <button
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                <span>Next Step</span>
                <span>→</span>
              </button>
            ) : (
              <button className="bg-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Get Started Now
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why This Process Works</h2>
          <p className="text-lg text-gray-400 mb-12">
            We've designed every step to save you time while improving your results. Here's the difference OutReachly makes:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold mb-2">Save 10+ Hours/Week</h3>
              <p className="text-gray-400 text-sm">
                Stop manually searching for leads. What used to take days now takes minutes.
              </p>
            </div>

            <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">3x Better Response Rate</h3>
              <p className="text-gray-400 text-sm">
                Personalized emails get opened and replied to. Generic templates get ignored.
              </p>
            </div>

            <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">More Clients, Less Effort</h3>
              <p className="text-gray-400 text-sm">
                Focus on delivering great work instead of hunting for your next client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Outreach?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join hundreds of freelancers who are landing more clients with OutReachly.
            Get started today with our free plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
              Start Free Trial
            </button>
            <button className="border border-gray-700 px-10 py-4 rounded-xl hover:bg-gray-800 transition text-lg">
              Schedule Demo
            </button>
          </div>
          <p className="mt-6 text-gray-500 text-sm">
            No credit card required • Setup in 5 minutes • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">O</span>
                </div>
                <h3 className="text-xl font-bold">OutReachly</h3>
              </div>
              <p className="text-gray-500 text-sm">
                The outreach tool built for freelancers.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">How It Works</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Guides</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} OutReachly — Built for Freelancers
          </div>
        </div>
      </footer>
    </div>
  );
}