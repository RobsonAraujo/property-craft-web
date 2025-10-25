import React from "react";
import { Linkedin, ChevronDown } from "lucide-react";

const CEOVideo = () => {
  return (
    <section className="py-16 bg-white sm:py-20 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 mb-4 text-sm font-semibold text-brand-800 bg-brand-100 rounded-full">
            <span>Warren Lizio</span>
            <span className="text-brand-600">•</span>
            <a
              href="https://www.linkedin.com/in/lizio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-brand-600 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-4">
            A Message from Our CEO
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why PropertyCraft is committed to delivering exceptional
            property management services and how we help property owners achieve
            their investment goals.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative w-12 h-12 bg-brand-800 rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOVideo;
