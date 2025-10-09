import React from "react";

const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Owner & Property Onboarding",
      description:
        "We start by understanding your property goals and conducting a comprehensive property assessment to ensure everything is properly documented.",
    },
    {
      number: "2",
      title: "Property Preparation",
      description:
        "We prepare your property to be move-in ready, ensuring all systems are working, cleaning is completed, and any necessary repairs are addressed.",
    },
    {
      number: "3",
      title: "Marketing & Showings",
      description:
        "We market your property across multiple platforms and conduct professional showings to find qualified tenants quickly.",
    },
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
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            How does it work?
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Our proven process ensures your property is managed professionally
            from start to finish.
          </p>
        </div>

        <div className="space-y-16 mt-12 lg:mt-20">
          <div className="relative">
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
              {steps.slice(0, 3).map((step, index) => (
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

          <div className="relative">
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
              {steps.slice(3, 6).map((step, index) => (
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
      </div>
    </section>
  );
};

export default Process;
