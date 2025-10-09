import React from "react";

const ProcessPart2 = () => {
  const steps = [
    {
      number: "4",
      title: "Leasing",
      description:
        "We handle all lease negotiations, tenant screening, background checks, and lease execution to ensure you get the best tenants.",
    },
    {
      number: "5",
      title: "Rent Collection & Support",
      description:
        "We manage rent collection, handle tenant communications, and provide ongoing support to ensure a smooth rental experience.",
    },
    {
      number: "6",
      title: "Property Maintenance",
      description:
        "We coordinate all maintenance requests, conduct regular property inspections, and ensure your property remains in excellent condition.",
    },
  ];

  return (
    <section className="py-8 bg-gray-50 sm:py-12 lg:pt-8 lg:pb-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <svg
              className="w-full"
              viewBox="0 0 400 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 10 Q200 30 380 10"
                stroke="#E5E7EB"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            {steps.map((step, index) => (
              <div key={index}>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  {step.title}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessPart2;
