"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  HelpCircle,
  Truck,
  RotateCcw,
  ShieldCheck,
  FileText,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  ExternalLink,
  Sparkles,
  CheckCircle2
} from "lucide-react";

type SupportTab = "contact" | "faq" | "shipping" | "returns" | "privacy" | "terms";

function SupportContent() {
  const searchParams = useSearchParams();
  const initialTab = (searchParams?.get("tab") as SupportTab) || "contact";
  const [activeTab, setActiveTab] = useState<SupportTab>("contact");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Sync tab with URL hash or search params
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as SupportTab;
    if (["contact", "faq", "shipping", "returns", "privacy", "terms"].includes(hash)) {
      setActiveTab(hash);
    } else if (initialTab && ["contact", "faq", "shipping", "returns", "privacy", "terms"].includes(initialTab)) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const tabs = [
    { id: "contact" as SupportTab, label: "Contact Us", icon: MessageSquare },
    { id: "faq" as SupportTab, label: "Frequently Asked Questions", icon: HelpCircle },
    { id: "shipping" as SupportTab, label: "Shipping & Delivery", icon: Truck },
    { id: "returns" as SupportTab, label: "Cancellations & Returns", icon: RotateCcw },
    { id: "privacy" as SupportTab, label: "Privacy Policy", icon: ShieldCheck },
    { id: "terms" as SupportTab, label: "Terms of Service", icon: FileText },
  ];

  const faqs = [
    {
      q: "What makes cold-processed soap different from commercial soaps?",
      a: "Commercial soaps often remove naturally occurring glycerin and replace it with synthetic detergents, hardening agents, and foaming chemicals (SLS/SLES). Our soaps are handmade using traditional cold processing, retaining 100% of natural botanical glycerin and nourishing oils, resulting in a gentle, moisture-rich cleansing bar that doesn't strip your skin barrier."
    },
    {
      q: "How do I choose the right soap for my skin type?",
      a: "For dry or sensitive skin, nourishing bars like Sweet Almond Deep Moisture Bar or Arabian Oudh Nourishing Bar are ideal. For combination or acne-prone skin, Red Clay Brightening Face Bar and Spiced Cinnamon Detox Bar provide gentle clarifying benefits. For kids and delicate skin, Calendula Gentle Baby Bar and Oat Milk & Honey Soothing Bar offer hypoallergenic, fragrance-safe care."
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
    <div className="min-h-screen bg-white text-[#0F0F0F] py-10 sm:py-14 lg:py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[rgba(15,15,15,0.08)] text-xs font-semibold uppercase tracking-wider text-[#333333] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#111111]" />
            <span>Customer Care &amp; Support</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F0F0F]">
            How Can We Help You?
          </h1>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed mt-3 max-w-xl mx-auto">
            Find answers to questions about our handcrafted soaps, orders, delivery, returns, and store policies.
          </p>
        </div>

        {/* Layout Grid: Sidebar Tabs + Content Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Left Navigation Tabs */}
          <div className="lg:col-span-4 bg-[#FAFAFA] border border-[rgba(15,15,15,0.08)] rounded-2xl p-3 sm:p-4 sticky top-28">
            <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible scrollbar-none pb-1 lg:pb-0">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      window.history.replaceState(null, "", `#${tab.id}`);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all text-left whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink cursor-pointer ${
                      isActive
                        ? "bg-[#181818] text-white shadow-xs font-semibold"
                        : "text-[#444444] hover:bg-white hover:text-[#111111]"
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-[#777777]"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Direct WhatsApp Quick Help Box */}
            <div className="hidden lg:block mt-6 p-4 rounded-xl bg-white border border-[rgba(15,15,15,0.08)] text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#777777] block mb-1">
                Direct Assistance
              </span>
              <p className="text-xs text-[#555555] mb-3">
                Need immediate help with a recommendation or order?
              </p>
              <a
                href="https://wa.me/919952820016?text=Hello%20Skincare%20By%20Kumar,%20I%20need%20support"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#181818] hover:bg-[#333333] active:bg-[#000000] text-white text-xs font-semibold uppercase tracking-wider py-2.5 px-4 rounded-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Content Panel */}
          <div className="lg:col-span-8 bg-white border border-[rgba(15,15,15,0.08)] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs min-h-[480px]">

            {/* TAB 1: CONTACT US */}
            {activeTab === "contact" && (
              <div className="flex flex-col gap-6 animate-fade-in">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F0F0F]">
                    Get In Touch
                  </h2>
                  <p className="text-sm text-[#555555] mt-1.5 leading-relaxed">
                    We are here to assist you with product consultations, custom orders, order tracking, and gifting.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {/* WhatsApp Card */}
                  <div className="p-5 rounded-xl border border-[rgba(15,15,15,0.08)] bg-[#FAFAFA] flex flex-col gap-2.5">
                    <div className="flex items-center gap-2.5 text-[#111111]">
                      <MessageSquare className="w-5 h-5" />
                      <span className="font-semibold text-sm">WhatsApp Support</span>
                    </div>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      Instant chat support for product recommendations, order enquiries, and fast resolutions.
                    </p>
                    <a
                      href="https://wa.me/919952820016?text=Hello%20Skincare%20By%20Kumar,%20I%20have%20an%20enquiry"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-[#181818] hover:underline mt-1 inline-flex items-center gap-1"
                    >
                      +91 99528 20016 <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Email Support Card */}
                  <div className="p-5 rounded-xl border border-[rgba(15,15,15,0.08)] bg-[#FAFAFA] flex flex-col gap-2.5">
                    <div className="flex items-center gap-2.5 text-[#111111]">
                      <Mail className="w-5 h-5" />
                      <span className="font-semibold text-sm">Email Support</span>
                    </div>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      For corporate orders, brand partnerships, or general queries.
                    </p>
                    <a
                      href="mailto:support@skincarebykumar.com"
                      className="text-xs font-bold text-[#181818] hover:underline mt-1 inline-flex items-center gap-1"
                    >
                      support@skincarebykumar.com
                    </a>
                  </div>

                  {/* Location Card */}
                  <div className="p-5 rounded-xl border border-[rgba(15,15,15,0.08)] bg-[#FAFAFA] flex flex-col gap-2.5">
                    <div className="flex items-center gap-2.5 text-[#111111]">
                      <MapPin className="w-5 h-5" />
                      <span className="font-semibold text-sm">Location</span>
                    </div>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      Handcrafted with care and dispatched across India from our dedicated facility.
                    </p>
                    <span className="text-xs font-semibold text-[#181818]">
                      Tamil Nadu, India
                    </span>
                  </div>

                  {/* Working Hours Card */}
                  <div className="p-5 rounded-xl border border-[rgba(15,15,15,0.08)] bg-[#FAFAFA] flex flex-col gap-2.5">
                    <div className="flex items-center gap-2.5 text-[#111111]">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold text-sm">Support Hours</span>
                    </div>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      Monday to Saturday: 9:00 AM – 7:00 PM (IST)
                    </p>
                    <span className="text-xs text-[#777777]">
                      Sunday: Messages responded on next business day
                    </span>
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="mt-4 p-6 rounded-xl bg-[#FAF8F5] border border-[rgba(15,15,15,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#111111]">
                      Ready to experience better skincare?
                    </h3>
                    <p className="text-xs text-[#555555] mt-0.5">
                      Explore our handcrafted artisanal soaps crafted for everyday skin health.
                    </p>
                  </div>
                  <Link
                    href="/shop"
                    className="bg-[#181818] hover:bg-[#333333] text-white text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-md transition-all shrink-0"
                  >
                    Browse Soaps
                  </Link>
                </div>
              </div>
            )}

            {/* TAB 2: FAQ */}
            {activeTab === "faq" && (
              <div className="flex flex-col gap-6 animate-fade-in" id="faq">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F0F0F]">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-sm text-[#555555] mt-1.5 leading-relaxed">
                    Everything you need to know about our cold-processed handcrafted soaps and ordering process.
                  </p>
                </div>

                <div className="divide-y divide-gray-100 border border-[rgba(15,15,15,0.08)] rounded-xl overflow-hidden">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div key={index} className="bg-white transition-colors">
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : index)}
                          className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAFAFA] transition-colors cursor-pointer"
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
                          <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed bg-[#FAFAFA]/50 animate-fade-in">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 3: SHIPPING & DELIVERY */}
            {activeTab === "shipping" && (
              <div className="flex flex-col gap-6 animate-fade-in" id="shipping">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F0F0F]">
                    Shipping &amp; Delivery Policy
                  </h2>
                  <p className="text-sm text-[#555555] mt-1.5 leading-relaxed">
                    We deliver freshly cured, handcrafted soaps securely to pin codes across India.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#444444] leading-relaxed">
                  <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[rgba(15,15,15,0.08)]">
                    <h3 className="font-bold text-sm text-[#111111] mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#111111]" />
                      Dispatch &amp; Processing Time
                    </h3>
                    <p>
                      All verified orders are carefully packaged and dispatched within <strong>24 to 48 business hours</strong> from our facility. Each bar is protected in eco-friendly wrapping to preserve its natural aroma and structure during transit.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[rgba(15,15,15,0.08)]">
                    <h3 className="font-bold text-sm text-[#111111] mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#111111]" />
                      Estimated Delivery Timeline
                    </h3>
                    <ul className="list-disc list-inside space-y-1 mt-1 text-[#555555]">
                      <li><strong>South India &amp; Metro Cities:</strong> 2 – 4 business days</li>
                      <li><strong>Rest of India:</strong> 4 – 7 business days</li>
                      <li><strong>Remote &amp; North East Locations:</strong> 6 – 9 business days</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[rgba(15,15,15,0.08)]">
                    <h3 className="font-bold text-sm text-[#111111] mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#111111]" />
                      Tracking Details
                    </h3>
                    <p>
                      Once your parcel is handed over to our courier partner, you will receive a tracking link directly on WhatsApp / SMS to monitor your package live until delivery.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: CANCELLATIONS & RETURNS */}
            {activeTab === "returns" && (
              <div className="flex flex-col gap-6 animate-fade-in" id="returns">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F0F0F]">
                    Cancellations &amp; Return Policy
                  </h2>
                  <p className="text-sm text-[#555555] mt-1.5 leading-relaxed">
                    Our transparent hygiene and resolution standards.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#444444] leading-relaxed">
                  <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[rgba(15,15,15,0.08)]">
                    <h3 className="font-bold text-sm text-[#111111] mb-1">
                      Hygiene &amp; Personal Care Policy
                    </h3>
                    <p>
                      Due to the intimate personal hygiene nature of skincare and soap products, we cannot accept returns or exchanges for opened or used items once delivered.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[rgba(15,15,15,0.08)]">
                    <h3 className="font-bold text-sm text-[#111111] mb-1">
                      Damaged or Incorrect Items in Transit
                    </h3>
                    <p>
                      If your parcel arrives damaged, leaking, or if an incorrect product was received, please contact us on WhatsApp (+91 99528 20016) within <strong>48 hours of delivery</strong> with an unboxing photo/video. We will immediately dispatch a free replacement or issue a full refund without hassle.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[rgba(15,15,15,0.08)]">
                    <h3 className="font-bold text-sm text-[#111111] mb-1">
                      Order Cancellation
                    </h3>
                    <p>
                      Orders may be cancelled free of charge prior to courier dispatch. Once the parcel has left our facility, the order cannot be cancelled in transit.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: PRIVACY POLICY */}
            {activeTab === "privacy" && (
              <div className="flex flex-col gap-6 animate-fade-in" id="privacy">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F0F0F]">
                    Privacy Statement
                  </h2>
                  <p className="text-sm text-[#555555] mt-1.5 leading-relaxed">
                    How we handle and safeguard your personal information.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#444444] leading-relaxed">
                  <p>
                    At <strong>Skincare By Kumar</strong>, we respect your privacy and are committed to protecting your personal data. This policy describes what details we collect and how we use them.
                  </p>

                  <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[rgba(15,15,15,0.08)] space-y-2">
                    <h3 className="font-bold text-sm text-[#111111]">1. Information We Collect</h3>
                    <p>
                      When you enquire or place an order, we collect essential details such as your name, phone number, delivery address, and communication preferences solely for dispatch and customer support.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[rgba(15,15,15,0.08)] space-y-2">
                    <h3 className="font-bold text-sm text-[#111111]">2. Use of Information</h3>
                    <p>
                      Your information is exclusively used to fulfill your orders, provide shipment updates, answer skincare inquiries, and improve our handcrafted product formulations. We never sell, rent, or trade customer data to third-party advertisers.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[rgba(15,15,15,0.08)] space-y-2">
                    <h3 className="font-bold text-sm text-[#111111]">3. Data Security</h3>
                    <p>
                      We implement strict digital and operational safeguards to keep your contact and order history protected.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: TERMS OF SERVICE */}
            {activeTab === "terms" && (
              <div className="flex flex-col gap-6 animate-fade-in" id="terms">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F0F0F]">
                    Terms of Service
                  </h2>
                  <p className="text-sm text-[#555555] mt-1.5 leading-relaxed">
                    Guidelines for browsing and ordering from Skincare by Kumar.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#444444] leading-relaxed">
                  <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[rgba(15,15,15,0.08)] space-y-2">
                    <h3 className="font-bold text-sm text-[#111111]">1. Product Authenticity &amp; Handcrafting</h3>
                    <p>
                      All soaps are handcrafted in small batches. While formulation recipes and active botanical ingredients remain strictly uniform, subtle visual differences in cut, texture, and natural color marbling reflect the genuine artisanal process.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[rgba(15,15,15,0.08)] space-y-2">
                    <h3 className="font-bold text-sm text-[#111111]">2. Skincare Advisory &amp; Patch Testing</h3>
                    <p>
                      Our products are formulated with natural ingredients and are gentle on the skin. However, individual sensitivities and botanical allergies vary. We always recommend performing a patch test on a small area of skin before first use.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[rgba(15,15,15,0.08)] space-y-2">
                    <h3 className="font-bold text-sm text-[#111111]">3. Pricing &amp; Availability</h3>
                    <p>
                      Prices are listed in Indian Rupees (INR) and are subject to change without prior notice. Product availability depends on curing cycles and small-batch production schedules.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

export default function SupportPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white text-[#0F0F0F] py-16 text-center">
          <p className="text-sm text-[#777777]">Loading Support Page...</p>
        </div>
      }
    >
      <SupportContent />
    </Suspense>
  );
}
