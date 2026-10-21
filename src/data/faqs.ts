export interface FAQItem {
  id: string;
  category: "Quotation & Orders" | "Sampling & Prototyping" | "Manufacturing & Capabilities" | "Partnerships";
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "faq-01",
    category: "Quotation & Orders",
    question: "How do I request a formal quotation from WearNextFabs?",
    answer: "You can submit your project requirements via our interactive 'Get a Quote' wizard or email enquiries@wearnextfabs.com. Share details regarding your target fabric type, estimated garment units or fabric meterage, timeline, and any tech-packs or reference swatches you have. Our engineering team reviews each enquiry and responds with technical feasibility and quotation within 24 to 48 business hours."
  },
  {
    id: "faq-02",
    category: "Quotation & Orders",
    question: "What details should I provide in my initial enquiry?",
    answer: "Helpful specifications include: target garment silhouette or fabric weave, estimated GSM weight, preferred fiber composition (e.g., 100% organic cotton, cotton-nylon ripstop, linen blend), projected order quantity, colorways, and target delivery deadline. If you have a tech-pack, CAD sketch, or physical reference swatch, uploading it accelerates evaluation."
  },
  {
    id: "faq-03",
    category: "Sampling & Prototyping",
    question: "Can I enquire if I don't have a final tech-pack or design?",
    answer: "Yes. Many of our brand partners approach us during early mood-board or concept stages. Our textile development team can assist with yarn selection, weaving prototypes, laboratory color dips, and sample garment pattern making to help turn your concept into production-ready specifications."
  },
  {
    id: "faq-04",
    category: "Sampling & Prototyping",
    question: "What are your minimum order quantities (MOQ)?",
    answer: "For custom fabric weaving, sample yardage starts from 20 to 50 meters, with bulk production typically starting at 500 meters per colorway. For finished apparel manufacturing (CMT/FOB), minimums typically range from 200 to 500 units per style depending on complexity. Specific minimums are confirmed during initial project review [Subject to final client terms]."
  },
  {
    id: "faq-05",
    category: "Manufacturing & Capabilities",
    question: "How does WearNextFabs ensure quality control across production?",
    answer: "We employ an inline 4-point fabric inspection system, continuous computerized spectrophotometer color checking (\u0394E < 0.6), dimensional stability/shrinkage testing, tensile seam strength trials, and pre-shipment AQL 2.5 final audits before dispatch."
  },
  {
    id: "faq-06",
    category: "Manufacturing & Capabilities",
    question: "Can WearNextFabs provide sustainable and organic certified materials?",
    answer: "Yes, we support ethical sourcing including organic combed cottons, recycled polyester yarns, European flax linen, and OEKO-TEX compliant low-impact dyestuffs. Full traceability documentation and audit reports can be coordinated per project requirements."
  },
  {
    id: "faq-07",
    category: "Partnerships",
    question: "How can suppliers, mills, or regional distributors partner with WearNextFabs?",
    answer: "Visit our 'Become a Partner' page and submit the partnership application form. We review proposals from yarn spinners, chemical suppliers, logistics providers, international sourcing agents, and wholesale distributors on a rolling basis."
  },
  {
    id: "faq-08",
    category: "Partnerships",
    question: "Do you offer private label and full-package manufacturing for emerging brands?",
    answer: "Yes. We offer complete package solutions covering fabric development, precision grading, cut-make-trim (CMT), custom branding (woven labels, care tags, hangtags), and export packaging ready for retail distribution."
  }
];
