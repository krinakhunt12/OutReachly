function HowItWorks() {
  const steps = [
    { 
      icon: "🔍",
      title: "Discover Businesses", 
      desc: "Search local businesses by category, location, and industry. We pull from multiple sources to find the best matches."
    },
    { 
      icon: "📧",
      title: "Get Contact Info", 
      desc: "We automatically find verified email contacts and decision-makers so you're reaching the right person."
    },
    { 
      icon: "✨",
      title: "AI Writes the Email", 
      desc: "Our AI creates personalized, business-specific cold emails that reference their actual services and needs."
    },
    { 
      icon: "📊",
      title: "Send & Track", 
      desc: "Review, edit, and send emails with one click. Track opens, replies, and follow-ups in your dashboard."
    }
  ];

  return (
    <section id="how" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How OutReachly Works</h2>
          <p className="mt-4 text-gray-400">From zero to qualified leads in four simple steps</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-600/50 transition h-full">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-blue-500 font-bold text-sm mb-2">STEP {i + 1}</div>
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-800"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;