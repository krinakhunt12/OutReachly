function Problem() {
  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">The Real Problem Isn't Your Skill</h2>
          <p className="mt-4 text-gray-400 text-lg">
            It's the invisible work that happens before you even get hired.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
            <div className="text-3xl mb-3">😫</div>
            <h3 className="font-semibold text-lg mb-2">Endless Searching</h3>
            <p className="text-gray-400 text-sm">
              Hours spent scrolling through Google Maps, business directories, and LinkedIn just to find potential clients.
            </p>
          </div>

          <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
            <div className="text-3xl mb-3">✉️</div>
            <h3 className="font-semibold text-lg mb-2">Generic Templates</h3>
            <p className="text-gray-400 text-sm">
              Copy-paste emails that feel impersonal and get ignored. You know they can tell it's a template.
            </p>
          </div>

          <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
            <div className="text-3xl mb-3">⏰</div>
            <h3 className="font-semibold text-lg mb-2">Time Wasted</h3>
            <p className="text-gray-400 text-sm">
              Time you could spend on actual client work is instead spent on tedious outreach tasks.
            </p>
          </div>
        </div>

        <p className="mt-12 text-center text-gray-500 text-lg">
          OutReachly removes the friction <span className="text-white font-semibold">before</span> revenue even starts.
        </p>
      </div>
    </section>
  );
}

export default Problem;