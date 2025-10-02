import React from "react";

const Process = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
            How We Work
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
            Our proven 6-step process ensures your property is managed
            professionally from start to finish
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 sm:grid-cols-2 gap-8 md:grid-cols-3 lg:gap-12 xl:mt-20">
          <div className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-white bg-gray-900 rounded-full mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Owner & Property Onboarding
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We start by understanding your property goals and conducting a
              comprehensive property assessment to ensure everything is properly
              documented.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-white bg-gray-900 rounded-full mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Property Preparation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We prepare your property to be move-in ready, ensuring all systems
              are working, cleaning is completed, and any necessary repairs are
              addressed.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-white bg-gray-900 rounded-full mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Marketing & Showings
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We market your property across multiple platforms and conduct
              professional showings to find qualified tenants quickly.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-white bg-gray-900 rounded-full mb-6">
              4
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Leasing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We handle all lease negotiations, tenant screening, background
              checks, and lease execution to ensure you get the best tenants.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-white bg-gray-900 rounded-full mb-6">
              5
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Rent Collection & Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We manage rent collection, handle tenant communications, and
              provide ongoing support to ensure a smooth rental experience.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-white bg-gray-900 rounded-full mb-6">
              6
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Property Maintenance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We coordinate all maintenance requests, conduct regular property
              inspections, and ensure your property remains in excellent
              condition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
