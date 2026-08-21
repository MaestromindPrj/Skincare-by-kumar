"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAFAFA] border-t border-gray-200 pt-16 pb-10 text-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-14 items-start">

          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start gap-4 max-w-lg">
            <Link href="/" className="relative h-16 w-64 sm:h-20 sm:w-72 mb-2 -ml-2">
              <Image
                src="/logo.png"
                alt="Skincare By Kumar Logo"
                fill
                className="object-contain object-left"
              />
            </Link>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-md">
              Carefully selected handcrafted soaps, sourced from an established manufacturer with 10+ years of market experience.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 pt-2 -ml-0.5">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-75 transition-opacity flex items-center justify-center text-[#111111]"
                aria-label="Instagram"
              >
                <Image
                  src="/instagram (1).svg"
                  alt="Instagram"
                  width={22}
                  height={22}
                  className="w-5.5 h-5.5 object-contain"
                />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919952820016"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-75 transition-opacity flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <Image
                  src="/whatsapp_logo_black.png"
                  alt="WhatsApp"
                  width={36}
                  height={36}
                  className="w-9 h-9 object-contain"
                />
              </a>

              {/* Location / Maps */}
              <a
                href="#"
                className="hover:opacity-75 transition-opacity flex items-center justify-center"
                aria-label="Location"
              >
                <Image
                  src="/maps_logo_black.png"
                  alt="Location"
                  width={22}
                  height={22}
                  className="w-5.5 h-5.5 object-contain"
                />
              </a>

              {/* LinkedIn SVG */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#111111] hover:text-[#555555] transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-6 flex justify-start md:justify-end gap-12 sm:gap-16 lg:gap-24 text-left w-full">
            {/* Navigation Links: EXPLORE */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#111111]">
                EXPLORE
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-[#555555]">
                <li>
                  <Link href="/" className="hover:text-[#111111] transition-colors font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-[#111111] transition-colors font-medium">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/our-story" className="hover:text-[#111111] transition-colors font-medium">
                    Our Story
                  </Link>
                </li>
              </ul>
            </div>

            {/* Navigation Links: SUPPORT */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#111111]">
                SUPPORT
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-[#555555]">
                <li>
                  <Link href="/faq" className="hover:text-[#111111] transition-colors font-medium">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/shipping-returns" className="hover:text-[#111111] transition-colors font-medium">
                    Shipping &amp; Returns
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#111111] transition-colors font-medium">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#111111] transition-colors font-medium">
                    Privacy Statement
                  </Link>
                </li>
                <li>
                  <Link href="/cancellation-return-policy" className="hover:text-[#111111] transition-colors font-medium">
                    Cancellation &amp; Return Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Copyright Border Line */}
      <div className="w-full border-t border-gray-200 pt-8 pb-2 text-center text-xs text-[#777777]">
        &copy; 2026 SkincarebyKumar. All rights reserved.
      </div>
    </footer>
  );
};
