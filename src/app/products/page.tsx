"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { products, productCategories, Product } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductDetailModal } from "@/components/products/ProductDetailModal";
import { Search, Sparkles, FilterX, ArrowUpRight } from "lucide-react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");

  // Determine starting category if query param matches
  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    if (initialCategory) {
      const match = productCategories.find((c) =>
        c.toLowerCase().includes(initialCategory.toLowerCase())
      );
      if (match) return match;
    }
    return "All Fabrics";
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products by category and search keyword
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All Fabrics" || product.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.composition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.weave.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.suitableFor.some((item) =>
          item.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      {/* Filter & Search Bar */}
      <section className="py-8 border-b border-charcoal/10 sticky top-[72px] z-30 bg-[#F8F6F0]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {productCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all shrink-0 ${
                  selectedCategory === cat
                    ? "bg-charcoal text-[#F8F6F0] shadow-sm"
                    : "bg-white text-charcoal/70 hover:text-charcoal border border-charcoal/10 hover:border-charcoal/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] max-w-xs w-full">
            <Search className="w-4 h-4 text-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search weaves, GSM, fiber..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-charcoal/15 text-xs text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-charcoal text-xs"
              >
                &times;
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-12">
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-charcoal/10 p-8 max-w-md mx-auto">
            <FilterX className="w-10 h-10 text-charcoal/30 mx-auto mb-3" />
            <h3 className="font-serif text-2xl font-semibold text-charcoal mb-1">
              No matching fabrics found
            </h3>
            <p className="text-xs text-charcoal/60 mb-6 font-sans">
              Try adjusting your search criteria or explore our custom fabric engineering service.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All Fabrics");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 rounded-full bg-charcoal text-[#F8F6F0] text-xs font-medium"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        )}

        {/* Custom Weave Engineering Callout */}
        <div className="mt-16 bg-charcoal text-[#F8F6F0] rounded-3xl p-8 sm:p-12 border border-charcoal-light flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-linen block mb-2">
              Bespoke Textile Development
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F8F6F0]">
              Require a Proprietary Fabric Blend or Custom Weave?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#F8F6F0]/70 font-light leading-relaxed">
              If your tech-pack demands an exact yarn composition, special GSM weight, or custom coating not listed in our standard library, our weaving engineers can develop custom yardage.
            </p>
          </div>

          <Link
            href="/quote?service=custom-fabric"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-linen text-charcoal font-medium text-xs sm:text-sm hover:bg-white transition-all shadow-md group"
          >
            <span>Request Custom Fabric Development</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

export default function ProductsPage() {
  return (
    <div className="bg-[#F8F6F0] min-h-screen pb-24">
      {/* Products Header Hero */}
      <section className="py-20 sm:py-24 bg-linen/30 border-b border-charcoal/10 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sage mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Material Catalogue & Spec Library</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-semibold tracking-tight text-charcoal">
              Engineered Fabric Substrates
            </h1>
            <p className="mt-4 text-base sm:text-lg text-charcoal/70 font-light leading-relaxed">
              Explore our laboratory-developed weaves, organic cottons, natural flax blends, and technical ripstop substrates. Sample yardage and custom dye dips available for all styles.
            </p>
          </div>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="py-24 text-center">
            <div className="animate-spin w-8 h-8 border-2 border-charcoal border-t-transparent rounded-full mx-auto mb-3" />
            <p className="text-xs font-mono text-charcoal/60">Loading fabric library...</p>
          </div>
        }
      >
        <ProductsContent />
      </Suspense>
    </div>
  );
}
