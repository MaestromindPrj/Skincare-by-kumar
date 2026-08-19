import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WishlistProvider } from "@/context/WishlistContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "Skincare By Kumar | Pure Ingredients. Beautifully Crafted.",
  description:
    "Carefully selected handcrafted soaps from an established manufacturer with 10+ years of market experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${josefin.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-[#0F0F0F] selection:bg-[#CB8C00] selection:text-white">
        <WishlistProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </WishlistProvider>
      </body>
    </html>
  );
}
