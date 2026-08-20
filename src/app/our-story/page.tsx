"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  Compass,
  FileText,
  CheckCircle2,
  Award,
  ShieldCheck,
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

      {/* HERO BANNER MATCHING DESIGN SCREENSHOT */}
      <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 lg:pt-40 lg:pb-36 overflow-hidden bg-white text-center">
        {/* Large Faint Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.15] pointer-events-none select-none overflow-hidden px-4">
          <div className="relative w-full max-w-6xl h-80 sm:h-[480px] md:h-[540px]">
            <Image
              src="/skincarebykumar logo.png"
              alt="Skincare By Kumar Logo Watermark"
              fill
              priority
              className="object-contain object-center"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#111111] leading-[1.15] text-center w-full">
            10+ Years of Experience.
          </h1>
          <p className="font-serif text-lg sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#333333] tracking-tight mt-3 sm:mt-4 text-center w-full">
            A Passion for Better Skincare
          </p>

          {/* 4 Points Horizontal Row */}
          <div className="mt-10 sm:mt-16 md:mt-20 flex flex-wrap items-center justify-center gap-4 sm:gap-10 lg:gap-14 text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-[#222222] text-center w-full">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#222222] shrink-0" />
              <span>10+ Years</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#222222] shrink-0" />
              <span>Expert Exploration</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#222222] shrink-0" />
              <span>Carefully Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#222222] shrink-0" />
              <span>Quality Assured</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHITE MARQUEE TICKER RIBBON */}
      <div className="bg-white text-[#333333] py-3.5 mt-0 overflow-hidden border-y border-gray-200 select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {/* Track 1 (Repeated for wide screens) */}
          <div className="flex items-center shrink-0 gap-8 pr-8 text-[11px] sm:text-xs font-medium tracking-widest uppercase">
            <span>COLD-PROCESSED</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>NATURAL INGREDIENTS</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>HANDCRAFTED</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>CRUELTY-FREE</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>PARABEN-FREE</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>SULPHATE-FREE</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>COLD-PROCESSED</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>NATURAL INGREDIENTS</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>HANDCRAFTED</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>CRUELTY-FREE</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>PARABEN-FREE</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>SULPHATE-FREE</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>COLD-PROCESSED</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>NATURAL INGREDIENTS</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>HANDCRAFTED</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>CRUELTY-FREE</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>PARABEN-FREE</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>SULPHATE-FREE</span>
            <span className="text-gray-400 font-bold">•</span>
          </div>

          {/* Track 2 (Identical Duplicate for Seamless Infinite Loop) */}
          <div className="flex items-center shrink-0 gap-8 pr-8 text-[11px] sm:text-xs font-medium tracking-widest uppercase">
            <span>COLD-PROCESSED</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>NATURAL INGREDIENTS</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>HANDCRAFTED</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>CRUELTY-FREE</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>PARABEN-FREE</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>SULPHATE-FREE</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>COLD-PROCESSED</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>NATURAL INGREDIENTS</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>HANDCRAFTED</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>CRUELTY-FREE</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>PARABEN-FREE</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>SULPHATE-FREE</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>COLD-PROCESSED</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>NATURAL INGREDIENTS</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>HANDCRAFTED</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>CRUELTY-FREE</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>PARABEN-FREE</span>
            <span className="text-gray-400 font-bold">•</span>
            <span>SULPHATE-FREE</span>
            <span className="text-gray-400 font-bold">•</span>
          </div>
        </div>
      </div>

      {/* SECTION 1: OUR STORY NARRATIVE */}
      <section className="py-20 bg-white border-b border-[rgba(15,15,15,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-[#FAFAFA]">
                <Image
                  src="/Three soaps-1.png"
                  alt="Handcrafted Artisanal Soaps Showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-6 flex flex-col gap-6">

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
                <Image
                  src="/three blue soaps - 2.png"
                  alt="Cold Process Natural Soaps Showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: QUALITY FOCUS & PROMISE */}
      <section className="py-20 sm:py-28 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-20 sm:mb-24">

            {/* Left Column */}
            <div className="md:col-span-6 flex flex-col justify-between items-start gap-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] mb-3">
                  Quality Focus
                </h3>
                <p className="font-serif text-xs sm:text-sm text-[#777777] leading-relaxed max-w-md">
                  'I carefully select the products I offer based on quality, ingredients, craftsmanship, and real-world experience.'
                </p>
              </div>

              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#222222] mt-4">
                -RESULT-ORIENTED
              </span>
            </div>

            {/* Right Column with Vertical Line & Fading Text */}
            <div className="md:col-span-6 border-l-2 border-[#111111] pl-6 sm:pl-8 flex flex-col gap-2 py-1">
              <p className="font-serif text-xl sm:text-2xl text-[#222222] leading-snug">
                I explore the best.
              </p>
              <p className="font-serif text-xl sm:text-2xl text-[#666666] leading-snug">
                I recommend the best.
              </p>
              <p className="font-serif text-xl sm:text-2xl text-[#aaaaaa] leading-snug">
                I sell the best.
              </p>
            </div>

          </div>

          {/* Full-width Quote Below */}
          <div className="text-center max-w-4xl mx-auto pt-4">
            <p className="font-serif text-xl sm:text-3xl font-semibold text-[#111111] leading-relaxed">
              "My promise is simple – quality you can trust and products chosen with a focus on visible, result-oriented skincare."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: CERTIFIED TRUST BADGES */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#111111] mb-12 sm:mb-16">
            Certified
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center justify-items-center gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl mx-auto">
            {/* Badge 1: ISO 9001 (Smaller) */}
            <div className="w-full h-36 sm:h-44 md:h-48 flex items-center justify-center p-1 transition-transform duration-300 hover:scale-105">
              <Image
                src="/Certifies/certified is00 9001.png"
                alt="ISO 9001 Certified"
                width={200}
                height={200}
                className="max-h-24 sm:max-h-30 md:max-h-34 w-auto max-w-full object-contain block"
              />
            </div>

            {/* Badge 2: MSME (Bigger) */}
            <div className="w-full h-44 sm:h-52 md:h-60 flex items-center justify-center p-1 transition-transform duration-300 hover:scale-105">
              <Image
                src="/Certifies/Msme.png"
                alt="MSME Certified"
                width={400}
                height={400}
                className="max-h-40 sm:max-h-48 md:max-h-56 w-auto max-w-full object-contain block"
              />
            </div>

            {/* Badge 3: FSSAI (Bigger) */}
            <div className="w-full h-44 sm:h-52 md:h-60 flex items-center justify-center p-1 transition-transform duration-300 hover:scale-105">
              <Image
                src="/Certifies/Fssai.png"
                alt="FSSAI Certified"
                width={400}
                height={250}
                className="max-h-36 sm:max-h-44 md:max-h-52 w-auto max-w-full object-contain block"
              />
            </div>

            {/* Badge 4: Vocal For Local (Bigger) */}
            <div className="w-full h-44 sm:h-52 md:h-60 flex items-center justify-center p-1 transition-transform duration-300 hover:scale-105">
              <Image
                src="/Certifies/VocalOrLocal.png"
                alt="Vocal For Local"
                width={400}
                height={400}
                className="max-h-40 sm:max-h-48 md:max-h-56 w-auto max-w-full object-contain block"
              />
            </div>

            {/* Badge 5: GMP Certified (Smaller) */}
            <div className="w-full h-36 sm:h-44 md:h-48 flex items-center justify-center p-1 transition-transform duration-300 hover:scale-105">
              <Image
                src="/Certifies/gmp-certified.png"
                alt="GMP Certified"
                width={200}
                height={200}
                className="max-h-24 sm:max-h-30 md:max-h-34 w-auto max-w-full object-contain block"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
