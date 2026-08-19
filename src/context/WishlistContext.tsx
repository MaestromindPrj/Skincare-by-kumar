"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, PRODUCTS } from "@/data/products";

export interface WishlistItem {
  product: Product;
  quantity: number;
}

interface WishlistContextType {
  items: WishlistItem[];
  addToWishlist: (product: Product, quantity?: number) => void;
  removeFromWishlist: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
  totalEstimatedPrice: number;
  generateWhatsAppLink: (singleProduct?: Product, singleQty?: number) => string;
  sendAutomatedEnquiry: (singleProduct?: Product, singleQty?: number, customerInfo?: { name?: string; phone?: string }) => Promise<void>;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("skincare_wishlist");
      if (saved) {
        const parsed = JSON.parse(saved);
        setItems(parsed);
      } else {
        // Default initial items matching PDF mockup wishlist page (Page 4):
        // 1. Zaarraa ~Spearmint (Qty: 3)
        // 2. Chandaan Gold Face Soap (Qty: 12)
        const item1 = PRODUCTS.find(p => p.id === "zaarraa-spearmint");
        const item2 = PRODUCTS.find(p => p.id === "chandaan-gold-face-soap");
        const initial = [];
        if (item1) initial.push({ product: item1, quantity: 3 });
        if (item2) initial.push({ product: item2, quantity: 12 });
        setItems(initial);
      }
    } catch (e) {
      console.error("Failed to load wishlist from localStorage", e);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem("skincare_wishlist", JSON.stringify(items));
      } catch (e) {
        console.error("Failed to save wishlist to localStorage", e);
      }
    }
  }, [items, mounted]);

  const addToWishlist = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromWishlist(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const isInWishlist = (productId: string) => {
    return items.some((item) => item.product.id === productId);
  };

  const clearWishlist = () => {
    setItems([]);
  };

  const totalEstimatedPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const generateWhatsAppLink = (singleProduct?: Product, singleQty?: number) => {
    const phoneNumber = "919344884149"; // Business WhatsApp phone number
    const baseUrl = "https://skincarebykumar.com";

    let message = "";

    if (singleProduct) {
      const qty = singleQty || 1;
      const productUrl = `${baseUrl}/shop/${singleProduct.id}`;
      const totalPrice = singleProduct.price * qty;

      message = `Hello Skincare By Kumar,\n\nI would like to enquire about ordering:\n\n` +
        `🧼 *Product:* ${singleProduct.name}\n` +
        `💰 *Price:* ₹${singleProduct.price}${singleProduct.weight ? ` (${singleProduct.weight})` : ""}\n` +
        `📦 *Quantity:* ${qty}\n` +
        `💵 *Total Amount:* ₹${totalPrice.toLocaleString("en-IN")}\n\n` +
        `🔗 *Product Link:* ${productUrl}\n\n` +
        `Please share availability and order processing details. Thank you!`;
    } else if (items.length > 0) {
      message = `Hello Skincare By Kumar,\n\nI would like to enquire about my wishlist selection:\n\n`;
      items.forEach((item, index) => {
        message += `${index + 1}. *${item.product.name}*\n` +
          `   • Qty: ${item.quantity} | Unit Price: ₹${item.product.price} | Subtotal: ₹${(item.product.price * item.quantity).toLocaleString("en-IN")}\n`;
      });
      message += `\n*Estimated Total:* ₹${totalEstimatedPrice.toLocaleString("en-IN")}\n\nPlease share order and delivery details. Thank you!`;
    } else {
      message = `Hello Skincare By Kumar,\n\nI would like to enquire about your handcrafted soaps range. Please help me select the best soap for my skin!`;
    }

    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  };

  const sendAutomatedEnquiry = async (
    singleProduct?: Product,
    singleQty?: number,
    customerInfo?: { name?: string; phone?: string }
  ) => {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://skincarebykumar.com";

    try {
      if (singleProduct) {
        const qty = singleQty || 1;
        await fetch("/api/enquire", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productName: singleProduct.name,
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
