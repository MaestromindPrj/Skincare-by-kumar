import React from "react";
import Link from "next/link";
import { FileText, Shield, Sparkles, ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
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
            Legal &amp; Store Terms
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F0F0F]">
            Terms of Service
          </h1>
          <p className="text-sm sm:text-base text-[#555555] mt-3 leading-relaxed">
            Welcome to Skincare By Kumar. By browsing our catalog, using our website, or purchasing our products, you agree to the following terms and guidelines.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm sm:text-base text-[#333333] leading-relaxed">

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] flex items-center gap-2.5">
              
              1. Handcrafted Artisanal Nature
            </h2>
            <p className="text-[#555555]">
              All soaps featured on Skincare By Kumar are handcrafted in small batches using traditional cold-processing techniques. While ingredient ratios and active benefits remain strictly consistent, slight variations in natural color, botanical swirls, and bar cuts are natural and celebrate the authentic handmade process.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] flex items-center gap-2.5">
              2. Skincare Advisory &amp; Patch Testing
            </h2>
            <p className="text-[#555555]">
              Our soaps are crafted with gentle botanical oils, natural clays, and nourishing ingredients. However, individual skin types and allergies vary. We strongly recommend performing a small patch test on the inner wrist before regular use. If irritation occurs, discontinue use immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] flex items-center gap-2.5">
              3. Pricing, Orders &amp; Availability
            </h2>
            <p className="text-[#555555]">
              All product prices are quoted in Indian National Rupees (INR). We reserve the right to revise product listings, descriptions, and pricing without prior notice. Orders are confirmed subject to curing inventory and batch availability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
              4. Intellectual Property
            </h2>
            <p className="text-[#555555]">
              All brand marks, logos, photography, typography, and website content are the intellectual property of Skincare By Kumar. Unauthorized reproduction or commercial re-use is strictly prohibited.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
