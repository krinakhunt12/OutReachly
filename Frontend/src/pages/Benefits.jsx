import { useState } from 'react';
import AnimatedOnScroll from '../components/ui/AnimatedOnScroll'

export default function Benefits() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'time', 'quality', 'results', 'support'];

  const benefits = [
    {
      id: 1,
      category: 'time',
      icon: "⚡",
      title: "Save 10+ Hours Every Week",
      shortDesc: "Stop wasting time on manual lead research and email writing.",
      longDesc: "Freelancers spend an average of 10-15 hours per week just searching for potential clients and writing cold emails. OutReachly automates the tedious parts while keeping you in control of the important decisions.",
      features: [
        "Automated business discovery in seconds",
        "AI-powered email generation",
        "Smart contact information finder",
        "Batch processing for multiple leads",
        "Template library for quick starts"
      ],
      impact: "Average time saved: 10.5 hours/week",
      testimonial: {
        author: "Sarah Chen",
        role: "Freelance Designer",
        quote: "I used to spend entire Sundays searching for leads. Now I do it in 30 minutes on Monday morning."
      }
    },
    {
      id: 2,
      category: 'quality',
      icon: "🎯",
      title: "Hyper-Personalized Outreach",
      shortDesc: "Every email references specific details about the business.",
      longDesc: "Generic templates get ignored. Our AI analyzes each business's website, services, and industry to create emails that feel personally written. Clients can tell you've done your homework.",
      features: [
        "Business-specific content analysis",
        "Industry pain point identification",
        "Service-relevant messaging",
        "Customized subject lines",
        "Tone matching to your style"
      ],
      impact: "87% higher response rate vs templates",
      testimonial: {
        author: "Marcus Johnson",
        role: "Marketing Consultant",
        quote: "Clients often mention specific details from my emails when they reply. The personalization is real."
      }
    },
    {
      id: 3,
      category: 'time',
      icon: "🔍",
      title: "Intelligent Business Discovery",
      shortDesc: "Find your ideal clients with advanced filtering.",
      longDesc: "Stop scrolling through endless Google Maps results. Our smart search engine helps you find businesses by industry, location, size, and more. Get access to millions of verified businesses instantly.",
      features: [
        "Search by 500+ industry categories",
        "Location-based radius search",
        "Filter by business size and revenue",
        "Years in business filtering",
        "Save custom search criteria"
      ],
      impact: "Access to 50M+ businesses worldwide",
      testimonial: {
        author: "Emily Rodriguez",
        role: "Web Developer",
        quote: "I found 200 qualified leads in my niche in less than 5 minutes. That would've taken me days before."
      }
    },
    {
      id: 4,
      category: 'quality',
      icon: "📧",
      title: "Verified Contact Information",
      shortDesc: "Get real email addresses that actually work.",
      longDesc: "We don't just scrape generic info@ emails. Our system finds and verifies decision-maker email addresses using multiple validation methods. Every contact is checked before you see it.",
      features: [
        "Multi-source email verification",
        "Decision-maker identification",
        "Bounce rate under 3%",
        "Direct phone numbers when available",
        "LinkedIn profile matching"
      ],
      impact: "97%+ email deliverability rate",
      testimonial: {
        author: "David Kim",
        role: "Copywriter",
        quote: "I've sent 300+ emails and had only 4 bounces. The email quality is incredible."
      }
    },
    {
      id: 5,
      category: 'results',
      icon: "📊",
      title: "Real-Time Analytics Dashboard",
      shortDesc: "Track opens, replies, and what's working.",
      longDesc: "See exactly how your outreach performs with detailed analytics. Track email opens, replies, and conversion rates. Learn which industries respond best and optimize your strategy over time.",
      features: [
        "Email open tracking",
        "Reply detection and alerts",
        "Industry performance insights",
        "Best sending time analysis",
        "Response rate trends"
      ],
      impact: "3x improvement in conversion rates",
      testimonial: {
        author: "Jessica Martinez",
        role: "Social Media Manager",
        quote: "The analytics showed me restaurants respond best on Tuesday mornings. Game changer."
      }
    },
    {
      id: 6,
      category: 'quality',
      icon: "✍️",
      title: "Full Editorial Control",
      shortDesc: "Review and edit everything before sending.",
      longDesc: "AI generates the first draft, but you're the editor. Review every email, make changes, and ensure it sounds like you. Nothing goes out without your explicit approval.",
      features: [
        "Edit AI-generated content freely",
        "Save custom templates",
        "Version history tracking",
        "Preview before sending",
        "Bulk edit capabilities"
      ],
      impact: "100% human-approved emails",
      testimonial: {
        author: "Ryan O'Brien",
        role: "Freelance Photographer",
        quote: "I love that I can tweak the AI's suggestions. It's like having a writing assistant, not a robot."
      }
    },
    {
      id: 7,
      category: 'results',
      icon: "🔄",
      title: "Smart Follow-Up System",
      shortDesc: "Never forget to follow up with prospects.",
      longDesc: "Most deals are closed in the follow-up, not the first email. Our system reminds you when to follow up and even suggests what to say based on the initial outreach.",
      features: [
        "Automatic follow-up reminders",
        "AI-suggested follow-up messages",
        "Optimal timing recommendations",
        "Track conversation history",
        "Multi-touch campaign support"
      ],
      impact: "60% of deals close in follow-ups",
      testimonial: {
        author: "Amanda Foster",
        role: "Content Writer",
        quote: "The follow-up reminders helped me close 3 deals I would've forgotten about."
      }
    },
    {
      id: 8,
      category: 'support',
      icon: "🤝",
      title: "Dedicated Human Support",
      shortDesc: "Get help from people who understand freelancing.",
      longDesc: "Our support team is made up of former freelancers who understand your challenges. Get quick, helpful responses via email or chat. Priority support available for Pro users.",
      features: [
        "Email support for all users",
        "Average 4-hour response time",
        "Priority support for Pro users",
        "Detailed video tutorials",
        "Active community forum"
      ],
      impact: "4.9/5 support satisfaction rating",
      testimonial: {
        author: "Carlos Mendez",
        role: "Graphic Designer",
        quote: "Support helped me set up my first campaign in minutes. Super friendly and knowledgeable."
      }
    },
    {
      id: 9,
      category: 'time',
      icon: "⚙️",
      title: "Set It and Monitor",
      shortDesc: "Automated workflows that still give you control.",
      longDesc: "Create search lists, generate emails in batches, and schedule reviews. The system works in the background while you focus on client work. Check in when you want, not when you have to.",
      features: [
        "Batch email generation",
        "Scheduled search updates",
        "Auto-save favorite searches",
        "Queue management",
        "Mobile notifications"
      ],
      impact: "90% reduction in daily admin time",
      testimonial: {
        author: "Sophie Anderson",
        role: "Virtual Assistant",
        quote: "I check OutReachly once a day instead of constantly hunting for leads. Total game changer."
      }
    },
    {
      id: 10,
      category: 'results',
      icon: "💰",
      title: "ROI You Can Measure",
      shortDesc: "Track how outreach translates to revenue.",
      longDesc: "Connect sent emails to closed deals and see your actual return on investment. Most users report landing at least one client in their first month, often paying for years of the tool.",
      features: [
        "Deal tracking and attribution",
        "Revenue per email metrics",
        "Cost per acquisition analysis",
        "Monthly ROI reports",
        "Goal setting and tracking"
      ],
      impact: "Average 25x ROI in first 90 days",
      testimonial: {
        author: "Alex Turner",
        role: "Business Consultant",
        quote: "I landed a $8,000 client in week two. The tool paid for itself 276 times over."
      }
    },
    {
      id: 11,
      category: 'support',
      icon: "🔗",
      title: "Integrates With Your Stack",
      shortDesc: "Works seamlessly with tools you already use.",
      longDesc: "Connect OutReachly to your Gmail, Outlook, CRM, and other tools. No need to change your workflow or learn a new system. We fit into your existing process.",
      features: [
        "Gmail and Outlook sync",
        "HubSpot and Pipedrive CRM",
        "Zapier for custom workflows",
        "Calendar integrations",
        "Slack notifications"
      ],
      impact: "20+ native integrations",
      testimonial: {
        author: "Nina Patel",
        role: "Marketing Strategist",
        quote: "The HubSpot integration is perfect. All my outreach syncs automatically with my CRM."
      }
    },
    {
      id: 12,
      category: 'support',
      icon: "🔒",
      title: "Enterprise-Grade Security",
      shortDesc: "Your data is encrypted and always secure.",
      longDesc: "We take security seriously. Bank-level encryption, SOC 2 Type II certification, and full GDPR compliance. Your business data and client information are always protected.",
      features: [
        "256-bit SSL encryption",
        "SOC 2 Type II certified",
        "GDPR and CAN-SPAM compliant",
        "Regular security audits",
        "Two-factor authentication"
      ],
      impact: "Zero security breaches since launch",
      testimonial: {
        author: "Michael Brooks",
        role: "IT Consultant",
        quote: "As someone who works in security, I'm impressed with their infrastructure and compliance."
      }
    }
  ];

  const filteredBenefits = activeCategory === 'all' 
    ? benefits 
    : benefits.filter(b => b.category === activeCategory);

  const stats = [
    { value: "10.5", label: "Hours Saved Weekly", icon: "⏱️" },
    { value: "87%", label: "Higher Response Rate", icon: "📈" },
    { value: "25x", label: "Average ROI", icon: "💵" },
    { value: "97%", label: "Email Deliverability", icon: "✉️" }
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen">
    
      {/* Hero */}
      <section className="py-20 px-6 text-center border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-sm font-medium">
            💎 Complete Benefits Guide
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Why Freelancers Love OutReachly
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover all the ways OutReachly helps you land more clients, save time, and grow your freelance business.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedOnScroll key={i} delay={i * 60} className="text-center" direction={i % 2 === 0 ? 'up' : 'down'}>
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </AnimatedOnScroll>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 border-b border-gray-800 sticky top-0 bg-gray-950/95 backdrop-blur-sm z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-lg whitespace-nowrap font-semibold transition ${
                activeCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
              }`}
            >
              All Benefits
            </button>
            <button
              onClick={() => setActiveCategory('time')}
              className={`px-6 py-2 rounded-lg whitespace-nowrap font-semibold transition ${
                activeCategory === 'time' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
              }`}
            >
              ⏱️ Time Saving
            </button>
            <button
              onClick={() => setActiveCategory('quality')}
              className={`px-6 py-2 rounded-lg whitespace-nowrap font-semibold transition ${
                activeCategory === 'quality' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
              }`}
            >
              🎯 Quality
            </button>
            <button
              onClick={() => setActiveCategory('results')}
              className={`px-6 py-2 rounded-lg whitespace-nowrap font-semibold transition ${
                activeCategory === 'results' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
              }`}
            >
              📊 Results
            </button>
            <button
              onClick={() => setActiveCategory('support')}
              className={`px-6 py-2 rounded-lg whitespace-nowrap font-semibold transition ${
                activeCategory === 'support' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
              }`}
            >
              🤝 Support
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredBenefits.map((benefit, idx) => (
              <AnimatedOnScroll key={benefit.id} delay={idx * 70} className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-blue-600/30 transition">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">{benefit.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.shortDesc}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">{benefit.longDesc}</p>

                  <div className="space-y-3 mb-6">
                    {benefit.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-blue-600/10 border border-blue-600/20 rounded-lg mb-6">
                    <div className="text-sm font-semibold text-blue-400">{benefit.impact}</div>
                  </div>

                  <div className="pt-6 border-t border-gray-800">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {benefit.testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm italic mb-2">"{benefit.testimonial.quote}"</p>
                        <div className="text-sm">
                          <span className="font-semibold">{benefit.testimonial.author}</span>
                          <span className="text-gray-500"> • {benefit.testimonial.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience All These Benefits Today
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join hundreds of freelancers who are landing more clients with OutReachly.
            Start free, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
              Start Free Trial
            </button>
            <button className="border border-gray-700 px-10 py-4 rounded-xl hover:bg-gray-800 transition text-lg">
              See Pricing
            </button>
          </div>
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