import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-4 bg-brand-900 sm:py-6">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <Link href="/" title="" className="flex">
              <Image
                className="w-auto h-9"
                src="/logo.webp"
                alt="PropertyCraft Logo"
                width={120}
                height={36}
              />
            </Link>
          </div>

          <div className="flex md:hidden">
            <button type="button" className="text-white">
              <span aria-hidden="true">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>
            </button>
          </div>

          <nav className="hidden space-x-10 md:flex md:items-center md:justify-center lg:space-x-12">
            <Link
              href="/services"
              title=""
              className="text-base font-normal text-white transition-all duration-200 hover:text-white/80"
            >
              Services
            </Link>

            <Link
              href="/about"
              title=""
              className="text-base font-normal text-white transition-all duration-200 hover:text-white/80"
            >
              About Us
            </Link>

            <Link
              href="/blog"
              title=""
              className="text-base font-normal text-white transition-all duration-200 hover:text-white/80"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              title=""
              className="text-base font-normal text-white transition-all duration-200 hover:text-white/80"
            >
              Contact
            </Link>
          </nav>

          <div className="relative hidden md:justify-center md:items-center md:inline-flex group">
            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-brand-500 to-brand-400 group-hover:shadow-lg group-hover:shadow-brand-500/50"></div>
            <Link
              href="/contact"
              title=""
              className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-brand-900 border border-transparent rounded-full"
              role="button"
            >
              Contact
            </Link>
          </div>
        </div>

        <nav className="hidden">
          <div className="flex flex-col pt-8 pb-4 space-y-6">
            <Link
              href="/services"
              title=""
              className="text-base font-normal text-white transition-all duration-200 hover:text-white/80"
            >
              Services
            </Link>

            <Link
              href="/about"
              title=""
              className="text-base font-normal text-white transition-all duration-200 hover:text-white/80"
            >
              About Us
            </Link>

            <Link
              href="/blog"
              title=""
              className="text-base font-normal text-white transition-all duration-200 hover:text-white/80"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              title=""
              className="text-base font-normal text-white transition-all duration-200 hover:text-white/80"
            >
              Contact
            </Link>

            <div className="relative inline-flex items-center justify-center group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-brand-500 to-brand-400 group-hover:shadow-lg group-hover:shadow-brand-500/50"></div>
              <Link
                href="/contact"
                title=""
                className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-brand-900 border border-transparent rounded-full"
                role="button"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
