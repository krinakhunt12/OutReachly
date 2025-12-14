function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Freelance Designer",
      avatar: "SC",
      quote: "I went from spending 10 hours a week on outreach to just 2 hours. The AI emails actually sound like me, and clients love how personalized they are."
    },
    {
      name: "Marcus Johnson",
      role: "Marketing Consultant",
      avatar: "MJ",
      quote: "I've tried every lead gen tool out there. OutReachly is the first one that actually feels built for freelancers. Got 3 new clients in my first month."
    },
    {
      name: "Emily Rodriguez",
      role: "Web Developer",
      avatar: "ER",
      quote: "The time I save on finding leads and writing emails now goes directly into my client work. It's honestly a game-changer for my business."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Loved by Freelancers</h2>
          <p className="mt-4 text-gray-400">See what our early users are saying</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">"{testimonial.quote}"</p>
              <div className="mt-4 text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;