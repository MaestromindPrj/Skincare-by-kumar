"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
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
  Trees,
  Maximize2,
  X
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
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { addToWishlist, removeFromWishlist, isInWishlist, generateWhatsAppLink, sendAutomatedEnquiry } = useWishlist();

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const galleryImages = [product.image, product.image, product.image].filter(Boolean) as string[];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsLightboxOpen(false);
        if (e.key === "ArrowLeft") {
          setActiveImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
        }
        if (e.key === "ArrowRight") {
          setActiveImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isLightboxOpen, galleryImages.length]);

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
    setQuantity((prev) => Math.max(3, prev + delta));
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
            {/* Main Interactive Product Image */}
            <div
              onClick={() => setIsLightboxOpen(true)}
              className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#FAFAFA] border border-[rgba(15,15,15,0.06)] shadow-sm cursor-pointer group select-none active:scale-[0.99] transition-transform"
              title="Click to view full screen"
            >
              <SoapPlaceholderImage alt={product.name} src={galleryImages[activeImageIndex]} className="w-full h-full object-contain" />

              {/* Tap for Full Screen Overlay Badge */}
              <div className="absolute bottom-3 right-3 bg-[#020101]/85 hover:bg-[#020101] text-white text-[11px] font-semibold tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md backdrop-blur-xs transition-all">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Tap for full screen</span>
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveImageIndex(idx);
                    setIsLightboxOpen(true);
                  }}
                  className={`aspect-square rounded-lg overflow-hidden bg-[#FAFAFA] border cursor-pointer transition-all ${
                    activeImageIndex === idx
                      ? "border-[#020101] ring-2 ring-[#020101]/30 shadow-xs"
                      : "border-gray-200 hover:border-[#020101]"
                  }`}
                  title={`View image ${idx + 1}`}
                >
                  <SoapPlaceholderImage alt={`${product.name} view ${idx + 1}`} src={img} className="w-full h-full object-contain" />
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

            {/* Specs & Description with Centered Divider Lines Matching UI Design */}
            <div className="border-t border-gray-200 text-sm">
              {/* Row 1: Skin focus */}
              <div className="py-3.5 flex justify-between items-center border-b border-gray-200">
                <span className="text-[#6B6B6B] font-normal">Skin focus</span>
                <span className="text-[#0F0F0F] font-semibold text-right">
                  {product.skinFocus}
                </span>
              </div>

              {/* Row 2: Weight */}
              <div className="py-3.5 flex justify-between items-center border-b border-gray-200">
                <span className="text-[#6B6B6B] font-normal">Weight</span>
                <span className="text-[#0F0F0F] font-semibold">
                  {product.weight}
                </span>
              </div>

              {/* Row 3: Description */}
              <div className="py-4 flex flex-col gap-2 border-b border-gray-200">
                <span className="text-xs uppercase tracking-wider text-[#6B6B6B] font-semibold">
                  Description
                </span>
                <p className="text-sm text-[#555555] leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Notice Callout Banner */}
            <div className="bg-[#FAF8F5] border border-gray-200/80 py-3 px-4 rounded-md text-center text-xs font-semibold text-[#0F0F0F] tracking-wide">
              Minimum 3 soaps per enquiry
            </div>

            {/* Quantity Stepper & Buttons */}
            <div className="flex flex-row items-stretch gap-3 pt-2">
              {/* Stepper with Min 3 constraint */}
              <div className="flex items-center justify-between border border-[rgba(15,15,15,0.15)] rounded-md px-2.5 sm:px-3 w-28 sm:w-36 h-12 bg-white shadow-2xs shrink-0">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 3}
                  className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-sm transition-all ${
                    quantity <= 3
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-[#0F0F0F] hover:text-[#CB8C00] hover:bg-gray-50 active:scale-90 cursor-pointer"
                  }`}
                  aria-label="Decrease quantity"
                  title={quantity <= 3 ? "Minimum quantity is 3" : "Decrease quantity"}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-bold text-sm sm:text-base text-[#0F0F0F] px-1 sm:px-2 select-none text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-sm text-[#0F0F0F] hover:text-[#CB8C00] hover:bg-gray-50 active:scale-90 cursor-pointer"
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
                className="flex-1 h-12 bg-[#020101] hover:bg-[#25D366] active:bg-[#20b858] text-white text-xs font-semibold uppercase tracking-wider rounded-md flex items-center justify-center gap-2 transition-colors shadow-sm text-center cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            {/* Add to Wishlist Button */}
            <button
              onClick={handleWishlistToggle}
              className={`w-full h-12 text-xs font-semibold uppercase tracking-wider rounded-md flex items-center justify-center gap-2 border transition-all active:scale-[0.99] cursor-pointer ${
                wishlisted
                  ? "bg-[#FAFAFA] border-[#020101] text-[#020101]"
                  : "bg-white border-[#0F0F0F]/20 hover:border-[#0F0F0F] text-[#0F0F0F]"
              }`}
            >
              {wishlisted ? (
                <>
                  <Check className="w-4 h-4 text-[#CB8C00] shrink-0" />
                  <span>Added to Wishlist</span>
                </>
              ) : (
                <>
                  <Heart className="w-4 h-4 shrink-0" />
                  <span>Add to Wishlist</span>
                </>
              )}
            </button>

          </div>

        </div>

        {/* NATURAL INGREDIENTS SECTION MATCHING DESIGN TEMPLATE */}
        <section className="bg-[#F8F9FA] rounded-2xl py-10 sm:py-14 px-4 sm:px-12 mb-16 sm:mb-20 border border-gray-100">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-[#222222]" />
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#222222] tracking-tight">
                Natural <span className="font-normal text-[#444444]">Ingredients</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-xl mx-auto font-normal">
              Saponified cold-processed oils blended with {product.keyIngredients.map((ing) => ing.name).join(", ")}, essential plant extracts, and natural skin-nourishing butter.
            </p>
          </div>

          {/* 4-Column Grid (2 Columns on Mobile with Compact Icon Sizes) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {product.keyIngredients.map((ing, index) => (
              <div key={index} className="flex flex-col items-center text-center p-2 sm:p-0">
                {/* Compact White Rounded Box Container for Icon */}
                <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl sm:rounded-2xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mx-auto mb-3 sm:mb-5 hover:shadow-md transition-shadow">
                  {ing.icon === "Sun" && <Sun className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#222222] stroke-[1.75]" />}
                  {ing.icon === "Droplet" && <Droplet className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#222222] stroke-[1.75]" />}
                  {ing.icon === "HeartHandshake" && <HeartHandshake className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#222222] stroke-[1.75]" />}
                  {ing.icon === "Leaf" && <Leaf className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#222222] stroke-[1.75]" />}
                  {!["Sun", "Droplet", "HeartHandshake", "Leaf"].includes(ing.icon) && (
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#222222] stroke-[1.75]" />
                  )}
                </div>

                {/* Ingredient Title */}
                <h3 className="font-sans font-semibold text-sm sm:text-lg md:text-xl text-[#111111] mb-1 sm:mb-2 leading-snug">
                  {ing.name}
                </h3>

                {/* Ingredient Description */}
                <p className="text-[11px] sm:text-xs md:text-sm text-[#666666] leading-relaxed max-w-xs font-normal">
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

      {/* FULL-SCREEN IMAGE LIGHTBOX MODAL */}
      {isLightboxOpen && mounted && createPortal(
        <div 
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
        >
          {/* Lightbox Header Bar */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between pt-[max(0.5rem,env(safe-area-inset-top))] pb-3 px-2 text-white border-b border-white/15"
          >
            <div className="flex flex-col">
              <h3 className="font-serif font-bold text-base sm:text-lg text-white truncate max-w-[220px] sm:max-w-md">
                {product.name}
              </h3>
              <span className="text-xs text-white/70 font-medium">
                Image {activeImageIndex + 1} of {galleryImages.length}
              </span>
            </div>

            <button
              onClick={() => setIsLightboxOpen(false)}
              className="min-w-[44px] min-h-[44px] p-2.5 rounded-full bg-white/15 hover:bg-white/30 active:bg-white/40 text-white transition-colors flex items-center justify-center cursor-pointer shadow-md"
              aria-label="Close full screen view"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Main Image Display with Next/Prev Arrow Controls */}
          <div className="relative flex-1 w-full max-w-5xl mx-auto flex items-center justify-center py-4 px-2 select-none">
            {/* Previous Button */}
            {galleryImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
                }}
                className="absolute left-1 sm:left-4 z-20 min-w-[44px] min-h-[44px] p-3 rounded-full bg-black/70 hover:bg-black/90 active:scale-95 text-white border border-white/20 transition-all flex items-center justify-center cursor-pointer backdrop-blur-xs shadow-xl"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Full Screen Image Frame (Crisp White Card Container) */}
            <div 
              className="relative w-full max-w-3xl h-[60vh] sm:h-[70vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 flex items-center justify-center border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages[activeImageIndex] ? (
                <Image
                  src={galleryImages[activeImageIndex]}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain p-2 sm:p-4 drop-shadow-md"
                />
              ) : (
                <SoapPlaceholderImage
                  alt={product.name}
                  className="w-full h-full"
                />
              )}
            </div>

            {/* Next Button */}
            {galleryImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
                }}
                className="absolute right-1 sm:right-4 z-20 min-w-[44px] min-h-[44px] p-3 rounded-full bg-black/70 hover:bg-black/90 active:scale-95 text-white border border-white/20 transition-all flex items-center justify-center cursor-pointer backdrop-blur-xs shadow-xl"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Lightbox Bottom Thumbnail Bar */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-3 flex items-center justify-center gap-3 border-t border-white/15"
          >
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white border transition-all cursor-pointer ${
                  activeImageIndex === idx
                    ? "border-white ring-4 ring-[#CB8C00] scale-105 shadow-xl"
                    : "border-white/30 opacity-65 hover:opacity-100"
                }`}
                aria-label={`View thumbnail ${idx + 1}`}
              >
                {img ? (
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-contain p-1" />
                ) : (
                  <SoapPlaceholderImage alt={`Thumbnail ${idx + 1}`} className="w-full h-full" />
                )}
              </button>
            ))}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
