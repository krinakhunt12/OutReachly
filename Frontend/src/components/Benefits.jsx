function Benefits() {
  const benefits = [
    {
      icon: "⚡",
      title: "Save Hours Every Week",
      desc: "Stop manually searching for leads. Get back 5-10 hours per week to focus on actual client work."
    },
    {
      icon: "🎯",
      title: "Personalized, Not Spam",
      desc: "Every email is tailored to the specific business. No generic templates that get ignored."
    },
    {
      icon: "👤",
      title: "You Stay in Control",
      desc: "Review and edit every message before sending. Nothing goes out without your approval."
    },
    {
      icon: "🚀",
      title: "Built for Freelancers",
      desc: "Designed specifically for solo entrepreneurs and small agencies, not enterprise sales teams."
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      desc: "Pay only for what you use. No expensive monthly commitments or hidden fees."
    },
    {
      icon: "📈",
      title: "Track Your Success",
      desc: "See which emails get opened, who replies, and what's working best for your outreach."
    }
  ];

  return (
    <section id="benefits" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Why Freelancers Love OutReachly</h2>
          <p className="mt-4 text-gray-400">Everything you need to land more clients, faster</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((item, i) => (
            <div key={i} className="bg-gray-950 p-6 rounded-xl border border-gray-800 hover:border-blue-600/30 transition">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;