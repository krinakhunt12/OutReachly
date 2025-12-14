function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-gray-400">Start free, upgrade when you're ready</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-950 p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <div className="text-gray-400 mb-6">Perfect to get started</div>
            <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-400">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-300">50 business searches/month</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-300">10 AI-generated emails</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-300">Basic email tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-300">Email support</span>
              </li>
            </ul>
            <button className="w-full border border-gray-700 py-3 rounded-lg hover:bg-gray-800 transition">
              Start Free
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/5 p-8 rounded-xl border-2 border-blue-600 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <div className="text-gray-400 mb-6">For serious freelancers</div>
            <div className="text-4xl font-bold mb-6">$29<span className="text-lg text-gray-400">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-300">Unlimited business searches</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-300">500 AI-generated emails/month</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-300">Advanced tracking & analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-300">Priority support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-300">Custom email templates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-300">CRM integrations</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
              Start Pro Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;