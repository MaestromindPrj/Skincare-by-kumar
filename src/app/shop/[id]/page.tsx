"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
  MessageCircle,
  Heart,
  Check,
  ChevronRight,
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
  const { addToWishlist, removeFromWishlist, isInWishlist, generateWhatsAppLink } = useWishlist();

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
  const recommendations = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

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
                  <ShieldCheck className="w-3.5 h-3.5 text-[#CB8C00]" />
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
                className="flex-1 bg-[#020101] hover:bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider py-4 rounded-md flex items-center justify-center gap-2 transition-colors shadow-md text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            {/* Add to Wishlist Button */}
            <button
              onClick={handleWishlistToggle}
              className={`w-full text-xs font-semibold uppercase tracking-wider py-3.5 rounded-md flex items-center justify-center gap-2 border transition-all ${
                wishlisted
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

        {/* NATURAL INGREDIENTS SECTION */}
        <section className="bg-[#FAF8F5] rounded-2xl p-8 sm:p-12 mb-20 border border-[rgba(15,15,15,0.06)]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#CB8C00] font-semibold mb-2">
              <Leaf className="w-4 h-4" />
              Pure Formulation
            </div>
            <h2 className="font-serif text-3xl font-semibold text-[#0F0F0F]">
              Natural Ingredients
            </h2>
            <p className="text-sm text-[#6B6B6B] mt-2">
              Saponified oils of Olive, Coconut, and Shea Butter, blended with natural Sandalwood extract, turmeric, and essential oils.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.keyIngredients.map((ing, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-[rgba(15,15,15,0.06)] flex flex-col items-center text-center gap-3 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-gray-100 flex items-center justify-center text-[#CB8C00]">
                  {ing.icon === "Sun" && <Sun className="w-5 h-5" />}
                  {ing.icon === "Droplet" && <Droplet className="w-5 h-5" />}
                  {ing.icon === "HeartHandshake" && <HeartHandshake className="w-5 h-5" />}
                  {ing.icon === "Leaf" && <Leaf className="w-5 h-5" />}
                  {!["Sun", "Droplet", "HeartHandshake", "Leaf"].includes(ing.icon) && (
                    <Sparkles className="w-5 h-5" />
                  )}
                </div>
                <h3 className="font-semibold text-base text-[#0F0F0F]">
                  {ing.name}
                </h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                  {ing.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* YOU MAY ALSO LIKE SECTION */}
        <section className="py-8">
          <h2 className="font-serif text-3xl font-semibold text-[#0F0F0F] text-center mb-10">
            You May Also Like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.map((rec) => (
              <ProductCard key={rec.id} product={rec} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
