import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: December 2024</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              PropertyCraft Management Co. collects information that you provide
              directly to us, including your name, email address, phone number,
              and property details when you submit our contact form.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to respond to your inquiries,
              provide property management services, and communicate with you
              about our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at info@propertycraft.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
