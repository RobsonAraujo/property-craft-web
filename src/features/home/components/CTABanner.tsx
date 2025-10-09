import React from "react";

const CTABanner = () => {
  return (
    <section className="py-12 bg-brand-800 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Maximize Your Property Investment?
          </h2>
          <p className="mt-6 text-lg text-white/90 max-w-3xl mx-auto">
            Partner with PropertyCraft and experience professional property
            management that delivers results. Let's discuss how we can help you
            achieve your investment goals.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand-900 transition-all duration-200 bg-white rounded-lg hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
