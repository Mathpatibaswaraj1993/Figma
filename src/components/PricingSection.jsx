import React from "react";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "9.99",
      features: [
        "2 GB of space",
        "14 days of backups",
        "Social integrations",
        "Client billing",
        "Remote access",
        "Custom domain",
        "24 hours support",
        "Admin tools",
        "Collaboration tools",
        "User management",
      ],
      buttonColor: "bg-gray-200 text-black hover:bg-gray-300",
    },
    {
      name: "Professional",
      price: "19.99",
      features: [
        "2 GB of space",
        "14 days of backups",
        "Social integrations",
        "Client billing",
        "Remote access",
        "Custom domain",
        "24 hours support",
        "Admin tools",
        "Collaboration tools",
        "User management",
      ],
      buttonColor: "bg-pink-600 hover:bg-pink-700 text-white",
    },
    {
      name: "Team",
      price: "49.99",
      features: [
        "2 GB of space",
        "14 days of backups",
        "Social integrations",
        "Client billing",
        "Remote access",
        "Custom domain",
        "24 hours support",
        "Admin tools",
        "Collaboration tools",
        "User management",
      ],
      buttonColor: "bg-gray-200 text-black hover:bg-gray-300",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Plans & Pricing</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Startup Framework is free forever — you only pay for custom domain
          hosting or to export your site.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-lg align-top">$</span>
              </p>

              <ul className="text-left space-y-2 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-200">
                    <span className="text-green-400 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`px-6 py-3 rounded-full font-semibold transition ${plan.buttonColor}`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
