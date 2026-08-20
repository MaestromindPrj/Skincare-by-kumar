"use client";

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, ArrowUpDown, ChevronDown } from "lucide-react";
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
        (selectedTag === "Baby Friendly" && (product.category === "Kid's Care" || product.benefits.includes("Ultra Gentle"))) ||
        (selectedTag === "Hydrating" && product.benefits.includes("Hydrating")) ||
        (selectedTag === "Tan Removal" && (product.benefits.includes("Tan Removal") || product.skinFocus.toLowerCase().includes("tan")));

      // Price Filter
      const matchesPrice =
        priceFilter === "All" ||
        (priceFilter === "under-350" && product.price < 350) ||
        (priceFilter === "350-400" && product.price >= 350 && product.price <= 400) ||
        (priceFilter === "above-400" && product.price > 400);

      return matchesSearch && matchesTag && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === "price-low") {
        return a.price - b.price;
      }
      if (sortBy === "price-high") {
        return b.price - a.price;
      }
      return 0; // Default newest order
    });
  }, [searchTerm, selectedTag, priceFilter, sortBy]);

  return (
    <div className="min-h-screen bg-white text-[#0F0F0F] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Heading (Matches UI Design Image 3 Exactly) */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 animate-fade-in px-2">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F0F0F]">
            Handcrafted soaps made for you
          </h1>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-[#FAFAFA] p-4 sm:p-6 rounded-xl border border-[rgba(15,15,15,0.08)] mb-10 flex flex-col gap-4 sm:gap-5 shadow-xs">
          
          {/* Top Bar: Search Input & Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by name, benefits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white text-sm sm:text-base text-[#0F0F0F] pl-10 pr-4 py-3 min-h-[44px] rounded-md border border-[rgba(15,15,15,0.12)] focus:outline-none focus:border-[#020101] transition-colors placeholder:text-[#888888]"
              />
            </div>

            {/* Price Range Filter */}
            <div className="md:col-span-3 relative">
              <SlidersHorizontal className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full bg-white text-sm sm:text-base text-[#0F0F0F] pl-10 pr-9 py-3 min-h-[44px] rounded-md border border-[rgba(15,15,15,0.12)] focus:outline-none focus:border-[#020101] appearance-none cursor-pointer"
              >
                <option value="All">Price Range</option>
                <option value="under-350">Under ₹350</option>
                <option value="350-400">₹350 - ₹400</option>
                <option value="above-400">Above ₹400</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#888888] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Sort Selector */}
            <div className="md:col-span-3 relative">
              <ArrowUpDown className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white text-sm sm:text-base text-[#0F0F0F] pl-10 pr-9 py-3 min-h-[44px] rounded-md border border-[rgba(15,15,15,0.12)] focus:outline-none focus:border-[#020101] appearance-none cursor-pointer"
              >
                <option value="newest">Sort by: Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#888888] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

          </div>

          {/* Bottom Bar: Tag Pills & Counter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[rgba(15,15,15,0.08)]">
            
            {/* Filter Pills with Horizontal Swipe on Mobile */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-1.5 sm:pb-0 scrollbar-none max-w-full">
              {tags.map((tag) => {
                const isActive = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(isActive && tag !== "All" ? "All" : tag)}
                    className={`text-xs sm:text-sm font-medium px-4 py-2 min-h-[38px] rounded-md transition-all shrink-0 active:scale-95 flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? "bg-[#181818] text-white shadow-xs font-semibold"
                        : "bg-white text-[#0F0F0F] border border-[rgba(15,15,15,0.12)] hover:bg-[#FAF8F5]"
                    }`}
                  >
                    <span>{tag}</span>
                    {isActive && tag !== "All" && (
                      <span className="text-white/70 hover:text-white text-xs font-bold leading-none">✕</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Product Counter */}
            <span className="text-xs sm:text-sm font-medium text-[#6B6B6B] shrink-0">
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
            <h3 className="font-serif text-xl font-bold text-[#0F0F0F]">
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
              className="mt-5 text-xs font-semibold uppercase tracking-wider bg-[#020101] text-white px-6 py-2.5 rounded-md hover:bg-[#CB8C00] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
