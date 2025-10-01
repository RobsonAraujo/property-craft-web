import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black shadow-sm border-b border-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.webp"
                alt="PropertyCraft Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
