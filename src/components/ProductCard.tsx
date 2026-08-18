"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Heart, Check } from "lucide-react";
import { Product } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";
import { SoapPlaceholderImage } from "@/components/SoapPlaceholderImage";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist, generateWhatsAppLink } = useWishlist();
  const wishlisted = isInWishlist(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (wishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product, 1);
    }
  };

  return (
    <div className="group bg-white rounded-lg border border-[rgba(15,15,15,0.06)] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Image Container with Badge */}
        <Link href={`/shop/${product.id}`} className="block relative overflow-hidden bg-[#FAFAFA]">
          {product.badge && (
            <div className="absolute top-3 left-3 z-10 bg-[#020101] text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-xs shadow-md">
              {product.badge}
            </div>
          )}
          <SoapPlaceholderImage alt={product.name} src={product.image} className="w-full h-64 sm:h-72" />
        </Link>

        {/* Card Content */}
        <div className="p-5 flex flex-col gap-2">
          <Link href={`/shop/${product.id}`} className="group-hover:text-[#CB8C00] transition-colors">
            <h3 className="font-serif text-lg font-semibold text-[#0F0F0F] leading-snug line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-[#6B6B6B] font-medium tracking-wide">
            {product.subtitle}
          </p>

          {/* Pricing & Weight Badge */}
          <div className="flex items-center justify-between gap-2 mt-1">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-[#0F0F0F]">
                ₹{product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-[#A9A5A5] line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            {product.weight && (
              <span className="text-[11px] font-semibold text-[#6B6B6B] bg-[#FAF8F5] px-2.5 py-1 rounded border border-[rgba(15,15,15,0.08)]">
                {product.weight}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="px-5 pb-5 pt-1 flex flex-col gap-2.5">
        <a
          href={generateWhatsAppLink(product, 1)}
          target="_blank"
          rel="noreferrer"
          className="w-full bg-[#020101] hover:bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider py-3 rounded-md flex items-center justify-center gap-2 transition-colors shadow-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Enquire on WhatsApp</span>
        </a>

        <button
          onClick={handleWishlistToggle}
          className={`w-full text-xs font-semibold uppercase tracking-wider py-2.5 rounded-md flex items-center justify-center gap-2 border transition-all ${
            wishlisted
              ? "bg-[#FAFAFA] border-[#020101] text-[#020101]"
              : "bg-white border-[#0F0F0F]/10 hover:border-[#0F0F0F] text-[#0F0F0F]"
          }`}
        >
          {wishlisted ? (
            <>
              <Check className="w-4 h-4 text-[#CB8C00]" />
              <span>Added to Wishlist</span>
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
  );
};
