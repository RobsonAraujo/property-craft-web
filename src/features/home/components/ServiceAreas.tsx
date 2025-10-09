import React from "react";
import Image from "next/image";

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
    <section className="py-10 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Service Areas In and Around Boston
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            We partner with owners and investors in:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/65ead168a72f9a0dae55ee97/b5178762-b748-4409-bc69-af19ec83220b/PCM+Service+Area+%28lines%29+-+no+hingham.jpg?format=2500w"
              alt="Service Areas Map"
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:border-gray-300 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 text-gray-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-gray-900">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-base text-gray-700">
                <span className="font-semibold">Live outside these areas?</span>{" "}
                Just drop us a line and we'll do our best to assist you or
                connect you with someone who can!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
