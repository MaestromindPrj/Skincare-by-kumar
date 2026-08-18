"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Leaf,
  Droplets,
  FlaskConical,
  HeartHandshake,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Play,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 3);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I enquire about a soap?",
      a: "Simply reach out via our contact page or directly through our WhatsApp integration. We're happy to discuss specific ingredients or recommendations based on your skin type."
    },
    {
      q: "Can I buy directly through the website?",
      a: "Our website allows you to browse products, build your custom Wishlist, and send your curated order directly to us via WhatsApp for personalized guidance and bulk discounts."
    },
    {
      q: "Where do your soaps come from?",
      a: "All our soaps are handcrafted by an established artisanal manufacturer with over 10 years of experience in cold-process skincare, using traditional natural recipes."
    },
    {
      q: "How does the wishlist work?",
      a: "Save any soaps you like by clicking 'Add to Wishlist'. You can adjust quantities and send your complete Wishlist to us in one single WhatsApp message for quick order placement."
    },
    {
      q: "Do you offer different types of soaps?",
      a: "Yes! We offer specialized bars for Face & Glow, Everyday Freshness & Deep Cleansing, and Ultra-Gentle bars specifically formulated for kids and sensitive skin."
    },
    {
      q: "How can I know which soap is right for me?",
      a: "Each product detail page lists specific skin focus tags and natural ingredients. You can also send us a message on WhatsApp and we will gladly recommend the ideal soap for your skin."
    }
  ];

  // Testimonial carousel active index
  const testimonials = [
    {
      quote: "I regularly buy Chandaan Gold Face Soap. The quality of the soaps and the direct communication make the entire experience feel personalized and reliable.",
      author: "Sabrina",
      role: "Verified Buyer"
    },
    {
      quote: "The Zaarraa Spearmint soap has completely transformed my morning skin routine. My skin feels fresh, hydrated, and glowing without feeling tight.",
      author: "Ananya Sharma",
      role: "Verified Buyer"
    },
    {
      quote: "Finding pure, tear-free handcrafted soap for my kids was difficult until I discovered Skincare By Kumar. Truly gentle and moisturizing!",
      author: "Dr. Rajesh Gupta",
      role: "Parent & Dermatology Enthusiast"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const triggerNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setIsFading(false);
    }, 250);
  };

  const triggerPrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsFading(false);
    }, 250);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      triggerNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [activeTestimonial]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F0F0F]">

      {/* HERO SECTION */}
      <section className="relative bg-white pt-10 pb-12 lg:pt-14 lg:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[460px] lg:min-h-[520px]">

            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-center gap-6 z-10 py-2">

              {/* Main Heading */}
              <div className="flex flex-col gap-1">
                <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F0F0F] leading-[1.12]">
                  Pure Ingredients. <br />
                  <span>Beautifully Crafted.</span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#444444] leading-relaxed max-w-md">
                Carefully selected handcrafted soaps from an established manufacturer, chosen for everyday skin care.
              </p>

              {/* 4 Circular Outline Icons Row */}
              <div className="grid grid-cols-4 gap-3 max-w-md py-1">

                {/* 1. Natural Ingredients */}
                <div className="flex flex-col items-center text-center gap-2 group">
                  <div className="w-11 h-11 rounded-full border border-[#0F0F0F]/25 flex items-center justify-center text-[#0F0F0F] bg-white group-hover:bg-[#020101] group-hover:text-white transition-all">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-medium text-[#0F0F0F] leading-tight">
                    Natural <br /> Ingredients
                  </span>
                </div>

                {/* 2. Gentle On Skin */}
                <div className="flex flex-col items-center text-center gap-2 group">
                  <div className="w-11 h-11 rounded-full border border-[#0F0F0F]/25 flex items-center justify-center text-[#0F0F0F] bg-white group-hover:bg-[#020101] group-hover:text-white transition-all">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-medium text-[#0F0F0F] leading-tight">
                    Gentle On <br /> Skin
                  </span>
                </div>

                {/* 3. Eco Friendly */}
                <div className="flex flex-col items-center text-center gap-2 group">
                  <div className="w-11 h-11 rounded-full border border-[#0F0F0F]/25 flex items-center justify-center text-[#0F0F0F] bg-white group-hover:bg-[#020101] group-hover:text-white transition-all">
                    <FlaskConical className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-medium text-[#0F0F0F] leading-tight">
                    Eco <br /> Friendly
                  </span>
                </div>

                {/* 4. Handmade With Care */}
                <div className="flex flex-col items-center text-center gap-2 group">
                  <div className="w-11 h-11 rounded-full border border-[#0F0F0F]/25 flex items-center justify-center text-[#0F0F0F] bg-white group-hover:bg-[#020101] group-hover:text-white transition-all">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-medium text-[#0F0F0F] leading-tight">
                    Handmade <br /> With Care
                  </span>
                </div>

              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/shop"
                  className="bg-[#1E1E1E] hover:bg-[#25D366] text-white text-xs font-semibold uppercase tracking-widest px-8 py-3.5 rounded-md transition-all text-center flex items-center justify-center gap-2 group"
                >
                  <span>EXPLORE SOAPS</span>
                </Link>

                <Link
                  href="/our-story"
                  className="bg-white border border-[#1E1E1E] text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white text-xs font-semibold uppercase tracking-widest px-8 py-3.5 rounded-md transition-all text-center"
                >
                  DISCOVER OUR STORY
                </Link>
              </div>

            </div>

            {/* Mobile Fallback Container for Right Hero Image */}
            <div className="lg:hidden relative w-full aspect-[4/3] mt-4">
              <Image
                src="/hero-soap.png"
                alt="Pure Ingredients. Beautifully Crafted."
                fill
                priority
                className="object-cover object-right"
              />
            </div>

          </div>
        </div>

        {/* Desktop Full-Bleed Right Hero Image (Fills Top-Right and Bottom-Right Corners of Hero Section) */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 h-full pointer-events-none z-0">
          <Image
            src="/hero-soap.png"
            alt="Pure Ingredients. Beautifully Crafted."
            fill
            priority
            className="object-cover object-right"
          />
        </div>
      </section>

      {/* HIGHLIGHTS RIBBON STRIP - MATCHING MOCKUP */}
      <section className="bg-white border-t border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 text-center text-xs sm:text-sm font-semibold text-[#0F0F0F]">
            <div className="py-2 px-4 flex items-center justify-center gap-2">
              <span>10+ Years Of Manufacturer Trust</span>
            </div>
            <div className="py-2 px-4 flex items-center justify-center gap-2">
              <span>No Complicated Checkout</span>
            </div>
            <div className="py-2 px-4 flex items-center justify-center gap-2">
              <span>Direct WhatsApp Enquiry</span>
            </div>
          </div>
        </div>
      </section>

      {/* CREATOR & PROMISE SECTION */}
      <section className="py-20 bg-white border-b border-[rgba(15,15,15,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Full-width Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F0F0F] text-center mb-14">
            My promise is simple - <span className="italic">quality you can trust.</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Brand Logo — no frame */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="relative w-80 h-36 sm:w-96 sm:h-44">
                <Image
                  src="/logo.png"
                  alt="Skincare By Kumar"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Text & Promises */}
            <div className="lg:col-span-8 flex flex-col gap-6">

              <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
                For more than 10 years, I have explored the world of skincare, constantly searching for products that truly stand out in quality and effectiveness. I carefully select the products I offer based on quality, ingredients, craftsmanship and real-world experience.
              </p>

              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#0F0F0F] pl-4 border-l-2 border-[#0F0F0F] py-1">
                &ldquo;I explore the best. I recommend the best. I sell the best.&rdquo;
              </blockquote>

              {/* 4 Points Grid */}
              <div className="grid grid-cols-2 gap-4 py-3">
                <div className="p-3 border-t border-[rgba(15,15,15,0.1)]">
                  <div className="text-lg font-bold text-[#0F0F0F]">10+ Years</div>
                  <div className="text-xs text-[#6B6B6B]">Industry Experience</div>
                </div>

                <div className="p-3 border-t border-[rgba(15,15,15,0.1)]">
                  <div className="text-lg font-bold text-[#0F0F0F]">Expert Exploration</div>
                  <div className="text-xs text-[#6B6B6B]">Real Ingredients</div>
                </div>

                <div className="p-3 border-t border-[rgba(15,15,15,0.1)]">
                  <div className="text-lg font-bold text-[#0F0F0F]">Carefully Selected</div>
                  <div className="text-xs text-[#6B6B6B]">Handcrafted Soaps</div>
                </div>

                <div className="p-3 border-t border-[rgba(15,15,15,0.1)]">
                  <div className="text-lg font-bold text-[#0F0F0F]">Quality Assured</div>
                  <div className="text-xs text-[#6B6B6B]">Proven Sourcing</div>
                </div>
              </div>

              <div>
                <Link
                  href="/our-story"
                  className="inline-block bg-[#020101] hover:bg-[#CB8C00] text-white text-xs font-semibold uppercase tracking-widest px-8 py-3.5 rounded-md transition-colors"
                >
                  Read Our Story
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* A CURATED SELECTION (FEATURED PRODUCTS) */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#CB8C00] font-semibold">
                Artisanal Collection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F0F0F] mt-1">
                A Curated Selection
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-xs font-semibold uppercase tracking-wider text-[#0F0F0F] hover:text-[#CB8C00] flex items-center gap-1.5 transition-colors"
            >
              <span>View all</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* DISCOVER YOUR EVERYDAY CARE (CATEGORIES) */}
      <section className="py-20 bg-white border-b border-[rgba(15,15,15,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F0F0F]">
              Discover Your Everyday Care
            </h2>
            <p className="text-sm text-[#6B6B6B] mt-2">
              Explore specialized cold-processed soap ranges formulated for specific skin preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Category 1: Face & Glow */}
            <div className="relative group rounded-xl overflow-hidden bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 flex flex-col justify-end min-h-[360px] shadow-lg border border-gray-100">
              <div className="absolute inset-0 bg-[#E5DFC4] group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="relative z-10 text-white flex flex-col gap-2">
                <h3 className="font-serif text-2xl font-bold">Face & Glow</h3>
                <p className="text-xs text-white/80">Radiant, refreshed skin</p>
                <Link
                  href="/shop?category=Brightness"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white mt-4 hover:text-[#CB8C00] transition-colors"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Category 2: Fresh & Clean */}
            <div className="relative group rounded-xl overflow-hidden bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 flex flex-col justify-end min-h-[360px] shadow-lg border border-gray-100">
              <div className="absolute inset-0 bg-[#D4E2D4] group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="relative z-10 text-white flex flex-col gap-2">
                <h3 className="font-serif text-2xl font-bold">Fresh & Clean</h3>
                <p className="text-xs text-white/80">Everyday cleansing care</p>
                <Link
                  href="/shop?category=Hydrating"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white mt-4 hover:text-[#CB8C00] transition-colors"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Category 3: Kid's Care */}
            <div className="relative group rounded-xl overflow-hidden bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 flex flex-col justify-end min-h-[360px] shadow-lg border border-gray-100">
              <div className="absolute inset-0 bg-[#F5EBE0] group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="relative z-10 text-white flex flex-col gap-2">
                <h3 className="font-serif text-2xl font-bold">Kid's Care</h3>
                <p className="text-xs text-white/80">Gentle, nourishing care</p>
                <Link
                  href="/shop?category=Baby+Friendly"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white mt-4 hover:text-[#CB8C00] transition-colors"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SOURCING & ORDERING PROCESS */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight leading-snug">
              Good soaps. Clear sourcing. A simpler way to choose.
            </h2>
            <p className="text-sm sm:text-base text-[#666666] mt-4 font-normal">
              Browse · Build Your Favourites · Enquire directly on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300/70">
            <div className="py-6 md:py-0 md:pr-10 lg:pr-12 flex flex-col">
              <span className="text-2xl font-bold text-[#111111] mb-2">01</span>
              <h3 className="text-base font-semibold text-[#111111] mb-2">Established sourcing</h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                Carefully selected soaps sourced from an established manufacturer with more than 10 years of market experience.
              </p>
            </div>

            <div className="py-6 md:py-0 md:px-10 lg:px-12 flex flex-col">
              <span className="text-2xl font-bold text-[#111111] mb-2">02</span>
              <h3 className="text-base font-semibold text-[#111111] mb-2">Curated selection</h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                A focused range of soaps chosen for different everyday skincare preferences and routines.
              </p>
            </div>

            <div className="py-6 md:py-0 md:pl-10 lg:pl-12 flex flex-col">
              <span className="text-2xl font-bold text-[#111111] mb-2">03</span>
              <h3 className="text-base font-semibold text-[#111111] mb-2">Simple enquiries</h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                Save the soaps you like, build your wishlist, and send your selection together through WhatsApp.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/our-story"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#111111] border border-gray-300/80 text-xs font-semibold uppercase tracking-wider px-7 py-3 rounded-xs shadow-2xs transition-colors"
            >
              <span>READ OUR STORY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS & VIDEO TESTIMONIALS */}
      <section className="py-20 bg-white border-b border-[rgba(15,15,15,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F0F0F]">
              See What Our Customers Are Saying
            </h2>
          </div>

          {/* Featured Quote */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="flex items-center justify-between gap-6 sm:gap-12 lg:gap-16">
              {/* Previous Button */}
              <button
                onClick={triggerPrev}
                className="w-11 h-11 rounded-md bg-[#F4F4F5] hover:bg-[#E4E4E7] text-[#18181B] flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                aria-label="Previous quote"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Quote Content with Smooth Fade Animation */}
              <div
                className={`flex-1 text-center transition-opacity duration-300 ease-in-out min-h-[160px] flex flex-col items-center justify-center ${isFading ? "opacity-0" : "opacity-100"
                  }`}
              >
                <p className="font-serif italic text-xl sm:text-2xl md:text-3xl lg:text-[28px] text-[#0F0F0F] leading-relaxed max-w-3xl mx-auto mb-6">
                  "{testimonials[activeTestimonial].quote}"
                </p>

                <div className="flex items-center justify-center gap-2">
                  <span className="font-semibold text-lg text-[#0F0F0F]">
                    {testimonials[activeTestimonial].author}
                  </span>
                  <svg className="w-5 h-5 text-[#0084FF] fill-[#0084FF]" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={triggerNext}
                className="w-11 h-11 rounded-md bg-[#F4F4F5] hover:bg-[#E4E4E7] text-[#18181B] flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                aria-label="Next quote"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Video Testimonials Grid */}
          <div className="mt-12">
            <h3 className="font-serif text-2xl font-semibold text-[#0F0F0F] mb-6 text-center">
              Other Video Testimonials
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

              {/* Video 1 */}
              <div className="relative group rounded-xl overflow-hidden bg-slate-900 aspect-[3/4] flex flex-col justify-end p-6 text-white border border-gray-200 shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                </div>
                <div className="relative z-10">
                  <p className="font-serif italic text-base mb-1">
                    "Changed my skincare routine entirely."
                  </p>
                  <span className="text-xs font-semibold text-white/80">Maria</span>
                </div>
              </div>

              {/* Video 2 */}
              <div className="relative group rounded-xl overflow-hidden bg-slate-900 aspect-[3/4] flex flex-col justify-end p-6 text-white border border-gray-200 shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                </div>
                <div className="relative z-10">
                  <p className="font-serif italic text-base mb-1">
                    "The best natural soap I've used."
                  </p>
                  <span className="text-xs font-semibold text-white/80">David Warner</span>
                </div>
              </div>

              {/* Video 3 */}
              <div className="relative group rounded-xl overflow-hidden bg-slate-900 aspect-[3/4] flex flex-col justify-end p-6 text-white border border-gray-200 shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                </div>
                <div className="relative z-10">
                  <p className="font-serif italic text-base mb-1">
                    "Incredible quality and scent."
                  </p>
                  <span className="text-xs font-semibold text-white/80">Deesha</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION ("Questions, Answered") */}
      <section id="faq" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
              Questions, Answered
            </h2>
          </div>

          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-7 sm:py-8 transition-colors">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left gap-6 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-normal text-lg sm:text-xl md:text-2xl text-[#111111] group-hover:text-neutral-700 transition-colors">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <Minus className="w-6 h-6 text-[#111111] shrink-0" />
                    ) : (
                      <Plus className="w-6 h-6 text-[#111111] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="mt-5 text-base sm:text-lg text-[#555555] leading-relaxed max-w-5xl pr-8 transition-all">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
