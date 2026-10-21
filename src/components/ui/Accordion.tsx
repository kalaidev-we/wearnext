"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/data/faqs";

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-charcoal/10 overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-linen/20 transition-colors focus:outline-none"
            >
              <span className="font-serif text-lg sm:text-xl font-semibold text-charcoal">
                {item.question}
              </span>
              <span
                className={`p-1.5 rounded-full bg-linen/50 text-charcoal transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180 bg-charcoal text-[#F8F6F0]" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                className="px-6 pb-6 pt-1 text-sm text-charcoal/70 font-light leading-relaxed border-t border-charcoal/5 animate-in fade-in duration-200"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
