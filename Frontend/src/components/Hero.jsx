function Hero() {
  return (
    <section className="text-center py-28 px-6 max-w-5xl mx-auto">
      <div className="inline-block mb-4 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-sm font-medium">
        🚀 Now in Early Access
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Find Local Clients.<br /> Send Personalized Outreach.<br />
        <span className="text-blue-500">In Minutes, Not Hours.</span>
      </h1>

      <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
        OutReachly helps freelancers discover local businesses and contact them
        with AI-personalized emails — without manual searching or generic templates.
        Get back to doing what you love: delivering great work.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
          Join Waitlist - It's Free
        </button>
        <button className="border border-gray-700 px-8 py-4 rounded-lg hover:bg-gray-800 transition">
          Watch Demo (2 min)
        </button>
      </div>

      <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span>No credit card required</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span>Setup in 5 minutes</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span>Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;