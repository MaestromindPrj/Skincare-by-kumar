import React from "react";
import Link from "next/link";
import { RotateCcw, ShieldAlert, CheckCircle2, MessageSquare, ArrowLeft } from "lucide-react";

export default function CancellationReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F0F0F] py-12 sm:py-16">
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
            Store Policies
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F0F0F]">
            Cancellation &amp; Return Policy
          </h1>
          <p className="text-sm sm:text-base text-[#555555] mt-3 leading-relaxed">
            Please read our cancellation guidelines, return terms, and resolution procedures for handcrafted skincare items.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-sm sm:text-base text-[#333333] leading-relaxed">

          {/* Section 1: Cancellation */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] flex items-center gap-2.5">
              <RotateCcw className="w-5 h-5 text-[#111111]" />
              Order Cancellation
            </h2>
            <p className="text-[#555555]">
              You may request order cancellation anytime before the parcel is handed over to our delivery partner. To cancel an unfulfilled order, message us on WhatsApp with your name and order details. Once an order has been dispatched from our facility, it cannot be recalled or cancelled in transit.
            </p>
          </section>

          {/* Section 2: Returns */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] flex items-center gap-2.5">
              <ShieldAlert className="w-5 h-5 text-[#111111]" />
              Non-Returnable Personal Care Items
            </h2>
            <p className="text-[#555555]">
              In accordance with international personal hygiene standards, soaps and bath items cannot be accepted for return or exchange after delivery. We take this hygiene guarantee seriously so every buyer receives 100% untampered, factory-fresh skincare.
            </p>
          </section>

          {/* Section 3: Damaged Goods */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#111111]" />
              Damaged, Missing, or Wrong Item Claims
            </h2>
            <div className="space-y-2 text-[#555555]">
              <p>
                In the rare event that your shipment arrives damaged or missing items, we will resolve it immediately:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>Contact our support team within <strong>48 hours</strong> of receiving the package.</li>
                <li>Share clear photos or an unboxing video showing the outer package and damaged contents.</li>
                <li>We will dispatch a <strong>free replacement</strong> within 24 hours or issue a full refund to your original payment method.</li>
              </ul>
            </div>
          </section>

          {/* Contact Box */}
          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[rgba(15,15,15,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#111111]">
                Need immediate help with a return or issue?
              </h3>
              <p className="text-xs text-[#555555] mt-0.5">
                We are dedicated to ensuring a hassle-free, delightful customer experience.
              </p>
            </div>
            <a
              href="https://wa.me/919344884149?text=Hello%20Skincare%20By%20Kumar,%20I%20have%20an%20order%20issue"
              target="_blank"
              rel="noreferrer"
              className="bg-[#181818] hover:bg-[#333333] text-white text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-md transition-all shrink-0 inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Support</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
