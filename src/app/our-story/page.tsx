"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Heart,
  Globe,
  Feather,
  Leaf
} from "lucide-react";
import { SoapPlaceholderImage } from "@/components/SoapPlaceholderImage";

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F0F0F]">
      
      {/* HERO BANNER WITH WATERMARK */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-white to-white text-center">
        {/* Large Typography Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none overflow-hidden">
          <span className="font-serif text-[12vw] font-bold text-[#020101] tracking-tight whitespace-nowrap">
            SKINCARE BY KUMAR
          </span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold text-[#CB8C00] mb-3">
            Curated With Experience
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#0F0F0F] leading-tight">
            10+ Years of Experience. <br />
            <span className="italic font-normal">A Passion for Better Skincare</span>
          </h1>

          {/* 4 Points Bar */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-b border-[rgba(15,15,15,0.08)] py-4 text-xs font-semibold uppercase tracking-wider text-[#0F0F0F]">
            <div className="flex items-center justify-center gap-1.5 py-1">
              <Award className="w-4 h-4 text-[#CB8C00]" />
              <span>10+ Years</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 py-1">
              <Globe className="w-4 h-4 text-[#CB8C00]" />
              <span>Expert Exploration</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 py-1">
              <ShieldCheck className="w-4 h-4 text-[#CB8C00]" />
              <span>Carefully Selected</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 py-1">
              <CheckCircle2 className="w-4 h-4 text-[#CB8C00]" />
              <span>Quality Assured</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE TICKER RIBBON */}
      <div className="bg-[#020101] text-white py-3 overflow-hidden border-y border-[#020101]">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs font-semibold tracking-widest uppercase">
          <span>COLD-PROCESSED</span>
          <span>•</span>
          <span>NATURAL INGREDIENTS</span>
          <span>•</span>
          <span>HANDCRAFTED</span>
          <span>•</span>
          <span>CRUELTY-FREE</span>
          <span>•</span>
          <span>PARABEN-FREE</span>
          <span>•</span>
          <span>SULPHATE-FREE</span>
          <span>•</span>
          <span>COLD-PROCESSED</span>
          <span>•</span>
          <span>NATURAL INGREDIENTS</span>
          <span>•</span>
          <span>HANDCRAFTED</span>
          <span>•</span>
          <span>CRUELTY-FREE</span>
          <span>•</span>
          <span>PARABEN-FREE</span>
          <span>•</span>
          <span>SULPHATE-FREE</span>
        </div>
      </div>

      {/* SECTION 1: OUR STORY NARRATIVE */}
      <section className="py-20 bg-white border-b border-[rgba(15,15,15,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-[#FAFAFA]">
                <SoapPlaceholderImage alt="Artisanal Handcrafted Soap Making" className="w-full h-full" />
              </div>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-widest text-[#CB8C00] font-semibold">
                Our Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F0F0F]">
                Our Story
              </h2>

              <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
                "For more than 10 years, I have explored the world of skincare, constantly searching for products that truly stand out in quality and effectiveness. Whenever I travel, I take the opportunity to discover new products, meet skincare experts, understand ingredients, and learn from experienced professionals."
              </p>

              <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
                "This journey has helped me build knowledge, experience, and a strong understanding of what makes a skincare product worth choosing."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* STATS HIGHLIGHTS BANNER */}
      <section className="py-16 bg-[#FAF8F5] border-b border-[rgba(15,15,15,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-[rgba(15,15,15,0.1)]">
            <div className="flex flex-col gap-1 p-4">
              <span className="font-serif text-4xl font-bold text-[#0F0F0F]">10,000+</span>
              <span className="text-xs text-[#6B6B6B] uppercase tracking-wider font-semibold">
                Happy Customers
              </span>
            </div>

            <div className="flex flex-col gap-1 p-4">
              <span className="font-serif text-4xl font-bold text-[#0F0F0F]">10+</span>
              <span className="text-xs text-[#6B6B6B] uppercase tracking-wider font-semibold">
                Years of Manufacturer trust
              </span>
            </div>

            <div className="flex flex-col gap-1 p-4">
              <span className="font-serif text-4xl font-bold text-[#0F0F0F]">100%</span>
              <span className="text-xs text-[#6B6B6B] uppercase tracking-wider font-semibold">
                Natural Ingredients
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COLD PROCESS, DONE PROPERLY */}
      <section className="py-20 bg-white border-b border-[rgba(15,15,15,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F0F0F]">
                Cold Process, Done Properly
              </h2>

              <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
                The journey led me to cold-process soap — a traditional method of soap making where carefully selected oils, butters, botanicals, and other ingredients are thoughtfully combined and allowed to transform naturally over time.
              </p>

              <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
                We pride ourselves on transparency, ethical sourcing, and delivering results you can see and feel.
              </p>

              <div>
                <Link
                  href="/shop"
                  className="inline-block bg-[#020101] hover:bg-[#CB8C00] text-white text-xs font-semibold uppercase tracking-widest px-8 py-3.5 rounded-md transition-colors"
                >
                  Explore Our Collection
                </Link>
              </div>
            </div>

            {/* Right Image Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-[#FAFAFA]">
                <SoapPlaceholderImage alt="Cold Process Soap Souring & Craftsmanship" className="w-full h-full" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: QUALITY FOCUS & PROMISE */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[rgba(15,15,15,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            
            {/* Left */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest font-semibold bg-[#020101] text-white px-2.5 py-1 rounded-xs">
                  - Result-Oriented
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0F0F0F]">
                Quality Focus
              </h3>
              <p className="text-sm text-[#6B6B6B] italic leading-relaxed">
                "I carefully select the products I offer based on quality, ingredients, craftsmanship, and real-world experience."
              </p>
            </div>

            {/* Right Quote */}
            <div className="lg:col-span-6 flex flex-col gap-2 pl-0 lg:pl-8 border-l-0 lg:border-l border-[rgba(15,15,15,0.1)]">
              <p className="font-serif italic text-2xl text-[#0F0F0F] leading-snug">
                I explore the best. <br />
                I recommend the best. <br />
                I sell the best.
              </p>
            </div>

          </div>

          {/* Full-width Banner Quote */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[rgba(15,15,15,0.08)] text-center shadow-xs">
            <p className="font-serif text-xl sm:text-3xl font-semibold text-[#0F0F0F] leading-relaxed max-w-4xl mx-auto">
              "My promise is simple – quality you can trust and products chosen with a focus on visible, result-oriented skincare."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: CERTIFIED TRUST BADGES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#0F0F0F] mb-12">
            Certified
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {/* Badge 1: ISO */}
            <div className="bg-[#FAFAFA] p-6 rounded-xl border border-gray-100 flex flex-col items-center justify-center gap-2 hover:border-[#CB8C00] transition-colors">
              <Award className="w-8 h-8 text-[#CB8C00]" />
              <span className="text-xs font-bold text-[#0F0F0F]">ISO 9001:2015</span>
              <span className="text-[10px] text-[#6B6B6B]">Quality Certified</span>
            </div>

            {/* Badge 2: MSME */}
            <div className="bg-[#FAFAFA] p-6 rounded-xl border border-gray-100 flex flex-col items-center justify-center gap-2 hover:border-[#CB8C00] transition-colors">
              <ShieldCheck className="w-8 h-8 text-[#CB8C00]" />
              <span className="text-xs font-bold text-[#0F0F0F]">MSME Registered</span>
              <span className="text-[10px] text-[#6B6B6B]">Government Enterprise</span>
            </div>

            {/* Badge 3: FSSAI / Safety */}
            <div className="bg-[#FAFAFA] p-6 rounded-xl border border-gray-100 flex flex-col items-center justify-center gap-2 hover:border-[#CB8C00] transition-colors">
              <CheckCircle2 className="w-8 h-8 text-[#CB8C00]" />
              <span className="text-xs font-bold text-[#0F0F0F]">FSSAI / Safety</span>
              <span className="text-[10px] text-[#6B6B6B]">Standard Sourced</span>
            </div>

            {/* Badge 4: Vocal For Local */}
            <div className="bg-[#FAFAFA] p-6 rounded-xl border border-gray-100 flex flex-col items-center justify-center gap-2 hover:border-[#CB8C00] transition-colors">
              <Sparkles className="w-8 h-8 text-[#CB8C00]" />
              <span className="text-xs font-bold text-[#0F0F0F]">Vocal for Local</span>
              <span className="text-[10px] text-[#6B6B6B]">Indian Artisanal</span>
            </div>

            {/* Badge 5: GMP Certified */}
            <div className="bg-[#FAFAFA] p-6 rounded-xl border border-gray-100 flex flex-col items-center justify-center gap-2 hover:border-[#CB8C00] transition-colors">
              <Leaf className="w-8 h-8 text-[#CB8C00]" />
              <span className="text-xs font-bold text-[#0F0F0F]">GMP Certified</span>
              <span className="text-[10px] text-[#6B6B6B]">Good Manufacturing</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
