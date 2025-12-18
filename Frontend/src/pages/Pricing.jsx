import { useState } from 'react';
import AnimatedOnScroll from '../components/ui/AnimatedOnScroll'

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [openFAQ, setOpenFAQ] = useState(null);

  const plans = [
    {
      name: "Free",
      subtitle: "Perfect to get started",
      description: "Test OutReachly with limited features. No credit card required.",
      price: { monthly: 0, yearly: 0 },
      popular: false,
      features: [
        { text: "50 business searches per month", included: true },
        { text: "10 AI-generated emails", included: true },
        { text: "Basic email tracking (opens)", included: true },
        { text: "Email support", included: true },
        { text: "1 saved search list", included: true },
        { text: "CSV export", included: true },
        { text: "Advanced analytics", included: false },
        { text: "Custom email templates", included: false },
        { text: "A/B testing", included: false },
        { text: "CRM integrations", included: false },
        { text: "API access", included: false },
        { text: "Priority support", included: false }
      ],
      cta: "Start Free",
      ctaStyle: "outline"
    },
    {
      name: "Pro",
      subtitle: "For serious freelancers",
      description: "Everything you need to scale your outreach and land more clients.",
      price: { monthly: 29, yearly: 24 },
      popular: true,
      features: [
        { text: "Unlimited business searches", included: true },
        { text: "500 AI-generated emails/month", included: true },
        { text: "Advanced email tracking & analytics", included: true },
        { text: "Priority email support", included: true },
        { text: "Unlimited saved search lists", included: true },
        { text: "CSV import/export", included: true },
        { text: "Custom email templates", included: true },
        { text: "A/B testing", included: true },
        { text: "CRM integrations (HubSpot, Pipedrive)", included: true },
        { text: "API access", included: true },
        { text: "Follow-up automation", included: true },
        { text: "White-label reports", included: false }
      ],
      cta: "Start 14-Day Trial",
      ctaStyle: "primary"
    },
    {
      name: "Agency",
      subtitle: "For teams and agencies",
      description: "Collaborate with your team and manage multiple clients at scale.",
      price: { monthly: 99, yearly: 82 },
      popular: false,
      features: [
        { text: "Everything in Pro, plus:", included: true },
        { text: "2,000 AI-generated emails/month", included: true },
        { text: "5 team member seats", included: true },
        { text: "Team collaboration features", included: true },
        { text: "Shared templates and lists", included: true },
        { text: "Advanced team analytics", included: true },
        { text: "White-label reports", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Custom onboarding & training", included: true },
        { text: "Phone support", included: true },
        { text: "SLA guarantee", included: true },
        { text: "Custom integrations", included: true }
      ],
      cta: "Contact Sales",
      ctaStyle: "outline"
    }
  ];

  const addons = [
    {
      name: "Extra Emails",
      description: "Need more than your plan includes?",
      pricing: "$10 per 100 additional emails",
      icon: "📧"
    },
    {
      name: "Additional Team Members",
      description: "Add more seats to your Agency plan",
      pricing: "$15 per additional member/month",
      icon: "👥"
    },
    {
      name: "Premium Support",
      description: "Get phone support and faster response times",
      pricing: "$49/month (Pro users only)",
      icon: "🎧"
    },
    {
      name: "Custom Integration",
      description: "Need a specific tool integration?",
      pricing: "Custom quote",
      icon: "🔗"
    }
  ];

  const comparisonFeatures = [
    { category: "Core Features", items: [
      { name: "Business Searches", free: "50/month", pro: "Unlimited", agency: "Unlimited" },
      { name: "AI-Generated Emails", free: "10/month", pro: "500/month", agency: "2,000/month" },
      { name: "Email Tracking", free: "Basic", pro: "Advanced", agency: "Advanced" },
      { name: "Saved Search Lists", free: "1", pro: "Unlimited", agency: "Unlimited" }
    ]},
    { category: "Advanced Features", items: [
      { name: "Custom Templates", free: false, pro: true, agency: true },
      { name: "A/B Testing", free: false, pro: true, agency: true },
      { name: "Follow-up Automation", free: false, pro: true, agency: true },
      { name: "Advanced Analytics", free: false, pro: true, agency: true }
    ]},
    { category: "Integrations", items: [
      { name: "Gmail & Outlook", free: true, pro: true, agency: true },
      { name: "CRM Integration", free: false, pro: true, agency: true },
      { name: "Zapier", free: false, pro: true, agency: true },
      { name: "API Access", free: false, pro: true, agency: true }
    ]},
    { category: "Team & Support", items: [
      { name: "Team Members", free: "1", pro: "1", agency: "5" },
      { name: "Email Support", free: true, pro: true, agency: true },
      { name: "Priority Support", free: false, pro: true, agency: true },
      { name: "Phone Support", free: false, pro: false, agency: true }
    ]}
  ];

  const faqs = [
    {
      q: "Can I switch plans at any time?",
      a: "Yes! You can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference immediately. If you downgrade, the change will take effect at the end of your current billing cycle."
    },
    {
      q: "What happens if I go over my email limit?",
      a: "On the Free plan, you'll be unable to generate more emails until the next month. On paid plans, you can purchase additional email packs for $10 per 100 emails, or you'll automatically be offered an upgrade to the next tier if it makes more sense."
    },
    {
      q: "Do you offer a free trial for paid plans?",
      a: "Yes! The Pro plan comes with a 14-day free trial. No credit card required to start. You'll get full access to all Pro features during the trial period."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards (Visa, Mastercard, American Express, Discover) and PayPal. For Agency plans, we can also invoice you if needed."
    },
    {
      q: "Is there a discount for annual billing?",
      a: "Yes! When you choose annual billing, you get 17% off the monthly price. That's like getting 2 months free every year."
    },
    {
      q: "Can I cancel anytime?",
      a: "Absolutely. There are no long-term contracts or cancellation fees. You can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your billing period."
    },
    {
      q: "Do you offer refunds?",
      a: "Yes. We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied within the first 14 days, contact support for a full refund, no questions asked."
    },
    {
      q: "What if I need more than 2,000 emails per month?",
      a: "For very high-volume users, we offer custom Enterprise plans with higher limits and additional features. Contact our sales team to discuss your specific needs."
    },
    {
      q: "Are there any setup fees or hidden costs?",
      a: "No. The price you see is the price you pay. No setup fees, no hidden costs, no surprises. The only additional costs are optional add-ons like extra emails or additional team members."
    },
    {
      q: "Can I get a discount for non-profits or students?",
      a: "Yes! We offer 50% off Pro and Agency plans for verified non-profit organizations and students. Contact support with proof of eligibility to get your discount code."
    },
    {
      q: "What happens to my data if I cancel?",
      a: "You can export all your data (searches, emails, contacts) at any time. After cancellation, your data is retained for 90 days in case you want to reactivate. After that, it's permanently deleted."
    },
    {
      q: "Do team members need separate subscriptions?",
      a: "No. On the Agency plan, up to 5 team members are included. Each additional team member is $15/month. On Free and Pro plans, only one user is allowed per subscription."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Freelance Designer",
      avatar: "SC",
      plan: "Pro",
      quote: "Worth every penny. I landed a $4,000 project in my first week using OutReachly. The ROI is insane.",
      result: "4x ROI in first month"
    },
    {
      name: "Marcus Johnson",
      role: "Marketing Agency Owner",
      avatar: "MJ",
      plan: "Agency",
      quote: "The Agency plan is perfect for our team. We manage 20+ clients and the collaboration features are essential.",
      result: "Manages 20+ clients"
    },
    {
      name: "Emily Rodriguez",
      role: "Web Developer",
      avatar: "ER",
      plan: "Pro",
      quote: "Started with the free plan, upgraded to Pro after two weeks. Best $29/month I spend on my business.",
      result: "5 new clients monthly"
    }
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen">
     

      {/* Hero */}
      <section className="py-20 px-6 text-center border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-sm font-medium">
            💰 Simple, Transparent Pricing
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Start free and upgrade as you grow. All plans include core features with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-gray-900 p-2 rounded-lg border border-gray-800">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                billingCycle === 'monthly' ? 'bg-blue-600 text-white' : 'text-gray-400'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                billingCycle === 'yearly' ? 'bg-blue-600 text-white' : 'text-gray-400'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Save 17%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border-2 relative ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-600/20 to-blue-600/5 border-blue-600 scale-105' 
                    : 'bg-gray-900 border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.subtitle}</p>
                  <p className="text-gray-500 text-sm mb-6 h-10">{plan.description}</p>
                  
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold">
                      ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  {billingCycle === 'yearly' && plan.price.yearly > 0 && (
                    <p className="text-sm text-gray-500">
                      ${plan.price.yearly * 12} billed annually (save ${(plan.price.monthly - plan.price.yearly) * 12}/year)
                    </p>
                  )}
                </div>

                <button
                  className={`w-full py-4 rounded-lg font-semibold transition mb-8 ${
                    plan.ctaStyle === 'primary'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                  }`}
                >
                  {plan.cta}
                </button>

                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className={`mt-0.5 ${feature.included ? 'text-green-500' : 'text-gray-600'}`}>
                        {feature.included ? '✓' : '×'}
                      </span>
                      <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              All plans include 14-day money-back guarantee • No credit card required for free plan
            </p>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Optional Add-Ons</h2>
            <p className="text-gray-400">Customize your plan with additional features</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {addons.map((addon, i) => (
              <div key={i} className="bg-gray-950 p-6 rounded-xl border border-gray-800 flex items-start gap-4">
                <div className="text-4xl">{addon.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">{addon.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{addon.description}</p>
                  <p className="text-blue-400 font-semibold">{addon.pricing}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Detailed Feature Comparison</h2>
            <p className="text-gray-400">See exactly what's included in each plan</p>
          </div>

          <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              {comparisonFeatures.map((category, i) => (
                <div key={i}>
                  <div className="bg-gray-950 px-6 py-3 border-b border-gray-800">
                    <h3 className="font-bold text-lg">{category.category}</h3>
                  </div>
                  <table className="w-full">
                    <tbody>
                      {category.items.map((item, j) => (
                        <tr key={j} className="border-b border-gray-800">
                          <td className="p-4 text-gray-300 w-1/2">{item.name}</td>
                          <td className="p-4 text-center">
                            {typeof item.free === 'boolean' ? (
                              <span className={item.free ? 'text-green-500' : 'text-gray-600'}>
                                {item.free ? '✓' : '×'}
                              </span>
                            ) : (
                              <span className="text-gray-400">{item.free}</span>
                            )}
                          </td>
                          <td className="p-4 text-center bg-blue-600/5">
                            {typeof item.pro === 'boolean' ? (
                              <span className={item.pro ? 'text-green-500' : 'text-gray-600'}>
                                {item.pro ? '✓' : '×'}
                              </span>
                            ) : (
                              <span className="text-white font-semibold">{item.pro}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof item.agency === 'boolean' ? (
                              <span className={item.agency ? 'text-green-500' : 'text-gray-600'}>
                                {item.agency ? '✓' : '×'}
                              </span>
                            ) : (
                              <span className="text-white font-semibold">{item.agency}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-400">Real results from real freelancers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <div className="inline-block px-3 py-1 bg-blue-600/20 rounded-full text-xs font-semibold text-blue-400 mb-4">
                  {testimonial.plan} Plan
                </div>
                <p className="text-gray-300 text-sm mb-4">"{testimonial.quote}"</p>
                <div className="text-sm text-green-500 font-semibold">{testimonial.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing FAQ</h2>
            <p className="text-gray-400">Common questions about plans and billing</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition"
                >
                  <span className="font-semibold pr-4">{faq.q}</span>
                  <span className="text-gray-400 text-xl">{openFAQ === i ? '−' : '+'}</span>
                </button>
                {openFAQ === i && (
                  <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <button className="bg-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gray-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join hundreds of freelancers using OutReachly to land more clients.
            Start free, no credit card required.
          </p>
          <button className="bg-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
            Start Your Free Trial
          </button>
          <p className="mt-6 text-gray-500 text-sm">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          © {new Date().getFullYear()} OutReachly — Built for Freelancers
        </div>
      </footer>
    </div>
  );
}