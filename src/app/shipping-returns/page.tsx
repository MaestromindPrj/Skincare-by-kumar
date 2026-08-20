import React from "react";
import Link from "next/link";
import { Truck, Clock, ShieldCheck, CheckCircle2, MessageSquare, ArrowLeft } from "lucide-react";

export default function ShippingReturnsPage() {
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
            Store Policies
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F0F0F]">
            Shipping &amp; Returns
          </h1>
          <p className="text-sm sm:text-base text-[#555555] mt-3 leading-relaxed">
            Detailed information regarding our packaging, dispatch timelines, nationwide courier delivery, and customer satisfaction resolutions.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-sm sm:text-base text-[#333333] leading-relaxed">

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-[#111111]" />
              Dispatch &amp; Processing Timeline
            </h2>
            <p className="text-[#555555]">
              Every bar of Skincare By Kumar soap is handmade, cured naturally, and individually quality-checked. Verified orders are carefully packaged in breathable, eco-friendly protective wrapping and dispatched within <strong>24 to 48 business hours</strong> (excluding Sundays and national holidays).
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] flex items-center gap-2.5">
              <Truck className="w-5 h-5 text-[#111111]" />
              Courier Delivery Times Across India
            </h2>
            <p className="text-[#555555]">
              We partner with trusted express logistics providers to ensure your handcrafted soaps arrive safely:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FAFAFA] border border-gray-100">
                <span className="font-bold text-xs uppercase tracking-wider text-[#111111] block mb-1">
                  South India &amp; Metros
                </span>
                <span className="text-lg font-bold text-[#0F0F0F] block">2 – 4 Days</span>
                <span className="text-xs text-[#777777]">Fast road &amp; air express</span>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFAFA] border border-gray-100">
                <span className="font-bold text-xs uppercase tracking-wider text-[#111111] block mb-1">
                  Rest of India
                </span>
                <span className="text-lg font-bold text-[#0F0F0F] block">4 – 7 Days</span>
                <span className="text-xs text-[#777777]">Standard nationwide transit</span>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFAFA] border border-gray-100">
                <span className="font-bold text-xs uppercase tracking-wider text-[#111111] block mb-1">
                  Remote &amp; North East
                </span>
                <span className="text-lg font-bold text-[#0F0F0F] block">6 – 9 Days</span>
                <span className="text-xs text-[#777777]">Regional network delivery</span>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#111111]" />
              Returns &amp; Hygiene Standards
            </h2>
            <p className="text-[#555555]">
              Due to the personal hygiene and intimate nature of bath &amp; body skincare items, soaps that have been delivered and opened cannot be returned or reused. This policy ensures that every customer receives 100% pristine, untouched, fresh artisan bars.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#111111]" />
              Damaged or Defective Items in Transit
            </h2>
            <p className="text-[#555555]">
              If your package is damaged during shipping or if you receive an incorrect product, please reach out to our team within <strong>48 hours of delivery</strong> with an unboxing photo/video. We will promptly issue a free replacement or complete refund.
            </p>
          </section>

          {/* Contact Assistance */}
          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[rgba(15,15,15,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#111111]">
                Need help with an ongoing shipment?
              </h3>
              <p className="text-xs text-[#555555] mt-0.5">
                Our support team is available on WhatsApp for live tracking and order assistance.
              </p>
            </div>
            <a
              href="https://wa.me/919344884149?text=Hello%20Skincare%20By%20Kumar,%20I%20have%20a%20shipping%20query"
              target="_blank"
              rel="noreferrer"
              className="bg-[#181818] hover:bg-[#333333] text-white text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-md transition-all shrink-0 inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
