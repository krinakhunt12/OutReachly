import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How is this different from other lead gen tools?",
      a: "Most tools are built for enterprise sales teams with complex workflows. OutReachly is designed specifically for freelancers - simple, affordable, and focused on personalized outreach, not mass spam."
    },
    {
      q: "Do I need technical skills to use OutReachly?",
      a: "Not at all! If you can use Google, you can use OutReachly. The interface is intuitive and designed for non-technical freelancers."
    },
    {
      q: "How personalized are the AI emails?",
      a: "Very. Our AI analyzes each business's website, services, and industry to create relevant emails that reference specific details. You can also edit every email before sending."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes, absolutely. No long-term contracts or cancellation fees. You can downgrade or cancel your subscription at any time."
    },
    {
      q: "What types of businesses can I search for?",
      a: "Any local business - restaurants, retail stores, professional services, healthcare, real estate, and more. Our database covers millions of businesses worldwide."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition"
              >
                <span className="font-semibold">{faq.q}</span>
                <span className="text-gray-400 text-xl">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;