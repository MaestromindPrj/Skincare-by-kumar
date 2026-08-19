"use client";

import React from "react";
import Link from "next/link";
import { Trash2, Minus, Plus, MessageCircle, ShoppingBag, ArrowLeft } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { SoapPlaceholderImage } from "@/components/SoapPlaceholderImage";

export default function WishlistPage() {
  const {
    items,
    updateQuantity,
    removeFromWishlist,
    clearWishlist,
    totalEstimatedPrice,
    generateWhatsAppLink,
    sendAutomatedEnquiry,
  } = useWishlist();

  return (
    <div className="min-h-screen bg-white text-[#0F0F0F] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#0F0F0F]">
            Your Wishlist
          </h1>
          <p className="text-sm text-[#6B6B6B] mt-2">
            Review your selected handcrafted soaps, adjust quantities, and send directly via WhatsApp.
          </p>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Product List Table */}
            <div className="lg:col-span-8 bg-white border border-[rgba(15,15,15,0.06)] rounded-xl overflow-hidden shadow-xs">
              
              {/* Table Header */}
              <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-4 bg-[#FAFAFA] border-b border-[rgba(15,15,15,0.06)] text-xs uppercase tracking-widest font-semibold text-[#6B6B6B]">
                <div className="col-span-6">Product</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-3 text-right">Price</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-[rgba(15,15,15,0.06)]">
                {items.map(({ product, quantity }) => {
                  const itemTotal = product.price * quantity;
                  const itemOriginalTotal = product.originalPrice * quantity;

                  return (
                    <div
                      key={product.id}
                      className="p-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center hover:bg-[#FAF8F5]/50 transition-colors"
                    >
                      {/* Product Thumbnail & Details */}
                      <div className="sm:col-span-6 flex items-center gap-4">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-[#FAFAFA] shrink-0 border border-gray-200">
                          <SoapPlaceholderImage alt={product.name} src={product.image} className="w-full h-full" />
                        </div>

                        <div className="flex flex-col gap-1">
                          <Link
                            href={`/shop/${product.id}`}
                            className="font-serif font-semibold text-base text-[#0F0F0F] hover:text-[#CB8C00] transition-colors leading-snug"
                          >
                            {product.name}
                          </Link>
                          <span className="text-xs text-[#6B6B6B]">
                            {product.subtitle}
                          </span>
                        </div>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="sm:col-span-3 flex items-center justify-center">
                        <div className="flex items-center border border-[rgba(15,15,15,0.15)] rounded-md px-3 py-1.5 bg-white">
                          <button
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            className="text-[#0F0F0F] hover:text-[#CB8C00] p-1"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-bold text-sm text-[#0F0F0F] px-3">
                            {quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            className="text-[#0F0F0F] hover:text-[#CB8C00] p-1"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Price & Remove Button */}
                      <div className="sm:col-span-3 flex items-center justify-between sm:justify-end gap-4">
                        <div className="flex flex-col items-end">
                          <span className="font-bold text-base text-[#0F0F0F]">
                            ₹{itemTotal.toLocaleString("en-IN")}
                          </span>
                          {itemOriginalTotal > itemTotal && (
                            <span className="text-xs text-[#A9A5A5] line-through">
                              ₹{itemOriginalTotal.toLocaleString("en-IN")}
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => removeFromWishlist(product.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Clear Wishlist Footer */}
              <div className="px-6 py-4 bg-[#FAFAFA] border-t border-[rgba(15,15,15,0.06)] flex justify-between items-center">
                <Link
                  href="/shop"
                  className="text-xs font-semibold uppercase tracking-wider text-[#0F0F0F] hover:text-[#CB8C00] flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Continue Shopping</span>
                </Link>

                <button
                  onClick={clearWishlist}
                  className="text-xs font-semibold text-red-600 hover:underline"
                >
                  Clear Wishlist
                </button>
              </div>

            </div>

            {/* Right Column: Estimated Total Summary Box */}
            <div className="lg:col-span-4 bg-[#FAFAFA] p-8 rounded-xl border border-[rgba(15,15,15,0.06)] flex flex-col gap-6 shadow-xs sticky top-28">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#6B6B6B]">
                Estimated Total
              </span>

              <div>
                <span className="font-serif text-4xl font-bold text-[#0F0F0F]">
                  ₹{totalEstimatedPrice.toLocaleString("en-IN")}
                </span>
                <p className="text-xs text-[#6B6B6B] mt-1">
                  Final pricing may vary for bulk orders
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sendAutomatedEnquiry()}
                  className="w-full bg-[#020101] hover:bg-[#25D366] text-white text-xs font-semibold uppercase tracking-widest py-4 rounded-md flex items-center justify-center gap-2 transition-colors shadow-md text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire On WhatsApp</span>
                </a>

                <Link
                  href="/shop"
                  className="w-full bg-white border border-[rgba(15,15,15,0.15)] text-[#0F0F0F] hover:bg-[#020101] hover:text-white text-xs font-semibold uppercase tracking-widest py-3.5 rounded-md transition-colors text-center"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>

          </div>
        ) : (
          /* Empty Wishlist State */
          <div className="text-center py-20 bg-[#FAFAFA] rounded-2xl border border-dashed border-gray-200 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center mx-auto mb-4 text-[#CB8C00]">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-2xl font-semibold text-[#0F0F0F]">
              Your Wishlist is Empty
            </h2>
            <p className="text-sm text-[#6B6B6B] mt-2 mb-6">
              You haven't saved any handcrafted soaps yet. Browse our collection and save your favourites!
            </p>
            <Link
              href="/shop"
              className="inline-block bg-[#020101] hover:bg-[#CB8C00] text-white text-xs font-semibold uppercase tracking-widest px-8 py-3.5 rounded-md transition-colors"
            >
              Explore Our Collection
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
