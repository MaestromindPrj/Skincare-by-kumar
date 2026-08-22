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
  badge?: "POPULAR" | "ALL TIME FAVOURITE" | "KIDS' FAVOURITE" | "BEST SELLER" | "NEW" | "SPF 50" | "SPF 30" | "AMMONIA FREE" | "DETOX" | string;
  price: number;
  originalPrice: number;
  benefits: string[];
  tags: string[];
  category: "Handcrafted Soaps" | "Hair Care" | "Sun Care & SPF" | "Lip Care" | "Facial Wipes" | "Face & Glow" | "Fresh & Clean" | "Kid's Care" | string;
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
    "id": "french-red-clay-face-soap",
    "name": "French Red Clay Face Soap",
    "subtitle": "Organic French Red Clay • Wild Turmeric • Milk Cream",
    "badge": "POPULAR",
    "price": 330,
    "originalPrice": 390,
    "benefits": [
      "Brightening",
      "Hydrating"
    ],
    "tags": [
      "Brightness",
      "Hydrating",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Deep Cleansing, Complexion Brightening & Moisture Balance",
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
    "name": "Velvet bathing bar - Kids special",
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
    "name": "Caffe Latte Creamy Exfoliating Spa",
    "subtitle": "Coffee Grounds • Coffee Bean Oil • Milk Cream Malai",
    "badge": "BEST SELLER",
    "price": 402,
    "originalPrice": 470,
    "benefits": [
      "Exfoliating",
      "Hydrating"
    ],
    "tags": [
      "Hydrating",
      "Brightness",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Exfoliation, Skin Softening & Circulation Boost",
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
    "name": "Caffe Berrie Creamy Exfoliating Spa",
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
    "skinFocus": "Antioxidant Exfoliation & Berry Glow",
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
    "name": "Caffe Orange Creamy Milk Exfoliation Spa",
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
    "skinFocus": "Tan Reversal, Citrus Refreshment & Exfoliation",
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
    "name": "SIBERIIAN WATERS COLOGNE SPA",
    "subtitle": "Cedarwood • Lavender • Spearmint • French Blue Clay",
    "badge": "POPULAR",
    "price": 280,
    "originalPrice": 350,
    "benefits": [
      "Cooling Freshness",
      "Pore Cleansing"
    ],
    "tags": [
      "Brightness",
      "Hydrating",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Invigorating Cleanse & Cologne Freshness",
    "weight": "118 - 123 Gms",
    "image": "/soaps/SIBERIIAN.png",
    "freeFrom": [
      "Synthetic Fragrances Free",
      "Harsh Chemicals Free"
    ],
    "description": "Enriched with Cedarwood Essential Oil, Lavender Essential Oil, Spearmint Oil, AloeVera Puree, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, French Blue Clay, Natural Kaolin Clay.",
    "directions": "Apply onto damp skin, enjoy the crisp cooling aroma, and rinse thoroughly.",
    "keyIngredients": [
      {
        "name": "Cedarwood & Lavender",
        "description": "Soothing woody notes that calm irritated skin.",
        "icon": "Leaf"
      },
      {
        "name": "Spearmint Essential Oil",
        "description": "Delivers an instant burst of cooling freshness.",
        "icon": "Zap"
      },
      {
        "name": "French Blue Clay",
        "description": "Draws out deep environmental impurities.",
        "icon": "Sparkles"
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
    "name": "OCEAN WATERS COLOGNE SPA",
    "subtitle": "Aquatic Marine Notes • Bergamot • Sea Salt • Blue Clay",
    "badge": "BEST SELLER",
    "price": 280,
    "originalPrice": 350,
    "benefits": [
      "Aquatic Freshness",
      "Deep Cleanse"
    ],
    "tags": [
      "Brightness",
      "Hydrating",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Refreshing Ocean Splash & Long-Lasting Aroma",
    "weight": "118 - 123 Gms",
    "image": "/soaps/OCEAN WATERS.png",
    "freeFrom": [
      "Harsh Chemicals Free",
      "Paraben Free"
    ],
    "description": "Enriched with Marine Extracts, Bergamot Essential Oil, Sea Minerals, AloeVera Puree, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Natural Kaolin Clay, Blue French Clay.",
    "directions": "Lather across body during showers for a crisp, oceanic revitalizing experience.",
    "keyIngredients": [
      {
        "name": "Marine Minerals & Sea Salts",
        "description": "Replenishes trace minerals and tones the skin.",
        "icon": "Droplet"
      },
      {
        "name": "Bergamot Essential Oil",
        "description": "Refreshes skin surface and balances natural oils.",
        "icon": "Sun"
      },
      {
        "name": "Blue French Clay",
        "description": "Gently cleanses and clarifies pores.",
        "icon": "Sparkles"
      },
      {
        "name": "Olive & Almond Oil",
        "description": "Leaves skin soft, hydrated and supple.",
        "icon": "Shield"
      }
    ]
  },
  {
    "id": "zaarraa-oudh-glow-face-soap",
    "name": "ZAARRAA OUDH GLOW Face Soap",
    "subtitle": "Arabian Oudh • Saffron Extract • Sweet Almond Milk",
    "badge": "POPULAR",
    "price": 402,
    "originalPrice": 490,
    "benefits": [
      "Luxurious Glow",
      "Anti-Dryness"
    ],
    "tags": [
      "Brightness",
      "Hydrating",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Royal Oudh Radiance & Velvety Nourishment",
    "weight": "118 - 123 Gms",
    "image": "/soaps/ZAARRAA.png",
    "freeFrom": [
      "Synthetic Fragrances Free",
      "Harsh Chemicals Free"
    ],
    "description": "Enriched with Rare Arabian Oudh Essence, Saffron Extract, Thick Milk Cream, Fresh Almond Milk, AloeVera Puree, Saponified Shea Butter, Kokum Butter, Pure Ghee, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate. Colours in compliance with EU standards, Kaolin Clay, Rhassoul Red Clay.",
    "directions": "Massage the rich Oudh lather over face and neck, leave on for 1 minute, and rinse with tepid water.",
    "keyIngredients": [
      {
        "name": "Arabian Oudh Essence",
        "description": "Exquisite royal aroma that elevates bath ritual.",
        "icon": "Sparkles"
      },
      {
        "name": "Saffron Extract & Milk Cream",
        "description": "Reveals luminous, even skin complexion.",
        "icon": "Sun"
      },
      {
        "name": "Pure Desi Ghee & Shea Butter",
        "description": "Infuses supreme moisture into thirsty skin.",
        "icon": "Droplet"
      },
      {
        "name": "Rhassoul Clay",
        "description": "Purifies pores softly and refines texture.",
        "icon": "Shield"
      }
    ]
  },
  {
    "id": "sanskruti-shahi-ubtan",
    "name": "SANSKRUTI SHAHI UBTAN",
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
    "skinFocus": "Royal Herbal Ubtan Glow & Deep Tan Removal",
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
    "name": "ALMOND CREAM SPA - Almond Milk Almond Oil",
    "subtitle": "Virgin Sweet Almond Oil • Fresh Almond Milk • AloeVera",
    "badge": "BEST SELLER",
    "price": 303,
    "originalPrice": 380,
    "benefits": [
      "Rich Moisture",
      "Nourishing"
    ],
    "tags": [
      "Hydrating",
      "Baby Friendly",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Intense Moisture & Velvet Softness for Dry Skin",
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
    "name": "LUSH OATS HONEY",
    "subtitle": "Powdered Oats • Oats Milk • Raw Honey • Vanilla",
    "badge": "POPULAR",
    "price": 330,
    "originalPrice": 400,
    "benefits": [
      "Softening",
      "Soothing Care"
    ],
    "tags": [
      "Hydrating",
      "Baby Friendly",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Soothing Moisture, Calm Skin & Gentle Exfoliation",
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
    "name": "OASIS ARABIIAN OUDH",
    "subtitle": "Agar Oil (Oudh) • Sandalwood Oil • Cocoa Butter",
    "badge": "NEW",
    "price": 402,
    "originalPrice": 480,
    "benefits": [
      "Luxury Aroma",
      "Nourishing"
    ],
    "tags": [
      "Hydrating",
      "Brightness",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Deep Moisture & Exotic Arabian Oudh Fragrance",
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
    "name": "INDUS RIVERR - CINNAMON BERGAMOT",
    "subtitle": "Bergamot Essential Oil • Cinnamon • Rose Geranium",
    "badge": "POPULAR",
    "price": 280,
    "originalPrice": 350,
    "benefits": [
      "Purifying",
      "Freshness"
    ],
    "tags": [
      "Brightness",
      "Hydrating",
      "Handcrafted Soaps"
    ],
    "category": "Handcrafted Soaps",
    "skinFocus": "Purifying Spice & Citrus Refreshment",
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
    "name": "CHANDAAN GOLD Face Soap",
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
    "skinFocus": "Brightening, Moisturising & Golden Radiance",
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
    "id": "malibu-suncare-lip-gloss-strawberry",
    "name": "Malibu Suncare Lip Gloss - Strawberry Flavour",
    "subtitle": "Suncare Lip Gloss - Strawberry Flavour • SPF 30 • 1.5 mL",
    "badge": "SPF 30",
    "price": 899,
    "originalPrice": 1034,
    "benefits": [
      "SPF 30 Protection",
      "Moisturizing",
      "UVA/UVB Defense"
    ],
    "tags": [
      "Lip Care",
      "SPF 30",
      "Hydrating"
    ],
    "category": "Lip Care",
    "brand": "Malibu Suncare",
    "skinFocus": "Daily Lip Hydration, Chapped Lip Healing & Sun Defense",
    "weight": "1.5 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Strawberry-Lip-Gloss-0633710430265-A.jpg?v=1685639404",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Strawberry-Lip-Gloss-0633710430265-A.jpg?v=1685639404",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Strawberry-Lip-Gloss-0633710430265-B.jpg?v=1685639403",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Strawberry-Lip-Gloss-0633710430265-C.jpg?v=1685639404",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Strawberry-Lip-Gloss-0633710430265-D.jpg?v=1685639403",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Strawberry-Lip-Gloss-0633710430265-E.jpg?v=1685639404",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Strawberry-Lip-Gloss-0633710430265-F.jpg?v=1685639404"
    ],
    "freeFrom": [
      "Vegan Formula",
      "Cruelty Free",
      "Paraben Free"
    ],
    "description": "Delicious Strawberry flavored vegan lip gloss offering SPF 30 broad spectrum UVA/UVB protection and long-lasting moisture against sun, wind, and dryness.",
    "directions": "Glide over lips frequently, especially before sun exposure or outdoor activities.",
    "keyIngredients": [
      {
        "name": "SPF 30 Solar Filters",
        "description": "Blocks harmful sunburn UVA & UVB rays.",
        "icon": "Sun"
      },
      {
        "name": "Vitamin E & Aloe",
        "description": "Nourishes and heals dry, chapped lips.",
        "icon": "Droplet"
      },
      {
        "name": "Natural Fruit Flavours",
        "description": "Delicious refreshing taste and comfortable wear.",
        "icon": "Sparkles"
      }
    ]
  },
  {
    "id": "malibu-suncare-lip-gloss-coconut",
    "name": "Malibu Suncare Lip Gloss - Coconut Flavour",
    "subtitle": "Suncare Lip Gloss - Coconut Flavour • SPF 30 • 1.5 mL",
    "badge": "SPF 30",
    "price": 899,
    "originalPrice": 1034,
    "benefits": [
      "SPF 30 Protection",
      "Moisturizing",
      "UVA/UVB Defense"
    ],
    "tags": [
      "Lip Care",
      "SPF 30",
      "Hydrating"
    ],
    "category": "Lip Care",
    "brand": "Malibu Suncare",
    "skinFocus": "Daily Lip Hydration, Chapped Lip Healing & Sun Defense",
    "weight": "1.5 ml",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Coconut-Lip-Gloss-0633710430272-A.jpg?v=1685639404",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Coconut-Lip-Gloss-0633710430272-A.jpg?v=1685639404",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Coconut-Lip-Gloss-0633710430272-C.jpg?v=1685639404",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Coconut-Lip-Gloss-0633710430272-D.jpg?v=1685639404",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Coconut-Lip-Gloss-0633710430272-E.jpg?v=1685639404",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Coconut-Lip-Gloss-0633710430272-F.jpg?v=1685639403"
    ],
    "freeFrom": [
      "Vegan Formula",
      "Cruelty Free",
      "Paraben Free"
    ],
    "description": "Tropical Coconut flavored vegan lip gloss infused with SPF 30 solar filters to shield lips from burning and chapping while delivering a high-shine glossy finish.",
    "directions": "Apply liberally to lips throughout the day as needed.",
    "keyIngredients": [
      {
        "name": "SPF 30 Solar Filters",
        "description": "Blocks harmful sunburn UVA & UVB rays.",
        "icon": "Sun"
      },
      {
        "name": "Vitamin E & Aloe",
        "description": "Nourishes and heals dry, chapped lips.",
        "icon": "Droplet"
      },
      {
        "name": "Natural Fruit Flavours",
        "description": "Delicious refreshing taste and comfortable wear.",
        "icon": "Sparkles"
      }
    ]
  },
  {
    "id": "spf-lip-balm-pina-colada",
    "name": "Spf Lip Balm",
    "subtitle": "SPF 30 Lip Balm • Malibu Pina Colada • SPF 30 • 4 gm",
    "badge": "SPF 30",
    "price": 299,
    "originalPrice": 344,
    "benefits": [
      "SPF 30 Protection",
      "Moisturizing",
      "UVA/UVB Defense"
    ],
    "tags": [
      "Lip Care",
      "SPF 30",
      "Hydrating"
    ],
    "category": "Lip Care",
    "brand": "Malibu Suncare",
    "skinFocus": "Daily Lip Hydration, Chapped Lip Healing & Sun Defense",
    "weight": "4g",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/flavour-Lipcare-Catalog-1.jpg?v=1685639404",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/flavour-Lipcare-Catalog-1.jpg?v=1685639404",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/flavour-Lipcare-Catalog-2.jpg?v=1685639403",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Pina-Colada-flavour-Lipcare-3.jpg?v=1685639405",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/flavour-Lipcare-Catalog-4.jpg?v=1685639404"
    ],
    "freeFrom": [
      "Vegan Formula",
      "Cruelty Free",
      "Paraben Free"
    ],
    "description": "Moisturizing Pina Colada SPF 30 lip balm that shields lips from UV rays, harsh winds, and cold weather, leaving lips deeply hydrated and soft.",
    "directions": "Apply generously on lips 15 minutes before sun exposure. Reapply regularly.",
    "keyIngredients": [
      {
        "name": "SPF 30 Solar Filters",
        "description": "Blocks harmful sunburn UVA & UVB rays.",
        "icon": "Sun"
      },
      {
        "name": "Vitamin E & Aloe",
        "description": "Nourishes and heals dry, chapped lips.",
        "icon": "Droplet"
      },
      {
        "name": "Natural Fruit Flavours",
        "description": "Delicious refreshing taste and comfortable wear.",
        "icon": "Sparkles"
      }
    ]
  },
  {
    "id": "spf-lip-balm-mojito",
    "name": "Spf Lip Balm",
    "subtitle": "SPF 30 Lip Balm • Malibu Mojito • SPF 30 • 4 gm",
    "badge": "SPF 30",
    "price": 299,
    "originalPrice": 344,
    "benefits": [
      "SPF 30 Protection",
      "Moisturizing",
      "UVA/UVB Defense"
    ],
    "tags": [
      "Lip Care",
      "SPF 30",
      "Hydrating"
    ],
    "category": "Lip Care",
    "brand": "Malibu Suncare",
    "skinFocus": "Daily Lip Hydration, Chapped Lip Healing & Sun Defense",
    "weight": "4g",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Mojito-flavour-Lipcare-Catalog-A.jpg?v=1685639403",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Mojito-flavour-Lipcare-Catalog-A.jpg?v=1685639403",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Mojito-flavour-Lipcare-Catalog-B.jpg?v=1685639404",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Mojito-flavour-Lipcare-Catalog-C.jpg?v=1685639404",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Mojito-flavour-Lipcare-Catalog-D.jpg?v=1685639404"
    ],
    "freeFrom": [
      "Vegan Formula",
      "Cruelty Free",
      "Paraben Free"
    ],
    "description": "Refreshing Mojito flavored SPF 30 lip balm packed with soothing emollients to nourish dry lips and provide reliable UVA/UVB photoprotection.",
    "directions": "Smooth onto lips as needed for continuous sun and wind protection.",
    "keyIngredients": [
      {
        "name": "SPF 30 Solar Filters",
        "description": "Blocks harmful sunburn UVA & UVB rays.",
        "icon": "Sun"
      },
      {
        "name": "Vitamin E & Aloe",
        "description": "Nourishes and heals dry, chapped lips.",
        "icon": "Droplet"
      },
      {
        "name": "Natural Fruit Flavours",
        "description": "Delicious refreshing taste and comfortable wear.",
        "icon": "Sparkles"
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
    "id": "spf-lip-balm-watermelon",
    "name": "Spf Lip Balm",
    "subtitle": "SPF 30 Lip Balm • Malibu Watermelon • SPF 30 • Vegan • 5 gm",
    "badge": "SPF 30",
    "price": 299,
    "originalPrice": 344,
    "benefits": [
      "SPF 30 Protection",
      "Moisturizing",
      "UVA/UVB Defense"
    ],
    "tags": [
      "Lip Care",
      "SPF 30",
      "Hydrating"
    ],
    "category": "Lip Care",
    "brand": "Malibu Suncare",
    "skinFocus": "Daily Lip Hydration, Chapped Lip Healing & Sun Defense",
    "weight": "5g",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Watermelon-Lip-Balm-5025135118562-A.jpg?v=1688231461",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Watermelon-Lip-Balm-5025135118562-A.jpg?v=1688231461",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Watermelon-Lip-Balm-5025135118562-B.jpg?v=1688231461",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Watermelon-Lip-Balm-5025135118562-D.jpg?v=1688231461",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Watermelon-Lip-Balm-5025135118562-C.jpg?v=1688231460",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Watermelon-Lip-Balm-5025135118562-E.jpg?v=1688231461"
    ],
    "freeFrom": [
      "Vegan Formula",
      "Cruelty Free",
      "Paraben Free"
    ],
    "description": "Juicy Watermelon flavored vegan SPF 30 lip balm that glides smoothly over lips to lock in moisture and protect delicate lip tissue from sun damage.",
    "directions": "Apply evenly to lips as needed throughout the day.",
    "keyIngredients": [
      {
        "name": "SPF 30 Solar Filters",
        "description": "Blocks harmful sunburn UVA & UVB rays.",
        "icon": "Sun"
      },
      {
        "name": "Vitamin E & Aloe",
        "description": "Nourishes and heals dry, chapped lips.",
        "icon": "Droplet"
      },
      {
        "name": "Natural Fruit Flavours",
        "description": "Delicious refreshing taste and comfortable wear.",
        "icon": "Sparkles"
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
    "id": "spf-lip-balm-tropical",
    "name": "Spf Lip Balm",
    "subtitle": "SPF 30 Lip Balm • Malibu Tropical • SPF 30 • Vegan • 5 gm",
    "badge": "SPF 30",
    "price": 299,
    "originalPrice": 344,
    "benefits": [
      "SPF 30 Protection",
      "Moisturizing",
      "UVA/UVB Defense"
    ],
    "tags": [
      "Lip Care",
      "SPF 30",
      "Hydrating"
    ],
    "category": "Lip Care",
    "brand": "Malibu Suncare",
    "skinFocus": "Daily Lip Hydration, Chapped Lip Healing & Sun Defense",
    "weight": "5g",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Tropical-Lip-Balm-5025135118562-A.jpg?v=1688231461",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Tropical-Lip-Balm-5025135118562-A.jpg?v=1688231461",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Tropical-Lip-Balm-5025135118562-B.jpg?v=1688231460",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Tropical-Lip-Balm-5025135118562-D.jpg?v=1688231460",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Tropical-Lip-Balm-5025135118562-C.jpg?v=1688231460",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Tropical-Lip-Balm-5025135118562-E.jpg?v=1688231461"
    ],
    "freeFrom": [
      "Vegan Formula",
      "Cruelty Free",
      "Paraben Free"
    ],
    "description": "Exotic Tropical fruit flavor SPF 30 vegan lip balm providing essential moisture and UV defense to prevent painful sunburn and peeling lips.",
    "directions": "Apply to lips liberally before heading outdoors.",
    "keyIngredients": [
      {
        "name": "SPF 30 Solar Filters",
        "description": "Blocks harmful sunburn UVA & UVB rays.",
        "icon": "Sun"
      },
      {
        "name": "Vitamin E & Aloe",
        "description": "Nourishes and heals dry, chapped lips.",
        "icon": "Droplet"
      },
      {
        "name": "Natural Fruit Flavours",
        "description": "Delicious refreshing taste and comfortable wear.",
        "icon": "Sparkles"
      }
    ]
  },
  {
    "id": "spf-lip-balm-vanilla",
    "name": "Spf Lip Balm",
    "subtitle": "SPF 30 Lip Balm • Malibu Vanilla • SPF30 • Vegan • 5g",
    "badge": "SPF 30",
    "price": 299,
    "originalPrice": 344,
    "benefits": [
      "SPF 30 Protection",
      "Moisturizing",
      "UVA/UVB Defense"
    ],
    "tags": [
      "Lip Care",
      "SPF 30",
      "Hydrating"
    ],
    "category": "Lip Care",
    "brand": "Malibu Suncare",
    "skinFocus": "Daily Lip Hydration, Chapped Lip Healing & Sun Defense",
    "weight": "5g",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Vanilla-Lip-Balm-5025135118586-A.jpg?v=1688231461",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Vanilla-Lip-Balm-5025135118586-A.jpg?v=1688231461",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Vanilla-Lip-Balm-5025135118586-B.jpg?v=1688231462",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Vanilla-Lip-Balm-5025135118586-D.jpg?v=1688231462",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Vanilla-Lip-Balm-5025135118586-C.jpg?v=1690910063",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Vanilla-Lip-Balm-5025135118586-E.jpg?v=1688231462"
    ],
    "freeFrom": [
      "Vegan Formula",
      "Cruelty Free",
      "Paraben Free"
    ],
    "description": "Sweet soothing Vanilla flavored vegan SPF 30 lip balm that delivers rich barrier hydration and broad spectrum solar protection in all seasons.",
    "directions": "Smooth over lips regularly for continuous comfort and UV defense.",
    "keyIngredients": [
      {
        "name": "SPF 30 Solar Filters",
        "description": "Blocks harmful sunburn UVA & UVB rays.",
        "icon": "Sun"
      },
      {
        "name": "Vitamin E & Aloe",
        "description": "Nourishes and heals dry, chapped lips.",
        "icon": "Droplet"
      },
      {
        "name": "Natural Fruit Flavours",
        "description": "Delicious refreshing taste and comfortable wear.",
        "icon": "Sparkles"
      }
    ]
  },
  {
    "id": "spf-lip-balm-strawberry",
    "name": "Spf Lip Balm",
    "subtitle": "SPF 30 Lip Balm • Malibu Strawberry • Vegan • 5g",
    "badge": "SPF 30",
    "price": 299,
    "originalPrice": 344,
    "benefits": [
      "SPF 30 Protection",
      "Moisturizing",
      "UVA/UVB Defense"
    ],
    "tags": [
      "Lip Care",
      "SPF 30",
      "Hydrating"
    ],
    "category": "Lip Care",
    "brand": "Malibu Suncare",
    "skinFocus": "Daily Lip Hydration, Chapped Lip Healing & Sun Defense",
    "weight": "5g",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Strawberry-Lip-Balm-5025135118951-A-1.jpg?v=1690910064",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Strawberry-Lip-Balm-5025135118951-A-1.jpg?v=1690910064",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Strawberry-Lip-Balm-5025135118951-B-1.jpg?v=1690910064",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Strawberry-Lip-Balm-5025135118951-C-1.jpg?v=1690910064",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Strawberry-Lip-Balm-5025135118951-D-1.jpg?v=1690910063",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Strawberry-Lip-Balm-5025135118951-E.jpg?v=1688231461"
    ],
    "freeFrom": [
      "Vegan Formula",
      "Cruelty Free",
      "Paraben Free"
    ],
    "description": "Sweet Strawberry flavored vegan SPF 30 lip balm formulated to protect lips from drying sun and wind while providing long-lasting hydration.",
    "directions": "Apply evenly to lips throughout the day.",
    "keyIngredients": [
      {
        "name": "SPF 30 Solar Filters",
        "description": "Blocks harmful sunburn UVA & UVB rays.",
        "icon": "Sun"
      },
      {
        "name": "Vitamin E & Aloe",
        "description": "Nourishes and heals dry, chapped lips.",
        "icon": "Droplet"
      },
      {
        "name": "Natural Fruit Flavours",
        "description": "Delicious refreshing taste and comfortable wear.",
        "icon": "Sparkles"
      }
    ]
  },
  {
    "id": "malibu-lip-gloss-combo",
    "name": "Malibu Lip Gloss Combo (Set of 2) - Coconut and Strawberry Flavour",
    "subtitle": "Lip Gloss Combo (Set of 2) - Coconut and Strawberry Flavour • SPF 30 • Vega",
    "badge": "SPF 30",
    "price": 1499,
    "originalPrice": 1724,
    "benefits": [
      "SPF 30 Protection",
      "Moisturizing",
      "UVA/UVB Defense"
    ],
    "tags": [
      "Lip Care",
      "SPF 30",
      "Hydrating"
    ],
    "category": "Lip Care",
    "brand": "Malibu Suncare",
    "skinFocus": "Daily Lip Hydration, Chapped Lip Healing & Sun Defense",
    "weight": "Set of 2 (1.5 ml each)",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Lip-Gloss-Combo-5025135119545-A.jpg?v=1688231462",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Lip-Gloss-Combo-5025135119545-A.jpg?v=1688231462",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Lip-Gloss-Combo-5025135119545-B.jpg?v=1690910064",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Lip-Gloss-Combo-5025135119545-C.jpg?v=1688231462",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Lip-Gloss-Combo-5025135119545-D.jpg?v=1690910063",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Lip-Gloss-Combo-5025135119545-E.jpg?v=1688231461",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Malibu-Lip-Gloss-Combo-5025135119545-F.jpg?v=1690910064"
    ],
    "freeFrom": [
      "Vegan Formula",
      "Cruelty Free",
      "Paraben Free"
    ],
    "description": "Value duo pack featuring Malibu Coconut and Strawberry SPF 30 vegan lip glosses, combining radiant high-shine gloss with high-level sun defense.",
    "directions": "Apply either flavor onto bare lips or over lip color for SPF 30 shine.",
    "keyIngredients": [
      {
        "name": "SPF 30 Solar Filters",
        "description": "Blocks harmful sunburn UVA & UVB rays.",
        "icon": "Sun"
      },
      {
        "name": "Vitamin E & Aloe",
        "description": "Nourishes and heals dry, chapped lips.",
        "icon": "Droplet"
      },
      {
        "name": "Natural Fruit Flavours",
        "description": "Delicious refreshing taste and comfortable wear.",
        "icon": "Sparkles"
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
  {
    "id": "charcoal-facial-wipes-for-men",
    "name": "KleenOWipe Beard and Face Detox Charcoal Facial Wipes for Men",
    "subtitle": "Beard and Face Detox Charcoal Facial Wipes for Men • 20 Wipes",
    "badge": "DETOX",
    "price": 314,
    "originalPrice": 349,
    "benefits": [
      "Pore Detox",
      "Gentle Cleansing",
      "Alcohol Free"
    ],
    "tags": [
      "Facial Wipes",
      "Tan Removal",
      "Brightness"
    ],
    "category": "Facial Wipes",
    "brand": "KleenOWipe",
    "skinFocus": "Instant Dirt & Makeup Removal, Skin Detox & Freshness",
    "weight": "20 Wipes",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Artboard-1.jpg?v=1690910064",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Artboard-1.jpg?v=1690910064",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Artboard-1-copy-3.jpg?v=1690910064",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Artboard-1-copy-4.jpg?v=1690910065"
    ],
    "freeFrom": [
      "Alcohol Free",
      "Paraben Free",
      "100% Bamboo Biodegradable"
    ],
    "description": "Heavy-duty beard and face detox wipes infused with Activated Charcoal that deeply purify pores, dissolve dirt, sweat, and pollution without alcohol or harsh drying agents.",
    "directions": "Gently wipe face, neck, and beard area. Reseal pack tightly after use to maintain moisture.",
    "keyIngredients": [
      {
        "name": "Activated Bamboo Charcoal",
        "description": "Traps deep environmental toxins and pollution.",
        "icon": "Shield"
      },
      {
        "name": "100% Natural Bamboo",
        "description": "Ultra-soft, biodegradable, non-irritating cloth.",
        "icon": "Leaf"
      },
      {
        "name": "Hydrating Micellar Essence",
        "description": "Cleanses without leaving sticky or dry residue.",
        "icon": "Droplet"
      }
    ]
  },
  {
    "id": "exfoliating-and-cleansing-facial-wipes",
    "name": "KleenOWipe Exfoliating and Cleansing Facial Wipes",
    "subtitle": "Exfoliating and Cleansing Facial Wipes • 15 Wipes",
    "badge": "DETOX",
    "price": 293,
    "originalPrice": 325,
    "benefits": [
      "Pore Detox",
      "Gentle Cleansing",
      "Alcohol Free"
    ],
    "tags": [
      "Facial Wipes",
      "Tan Removal",
      "Brightness"
    ],
    "category": "Facial Wipes",
    "brand": "KleenOWipe",
    "skinFocus": "Instant Dirt & Makeup Removal, Skin Detox & Freshness",
    "weight": "15 Wipes",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Artboard-1-1.jpg?v=1690910065",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Artboard-1-1.jpg?v=1690910065",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Artboard-1-copy-3-1.jpg?v=1690910064",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Artboard-1-copy-4-1.jpg?v=1690910065"
    ],
    "freeFrom": [
      "Alcohol Free",
      "Paraben Free",
      "100% Bamboo Biodegradable"
    ],
    "description": "Dual-action textured facial wipes that gently exfoliate dead surface cells while removing waterproof makeup, sweat, and impurities, leaving skin revitalized and soft.",
    "directions": "Use textured side for gentle exfoliation and smooth side to wipe away makeup and impurities.",
    "keyIngredients": [
      {
        "name": "Activated Bamboo Charcoal",
        "description": "Traps deep environmental toxins and pollution.",
        "icon": "Shield"
      },
      {
        "name": "100% Natural Bamboo",
        "description": "Ultra-soft, biodegradable, non-irritating cloth.",
        "icon": "Leaf"
      },
      {
        "name": "Hydrating Micellar Essence",
        "description": "Cleanses without leaving sticky or dry residue.",
        "icon": "Droplet"
      }
    ]
  },
  {
    "id": "bamboo-charcoal-detox-facial-wipes",
    "name": "KleenOWipe Bamboo Charcoal Detox Facial Wipes",
    "subtitle": "Bamboo Charcoal Detox Facial Wipes • 20 Wipes",
    "badge": "DETOX",
    "price": 314,
    "originalPrice": 349,
    "benefits": [
      "Pore Detox",
      "Gentle Cleansing",
      "Alcohol Free"
    ],
    "tags": [
      "Facial Wipes",
      "Tan Removal",
      "Brightness"
    ],
    "category": "Facial Wipes",
    "brand": "KleenOWipe",
    "skinFocus": "Instant Dirt & Makeup Removal, Skin Detox & Freshness",
    "weight": "20 Wipes",
    "image": "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Artboard-1_d22b6249-429f-4b69-bc7c-edc50ed0976e.jpg?v=1690910063",
    "images": [
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Artboard-1_d22b6249-429f-4b69-bc7c-edc50ed0976e.jpg?v=1690910063",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Artboard-1-copy-3_9958ebda-a3c9-4c43-b3d5-54d9e7fd1548.jpg?v=1690910064",
      "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/Artboard-1-copy-4_6248d823-b25c-4cdf-962a-05e0657ed8af.jpg?v=1688231461"
    ],
    "freeFrom": [
      "Alcohol Free",
      "Paraben Free",
      "100% Bamboo Biodegradable"
    ],
    "description": "100% biodegradable bamboo wipes infused with Activated Charcoal and micellar water to extract deep pore impurities, dust, and excess oil instantly on the go.",
    "directions": "Wipe gently over face and eye area with eyes closed. No rinsing required.",
    "keyIngredients": [
      {
        "name": "Activated Bamboo Charcoal",
        "description": "Traps deep environmental toxins and pollution.",
        "icon": "Shield"
      },
      {
        "name": "100% Natural Bamboo",
        "description": "Ultra-soft, biodegradable, non-irritating cloth.",
        "icon": "Leaf"
      },
      {
        "name": "Hydrating Micellar Essence",
        "description": "Cleanses without leaving sticky or dry residue.",
        "icon": "Droplet"
      }
    ]
  }
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
