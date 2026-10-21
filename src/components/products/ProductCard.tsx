"use client";

import React from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { ArrowUpRight, Layers } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <div
      onClick={() => onSelect(product)}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-charcoal/10 shadow-[0_2px_15px_rgba(32,33,31,0.04)] hover:shadow-[0_8px_30px_rgba(32,33,31,0.08)] transition-all duration-300 flex flex-col"
    >
      {/* Product Image Frame with Hover Zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-linen/30">
        <img
          src={product.featuredImage}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Category Pill */}
        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-medium tracking-wide text-charcoal border border-charcoal/10 shadow-sm">
          {product.category}
        </div>

        {/* Quick View Prompt */}
        <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="px-4 py-2 rounded-full bg-white text-charcoal text-xs font-medium tracking-wide shadow-md">
            View Fabric Specs
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-sage font-mono mb-1.5">
            <span className="flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              {product.gsm}
            </span>
            <span>{product.weave}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal group-hover:text-charcoal-light transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="mt-2 text-xs text-charcoal/70 line-clamp-2 leading-relaxed">
            {product.subtitle}
          </p>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-5 mt-4 border-t border-charcoal/10 flex items-center justify-between">
          <span className="text-xs text-charcoal/60 font-mono">
            {product.composition.split("/")[0]}
          </span>

          <Link
            href={`/quote?product=${encodeURIComponent(product.name)}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal hover:text-sage transition-colors"
          >
            <span>Enquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
