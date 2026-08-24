const fs = require('fs');
const path = require('path');

const kowskinData = require('../scratch_kowskin_products.json');

function cleanHtml(html) {
  if (!html) return '';
  return html
    .replace(/<br\s*[\/]?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<[^>]*>?/gm, '')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\n\s*\n/g, '\n\n')
    .replace(/ +/g, ' ')
    .trim();
}

// Current existing 14 soaps
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
    brand: "Skincare By Kumar",
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
    id: "kid-soap-extra-luxurious",
    name: "Kid Soap - Extra Luxurious Bar",
    subtitle: "Calendula Flowers • Almond Milk • Mango Butter",
    badge: "KIDS' FAVOURITE",
    price: 510,
    originalPrice: 590,
    benefits: ["Ultra Gentle", "Hydrating"],
    tags: ["Baby Friendly", "Hydrating", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    brand: "Skincare By Kumar",
    skinFocus: "Extra Gentle Care, Hypoallergenic Moisture & Sensitive Skin",
    weight: "118 - 123 Gms",
    image: "/soaps/KIDDOS.png",
    freeFrom: ["Tear-free Formula", "Harsh Chemicals Free", "Sulphate Free"],
    description: "Enriched with Almond Oil, Calendula Flowers infused Saponified Virgin Olive Oil, Virgin Coconut Oil, Fresh Aloevera Puree, Thick Milk Cream Malai, Raw Honey, Almond Milk, Organic Mango Butter, Organic Kokum Butter, Organic Palmate, Castor Oil, Powdered Calendula Flowers, Premium Fragrance Oils, Natural Rose Pink Clay, Natural Kaolin Clay.",
    keyIngredients: [
      { name: "Calendula Flowers", description: "Soothes delicate baby and sensitive skin naturally.", icon: "Leaf" },
      { name: "Almond Milk & Raw Honey", description: "Gentle natural emollient that hydrates without stinging.", icon: "Droplet" },
      { name: "Mango & Kokum Butter", description: "Shields tender skin against dryness.", icon: "Heart" },
      { name: "Virgin Olive Oil", description: "Ultra-pure botanical lipid base.", icon: "Sparkles" }
    ]
  },
  {
    id: "activated-charcoal-tea-tree",
    name: "Activated Charcoal & Tea Tree Soap",
    subtitle: "Bamboo Charcoal • Pure Australian Tea Tree • Raw Honey",
    badge: "BEST SELLER",
    price: 350,
    originalPrice: 420,
    benefits: ["Deep Cleansing", "Clarifying"],
    tags: ["Tan Removal", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    brand: "Skincare By Kumar",
    skinFocus: "Acne Control, Blackhead Extraction & Excess Sebum Balance",
    weight: "118 - 123 Gms",
    image: "/soaps/Activated Charcoal.png",
    freeFrom: ["Paraben Free", "Sulphate Free", "Cruelty Free"],
    description: "Formulated with activated bamboo charcoal and pure tea tree essential oil, this detoxifying bar magnetically pulls deep-seated pollution, unclogs stubborn pores, and clarifies blemishes without stripping the skin's moisture mantle.",
    keyIngredients: [
      { name: "Bamboo Charcoal", description: "Draws out micro-pollutants and impurities.", icon: "Shield" },
      { name: "Pure Tea Tree Oil", description: "Potent botanical antimicrobial that calms flare-ups.", icon: "Leaf" },
      { name: "Organic Honey", description: "Naturally balances hydration and accelerates healing.", icon: "Droplet" },
      { name: "Cold-Pressed Coconut Oil", description: "Rich, creamy lather that cleanses without dryness.", icon: "Sparkles" }
    ]
  },
  {
    id: "goat-milk-pure-honey",
    name: "Goat Milk & Pure Honey Soap",
    subtitle: "Farm Fresh Goat Milk • Raw Forest Honey • Shea Butter",
    badge: "ALL TIME FAVOURITE",
    price: 360,
    originalPrice: 430,
    benefits: ["Hydrating", "Ultra Gentle"],
    tags: ["Hydrating", "Baby Friendly", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    brand: "Skincare By Kumar",
    skinFocus: "Intense Moisture, Barrier Restoration & Sensitive Skin",
    weight: "118 - 123 Gms",
    image: "/soaps/GOAT MILK.png",
    freeFrom: ["Sulphate Free", "Artificial Colours Free", "Paraben Free"],
    description: "Fresh goat milk contains natural lactic acid that delicately micro-exfoliates dead cells while saturated fatty acids infuse continuous hydration. Blended with raw forest honey for velvety softness.",
    keyIngredients: [
      { name: "Farm Fresh Goat Milk", description: "Packed with vitamins A, B, and natural lactic acid.", icon: "Droplet" },
      { name: "Raw Forest Honey", description: "Natural humectant drawing environmental moisture.", icon: "Sun" },
      { name: "Raw Shea Butter", description: "Locks in deep epidermal lipid barriers.", icon: "Heart" },
      { name: "Sweet Almond Oil", description: "Smooths dry patches and promotes elasticity.", icon: "Sparkles" }
    ]
  },
  {
    id: "pure-saffron-honey-glow",
    name: "Pure Saffron & Honey Soap",
    subtitle: "Kashmiri Mongra Saffron • Raw Wild Honey • Goat Milk",
    badge: "POPULAR",
    price: 390,
    originalPrice: 460,
    benefits: ["Brightening", "Radiance"],
    tags: ["Brightness", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    brand: "Skincare By Kumar",
    skinFocus: "Complexion Radiance, Pigmentation Reduction & Glow",
    weight: "118 - 123 Gms",
    image: "/soaps/KASHMIRI SAFFRON.png",
    freeFrom: ["Paraben Free", "Mineral Oil Free", "Toxic Chemicals Free"],
    description: "Infused with genuine Kashmiri Mongra Saffron strands and sweet wild honey. Saffron has been revered for centuries for its illuminating and tone-evening qualities.",
    keyIngredients: [
      { name: "Kashmiri Mongra Saffron", description: "Rich in antioxidants for illuminated, even tone.", icon: "Sun" },
      { name: "Pure Honey", description: "Imparts a soft dewy glow and retains hydration.", icon: "Droplet" },
      { name: "Cold-Pressed Olive Oil", description: "Nourishes with oleic acids for firmness.", icon: "Sparkles" },
      { name: "Shea Butter", description: "Protects and softens skin texture.", icon: "Shield" }
    ]
  },
  {
    id: "neem-tulsi-purifying",
    name: "Neem & Tulsi Purifying Soap",
    subtitle: "Organic Neem Leaf Oil • Holy Basil (Tulsi) • Aloe Vera",
    price: 320,
    originalPrice: 380,
    benefits: ["Clarifying", "Antibacterial"],
    tags: ["Tan Removal", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    brand: "Skincare By Kumar",
    skinFocus: "Bacterial Defense, Itch Relief & Environmental Protection",
    weight: "118 - 123 Gms",
    image: "/soaps/NEEM.png",
    freeFrom: ["SLS Free", "Paraben Free", "Petrochemicals Free"],
    description: "An Ayurvedic powerhouse combining therapeutic Neem and sacred Tulsi. Cleanses away germs, sweat, and environmental grime, leaving skin invigorated and calm.",
    keyIngredients: [
      { name: "Organic Neem Extract", description: "Time-tested antibacterial and skin purifying agent.", icon: "Leaf" },
      { name: "Holy Basil (Tulsi)", description: "Antioxidant herb that refreshes and protects.", icon: "Sparkles" },
      { name: "Aloe Vera Gel", description: "Cools inflammation and soothes irritation.", icon: "Droplet" },
      { name: "Castor Oil", description: "Provides dense conditioning foam.", icon: "Shield" }
    ]
  },
  {
    id: "wild-turmeric-sandalwood",
    name: "Wild Turmeric & Sandalwood Soap",
    subtitle: "Kasturi Manjal • Mysore Sandalwood • Sweet Almond Oil",
    badge: "POPULAR",
    price: 370,
    originalPrice: 440,
    benefits: ["Brightening", "Soothing"],
    tags: ["Brightness", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    brand: "Skincare By Kumar",
    skinFocus: "Sun Tan Correction, Skin Soothing & Golden Glow",
    weight: "118 - 123 Gms",
    image: "/soaps/KASTURI MANJAL.png",
    freeFrom: ["Synthetic Dyes Free", "Phthalate Free", "Cruelty Free"],
    description: "Wild aromatic turmeric (Kasturi Manjal) known for non-staining complexion brightness paired with soothing, aromatic Mysore Sandalwood.",
    keyIngredients: [
      { name: "Kasturi Manjal (Wild Turmeric)", description: "Brightens pigmentation and evens sun tans.", icon: "Sun" },
      { name: "Mysore Sandalwood Oil", description: "Cooling aromatic essence that calms skin redness.", icon: "Sparkles" },
      { name: "Sweet Almond Oil", description: "Rich in Vitamin E for supple skin feel.", icon: "Droplet" },
      { name: "Kokum Butter", description: "Rejuvenates dry and sun-exposed skin.", icon: "Shield" }
    ]
  },
  {
    id: "papaya-glow-brightening",
    name: "Papaya Glow & Brightening Soap",
    subtitle: "Natural Papain Fruit Extract • Milk Cream • Orange Oil",
    price: 340,
    originalPrice: 400,
    benefits: ["Brightening", "Exfoliating"],
    tags: ["Brightness", "Tan Removal", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    brand: "Skincare By Kumar",
    skinFocus: "Cellular Renewal, Tan Removal & Luminous Complexion",
    weight: "118 - 123 Gms",
    image: "/soaps/PAPAYA.png",
    freeFrom: ["Bleach Free", "Paraben Free", "Harsh Detergents Free"],
    description: "Natural Papaya puree contains Papain enzymes that gently dislodge dull outer skin cells, revealing fresh, illuminated, and radiant new skin underneath.",
    keyIngredients: [
      { name: "Fresh Papaya Puree", description: "Natural enzyme exfoliant that sloughs dead skin cells.", icon: "Sun" },
      { name: "Thick Milk Cream", description: "Softens and prevents moisture loss during cleansing.", icon: "Droplet" },
      { name: "Sweet Orange Essential Oil", description: "Uplifts spirit and delivers brightening Vitamin C.", icon: "Sparkles" },
      { name: "Virgin Olive Oil", description: "Deeply conditions the stratum corneum.", icon: "Leaf" }
    ]
  },
  {
    id: "coffee-scrub-exfoliating",
    name: "Coffee Scrub & Exfoliating Soap",
    subtitle: "Arabica Coffee Grounds • Cocoa Butter • Vanilla Bean",
    price: 340,
    originalPrice: 400,
    benefits: ["Exfoliating", "Energizing"],
    tags: ["Tan Removal", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    brand: "Skincare By Kumar",
    skinFocus: "Cellulite Smoothing, Flaky Skin Removal & Circulation Boost",
    weight: "118 - 123 Gms",
    image: "/soaps/COFFEE.png",
    freeFrom: ["Microbead Free", "Paraben Free", "Sulphate Free"],
    description: "Finely roasted Arabica coffee grounds provide rich natural mechanical exfoliation to buff away dry patches, while natural caffeine stimulates microcirculation.",
    keyIngredients: [
      { name: "Ground Arabica Coffee", description: "Physical micro-scrub that sweeps dead skin away.", icon: "Sparkles" },
      { name: "Unrefined Cocoa Butter", description: "Melts on touch for chocolatey hydration.", icon: "Heart" },
      { name: "Cold Pressed Coconut Oil", description: "Ensures gentle, cushiony scrub glide.", icon: "Droplet" },
      { name: "Vanilla Extract", description: "Comforting, warm natural scent.", icon: "Sun" }
    ]
  },
  {
    id: "aloe-vera-cucumber-cooling",
    name: "Aloe Vera & Cucumber Cooling Soap",
    subtitle: "Organic Aloe Puree • Fresh Cucumber Juice • Mint",
    price: 310,
    originalPrice: 370,
    benefits: ["Hydrating", "Soothing"],
    tags: ["Hydrating", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    brand: "Skincare By Kumar",
    skinFocus: "Sunburn Relief, Deep Hydration & Cooling Freshness",
    weight: "118 - 123 Gms",
    image: "/soaps/ALOEVERA.png",
    freeFrom: ["Artificial Colors Free", "Sulphates Free", "Cruelty Free"],
    description: "An oasis of hydration made with 100% pure organic inner-leaf Aloe Vera fillet and freshly pressed cucumber juice for ultra-refreshing post-sun cleansing.",
    keyIngredients: [
      { name: "Organic Aloe Vera", description: "Infuses moisture and instantly cools skin.", icon: "Droplet" },
      { name: "Fresh Cucumber Extract", description: "Reduces puffiness and hydrates sensitive skin.", icon: "Leaf" },
      { name: "Virgin Coconut Oil", description: "Nourishes without clogging pores.", icon: "Sparkles" },
      { name: "Shea Butter", description: "Smooths skin texture and seals hydration.", icon: "Shield" }
    ]
  },
  {
    id: "rose-petal-sweet-almond",
    name: "Rose Petal & Sweet Almond Soap",
    subtitle: "Damask Rose Water • Crushed Petals • Virgin Almond Oil",
    badge: "POPULAR",
    price: 360,
    originalPrice: 420,
    benefits: ["Hydrating", "Softening"],
    tags: ["Hydrating", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    brand: "Skincare By Kumar",
    skinFocus: "Velvety Softness, Delicate Floral Aroma & Anti-Dryness",
    weight: "118 - 123 Gms",
    image: "/soaps/ROSE.png",
    freeFrom: ["Paraben Free", "Mineral Oil Free", "Toxic Chemicals Free"],
    description: "Steam-distilled Damask Rose water and virgin cold-pressed sweet almond oil deliver an indulgent, romantic floral bath that leaves skin supple and fragrant.",
    keyIngredients: [
      { name: "Damask Rose Water", description: "Tones skin and imparts delicate romantic essence.", icon: "Sparkles" },
      { name: "Cold Pressed Almond Oil", description: "Enriched with vitamins E and A for petal-soft touch.", icon: "Droplet" },
      { name: "Rose Pink Clay", description: "Very mild mineral clay that cleanses delicate skin.", icon: "Sun" },
      { name: "Kokum Butter", description: "Provides barrier elasticity and moisture.", icon: "Heart" }
    ]
  },
  {
    id: "ocean-breeze-mineral-soap",
    name: "Ocean Breeze Mineral Soap",
    subtitle: "Dead Sea Salt • Blue French Clay • Spearmint Oil",
    price: 330,
    originalPrice: 390,
    benefits: ["Invigorating", "Pore Refining"],
    tags: ["Tan Removal", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    brand: "Skincare By Kumar",
    skinFocus: "Mineral Replenishment, Body Odor Defense & Crisp Vitality",
    weight: "118 - 123 Gms",
    image: "/soaps/OCEAN.png",
    freeFrom: ["Harsh Sulfates Free", "Phthalates Free", "Cruelty Free"],
    description: "Infused with therapeutic Dead Sea minerals and pure spearmint oil, this revitalizing blue bar provides a crisp morning shower that awakens body and mind.",
    keyIngredients: [
      { name: "Dead Sea Minerals", description: "21 essential minerals that rebalance skin vitality.", icon: "Sparkles" },
      { name: "Blue French Clay", description: "Gently draws out sebum and tones enlarged pores.", icon: "Shield" },
      { name: "Spearmint & Eucalyptus Oil", description: "Crisp, energizing aromatherapy awakening.", icon: "Leaf" },
      { name: "Cold Pressed Coconut Oil", description: "Produces dense, refreshing ocean foam.", icon: "Droplet" }
    ]
  },
  {
    id: "lemon-grass-mint-revive",
    name: "Lemon Grass & Mint Soap",
    subtitle: "Fresh Lemongrass Oil • Garden Peppermint • Green Clay",
    price: 320,
    originalPrice: 380,
    benefits: ["Energizing", "Clarifying"],
    tags: ["Tan Removal", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    brand: "Skincare By Kumar",
    skinFocus: "Pore Tightening, Morning Awakening & Sweat Neutralization",
    weight: "118 - 123 Gms",
    image: "/soaps/LEMON GRASS.png",
    freeFrom: ["Paraben Free", "Synthetic Dyes Free", "Cruelty Free"],
    description: "Zesty Indian Lemongrass combined with crisp Garden Peppermint leaves a tingling cool sensation on the skin, ideal for tropical heat and active days.",
    keyIngredients: [
      { name: "Lemongrass Essential Oil", description: "Natural astringent that minimizes open pores.", icon: "Sun" },
      { name: "Peppermint Essential Oil", description: "Provides lasting cooling refreshment.", icon: "Sparkles" },
      { name: "French Green Clay", description: "Absorbs excess surface oil without dehydrating.", icon: "Leaf" },
      { name: "Virgin Olive Oil", description: "Replenishes skin barrier lipids.", icon: "Droplet" }
    ]
  },
  {
    id: "kasturi-manjal-glow-soap",
    name: "Kasturi Manjal Aromatic Soap",
    subtitle: "Pure Wild Turmeric • Thick Milk Cream • Raw Honey",
    badge: "POPULAR",
    price: 350,
    originalPrice: 410,
    benefits: ["Brightening", "Tan Removal"],
    tags: ["Brightness", "Tan Removal", "Handcrafted Soaps"],
    category: "Handcrafted Soaps",
    brand: "Skincare By Kumar",
    skinFocus: "Pigmentation, Uneven Tone & Radiant Golden Complexion",
    weight: "118 - 123 Gms",
    image: "/soaps/KASTURI MANJAL.png",
    freeFrom: ["Chemical Bleach Free", "Paraben Free", "Cruelty Free"],
    description: "Crafted with pure Kasturi Manjal (Aromatic Wild Turmeric) prized in South Indian bridal rituals for providing a luminous glow without leaving yellow stains.",
    keyIngredients: [
      { name: "Pure Kasturi Manjal", description: "Clears blemishes, marks and revitalizes radiance.", icon: "Sun" },
      { name: "Fresh Milk Cream", description: "Deeply nourishes and leaves skin velvety soft.", icon: "Droplet" },
      { name: "Raw Honey", description: "Locks hydration and gives natural dewy finish.", icon: "Sparkles" },
      { name: "Virgin Coconut Oil", description: "Pure saponified base for abundant lather.", icon: "Shield" }
    ]
  }
];

// Kowskin product mappings
const kowskinProducts = kowskinData.products.map((p) => {
  const handle = p.handle;
  const title = p.title.replace(/\s*\|\s*Teotema.*$/i, '').replace(/\s*\|\s*Malibu.*$/i, '').replace(/\s*\|\s*KleenOWipe.*$/i, '').trim();
  const rawType = p.product_type || '';
  const price = Math.round(parseFloat(p.variants[0]?.price || '0'));
  const originalPrice = p.variants[0]?.compare_at_price ? Math.round(parseFloat(p.variants[0].compare_at_price)) : Math.round(price * 1.15);
  const images = p.images.map(img => img.src);
  const mainImage = images[0] || '';
  const cleanedDesc = cleanHtml(p.body_html);

  let category = "Hair Care";
  let brand = "Teotema";
  let tags = [];
  let benefits = [];
  let badge = undefined;
  let weight = "Standard Size";
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
      weight = "250 ml";
      keyIngredients = [
        { name: "Botanical Extracts", description: "Nourishes hair fibers from roots to tips.", icon: "Leaf" },
        { name: "Essential Vitamins", description: "Strengthens strands against breakage.", icon: "Sparkles" },
        { name: "Natural Lipids", description: "Restores scalp natural moisture mantle.", icon: "Droplet" }
      ];
    } else if (p.title.toLowerCase().includes('mask')) {
      tags = ["Hair Care", "Hair Mask", "Hydrating"];
      benefits = ["Intense Hydration", "Damage Repair"];
      skinFocus = "Deep Fiber Reconstruction & Frizz Elimination";
      weight = "250 ml";
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
      weight = "100 ml";
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
      weight = "250 ml";
      keyIngredients = [
        { name: "Bamboo Extract", description: "Enhances elasticity and flexibility.", icon: "Leaf" },
        { name: "Avocado Oil", description: "Feeds essential fatty acids to dry ends.", icon: "Droplet" },
        { name: "Keratin Hydrolysate", description: "Seals split cuticle layers.", icon: "Shield" }
      ];
    } else {
      tags = ["Hair Care", "Styling"];
      benefits = ["Flexible Hold", "Frizz Control"];
      skinFocus = "Style Definition, Shine & Humidity Shield";
      weight = "200 ml";
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
      weight = p.title.toLowerCase().includes('gloss') ? "1.5 ml" : "4g / 5g";
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
      weight = p.title.toLowerCase().includes('cream') ? "40 ml" : "200 ml";
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
    weight = p.title.includes('15') ? "15 Wipes" : "20 Wipes";
    badge = "DETOX";
    freeFrom = ["Alcohol Free", "Paraben Free", "Plastic Free 100% Bamboo"];
    keyIngredients = [
      { name: "Activated Bamboo Charcoal", description: "Traps deep environmental toxins and pollution.", icon: "Shield" },
      { name: "100% Natural Viscose/Bamboo", description: "Ultra-soft, biodegradable, non-irritating cloth.", icon: "Leaf" },
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
    description: cleanedDesc || "Premium quality personal care formulation designed for maximum efficacy and gentle daily application.",
    keyIngredients: keyIngredients
  };
});

const allProducts = [...existingSoaps, ...kowskinProducts];

console.log(`Generated ${allProducts.length} total products (${existingSoaps.length} soaps + ${kowskinProducts.length} Kowskin products)`);

// Write to products.ts
const fileContent = `export interface Product {
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
  skinFocus: string;
  weight: string;
  image?: string;
  images?: string[];
  freeFrom: string[];
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
console.log('Successfully updated src/data/products.ts!');
