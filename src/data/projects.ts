export interface ProjectCaseStudy {
  id: string;
  title: string;
  clientIndustry: string;
  clientNamePlaceholder: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  materialsUsed: string[];
  processesApplied: string[];
  deliverables: string[];
  heroImage: string;
  detailImages: string[];
  outcomeSummary: string;
  tags: string[];
}

export const projects: ProjectCaseStudy[] = [
  {
    id: "work-01",
    title: "Minimalist Heavyweight Streetwear Collection",
    clientIndustry: "Contemporary Streetwear Label",
    clientNamePlaceholder: "[International Brand Partner — Confidential]",
    year: "2024–2025",
    summary: "Complete fabric development and custom cut-and-sew garment manufacturing for a 14-piece capsule collection featuring bespoke 480 GSM loopback French terry and pigment-dyed jersey.",
    challenge: "The client required a distinctive, weighty silhouette with zero torque twist along side seams after industrial stone washing, combined with deep saturation on custom pantone dyes.",
    solution: "Engineered a proprietary dual-yarn combed cotton circular knit with specialized pre-shrinking and compactor stabilization prior to reactive garment dyeing.",
    materialsUsed: ["480 GSM Loopback French Terry", "260 GSM Single Jersey", "1x1 Heavy Ribbed Trims"],
    processesApplied: ["Custom Yarn Spinning", "Circular Knitting", "Automated Knife Cutting", "Flatlock Seaming", "Reactive Pigment Dye"],
    deliverables: ["Tech-pack refinement", "Pre-production lab dips & size sets", "Bulk production of 3,500 units"],
    heroImage: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80"
    ],
    outcomeSummary: "Zero customer returns for shrinkage; delivered 6 days ahead of runway launch schedule.",
    tags: ["Custom Apparel", "Heavy Knits", "Garment Dyeing"]
  },
  {
    id: "work-02",
    title: "High-Endurance Field Uniforms & Technical Outerwear",
    clientIndustry: "Institutional Logistics & Security Group",
    clientNamePlaceholder: "[Corporate Fleet Client — Verified Scope]",
    year: "2024",
    summary: "Development of specialized ripstop cotton-nylon twill with water-repellent fluorocarbon-free finish for 1,200 staff field utility parkas and trousers.",
    challenge: "Garments needed to survive severe weather friction, repetitive high-stress crouching, and industrial wash cycles while maintaining breathability for 10-hour shifts.",
    solution: "Wove custom 230 GSM 65/35 poly-cotton ripstop with high-tenacity core yarns, reinforced crotch gussets, and bar-tack stitching at all stress nodes.",
    materialsUsed: ["230 GSM Hydro-Shield Ripstop", "High-Tenacity Filament Yarns", "Reinforced YKK Hardware"],
    processesApplied: ["Dobby Ripstop Weaving", "DWR Water-Repellent Coating", "Automated Bar-Tacking", "Pre-delivery Stress Inspection"],
    deliverables: ["Prototype wear trials", "Stress-test laboratory reports", "Batch delivery with individual SKU packaging"],
    heroImage: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579618218290-24a26f63a928?auto=format&fit=crop&w=1200&q=80"
    ],
    outcomeSummary: "Passed 50-cycle commercial wash testing with tear strength retention above 94%.",
    tags: ["Technical Weaves", "Workwear & Uniforms", "Protective Finishing"]
  },
  {
    id: "work-03",
    title: "Bespoke Resortwear & Natural Flax Collection",
    clientIndustry: "Luxury Sustainable Hospitality & Lifestyle Brand",
    clientNamePlaceholder: "[Boutique Resort Brand — Confidential]",
    year: "2025",
    summary: "Artisanal weaving and small-batch manufacturing of relaxed summer suiting, linen tunics, and drapery using certified European flax yarns.",
    challenge: "Achieving a super-soft, lived-in feel without chemical softening agents or compromising the crisp structural integrity of natural linen slubs.",
    solution: "Used organic enzyme-washing technology with gentle tumbling, followed by air-drying to preserve natural yarn loft and texture.",
    materialsUsed: ["100% Certified Flax Linen (190 GSM)", "Unbleached Cotton Thread", "Natural Corozo Nut Buttons"],
    processesApplied: ["Loom Weaving with Tension Controls", "Enzyme Bio-Polishing", "Single-Needle Tailoring", "Hand Button Sewing"],
    deliverables: ["Custom weave pattern design", "Fabric sampling yardage", "1,800 finished resortwear units"],
    heroImage: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80"
    ],
    outcomeSummary: "Recognized as the client's fastest sell-through summer apparel release.",
    tags: ["Linen & Flax", "Sustainable Manufacturing", "Luxury Tailoring"]
  },
  {
    id: "work-04",
    title: "Precision Pinpoint Oxford & Executive Shirting",
    clientIndustry: "Direct-to-Consumer Menswear Brand",
    clientNamePlaceholder: "[D2C Shirting Label — Commercial Partner]",
    year: "2024",
    summary: "Large-scale recurring mill production of 80/2 combed cotton Oxford fabric across 6 custom-dyed seasonal colorways.",
    challenge: "High batch-to-batch color consistency (\u0394E < 0.6) across 15,000 meters of fabric spanning 3 consecutive quarters.",
    solution: "Continuous digital spectrophotometer monitoring in our dyeing lab, combined with strict yarn lot calibration and closed-loop computerized dyeing vats.",
    materialsUsed: ["80/2 Double-Ply Combed Organic Cotton (160 GSM)", "Colorfast Reactive Dyestuffs"],
    processesApplied: ["High-Speed Rapier Loom Weaving", "Continuous Bleaching Range", "Tensionless Pad-Steam Dyeing"],
    deliverables: ["Full color lab-dip library", "Continuous mill rolls on core tubes", "Certified quality inspection reports"],
    heroImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80"
    ],
    outcomeSummary: "Achieved 99.4% first-pass inspection rating across 15,000 meters.",
    tags: ["Mill Weaving", "Color Calibration", "High-Volume Production"]
  }
];
