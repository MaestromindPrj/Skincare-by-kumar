export interface ProductVariant {
  id: string;
  name: string;
  price?: number;
  originalPrice?: number;
  weight?: string;
  image: string;
  colorCode?: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  badge?: "POPULAR" | "ALL TIME FAVOURITE" | "KIDS' FAVOURITE" | "BEST SELLER" | "NEW" | "SPF 50" | "SPF 30" | "AMMONIA FREE" | "DETOX" | "MEN SPECIAL" | string;
  badgeImage?: string;
  price: number;
  originalPrice: number;
  benefits: string[];
  tags: string[];
  category: "Handcrafted Soaps" | "Hair Care" | "Sun Care & SPF" | "Face & Glow" | "Fresh & Clean" | "Kid's Care" | string;
  brand?: "Skincare By Kumar" | "Teotema" | "Malibu Suncare" | "KleenOWipe" | string;
  description: string;
  directions?: string;
  skinFocus: string;
  weight: string;
  image?: string;
  images?: string[];
  freeFrom: string[];
  variantLabel?: string;
  variants?: ProductVariant[];
  keyIngredients: {
    name: string;
    description: string;
    icon: string;
  }[];
}

export const PRODUCTS: Product[] = [
  {
    "id": "zaap-men-special-soap",
    "name": "Zaap Men Special Handcrafted Soap",
    "subtitle": "Activated Charcoal • Yellow Clay • Mint & Ylang-Ylang",
    "badge": "MEN'S SPECIAL",
    "price": 420,
    "originalPrice": 490,
    "benefits": [
      "Men's Special",
      "Deep Pore Detox",
      "Fresh & Refreshing"
    ],
    "tags": [
      "Men's Special",
      "Handcrafted Soaps",
      "Brightness",
      "Hydrating"
    ],
    "category": "Handcrafted Soaps",
    "brand": "Skincare By Kumar",
    "skinFocus": "Men's Skin Detox, Deep Cleansing & Invigorating Freshness",
    "weight": "118 - 123 Gms",
    "image": "/soaps/Zaap (2).png",
    "images": [
      "/soaps/Zaap (2).png"
    ],
    "freeFrom": [
      "Synthetic Fragrances Free",
      "Harsh Chemicals Free",
      "Paraben Free",
      "Sulphate Free"
    ],
    "description": "Enriched with Ylang-Ylang oil, Cassia Oil, Anise Oil, Geranium Oil, Mint Extract, Menthol, Fresh Aloevera Puree, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards, Premium Fragrance Oils, Activated Charcoal, Natural Kaolin Clay, Bentonite Yellow Clay.",
    "directions": "Lather with warm water between hands, gently massage onto damp skin in circular motions, and rinse thoroughly.",
    "keyIngredients": [
      {
        "name": "Activated Charcoal & Kaolin Clay",
        "description": "Extracts deep-seated toxins, dirt, and excess sebum.",
        "icon": "Shield"
      },
      {
        "name": "Menthol & Mint Extract",
        "description": "Provides an immediate cooling, invigorating fresh feel.",
        "icon": "Sparkles"
      },
      {
        "name": "Shea & Kokum Butter",
        "description": "Rich botanical fats that protect and nourish skin barrier.",
        "icon": "Heart"
      },
      {
        "name": "Ylang-Ylang & Geranium Oils",
        "description": "Therapeutic botanical essential oils for skin balancing.",
        "icon": "Leaf"
      }
    ]
  },
  {
    "id": "french-red-clay-face-soap",
    "name": "Red Clay Brightening Face Bar",
    "subtitle": "Organic French Red Clay • Wild Turmeric • Milk Cream",
    "badge": "POPULAR",
    "price": 330,
    "originalPrice": 390,
    "benefits": [
      "Brightening",
      "Deep Cleansing"
    ],
    "tags": [
      "Brightness",
      "Hydrating",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Deep Pore Cleansing, Complexion Brightening & Moisture Balance",
    "weight": "118 - 123 Gms",
    "image": "/soaps/FRENCH RED.png",
    "freeFrom": [
      "Synthetic Fragrances Free",
      "Harsh Chemicals Free",
      "Paraben Free"
    ],
    "description": "Enriched with Organic French Red Clay, Thick Milk Cream, Almond Milk, Wild Turmeric Powder, AloeVera Puree, Saponified Shea Butter, Kokum Butter, Pure Ghee, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate. Premium Fragrance Oils, Rhassoul Red Clay, Natural Kaolin Clay.",
    "directions": "Lather with warm water between hands, gently massage onto damp skin in circular motions, and rinse thoroughly.",
    "keyIngredients": [
      {
        "name": "Organic French Red Clay",
        "description": "Purifies pores and boosts natural circulation.",
        "icon": "Sparkles"
      },
      {
        "name": "Thick Milk Cream & Pure Ghee",
        "description": "Deeply nourishes and locks in soft skin hydration.",
        "icon": "Droplet"
      },
      {
        "name": "Wild Turmeric Powder",
        "description": "Evens out skin tone and reveals natural radiance.",
        "icon": "Sun"
      },
      {
        "name": "Shea & Kokum Butter",
        "description": "Provides essential fatty acids to protect skin barrier.",
        "icon": "Shield"
      }
    ]
  },
  {
    "id": "kid-soap-extra-luxurious",
    "name": "Calendula Gentle Baby Bar",
    "subtitle": "Calendula Flowers • Almond Milk • Mango Butter",
    "badge": "KIDS' FAVOURITE",
    "price": 510,
    "originalPrice": 590,
    "benefits": [
      "Ultra Gentle",
      "Hydrating"
    ],
    "tags": [
      "Baby Friendly",
      "Hydrating",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Extra Gentle Care, Hypoallergenic Moisture & Sensitive Skin",
    "weight": "118 - 123 Gms",
    "image": "/soaps/KIDDOS.png",
    "freeFrom": [
      "Tear-free Formula",
      "Harsh Chemicals Free",
      "Sulphate Free"
    ],
    "description": "Enriched with Almond Oil, Calendula Flowers infused Saponified Virgin Olive Oil, Virgin Coconut Oil, Fresh Aloevera Puree, Thick Milk Cream Malai, Raw Honey, Almond Milk, Organic Mango Butter, Organic Kokum Butter, Organic Palmate, Castor Oil, Powdered Calendula Flowers, Premium Fragrance Oils, Natural Rose Pink Clay, Natural Kaolin Clay.",
    "directions": "Gently lather over wet skin of infants or children, and rinse gently with tepid water.",
    "keyIngredients": [
      {
        "name": "Calendula Flowers",
        "description": "Infused in virgin olive oil to soothe sensitive young skin.",
        "icon": "Leaf"
      },
      {
        "name": "Raw Honey & Malai",
        "description": "Natural humectants that keep skin supple and smooth.",
        "icon": "Droplet"
      },
      {
        "name": "Organic Mango & Kokum Butter",
        "description": "Rich plant butters for maximum hydration.",
        "icon": "Heart"
      },
      {
        "name": "Rose Pink & Kaolin Clay",
        "description": "Ultra-mild natural clays for gentle detoxification.",
        "icon": "Sparkles"
      }
    ]
  },
  {
    "id": "caffe-latte-creamy-exfoliating-spa",
    "name": "Coffee & Cream Velvet Bar",
    "subtitle": "Coffee Grounds • Coffee Bean Oil • Milk Cream Malai",
    "badge": "BEST SELLER",
    "price": 402,
    "originalPrice": 470,
    "benefits": [
      "Exfoliating",
      "Skin Smoothing"
    ],
    "tags": [
      "Hydrating",
      "Brightness",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Body Exfoliation, Skin Softening & Circulation Boost",
    "weight": "118 - 123 Gms",
    "image": "/soaps/CAFFE LATTE.png",
    "freeFrom": [
      "Synthetic Fragrances Free",
      "Harsh Chemicals Free",
      "Paraben Free"
    ],
    "description": "Enriched with Thick Milk Cream (Malai), Coffee Grounds, Coffee Bean Oil, Brewed Coffee Decoction, Powdered Herbs, Wild Turmeric Powder, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Natural Rhassoul Clay, Natural Kaolin Clay.",
    "directions": "Massage gently onto wet skin in circular motions to buff away dead cells and stimulate circulation, then rinse.",
    "keyIngredients": [
      {
        "name": "Coffee Grounds & Bean Oil",
        "description": "Stimulates skin and buff away dead skin cells.",
        "icon": "Sparkles"
      },
      {
        "name": "Thick Milk Cream (Malai)",
        "description": "Rich natural cream for velvety smooth moisture.",
        "icon": "Droplet"
      },
      {
        "name": "Wild Turmeric & Herbs",
        "description": "Botanical blend that brightens and tones.",
        "icon": "Sun"
      },
      {
        "name": "Rhassoul & Kaolin Clay",
        "description": "Absorbs excess oil while restoring mineral balance.",
        "icon": "Leaf"
      }
    ]
  },
  {
    "id": "caffe-berrie-creamy-exfoliating-spa",
    "name": "Wild Berry Glow Bar",
    "subtitle": "Pomegranate Oil • Strawberry Oil • Coffee Grounds",
    "badge": "NEW",
    "price": 402,
    "originalPrice": 470,
    "benefits": [
      "Exfoliating",
      "Radiant Glow"
    ],
    "tags": [
      "Brightness",
      "Hydrating",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Antioxidant Polish, Dead Skin Removal & Berry Glow",
    "weight": "118 - 123 Gms",
    "image": "/soaps/CAFFE BERRIE.png",
    "freeFrom": [
      "Harsh Chemicals Free",
      "Paraben Free",
      "Sulphate Free"
    ],
    "description": "Enriched with Thick Milk Cream (Malai), Coffee Grounds, Coffee Bean Oil, Brewed Coffee Decoction, Powdered Herbs, Wild Turmeric Powder, Pomegranate Oil, Strawberry Oil, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Natural French Red Clay, Natural Rose Pink Clay, Natural Kaolin Clay.",
    "directions": "Work into a creamy berry lather, gently massage across face and neck, and rinse clean.",
    "keyIngredients": [
      {
        "name": "Pomegranate & Strawberry Oil",
        "description": "Fruit oils packed with vitamins for youthful skin.",
        "icon": "Heart"
      },
      {
        "name": "Coffee Decoction & Grounds",
        "description": "Invigorating scrub texture for glowing skin.",
        "icon": "Sparkles"
      },
      {
        "name": "French Red & Rose Pink Clay",
        "description": "Tones complexion and improves skin texture.",
        "icon": "Leaf"
      },
      {
        "name": "Milk Cream & Shea Butter",
        "description": "Deeply quenches dry skin post-exfoliation.",
        "icon": "Droplet"
      }
    ]
  },
  {
    "id": "caffe-orange-creamy-milk-exfoliation-spa",
    "name": "Orange & Coffee Tan Removal Bar",
    "subtitle": "Orange Peel Powder • Orange Oil • Fresh Juice",
    "badge": "POPULAR",
    "price": 402,
    "originalPrice": 470,
    "benefits": [
      "Tan Removal",
      "Exfoliating"
    ],
    "tags": [
      "Tan Removal",
      "Brightness",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Sun Tan Reversal, Vitamin C Polishing & Fresh Exfoliation",
    "weight": "118 - 123 Gms",
    "image": "/soaps/CAFFE ORANGE.png",
    "freeFrom": [
      "Synthetic Fragrances Free",
      "Harsh Chemicals Free"
    ],
    "description": "Enriched with Thick Milk Cream (Malai), Coffee Grounds, Coffee Bean Oil, Brewed Coffee Decoction, Powdered Herbs, Wild Turmeric Powder, Orange Oil, Orange Extract, Orange Peel Powder, Fresh Orange Juice, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Natural French Red Clay, Natural Rhassoul Clay, Natural Kaolin Clay.",
    "directions": "Lather over wet skin, allowing the zesty citrus and coffee to gently exfoliate, then rinse well.",
    "keyIngredients": [
      {
        "name": "Fresh Orange Juice & Peel Powder",
        "description": "Rich in Vitamin C to clarify sun tan and blemishes.",
        "icon": "Sun"
      },
      {
        "name": "Coffee Grounds & Decoction",
        "description": "Gentle natural scrub for silky smooth finish.",
        "icon": "Sparkles"
      },
      {
        "name": "Orange Essential Oil",
        "description": "Lifts spirits with a bright citrus scent.",
        "icon": "Zap"
      },
      {
        "name": "Shea & Kokum Butter",
        "description": "Prevents skin drying during exfoliation.",
        "icon": "Shield"
      }
    ]
  },
  {
    "id": "siberiian-waters-cologne-spa",
    "name": "Cologne Spice Fresh Bar",
    "subtitle": "Cologne Spice • Rosemary & Cypress Oil • AloeVera",
    "badge": "POPULAR",
    "price": 280,
    "originalPrice": 350,
    "benefits": [
      "Active Freshness",
      "Deodorizing"
    ],
    "tags": [
      "Brightness",
      "Hydrating",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Active Cleanse, Long-Lasting Aroma & Skin Invigoration",
    "weight": "118 - 123 Gms",
    "image": "/soaps/SIBERIIAN.png",
    "freeFrom": [
      "Synthetic Fragrances Free",
      "Harsh Chemicals Free"
    ],
    "description": "Enriched with Cologne, Rosemary Essential Oil, Cypress Essential Oil, AloeVera Puree, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Natural Kaolin Clay.",
    "directions": "Apply onto damp skin, enjoy the crisp cooling aroma, and rinse thoroughly.",
    "keyIngredients": [
      {
        "name": "Rosemary & Cypress Essential Oil",
        "description": "Soothing botanical notes that tone and invigorate skin.",
        "icon": "Leaf"
      },
      {
        "name": "Cologne Spice Essence",
        "description": "Delivers an instant burst of long-lasting fresh aroma.",
        "icon": "Zap"
      },
      {
        "name": "AloeVera Puree",
        "description": "Deeply cools and rehydrates skin post-activity.",
        "icon": "Droplet"
      },
      {
        "name": "Shea & Kokum Butter",
        "description": "Nourishes deeply without leaving greasy residue.",
        "icon": "Heart"
      }
    ]
  },
  {
    "id": "ocean-waters-cologne-spa",
    "name": "Aqua Citrus Purifying Bar",
    "subtitle": "Bergamot & Lime • Lemon Essential Oil • AloeVera",
    "badge": "BEST SELLER",
    "price": 280,
    "originalPrice": 350,
    "benefits": [
      "Pore Purifying",
      "Oil Control"
    ],
    "tags": [
      "Brightness",
      "Hydrating",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Pore Clarifying, Excess Sebum Balance & Aqua Freshness",
    "weight": "118 - 123 Gms",
    "image": "/soaps/OCEAN WATERS.png",
    "freeFrom": [
      "Harsh Chemicals Free",
      "Paraben Free"
    ],
    "description": "Enriched with Orange Peel Extract, Bergamot Essential Oil, Lime Essential Oil, Lemon Essential Oil, AloeVera Puree, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Yellow Bentonite Clay, Natural Kaolin Clay.",
    "directions": "Lather across body during showers for a crisp, oceanic revitalizing experience.",
    "keyIngredients": [
      {
        "name": "Bergamot, Lime & Lemon Oils",
        "description": "Energizing citrus trio that purifies pores and balances oil.",
        "icon": "Sun"
      },
      {
        "name": "Yellow Bentonite & Kaolin Clay",
        "description": "Draws out micro-toxins and excess skin sebum.",
        "icon": "Sparkles"
      },
      {
        "name": "AloeVera Puree",
        "description": "Restores soothing hydration without heaviness.",
        "icon": "Droplet"
      },
      {
        "name": "Orange Peel Extract",
        "description": "Natural botanical astringent for refreshed skin tone.",
        "icon": "Leaf"
      }
    ]
  },
  {
    "id": "zaarraa-oudh-glow-face-soap",
    "name": "Spearmint & Green Tea Cooling Bar",
    "subtitle": "Spearmint Oil • Green Tea Extract • Lime & AloeVera",
    "badge": "POPULAR",
    "price": 402,
    "originalPrice": 490,
    "benefits": [
      "Cooling Freshness",
      "Anti-Pollution"
    ],
    "tags": [
      "Brightness",
      "Hydrating",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Cooling Freshness, Anti-Pollution & Daily Oil Balance",
    "weight": "118 - 123 Gms",
    "image": "/soaps/ZAARRAA.png",
    "freeFrom": [
      "Synthetic Fragrances Free",
      "Harsh Chemicals Free"
    ],
    "description": "Enriched with Spearmint Oil, Orange Peel Extract, Green Tea Extract, Lime Oil, AloeVera Puree, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate. Colours in compliance with EU standards, Natural Kaolin Clay.",
    "directions": "Massage the cooling spearmint lather over face and body, and rinse with tepid water.",
    "keyIngredients": [
      {
        "name": "Spearmint & Lime Oil",
        "description": "Delivers an invigorating, cooling crisp freshness.",
        "icon": "Zap"
      },
      {
        "name": "Green Tea Extract",
        "description": "Rich in antioxidants that protect against urban pollution.",
        "icon": "Leaf"
      },
      {
        "name": "AloeVera Puree",
        "description": "Deeply hydrates and restores skin moisture barrier.",
        "icon": "Droplet"
      },
      {
        "name": "Shea & Kokum Butter",
        "description": "Leaves skin soft and nourished without tightness.",
        "icon": "Heart"
      }
    ]
  },
  {
    "id": "sanskruti-shahi-ubtan",
    "name": "Shahi Kesar Ubtan Glow Bar",
    "subtitle": "Kesar Ubtan • Sandalwood Oil • Wild Turmeric",
    "badge": "ALL TIME FAVOURITE",
    "price": 330,
    "originalPrice": 420,
    "benefits": [
      "Tan Removal",
      "Radiant Glow"
    ],
    "tags": [
      "Tan Removal",
      "Brightness",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Traditional Ayurvedic Tan Removal & Bridal Radiance",
    "weight": "118 - 123 Gms",
    "image": "/soaps/SANSKRUTI.png",
    "freeFrom": [
      "Synthetic Fragrances Free",
      "Harsh Chemicals Free"
    ],
    "description": "Enriched with Kesar Ubtan (Natural Herbal Scrub made by mixing Healing Powdered Herbs with Saffron), Sandalwood Oil, Sandalwood Powder, Wild Turmeric Root Powder, Turmeric Root Oil, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards, Premium Fragrance Oils, Rhassoul Red Clay, Kaolin Clay.",
    "directions": "Gently massage the herbal ubtan lather over face and body to clear sun tan, then rinse off.",
    "keyIngredients": [
      {
        "name": "Kesar Ubtan & Saffron",
        "description": "Ayurvedic herbal blend that clears sun tan.",
        "icon": "Sun"
      },
      {
        "name": "Sandalwood Oil & Powder",
        "description": "Soothes sun burn and imparts timeless royal scent.",
        "icon": "Sparkles"
      },
      {
        "name": "Wild Turmeric Root Powder",
        "description": "Natural antiseptic that illuminates dull skin.",
        "icon": "Leaf"
      },
      {
        "name": "Rhassoul Red Clay",
        "description": "Rich in minerals that refine skin texture.",
        "icon": "Shield"
      }
    ]
  },
  {
    "id": "almond-cream-spa-almond-milk",
    "name": "Sweet Almond Deep Moisture Bar",
    "subtitle": "Virgin Sweet Almond Oil • Fresh Almond Milk • AloeVera",
    "badge": "BEST SELLER",
    "price": 303,
    "originalPrice": 380,
    "benefits": [
      "Deep Hydration",
      "Nourishing"
    ],
    "tags": [
      "Hydrating",
      "Baby Friendly",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Dry Skin Relief, Lipid Barrier Repair & Velvet Softness",
    "weight": "118 - 123 Gms",
    "image": "/soaps/ALMOND CREAM.png",
    "freeFrom": [
      "Synthetic Fragrances Free",
      "Harsh Chemicals Free"
    ],
    "description": "Enriched with Virgin Sweet Almond Oil, Almond Extract, Almond Milk, Aloevera Puree, Saponified Shea Butter, Kokum Butter, Olive Oil, Coconut Oil, Castor Oil, Organic Palmate. Colours in compliance with EU & other Global Standards, Almond Fragrance Oil, Natural French Red Clay, Natural Kaolin Clay.",
    "directions": "Work into a creamy milk foam, massage over dry skin areas, and rinse clean.",
    "keyIngredients": [
      {
        "name": "Virgin Sweet Almond Oil",
        "description": "Packed with Vitamin E to restore dry skin elasticity.",
        "icon": "Sparkles"
      },
      {
        "name": "Fresh Almond Milk",
        "description": "Provides creamy, deeply moisturising skin feel.",
        "icon": "Droplet"
      },
      {
        "name": "French Red & Kaolin Clay",
        "description": "Smooths dry patches gently.",
        "icon": "Leaf"
      },
      {
        "name": "Shea & Kokum Butter",
        "description": "Locks in hydration all day long.",
        "icon": "Heart"
      }
    ]
  },
  {
    "id": "lush-oats-honey",
    "name": "Oat Milk & Honey Soothing Bar",
    "subtitle": "Powdered Oats • Oats Milk • Raw Honey • Vanilla",
    "badge": "POPULAR",
    "price": 330,
    "originalPrice": 400,
    "benefits": [
      "Soothing Care",
      "Softening"
    ],
    "tags": [
      "Hydrating",
      "Baby Friendly",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Calming Sensitive Skin, Anti-Itch Relief & Gentle Exfoliation",
    "weight": "118 - 123 Gms",
    "image": "/soaps/LUSH OATS.png",
    "freeFrom": [
      "Synthetic Fragrances Free",
      "Sulphate Free"
    ],
    "description": "Enriched with Powdered Oats, Oats Milk, Raw Honey, Natural Vanilla Spice, Caramelised Sugar, Aloevera Puree, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate. Colours in compliance with EU & other Global Standards, Premium Fragrance Oils, Rhassoul Red Clay, Natural Kaolin Clay.",
    "directions": "Smooth over sensitive or irritated skin, let the oat milk soothe, and rinse gently.",
    "keyIngredients": [
      {
        "name": "Powdered Oats & Oat Milk",
        "description": "Relieves skin itchiness and calms inflammation.",
        "icon": "Leaf"
      },
      {
        "name": "Raw Honey & Vanilla Spice",
        "description": "Natural humectants with comforting warm scent.",
        "icon": "Droplet"
      },
      {
        "name": "Aloevera & Plant Oils",
        "description": "Hydrates sensitive skin barriers.",
        "icon": "Shield"
      },
      {
        "name": "Rhassoul Clay",
        "description": "Gently cleanses without stripping natural oils.",
        "icon": "Sparkles"
      }
    ]
  },
  {
    "id": "oasis-arabiian-oudh",
    "name": "Arabian Oudh Nourishing Bar",
    "subtitle": "Agarwood Oudh • Sandalwood Oil • Cocoa Butter",
    "badge": "NEW",
    "price": 402,
    "originalPrice": 480,
    "benefits": [
      "Rich Moisture",
      "Aromatherapy"
    ],
    "tags": [
      "Hydrating",
      "Brightness",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Deep Skin Conditioning & Exotic Arabian Oudh Fragrance",
    "weight": "118 - 123 Gms",
    "image": "/soaps/OASIS ARABIIAN OUDH.png",
    "freeFrom": [
      "Harsh Chemicals Free",
      "Paraben Free"
    ],
    "description": "Enriched with Agar Oil, Sandalwood Oil, AloeVera Puree, Saponified Shea Butter, Cocoa Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Natural Kaolin Clay.",
    "directions": "Lather generously, inhale the warm woody oudh notes, and rinse with warm water.",
    "keyIngredients": [
      {
        "name": "Pure Agar Oil (Oudh)",
        "description": "Rich, mysterious woody scent that lingers elegantly.",
        "icon": "Sparkles"
      },
      {
        "name": "Sandalwood Oil",
        "description": "Calms facial skin and brightens complexion.",
        "icon": "Sun"
      },
      {
        "name": "Cocoa & Shea Butter",
        "description": "Deep conditioning for silky smooth touch.",
        "icon": "Heart"
      },
      {
        "name": "Natural Kaolin Clay",
        "description": "Purifies pores softly.",
        "icon": "Leaf"
      }
    ]
  },
  {
    "id": "indus-riverr-cinnamon-bergamot",
    "name": "Spiced Cinnamon Detox Bar",
    "subtitle": "Bergamot Essential Oil • Cinnamon • Rose Geranium",
    "badge": "POPULAR",
    "price": 280,
    "originalPrice": 350,
    "benefits": [
      "Circulation Boost",
      "Purifying"
    ],
    "tags": [
      "Brightness",
      "Hydrating",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Warming Micro-Circulation, Deep Detox & Citrus Freshness",
    "weight": "118 - 123 Gms",
    "image": "/soaps/INDUS RIVERR - CINNAMON BERGAMOT.png",
    "freeFrom": [
      "Harsh Chemicals Free",
      "Paraben Free"
    ],
    "description": "Enriched with Bergamot Essential Oil, Citrus Extract, Cinnamon Essential Oil, Rose Geranium Oil, AloeVera Puree, Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Pink French Clay, Natural Kaolin Clay.",
    "directions": "Work into a fragrant, spicy lather and massage over body for revitalizing warmth.",
    "keyIngredients": [
      {
        "name": "Bergamot & Citrus Extract",
        "description": "Tones oil production and brightens skin.",
        "icon": "Sun"
      },
      {
        "name": "Cinnamon Essential Oil",
        "description": "Warming spice oil that boosts micro-circulation.",
        "icon": "Zap"
      },
      {
        "name": "Rose Geranium Oil",
        "description": "Harmonizes floral notes and balances skin tone.",
        "icon": "Sparkles"
      },
      {
        "name": "Pink French Clay",
        "description": "Smooths skin and absorbs micro-impurities.",
        "icon": "Shield"
      }
    ]
  },
  {
    "id": "chandaan-gold-face-soap",
    "name": "Sandalwood Golden Glow Face Bar",
    "subtitle": "Sandalwood • Wild Turmeric • Pure Ghee • Brazilian Golden Clay",
    "badge": "ALL TIME FAVOURITE",
    "price": 402,
    "originalPrice": 490,
    "benefits": [
      "Brightening",
      "Natural Glow",
      "Moisturising"
    ],
    "tags": [
      "Brightness",
      "Hydrating",
      "Tan Removal",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Complexion Brightening, Moisture Infusion & Golden Radiance",
    "weight": "118 - 123 Gms",
    "image": "/soaps/Chandaan Gold Face Soap.png",
    "freeFrom": [
      "Synthetic Fragrances Free",
      "Harsh Chemicals Free",
      "Sulphate Free"
    ],
    "description": "Crafted with Sandalwood, Fresh Aloe Vera, Thick Milk Cream, Wild Turmeric, Pure Ghee, Olive Oil, Almond Oil, Shea Butter, Kokum Butter, Brazilian Golden Clay & French Red Clay.",
    "directions": "Apply rich golden lather onto face and neck, massage for 1 minute to nourish skin, then rinse.",
    "keyIngredients": [
      {
        "name": "Sandalwood & Wild Turmeric",
        "description": "Soothes skin and imparts a luminous golden glow.",
        "icon": "Sun"
      },
      {
        "name": "Thick Milk Cream & Pure Ghee",
        "description": "Deeply hydrates and restores skin vitality.",
        "icon": "Droplet"
      },
      {
        "name": "Brazilian Golden Clay",
        "description": "Lifts dull skin layer and boosts radiance.",
        "icon": "Sparkles"
      },
      {
        "name": "Shea & Kokum Butter",
        "description": "Rich in vitamins to soften and protect skin.",
        "icon": "Heart"
      }
    ]
  },
  {
    "id": "teotema-ppd-free-ammonia-free-premium-hair-color",
    "name": "Teotema PPD Free, Ammonia Free, Premium Hair Colour",
    "subtitle": "PPD Free, Ammonia Free, Premium Hair Colour • 100 ml",
    "badge": "AMMONIA FREE",
    "price": 999,
    "originalPrice": 1149,
    "benefits": [
      "PPD Free",
      "Ammonia Free",
      "Long Lasting"
    ],
    "tags": [
      "Hair Care",
      "Hair Colour"
    ],
    "category": "Hair Care",
    "brand": "Teotema",
    "skinFocus": "Gentle Gray Coverage & Luminous Italian Color",
    "weight": "100 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/HC-1.png?v=1673456401",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/HC-1.png?v=1673456401",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Hair-color-tentcard.jpg?v=1681814882",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/HC-2.png?v=1673456406",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.1-Black.jpg?v=1681814883",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.3-DarkBrown.jpg?v=1681814879",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.4-Brown.jpg?v=1681814881",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.5-LightBrown.jpg?v=1681814879",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.4.7-CocoaBrown.jpg?v=1681814882",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.5.35-LightGoldenMahoganyBrown.jpg?v=1681814878",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.5.99-LightCocoaBrown.jpg?v=1681814883",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.6-DarkBlonde.jpg?v=1681814880",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.6.32-DarkVioletGoldBlonde.jpg?v=1681814877",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.6.73-DarkSandGoldBlonde.jpg?v=1681814882",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.6.99-DarkHazelnutBlonde.jpg?v=1681814880",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.7-Blonde.jpg?v=1681814884",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.7.1-AshBlonde.jpg?v=1681814879",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.7.3-GoldenBlonde.jpg?v=1681814881",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.7.43-CopperGoldenBlonde.jpg?v=1681814880",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.7.99-HazelnutBlonde.jpg?v=1681814883",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.8-LightBlonde.jpg?v=1681814879",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.9-VeryLightBlonde.jpg?v=1681814881",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.9.1-VeryLightAshBlonde19.jpg?v=1681814881",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.9.2-VeryLightVioletBlond.jpg?v=1681814882",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.9.23-VeryLightVioletGoldenBlonde.jpg?v=1681814883",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.10-ExtraLightBlonde.jpg?v=1681814884",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.1-Black_81555bd4-32cc-4eb6-a5a3-4273a77d63cb.jpg?v=1681814878",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.10.31-ExtraLightGoldenAshBlonde.jpg?v=1681814882"
    ],
    "freeFrom": [
      "Ammonia Free",
      "PPD Free",
      "Gentle Formula"
    ],
    "variantLabel": "Choose Your Shade",
    "variants": [
      {
        "id": "1-black",
        "name": "1 - Black",
        "colorCode": "#1B1B1B",
        "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.1-Black.jpg?v=1681814883"
      },
      {
        "id": "3-dark-brown",
        "name": "3 - Dark Brown",
        "colorCode": "#2E1E14",
        "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.3-DarkBrown.jpg?v=1681814879"
      },
      {
        "id": "4-brown",
        "name": "4 - Brown",
        "colorCode": "#3D271D",
        "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.4-Brown.jpg?v=1681814881"
      },
      {
        "id": "5-light-brown",
        "name": "5 - Light Brown",
        "colorCode": "#5C3A21",
        "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.5-LightBrown.jpg?v=1681814879"
      },
      {
        "id": "5.35-light-golden-mahogany-brown",
        "name": "5.35 - Light Golden Mahogany Brown",
        "colorCode": "#63351C",
        "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.5.35-LightGoldenMahoganyBrown.jpg?v=1681814878"
      },
      {
        "id": "5.99-light-cocoa-brown",
        "name": "5.99 - Light Cocoa Brown",
        "colorCode": "#4A2E1B",
        "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.5.99-LightCocoaBrown.jpg?v=1681814883"
      },
      {
        "id": "6-dark-blonde",
        "name": "6 - Dark Blonde",
        "colorCode": "#7A5432",
        "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.6-DarkBlonde.jpg?v=1681814880"
      },
      {
        "id": "6.73-dark-sand-gold-blonde",
        "name": "6.73 - Dark Sand Gold Blonde",
        "colorCode": "#8C6538",
        "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.6.73-DarkSandGoldBlonde.jpg?v=1681814882"
      },
      {
        "id": "6.99-dark-hazelnut-blonde",
        "name": "6.99 - Dark Hazelnut Blonde",
        "colorCode": "#6B492B",
        "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.6.99-DarkHazelnutBlonde.jpg?v=1681814880"
      },
      {
        "id": "7-blonde",
        "name": "7 - Blonde",
        "colorCode": "#9E7B4F",
        "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.7-Blonde.jpg?v=1681814884"
      },
      {
        "id": "7.1-ash-blonde",
        "name": "7.1 - Ash Blonde",
        "colorCode": "#8A7968",
        "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.7.1-AshBlonde.jpg?v=1681814879"
      },
      {
        "id": "7.99-hazelnut-blonde",
        "name": "7.99 - Hazelnut Blonde",
        "colorCode": "#805A3B",
        "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.7.99-HazelnutBlonde.jpg?v=1681814883"
      },
      {
        "id": "8-light-blonde",
        "name": "8 - Light Blonde",
        "colorCode": "#B89768",
        "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.8-LightBlonde.jpg?v=1681814879"
      },
      {
        "id": "9-very-light-blonde",
        "name": "9 - Very light Blonde",
        "colorCode": "#D4B886",
        "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.9-VeryLightBlonde.jpg?v=1681814881"
      },
      {
        "id": "10-extra-light-blonde",
        "name": "10 - Extra Light Blonde",
        "colorCode": "#E6D0A1",
        "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.10-ExtraLightBlonde.jpg?v=1681814884"
      }
    ],
    "description": "Happy New Hair with Teotema Milano. A gentle, salon-grade hair colouring formula developed in Italy without Ammonia or PPD to protect sensitive scalps while delivering rich, multi-dimensional, vibrant and long-lasting colour.",
    "directions": "Mix with designated developer as per salon ratio, apply evenly to sections, process according to desired tone, and rinse thoroughly.",
    "keyIngredients": [
      {
        "name": "Micro-Pigment Technology",
        "description": "Even, high-definition tonal penetration.",
        "icon": "Sparkles"
      },
      {
        "name": "Conditioning Botanical Base",
        "description": "Protects cuticle shine during application.",
        "icon": "Leaf"
      },
      {
        "name": "Hydrating Oils",
        "description": "Prevents dryness and maintains vibrant sheen.",
        "icon": "Droplet"
      }
    ]
  },
  {
    "id": "teotema-rebuilding-hair-mask",
    "name": "Rebuilding Hair Mask",
    "subtitle": "Rebuilding Hair Mask • Teotema • SLS Free • Paraben Free",
    "badge": "BEST SELLER",
    "price": 2399,
    "originalPrice": 2759,
    "benefits": [
      "Intense Hydration",
      "Damage Repair"
    ],
    "tags": [
      "Hair Care",
      "Hair Mask",
      "Hydrating"
    ],
    "category": "Hair Care",
    "brand": "Teotema",
    "skinFocus": "Deep Fiber Reconstruction & Frizz Elimination",
    "weight": "250 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN08891.jpg?v=1780680605",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN08891.jpg?v=1780680605",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN08893.jpg?v=1780680605"
    ],
    "freeFrom": [
      "SLS & SLES Free",
      "Paraben Free",
      "Made in Italy"
    ],
    "description": "Intense hair mask enriched with natural keratin extract to reconstruct weakened and damaged hair fibers right from the root, restoring strength, resilience, and silky softness.",
    "directions": "Apply evenly to washed, damp hair, massage thoroughly into lengths, leave on for 7-10 minutes, and rinse completely.",
    "keyIngredients": [
      {
        "name": "Keratin & Argan Matrix",
        "description": "Fills in microscopic hair shaft damage.",
        "icon": "Sparkles"
      },
      {
        "name": "Macadamia Oil",
        "description": "Imparts luminous gloss and silky softness.",
        "icon": "Droplet"
      },
      {
        "name": "Amino Complex",
        "description": "Reinforces tensile strength and elasticity.",
        "icon": "Shield"
      }
    ]
  },
  {
    "id": "style-hair-paste-teotema",
    "name": "Obstinate Fibrous",
    "subtitle": "Obstinate Fibrous • Style Hair Paste • Teotema",
    "price": 2399,
    "originalPrice": 2759,
    "benefits": [
      "Flexible Hold",
      "Frizz Control"
    ],
    "tags": [
      "Hair Care",
      "Styling"
    ],
    "category": "Hair Care",
    "brand": "Teotema",
    "skinFocus": "Style Definition, Shine & Humidity Shield",
    "weight": "100 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/13_afc93912-fb09-4845-85c3-a387f997c6e4.png?v=1681812521",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/13_afc93912-fb09-4845-85c3-a387f997c6e4.png?v=1681812521",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/14_46f0ce04-5eef-4ea7-89cf-d136fce8c3bc.png?v=1681812531",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/13.png?v=1656320341",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/14.png?v=1668424555"
    ],
    "freeFrom": [
      "SLS & SLES Free",
      "Paraben Free",
      "Made in Italy"
    ],
    "description": "A fibrous styling paste for men and women that allows you to shape, define, and control your hairstyle with medium hold and a natural satin shine.",
    "directions": "Rub a small amount between palms and work through dry or damp hair to shape and sculpt your style.",
    "keyIngredients": [
      {
        "name": "Castor & Mineral Extracts",
        "description": "Defines curls and controls stubborn flyaways.",
        "icon": "Sparkles"
      },
      {
        "name": "Protective Polymers",
        "description": "Shields style against environmental humidity.",
        "icon": "Shield"
      },
      {
        "name": "Glossing Agents",
        "description": "Imparts natural, non-greasy luster.",
        "icon": "Sun"
      }
    ]
  },
  {
    "id": "defining-cream-for-curl-styling-oil",
    "name": "Hair Styling Glaze Oil",
    "subtitle": "Hair Styling Glaze Oil • Defining Cream for Curl • Teotema",
    "price": 2349,
    "originalPrice": 2701,
    "benefits": [
      "Flexible Hold",
      "Frizz Control"
    ],
    "tags": [
      "Hair Care",
      "Styling"
    ],
    "category": "Hair Care",
    "brand": "Teotema",
    "skinFocus": "Style Definition, Shine & Humidity Shield",
    "weight": "200 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/7.png?v=1656320305",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/7.png?v=1656320305",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/8.png?v=1668424496"
    ],
    "freeFrom": [
      "SLS & SLES Free",
      "Paraben Free",
      "Made in Italy"
    ],
    "description": "A lightweight styling glaze infused with Castor Oil to control frizz, define bounce, and impart long-lasting elasticity and shine to wavy and curly hair.",
    "directions": "Apply a small amount to wet or towel-dried hair, distribute evenly from mid-lengths to ends, and diffuse or air-dry.",
    "keyIngredients": [
      {
        "name": "Castor & Mineral Extracts",
        "description": "Defines curls and controls stubborn flyaways.",
        "icon": "Sparkles"
      },
      {
        "name": "Protective Polymers",
        "description": "Shields style against environmental humidity.",
        "icon": "Shield"
      },
      {
        "name": "Glossing Agents",
        "description": "Imparts natural, non-greasy luster.",
        "icon": "Sun"
      }
    ]
  },
  {
    "id": "teotema-curl-designer-200-ml",
    "name": "Teotema Curl Designer",
    "subtitle": "Curl Designer • For curly hair",
    "price": 2399,
    "originalPrice": 2759,
    "benefits": [
      "Flexible Hold",
      "Frizz Control"
    ],
    "tags": [
      "Hair Care",
      "Styling"
    ],
    "category": "Hair Care",
    "brand": "Teotema",
    "skinFocus": "Style Definition, Shine & Humidity Shield",
    "weight": "200 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN08908.jpg?v=1780680605",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN08908.jpg?v=1780680605",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN08910.jpg?v=1780680605"
    ],
    "freeFrom": [
      "SLS & SLES Free",
      "Paraben Free",
      "Made in Italy"
    ],
    "description": "Advanced Italian styling cream designed specifically to discipline curly and frizzy hair, defining well-structured, bouncy, and touchably soft curls with humidity protection.",
    "directions": "Apply onto towel-dried hair, comb through to distribute evenly, and scrunch upwards before drying.",
    "keyIngredients": [
      {
        "name": "Castor & Mineral Extracts",
        "description": "Defines curls and controls stubborn flyaways.",
        "icon": "Sparkles"
      },
      {
        "name": "Protective Polymers",
        "description": "Shields style against environmental humidity.",
        "icon": "Shield"
      },
      {
        "name": "Glossing Agents",
        "description": "Imparts natural, non-greasy luster.",
        "icon": "Sun"
      }
    ]
  },
  {
    "id": "rebuilding-hair-wash-shampoo",
    "name": "Rebuilding Hair Wash Shampoo",
    "subtitle": "Rebuilding Hair Wash Shampoo • Teotema • SLS Free • Paraben Free",
    "price": 2249,
    "originalPrice": 2586,
    "benefits": [
      "Deep Cleanse",
      "Scalp Care"
    ],
    "tags": [
      "Hair Care",
      "Shampoo",
      "Hydrating"
    ],
    "category": "Hair Care",
    "brand": "Teotema",
    "skinFocus": "Scalp Cleansing, Strength & Moisture Retention",
    "weight": "250 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN08898.jpg?v=1780680605",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN08898.jpg?v=1780680605"
    ],
    "freeFrom": [
      "SLS & SLES Free",
      "Paraben Free",
      "Made in Italy"
    ],
    "description": "Rebuilding hair wash shampoo formulated with natural keratin extracts to gently cleanse while repairing damaged, brittle, or chemically treated hair strands.",
    "directions": "Apply to wet hair, massage into a rich foam for 2 minutes, and rinse thoroughly.",
    "keyIngredients": [
      {
        "name": "Bamboo & Avocado Lipids",
        "description": "Nourishes hair fibers from roots to tips.",
        "icon": "Leaf"
      },
      {
        "name": "Essential Vitamins & Proteins",
        "description": "Strengthens strands against breakage.",
        "icon": "Sparkles"
      },
      {
        "name": "Natural Emollients",
        "description": "Restores scalp natural moisture mantle.",
        "icon": "Droplet"
      }
    ]
  },
  {
    "id": "teotema-argan-hair-mask",
    "name": "Argan Hair Mask",
    "subtitle": "Argan Hair Mask • Ultra Hydration Mask for dry hair • Teotema",
    "badge": "BEST SELLER",
    "price": 2399,
    "originalPrice": 2759,
    "benefits": [
      "Intense Hydration",
      "Damage Repair"
    ],
    "tags": [
      "Hair Care",
      "Hair Mask",
      "Hydrating"
    ],
    "category": "Hair Care",
    "brand": "Teotema",
    "skinFocus": "Deep Fiber Reconstruction & Frizz Elimination",
    "weight": "250 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN09137.jpg?v=1780680605",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN09137.jpg?v=1780680605",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN09138.jpg?v=1780680605"
    ],
    "freeFrom": [
      "SLS & SLES Free",
      "Paraben Free",
      "Made in Italy"
    ],
    "description": "Deeply moisturizing mask enriched with pure Argan Oil, Macadamia Oil, and Shea Butter to restore optimal capillary hydration, softness, and luminous shine without weighing hair down.",
    "directions": "Distribute evenly through washed, damp hair from mid-lengths to tips, leave for 5-7 minutes, then rinse well.",
    "keyIngredients": [
      {
        "name": "Keratin & Argan Matrix",
        "description": "Fills in microscopic hair shaft damage.",
        "icon": "Sparkles"
      },
      {
        "name": "Macadamia Oil",
        "description": "Imparts luminous gloss and silky softness.",
        "icon": "Droplet"
      },
      {
        "name": "Amino Complex",
        "description": "Reinforces tensile strength and elasticity.",
        "icon": "Shield"
      }
    ]
  },
  {
    "id": "argan-shampoo-ultra-hydration",
    "name": "Argan Shampoo Ultra Hydration",
    "subtitle": "Argan Shampoo Ultra Hydration • Teotema • Paraben Free • SLES-SLS Free",
    "price": 2249,
    "originalPrice": 2586,
    "benefits": [
      "Deep Cleanse",
      "Scalp Care"
    ],
    "tags": [
      "Hair Care",
      "Shampoo",
      "Hydrating"
    ],
    "category": "Hair Care",
    "brand": "Teotema",
    "skinFocus": "Scalp Cleansing, Strength & Moisture Retention",
    "weight": "250 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN09139.jpg?v=1780680605",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN09139.jpg?v=1780680605",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN09140.jpg?v=1780680605"
    ],
    "freeFrom": [
      "SLS & SLES Free",
      "Paraben Free",
      "Made in Italy"
    ],
    "description": "SLES/SLS-free moisturizing shampoo enriched with Argan Oil, Macadamia Oil, and Tea Tree Oil to delicately cleanse, restore moisture balance, and impart softness to dry hair.",
    "directions": "Apply to damp hair, massage into scalp until thick lather forms, and rinse clean.",
    "keyIngredients": [
      {
        "name": "Bamboo & Avocado Lipids",
        "description": "Nourishes hair fibers from roots to tips.",
        "icon": "Leaf"
      },
      {
        "name": "Essential Vitamins & Proteins",
        "description": "Strengthens strands against breakage.",
        "icon": "Sparkles"
      },
      {
        "name": "Natural Emollients",
        "description": "Restores scalp natural moisture mantle.",
        "icon": "Droplet"
      }
    ]
  },
  {
    "id": "daily-care-hair-wash-shampoo",
    "name": "Daily Care Hair Wash Shampoo",
    "subtitle": "Daily Care Hair Wash Shampoo • Teotema • SLS Free • Paraben Free",
    "price": 1699,
    "originalPrice": 1954,
    "benefits": [
      "Deep Cleanse",
      "Scalp Care"
    ],
    "tags": [
      "Hair Care",
      "Shampoo",
      "Hydrating"
    ],
    "category": "Hair Care",
    "brand": "Teotema",
    "skinFocus": "Scalp Cleansing, Strength & Moisture Retention",
    "weight": "250 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/003.png?v=1656320322",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/003.png?v=1656320322",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/002.png?v=1668424337"
    ],
    "freeFrom": [
      "SLS & SLES Free",
      "Paraben Free",
      "Made in Italy"
    ],
    "description": "Gentle daily hair wash shampoo enriched with Bamboo extract and Avocado Oil that hydrates, strengthens hair fibers, and boosts natural body and volume with frequent washing.",
    "directions": "Apply to damp hair, massage scalp gently, and rinse clean. Suitable for daily use.",
    "keyIngredients": [
      {
        "name": "Bamboo & Avocado Lipids",
        "description": "Nourishes hair fibers from roots to tips.",
        "icon": "Leaf"
      },
      {
        "name": "Essential Vitamins & Proteins",
        "description": "Strengthens strands against breakage.",
        "icon": "Sparkles"
      },
      {
        "name": "Natural Emollients",
        "description": "Restores scalp natural moisture mantle.",
        "icon": "Droplet"
      }
    ]
  },
  {
    "id": "teotema-hair-shine-spray",
    "name": "Push Up Volumizing",
    "subtitle": "Push Up Volumizing • Hair Shine Spray • SLS Free • Paraben Free • Teotema",
    "price": 1999,
    "originalPrice": 2299,
    "benefits": [
      "Flexible Hold",
      "Frizz Control"
    ],
    "tags": [
      "Hair Care",
      "Styling"
    ],
    "category": "Hair Care",
    "brand": "Teotema",
    "skinFocus": "Style Definition, Shine & Humidity Shield",
    "weight": "200 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Push-up-Volumising-Spary-3_7014446d-88e7-4f7b-8dde-434866476580.png?v=1681812532",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Push-up-Volumising-Spary-3_7014446d-88e7-4f7b-8dde-434866476580.png?v=1681812532",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Push-up-Volumising-Spary-4-1_4b6e7adc-7b4e-4b62-85c7-3e89a68a95b7.png?v=1681812535",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Push-up-Volumising-Spary-7_28ca500e-c623-4878-941a-5959652873f5.png?v=1681812528",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Push-up-Volumising-Spary-6_139ffd84-388c-44fd-9252-2dbebe8bc075.png?v=1681812538",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Push-up-Volumising-Spary-3.png?v=1656320337",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Push-up-Volumising-Spary-2_7c2eb6c9-44e9-4d54-9ac0-e527081ec077.png?v=1681812530",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Push-up-Volumising-Spary-4-1.png?v=1668424205",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Push-up-Volumising-Spary-7.png?v=1668424207",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Push-up-Volumising-Spary-6.png?v=1668424210",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Push-up-Volumising-Spary-2.png?v=1668424212"
    ],
    "freeFrom": [
      "SLS & SLES Free",
      "Paraben Free",
      "Made in Italy"
    ],
    "description": "Push-up volumizing hair shine spray that provides invisible hold, body, and radiant gloss without stiffness or sticky residue.",
    "directions": "Spray from 20-30 cm distance onto dry, styled hair for instant volume and luminous shine.",
    "keyIngredients": [
      {
        "name": "Castor & Mineral Extracts",
        "description": "Defines curls and controls stubborn flyaways.",
        "icon": "Sparkles"
      },
      {
        "name": "Protective Polymers",
        "description": "Shields style against environmental humidity.",
        "icon": "Shield"
      },
      {
        "name": "Glossing Agents",
        "description": "Imparts natural, non-greasy luster.",
        "icon": "Sun"
      }
    ]
  },
  {
    "id": "moisture_balance_shampoo",
    "name": "Moisture Balance Shampoo",
    "subtitle": "Moisture Balance Shampoo • Teotema • SLS Free • Paraben Free",
    "price": 2249,
    "originalPrice": 2586,
    "benefits": [
      "Deep Cleanse",
      "Scalp Care"
    ],
    "tags": [
      "Hair Care",
      "Shampoo",
      "Hydrating"
    ],
    "category": "Hair Care",
    "brand": "Teotema",
    "skinFocus": "Scalp Cleansing, Strength & Moisture Retention",
    "weight": "250 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN08888.jpg?v=1780680605",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN08888.jpg?v=1780680605",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN08889.jpg?v=1780680605",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/CAPELLIN-SECCHI-MOISTURE-BALANCE-CATALOG-6_3e79c2e9-bd68-40bf-ba53-3ed7e508b357.png?v=1681812501"
    ],
    "freeFrom": [
      "SLS & SLES Free",
      "Paraben Free",
      "Made in Italy"
    ],
    "description": "Moisture balance shampoo enriched with Sunflower extract and Vitamin E to soothe dry, frizzy hair, restoring elasticity and natural moisture without parabens or harsh dyes.",
    "directions": "Massage into wet hair to create a rich lather, then rinse thoroughly with water.",
    "keyIngredients": [
      {
        "name": "Bamboo & Avocado Lipids",
        "description": "Nourishes hair fibers from roots to tips.",
        "icon": "Leaf"
      },
      {
        "name": "Essential Vitamins & Proteins",
        "description": "Strengthens strands against breakage.",
        "icon": "Sparkles"
      },
      {
        "name": "Natural Emollients",
        "description": "Restores scalp natural moisture mantle.",
        "icon": "Droplet"
      }
    ]
  },
  {
    "id": "moisture_balance_antifrizz_serum",
    "name": "Moisture Balance Antifrizz Serum",
    "subtitle": "Moisture Balance Antifrizz Serum • Teotema • SLS Free • Paraben Free",
    "price": 3699,
    "originalPrice": 4254,
    "benefits": [
      "Flexible Hold",
      "Frizz Control"
    ],
    "tags": [
      "Hair Care",
      "Styling"
    ],
    "category": "Hair Care",
    "brand": "Teotema",
    "skinFocus": "Style Definition, Shine & Humidity Shield",
    "weight": "100 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN08880.jpg?v=1780680605",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN08880.jpg?v=1780680605",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN08881.jpg?v=1780680605",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Siero-Moisture-Balance-Antifizze-Serum-6.png?v=1668424157"
    ],
    "freeFrom": [
      "SLS & SLES Free",
      "Paraben Free",
      "Made in Italy"
    ],
    "description": "Luxurious anti-frizz serum with Castor Oil and Glycerin that tames flyaways, seals split ends, and leaves hair ultra-sleek, manageable, and mirror-shiny.",
    "directions": "Dispense 2-3 drops onto palms and smooth evenly over damp or dry hair lengths.",
    "keyIngredients": [
      {
        "name": "Castor & Mineral Extracts",
        "description": "Defines curls and controls stubborn flyaways.",
        "icon": "Sparkles"
      },
      {
        "name": "Protective Polymers",
        "description": "Shields style against environmental humidity.",
        "icon": "Shield"
      },
      {
        "name": "Glossing Agents",
        "description": "Imparts natural, non-greasy luster.",
        "icon": "Sun"
      }
    ]
  },
  {
    "id": "moisture-balance-hair-mask",
    "name": "Moisture Balance Hair Mask",
    "subtitle": "Moisture Balance Hair Mask • Maschera Capelli Secchi • Teotema • 250 mL",
    "badge": "BEST SELLER",
    "price": 2399,
    "originalPrice": 2759,
    "benefits": [
      "Intense Hydration",
      "Damage Repair"
    ],
    "tags": [
      "Hair Care",
      "Hair Mask",
      "Hydrating"
    ],
    "category": "Hair Care",
    "brand": "Teotema",
    "skinFocus": "Deep Fiber Reconstruction & Frizz Elimination",
    "weight": "250 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN08895.jpg?v=1780680605",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN08895.jpg?v=1780680605",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/VJN08896.jpg?v=1780680604",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Mask-5.png?v=1668424128"
    ],
    "freeFrom": [
      "SLS & SLES Free",
      "Paraben Free",
      "Made in Italy"
    ],
    "description": "Intense Italian moisture treatment that deeply nourishes and repairs dry or frizzy hair, smoothing the cuticle layer and restoring silky manageability.",
    "directions": "Apply generously to damp lengths after shampooing, leave for 5-10 minutes, and rinse thoroughly.",
    "keyIngredients": [
      {
        "name": "Keratin & Argan Matrix",
        "description": "Fills in microscopic hair shaft damage.",
        "icon": "Sparkles"
      },
      {
        "name": "Macadamia Oil",
        "description": "Imparts luminous gloss and silky softness.",
        "icon": "Droplet"
      },
      {
        "name": "Amino Complex",
        "description": "Reinforces tensile strength and elasticity.",
        "icon": "Shield"
      }
    ]
  },
  {
    "id": "teotema-leave-in-conditioner",
    "name": "Leave-in Conditioner",
    "subtitle": "Leave-in Conditioner • Teotema • SLES-SLS Free • Paraben Free",
    "price": 1849,
    "originalPrice": 2126,
    "benefits": [
      "Detangling",
      "Leave-in Moisture"
    ],
    "tags": [
      "Hair Care",
      "Conditioner",
      "Hydrating"
    ],
    "category": "Hair Care",
    "brand": "Teotema",
    "skinFocus": "Instant Detangling, Cuticle Sealing & Heat Protection",
    "weight": "250 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/Daily-Care-Leave-in-Conditioner-3-1.jpg?v=1688231460",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/Daily-Care-Leave-in-Conditioner-3-1.jpg?v=1688231460",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/files/Daily-Care-Leave-in-Conditioner-4-2.jpg?v=1688231460",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Daily-Care-Leave-in-Conditioner-6.png?v=1687078570",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Daily-Care-Leave-in-Conditioner-2.png?v=1687078570"
    ],
    "freeFrom": [
      "SLS & SLES Free",
      "Paraben Free",
      "Made in Italy"
    ],
    "description": "Lightweight leave-in conditioner enriched with Bamboo extract, Avocado Oil, and natural Keratin that detangles immediately and seals cuticles against heat styling.",
    "directions": "Spray or distribute evenly onto towel-dried hair before combing. Do not rinse out.",
    "keyIngredients": [
      {
        "name": "Bamboo Extract",
        "description": "Enhances elasticity and flexibility.",
        "icon": "Leaf"
      },
      {
        "name": "Avocado Oil",
        "description": "Feeds essential fatty acids to dry ends.",
        "icon": "Droplet"
      },
      {
        "name": "Keratin Hydrolysate",
        "description": "Seals split cuticle layers.",
        "icon": "Shield"
      }
    ]
  },

  {
    "id": "malibu-suncare-sunscreen-clear-spray",
    "name": "Malibu Suncare Sunscreen",
    "subtitle": "Suncare Sunscreen • All Day Clear Spray • SPF 50 • Vegan",
    "badge": "SPF 50",
    "price": 2999,
    "originalPrice": 3449,
    "benefits": [
      "SPF 50 High Protection",
      "Water Resistant",
      "Broad Spectrum"
    ],
    "tags": [
      "Sun Care & SPF",
      "SPF 50",
      "Tan Removal"
    ],
    "category": "Sun Care & SPF",
    "brand": "Malibu Suncare",
    "skinFocus": "UVA/UVB Photoprotection, Anti-Photoaging & Daily Defense",
    "weight": "175 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Clear-all-day-Protection.png?v=1656320707",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Clear-all-day-Protection.png?v=1656320707",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-All-Day-Clear-Spray-5025135118913-B.jpg?v=1688231460",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-All-Day-Clear-Spray-5025135118913-D.jpg?v=1685639404",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-All-Day-Clear-Spray-5025135118913-C.jpg?v=1685639403",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-All-Day-Clear-Spray-5025135118913-E.jpg?v=1685639404",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-All-Day-Clear-Spray-5025135118913-F.jpg?v=1685639404"
    ],
    "freeFrom": [
      "Vegan",
      "Water Resistant",
      "Cruelty Free"
    ],
    "description": "High protection SPF 50 continuous clear spray that goes on invisibly without white residue, providing rapid-absorbing, water-resistant broad spectrum UVA and UVB defense.",
    "directions": "Spray generously and evenly across skin 30 minutes before sun exposure. Reapply after swimming or towel drying.",
    "keyIngredients": [
      {
        "name": "Broad Spectrum SPF 50",
        "description": "High-level protection against sun damage and tanning.",
        "icon": "Sun"
      },
      {
        "name": "Aloe Vera & Vitamin E",
        "description": "Soothes skin and prevents sun-induced dehydration.",
        "icon": "Droplet"
      },
      {
        "name": "Water-Resistant Matrix",
        "description": "Stays effective during swimming and sweat.",
        "icon": "Shield"
      }
    ]
  },

  {
    "id": "malibu-suncare-spf-body-lotion-spray",
    "name": "Spf Body Lotion Spray",
    "subtitle": "Spf Body Lotion Spray • Malibu Suncare • All Day Protection • SPF 50 • 200 ",
    "badge": "SPF 50",
    "price": 2499,
    "originalPrice": 2874,
    "benefits": [
      "SPF 50 High Protection",
      "Water Resistant",
      "Broad Spectrum"
    ],
    "tags": [
      "Sun Care & SPF",
      "SPF 50",
      "Tan Removal"
    ],
    "category": "Sun Care & SPF",
    "brand": "Malibu Suncare",
    "skinFocus": "UVA/UVB Photoprotection, Anti-Photoaging & Daily Defense",
    "weight": "200 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Lotion-Spray-5025135116575-A.jpg?v=1688231461",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Lotion-Spray-5025135116575-A.jpg?v=1688231461",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Lotion-Spray-5025135116575-B.jpg?v=1688231461",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Lotion-Spray-5025135116575-C.jpg?v=1688231460",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Lotion-Spray-5025135116575-D.jpg?v=1688231460",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Lotion-Spray-5025135116575-E.jpg?v=1688231460"
    ],
    "freeFrom": [
      "Vegan",
      "Water Resistant",
      "Cruelty Free"
    ],
    "description": "Hydrating SPF 50 body lotion spray with Aloe Vera and Vitamin E, delivering broad-spectrum sun protection while soothing skin and preventing sun-induced dehydration.",
    "directions": "Spray evenly over body 30 minutes prior to sun exposure and rub in gently.",
    "keyIngredients": [
      {
        "name": "Broad Spectrum SPF 50",
        "description": "High-level protection against sun damage and tanning.",
        "icon": "Sun"
      },
      {
        "name": "Aloe Vera & Vitamin E",
        "description": "Soothes skin and prevents sun-induced dehydration.",
        "icon": "Droplet"
      },
      {
        "name": "Water-Resistant Matrix",
        "description": "Stays effective during swimming and sweat.",
        "icon": "Shield"
      }
    ]
  },

  {
    "id": "all-day-face-cream",
    "name": "Malibu",
    "subtitle": " • All Day Face Cream • SPF 50 • 40 ml",
    "badge": "SPF 50",
    "price": 799,
    "originalPrice": 919,
    "benefits": [
      "SPF 50 High Protection",
      "Water Resistant",
      "Broad Spectrum"
    ],
    "tags": [
      "Sun Care & SPF",
      "SPF 50",
      "Tan Removal"
    ],
    "category": "Sun Care & SPF",
    "brand": "Malibu Suncare",
    "skinFocus": "UVA/UVB Photoprotection, Anti-Photoaging & Daily Defense",
    "weight": "40 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Face-Cream-5025135117695-A.jpg?v=1688231461",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Face-Cream-5025135117695-A.jpg?v=1688231461",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Face-Cream-5025135117695-B.jpg?v=1688231461",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Face-Cream-5025135117695-C.jpg?v=1690910063",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Face-Cream-5025135117695-D.jpg?v=1690910064",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Face-Cream-5025135117695-E.jpg?v=1688231461"
    ],
    "freeFrom": [
      "Vegan",
      "Water Resistant",
      "Cruelty Free"
    ],
    "description": "Lightweight SPF 50 daily facial sun cream enriched with Aloe Vera and Vitamin E to protect sensitive facial skin from UVA/UVB rays without clogging pores or leaving white cast.",
    "directions": "Apply evenly over face and neck 20 minutes before sun exposure. Can be used under makeup.",
    "keyIngredients": [
      {
        "name": "Broad Spectrum SPF 50",
        "description": "High-level protection against sun damage and tanning.",
        "icon": "Sun"
      },
      {
        "name": "Aloe Vera & Vitamin E",
        "description": "Soothes skin and prevents sun-induced dehydration.",
        "icon": "Droplet"
      },
      {
        "name": "Water-Resistant Matrix",
        "description": "Stays effective during swimming and sweat.",
        "icon": "Shield"
      }
    ]
  },

];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category || p.tags.includes(category));
}

export function getProductsByBrand(brand: string): Product[] {
  if (brand === "All") return PRODUCTS;
  return PRODUCTS.filter(p => p.brand === brand);
}
