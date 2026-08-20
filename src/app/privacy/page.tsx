import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, EyeOff, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F0F0F] py-12 sm:py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#666666] hover:text-[#0F0F0F] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Heading */}
        <div className="border-b border-gray-200 pb-8 mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#777777] block mb-2">
            Data &amp; Security
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F0F0F]">
            Privacy Statement
          </h1>
          <p className="text-sm sm:text-base text-[#555555] mt-3 leading-relaxed">
            Your trust and privacy are paramount to us. Learn how we collect, handle, and safeguard your personal information.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm sm:text-base text-[#333333] leading-relaxed">

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-[#111111]" />
              1. Information We Collect
            </h2>
            <p className="text-[#555555]">
              When you browse our products, save items to your Wishlist, or enquire via WhatsApp, we only collect essential contact details (such as your name, delivery address, and phone number) necessary to arrange parcel delivery and provide order updates.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] flex items-center gap-2.5">
              <EyeOff className="w-5 h-5 text-[#111111]" />
              2. How Your Data Is Used
            </h2>
            <p className="text-[#555555]">
              Your personal information is used exclusively for order fulfillment, courier coordination, customer support, and answering product queries. <strong>We do not sell, rent, or trade your personal information</strong> with external marketing agencies or third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#111111]" />
              3. Data Security &amp; Retention
            </h2>
            <p className="text-[#555555]">
              We implement industry-standard administrative and digital safeguards to keep your contact data secure. You may request to view, update, or remove your contact information from our records at any time by messaging our support line.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
