export interface Product {
  id: string;
  name: string;
  subtitle: string;
  badge?: "POPULAR" | "ALL TIME FAVOURITE" | "KIDS' FAVOURITE" | "BEST SELLER" | "NEW";
  price: number;
  originalPrice: number;
  benefits: string[];
  tags: ("Brightness" | "Hydrating" | "Baby Friendly" | "Tan Removal")[];
  category: "Face & Glow" | "Fresh & Clean" | "Kid's Care";
  description: string;
  skinFocus: string;
  weight: string;
  image?: string;
  freeFrom: string[];
  keyIngredients: {
    name: string;
    description: string;
    icon: string;
  }[];
}

export const PRODUCTS: Product[] = [
  {
    id: "french-red-clay-face-soap",
    name: "French Red Clay Face Soap",
    subtitle: "Organic French Red Clay • Wild Turmeric • Milk Cream",
    badge: "POPULAR",
    price: 330,
    originalPrice: 390,
    benefits: ["Brightening", "Hydrating"],
    tags: ["Brightness", "Hydrating"],
    category: "Face & Glow",
    skinFocus: "Deep Cleansing, Complexion Brightening & Moisture Balance",
    weight: "118 - 123 Gms",
    image: "/soaps/FRENCH RED.png",
    freeFrom: ["Synthetic Fragrances Free", "Harsh Chemicals Free", "Paraben Free"],
    description: "Enriched with Organic French Red Clay, Thick Milk Cream, Almond Milk, Wild Turmeric Powder, AloeVera Puree, Saponified Shea Butter, Kokum Butter, Pure Ghee, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate. Premium Fragrance Oils, Rhassoul Red Clay, Natural Kaolin Clay.",
    keyIngredients: [
      { name: "Organic French Red Clay", description: "Purifies pores and boosts natural circulation.", icon: "Sparkles" },
      { name: "Thick Milk Cream & Pure Ghee", description: "Deeply nourishes and locks in soft skin hydration.", icon: "Droplet" },
      { name: "Wild Turmeric Powder", description: "Evens out skin tone and reveals natural radiance.", icon: "Sun" },
      { name: "Shea & Kokum Butter", description: "Provides essential fatty acids to protect skin barrier.", icon: "Shield" }
    ]
  },
  {
    id: "kidoos-extra-luxurious",
    name: "KIDOOS - Extra Luxurious Bar",
    subtitle: "Calendula Flowers • Almond Milk • Mango Butter",
    badge: "KIDS' FAVOURITE",
    price: 510,
    originalPrice: 590,
    benefits: ["Ultra Gentle", "Hydrating"],
    tags: ["Baby Friendly", "Hydrating"],
    category: "Kid's Care",
    skinFocus: "Extra Gentle Care, Hypoallergenic Moisture & Sensitive Skin",
    weight: "118 - 123 Gms",
    image: "/soaps/KIDDOS.png",
    freeFrom: ["Tear-free Formula", "Harsh Chemicals Free", "Sulphate Free"],
    description: "Enriched with Almond Oil, Calendula Flowers infused Saponified Virgin Olive Oil, Virgin Coconut Oil, Fresh Aloevera Puree, Thick Milk Cream Malai, Raw Honey, Almond Milk, Organic Mango Butter, Organic Kokum Butter, Organic Palmate, Castor Oil, Powdered Calendula Flowers, Premium Fragrance Oils, Natural Rose Pink Clay, Natural Kaolin Clay.",
    keyIngredients: [
      { name: "Calendula Flowers", description: "Infused in virgin olive oil to soothe sensitive young skin.", icon: "Flower2" },
      { name: "Raw Honey & Malai", description: "Natural humectants that keep skin supple and smooth.", icon: "Droplet" },
      { name: "Organic Mango & Kokum Butter", description: "Rich plant butters for maximum hydration.", icon: "HeartHandshake" },
      { name: "Rose Pink & Kaolin Clay", description: "Ultra-mild natural clays for gentle detoxification.", icon: "Sparkles" }
    ]
  },
  {
    id: "caffe-latte-creamy-exfoliating-spa",
    name: "Caffe Latte Creamy Exfoliating Spa",
    subtitle: "Coffee Grounds • Coffee Bean Oil • Milk Cream Malai",
    badge: "BEST SELLER",
    price: 402,
    originalPrice: 470,
    benefits: ["Exfoliating", "Hydrating"],
    tags: ["Hydrating", "Brightness"],
    category: "Fresh & Clean",
    skinFocus: "Exfoliation, Skin Softening & Circulation Boost",
    weight: "118 - 123 Gms",
    image: "/soaps/CAFFE LATTE.png",
    freeFrom: ["Synthetic Fragrances Free", "Harsh Chemicals Free", "Paraben Free"],
    description: "Enriched with Thick Milk Cream (Malai), Coffee Grounds, Coffee Bean Oil, Brewed Coffee Decoction, Powdered Herbs, Wild Turmeric Powder, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Natural Rhassoul Clay, Natural Kaolin Clay.",
    keyIngredients: [
      { name: "Coffee Grounds & Bean Oil", description: "Stimulates skin and buff away dead skin cells.", icon: "Sparkles" },
      { name: "Thick Milk Cream (Malai)", description: "Rich natural cream for velvety smooth moisture.", icon: "Droplet" },
      { name: "Wild Turmeric & Herbs", description: "Botanical blend that brightens and tones.", icon: "Sun" },
      { name: "Rhassoul & Kaolin Clay", description: "Absorbs excess oil while restoring mineral balance.", icon: "Leaf" }
    ]
  },
  {
    id: "caffe-berrie-creamy-exfoliating-spa",
    name: "Caffe Berrie Creamy Exfoliating Spa",
    subtitle: "Pomegranate Oil • Strawberry Oil • Coffee Grounds",
    badge: "NEW",
    price: 402,
    originalPrice: 470,
    benefits: ["Exfoliating", "Radiant Glow"],
    tags: ["Brightness", "Hydrating"],
    category: "Fresh & Clean",
    skinFocus: "Antioxidant Exfoliation & Berry Glow",
    weight: "118 - 123 Gms",
    image: "/soaps/CAFFE BERRIE.png",
    freeFrom: ["Harsh Chemicals Free", "Paraben Free", "Sulphate Free"],
    description: "Enriched with Thick Milk Cream (Malai), Coffee Grounds, Coffee Bean Oil, Brewed Coffee Decoction, Powdered Herbs, Wild Turmeric Powder, Pomegranate Oil, Strawberry Oil, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Natural French Red Clay, Natural Rose Pink Clay, Natural Kaolin Clay.",
    keyIngredients: [
      { name: "Pomegranate & Strawberry Oil", description: "Fruit oils packed with vitamins for youthful skin.", icon: "Heart" },
      { name: "Coffee Decoction & Grounds", description: "Invigorating scrub texture for glowing skin.", icon: "Sparkles" },
      { name: "French Red & Rose Pink Clay", description: "Tones complexion and improves skin texture.", icon: "Leaf" },
      { name: "Milk Cream & Shea Butter", description: "Deeply quenches dry skin post-exfoliation.", icon: "Droplet" }
    ]
  },
  {
    id: "caffe-orange-creamy-milk-exfoliation-spa",
    name: "Caffe Orange Creamy Milk Exfoliation Spa",
    subtitle: "Orange Peel Powder • Orange Oil • Fresh Juice",
    badge: "POPULAR",
    price: 402,
    originalPrice: 470,
    benefits: ["Tan Removal", "Exfoliating"],
    tags: ["Tan Removal", "Brightness"],
    category: "Fresh & Clean",
    skinFocus: "Tan Reversal, Citrus Refreshment & Exfoliation",
    weight: "118 - 123 Gms",
    image: "/soaps/CAFFE ORANGE.png",
    freeFrom: ["Synthetic Fragrances Free", "Harsh Chemicals Free"],
    description: "Enriched with Thick Milk Cream (Malai), Coffee Grounds, Coffee Bean Oil, Brewed Coffee Decoction, Powdered Herbs, Wild Turmeric Powder, Orange Oil, Orange Extract, Orange Peal Powder, Fresh Orange Juice, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Natural French Red Clay, Natural Rhassoul Clay, Natural Kaolin Clay.",
    keyIngredients: [
      { name: "Fresh Orange Juice & Peel Powder", description: "Rich in Vitamin C to clarify sun tan and blemishes.", icon: "Sun" },
      { name: "Coffee Grounds & Decoction", description: "Gentle natural scrub for silky smooth finish.", icon: "Sparkles" },
      { name: "Orange Essential Oil", description: "Lifts spirits with a bright citrus scent.", icon: "Zap" },
      { name: "Shea & Kokum Butter", description: "Prevents skin drying during exfoliation.", icon: "Shield" }
    ]
  },
  {
    id: "siberiian-waters-cologne-spice-aloevera",
    name: "Siberiian Waters Cologne Spice Aloevera",
    subtitle: "Cologne Spice • Rosemary & Cypress Oil • AloeVera",
    badge: "POPULAR",
    price: 330,
    originalPrice: 390,
    benefits: ["Freshness", "Hydrating"],
    tags: ["Hydrating", "Brightness"],
    category: "Fresh & Clean",
    skinFocus: "Refreshing Cologne Aroma & Pore Tightening",
    weight: "118 - 123 Gms",
    image: "/soaps/SIBERIIAN.png",
    freeFrom: ["Harsh Chemicals Free", "Paraben Free"],
    description: "Enriched with Cologne, Rosemary Essential Oil, Cypress Essential Oil, AloeVera Puree, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Natural Kaolin Clay.",
    keyIngredients: [
      { name: "Rosemary & Cypress Oil", description: "Tones skin and leaves an invigorating fresh scent.", icon: "Leaf" },
      { name: "AloeVera Puree", description: "Cools and calms irritation instantly.", icon: "Droplet" },
      { name: "Natural Kaolin Clay", description: "Gentle mineral clay that draws out impurities.", icon: "Sparkles" },
      { name: "Cold-Pressed Oils", description: "Olive, Almond & Coconut oil for balanced lather.", icon: "Shield" }
    ]
  },
  {
    id: "zaaraa-spearmint",
    name: "Zaaraa",
    subtitle: "Spearmint Oil • Green Tea Extract • Lime Oil",
    badge: "POPULAR",
    price: 330,
    originalPrice: 390,
    benefits: ["Hydrating", "Freshness"],
    tags: ["Hydrating", "Brightness"],
    category: "Fresh & Clean",
    skinFocus: "Hydrating, Freshness & Antioxidant Care",
    weight: "118 - 123 Gms",
    image: "/soaps/ZAARRAA.png",
    freeFrom: ["Synthetic Fragrances Free", "Harsh Chemicals Free"],
    description: "Enriched with Spearmint Oil, Orange Peel Extract, Green tea Extract, Lime Oil, AloeVera Puree, Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Natural Kaolin Clay.",
    keyIngredients: [
      { name: "Spearmint & Lime Oil", description: "Delivers a cooling citrus mint aroma.", icon: "Zap" },
      { name: "Green Tea Extract", description: "Loaded with polyphenols to protect against urban stress.", icon: "Leaf" },
      { name: "AloeVera Puree", description: "Deeply hydrates and restores skin moisture.", icon: "Droplet" },
      { name: "Shea & Kokum Butter", description: "Creates a protective moisture barrier.", icon: "HeartHandshake" }
    ]
  },
  {
    id: "ocean-waters-aqua-lemon-aloevera",
    name: "OCEAN WATERS - AQUA LEMON ALOEVERA",
    subtitle: "Bergamot & Lime • Lemon Essential Oil • AloeVera",
    badge: "NEW",
    price: 230,
    originalPrice: 290,
    benefits: ["Freshness", "Purifying"],
    tags: ["Hydrating", "Brightness"],
    category: "Fresh & Clean",
    skinFocus: "Aqua Citrus Refreshment & Oil Control",
    weight: "118 - 123 Gms",
    image: "/soaps/OCEAN WATERS.png",
    freeFrom: ["Harsh Chemicals Free", "Paraben Free", "Sulphate Free"],
    description: "Enriched with Orange Peel Extract, Bergamot Essential Oil, Lime Essential Oil, Lemon Essential Oil, AloeVera Puree, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Yellow Bentonite Clay, Natural Kaolin Clay.",
    keyIngredients: [
      { name: "Bergamot, Lime & Lemon Oils", description: "Energizing citrus trio that purifies pores.", icon: "Sun" },
      { name: "Yellow Bentonite & Kaolin Clay", description: "Absorbs toxins and surplus skin sebum.", icon: "Sparkles" },
      { name: "AloeVera Puree", description: "Restores soothing hydration after wash.", icon: "Droplet" },
      { name: "Orange Peel Extract", description: "Natural astringent for bright skin tone.", icon: "Leaf" }
    ]
  },
  {
    id: "sanskruti-shahi-ubtan",
    name: "SANSKRUTI SHAHI UBTAN",
    subtitle: "Kesar Ubtan • Sandalwood Oil • Wild Turmeric",
    badge: "ALL TIME FAVOURITE",
    price: 330,
    originalPrice: 420,
    benefits: ["Tan Removal", "Radiant Glow"],
    tags: ["Tan Removal", "Brightness"],
    category: "Face & Glow",
    skinFocus: "Royal Herbal Ubtan Glow & Deep Tan Removal",
    weight: "118 - 123 Gms",
    image: "/soaps/SANSKRUTI.png",
    freeFrom: ["Synthetic Fragrances Free", "Harsh Chemicals Free"],
    description: "Enriched with Kesar Ubtan (Natural Herbal Scrub made by mixing Healing Powdered Herbs with Saffron), Sandalwood Oil, Sandalwood Powder, Wild Turmeric Root Powder, Turmeric Root Oil, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards, Premium Fragrance Oils, Rhassoul Red Clay, Kaolin Clay.",
    keyIngredients: [
      { name: "Kesar Ubtan & Saffron", description: "Ayurvedic herbal blend that clears sun tan.", icon: "Sun" },
      { name: "Sandalwood Oil & Powder", description: "Soothes sun burn and imparts timeless royal scent.", icon: "Sparkles" },
      { name: "Wild Turmeric Root Powder", description: "Natural antiseptic that illuminates dull skin.", icon: "Leaf" },
      { name: "Rhassoul Red Clay", description: "Rich in minerals that refine skin texture.", icon: "Shield" }
    ]
  },
  {
    id: "almond-cream-spa-almond-milk",
    name: "ALMOND CREAM SPA - Almond Milk Almond Oil",
    subtitle: "Virgin Sweet Almond Oil • Fresh Almond Milk • AloeVera",
    badge: "BEST SELLER",
    price: 303,
    originalPrice: 380,
    benefits: ["Rich Moisture", "Nourishing"],
    tags: ["Hydrating", "Baby Friendly"],
    category: "Face & Glow",
    skinFocus: "Intense Moisture & Velvet Softness for Dry Skin",
    weight: "118 - 123 Gms",
    image: "/soaps/ALMOND CREAM.png",
    freeFrom: ["Synthetic Fragrances Free", "Harsh Chemicals Free"],
    description: "Enriched with Virgin Sweet Almond Oil, Almond Extract, Almond Milk, Aloevera Puree, Saponified Shea Butter, Kokum Butter, Olive Oil, Coconut Oil, Castor Oil, Organic Palmate. Colours in compliance with EU & other Global Standards, Almond Fragrance Oil, Natural French Red Clay, Natural Kaolin Clay.",
    keyIngredients: [
      { name: "Virgin Sweet Almond Oil", description: "Packed with Vitamin E to restore dry skin elasticity.", icon: "Nut" },
      { name: "Fresh Almond Milk", description: "Provides creamy, deeply moisturising skin feel.", icon: "Droplet" },
      { name: "French Red & Kaolin Clay", description: "Smooths dry patches gently.", icon: "Sparkles" },
      { name: "Shea & Kokum Butter", description: "Locks in hydration all day long.", icon: "Heart" }
    ]
  },
  {
    id: "lush-oats-honey",
    name: "LUSH OATS HONEY",
    subtitle: "Powdered Oats • Oats Milk • Raw Honey • Vanilla",
    badge: "POPULAR",
    price: 330,
    originalPrice: 400,
    benefits: ["Softening", "Soothing Care"],
    tags: ["Hydrating", "Baby Friendly"],
    category: "Fresh & Clean",
    skinFocus: "Soothing Moisture, Calm Skin & Gentle Exfoliation",
    weight: "118 - 123 Gms",
    image: "/soaps/LUSH OATS.png",
    freeFrom: ["Synthetic Fragrances Free", "Sulphate Free"],
    description: "Enriched with Powdered Oats, Oats Milk, Raw Honey, Natural Vanilla Spice, Caramelised Sugar, Aloevera Puree, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate. Colours in compliance with EU & other Global Standards, Premium Fragrance Oils, Rhassoul Red Clay, Natural Kaolin Clay.",
    keyIngredients: [
      { name: "Powdered Oats & Oat Milk", description: "Relieves skin itchiness and calms inflammation.", icon: "Wheat" },
      { name: "Raw Honey & Vanilla Spice", description: "Natural humectants with comforting warm scent.", icon: "Droplet" },
      { name: "Aloevera & Plant Oils", description: "Hydrates sensitive skin barriers.", icon: "Shield" },
      { name: "Rhassoul Clay", description: "Gently cleanses without stripping natural oils.", icon: "Sparkles" }
    ]
  },
  {
    id: "oasis-arabiian-oudh",
    name: "OASIS ARABIIAN OUDH",
    subtitle: "Agar Oil (Oudh) • Sandalwood Oil • Cocoa Butter",
    badge: "NEW",
    price: 402,
    originalPrice: 480,
    benefits: ["Luxury Aroma", "Nourishing"],
    tags: ["Hydrating", "Brightness"],
    category: "Face & Glow",
    skinFocus: "Deep Moisture & Exotic Arabian Oudh Fragrance",
    weight: "118 - 123 Gms",
    image: "/soaps/OASIS ARABIIAN OUDH.png",
    freeFrom: ["Harsh Chemicals Free", "Paraben Free"],
    description: "Enriched with Agar Oil, Sandalwood Oil, AloeVera Puree, Saponified Shea Butter, Cocoa Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Natural Kaolin Clay.",
    keyIngredients: [
      { name: "Pure Agar Oil (Oudh)", description: "Rich, mysterious woody scent that lingers elegantly.", icon: "Sparkles" },
      { name: "Sandalwood Oil", description: "Calms facial skin and brightens complexion.", icon: "Sun" },
      { name: "Cocoa & Shea Butter", description: "Deep conditioning for silky smooth touch.", icon: "HeartHandshake" },
      { name: "Natural Kaolin Clay", description: "Purifies pores softly.", icon: "Leaf" }
    ]
  },
  {
    id: "indus-riverr-cinnamon-bergamot",
    name: "INDUS RIVERR - CINNAMON BERGAMOT",
    subtitle: "Bergamot Essential Oil • Cinnamon • Rose Geranium",
    badge: "POPULAR",
    price: 280,
    originalPrice: 350,
    benefits: ["Purifying", "Freshness"],
    tags: ["Brightness", "Hydrating"],
    category: "Fresh & Clean",
    skinFocus: "Purifying Spice & Citrus Refreshment",
    weight: "118 - 123 Gms",
    image: "/soaps/INDUS RIVERR - CINNAMON BERGAMOT.png",
    freeFrom: ["Harsh Chemicals Free", "Paraben Free"],
    description: "Enriched with Bergamot Essential Oil, Citrus Extract, Cinnamon Essential Oil, Rose Geranium Oil, AloeVera Puree, Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Pink French Clay, Natural Kaolin Clay.",
    keyIngredients: [
      { name: "Bergamot & Citrus Extract", description: "Tones oil production and brightens skin.", icon: "Sun" },
      { name: "Cinnamon Essential Oil", description: "Warming spice oil that boosts micro-circulation.", icon: "Zap" },
      { name: "Rose Geranium Oil", description: "Harmonizes floral notes and balances skin tone.", icon: "Flower2" },
      { name: "Pink French Clay", description: "Smooths skin and absorbs micro-impurities.", icon: "Sparkles" }
    ]
  },
  {
    id: "chandaan-gold-face-soap",
    name: "CHANDAAN GOLD Face Soap",
    subtitle: "Sandalwood • Wild Turmeric • Pure Ghee • Brazilian Golden Clay",
    badge: "ALL TIME FAVOURITE",
    price: 402,
    originalPrice: 490,
    benefits: ["Brightening", "Natural Glow", "Moisturising"],
    tags: ["Brightness", "Hydrating", "Tan Removal"],
    category: "Face & Glow",
    skinFocus: "Brightening, Moisturising & Golden Radiance",
    weight: "118 - 123 Gms",
    image: "/soaps/Chandaan Gold Face Soap.png",
    freeFrom: ["Synthetic Fragrances Free", "Harsh Chemicals Free", "Sulphate Free"],
    description: "Crafted with Sandalwood, Fresh Aloe Vera, Thick Milk Cream, Wild Turmeric, Pure Ghee, Olive Oil, Almond Oil, Shea Butter, Kokum Butter, Brazilian Golden Clay & French Red Clay.",
    keyIngredients: [
      { name: "Sandalwood & Wild Turmeric", description: "Soothes skin and imparts a luminous golden glow.", icon: "Sun" },
      { name: "Thick Milk Cream & Pure Ghee", description: "Deeply hydrates and restores skin vitality.", icon: "Droplet" },
      { name: "Brazilian Golden Clay", description: "Lifts dull skin layer and boosts radiance.", icon: "Sparkles" },
      { name: "Shea & Kokum Butter", description: "Rich in vitamins to soften and protect skin.", icon: "HeartHandshake" }
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}
