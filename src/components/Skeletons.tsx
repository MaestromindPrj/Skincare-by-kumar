import React from "react";

// Base pulsing block component
export const Skeleton: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`skeleton-shimmer rounded-md ${className}`} />
);

// Product Card Skeleton
export const ProductCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg border border-[rgba(15,15,15,0.06)] overflow-hidden flex flex-col justify-between h-full">
    <div>
      {/* Image Skeleton */}
      <div className="w-full h-64 sm:h-72 skeleton-shimmer" />
      {/* Content Skeleton */}
      <div className="p-5 flex flex-col gap-2.5">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex items-center justify-between mt-1">
          <Skeleton className="h-5 w-1/4" />
          <Skeleton className="h-5 w-1/5" />
        </div>
      </div>
    </div>
    {/* Buttons Skeleton */}
    <div className="px-4 sm:px-5 pb-5 pt-1 flex flex-col gap-2.5">
      <Skeleton className="w-full h-11 rounded-md" />
      <Skeleton className="w-full h-11 rounded-md" />
    </div>
  </div>
);

// Product Grid Skeleton
export const ProductGridSkeleton: React.FC<{ count?: number }> = ({ count = 6 }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {Array.from({ length: count }).map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
);

// Home Page Skeleton
export const HomePageSkeleton: React.FC = () => (
  <div className="min-h-screen bg-white text-[#0F0F0F] flex flex-col">
    {/* Hero Section Skeleton */}
    <div className="relative pt-8 pb-12 lg:pt-12 lg:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[480px]">
          <div className="lg:col-span-7 flex flex-col gap-6 pt-4">
            <Skeleton className="h-12 sm:h-16 w-4/5" />
            <Skeleton className="h-6 w-3/5" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-lg py-2">
              <Skeleton className="h-20 w-full rounded-xl" />
              <Skeleton className="h-20 w-full rounded-xl" />
              <Skeleton className="h-20 w-full rounded-xl" />
              <Skeleton className="h-20 w-full rounded-xl" />
            </div>
            <div className="flex gap-4 pt-2">
              <Skeleton className="h-12 w-40 rounded-md" />
              <Skeleton className="h-12 w-48 rounded-md" />
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-5">
            <Skeleton className="w-full h-[460px] rounded-2xl" />
          </div>
        </div>
      </div>
    </div>

    {/* Ribbon Ticker */}
    <div className="py-4 bg-[#FAFAFA] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
      </div>
    </div>

    {/* Product Showcase */}
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="text-center max-w-xl mx-auto mb-10">
        <Skeleton className="h-10 w-2/3 mx-auto" />
      </div>
      <ProductGridSkeleton count={3} />
    </div>
  </div>
);

// Shop Page Skeleton
export const ShopPageSkeleton: React.FC = () => (
  <div className="min-h-screen bg-white py-12 lg:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <Skeleton className="h-10 sm:h-12 w-3/4 mx-auto" />
      </div>

      {/* Toolbar Skeleton */}
      <div className="bg-[#FAFAFA] p-4 sm:p-6 rounded-xl border border-[rgba(15,15,15,0.08)] mb-10 flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <Skeleton className="md:col-span-4 h-11" />
          <Skeleton className="md:col-span-3 h-11" />
          <Skeleton className="md:col-span-3 h-11" />
          <Skeleton className="md:col-span-2 h-11" />
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-[rgba(15,15,15,0.08)]">
          <div className="flex gap-2.5">
            <Skeleton className="h-9 w-16" />
            <Skeleton className="h-9 w-24" />
            <Skeleton className="h-9 w-24" />
            <Skeleton className="h-9 w-24" />
          </div>
          <Skeleton className="h-4 w-20" />
        </div>
      </div>

      {/* Product Grid */}
      <ProductGridSkeleton count={6} />
    </div>
  </div>
);

// Product Detail Page Skeleton
export const ProductDetailSkeleton: React.FC = () => (
  <div className="min-h-screen bg-white py-12 lg:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Skeleton */}
      <Skeleton className="h-4 w-48 mb-8" />

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Image Skeleton */}
        <div className="lg:col-span-6">
          <Skeleton className="w-full h-96 sm:h-[480px] rounded-xl" />
        </div>

        {/* Right Column: Info Skeleton */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-9 sm:h-11 w-4/5" />
          <Skeleton className="h-5 w-3/5" />
          <Skeleton className="h-8 w-1/3" />
          <Skeleton className="h-24 w-full rounded-lg" />
          <div className="flex gap-3 pt-2">
            <Skeleton className="h-12 w-2/3 rounded-md" />
            <Skeleton className="h-12 w-1/3 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Our Story Page Skeleton
export const OurStorySkeleton: React.FC = () => (
  <div className="min-h-screen bg-white py-12 lg:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
      {/* Banner */}
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
        <Skeleton className="h-24 w-56 rounded-xl" />
        <Skeleton className="h-12 w-4/5" />
        <Skeleton className="h-6 w-3/5" />
      </div>

      {/* Narrative grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
        <div className="lg:col-span-6">
          <Skeleton className="w-full h-80 rounded-2xl" />
        </div>
        <div className="lg:col-span-6 flex flex-col gap-4">
          <Skeleton className="h-9 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
    </div>
  </div>
);

// Wishlist Page Skeleton
export const WishlistSkeleton: React.FC = () => (
  <div className="min-h-screen bg-white py-12 lg:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
        <Skeleton className="h-10 sm:h-12 w-1/2 mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: Table Skeleton */}
        <div className="lg:col-span-8 bg-white border border-[rgba(15,15,15,0.08)] rounded-xl p-6 flex flex-col gap-4">
          <Skeleton className="h-20 w-full rounded-lg" />
          <Skeleton className="h-20 w-full rounded-lg" />
          <Skeleton className="h-20 w-full rounded-lg" />
        </div>

        {/* Right: Summary Box Skeleton */}
        <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(15,15,15,0.08)] flex flex-col gap-5">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-10 w-1/2" />
          <Skeleton className="h-12 w-full rounded-md" />
          <Skeleton className="h-12 w-full rounded-md" />
        </div>
      </div>
    </div>
  </div>
);

// Support Page Skeleton
export const SupportPageSkeleton: React.FC = () => (
  <div className="min-h-screen bg-white py-12 lg:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Skeleton className="h-10 w-2/3 mx-auto" />
        <Skeleton className="h-4 w-1/2 mx-auto mt-3" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 flex flex-col gap-2">
          <Skeleton className="h-12 w-full rounded-xl" />
          <Skeleton className="h-12 w-full rounded-xl" />
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
        <div className="lg:col-span-8 bg-white border border-[rgba(15,15,15,0.08)] rounded-2xl p-8">
          <Skeleton className="h-8 w-1/3 mb-6" />
          <Skeleton className="h-4 w-full mb-3" />
          <Skeleton className="h-4 w-full mb-3" />
          <Skeleton className="h-4 w-3/4 mb-6" />
        </div>
      </div>
    </div>
  </div>
);

// Generic Content Page Skeleton (Privacy, Terms, Shipping, FAQ, etc.)
export const GenericPageSkeleton: React.FC = () => (
  <div className="min-h-screen bg-white py-12 lg:py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
      <div className="text-center mb-6">
        <Skeleton className="h-10 sm:h-12 w-2/3 mx-auto" />
        <Skeleton className="h-4 w-1/3 mx-auto mt-3" />
      </div>
      <div className="p-8 border border-[rgba(15,15,15,0.08)] rounded-2xl flex flex-col gap-4">
        <Skeleton className="h-6 w-1/4 mb-2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-6 w-1/3 mt-4 mb-2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  </div>
);
