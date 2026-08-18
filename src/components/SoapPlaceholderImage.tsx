"use client";

import React from "react";
import Image from "next/image";

interface SoapPlaceholderImageProps {
  alt: string;
  className?: string;
  badge?: string;
  src?: string;
}

export const SoapPlaceholderImage: React.FC<SoapPlaceholderImageProps> = ({
  alt,
  className = "w-full h-64",
  src,
}) => {
  if (src) {
    return (
      <div className={`relative overflow-hidden bg-[#F7F5F0] rounded-sm ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    );
  }

  // Stylish, organic luxury soap design placeholder frame matching cold-process artisanal soaps
  return (
    <div
      className={`relative overflow-hidden rounded-sm bg-gradient-to-br from-[#F5F2EC] via-[#EFEAE1] to-[#E5DFC4] flex flex-col items-center justify-center p-6 border border-[rgba(15,15,15,0.06)] group shadow-inner ${className}`}
    >
      {/* Organic texture patterns & soap block simulation */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#020101_1px,transparent_1px)] [background-size:12px_12px]" />
      
      {/* Luxury Soap Bar 3D Shadow Box simulation */}
      <div className="relative w-3/4 h-3/4 bg-white/70 backdrop-blur-sm rounded-md shadow-lg border border-white/80 flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 group-hover:scale-105">
        <div className="w-10 h-10 rounded-full bg-[#020101]/5 flex items-center justify-center mb-2">
          <svg
            className="w-5 h-5 text-[#020101]/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
        <span className="text-[10px] uppercase tracking-widest font-semibold text-[#020101]/50 mb-1">
          Handcrafted Soap
        </span>
        <span className="text-xs font-serif italic text-[#020101]/80 line-clamp-2 px-2">
          {alt}
        </span>
        
        <div className="mt-2 text-[9px] px-2 py-0.5 rounded-full bg-[#CB8C00]/10 text-[#CB8C00] font-medium tracking-wider uppercase">
          Artisanal Cold-Processed
        </div>
      </div>

      {/* Decorative leaf watermarks */}
      <div className="absolute top-2 right-2 opacity-20 pointer-events-none">
        <svg className="w-8 h-8 text-[#020101]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,8C8,10 59,16.17 3.82,21.34L5.23,22.75C10.4,17.58 16.58,15 18.58,6C17.58,6.5 16.5,7 15,7A4,4 0 0,0 11,11C11,12.5 11.5,13.58 12,14.58C11,13.58 10,12.5 10,11A5,5 0 0,1 15,6C15.7,6 16.37,6.1 17,6.29V8Z" />
        </svg>
      </div>
    </div>
  );
};
