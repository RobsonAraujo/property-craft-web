import React from "react";

const Stats = () => {
  const stats = [
    {
      number: "500+",
      label: "Properties Managed",
      description: "Across Greater Boston",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Rated by property owners",
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "In property management",
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "For owners and tenants",
    },
  ];

  return (
    <section className="py-12 bg-brand-800 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Trusted by Property Owners
          </h2>
          <p className="mt-4 text-base text-white/80 max-w-2xl mx-auto">
            Our track record speaks for itself
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-white/70">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
