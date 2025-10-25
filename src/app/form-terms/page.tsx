import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FormTermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Form Terms</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: December 2024</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Submission Agreement
            </h2>
            <p className="text-gray-600 mb-4">
              By submitting this form, you agree to allow PropertyCraft
              Management Co. to contact you regarding property management
              services via email, phone, or SMS (if opted in).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              SMS Terms
            </h2>
            <p className="text-gray-600 mb-4">
              If you opt in to receive SMS messages, message and data rates may
              apply. You can opt out at any time by replying &quot;STOP&quot; to
              any message.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Information Accuracy
            </h2>
            <p className="text-gray-600 mb-4">
              You agree to provide accurate and complete information when
              submitting this form.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
