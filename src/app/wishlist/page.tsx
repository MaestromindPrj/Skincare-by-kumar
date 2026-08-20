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
    <div className="min-h-screen bg-white text-[#0F0F0F] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title (Matches UI Design Exactly) */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F0F0F]">
            Your Wishlist
          </h1>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Product List Table */}
            <div className="lg:col-span-8 bg-white border border-[rgba(15,15,15,0.08)] rounded-xl overflow-hidden shadow-xs">
              
              {/* Table Header */}
              <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-4 bg-white border-b border-[rgba(15,15,15,0.08)] text-xs uppercase tracking-widest font-bold text-[#6B6B6B]">
                <div className="col-span-6">PRODUCT</div>
                <div className="col-span-3 text-center">QUANTITY</div>
                <div className="col-span-3 text-right pr-6">PRICE</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-[rgba(15,15,15,0.08)]">
                {items.map(({ product, quantity }) => {
                  const currentQty = Math.max(3, quantity);
                  const itemTotal = product.price * currentQty;
                  const itemOriginalTotal = product.originalPrice * currentQty;

                  return (
                    <div
                      key={product.id}
                      className="p-4 sm:p-6 flex flex-col sm:grid sm:grid-cols-12 gap-4 sm:gap-6 items-start sm:items-center hover:bg-[#FAF8F5]/40 transition-colors"
                    >
                      {/* Product Thumbnail & Details */}
                      <div className="sm:col-span-6 flex items-center gap-3.5 sm:gap-4 w-full">
                        <Link
                          href={`/shop/${product.id}`}
                          className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-[#FAFAFA] shrink-0 border border-gray-200 block"
                        >
                          <SoapPlaceholderImage alt={product.name} src={product.image} className="w-full h-full object-contain" />
                        </Link>

                        <div className="flex flex-col gap-1 min-w-0">
                          <Link
                            href={`/shop/${product.id}`}
                            className="font-serif font-bold text-base sm:text-lg text-[#0F0F0F] hover:text-[#CB8C00] transition-colors leading-snug truncate"
                            title={product.name}
                          >
                            {product.name}
                          </Link>
                          <span className="text-xs sm:text-sm text-[#6B6B6B] truncate font-normal">
                            {product.subtitle}
                          </span>
                        </div>
                      </div>

                      {/* Quantity Stepper & Price Row */}
                      <div className="w-full sm:w-auto sm:col-span-6 flex items-center justify-between sm:grid sm:grid-cols-6 gap-4">
                        {/* Stepper with Min 3 constraint */}
                        <div className="sm:col-span-3 flex items-center justify-start sm:justify-center">
                          <div className="flex items-center border border-[rgba(15,15,15,0.15)] rounded-md px-2 py-1.5 bg-white shadow-2xs">
                            <button
                              onClick={() => updateQuantity(product.id, Math.max(3, currentQty - 1))}
                              disabled={currentQty <= 3}
                              className={`p-1.5 min-w-[32px] min-h-[32px] flex items-center justify-center transition-all ${
                                currentQty <= 3
                                  ? "text-gray-300 cursor-not-allowed"
                                  : "text-[#0F0F0F] hover:text-[#CB8C00] active:scale-90 cursor-pointer"
                              }`}
                              aria-label="Decrease quantity (minimum 3)"
                              title={currentQty <= 3 ? "Minimum quantity is 3. Use delete button to remove." : "Decrease quantity"}
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-bold text-sm sm:text-base text-[#0F0F0F] px-3 select-none min-w-[28px] text-center">
                              {currentQty}
                            </span>
                            <button
                              onClick={() => updateQuantity(product.id, currentQty + 1)}
                              className="text-[#0F0F0F] hover:text-[#CB8C00] active:scale-90 p-1.5 min-w-[32px] min-h-[32px] flex items-center justify-center cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Price & Remove Button */}
                        <div className="sm:col-span-3 flex items-center justify-end gap-3 sm:gap-4">
                          <div className="flex items-baseline gap-1.5 sm:gap-2">
                            <span className="font-bold text-base sm:text-lg text-[#0F0F0F]">
                              ₹{itemTotal.toLocaleString("en-IN")}
                            </span>
                            {itemOriginalTotal > itemTotal && (
                              <span className="text-xs sm:text-sm text-[#A9A5A5] line-through">
                                ₹{itemOriginalTotal.toLocaleString("en-IN")}
                              </span>
                            )}
                          </div>

                          <button
                            onClick={() => removeFromWishlist(product.id)}
                            className="p-2 text-[#E11D48] hover:bg-rose-50 active:bg-rose-100 rounded-full transition-colors min-w-[38px] min-h-[38px] flex items-center justify-center cursor-pointer"
                            title="Remove item from wishlist"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Clear Wishlist Footer */}
              <div className="px-4 sm:px-6 py-4 bg-[#FAFAFA] border-t border-[rgba(15,15,15,0.08)] flex justify-between items-center">
                <Link
                  href="/shop"
                  className="text-xs font-semibold uppercase tracking-wider text-[#0F0F0F] hover:text-[#CB8C00] flex items-center gap-1.5 min-h-[40px]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Continue Shopping</span>
                </Link>

                <button
                  onClick={clearWishlist}
                  className="text-xs font-semibold text-rose-600 hover:underline min-h-[40px] px-2 flex items-center cursor-pointer"
                >
                  Clear Wishlist
                </button>
              </div>

            </div>

            {/* Right Column: Estimated Total Summary Box */}
            <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(15,15,15,0.08)] flex flex-col gap-5 sm:gap-6 shadow-xs sticky top-28">
              <span className="text-xs uppercase tracking-widest font-bold text-[#6B6B6B]">
                ESTIMATED TOTAL
              </span>

              <div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0F0F0F] tracking-tight">
                  ₹{totalEstimatedPrice.toLocaleString("en-IN")}
                </span>
                <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1.5 font-normal">
                  Final pricing may vary for bulk orders
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sendAutomatedEnquiry()}
                  className="w-full bg-[#181818] hover:bg-[#25D366] active:bg-[#20b858] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider min-h-[48px] py-3.5 rounded-md flex items-center justify-center gap-2 transition-colors shadow-sm text-center cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 shrink-0 text-[#25D366] group-hover:text-white" />
                  <span>ENQUIRE ON WHATSAPP</span>
                </a>

                <Link
                  href="/shop"
                  className="w-full bg-white border border-gray-300 text-[#0F0F0F] hover:bg-[#181818] hover:text-white active:bg-gray-100 text-xs sm:text-sm font-semibold uppercase tracking-wider min-h-[48px] py-3.5 rounded-md transition-colors text-center flex items-center justify-center"
                >
                  CONTINUE SHOPPING
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
            <h2 className="font-serif text-2xl font-bold text-[#0F0F0F]">
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
