"use client";

import React, { useState } from "react";
import Link from "next/link";
import { products, productCategories, Product } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductDetailModal } from "@/components/products/ProductDetailModal";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Fabrics");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    selectedCategory === "All Fabrics"
      ? products.slice(0, 4)
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-24 bg-[#F8F6F0] border-b border-charcoal/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widestEditorial uppercase text-sage mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fabric Programs & Innovations</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-charcoal">
              Engineered Textiles
            </h2>
            <p className="mt-2 text-charcoal/70 max-w-xl text-base font-light">
              Explore our core weave structures, organic cottons, slub linens, and technical performance substrates.
            </p>
          </div>

          <Link
            href="/products"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-sage transition-colors group"
          >
            <span>View Full Catalogue</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {productCategories.slice(0, 5).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all shrink-0 ${
                selectedCategory === category
                  ? "bg-charcoal text-[#F8F6F0] shadow-sm"
                  : "bg-white text-charcoal/70 hover:text-charcoal border border-charcoal/10 hover:border-charcoal/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>

        {/* Modal for detail view */}
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </section>
  );
}
