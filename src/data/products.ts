export interface Product {
  id: string;
  name: string;
  category: "Cottons & Blends" | "Technical & Performance" | "Linen & Natural" | "Apparel & Knitwear" | "Heavy Twills & Workwear";
  subtitle: string;
  description: string;
  gsm: string;
  composition: string;
  weave: string;
  width: string;
  shrinkage: string;
  suitableFor: string[];
  colorsAvailable: string[];
  featuredImage: string;
  gallery: string[];
  moqNotice: string;
  leadTime: string;
}

export const productCategories = [
  "All Fabrics",
  "Cottons & Blends",
  "Technical & Performance",
  "Linen & Natural",
  "Apparel & Knitwear",
  "Heavy Twills & Workwear"
] as const;

export const products: Product[] = [
  {
    id: "wnf-tex-01",
    name: "Architectural Oxford Weave",
    category: "Cottons & Blends",
    subtitle: "Heavyweight combed cotton with tactile micro-basket weave",
    description: "Engineered for premium shirting, relaxed overshirts, and tailored jackets. Features high-count combed organic yarns spun for maximum breathability with a structured, crisp drape that softens gracefully with laundering.",
    gsm: "185 GSM",
    composition: "100% Combed Organic Cotton",
    weave: "Pinpoint Oxford / Basket",
    width: "58 inches (147 cm)",
    shrinkage: "< 2.5% Warp & Weft",
    suitableFor: ["Button-down Shirts", "Overshirts", "Contemporary Shirtdresses", "Lined Jackets"],
    colorsAvailable: ["Chalk White", "Washed Linen", "Mineral Sage", "Deep Charcoal", "Slate Navy"],
    featuredImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80"
    ],
    moqNotice: "Sample yardage: 25 meters | Production bulk: 500 meters",
    leadTime: "Lab-dips: 7-10 days | Bulk weaving: 4-5 weeks"
  },
  {
    id: "wnf-tex-02",
    name: "Hydro-Shield Ripstop Twill",
    category: "Technical & Performance",
    subtitle: "Micro-grid reinforced nylon-cotton blend with DWR barrier",
    description: "Designed for high-utility outerwear and tech-wear garments. Interwoven with high-tenacity filament grid lines that arrest tears while preserving a refined matte, non-synthetic tactile finish.",
    gsm: "220 GSM",
    composition: "65% Long-Staple Cotton / 35% High-Tenacity Recycled Nylon",
    weave: "Reinforced Ripstop Twill 2/1",
    width: "56 inches (142 cm)",
    shrinkage: "< 1.5%",
    suitableFor: ["Utility Parkas", "Cargo Trousers", "Tactical Overshirts", "Modular Outerwear"],
    colorsAvailable: ["Tactical Charcoal", "Field Olive", "Desert Khaki", "Stealth Black"],
    featuredImage: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579618218290-24a26f63a928?auto=format&fit=crop&w=1200&q=80"
    ],
    moqNotice: "Sample yardage: 30 meters | Production bulk: 800 meters",
    leadTime: "Sample swatch: immediate | Custom lab-dip: 2 weeks"
  },
  {
    id: "wnf-tex-03",
    name: "Belgian-Style Slub Linen",
    category: "Linen & Natural",
    subtitle: "Naturally textured, enzyme-washed European flax blend",
    description: "Crafted from long-strand flax fibers creating distinctive natural slub yarn variations. Washed with gentle biopolishing enzymes for a supple, luxurious handfeel without synthetic sizing.",
    gsm: "195 GSM",
    composition: "70% European Flax Linen / 30% Mulberry Silk Blend",
    weave: "Plain Weave Slub",
    width: "54 inches (137 cm)",
    shrinkage: "< 3.0%",
    suitableFor: ["Resortwear", "Summer Suiting", "Draped Dresses", "Luxury Loungewear"],
    colorsAvailable: ["Raw Flax", "Oatmeal", "Sunken Sand", "Terracotta Clay", "Olive Drab"],
    featuredImage: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80"
    ],
    moqNotice: "Sample yardage: 20 meters | Production bulk: 400 meters",
    leadTime: "Lab-dips: 7 days | Bulk: 3-4 weeks"
  },
  {
    id: "wnf-tex-04",
    name: "Loopback Heavy French Terry",
    category: "Apparel & Knitwear",
    subtitle: "High-density circular knit with unbrushed micro-loop reverse",
    description: "The gold standard for heavyweight luxury streetwear hoodies and sweatpants. Features a clean, tight face yarn ideal for direct-to-garment printing, embroidery, and custom reactive garment dyeing.",
    gsm: "460 GSM",
    composition: "100% Combed Ring-Spun Cotton",
    weave: "Circular 3-End French Terry",
    width: "60 inches (152 cm)",
    shrinkage: "< 3.5% (Pre-shrunk available)",
    suitableFor: ["Heavyweight Hoodies", "Crewnecks", "Structured Sweatpants", "Zip Cardigans"],
    colorsAvailable: ["Bone White", "Vintage Heather Grey", "Washed Black", "Forest Green", "Earth Brown"],
    featuredImage: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80"
    ],
    moqNotice: "Sample rolls: 50 kg (~100m) | Bulk dye lots: 300 kg",
    leadTime: "Sample batch: 10 days | Bulk knitting & dye: 3 weeks"
  },
  {
    id: "wnf-tex-05",
    name: "Industrial Calibre Drill Twill",
    category: "Heavy Twills & Workwear",
    subtitle: "High-density 3/1 warp-faced twill for durable uniforms",
    description: "Built for extreme endurance, abrasion resistance, and industrial laundering cycles. High-tensile twisted yarn structure maintains crisp form even under heavy mechanical stress.",
    gsm: "310 GSM",
    composition: "100% Ring-Spun Cotton (Optional Poly-blend 65/35)",
    weave: "3/1 Heavy Right-Hand Twill",
    width: "58 inches (147 cm)",
    shrinkage: "< 2.0% (Mercerized & Sanforized)",
    suitableFor: ["Chore Jackets", "Workwear Trousers", "Overalls", "Heavy Aprons & Tote Bags"],
    colorsAvailable: ["Workwear Navy", "Tobacco Khaki", "Pitch Black", "Canvas White"],
    featuredImage: "https://images.unsplash.com/photo-1579618218290-24a26f63a928?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1579618218290-24a26f63a928?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80"
    ],
    moqNotice: "Sample: 50 meters | Bulk: 1,000 meters",
    leadTime: "In-stock greige: 2 weeks for custom color | Fresh weave: 5 weeks"
  },
  {
    id: "wnf-tex-06",
    name: "Aero-Mesh Micro-Piqué",
    category: "Technical & Performance",
    subtitle: "Hydrophilic moisture-wicking engineered athletic knit",
    description: "Utilizes multi-channel micro-polyester and spandex yarns knit in an open honeycomb piqué matrix. Rapidly disperses skin perspiration to the outer surface for rapid atmospheric evaporation.",
    gsm: "170 GSM",
    composition: "92% Recycled Poly / 8% Elastane",
    weave: "Honeycomb Micro-Piqué",
    width: "62 inches (158 cm)",
    shrinkage: "< 1.5%",
    suitableFor: ["Technical Polo Shirts", "Athletic Activewear", "Golf Apparel", "Staff Performance Polos"],
    colorsAvailable: ["Cool Grey", "Arctic Blue", "Obsidian Black", "Optic White"],
    featuredImage: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1200&q=80"
    ],
    moqNotice: "Sample: 30 meters | Bulk: 500 meters",
    leadTime: "Lab-dips: 7 days | Bulk: 3 weeks"
  }
];
