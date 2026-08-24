"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, PRODUCTS } from "@/data/products";

export interface WishlistItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

interface WishlistContextType {
  items: WishlistItem[];
  addToWishlist: (product: Product, quantity?: number, selectedVariant?: string) => void;
  removeFromWishlist: (productId: string, selectedVariant?: string) => void;
  updateQuantity: (productId: string, quantity: number, selectedVariant?: string) => void;
  isInWishlist: (productId: string, selectedVariant?: string) => boolean;
  clearWishlist: () => void;
  totalEstimatedPrice: number;
  generateWhatsAppLink: (singleProduct?: Product, singleQty?: number, selectedVariant?: string) => string;
  sendAutomatedEnquiry: (singleProduct?: Product, singleQty?: number, customerInfo?: { name?: string; phone?: string }, selectedVariant?: string) => Promise<void>;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [mounted, setMounted] = useState(false);

  // Load wishlist from sessionStorage on mount (persists across refreshes within the same session)
  useEffect(() => {
    setMounted(true);
    try {
      const stored = sessionStorage.getItem("skincare_wishlist");
      if (stored) {
        const parsed = JSON.parse(stored) as WishlistItem[];
        // Rehydrate product references from PRODUCTS data to ensure fresh data
        const rehydrated = parsed
          .map((item) => {
            const product = PRODUCTS.find((p) => p.id === item.product.id);
            return product ? { product, quantity: item.quantity, selectedVariant: item.selectedVariant } : null;
          })
          .filter(Boolean) as WishlistItem[];
        setItems(rehydrated);
      }
    } catch (e) {
      console.error("Failed to load wishlist from sessionStorage", e);
    }
  }, []);

  // Save wishlist to sessionStorage on every change
  useEffect(() => {
    if (mounted) {
      try {
        sessionStorage.setItem("skincare_wishlist", JSON.stringify(items));
      } catch (e) {
        console.error("Failed to save wishlist to sessionStorage", e);
      }
    }
  }, [items, mounted]);

  const isSoapProduct = (p: Product) => {
    return (
      p.category === "Handcrafted Soaps" ||
      p.category === "Face & Glow" ||
      p.category === "Fresh & Clean" ||
      p.category === "Kid's Care"
    );
  };

  const addToWishlist = (product: Product, quantity?: number, selectedVariant?: string) => {
    const min = isSoapProduct(product) ? 3 : 1;
    const qtyToAdd = Math.max(min, quantity ?? min);
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedVariant === selectedVariant
      );
      if (existingIndex > -1) {
        return prev.map((item, idx) =>
          idx === existingIndex
            ? { ...item, quantity: item.quantity + qtyToAdd }
            : item
        );
      }
      return [...prev, { product, quantity: qtyToAdd, selectedVariant }];
    });
  };

  const removeFromWishlist = (productId: string, selectedVariant?: string) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && (selectedVariant === undefined || item.selectedVariant === selectedVariant))
      )
    );
  };

  const updateQuantity = (productId: string, quantity: number, selectedVariant?: string) => {
    if (quantity <= 0) {
      removeFromWishlist(productId, selectedVariant);
      return;
    }
    const item = items.find(
      (i) => i.product.id === productId && (selectedVariant === undefined || i.selectedVariant === selectedVariant)
    );
    const min = item && isSoapProduct(item.product) ? 3 : 1;
    const validatedQty = Math.max(min, quantity);
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && (selectedVariant === undefined || item.selectedVariant === selectedVariant)
          ? { ...item, quantity: validatedQty }
          : item
      )
    );
  };

  const isInWishlist = (productId: string, selectedVariant?: string) => {
    return items.some(
      (item) => item.product.id === productId && (selectedVariant === undefined || item.selectedVariant === selectedVariant)
    );
  };

  const clearWishlist = () => {
    setItems([]);
  };

  const totalEstimatedPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const generateWhatsAppLink = (singleProduct?: Product, singleQty?: number, selectedVariant?: string) => {
    const phoneNumber = "919952820016"; // Business WhatsApp phone number
    const baseUrl = "https://skincarebykumar.com";

    let message = "";

    if (singleProduct) {
      const qty = singleQty || (isSoapProduct(singleProduct) ? 3 : 1);
      const productUrl = `${baseUrl}/shop/${singleProduct.id}`;
      const totalPrice = singleProduct.price * qty;

      message = `Hello Skincare By Kumar,\n\nI would like to enquire about ordering:\n\n` +
        `🧼 *Product:* ${singleProduct.name}${selectedVariant ? ` (${selectedVariant})` : ""}\n` +
        (selectedVariant ? `🎨 *Selected Shade / Option:* ${selectedVariant}\n` : "") +
        `💰 *Price:* ₹${singleProduct.price}${singleProduct.weight ? ` (${singleProduct.weight})` : ""}\n` +
        `📦 *Quantity:* ${qty}\n` +
        `💵 *Total Amount:* ₹${totalPrice.toLocaleString("en-IN")}\n\n` +
        `🔗 *Product Link:* ${productUrl}\n\n` +
        `Please share availability and order processing details. Thank you!`;
    } else if (items.length > 0) {
      message = `Hello Skincare By Kumar,\n\nI would like to enquire about my wishlist selection:\n\n`;
      items.forEach((item, index) => {
        message += `${index + 1}. *${item.product.name}*${item.selectedVariant ? ` (Shade: ${item.selectedVariant})` : ""}\n` +
          `   • Qty: ${item.quantity} | Unit Price: ₹${item.product.price} | Subtotal: ₹${(item.product.price * item.quantity).toLocaleString("en-IN")}\n`;
      });
      message += `\n*Estimated Total:* ₹${totalEstimatedPrice.toLocaleString("en-IN")}\n\nPlease share order and delivery details. Thank you!`;
    } else {
      message = `Hello Skincare By Kumar,\n\nI would like to enquire about your products range. Please help me select the best products for my needs!`;
    }

    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  };

  const sendAutomatedEnquiry = async (
    singleProduct?: Product,
    singleQty?: number,
    customerInfo?: { name?: string; phone?: string },
    selectedVariant?: string
  ) => {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://skincarebykumar.com";

    try {
      if (singleProduct) {
        const qty = singleQty || 1;
        await fetch("/api/enquire", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productName: singleProduct.name + (selectedVariant ? ` - ${selectedVariant}` : ""),
            price: singleProduct.price,
            quantity: qty,
            totalAmount: singleProduct.price * qty,
            productUrl: `${baseUrl}/shop/${singleProduct.id}`,
            customerName: customerInfo?.name,
            customerPhone: customerInfo?.phone,
          }),
        });
      } else if (items.length > 0) {
        await fetch("/api/enquire", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items,
            estimatedTotal: totalEstimatedPrice,
            customerName: customerInfo?.name,
            customerPhone: customerInfo?.phone,
          }),
        });
      }
    } catch (err) {
      console.error("Failed to post automated enquiry to backend API:", err);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        updateQuantity,
        isInWishlist,
        clearWishlist,
        totalEstimatedPrice,
        generateWhatsAppLink,
        sendAutomatedEnquiry,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
