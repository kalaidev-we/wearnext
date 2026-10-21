/**
 * WearNextFabs Verified Brand & Company Information
 * Note: Placeholders are explicitly demarcated for client approval.
 */

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  alternativeTaglines: string[];
  contact: {
    email: string;
    secondaryEmail: string;
    phone: string;
    whatsapp: string;
    address: {
      street: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
      displayAddress: string;
    };
    workingHours: string;
  };
  social: {
    linkedin: string;
    instagram: string;
    twitter: string;
  };
  overview: {
    story: string;
    mission: string;
    vision: string;
    coreValues: Array<{
      title: string;
      description: string;
    }>;
  };
  capabilities: Array<{
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    tags: string[];
  }>;
  verifiedStatus: {
    certificationsNotice: string;
    capacityNotice: string;
  };
}

export const companyInfo: CompanyInfo = {
  name: "WearNextFabs",
  legalName: "WearNextFabs Private Limited [Client to Confirm]",
  tagline: "Weaving What's Next.",
  alternativeTaglines: [
    "Crafted with Purpose.",
    "Your Vision. Our Craft."
  ],
  contact: {
    email: "enquiries@wearnextfabs.com",
    secondaryEmail: "partnerships@wearnextfabs.com",
    phone: "+1 (800) 555-0199 [Client Phone Placeholder]",
    whatsapp: "+1 (800) 555-0199 [Client WhatsApp Placeholder]",
    address: {
      street: "Industrial Textile Park, Phase II",
      city: "Tiruppur / Surat [Client Facility Location Pending]",
      state: "Tamil Nadu / Gujarat",
      postalCode: "[Postal Code]",
      country: "India [Global Export Hub]",
      displayAddress: "WearNextFabs Manufacturing Hub [Exact Address to be supplied by client]"
    },
    workingHours: "Monday – Saturday: 09:00 – 18:00 IST (UTC+5:30)"
  },
  social: {
    linkedin: "https://linkedin.com/company/wearnextfabs",
    instagram: "https://instagram.com/wearnextfabs",
    twitter: "https://twitter.com/wearnextfabs",
  },
  overview: {
    story: "WearNextFabs bridges traditional textile craftsmanship with modern industrial engineering. Founded to empower global fashion brands, institutional buyers, and independent designers, we specialize in end-to-end fabric development, precision weaving, and ethical apparel production.",
    mission: "To deliver progressive textile engineering and sustainable manufacturing solutions that elevate apparel quality, reduce lead times, and foster responsible industry partnerships.",
    vision: "To be the world's most trusted manufacturing partner for forward-thinking apparel brands through material innovation, craftsmanship, and transparent supply chains.",
    coreValues: [
      {
        title: "Material Integrity",
        description: "Zero compromise on yarn selection, GSM consistency, tensile strength, and colorfastness."
      },
      {
        title: "Precision Engineering",
        description: "Every weave, knit gauge, and seam specification is rigorously calibrated to technical tech-packs."
      },
      {
        title: "Responsible Manufacturing",
        description: "Committed to progressive environmental stewardship, clean effluent treatment, and safe work standards."
      },
      {
        title: "Client Co-Creation",
        description: "Collaborative prototyping from early yarn lab-dips to commercial grade bulk production."
      }
    ]
  },
  capabilities: [
    {
      id: "fabric-development",
      title: "Custom Fabric Development & Weaving",
      subtitle: "Yarn-dyed weaves, dobby, jacquard, and structured twills",
      description: "From custom filament spinning and fiber blends to proprietary weaves, we engineer textiles engineered specifically for your garment silhouettes and performance demands.",
      icon: "Layers",
      tags: ["Yarn Blending", "Dobby & Twills", "GSM Optimization", "Custom Weaves"]
    },
    {
      id: "apparel-manufacturing",
      title: "Apparel Cut, Make & Trim (CMT)",
      subtitle: "Full-package OEM & ODM garment production",
      description: "Dedicated production lines for menswear, womenswear, workwear, and modern lifestyle silhouettes with automated cutting, precision stitching, and comprehensive inline QC.",
      icon: "Scissors",
      tags: ["Tech-Pack Execution", "Automated Cutting", "Seam Precision", "Full Assembly"]
    },
    {
      id: "dyeing-finishing",
      title: "Advanced Dyeing & Textile Finishing",
      subtitle: "Eco-friendly dyes, enzyme washes, and specialized coatings",
      description: "Controlled color matching with digital spectrophotometers, OEKO-TEX compliant dyeing processes, water-repellent coatings, anti-microbial treatments, and bespoke peach finishes.",
      icon: "Sparkles",
      tags: ["Lab Dips", "Spectrophotometer", "Enzyme Washing", "Technical Coatings"]
    },
    {
      id: "quality-assurance",
      title: "Rigorous Quality Assurance & Testing",
      subtitle: "Four-point inspection system and lab verification",
      description: "Stringent testing across dimensional stability, colorfastness to light and laundering, tensile tear strength, and pilling resistance before any shipment leaves our floor.",
      icon: "CheckCircle",
      tags: ["4-Point System", "Shrinkage Control", "Tensile Testing", "Pre-Shipment Audit"]
    }
  ],
  verifiedStatus: {
    certificationsNotice: "Formal third-party certificates (GOTS, OEKO-TEX, SEDEX, ISO) will be published upon client audit submission.",
    capacityNotice: "Monthly production volumes, machinery counts, and facility acreage are customizable per client contract."
  }
};
