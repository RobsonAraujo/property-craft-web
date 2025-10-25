"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interests: [] as string[],
    propertyDetails: "",
    agreeSMS: false,
  });

  const interestOptions = [
    "Free 30-Minute Consultation",
    "Property Management Services",
    "Generational Strategic Planning",
    "Self Manager to Outsourcing Management",
    "Home to Rental",
    "Vendor and Employment",
  ];

  const handleCheckboxChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-16 bg-white sm:py-20 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ready to experience professional property management? Fill out the
              form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    I&apos;m interested in
                  </h3>
                  <div className="space-y-3">
                    {interestOptions.map((interest) => (
                      <label
                        key={interest}
                        className="flex items-start cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleCheckboxChange(interest)}
                          className="mt-1 w-5 h-5 text-brand-800 border-gray-300 rounded focus:ring-brand-500 cursor-pointer"
                        />
                        <span className="ml-3 text-base text-gray-700 group-hover:text-brand-800 transition-colors">
                          {interest}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="propertyDetails"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Tell Us About Your Property{" "}
                    <span className="text-gray-500 font-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="propertyDetails"
                    rows={5}
                    value={formData.propertyDetails}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        propertyDetails: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your property, location, number of units, etc."
                  />
                </div>

                <div className="mb-8">
                  <label className="flex items-start cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.agreeSMS}
                      onChange={(e) =>
                        setFormData({ ...formData, agreeSMS: e.target.checked })
                      }
                      className="mt-1 w-5 h-5 text-brand-800 border-gray-300 rounded focus:ring-brand-500 cursor-pointer"
                    />
                    <span className="ml-3 text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">
                        Agree to Receive SMS (optional)
                      </span>
                      <br />
                      We would love to SMS text you back! By checking this box
                      you agree to receive text (SMS) messages from
                      PropertyCraft Management Co. You can reply
                      &quot;STOP&quot; to opt-out at any time.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-800 text-white font-semibold py-4 px-8 rounded-lg hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  Submit
                </button>

                <div className="mt-6 text-center text-sm text-gray-600">
                  By submitting this form, you agree to our{" "}
                  <a
                    href="/privacy-policy"
                    className="text-brand-800 hover:text-brand-700 font-medium underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="/form-terms"
                    className="text-brand-800 hover:text-brand-700 font-medium underline"
                  >
                    Form Terms
                  </a>
                  .
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-brand-800 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        (123) 456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:info@propertycraft.com"
                        className="text-white/90 hover:text-white transition-colors break-all"
                      >
                        info@propertycraft.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-white/90">
                        Greater Boston Area
                        <br />
                        Massachusetts
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Property Management Advice
                </h3>
                <p className="text-gray-600 mb-4">
                  Looking for expert advice? Schedule a free 30-minute
                  consultation with our property management specialists.
                </p>
                <a
                  href="#consultation"
                  className="inline-flex items-center text-brand-800 hover:text-brand-700 font-semibold"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
