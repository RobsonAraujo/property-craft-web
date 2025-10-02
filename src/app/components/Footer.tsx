import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">PropertyCraft</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/owners"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Owners
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-white/80">Call or Text:</p>
                <a
                  href="tel:6173220033"
                  className="text-white hover:text-white/80 transition-colors font-medium"
                >
                  (617) 322-0033
                </a>
              </div>
              <div>
                <p className="text-white/80">Email:</p>
                <a
                  href="mailto:hello@propertycraft.com"
                  className="text-white hover:text-white/80 transition-colors font-medium"
                >
                  hello@propertycraft.com
                </a>
              </div>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Locations</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-white font-medium mb-2">Braintree</h5>
                <address className="text-white/80 not-italic text-sm leading-relaxed">
                  150 Grossman Drive, Suite 205
                  <br />
                  Braintree, MA 02184
                </address>
              </div>
              <div>
                <h5 className="text-white font-medium mb-2">Boston</h5>
                <address className="text-white/80 not-italic text-sm leading-relaxed">
                  82 Pembroke Street
                  <br />
                  South End, MA 02118
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="text-center">
            <div className="text-xs text-white/60 leading-relaxed max-w-3xl mx-auto">
              Betterway New England, LLC, doing business as PropertyCraft
              Management Company | Massachusetts Home Improvement Contractor
              License #214004
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
