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
  Maximize2,
  X
} from "lucide-react";
import { getProductById, PRODUCTS, ProductVariant } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";
import { SoapPlaceholderImage } from "@/components/SoapPlaceholderImage";
import { ProductCard } from "@/components/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const product = getProductById(id);
  if (!product) {
    notFound();
  }

  const isSoap = product.category === "Handcrafted Soaps" || 
                 product.category === "Face & Glow" || 
                 product.category === "Fresh & Clean" || 
                 product.category === "Kid's Care";

  const minQty = isSoap ? 3 : 1;
  const [quantity, setQuantity] = useState(minQty);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants?.[0]
  );
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const { addToWishlist, removeFromWishlist, isInWishlist, generateWhatsAppLink, sendAutomatedEnquiry } = useWishlist();

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const galleryImages = React.useMemo(() => {
    const list = [...(product.images || [product.image].filter(Boolean) as string[])];
    if (product.variants) {
      product.variants.forEach((v) => {
        if (v.image && !list.includes(v.image)) {
          list.push(v.image);
        }
      });
    }
    return list.length > 0 ? list : [product.image || "/soaps/FRENCH RED.png"];
  }, [product]);

  // Sync min quantity and initial variant when product changes
  useEffect(() => {
    setQuantity(minQty);
    if (product.variants && product.variants.length > 0) {
      const match = product.variants.find((v) => v.id === product.id) || product.variants[0];
      setSelectedVariant(match);
      const initialIdx = galleryImages.findIndex((img) => img === match.image);
      setActiveImageIndex(initialIdx > -1 ? initialIdx : 0);
    } else {
      setSelectedVariant(undefined);
      setActiveImageIndex(0);
    }
  }, [id, minQty, product, galleryImages]);

  const handleVariantSelect = (variant: ProductVariant) => {
    setSelectedVariant(variant);
    const foundIdx = galleryImages.findIndex((img) => img === variant.image);
    if (foundIdx > -1) {
      setActiveImageIndex(foundIdx);
    }
  };

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

  const wishlisted = isInWishlist(product.id, selectedVariant?.name);

  const handleWishlistToggle = () => {
    if (wishlisted) {
      removeFromWishlist(product.id, selectedVariant?.name);
    } else {
      addToWishlist(product, quantity, selectedVariant?.name);
    }
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(minQty, prev + delta));
  };

  // Recommended products (same category or general)
  const recommendations = PRODUCTS.filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand)).slice(0, 6);
  const fallbackRecommendations = recommendations.length >= 3 ? recommendations : PRODUCTS.filter((p) => p.id !== product.id).slice(0, 6);

  return (
    <div className="min-h-screen bg-white text-[#0F0F0F] py-10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#6B6B6B] mb-8 overflow-x-auto whitespace-nowrap scrollbar-none">
          <Link href="/" className="hover:text-[#0F0F0F] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <Link href="/shop" className="hover:text-[#0F0F0F] transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <Link href={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-[#0F0F0F] transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#0F0F0F] font-medium truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </nav>

        {/* Top Product Section (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-20">

          {/* Left Column: Image & Thumbnails */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Main Interactive Product Image */}
            <div
              onClick={() => setIsLightboxOpen(true)}
              className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#FAFAFA] border border-[rgba(15,15,15,0.06)] shadow-sm cursor-pointer group select-none active:scale-[0.99] transition-transform"
              title="Click to view full screen"
            >
              <SoapPlaceholderImage alt={product.name} src={galleryImages[activeImageIndex]} className="w-full h-full object-contain p-4" />

              {/* Badges Overlay */}
              {product.badge && (
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                  <span className="bg-[#CB8C00] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-sm">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Tap for Full Screen Overlay Badge */}
              <div className="absolute bottom-3 right-3 bg-[#020101]/85 hover:bg-[#020101] text-white text-[11px] font-semibold tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md backdrop-blur-xs transition-all">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Tap for full screen</span>
              </div>
            </div>

            {/* Thumbnail Gallery Row */}
            {galleryImages.length > 1 && (
              <div className="flex gap-2.5 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden bg-[#FAFAFA] border cursor-pointer transition-all ${
                      activeImageIndex === idx
                        ? "border-[#020101] ring-2 ring-[#020101]/30 shadow-xs"
                        : "border-gray-200 hover:border-[#020101]"
                    }`}
                    title={`View image ${idx + 1}`}
                  >
                    <SoapPlaceholderImage alt={`${product.name} view ${idx + 1}`} src={img} className="w-full h-full object-contain p-1" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details & Actions */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* Free-From Badges */}
            {product.freeFrom && product.freeFrom.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
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
            )}

            {/* Product Title & Pricing */}
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F0F0F] leading-tight">
                {product.name}
              </h1>

              {product.subtitle && (
                <p className="text-sm sm:text-base text-[#6B6B6B] font-medium mt-1.5">
                  {product.subtitle}
                </p>
              )}

              <div className="flex items-baseline gap-3 mt-3">
                <span className="text-2xl sm:text-3xl font-bold text-[#0F0F0F]">
                  ₹{selectedVariant?.price ?? product.price}
                </span>
                {(selectedVariant?.originalPrice ?? product.originalPrice) > (selectedVariant?.price ?? product.price) && (
                  <span className="text-sm sm:text-base text-[#A9A5A5] line-through">
                    ₹{selectedVariant?.originalPrice ?? product.originalPrice}
                  </span>
                )}
                {(selectedVariant?.originalPrice ?? product.originalPrice) > (selectedVariant?.price ?? product.price) && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Save ₹{(selectedVariant?.originalPrice ?? product.originalPrice) - (selectedVariant?.price ?? product.price)}
                  </span>
                )}
              </div>
            </div>

            {/* Specs & Description with Centered Divider Lines */}
            <div className="border-t border-gray-200 text-sm">
              {/* Row 1: Focus Area */}
              <div className="py-3.5 flex justify-between items-center border-b border-gray-200">
                <span className="text-[#6B6B6B] font-normal">
                  {product.category === "Hair Care" ? "Hair focus" : "Skin focus"}
                </span>
                <span className="text-[#0F0F0F] font-semibold text-right max-w-[65%]">
                  {product.skinFocus}
                </span>
              </div>

              {/* Row 2: Weight / Size */}
              <div className="py-3.5 flex justify-between items-center border-b border-gray-200">
                <span className="text-[#6B6B6B] font-normal">
                  {isSoap ? "Weight" : "Size"}
                </span>
                <span className="text-[#0F0F0F] font-semibold">
                  {selectedVariant?.weight ?? product.weight}
                </span>
              </div>

              {/* Row 3: Directions of Use (Clean & Premium) */}
              {product.directions && (
                <div className="py-3.5 flex justify-between items-start border-b border-gray-200 gap-4">
                  <span className="text-[#6B6B6B] font-normal shrink-0">Directions</span>
                  <span className="text-[#0F0F0F] font-medium text-right text-xs sm:text-sm leading-relaxed max-w-[70%]">
                    {product.directions}
                  </span>
                </div>
              )}

              {/* Row 4: Description */}
              <div className="py-4 flex flex-col gap-2 border-b border-gray-200">
                <span className="text-xs uppercase tracking-wider text-[#6B6B6B] font-semibold">
                  Description
                </span>
                <p className="text-sm text-[#555555] leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Interactive Shade Selector (for multi-shade products like Hair Colour) */}
            {product.variants && product.variants.length > 0 && (
              <div className="flex flex-col gap-3 pt-2 pb-1 border-t border-gray-100">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#0F0F0F] font-bold">
                    {product.variantLabel || "Choose Your Shade"}
                  </span>
                </div>

                {/* Shade Chips Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-72 overflow-y-auto pr-1 scrollbar-thin">
                  {product.variants.map((v) => {
                    const isSelected = selectedVariant?.id === v.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => handleVariantSelect(v)}
                        className={`flex items-center gap-2.5 sm:gap-3 px-3 py-2.5 sm:px-3.5 sm:py-3 rounded-lg text-left transition-all cursor-pointer bg-white ${
                          isSelected
                            ? "border-2 border-[#020101]"
                            : "border border-gray-200 hover:border-gray-400"
                        }`}
                        title={`Select option: ${v.name}`}
                      >
                        {/* Swatch Dot */}
                        <span
                          className="w-4 h-4 sm:w-5 sm:h-5 rounded-full shrink-0 border border-black/20"
                          style={{ backgroundColor: v.colorCode || "#222222" }}
                        />
                        <span
                          className={`text-xs sm:text-[13px] leading-snug break-words ${
                            isSelected ? "font-bold text-[#020101]" : "font-medium text-[#444444]"
                          }`}
                        >
                          {v.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Notice Callout Banner (if applicable) */}
            {isSoap && (
              <div className="bg-[#FAF8F5] border border-gray-200/80 py-3 px-4 rounded-md text-center text-xs font-semibold text-[#0F0F0F] tracking-wide">
                Artisanal Handcrafted Soaps • Minimum 3 soaps per enquiry
              </div>
            )}

            {/* Quantity Stepper & Buttons */}
            <div className="flex flex-row items-stretch gap-3 pt-2">
              {/* Stepper */}
              <div className="flex items-center justify-between border border-[rgba(15,15,15,0.15)] rounded-md px-2.5 sm:px-3 w-28 sm:w-36 h-12 bg-white shadow-2xs shrink-0">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= minQty}
                  className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-sm transition-all ${
                    quantity <= minQty
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-[#0F0F0F] hover:text-[#CB8C00] hover:bg-gray-50 active:scale-90 cursor-pointer"
                  }`}
                  aria-label="Decrease quantity"
                  title={quantity <= minQty ? `Minimum quantity is ${minQty}` : "Decrease quantity"}
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
                href={generateWhatsAppLink(product, quantity, selectedVariant?.name)}
                target="_blank"
                rel="noreferrer"
                onClick={() => sendAutomatedEnquiry(product, quantity, undefined, selectedVariant?.name)}
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
                  <span>Added to Wishlist {selectedVariant ? `(${selectedVariant.name})` : ""}</span>
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

        {/* KEY ACTIVE INGREDIENTS SECTION */}
        {product.keyIngredients && product.keyIngredients.length > 0 && (
          <section className="bg-[#F8F9FA] rounded-2xl py-10 sm:py-14 px-4 sm:px-12 mb-16 sm:mb-20 border border-gray-100">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <div className="flex items-center justify-center gap-2.5 mb-3">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-[#222222]" />
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#222222] tracking-tight">
                  Key <span className="font-normal text-[#444444]">Ingredients & Actives</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-xl mx-auto font-normal">
                Enriched with {product.keyIngredients.map((ing) => ing.name).join(", ")} for proven efficacy and gentle care.
              </p>
            </div>

            {/* 4-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {product.keyIngredients.map((ing, index) => (
                <div key={index} className="flex flex-col items-center text-center bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs hover:shadow-sm transition-shadow">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[rgba(15,15,15,0.06)] flex items-center justify-center mb-3 text-[#0F0F0F]">
                    {ing.icon === "Sun" && <Sun className="w-5 h-5" />}
                    {ing.icon === "Droplet" && <Droplet className="w-5 h-5" />}
                    {ing.icon === "HeartHandshake" && <HeartHandshake className="w-5 h-5" />}
                    {ing.icon === "Leaf" && <Leaf className="w-5 h-5" />}
                    {ing.icon === "Shield" && <ShieldCheck className="w-5 h-5" />}
                    {!["Sun", "Droplet", "HeartHandshake", "Leaf", "Shield"].includes(ing.icon) && (
                      <Sparkles className="w-5 h-5" />
                    )}
                  </div>

                  <h3 className="font-sans text-sm sm:text-base font-bold text-[#222222] mb-1">
                    {ing.name}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {ing.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* RELATED / RECOMMENDED PRODUCTS */}
        <section className="py-12 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F0F0F]">
                You May Also Like
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1">
                Explore more products from our curated skincare and haircare collection.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scrollRecommendations("left")}
                className="w-10 h-10 rounded-full border border-gray-200 hover:border-[#020101] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollRecommendations("right")}
                className="w-10 h-10 rounded-full border border-gray-200 hover:border-[#020101] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {fallbackRecommendations.slice(0, 3).map((recProduct) => (
              <ProductCard key={recProduct.id} product={recProduct} />
            ))}
          </div>
        </section>

      </div>

      {/* FULL SCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[99999] bg-black/95 flex flex-col justify-between p-4 sm:p-6 backdrop-blur-md animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Header */}
          <div
            className="flex items-center justify-between w-full max-w-5xl mx-auto pt-[max(0.5rem,env(safe-area-inset-top))] pb-3 border-b border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-white">
              <h3 className="font-serif text-base sm:text-lg font-bold truncate max-w-[240px] sm:max-w-md">
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

          {/* Center Main Image Display */}
          <div className="relative flex-1 w-full max-w-5xl mx-auto flex items-center justify-center py-4 px-2 select-none">
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
          {galleryImages.length > 1 && (
            <div 
              onClick={(e) => e.stopPropagation()}
              className="pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-3 flex items-center justify-center gap-3 border-t border-white/15 overflow-x-auto"
            >
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white border transition-all cursor-pointer shrink-0 ${
                    activeImageIndex === idx
                      ? "border-white ring-4 ring-[#CB8C00] scale-105 shadow-xl"
                      : "border-white/30 opacity-65 hover:opacity-100"
                  }`}
                  aria-label={`View thumbnail ${idx + 1}`}
                >
                  <SoapPlaceholderImage alt={`Thumbnail ${idx + 1}`} src={img} className="w-full h-full object-contain p-1" />
                </button>
              ))}
            </div>
          )}
        </div>,
        document.body
      )}
    </div>
  );
}
