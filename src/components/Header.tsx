"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { items } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalWishlistItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Our Story", href: "/our-story" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[rgba(15,15,15,0.06)] transition-all">
      <div className="w-full px-4 sm:px-10 lg:px-16 h-20 flex items-center justify-between md:grid md:grid-cols-3">

        {/* Left: Brand Logo */}
        <div className="flex items-center justify-start">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-44 sm:h-16 sm:w-60 transition-transform duration-300 group-hover:scale-105">
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
        <div className="flex items-center gap-3 justify-end ml-auto md:ml-0">
          <Link
            href="/wishlist"
            className="hidden md:flex relative p-2.5 rounded-full text-[#0F0F0F] hover:bg-[#FAFAFA] transition-colors items-center justify-center group"
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
            className="md:hidden p-2.5 rounded-lg text-[#0F0F0F] hover:bg-[#FAFAFA] transition-colors border border-gray-100 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Right Side Drawer Navigation (Rendered via Portal to ensure full opacity & no stacking issues) */}
      {mobileMenuOpen && mounted && createPortal(
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 z-[9998] transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Right Side Drawer */}
          <div className="fixed top-0 right-0 bottom-0 z-[9999] w-80 max-w-[85vw] h-full bg-white border-l border-gray-200 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <span className="text-xs uppercase font-bold tracking-widest text-[#0F0F0F]">
                  Menu
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 text-[#0F0F0F] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex flex-col gap-3 pt-6">
                {[
                  ...navLinks,
                  { name: "Wishlist", href: "/wishlist" },
                ].map((link) => {
                  const isActive = pathname === link.href;
                  const isWishlist = link.href === "/wishlist";
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base py-3.5 px-4 rounded-xl font-medium transition-all flex items-center justify-between ${isActive
                        ? "bg-[#020101] text-white font-semibold shadow-sm"
                        : "text-[#0F0F0F] hover:bg-gray-100 bg-gray-50 border border-gray-100"
                        }`}
                    >
                      <span className="flex items-center gap-2.5">
                        {isWishlist && <Heart className={`w-4 h-4 ${isActive ? "text-white" : "text-[#0F0F0F]"}`} />}
                        <span>{link.name}</span>
                      </span>
                      {isWishlist && totalWishlistItems > 0 && (
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isActive ? "bg-white text-[#020101]" : "bg-[#020101] text-white"
                          }`}>
                          {totalWishlistItems}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </header>
  );
};
