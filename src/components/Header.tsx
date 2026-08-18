"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { items } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalWishlistItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Our Story", href: "/our-story" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[rgba(15,15,15,0.06)] transition-all">
      <div className="w-full px-6 sm:px-10 lg:px-16 h-20 grid grid-cols-3 items-center">

        {/* Left: Brand Logo */}
        <div className="flex items-center justify-start">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-16 w-56 sm:w-60 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Skincare By Kumar Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-14">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base tracking-wide font-medium transition-colors relative py-1 ${isActive
                    ? "text-[#0F0F0F] font-semibold"
                    : "text-[#6B6B6B] hover:text-[#0F0F0F]"
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#020101] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 justify-end">
          <Link
            href="/wishlist"
            className="relative p-2.5 rounded-full text-[#0F0F0F] hover:bg-[#FAFAFA] transition-colors flex items-center justify-center group"
            title="View Wishlist"
          >
            <Heart className="w-5 h-5 transition-transform group-hover:scale-110" />
            {totalWishlistItems > 0 && (
              <span className="absolute top-1 right-1 bg-[#020101] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                {totalWishlistItems}
              </span>
            )}
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-[#0F0F0F] hover:bg-[#FAFAFA]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[rgba(15,15,15,0.06)] px-6 py-5 shadow-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base py-2 font-medium border-b border-gray-100 ${pathname === link.href ? "text-[#020101] font-semibold" : "text-[#6B6B6B]"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/wishlist"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base py-2 font-medium text-[#0F0F0F]"
            >
              <span>Wishlist</span>
              <span className="bg-[#020101] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {totalWishlistItems} items
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
