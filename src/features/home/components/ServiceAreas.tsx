import React from "react";

const ServiceAreas = () => {
  const areas = [
    "Central Boston",
    "Braintree",
    "Canton",
    "Dedham",
    "Milton",
    "Norwood",
    "Quincy",
    "Randolph",
    "Westwood",
    "Weymouth",
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[350px] lg:min-h-[450px]">
            <div
              className="relative bg-cover bg-center bg-no-repeat h-[300px] lg:h-auto"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1064')",
              }}
            ></div>

            <div className="bg-gray-50 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-4xl mb-4">
                Service Areas In and Around Boston
              </h2>

              <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                We partner with owners and investors in:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {areas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <svg
                      className="w-4 h-4 text-brand-800 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-900 font-medium text-sm">
                      {area}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">
                    Live outside these areas?
                  </span>{" "}
                  Just drop us a line and we&apos;ll do our best to assist you
                  or connect you with someone who can!
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-brand-800 rounded-lg hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-800 w-full"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
