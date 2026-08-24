import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, ShoppingBag } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <div className="max-w-md w-full text-center">
        {/* Decorative Icon */}
        <div className="w-20 h-20 rounded-full bg-[#FAF8F5] border border-[rgba(15,15,15,0.08)] flex items-center justify-center mx-auto mb-6 text-[#CB8C00]">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        {/* Status & Title */}
        <span className="text-xs uppercase font-bold tracking-widest text-[#888888] block mb-2">
          404 &bull; Page Not Found
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0F0F0F] mb-3">
          Lost in the Ritual?
        </h1>
        <p className="text-sm text-[#666666] leading-relaxed mb-8">
          The page or handcrafted product you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#020101] hover:bg-[#CB8C00] text-white text-xs font-semibold uppercase tracking-widest px-6 py-3.5 rounded-md transition-colors shadow-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Explore Collection</span>
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-[#0F0F0F] text-xs font-semibold uppercase tracking-widest px-6 py-3.5 rounded-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
