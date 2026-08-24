import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://skincarebykumar.com"),
  title: {
    default: "Skincare By Kumar | Pure Ingredients. Beautifully Crafted.",
    template: "%s | Skincare By Kumar",
  },
  description:
    "Discover handcrafted cold-processed artisanal soaps, premium Italian haircare, vegan sun protection, and hydrating facial essentials carefully curated with 10+ years of skincare experience.",
  keywords: [
    "Skincare By Kumar",
    "handcrafted soaps",
    "cold process soap",
    "artisanal soap India",
    "natural skincare",
    "Teotema Milano",
    "Malibu suncare",
    "KleenOWipe",
    "organic bath soaps",
    "tan removal soap",
    "bridal ubtan bar",
  ],
  authors: [{ name: "Skincare By Kumar" }],
  creator: "Skincare By Kumar",
  publisher: "Skincare By Kumar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://skincarebykumar.com",
    title: "Skincare By Kumar | Pure Ingredients. Beautifully Crafted.",
    description:
      "Handcrafted cold-processed artisanal soaps and curated international skincare essentials.",
    siteName: "Skincare By Kumar",
    images: [
      {
        url: "/hero-soap.png",
        width: 1200,
        height: 630,
        alt: "Skincare By Kumar Artisanal Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skincare By Kumar | Pure Ingredients. Beautifully Crafted.",
    description:
      "Handcrafted cold-processed artisanal soaps and curated international skincare essentials.",
    images: ["/hero-soap.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#FFFFFF",
  viewportFit: "cover",
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
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="shortcut icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
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
