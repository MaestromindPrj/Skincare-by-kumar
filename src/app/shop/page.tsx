"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, ArrowUpDown, ChevronDown, RotateCcw, Sparkles } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ScrollReveal } from "@/components/ScrollReveal";

function ShopContent() {
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedBrand, setSelectedBrand] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("newest");

  // Read URL search params on mount or param change
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const brandParam = searchParams.get("brand");
    const tagParam = searchParams.get("tag");

    if (categoryParam) {
      if (categoryParam === "Brightness" || categoryParam === "Hydrating" || categoryParam === "Baby Friendly" || categoryParam === "Baby+Friendly") {
        setSelectedTags([categoryParam.replace(/\+/g, " ")]);
      } else {
        setSelectedCategory(categoryParam);
      }
    }
    if (brandParam) {
      setSelectedBrand(brandParam);
    }
    if (tagParam) {
      setSelectedTags([tagParam]);
    }
  }, [searchParams]);

  const categories = [
    {
      label: "All Products",
      value: "All",
      image: "/categories/all-products.png",
    },
    {
      label: "Handcrafted Soaps",
      value: "Handcrafted Soaps",
      image: "/categories/handcrafted-soaps.png",
    },
    {
      label: "Hair Care",
      value: "Hair Care",
      image: "/categories/hair-care.png",
    },
    {
      label: "Sun Care & SPF",
      value: "Sun Care & SPF",
      image: "/categories/sun-care.png",
    },
    {
      label: "Lip Care",
      value: "Lip Care",
      image: "/categories/lip-care.png",
    },
    {
      label: "Facial Wipes",
      value: "Facial Wipes",
      image: "/categories/facial-wipes.png",
    },
  ];

  const brands = [
    { label: "All Brands", value: "All" },
    { label: "Skincare By Kumar", value: "Skincare By Kumar" },
    { label: "Teotema Milano", value: "Teotema" },
    { label: "Malibu Suncare", value: "Malibu Suncare" },
    { label: "KleenOWipe", value: "KleenOWipe" },
  ];

  const availableTags = useMemo(() => {
    if (selectedCategory === "Hair Care") {
      return ["All", "Shampoo", "Hair Mask", "Conditioner", "Styling", "Hair Colour", "Hydrating"];
    }
    if (selectedCategory === "Sun Care & SPF") {
      return ["All", "SPF 50", "Tan Removal", "Water Resistant"];
    }
    if (selectedCategory === "Lip Care") {
      return ["All", "SPF 30", "Hydrating", "Lip Gloss", "Lip Balm"];
    }
    if (selectedCategory === "Facial Wipes") {
      return ["All", "Tan Removal", "Brightness", "Detox"];
    }
    if (selectedCategory === "Handcrafted Soaps") {
      return ["All", "Brightness", "Hydrating", "Baby Friendly", "Tan Removal"];
    }
    return ["All", "Brightness", "Hydrating", "Baby Friendly", "Tan Removal", "SPF 50", "SPF 30"];
  }, [selectedCategory]);

  // Toggle multi-tag selection
  const toggleTag = (tag: string) => {
    if (tag === "All") {
      setSelectedTags([]);
    } else {
      setSelectedTags((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
      );
    }
  };

  // Reset all filters
  const handleReset = () => {
    setSelectedCategory("All");
    setSelectedBrand("All");
    setSearchTerm("");
    setSelectedTags([]);
    setPriceFilter("All");
    setSortBy("newest");
  };

  const hasActiveFilters =
    selectedCategory !== "All" ||
    selectedBrand !== "All" ||
    searchTerm.trim() !== "" ||
    selectedTags.length > 0 ||
    priceFilter !== "All" ||
    sortBy !== "newest";

  // Filter and Sort logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== "All") {
        if (selectedCategory === "Handcrafted Soaps") {
          if (
            product.category !== "Handcrafted Soaps" &&
            product.category !== "Face & Glow" &&
            product.category !== "Fresh & Clean" &&
            product.category !== "Kid's Care"
          ) {
            return false;
          }
        } else if (product.category !== selectedCategory) {
          return false;
        }
      }

      // Brand filter
      if (selectedBrand !== "All" && product.brand !== selectedBrand) {
        return false;
      }

      // Search term filter
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesSearch =
          product.name.toLowerCase().includes(query) ||
          product.subtitle.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          (product.brand && product.brand.toLowerCase().includes(query)) ||
          product.keyIngredients.some((i) => i.name.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Tag filter
      if (selectedTags.length > 0) {
        const checkTagMatch = (tag: string) => {
          return (
            product.tags.includes(tag as any) ||
            product.benefits.some((b) => b.toLowerCase().includes(tag.toLowerCase())) ||
            (tag === "Brightness" && product.benefits.includes("Brightening")) ||
            (tag === "Baby Friendly" && (product.category === "Kid's Care" || product.benefits.includes("Ultra Gentle"))) ||
            (tag === "Hydrating" && (product.benefits.includes("Hydrating") || product.tags.includes("Hydrating"))) ||
            (tag === "Tan Removal" && (product.benefits.includes("Tan Removal") || product.skinFocus.toLowerCase().includes("tan"))) ||
            (tag === "SPF 50" && (product.badge === "SPF 50" || product.name.includes("SPF 50") || product.subtitle.includes("SPF 50"))) ||
            (tag === "SPF 30" && (product.badge === "SPF 30" || product.name.includes("SPF 30") || product.subtitle.includes("SPF 30")))
          );
        };

        const matchesTag = selectedTags.some((tag) => checkTagMatch(tag));
        if (!matchesTag) return false;
      }

      // Price Filter
      if (priceFilter === "under-400" && product.price >= 400) return false;
      if (priceFilter === "400-1000" && (product.price < 400 || product.price > 1000)) return false;
      if (priceFilter === "1000-2500" && (product.price < 1000 || product.price > 2500)) return false;
      if (priceFilter === "above-2500" && product.price <= 2500) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      return 0; // Default order
    });
  }, [selectedCategory, selectedBrand, searchTerm, selectedTags, priceFilter, sortBy]);

  return (
    <div className="min-h-screen bg-white text-[#0F0F0F] py-10 lg:py-14 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in px-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[rgba(15,15,15,0.08)] text-[11px] font-semibold uppercase tracking-wider text-[#6B6B6B] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#CB8C00]" />
            <span>Curated Skincare & Haircare Catalog</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F0F0F]">
            Explore Our Premium Collection
          </h1>
          <p className="text-sm sm:text-base text-[#6B6B6B] mt-2.5 max-w-xl mx-auto">
            From artisanal cold-processed soaps to world-class Italian haircare, vegan sun protection, and detox facial wipes.
          </p>
        </div>

        {/* Category Selector Cards (Text with Consolidated Image Underneath) */}
        <div className="flex items-stretch justify-start md:justify-center gap-3 sm:gap-4 overflow-x-auto pb-4 pt-1 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.value);
                  setSelectedTags([]);
                }}
                className={`group relative flex flex-col items-center justify-between p-3 sm:p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer shrink-0 w-28 sm:w-36 text-center ${
                  isActive
                    ? "bg-[#020101] text-white border-transparent"
                    : "bg-white text-[#0F0F0F] border-[rgba(15,15,15,0.09)] hover:border-[#020101]"
                }`}
                title={`Filter by ${cat.label}`}
              >
                {/* Consolidated Image on Top (Transparent Container) */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 overflow-hidden flex items-center justify-center p-1 bg-transparent mb-2.5">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Category Text Below */}
                <span
                  className={`text-xs sm:text-[13px] font-bold tracking-tight leading-tight line-clamp-2 h-8 flex items-center justify-center ${
                    isActive ? "text-white" : "text-[#0F0F0F] group-hover:text-[#CB8C00]"
                  }`}
                >
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-[#FAFAFA] p-4 sm:p-6 rounded-xl border border-[rgba(15,15,15,0.08)] mb-10 flex flex-col gap-4 sm:gap-5 shadow-xs">
          
          {/* Top Bar: Search Input, Dropdowns & Reset Button */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
            
            {/* Search Input */}
            <div className="lg:col-span-4 relative">
              <Search className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search products, ingredients, brands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white text-sm sm:text-base text-[#0F0F0F] pl-10 pr-4 py-3 min-h-[44px] rounded-md border border-[rgba(15,15,15,0.12)] focus:outline-none focus:border-[#020101] transition-colors placeholder:text-[#888888]"
              />
            </div>

            {/* Brand Filter */}
            <div className="lg:col-span-3 relative">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-white text-sm sm:text-base text-[#0F0F0F] pl-4 pr-9 py-3 min-h-[44px] rounded-md border border-[rgba(15,15,15,0.12)] focus:outline-none focus:border-[#020101] appearance-none cursor-pointer"
              >
                {brands.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-[#888888] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Price Range Filter */}
            <div className="lg:col-span-2 relative">
              <SlidersHorizontal className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full bg-white text-sm sm:text-base text-[#0F0F0F] pl-10 pr-9 py-3 min-h-[44px] rounded-md border border-[rgba(15,15,15,0.12)] focus:outline-none focus:border-[#020101] appearance-none cursor-pointer"
              >
                <option value="All">Price Range</option>
                <option value="under-400">Under ₹400</option>
                <option value="400-1000">₹400 - ₹1,000</option>
                <option value="1000-2500">₹1,000 - ₹2,500</option>
                <option value="above-2500">Above ₹2,500</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#888888] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Sort Selector */}
            <div className="lg:col-span-2 relative">
              <ArrowUpDown className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white text-sm sm:text-base text-[#0F0F0F] pl-10 pr-9 py-3 min-h-[44px] rounded-md border border-[rgba(15,15,15,0.12)] focus:outline-none focus:border-[#020101] appearance-none cursor-pointer"
              >
                <option value="newest">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#888888] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Reset Button */}
            <div className="lg:col-span-1 flex items-center">
              <button
                onClick={handleReset}
                disabled={!hasActiveFilters}
                title="Reset all filters"
                className={`w-full min-h-[44px] px-3 py-3 rounded-md border transition-all flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider cursor-pointer ${
                  hasActiveFilters
                    ? "bg-[#181818] text-white border-[#181818] hover:bg-[#333333] active:scale-95 shadow-xs"
                    : "bg-white text-gray-400 border-[rgba(15,15,15,0.12)] opacity-60 cursor-not-allowed"
                }`}
              >
                <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline lg:hidden">Reset</span>
              </button>
            </div>

          </div>

          {/* Bottom Bar: Tag Pills & Counter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[rgba(15,15,15,0.08)]">
            
            {/* Filter Pills with Horizontal Swipe */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1.5 sm:pb-0 scrollbar-none max-w-full">
              {availableTags.map((tag) => {
                const isAll = tag === "All";
                const isActive = isAll ? selectedTags.length === 0 : selectedTags.includes(tag);

                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`text-xs font-medium px-3.5 py-1.5 min-h-[34px] rounded-md transition-all shrink-0 active:scale-95 flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? "bg-[#181818] text-white shadow-xs font-semibold"
                        : "bg-white text-[#0F0F0F] border border-[rgba(15,15,15,0.12)] hover:bg-[#FAF8F5]"
                    }`}
                  >
                    <span>{tag}</span>
                    {isActive && !isAll && (
                      <span className="text-white/70 hover:text-white text-xs font-bold leading-none">✕</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Product Counter */}
            <span className="text-xs sm:text-sm font-semibold text-[#6B6B6B] shrink-0">
              Showing {filteredProducts.length} of {PRODUCTS.length} products
            </span>
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#FAFAFA] rounded-xl border border-dashed border-gray-200">
            <h3 className="font-serif text-xl font-bold text-[#0F0F0F]">
              No products found matching your search.
            </h3>
            <p className="text-sm text-[#6B6B6B] mt-2">
              Try adjusting your category, brand, or price filters to see more results.
            </p>
            <button
              onClick={handleReset}
              className="mt-5 text-xs font-semibold uppercase tracking-wider bg-[#020101] text-white px-6 py-2.5 rounded-md hover:bg-[#CB8C00] transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white text-center py-20">Loading products...</div>}>
      <ShopContent />
    </Suspense>
  );
}
