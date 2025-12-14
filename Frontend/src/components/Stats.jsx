function Stats() {
  const stats = [
    { value: "10,000+", label: "Businesses Discovered" },
    { value: "87%", label: "Response Rate" },
    { value: "5 hrs", label: "Saved Per Week" },
    { value: "4.9/5", label: "User Rating" }
  ];

  return (
    <section className="py-16 px-6 border-y border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-500">{stat.value}</div>
            <div className="mt-2 text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;