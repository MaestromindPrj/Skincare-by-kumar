"use client";

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [priceFilter, setPriceFilter] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("newest");

  const tags = ["All", "Brightness", "Hydrating", "Baby Friendly", "Tan Removal"];

  // Filter and Sort logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Search term filter
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Tag filter
      const matchesTag =
        selectedTag === "All" ||
        product.tags.includes(selectedTag as any) ||
        (selectedTag === "Brightness" && product.benefits.includes("Brightening")) ||
        (selectedTag === "Hydrating" && product.benefits.includes("Hydrating")) ||
        (selectedTag === "Baby Friendly" && product.benefits.includes("Gentle")) ||
        (selectedTag === "Tan Removal" && product.benefits.includes("Tan Removal"));

      // Price range filter
      let matchesPrice = true;
      if (priceFilter === "under-350") {
        matchesPrice = product.price <= 350;
      } else if (priceFilter === "350-400") {
        matchesPrice = product.price > 350 && product.price <= 400;
      } else if (priceFilter === "above-400") {
        matchesPrice = product.price > 400;
      }

      return matchesSearch && matchesTag && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === "price-low") {
        return a.price - b.price;
      } else if (sortBy === "price-high") {
        return b.price - a.price;
      }
      return 0; // Default newest order
    });
  }, [searchTerm, selectedTag, priceFilter, sortBy]);

  return (
    <div className="min-h-screen bg-white text-[#0F0F0F] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Heading (Fade-in animation only) */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-in px-2">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0F0F]">
            Handcrafted soaps made for you
          </h1>
          <p className="text-xs sm:text-sm text-[#6B6B6B] mt-2.5 sm:mt-3">
            Pure, artisanal cold-process soaps designed for everyday radiance, moisture, and gentle care.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-[#FAFAFA] p-3.5 sm:p-6 rounded-xl border border-[rgba(15,15,15,0.06)] mb-8 flex flex-col gap-4 sm:gap-5 shadow-xs">
          
          {/* Top Bar: Search Input & Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-5 h-5 text-[#A9A5A5] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, benefits, ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white text-base sm:text-sm text-[#0F0F0F] pl-10 pr-4 py-3 min-h-[44px] rounded-md border border-[rgba(15,15,15,0.1)] focus:outline-none focus:border-[#020101] transition-colors placeholder:text-[#A9A5A5]"
              />
            </div>

            {/* Price Range Filter */}
            <div className="md:col-span-3 relative">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#6B6B6B] hidden sm:inline" />
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="w-full bg-white text-base sm:text-sm text-[#0F0F0F] px-3.5 py-3 min-h-[44px] rounded-md border border-[rgba(15,15,15,0.1)] focus:outline-none focus:border-[#020101] cursor-pointer"
                >
                  <option value="All">Price Range: All</option>
                  <option value="under-350">Under ₹350</option>
                  <option value="350-400">₹350 - ₹400</option>
                  <option value="above-400">Above ₹400</option>
                </select>
              </div>
            </div>

            {/* Sort Selector */}
            <div className="md:col-span-3 relative">
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-[#6B6B6B] hidden sm:inline" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-white text-base sm:text-sm text-[#0F0F0F] px-3.5 py-3 min-h-[44px] rounded-md border border-[rgba(15,15,15,0.1)] focus:outline-none focus:border-[#020101] cursor-pointer"
                >
                  <option value="newest">Sort by: Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Tag Pills & Counter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-[rgba(15,15,15,0.06)]">
            
            {/* Filter Pills with Horizontal Swipe on Mobile */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1.5 sm:pb-0 scrollbar-none max-w-full">
              {tags.map((tag) => {
                const isActive = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`text-xs font-medium px-4 py-2.5 min-h-[40px] rounded-md transition-all shrink-0 active:scale-95 ${
                      isActive
                        ? "bg-[#020101] text-white shadow-sm font-semibold"
                        : "bg-white text-[#0F0F0F] border border-[rgba(15,15,15,0.1)] hover:bg-[#FAF8F5]"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>

            {/* Product Counter */}
            <span className="text-xs font-semibold text-[#6B6B6B] shrink-0">
              {filteredProducts.length} products
            </span>
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#FAFAFA] rounded-xl border border-dashed border-gray-200">
            <h3 className="font-serif text-xl font-semibold text-[#0F0F0F]">
              No soaps found matching your search.
            </h3>
            <p className="text-sm text-[#6B6B6B] mt-2">
              Try clearing filters or searching for another skin concern like 'hydration' or 'brightening'.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedTag("All");
                setPriceFilter("All");
              }}
              className="mt-5 text-xs font-semibold uppercase tracking-wider bg-[#020101] text-white px-6 py-2.5 rounded-md hover:bg-[#CB8C00] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
