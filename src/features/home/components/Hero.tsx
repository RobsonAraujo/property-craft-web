"use client";

import React, { useState } from "react";
import Image from "next/image";
import HighlightText from "../../../components/HighlightText";

const Hero = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-12 bg-brand-900 sm:pb-16 lg:pb-20 xl:pb-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center max-w-5xl grid-cols-1 mx-auto gap-y-8 lg:grid-cols-5 gap-x-16">
          <div className="max-w-md mx-auto text-center lg:max-w-none lg:col-span-3">
            <h1 className="text-4xl font-normal text-white uppercase sm:text-5xl lg:text-6xl xl:text-8xl">
              Property <HighlightText>Management</HighlightText>
            </h1>
            <p className="mt-6 text-lg font-normal text-white sm:text-xl">
              PropertyCraft aims to tangibly improve the value of your
              investment and ensure the smooth operation of your building.
              You&apos;ll get the benefits of a large-scale regional property
              company, while also enjoying the personalized attention of a
              boutique, hands-on management firm.
            </p>
            <div className="mt-8 sm:mt-10">
              <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto lg:max-w-none"
              >
                <div className="space-y-3">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-colors"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-colors"
                      placeholder="Last Name"
                    />
                  </div>

                  {/* Email Field */}
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-colors"
                    placeholder="Email"
                  />

                  {/* Phone Field */}
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-colors"
                    placeholder="Phone"
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-3 text-base font-medium text-brand-900 transition-all duration-200 rounded-lg bg-white hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    Get Started Today
                  </button>
                </div>
              </form>
            </div>

            <p className="max-w-xs mx-auto mt-4 text-base font-normal text-white/70 sm:mt-8">
              Certified Property Manager (CPM)
              <br />
              Professional Management Services
            </p>
          </div>

          <div className="lg:col-span-2 lg:order-first">
            <Image
              className="w-full max-w-sm mx-auto"
              src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/3/iphone-mockup.png"
              alt="PropertyCraft App"
              width={400}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
