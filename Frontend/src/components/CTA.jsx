function CTA() {
  return (
    <section className="py-28 px-6 text-center bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Stop Searching.<br />Start Reaching Out.
        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          Join hundreds of freelancers who are landing more clients with less effort.
          Get early access and start your outreach journey today.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg shadow-lg shadow-blue-600/20">
            Get Early Access - Free
          </button>
          <button className="border border-gray-700 px-10 py-4 rounded-xl hover:bg-gray-800 transition text-lg">
            Schedule a Demo
          </button>
        </div>

        <p className="mt-8 text-gray-500 text-sm">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
}


export default CTA;