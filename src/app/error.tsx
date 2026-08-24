"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected errors for monitoring in production
    console.error("Application error boundary triggered:", error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="w-20 h-20 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center mx-auto mb-6 text-rose-600">
          <AlertCircle className="w-10 h-10" />
        </div>

        {/* Title & Description */}
        <span className="text-xs uppercase font-bold tracking-widest text-rose-600 block mb-2">
          Something went wrong
        </span>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#0F0F0F] mb-3">
          An Unexpected Error Occurred
        </h1>
        <p className="text-sm text-[#666666] leading-relaxed mb-8">
          We encountered an issue while loading this page. Please try refreshing or return to the homepage.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#020101] hover:bg-[#CB8C00] text-white text-xs font-semibold uppercase tracking-widest px-6 py-3.5 rounded-md transition-colors shadow-sm cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-[#0F0F0F] text-xs font-semibold uppercase tracking-widest px-6 py-3.5 rounded-md transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
