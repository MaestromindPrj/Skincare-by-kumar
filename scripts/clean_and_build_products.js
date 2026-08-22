const fs = require('fs');
const path = require('path');

// Clean helper to extract pure description and directions
function parseKowskinHtml(html) {
  if (!html) return { description: '', directions: '' };

  let text = html
    .replace(/<br\s*[\/]?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<[^>]*>?/gm, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();

  // Extract directions for use if present
  let directions = '';
  const dirMatch = text.match(/DIRECTIONS\s*(?:FOR\s*USE)?\s*:?\s*([^.]*?\.)/i) ||
                   text.match(/DIRECTIONS\s*(?:FOR\s*USE)?\s*:?\s*([^A-Z\n]{10,200})/i);
  if (dirMatch) {
    directions = dirMatch[1].trim();
  }

  // Remove boilerplates from description
  let cleanDesc = text
    .replace(/WHAT WE LOVE\s*:?[\s\S]*?(?=DIRECTIONS|INGREDIENT|ABOUT|RETURNS|Manufactured|$)/i, '')
    .replace(/DIRECTIONS\s*(?:FOR\s*USE)?\s*:?[\s\S]*?(?=INGREDIENT|ABOUT|RETURNS|Manufactured|WHAT|$)/i, '')
    .replace(/INGREDIENT\s*LIST\s*:?[\s\S]*?(?=ABOUT|RETURNS|Manufactured|DIRECTIONS|WHAT|$)/i, '')
    .replace(/ABOUT\s*(?:TEOTEMA|MALIBU|KLEENOWIPE|K\.O\.W)[\s\S]*/i, '')
    .replace(/RETURNS\s*&\s*EXCHANGES[\s\S]*/i, '')
    .replace(/Manufactured\s*By\s*:?[\s\S]*/i, '')
    .replace(/Available at all leading Salons[\s\S]*/i, '')
    .replace(/SIZE\s*:\s*\d+\s*ml[\s\S]*/i, '')
    .trim();

  // Clean trailing punctuation / whitespace
  cleanDesc = cleanDesc.replace(/\s+/g, ' ').trim();

  return { description: cleanDesc, directions };
}

// Handcrafted soaps
const existingSoaps = [
  {
    id: "french-red-clay-face-soap",
    name: "French Red Clay Face Soap",
    subtitle: "Organic French Red Clay • Wild Turmeric • Milk Cream",
    badge: "POPULAR",
    price: 330,
    originalPrice: 390,
    benefits: ["Brightening", "Hydrating"],
    tags: ["Brightness", "Hydrating", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    skinFocus: "Deep Cleansing, Complexion Brightening & Moisture Balance",
    weight: "118 - 123 Gms",
    image: "/soaps/FRENCH RED.png",
    freeFrom: ["Synthetic Fragrances Free", "Harsh Chemicals Free", "Paraben Free"],
    description: "Enriched with Organic French Red Clay, Thick Milk Cream, Almond Milk, Wild Turmeric Powder, AloeVera Puree, Saponified Shea Butter, Kokum Butter, Pure Ghee, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate. Premium Fragrance Oils, Rhassoul Red Clay, Natural Kaolin Clay.",
    directions: "Lather with warm water between hands, gently massage onto damp skin in circular motions, and rinse thoroughly.",
    keyIngredients: [
      { name: "Organic French Red Clay", description: "Purifies pores and boosts natural circulation.", icon: "Sparkles" },
      { name: "Thick Milk Cream & Pure Ghee", description: "Deeply nourishes and locks in soft skin hydration.", icon: "Droplet" },
      { name: "Wild Turmeric Powder", description: "Evens out skin tone and reveals natural radiance.", icon: "Sun" },
      { name: "Shea & Kokum Butter", description: "Provides essential fatty acids to protect skin barrier.", icon: "Shield" }
    ]
  },
  {
    id: "kid-soap-extra-luxurious",
    name: "Velvet bathing bar - Kids special",
    subtitle: "Calendula Flowers • Almond Milk • Mango Butter",
    badge: "KIDS' FAVOURITE",
    price: 510,
    originalPrice: 590,
    benefits: ["Ultra Gentle", "Hydrating"],
    tags: ["Baby Friendly", "Hydrating", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    skinFocus: "Extra Gentle Care, Hypoallergenic Moisture & Sensitive Skin",
    weight: "118 - 123 Gms",
    image: "/soaps/KIDDOS.png",
    freeFrom: ["Tear-free Formula", "Harsh Chemicals Free", "Sulphate Free"],
    description: "Enriched with Almond Oil, Calendula Flowers infused Saponified Virgin Olive Oil, Virgin Coconut Oil, Fresh Aloevera Puree, Thick Milk Cream Malai, Raw Honey, Almond Milk, Organic Mango Butter, Organic Kokum Butter, Organic Palmate, Castor Oil, Powdered Calendula Flowers, Premium Fragrance Oils, Natural Rose Pink Clay, Natural Kaolin Clay.",
    directions: "Gently lather over wet skin of infants or children, and rinse gently with tepid water.",
    keyIngredients: [
      { name: "Calendula Flowers", description: "Infused in virgin olive oil to soothe sensitive young skin.", icon: "Leaf" },
      { name: "Raw Honey & Malai", description: "Natural humectants that keep skin supple and smooth.", icon: "Droplet" },
      { name: "Organic Mango & Kokum Butter", description: "Rich plant butters for maximum hydration.", icon: "Heart" },
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
    tags: ["Hydrating", "Brightness", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    skinFocus: "Exfoliation, Skin Softening & Circulation Boost",
    weight: "118 - 123 Gms",
    image: "/soaps/CAFFE LATTE.png",
    freeFrom: ["Synthetic Fragrances Free", "Harsh Chemicals Free", "Paraben Free"],
    description: "Enriched with Thick Milk Cream (Malai), Coffee Grounds, Coffee Bean Oil, Brewed Coffee Decoction, Powdered Herbs, Wild Turmeric Powder, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Natural Rhassoul Clay, Natural Kaolin Clay.",
    directions: "Massage gently onto wet skin in circular motions to buff away dead cells and stimulate circulation, then rinse.",
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
    tags: ["Brightness", "Hydrating", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    skinFocus: "Antioxidant Exfoliation & Berry Glow",
    weight: "118 - 123 Gms",
    image: "/soaps/CAFFE BERRIE.png",
    freeFrom: ["Harsh Chemicals Free", "Paraben Free", "Sulphate Free"],
    description: "Enriched with Thick Milk Cream (Malai), Coffee Grounds, Coffee Bean Oil, Brewed Coffee Decoction, Powdered Herbs, Wild Turmeric Powder, Pomegranate Oil, Strawberry Oil, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Natural French Red Clay, Natural Rose Pink Clay, Natural Kaolin Clay.",
    directions: "Work into a creamy berry lather, gently massage across face and neck, and rinse clean.",
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
    tags: ["Tan Removal", "Brightness", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    skinFocus: "Tan Reversal, Citrus Refreshment & Exfoliation",
    weight: "118 - 123 Gms",
    image: "/soaps/CAFFE ORANGE.png",
    freeFrom: ["Synthetic Fragrances Free", "Harsh Chemicals Free"],
    description: "Enriched with Thick Milk Cream (Malai), Coffee Grounds, Coffee Bean Oil, Brewed Coffee Decoction, Powdered Herbs, Wild Turmeric Powder, Orange Oil, Orange Extract, Orange Peel Powder, Fresh Orange Juice, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Natural French Red Clay, Natural Rhassoul Clay, Natural Kaolin Clay.",
    directions: "Lather over wet skin, allowing the zesty citrus and coffee to gently exfoliate, then rinse well.",
    keyIngredients: [
      { name: "Fresh Orange Juice & Peel Powder", description: "Rich in Vitamin C to clarify sun tan and blemishes.", icon: "Sun" },
      { name: "Coffee Grounds & Decoction", description: "Gentle natural scrub for silky smooth finish.", icon: "Sparkles" },
      { name: "Orange Essential Oil", description: "Lifts spirits with a bright citrus scent.", icon: "Zap" },
      { name: "Shea & Kokum Butter", description: "Prevents skin drying during exfoliation.", icon: "Shield" }
    ]
  },
  {
    id: "siberiian-waters-cologne-spa",
    name: "SIBERIIAN WATERS COLOGNE SPA",
    subtitle: "Cedarwood • Lavender • Spearmint • French Blue Clay",
    badge: "POPULAR",
    price: 280,
    originalPrice: 350,
    benefits: ["Cooling Freshness", "Pore Cleansing"],
    tags: ["Brightness", "Hydrating", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    skinFocus: "Invigorating Cleanse & Cologne Freshness",
    weight: "118 - 123 Gms",
    image: "/soaps/SIBERIIAN.png",
    freeFrom: ["Synthetic Fragrances Free", "Harsh Chemicals Free"],
    description: "Enriched with Cedarwood Essential Oil, Lavender Essential Oil, Spearmint Oil, AloeVera Puree, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, French Blue Clay, Natural Kaolin Clay.",
    directions: "Apply onto damp skin, enjoy the crisp cooling aroma, and rinse thoroughly.",
    keyIngredients: [
      { name: "Cedarwood & Lavender", description: "Soothing woody notes that calm irritated skin.", icon: "Leaf" },
      { name: "Spearmint Essential Oil", description: "Delivers an instant burst of cooling freshness.", icon: "Zap" },
      { name: "French Blue Clay", description: "Draws out deep environmental impurities.", icon: "Sparkles" },
      { name: "Shea & Kokum Butter", description: "Nourishes deeply without leaving greasy residue.", icon: "Heart" }
    ]
  },
  {
    id: "ocean-waters-cologne-spa",
    name: "OCEAN WATERS COLOGNE SPA",
    subtitle: "Aquatic Marine Notes • Bergamot • Sea Salt • Blue Clay",
    badge: "BEST SELLER",
    price: 280,
    originalPrice: 350,
    benefits: ["Aquatic Freshness", "Deep Cleanse"],
    tags: ["Brightness", "Hydrating", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    skinFocus: "Refreshing Ocean Splash & Long-Lasting Aroma",
    weight: "118 - 123 Gms",
    image: "/soaps/OCEAN WATERS.png",
    freeFrom: ["Harsh Chemicals Free", "Paraben Free"],
    description: "Enriched with Marine Extracts, Bergamot Essential Oil, Sea Minerals, AloeVera Puree, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Natural Kaolin Clay, Blue French Clay.",
    directions: "Lather across body during showers for a crisp, oceanic revitalizing experience.",
    keyIngredients: [
      { name: "Marine Minerals & Sea Salts", description: "Replenishes trace minerals and tones the skin.", icon: "Droplet" },
      { name: "Bergamot Essential Oil", description: "Refreshes skin surface and balances natural oils.", icon: "Sun" },
      { name: "Blue French Clay", description: "Gently cleanses and clarifies pores.", icon: "Sparkles" },
      { name: "Olive & Almond Oil", description: "Leaves skin soft, hydrated and supple.", icon: "Shield" }
    ]
  },
  {
    id: "zaarraa-oudh-glow-face-soap",
    name: "ZAARRAA OUDH GLOW Face Soap",
    subtitle: "Arabian Oudh • Saffron Extract • Sweet Almond Milk",
    badge: "POPULAR",
    price: 402,
    originalPrice: 490,
    benefits: ["Luxurious Glow", "Anti-Dryness"],
    tags: ["Brightness", "Hydrating", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    skinFocus: "Royal Oudh Radiance & Velvety Nourishment",
    weight: "118 - 123 Gms",
    image: "/soaps/ZAARRAA.png",
    freeFrom: ["Synthetic Fragrances Free", "Harsh Chemicals Free"],
    description: "Enriched with Rare Arabian Oudh Essence, Saffron Extract, Thick Milk Cream, Fresh Almond Milk, AloeVera Puree, Saponified Shea Butter, Kokum Butter, Pure Ghee, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate. Colours in compliance with EU standards, Kaolin Clay, Rhassoul Red Clay.",
    directions: "Massage the rich Oudh lather over face and neck, leave on for 1 minute, and rinse with tepid water.",
    keyIngredients: [
      { name: "Arabian Oudh Essence", description: "Exquisite royal aroma that elevates bath ritual.", icon: "Sparkles" },
      { name: "Saffron Extract & Milk Cream", description: "Reveals luminous, even skin complexion.", icon: "Sun" },
      { name: "Pure Desi Ghee & Shea Butter", description: "Infuses supreme moisture into thirsty skin.", icon: "Droplet" },
      { name: "Rhassoul Clay", description: "Purifies pores softly and refines texture.", icon: "Shield" }
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
    tags: ["Tan Removal", "Brightness", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    skinFocus: "Royal Herbal Ubtan Glow & Deep Tan Removal",
    weight: "118 - 123 Gms",
    image: "/soaps/SANSKRUTI.png",
    freeFrom: ["Synthetic Fragrances Free", "Harsh Chemicals Free"],
    description: "Enriched with Kesar Ubtan (Natural Herbal Scrub made by mixing Healing Powdered Herbs with Saffron), Sandalwood Oil, Sandalwood Powder, Wild Turmeric Root Powder, Turmeric Root Oil, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards, Premium Fragrance Oils, Rhassoul Red Clay, Kaolin Clay.",
    directions: "Gently massage the herbal ubtan lather over face and body to clear sun tan, then rinse off.",
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
    tags: ["Hydrating", "Baby Friendly", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    skinFocus: "Intense Moisture & Velvet Softness for Dry Skin",
    weight: "118 - 123 Gms",
    image: "/soaps/ALMOND CREAM.png",
    freeFrom: ["Synthetic Fragrances Free", "Harsh Chemicals Free"],
    description: "Enriched with Virgin Sweet Almond Oil, Almond Extract, Almond Milk, Aloevera Puree, Saponified Shea Butter, Kokum Butter, Olive Oil, Coconut Oil, Castor Oil, Organic Palmate. Colours in compliance with EU & other Global Standards, Almond Fragrance Oil, Natural French Red Clay, Natural Kaolin Clay.",
    directions: "Work into a creamy milk foam, massage over dry skin areas, and rinse clean.",
    keyIngredients: [
      { name: "Virgin Sweet Almond Oil", description: "Packed with Vitamin E to restore dry skin elasticity.", icon: "Sparkles" },
      { name: "Fresh Almond Milk", description: "Provides creamy, deeply moisturising skin feel.", icon: "Droplet" },
      { name: "French Red & Kaolin Clay", description: "Smooths dry patches gently.", icon: "Leaf" },
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
    tags: ["Hydrating", "Baby Friendly", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    skinFocus: "Soothing Moisture, Calm Skin & Gentle Exfoliation",
    weight: "118 - 123 Gms",
    image: "/soaps/LUSH OATS.png",
    freeFrom: ["Synthetic Fragrances Free", "Sulphate Free"],
    description: "Enriched with Powdered Oats, Oats Milk, Raw Honey, Natural Vanilla Spice, Caramelised Sugar, Aloevera Puree, Saponified Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate. Colours in compliance with EU & other Global Standards, Premium Fragrance Oils, Rhassoul Red Clay, Natural Kaolin Clay.",
    directions: "Smooth over sensitive or irritated skin, let the oat milk soothe, and rinse gently.",
    keyIngredients: [
      { name: "Powdered Oats & Oat Milk", description: "Relieves skin itchiness and calms inflammation.", icon: "Leaf" },
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
    tags: ["Hydrating", "Brightness", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    skinFocus: "Deep Moisture & Exotic Arabian Oudh Fragrance",
    weight: "118 - 123 Gms",
    image: "/soaps/OASIS ARABIIAN OUDH.png",
    freeFrom: ["Harsh Chemicals Free", "Paraben Free"],
    description: "Enriched with Agar Oil, Sandalwood Oil, AloeVera Puree, Saponified Shea Butter, Cocoa Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Natural Kaolin Clay.",
    directions: "Lather generously, inhale the warm woody oudh notes, and rinse with warm water.",
    keyIngredients: [
      { name: "Pure Agar Oil (Oudh)", description: "Rich, mysterious woody scent that lingers elegantly.", icon: "Sparkles" },
      { name: "Sandalwood Oil", description: "Calms facial skin and brightens complexion.", icon: "Sun" },
      { name: "Cocoa & Shea Butter", description: "Deep conditioning for silky smooth touch.", icon: "Heart" },
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
    tags: ["Brightness", "Hydrating", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    skinFocus: "Purifying Spice & Citrus Refreshment",
    weight: "118 - 123 Gms",
    image: "/soaps/INDUS RIVERR - CINNAMON BERGAMOT.png",
    freeFrom: ["Harsh Chemicals Free", "Paraben Free"],
    description: "Enriched with Bergamot Essential Oil, Citrus Extract, Cinnamon Essential Oil, Rose Geranium Oil, AloeVera Puree, Shea Butter, Kokum Butter, Olive Oil, Almond Oil, Coconut Oil, Castor Oil, Organic Palmate, Colours in compliance with EU and other global standards. Premium Fragrance Oils, Pink French Clay, Natural Kaolin Clay.",
    directions: "Work into a fragrant, spicy lather and massage over body for revitalizing warmth.",
    keyIngredients: [
      { name: "Bergamot & Citrus Extract", description: "Tones oil production and brightens skin.", icon: "Sun" },
      { name: "Cinnamon Essential Oil", description: "Warming spice oil that boosts micro-circulation.", icon: "Zap" },
      { name: "Rose Geranium Oil", description: "Harmonizes floral notes and balances skin tone.", icon: "Sparkles" },
      { name: "Pink French Clay", description: "Smooths skin and absorbs micro-impurities.", icon: "Shield" }
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
    tags: ["Brightness", "Hydrating", "Tan Removal", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    skinFocus: "Brightening, Moisturising & Golden Radiance",
    weight: "118 - 123 Gms",
    image: "/soaps/Chandaan Gold Face Soap.png",
    freeFrom: ["Synthetic Fragrances Free", "Harsh Chemicals Free", "Sulphate Free"],
    description: "Crafted with Sandalwood, Fresh Aloe Vera, Thick Milk Cream, Wild Turmeric, Pure Ghee, Olive Oil, Almond Oil, Shea Butter, Kokum Butter, Brazilian Golden Clay & French Red Clay.",
    directions: "Apply rich golden lather onto face and neck, massage for 1 minute to nourish skin, then rinse.",
    keyIngredients: [
      { name: "Sandalwood & Wild Turmeric", description: "Soothes skin and imparts a luminous golden glow.", icon: "Sun" },
      { name: "Thick Milk Cream & Pure Ghee", description: "Deeply hydrates and restores skin vitality.", icon: "Droplet" },
      { name: "Brazilian Golden Clay", description: "Lifts dull skin layer and boosts radiance.", icon: "Sparkles" },
      { name: "Shea & Kokum Butter", description: "Rich in vitamins to soften and protect skin.", icon: "Heart" }
    ]
  }
];

// Clean Kowskin curated descriptions and directions
const curatedKowskinData = [
  {
    handle: "teotema-ppd-free-ammonia-free-premium-hair-color",
    cleanDesc: "Happy New Hair with Teotema Milano. A gentle, salon-grade hair colouring formula developed in Italy without Ammonia or PPD to protect sensitive scalps while delivering rich, multi-dimensional, vibrant and long-lasting colour.",
    directions: "Mix with designated developer as per salon ratio, apply evenly to sections, process according to desired tone, and rinse thoroughly.",
    size: "100 ml",
    variantLabel: "Choose Your Shade",
    variants: [
      { id: "1-black", name: "1 - Black", colorCode: "#1B1B1B", image: "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.1-Black.jpg?v=1681814883" },
      { id: "3-dark-brown", name: "3 - Dark Brown", colorCode: "#2E1E14", image: "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.3-DarkBrown.jpg?v=1681814879" },
      { id: "4-brown", name: "4 - Brown", colorCode: "#3D271D", image: "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.4-Brown.jpg?v=1681814881" },
      { id: "5-light-brown", name: "5 - Light Brown", colorCode: "#5C3A21", image: "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.5-LightBrown.jpg?v=1681814879" },
      { id: "5.35-light-golden-mahogany-brown", name: "5.35 - Light Golden Mahogany Brown", colorCode: "#63351C", image: "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.5.35-LightGoldenMahoganyBrown.jpg?v=1681814878" },
      { id: "5.99-light-cocoa-brown", name: "5.99 - Light Cocoa Brown", colorCode: "#4A2E1B", image: "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.5.99-LightCocoaBrown.jpg?v=1681814883" },
      { id: "6-dark-blonde", name: "6 - Dark Blonde", colorCode: "#7A5432", image: "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.6-DarkBlonde.jpg?v=1681814880" },
      { id: "6.73-dark-sand-gold-blonde", name: "6.73 - Dark Sand Gold Blonde", colorCode: "#8C6538", image: "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.6.73-DarkSandGoldBlonde.jpg?v=1681814882" },
      { id: "6.99-dark-hazelnut-blonde", name: "6.99 - Dark Hazelnut Blonde", colorCode: "#6B492B", image: "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.6.99-DarkHazelnutBlonde.jpg?v=1681814880" },
      { id: "7-blonde", name: "7 - Blonde", colorCode: "#9E7B4F", image: "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.7-Blonde.jpg?v=1681814884" },
      { id: "7.1-ash-blonde", name: "7.1 - Ash Blonde", colorCode: "#8A7968", image: "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.7.1-AshBlonde.jpg?v=1681814879" },
      { id: "7.99-hazelnut-blonde", name: "7.99 - Hazelnut Blonde", colorCode: "#805A3B", image: "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.7.99-HazelnutBlonde.jpg?v=1681814883" },
      { id: "8-light-blonde", name: "8 - Light Blonde", colorCode: "#B89768", image: "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.8-LightBlonde.jpg?v=1681814879" },
      { id: "9-very-light-blonde", name: "9 - Very light Blonde", colorCode: "#D4B886", image: "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.9-VeryLightBlonde.jpg?v=1681814881" },
      { id: "10-extra-light-blonde", name: "10 - Extra Light Blonde", colorCode: "#E6D0A1", image: "https://cdn.shopify.com/s/files/1/0651/5877/5003/products/No.10-ExtraLightBlonde.jpg?v=1681814884" }
    ]
  },
  {
    handle: "teotema-rebuilding-hair-mask",
    cleanDesc: "Intense hair mask enriched with natural keratin extract to reconstruct weakened and damaged hair fibers right from the root, restoring strength, resilience, and silky softness.",
    directions: "Apply evenly to washed, damp hair, massage thoroughly into lengths, leave on for 7-10 minutes, and rinse completely.",
    size: "250 ml"
  },
  {
    handle: "style-hair-paste-teotema",
    cleanDesc: "A fibrous styling paste for men and women that allows you to shape, define, and control your hairstyle with medium hold and a natural satin shine.",
    directions: "Rub a small amount between palms and work through dry or damp hair to shape and sculpt your style.",
    size: "100 ml"
  },
  {
    handle: "defining-cream-for-curl-styling-oil",
    cleanDesc: "A lightweight styling glaze infused with Castor Oil to control frizz, define bounce, and impart long-lasting elasticity and shine to wavy and curly hair.",
    directions: "Apply a small amount to wet or towel-dried hair, distribute evenly from mid-lengths to ends, and diffuse or air-dry.",
    size: "200 ml"
  },
  {
    handle: "teotema-curl-designer-200-ml",
    cleanDesc: "Advanced Italian styling cream designed specifically to discipline curly and frizzy hair, defining well-structured, bouncy, and touchably soft curls with humidity protection.",
    directions: "Apply onto towel-dried hair, comb through to distribute evenly, and scrunch upwards before drying.",
    size: "200 ml"
  },
  {
    handle: "rebuilding-hair-wash-shampoo",
    cleanDesc: "Rebuilding hair wash shampoo formulated with natural keratin extracts to gently cleanse while repairing damaged, brittle, or chemically treated hair strands.",
    directions: "Apply to wet hair, massage into a rich foam for 2 minutes, and rinse thoroughly.",
    size: "250 ml"
  },
  {
    handle: "teotema-argan-hair-mask",
    cleanDesc: "Deeply moisturizing mask enriched with pure Argan Oil, Macadamia Oil, and Shea Butter to restore optimal capillary hydration, softness, and luminous shine without weighing hair down.",
    directions: "Distribute evenly through washed, damp hair from mid-lengths to tips, leave for 5-7 minutes, then rinse well.",
    size: "250 ml"
  },
  {
    handle: "argan-shampoo-ultra-hydration",
    cleanDesc: "SLES/SLS-free moisturizing shampoo enriched with Argan Oil, Macadamia Oil, and Tea Tree Oil to delicately cleanse, restore moisture balance, and impart softness to dry hair.",
    directions: "Apply to damp hair, massage into scalp until thick lather forms, and rinse clean.",
    size: "250 ml"
  },
  {
    handle: "daily-care-hair-wash-shampoo",
    cleanDesc: "Gentle daily hair wash shampoo enriched with Bamboo extract and Avocado Oil that hydrates, strengthens hair fibers, and boosts natural body and volume with frequent washing.",
    directions: "Apply to damp hair, massage scalp gently, and rinse clean. Suitable for daily use.",
    size: "250 ml"
  },
  {
    handle: "teotema-hair-shine-spray",
    cleanDesc: "Push-up volumizing hair shine spray that provides invisible hold, body, and radiant gloss without stiffness or sticky residue.",
    directions: "Spray from 20-30 cm distance onto dry, styled hair for instant volume and luminous shine.",
    size: "200 ml"
  },
  {
    handle: "moisture_balance_shampoo",
    cleanDesc: "Moisture balance shampoo enriched with Sunflower extract and Vitamin E to soothe dry, frizzy hair, restoring elasticity and natural moisture without parabens or harsh dyes.",
    directions: "Massage into wet hair to create a rich lather, then rinse thoroughly with water.",
    size: "250 ml"
  },
  {
    handle: "moisture_balance_antifrizz_serum",
    cleanDesc: "Luxurious anti-frizz serum with Castor Oil and Glycerin that tames flyaways, seals split ends, and leaves hair ultra-sleek, manageable, and mirror-shiny.",
    directions: "Dispense 2-3 drops onto palms and smooth evenly over damp or dry hair lengths.",
    size: "100 ml"
  },
  {
    handle: "moisture-balance-hair-mask",
    cleanDesc: "Intense Italian moisture treatment that deeply nourishes and repairs dry or frizzy hair, smoothing the cuticle layer and restoring silky manageability.",
    directions: "Apply generously to damp lengths after shampooing, leave for 5-10 minutes, and rinse thoroughly.",
    size: "250 ml"
  },
  {
    handle: "teotema-leave-in-conditioner",
    cleanDesc: "Lightweight leave-in conditioner enriched with Bamboo extract, Avocado Oil, and natural Keratin that detangles immediately and seals cuticles against heat styling.",
    directions: "Spray or distribute evenly onto towel-dried hair before combing. Do not rinse out.",
    size: "250 ml"
  },
  {
    handle: "malibu-suncare-lip-gloss-strawberry",
    cleanDesc: "Delicious Strawberry flavored vegan lip gloss offering SPF 30 broad spectrum UVA/UVB protection and long-lasting moisture against sun, wind, and dryness.",
    directions: "Glide over lips frequently, especially before sun exposure or outdoor activities.",
    size: "1.5 ml"
  },
  {
    handle: "malibu-suncare-lip-gloss-coconut",
    cleanDesc: "Tropical Coconut flavored vegan lip gloss infused with SPF 30 solar filters to shield lips from burning and chapping while delivering a high-shine glossy finish.",
    directions: "Apply liberally to lips throughout the day as needed.",
    size: "1.5 ml"
  },
  {
    handle: "spf-lip-balm-pina-colada",
    cleanDesc: "Moisturizing Pina Colada SPF 30 lip balm that shields lips from UV rays, harsh winds, and cold weather, leaving lips deeply hydrated and soft.",
    directions: "Apply generously on lips 15 minutes before sun exposure. Reapply regularly.",
    size: "4g"
  },
  {
    handle: "spf-lip-balm-mojito",
    cleanDesc: "Refreshing Mojito flavored SPF 30 lip balm packed with soothing emollients to nourish dry lips and provide reliable UVA/UVB photoprotection.",
    directions: "Smooth onto lips as needed for continuous sun and wind protection.",
    size: "4g"
  },
  {
    handle: "malibu-suncare-sunscreen-clear-spray",
    cleanDesc: "High protection SPF 50 continuous clear spray that goes on invisibly without white residue, providing rapid-absorbing, water-resistant broad spectrum UVA and UVB defense.",
    directions: "Spray generously and evenly across skin 30 minutes before sun exposure. Reapply after swimming or towel drying.",
    size: "175 ml"
  },
  {
    handle: "spf-lip-balm-watermelon",
    cleanDesc: "Juicy Watermelon flavored vegan SPF 30 lip balm that glides smoothly over lips to lock in moisture and protect delicate lip tissue from sun damage.",
    directions: "Apply evenly to lips as needed throughout the day.",
    size: "5g"
  },
  {
    handle: "malibu-suncare-spf-body-lotion-spray",
    cleanDesc: "Hydrating SPF 50 body lotion spray with Aloe Vera and Vitamin E, delivering broad-spectrum sun protection while soothing skin and preventing sun-induced dehydration.",
    directions: "Spray evenly over body 30 minutes prior to sun exposure and rub in gently.",
    size: "200 ml"
  },
  {
    handle: "spf-lip-balm-tropical",
    cleanDesc: "Exotic Tropical fruit flavor SPF 30 vegan lip balm providing essential moisture and UV defense to prevent painful sunburn and peeling lips.",
    directions: "Apply to lips liberally before heading outdoors.",
    size: "5g"
  },
  {
    handle: "spf-lip-balm-vanilla",
    cleanDesc: "Sweet soothing Vanilla flavored vegan SPF 30 lip balm that delivers rich barrier hydration and broad spectrum solar protection in all seasons.",
    directions: "Smooth over lips regularly for continuous comfort and UV defense.",
    size: "5g"
  },
  {
    handle: "spf-lip-balm-strawberry",
    cleanDesc: "Sweet Strawberry flavored vegan SPF 30 lip balm formulated to protect lips from drying sun and wind while providing long-lasting hydration.",
    directions: "Apply evenly to lips throughout the day.",
    size: "5g"
  },
  {
    handle: "malibu-lip-gloss-combo",
    cleanDesc: "Value duo pack featuring Malibu Coconut and Strawberry SPF 30 vegan lip glosses, combining radiant high-shine gloss with high-level sun defense.",
    directions: "Apply either flavor onto bare lips or over lip color for SPF 30 shine.",
    size: "Set of 2 (1.5 ml each)"
  },
  {
    handle: "all-day-face-cream",
    cleanDesc: "Lightweight SPF 50 daily facial sun cream enriched with Aloe Vera and Vitamin E to protect sensitive facial skin from UVA/UVB rays without clogging pores or leaving white cast.",
    directions: "Apply evenly over face and neck 20 minutes before sun exposure. Can be used under makeup.",
    size: "40 ml"
  },
  {
    handle: "charcoal-facial-wipes-for-men",
    cleanDesc: "Heavy-duty beard and face detox wipes infused with Activated Charcoal that deeply purify pores, dissolve dirt, sweat, and pollution without alcohol or harsh drying agents.",
    directions: "Gently wipe face, neck, and beard area. Reseal pack tightly after use to maintain moisture.",
    size: "20 Wipes"
  },
  {
    handle: "exfoliating-and-cleansing-facial-wipes",
    cleanDesc: "Dual-action textured facial wipes that gently exfoliate dead surface cells while removing waterproof makeup, sweat, and impurities, leaving skin revitalized and soft.",
    directions: "Use textured side for gentle exfoliation and smooth side to wipe away makeup and impurities.",
    size: "15 Wipes"
  },
  {
    handle: "bamboo-charcoal-detox-facial-wipes",
    cleanDesc: "100% biodegradable bamboo wipes infused with Activated Charcoal and micellar water to extract deep pore impurities, dust, and excess oil instantly on the go.",
    directions: "Wipe gently over face and eye area with eyes closed. No rinsing required.",
    size: "20 Wipes"
  }
];

async function run() {
  console.log('Fetching live products from kowskin.com...');
  const res = await fetch('https://kowskin.com/products.json?limit=250');
  const data = await res.json();

  const kowskinProducts = data.products.map((p) => {
    const handle = p.handle;
    const title = p.title.replace(/\s*\|\s*Teotema.*$/i, '').replace(/\s*\|\s*Malibu.*$/i, '').replace(/\s*\|\s*KleenOWipe.*$/i, '').trim();
    const rawType = p.product_type || '';
    const price = Math.round(parseFloat(p.variants[0]?.price || '0'));
    const originalPrice = p.variants[0]?.compare_at_price ? Math.round(parseFloat(p.variants[0].compare_at_price)) : Math.round(price * 1.15);
    const images = p.images.map(img => img.src);
    const mainImage = images[0] || '';

    const curated = curatedKowskinData.find(c => c.handle === handle) || {};

    let category = "Hair Care";
    let brand = "Teotema";
    let tags = [];
    let benefits = [];
    let badge = undefined;
    let weight = curated.size || "Standard Size";
    let skinFocus = "";
    let freeFrom = ["Paraben Free", "Cruelty Free"];
    let keyIngredients = [];

    // Determine Brand & Category
    if (p.title.toLowerCase().includes('teotema') || rawType.toLowerCase().includes('hair') || rawType.toLowerCase().includes('shampoo') || rawType.toLowerCase().includes('conditioner')) {
      brand = "Teotema";
      category = "Hair Care";
      freeFrom = ["SLS & SLES Free", "Paraben Free", "Made in Italy"];

      if (p.title.toLowerCase().includes('shampoo')) {
        tags = ["Hair Care", "Shampoo", "Hydrating"];
        benefits = ["Deep Cleanse", "Scalp Care"];
        skinFocus = "Scalp Cleansing, Strength & Moisture Retention";
        weight = curated.size || "250 ml";
        keyIngredients = [
          { name: "Bamboo & Avocado Lipids", description: "Nourishes hair fibers from roots to tips.", icon: "Leaf" },
          { name: "Essential Vitamins & Proteins", description: "Strengthens strands against breakage.", icon: "Sparkles" },
          { name: "Natural Emollients", description: "Restores scalp natural moisture mantle.", icon: "Droplet" }
        ];
      } else if (p.title.toLowerCase().includes('mask')) {
        tags = ["Hair Care", "Hair Mask", "Hydrating"];
        benefits = ["Intense Hydration", "Damage Repair"];
        skinFocus = "Deep Fiber Reconstruction & Frizz Elimination";
        weight = curated.size || "250 ml";
        badge = "BEST SELLER";
        keyIngredients = [
          { name: "Keratin & Argan Matrix", description: "Fills in microscopic hair shaft damage.", icon: "Sparkles" },
          { name: "Macadamia Oil", description: "Imparts luminous gloss and silky softness.", icon: "Droplet" },
          { name: "Amino Complex", description: "Reinforces tensile strength and elasticity.", icon: "Shield" }
        ];
      } else if (p.title.toLowerCase().includes('color') || p.title.toLowerCase().includes('colour')) {
        tags = ["Hair Care", "Hair Colour"];
        benefits = ["PPD Free", "Ammonia Free", "Long Lasting"];
        skinFocus = "Gentle Gray Coverage & Luminous Italian Color";
        weight = curated.size || "100 ml";
        badge = "AMMONIA FREE";
        freeFrom = ["Ammonia Free", "PPD Free", "Gentle Formula"];
        keyIngredients = [
          { name: "Micro-Pigment Technology", description: "Even, high-definition tonal penetration.", icon: "Sparkles" },
          { name: "Conditioning Botanical Base", description: "Protects cuticle shine during application.", icon: "Leaf" },
          { name: "Hydrating Oils", description: "Prevents dryness and maintains vibrant sheen.", icon: "Droplet" }
        ];
      } else if (p.title.toLowerCase().includes('conditioner')) {
        tags = ["Hair Care", "Conditioner", "Hydrating"];
        benefits = ["Detangling", "Leave-in Moisture"];
        skinFocus = "Instant Detangling, Cuticle Sealing & Heat Protection";
        weight = curated.size || "250 ml";
        keyIngredients = [
          { name: "Bamboo Extract", description: "Enhances elasticity and flexibility.", icon: "Leaf" },
          { name: "Avocado Oil", description: "Feeds essential fatty acids to dry ends.", icon: "Droplet" },
          { name: "Keratin Hydrolysate", description: "Seals split cuticle layers.", icon: "Shield" }
        ];
      } else {
        tags = ["Hair Care", "Styling"];
        benefits = ["Flexible Hold", "Frizz Control"];
        skinFocus = "Style Definition, Shine & Humidity Shield";
        weight = curated.size || "200 ml";
        keyIngredients = [
          { name: "Castor & Mineral Extracts", description: "Defines curls and controls stubborn flyaways.", icon: "Sparkles" },
          { name: "Protective Polymers", description: "Shields style against environmental humidity.", icon: "Shield" },
          { name: "Glossing Agents", description: "Imparts natural, non-greasy luster.", icon: "Sun" }
        ];
      }
    } else if (p.title.toLowerCase().includes('malibu') || rawType.toLowerCase().includes('sunscreen') || rawType.toLowerCase().includes('lip')) {
      brand = "Malibu Suncare";

      if (rawType.toLowerCase().includes('lip') || p.title.toLowerCase().includes('lip')) {
        category = "Lip Care";
        tags = ["Lip Care", "SPF 30", "Hydrating"];
        benefits = ["SPF 30 Protection", "Moisturizing", "UVA/UVB Defense"];
        skinFocus = "Daily Lip Hydration, Chapped Lip Healing & Sun Defense";
        weight = curated.size || (p.title.toLowerCase().includes('gloss') ? "1.5 ml" : "5g");
        badge = "SPF 30";
        freeFrom = ["Vegan Formula", "Cruelty Free", "Paraben Free"];
        keyIngredients = [
          { name: "SPF 30 Solar Filters", description: "Blocks harmful sunburn UVA & UVB rays.", icon: "Sun" },
          { name: "Vitamin E & Aloe", description: "Nourishes and heals dry, chapped lips.", icon: "Droplet" },
          { name: "Natural Fruit Flavours", description: "Delicious refreshing taste and comfortable wear.", icon: "Sparkles" }
        ];
      } else {
        category = "Sun Care & SPF";
        tags = ["Sun Care & SPF", "SPF 50", "Tan Removal"];
        benefits = ["SPF 50 High Protection", "Water Resistant", "Broad Spectrum"];
        skinFocus = "UVA/UVB Photoprotection, Anti-Photoaging & Daily Defense";
        weight = curated.size || (p.title.toLowerCase().includes('cream') ? "40 ml" : "200 ml");
        badge = "SPF 50";
        freeFrom = ["Vegan", "Water Resistant", "Cruelty Free"];
        keyIngredients = [
          { name: "Broad Spectrum SPF 50", description: "High-level protection against sun damage and tanning.", icon: "Sun" },
          { name: "Aloe Vera & Vitamin E", description: "Soothes skin and prevents sun-induced dehydration.", icon: "Droplet" },
          { name: "Water-Resistant Matrix", description: "Stays effective during swimming and sweat.", icon: "Shield" }
        ];
      }
    } else if (p.title.toLowerCase().includes('kleenowipe') || rawType.toLowerCase().includes('wipe') || rawType.toLowerCase().includes('makeup')) {
      brand = "KleenOWipe";
      category = "Facial Wipes";
      tags = ["Facial Wipes", "Tan Removal", "Brightness"];
      benefits = ["Pore Detox", "Gentle Cleansing", "Alcohol Free"];
      skinFocus = "Instant Dirt & Makeup Removal, Skin Detox & Freshness";
      weight = curated.size || (p.title.includes('15') ? "15 Wipes" : "20 Wipes");
      badge = "DETOX";
      freeFrom = ["Alcohol Free", "Paraben Free", "100% Bamboo Biodegradable"];
      keyIngredients = [
        { name: "Activated Bamboo Charcoal", description: "Traps deep environmental toxins and pollution.", icon: "Shield" },
        { name: "100% Natural Bamboo", description: "Ultra-soft, biodegradable, non-irritating cloth.", icon: "Leaf" },
        { name: "Hydrating Micellar Essence", description: "Cleanses without leaving sticky or dry residue.", icon: "Droplet" }
      ];
    }

    // Refine subtitle
    const subtitle = p.title
      .replace(/^Teotema\s+/i, '')
      .replace(/^Malibu\s+/i, '')
      .replace(/^KleenOWipe\s+/i, '')
      .replace(/^Spf Lip Balm\s*\|\s*/i, 'SPF 30 Lip Balm • ')
      .replace(/\s*\|\s*/g, ' • ')
      .slice(0, 75);

    const description = curated.cleanDesc || parseKowskinHtml(p.body_html).description;
    const directions = curated.directions || parseKowskinHtml(p.body_html).directions;

    return {
      id: handle,
      name: p.title.split('|')[0].trim(),
      subtitle: subtitle,
      badge: badge,
      price: price,
      originalPrice: originalPrice > price ? originalPrice : Math.round(price * 1.15),
      benefits: benefits,
      tags: tags,
      category: category,
      brand: brand,
      skinFocus: skinFocus || "Targeted Skincare & Wellness Care",
      weight: weight,
      image: mainImage,
      images: images,
      freeFrom: freeFrom,
      variantLabel: curated.variantLabel || undefined,
      variants: curated.variants || undefined,
      description: description,
      directions: directions || undefined,
      keyIngredients: keyIngredients
    };
  });

  const allProducts = [...existingSoaps, ...kowskinProducts];
  console.log(`Generated ${allProducts.length} total products with clean descriptions and variants!`);

  const fileContent = `export interface ProductVariant {
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

export const PRODUCTS: Product[] = ${JSON.stringify(allProducts, null, 2)};

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
`;

  fs.writeFileSync(path.join(__dirname, '../src/data/products.ts'), fileContent, 'utf8');
  console.log('Successfully written clean data to src/data/products.ts!');
}

run().catch(console.error);
