"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, MessageSquare, ArrowLeft } from "lucide-react";

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes cold-processed soap different from commercial soaps?",
      a: "Commercial soaps often remove naturally occurring glycerin and replace it with synthetic detergents, hardening agents, and foaming chemicals (SLS/SLES). Our soaps are handmade using traditional cold processing, retaining 100% of natural botanical glycerin and nourishing oils, resulting in a gentle, moisture-rich cleansing bar that doesn't strip your skin barrier."
    },
    {
      q: "How do I choose the right soap for my skin type?",
      a: "For dry or sensitive skin, nourishing bars like Almond Cream or Zaarraa are ideal. For combination or acne-prone skin, French Red Clay and Indus River provide gentle clarifying benefits. For kids and delicate skin, Velvet bathing bar - Kids special and Lush Oats offer hypoallergenic, fragrance-safe care."
    },
    {
      q: "How long does a handmade cold-process soap bar last?",
      a: "Because natural cold-processed soaps do not contain synthetic hardening chemicals, they should be placed on a draining soap dish between uses to stay dry. With proper drainage, a 100g bar typically lasts 3 to 4 weeks of daily use."
    },
    {
      q: "Are your soaps 100% vegetarian, natural, and cruelty-free?",
      a: "Yes. All our soaps are crafted exclusively with pure plant-based oils, herbal extracts, clays, and natural botanicals. We never test on animals, and our formulas are completely free of animal fats, parabens, sulphates, and synthetic preservatives."
    },
    {
      q: "Why do color and texture vary slightly between bars?",
      a: "Every single bar is mixed, poured, hand-cut, and cured for 4 to 6 weeks. Small variations in natural color, botanical swirls, and texture are the authentic hallmarks of handcrafted artisan soapmaking."
    },
    {
      q: "How do I place an order or enquire about bulk gifting?",
      a: "You can add your favorite soaps to your Wishlist and click 'Enquire on WhatsApp' to chat directly with our team. We assist with custom gifting sets, bulk orders, and personalized skincare recommendations."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F0F0F] py-12 sm:py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#666666] hover:text-[#0F0F0F] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Heading */}
        <div className="border-b border-gray-200 pb-8 mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#777777] block mb-2">
            Knowledge Base
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F0F0F]">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-[#555555] mt-3 leading-relaxed">
            Find answers to common questions regarding ingredients, curing, skin compatibility, and orders.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="divide-y divide-gray-100 border border-[rgba(15,15,15,0.08)] rounded-xl overflow-hidden mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="bg-white transition-colors">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAFAFA] transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-sm sm:text-base text-[#111111]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#777777] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#111111]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed bg-[#FAFAFA]/50 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Help Box */}
        <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[rgba(15,15,15,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg font-bold text-[#111111]">
              Have a question not listed here?
            </h3>
            <p className="text-xs text-[#555555] mt-0.5">
              Chat directly with our skincare experts for personalized soap recommendations.
            </p>
          </div>
          <a
            href="https://wa.me/919952820016?text=Hello%20Skincare%20By%20Kumar,%20I%20have%20a%20question"
            target="_blank"
            rel="noreferrer"
            className="bg-[#181818] hover:bg-[#333333] text-white text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-md transition-all shrink-0 inline-flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
