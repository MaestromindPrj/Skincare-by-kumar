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
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  const featuredProducts = [
    PRODUCTS.find((p) => p.id === "french-red-clay-face-soap") || PRODUCTS[0],
    PRODUCTS.find((p) => p.id === "teotema-rebuilding-hair-mask") || PRODUCTS[1],
    PRODUCTS.find((p) => p.id === "malibu-suncare-sunscreen-clear-spray") || PRODUCTS[2],
    PRODUCTS.find((p) => p.id === "goat-milk-pure-honey") || PRODUCTS[3],
    PRODUCTS.find((p) => p.id === "bamboo-charcoal-detox-facial-wipes") || PRODUCTS[4],
    PRODUCTS.find((p) => p.id === "malibu-suncare-lip-gloss-strawberry") || PRODUCTS[5],
  ];

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
      quote: "I regularly buy the Sandalwood Golden Glow Face Bar. The quality of the soaps and the direct communication make the entire experience feel personalized and reliable.",
      author: "Sabrina",
      role: "Verified Buyer"
    },
    {
      quote: "The Spearmint & Green Tea Cooling Bar has completely transformed my morning skin routine. My skin feels fresh, hydrated, and glowing without feeling tight.",
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
  const isTransitioning = React.useRef(false);
  const autoplayTimer = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const goToTestimonial = React.useCallback((getNext: (prev: number) => number) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setIsFading(true);
    setTimeout(() => {
      setActiveTestimonial(getNext);
      // Small delay before fading back in so the DOM updates first
      requestAnimationFrame(() => {
        setIsFading(false);
        setTimeout(() => {
          isTransitioning.current = false;
        }, 350);
      });
    }, 300);
  }, []);

  const triggerNext = React.useCallback(() => {
    goToTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, [goToTestimonial, testimonials.length]);

  const triggerPrev = React.useCallback(() => {
    goToTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, [goToTestimonial, testimonials.length]);

  // Autoplay with stable ref to avoid recreating interval on every state change
  useEffect(() => {
    autoplayTimer.current = setInterval(() => {
      triggerNext();
    }, 5000);

    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [triggerNext]);

  // Ribbon highlights rotating cycle on mobile
  const ribbonHighlights = [
    "10+ Years Of Manufacturing Trust",
    "No Complicated Chemicals",
    "Never Tested on Animals",
  ];
  const [activeRibbonIndex, setActiveRibbonIndex] = useState(0);
  const [isRibbonFading, setIsRibbonFading] = useState(false);

  useEffect(() => {
    const ribbonTimer = setInterval(() => {
      setIsRibbonFading(true);
      setTimeout(() => {
        setActiveRibbonIndex((prev) => (prev + 1) % ribbonHighlights.length);
        setIsRibbonFading(false);
      }, 150);
    }, 3500);

    return () => clearInterval(ribbonTimer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F0F0F] animate-fade-in">

      {/* HERO SECTION */}
      <section className="relative bg-white pt-0 pb-12 lg:pt-0 lg:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[480px] lg:min-h-[540px]">

            {/* Mobile Hero Image (Flush to right corner with no gap) */}
            <div className="lg:hidden relative w-[calc(100%+1rem)] sm:w-[calc(100%+1.5rem)] -mr-4 sm:-mr-6 ml-auto h-52 sm:h-64 -mt-4 mb-2 overflow-hidden">
              <Image
                src="/hero-soap.png"
                alt="Pure Ingredients. Beautifully Crafted."
                fill
                priority
                className="object-cover object-right-top scale-105 origin-top-right"
              />
            </div>

            {/* Left Content Column */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-6 pt-6 sm:pt-10 pb-4 sm:pb-8 animate-hero-slide-up z-10 text-left items-start">

              {/* Main Heading */}
              <div className="flex flex-col gap-1 text-left">
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F0F0F] leading-[1.12] text-left">
                  Pure Ingredients. <br />
                  <span>Beautifully Crafted.</span>
                </h1>
              </div>

              {/* Subtitle (Consistent Lead Paragraph Scale) */}
              <p className="text-base sm:text-lg text-[#444444] leading-relaxed max-w-xl text-left">
                Carefully selected handcrafted soaps from an established manufacturer, chosen for everyday skin care.
              </p>

              {/* 4 Circular Outline Icons: 2x2 Grid on Mobile, 4 Columns on Desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-4 sm:gap-4 w-full max-w-lg py-2">

                {/* 1. Natural Ingredients */}
                <div className="flex flex-col items-center text-center gap-1.5 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#0F0F0F]/20 flex items-center justify-center text-[#0F0F0F] bg-white group-hover:bg-[#020101] group-hover:text-white transition-all shrink-0">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-xs md:text-sm font-medium text-[#0F0F0F] whitespace-nowrap">
                    Natural Ingredients
                  </span>
                </div>

                {/* 2. Suitable For All */}
                <div className="flex flex-col items-center text-center gap-1.5 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#0F0F0F]/20 flex items-center justify-center text-[#0F0F0F] bg-white group-hover:bg-[#020101] group-hover:text-white transition-all shrink-0">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-xs md:text-sm font-medium text-[#0F0F0F] whitespace-nowrap">
                    Suitable For All
                  </span>
                </div>

                {/* 3. Hand Crafted */}
                <div className="flex flex-col items-center text-center gap-1.5 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#0F0F0F]/20 flex items-center justify-center text-[#0F0F0F] bg-white group-hover:bg-[#020101] group-hover:text-white transition-all shrink-0">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-xs md:text-sm font-medium text-[#0F0F0F] whitespace-nowrap">
                    Hand Crafted
                  </span>
                </div>

                {/* 4. Cruelty Free */}
                <div className="flex flex-col items-center text-center gap-1.5 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#0F0F0F]/20 flex items-center justify-center text-[#0F0F0F] bg-white group-hover:bg-[#020101] group-hover:text-white transition-all shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-xs md:text-sm font-medium text-[#0F0F0F] whitespace-nowrap">
                    Cruelty Free
                  </span>
                </div>

              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                <Link
                  href="/shop"
                  className="bg-[#181818] hover:bg-[#333333] active:bg-[#000000] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider min-h-[46px] px-8 py-3.5 rounded-md transition-all text-center flex items-center justify-center gap-2 group"
                >
                  <span>SEE ALL SOAPS</span>
                </Link>

                <Link
                  href="/our-story"
                  className="bg-white border border-gray-300 text-[#181818] hover:bg-[#181818] hover:text-white active:bg-gray-100 text-xs sm:text-sm font-semibold uppercase tracking-wider min-h-[46px] px-8 py-3.5 rounded-md transition-all text-center flex items-center justify-center"
                >
                  DISCOVER OUR STORY
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* Desktop Hero Image (Flush to navbar bottom with zero gap) */}
        <div className="hidden lg:block absolute right-0 -top-6 lg:-top-10 bottom-0 w-[55%] xl:w-[53%] 2xl:w-[50%] h-[calc(100%+2.5rem)] pointer-events-none z-0 overflow-hidden">
          <Image
            src="/hero-soap.png"
            alt="Pure Ingredients. Beautifully Crafted."
            fill
            priority
            className="object-cover object-right-top scale-105 origin-top-right"
          />
        </div>
      </section>

      {/* HIGHLIGHTS RIBBON STRIP - DESKTOP 3-COLUMNS & MOBILE CLEAN ANIMATED SINGLE SENTENCE */}
      <section className="bg-[#FAFAFA] border-t border-b border-gray-200 py-3.5 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop View: 3 items with dividers */}
          <div className="hidden md:grid md:grid-cols-3 md:divide-x divide-gray-200 text-center text-base sm:text-lg font-medium text-[#111111] tracking-wide">
            <div className="py-2.5 px-4 flex items-center justify-center gap-2">
              <span>10+ Years Of Manufacturing Trust</span>
            </div>
            <div className="py-2.5 px-4 flex items-center justify-center gap-2">
              <span>No Complicated Chemicals</span>
            </div>
            <div className="py-2.5 px-4 flex items-center justify-center gap-2">
              <span>Never Tested on Animals</span>
            </div>
          </div>

          {/* Mobile View: Single sentence with premium fade-and-slide animation */}
          <div className="md:hidden flex items-center justify-center py-1 min-h-[36px] overflow-hidden">
            <span
              className={`text-sm sm:text-base font-medium text-[#111111] tracking-wide text-center transition-all duration-200 ease-out transform ${isRibbonFading ? "opacity-0 -translate-y-1.5 scale-[0.98]" : "opacity-100 translate-y-0 scale-100"
                }`}
            >
              {ribbonHighlights[activeRibbonIndex]}
            </span>
          </div>
        </div>
      </section>

      {/* CREATOR & PROMISE SECTION */}
      <section className="py-20 bg-white border-b border-[rgba(15,15,15,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Full-width Heading (Normalized heading size matching other section headings) */}
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F0F0F] text-center mb-12">
            My promise is simple - <span className="italic font-normal">quality you can trust.</span>
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

              <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
                For more than 10 years, I have explored the world of skincare, constantly searching for products that truly stand out in quality and effectiveness. I carefully select the products I offer based on quality, ingredients, craftsmanship and real-world experience.
              </p>

              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#0F0F0F] pl-4 border-l-2 border-[#0F0F0F] py-1 font-semibold">
                &ldquo;I explore the best. I recommend the best. I sell the best.&rdquo;
              </blockquote>

              {/* 4 Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3">
                <div className="p-3 border-t border-[rgba(15,15,15,0.1)]">
                  <div className="text-base sm:text-lg font-bold text-[#0F0F0F]">10+ Years</div>
                  <div className="text-xs sm:text-sm text-[#6B6B6B]">Carefully Selected</div>
                </div>

                <div className="p-3 border-t border-[rgba(15,15,15,0.1)]">
                  <div className="text-base sm:text-lg font-bold text-[#0F0F0F]">Expert Sourced</div>
                  <div className="text-xs sm:text-sm text-[#6B6B6B]">Quality Assured</div>
                </div>
              </div>

              <div>
                <Link
                  href="/our-story"
                  className="inline-block bg-[#181818] hover:bg-[#CB8C00] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-3.5 rounded-md transition-colors"
                >
                  READ OUR STORY
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* A CURATED SELECTION (FEATURED PRODUCTS) */}
      <section className="py-20 bg-[#FAFAFA]">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left items-start">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#CB8C00] font-semibold">
                Curated Collection
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F0F0F] mt-1">
                A Curated Selection
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden sm:flex text-xs font-semibold uppercase tracking-wider text-[#0F0F0F] hover:text-[#CB8C00] items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
            >
              <span>View all (43 Products)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Centered View All button for mobile view only */}
          <div className="flex justify-center mt-10 sm:hidden">
            <Link
              href="/shop"
              className="text-xs font-semibold uppercase tracking-wider text-[#0F0F0F] hover:text-[#CB8C00] flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <span>View all (43 Products)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* DISCOVER YOUR EVERYDAY CARE (CATEGORIES) */}
      <section className="py-20 bg-white border-b border-[rgba(15,15,15,0.06)]">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#CB8C00] font-semibold block mb-1">
              Top Categories
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F0F0F]">
              Discover Your Everyday Care
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Category 1: Handcrafted Soaps */}
            <div className="relative group rounded-xl overflow-hidden p-6 flex flex-col justify-end min-h-[340px] shadow-md border border-gray-100 hover-lift bg-[#181818]">
              <Image
                src="/discover/face and glow.jpg"
                alt="Handcrafted Soaps"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
              <div className="relative z-10 text-white flex flex-col gap-1.5">
                <h3 className="font-serif text-xl sm:text-2xl font-bold">Handcrafted Soaps</h3>
                <p className="text-xs text-white/80 line-clamp-2">Cold-process soaps infused with wild botanicals and milk cream.</p>
                <Link
                  href="/shop?category=Handcrafted+Soaps"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white mt-3 hover:text-[#CB8C00] transition-colors"
                >
                  <span>Explore Soaps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 2: Hair Care (Teotema Italy) */}
            <div className="relative group rounded-xl overflow-hidden p-6 flex flex-col justify-end min-h-[340px] shadow-md border border-gray-100 hover-lift bg-[#25201B]">
              <Image
                src="/discover/Fresh  and clean.png"
                alt="Teotema Hair Care"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
              <div className="relative z-10 text-white flex flex-col gap-1.5">
                <h3 className="font-serif text-xl sm:text-2xl font-bold">Hair Care</h3>
                <p className="text-xs text-white/80 line-clamp-2">Italian salon shampoos, keratin masks, styling creams & ammonia-free colours.</p>
                <Link
                  href="/shop?category=Hair+Care"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white mt-3 hover:text-[#CB8C00] transition-colors"
                >
                  <span>Explore Haircare</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 3: Sun Care & SPF (Malibu UK) */}
            <div className="relative group rounded-xl overflow-hidden p-6 flex flex-col justify-end min-h-[340px] shadow-md border border-gray-100 hover-lift bg-[#1B2225]">
              <Image
                src="/discover/kids care.png"
                alt="Malibu Sun Care & SPF"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
              <div className="relative z-10 text-white flex flex-col gap-1.5">
                <h3 className="font-serif text-xl sm:text-2xl font-bold">Sun Care & SPF</h3>
                <p className="text-xs text-white/80 line-clamp-2">SPF 50 all-day clear sprays, face creams, and water-resistant protective lotions.</p>
                <Link
                  href="/shop?category=Sun+Care+%26+SPF"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white mt-3 hover:text-[#CB8C00] transition-colors"
                >
                  <span>Explore Suncare</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 4: Lip Care & Cleansing Wipes */}
            <div className="relative group rounded-xl overflow-hidden p-6 flex flex-col justify-end min-h-[340px] shadow-md border border-gray-100 hover-lift bg-[#28211E]">
              <Image
                src="/discover/face and glow.jpg"
                alt="Lip Care & Facial Wipes"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
              <div className="relative z-10 text-white flex flex-col gap-1.5">
                <h3 className="font-serif text-xl sm:text-2xl font-bold">Lips & Facial Wipes</h3>
                <p className="text-xs text-white/80 line-clamp-2">SPF 30 flavored lip balms, vegan glosses, and bamboo charcoal detox wipes.</p>
                <Link
                  href="/shop?category=Lip+Care"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white mt-3 hover:text-[#CB8C00] transition-colors"
                >
                  <span>Explore Lips & Wipes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* SOURCING & ORDERING PROCESS */}
      <section className="py-20 bg-[#F9F8F6]">
        <ScrollReveal className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mb-16 px-4">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#111111] tracking-tight leading-snug sm:whitespace-nowrap">
              Good soaps. Clear sourcing. <br className="sm:hidden" /> A simpler way to choose.
            </h2>
            <p className="text-base sm:text-lg text-[#666666] mt-4 font-normal">
              Browse · Build Your Favourites · Enquire directly on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300/70">
            <div className="py-6 md:py-0 md:pr-10 lg:pr-12 flex flex-col">
              <span className="text-2xl font-bold text-[#111111] mb-2">01</span>
              <h3 className="text-base font-semibold text-[#111111] mb-2">Established sourcing</h3>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                Carefully selected soaps sourced from an established manufacturer with more than 10 years of market experience.
              </p>
            </div>

            <div className="py-6 md:py-0 md:px-10 lg:px-12 flex flex-col">
              <span className="text-2xl font-bold text-[#111111] mb-2">02</span>
              <h3 className="text-base font-semibold text-[#111111] mb-2">Curated selection</h3>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                A focused range of soaps chosen for different everyday skincare preferences and routines.
              </p>
            </div>

            <div className="py-6 md:py-0 md:pl-10 lg:pl-12 flex flex-col">
              <span className="text-2xl font-bold text-[#111111] mb-2">03</span>
              <h3 className="text-base font-semibold text-[#111111] mb-2">Simple enquiries</h3>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                Save the soaps you like, build your wishlist, and send your selection together through WhatsApp.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/our-story"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#111111] border border-gray-300 text-xs font-semibold uppercase tracking-wider px-7 py-3 rounded-md shadow-2xs transition-colors"
            >
              <span>READ OUR STORY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* REVIEWS & VIDEO TESTIMONIALS */}
      <section className="py-20 bg-white border-b border-[rgba(15,15,15,0.06)]">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12 px-4">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F0F0F] sm:whitespace-nowrap leading-snug">
              See What Our <br className="sm:hidden" /> Customers Are Saying
            </h2>
          </div>

          {/* Featured Quote */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-12 lg:gap-16">
              {/* Previous Button (Desktop) */}
              <button
                onClick={triggerPrev}
                className="hidden sm:flex w-11 h-11 rounded-md bg-[#F4F4F5] hover:bg-[#E4E4E7] text-[#18181B] items-center justify-center shrink-0 transition-colors cursor-pointer"
                aria-label="Previous quote"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Quote Content with Smooth Fade Animation */}
              <div
                className={`flex-1 text-center min-h-[200px] sm:min-h-[180px] flex flex-col items-center justify-center transform-gpu will-change-[opacity,transform] transition-[opacity,transform] duration-300 ease-in-out ${
                  isFading
                    ? "opacity-0 translate-y-1"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <p className="font-serif italic text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#0F0F0F] leading-relaxed max-w-3xl mx-auto mb-6">
                  &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                  <span className="font-bold text-base sm:text-lg md:text-xl text-[#0F0F0F] tracking-tight">
                    {testimonials[activeTestimonial].author}
                  </span>
                  <svg className="w-5 h-5 text-[#0084FF] fill-[#0084FF] shrink-0" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>

              {/* Next Button (Desktop) */}
              <button
                onClick={triggerNext}
                className="hidden sm:flex w-11 h-11 rounded-md bg-[#F4F4F5] hover:bg-[#E4E4E7] text-[#18181B] items-center justify-center shrink-0 transition-colors cursor-pointer"
                aria-label="Next quote"
              >
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Navigation Arrows for Mobile (Centered below the text) */}
              <div className="flex sm:hidden items-center justify-center gap-4 mt-2">
                <button
                  onClick={triggerPrev}
                  className="w-11 h-11 rounded-md bg-[#F4F4F5] hover:bg-[#E4E4E7] text-[#18181B] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous quote"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={triggerNext}
                  className="w-11 h-11 rounded-md bg-[#F4F4F5] hover:bg-[#E4E4E7] text-[#18181B] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next quote"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Video Testimonials Grid */}
          <div className="mt-12">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F0F0F] mb-6 text-center">
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
        </ScrollReveal>
      </section>

      {/* FAQ SECTION ("Questions, Answered") */}
      <section id="faq" className="py-20 sm:py-28 bg-white">
        <ScrollReveal className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#111111] tracking-tight">
              Questions, Answered
            </h2>
          </div>

          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-6 sm:py-7 transition-colors">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left gap-6 cursor-pointer group py-1"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-base sm:text-lg text-[#111111] group-hover:text-neutral-700 transition-colors">
                      {faq.q}
                    </span>
                    
                    {/* Animated Plus to Minus Icon */}
                    <div
                      className={`relative w-5 h-5 flex items-center justify-center shrink-0 transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-180 text-neutral-800" : "rotate-0 text-[#111111]"
                      }`}
                      aria-hidden="true"
                    >
                      {/* Horizontal Bar */}
                      <span className="absolute w-4 h-[2px] bg-current rounded-full" />
                      {/* Vertical Bar (Rotates & fades out to transform + into -) */}
                      <span
                        className={`absolute w-[2px] h-4 bg-current rounded-full transition-all duration-300 ease-out ${
                          isOpen ? "rotate-90 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Smooth Sliding Answer */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-5xl pr-8 pb-1">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
