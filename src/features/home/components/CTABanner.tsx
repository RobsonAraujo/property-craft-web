import React from "react";
import { Sparkles, TrendingUp, Shield, ArrowRight, Phone } from "lucide-react";

const CTABanner = () => {
  const benefits = [
    { icon: TrendingUp, text: "Maximize ROI" },
    { icon: Shield, text: "Risk-Free Management" },
    { icon: Sparkles, text: "Premium Service" },
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

      <div className="absolute top-10 left-10 w-72 h-72 bg-brand-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-700/20 rounded-full blur-3xl"></div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold text-brand-200 bg-brand-700/50 backdrop-blur-sm rounded-full border border-brand-600/50">
            <Sparkles className="w-4 h-4" />
            <span>Trusted by 500+ Property Owners</span>
          </div>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Ready to Maximize Your
            <span className="block mt-2 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 bg-clip-text text-transparent">
              Property Investment?
            </span>
          </h2>

          <p className="mt-6 text-lg text-white/90 sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Partner with PropertyCraft and experience professional property
            management that delivers results. Let's discuss how we can help you
            achieve your investment goals.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
              >
                <benefit.icon className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-medium text-white">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-brand-900 transition-all duration-200 bg-white rounded-lg hover:bg-yellow-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-xl hover:shadow-2xl"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          <p className="mt-6 text-sm text-white/60">
            Free consultation • No commitment required • Instant response
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
