"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
  MessageCircle,
  Heart,
  Check,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Leaf,
  Sun,
  Droplet,
  HeartHandshake,
  Minus,
  Plus,
  Sparkles,
  Trees
} from "lucide-react";
import { getProductById, PRODUCTS } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";
import { SoapPlaceholderImage } from "@/components/SoapPlaceholderImage";
import { ProductCard } from "@/components/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const product = getProductById(id) || PRODUCTS[0];

  const [quantity, setQuantity] = useState(3); // Default 3 as per PDF design banner "Minimum 3 soaps per enquiry"
  const { addToWishlist, removeFromWishlist, isInWishlist, generateWhatsAppLink, sendAutomatedEnquiry } = useWishlist();

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollRecommendations = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const wishlisted = isInWishlist(product.id);

  const handleWishlistToggle = () => {
    if (wishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product, quantity);
    }
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  // Recommended products (excluding current)
  const recommendations = PRODUCTS.filter((p) => p.id !== product.id);

  return (
    <div className="min-h-screen bg-white text-[#0F0F0F] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#6B6B6B] mb-8">
          <Link href="/" className="hover:text-[#0F0F0F] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/shop" className="hover:text-[#0F0F0F] transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0F0F0F] font-medium truncate">
            {product.name}
          </span>
        </nav>

        {/* Top Product Section (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">

          {/* Left Column: Image & Thumbnails */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#FAFAFA] border border-[rgba(15,15,15,0.06)] shadow-sm">
              <SoapPlaceholderImage alt={product.name} src={product.image} className="w-full h-full" />
            </div>

            {/* Thumbnail Row */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((thumb) => (
                <div
                  key={thumb}
                  className="aspect-square rounded-lg overflow-hidden bg-[#FAFAFA] border border-gray-200 cursor-pointer hover:border-[#020101] transition-all"
                >
                  <SoapPlaceholderImage alt={`${product.name} view ${thumb}`} src={product.image} className="w-full h-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Details & Actions */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* Free From Badges */}
            <div className="flex flex-wrap gap-2">
              {product.freeFrom.map((badge, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium tracking-wider text-[#6B6B6B] bg-[#FAFAFA] border border-gray-200 px-3 py-1 rounded-full flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0F0F0F]" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Product Title & Pricing */}
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F0F0F] leading-tight">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-3 mt-3">
                <span className="text-2xl font-bold text-[#0F0F0F]">
                  ₹{product.price}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-[#A9A5A5] line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Specs Table */}
            <div className="border-y border-[rgba(15,15,15,0.08)] py-4 flex flex-col gap-3 text-sm">
              <div className="flex justify-between items-center py-1">
                <span className="text-[#6B6B6B] font-medium">Skin focus</span>
                <span className="text-[#0F0F0F] font-semibold text-right">
                  {product.skinFocus}
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-t border-[rgba(15,15,15,0.04)]">
                <span className="text-[#6B6B6B] font-medium">Weight</span>
                <span className="text-[#0F0F0F] font-semibold">
                  {product.weight}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-[#6B6B6B] font-semibold">
                Description
              </span>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Notice Callout Banner */}
            <div className="bg-[#FAF8F5] border border-[rgba(15,15,15,0.08)] p-3.5 rounded-md text-center text-xs font-semibold text-[#0F0F0F] tracking-wide">
              Minimum 3 soaps per enquiry
            </div>

            {/* Quantity Stepper & Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch gap-4 pt-2">
              {/* Stepper */}
              <div className="flex items-center justify-between border border-[rgba(15,15,15,0.15)] rounded-md px-4 py-3 sm:w-36 bg-white shadow-xs">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="text-[#0F0F0F] hover:text-[#CB8C00] p-1"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-bold text-base text-[#0F0F0F] px-3">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="text-[#0F0F0F] hover:text-[#CB8C00] p-1"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Enquire on WhatsApp CTA */}
              <a
                href={generateWhatsAppLink(product, quantity)}
                target="_blank"
                rel="noreferrer"
                onClick={() => sendAutomatedEnquiry(product, quantity)}
                className="flex-1 bg-[#020101] hover:bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider py-4 rounded-md flex items-center justify-center gap-2 transition-colors shadow-md text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            {/* Add to Wishlist Button */}
            <button
              onClick={handleWishlistToggle}
              className={`w-full text-xs font-semibold uppercase tracking-wider py-3.5 rounded-md flex items-center justify-center gap-2 border transition-all ${wishlisted
                  ? "bg-[#FAFAFA] border-[#020101] text-[#020101]"
                  : "bg-white border-[#0F0F0F]/20 hover:border-[#0F0F0F] text-[#0F0F0F]"
                }`}
            >
              {wishlisted ? (
                <>
                  <Check className="w-4 h-4 text-[#CB8C00]" />
                  <span>In Your Wishlist (Click to Remove)</span>
                </>
              ) : (
                <>
                  <Heart className="w-4 h-4" />
                  <span>Add to Wishlist</span>
                </>
              )}
            </button>

          </div>

        </div>

        {/* NATURAL INGREDIENTS SECTION MATCHING DESIGN TEMPLATE */}
        <section className="bg-[#F8F9FA] rounded-2xl py-14 px-6 sm:px-12 mb-20 border border-gray-100">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <Leaf className="w-6 h-6 text-[#222222]" />
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#222222] tracking-tight">
                Natural <span className="font-normal text-[#444444]">Ingredients</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-xl mx-auto font-normal">
              Saponified cold-processed oils blended with {product.keyIngredients.map((ing) => ing.name).join(", ")}, essential plant extracts, and natural skin-nourishing butter.
            </p>
          </div>

          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {product.keyIngredients.map((ing, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* White Rounded Box Container for Icon */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mx-auto mb-5 hover:shadow-md transition-shadow">
                  {ing.icon === "Sun" && <Sun className="w-10 h-10 text-[#222222] stroke-[1.75]" />}
                  {ing.icon === "Droplet" && <Droplet className="w-10 h-10 text-[#222222] stroke-[1.75]" />}
                  {ing.icon === "HeartHandshake" && <HeartHandshake className="w-10 h-10 text-[#222222] stroke-[1.75]" />}
                  {ing.icon === "Leaf" && <Leaf className="w-10 h-10 text-[#222222] stroke-[1.75]" />}
                  {!["Sun", "Droplet", "HeartHandshake", "Leaf"].includes(ing.icon) && (
                    <Sparkles className="w-10 h-10 text-[#222222] stroke-[1.75]" />
                  )}
                </div>

                {/* Ingredient Title */}
                <h3 className="font-sans font-semibold text-lg sm:text-xl text-[#111111] mb-2">
                  {ing.name}
                </h3>

                {/* Ingredient Description */}
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-xs font-normal">
                  {ing.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* YOU MAY ALSO LIKE SECTION WITH SIDE SCROLL */}
        <section className="py-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#CB8C00] font-semibold">
                Explore More
              </span>
              <h2 className="font-serif text-3xl font-semibold text-[#0F0F0F] mt-1">
                You May Also Like
              </h2>
            </div>

            {/* Scroll Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollRecommendations("left")}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-[#FAFAFA] active:scale-95 flex items-center justify-center text-[#0F0F0F] transition-all shadow-xs cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollRecommendations("right")}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-[#FAFAFA] active:scale-95 flex items-center justify-center text-[#0F0F0F] transition-all shadow-xs cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Side-Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-6 overflow-x-auto scrollbar-none pb-6 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {recommendations.map((rec) => (
              <div
                key={rec.id}
                className="w-[280px] sm:w-[320px] md:w-[calc((100%-3rem)/3)] shrink-0 snap-start"
              >
                <ProductCard product={rec} />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
