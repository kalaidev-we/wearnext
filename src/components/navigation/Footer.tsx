import React from "react";
import Link from "next/link";
import { companyInfo } from "@/data/companyInfo";
import { ArrowUpRight, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-[#F8F6F0] border-t border-charcoal-light/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group focus:outline-none">
              <span className="font-serif text-3xl tracking-tight font-semibold text-[#F8F6F0]">
                WEAR<span className="italic font-normal text-linen">NEXT</span>FABS
              </span>
              <p className="text-xs uppercase tracking-widestEditorial text-sage mt-1 font-sans">
                Weaving What&apos;s Next.
              </p>
            </Link>

            <p className="text-sm text-[#F8F6F0]/70 max-w-sm leading-relaxed font-sans pt-1">
              {companyInfo.overview.story}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-sage font-mono">
              <ShieldCheck className="w-4 h-4 text-linen" />
              <span>Commissioned by AriseAgency</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-linen font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#F8F6F0]/70">
              <li>
                <Link href="/" className="hover:text-linen transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-linen transition-colors">
                  About Us & Capabilities
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-linen transition-colors">
                  Product Catalogue
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-linen transition-colors">
                  Our Work & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-linen transition-colors">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-linen transition-colors">
                  Contact & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-linen font-sans">
              Fabric Programs
            </h4>
            <ul className="space-y-2 text-sm text-[#F8F6F0]/70">
              <li>
                <Link href="/products?category=Cottons" className="hover:text-linen transition-colors">
                  Combed Cottons & Blends
                </Link>
              </li>
              <li>
                <Link href="/products?category=Technical" className="hover:text-linen transition-colors">
                  Hydro-Shield & Ripstop
                </Link>
              </li>
              <li>
                <Link href="/products?category=Linen" className="hover:text-linen transition-colors">
                  European Flax & Natural
                </Link>
              </li>
              <li>
                <Link href="/products?category=Apparel" className="hover:text-linen transition-colors">
                  Heavyweight French Terry
                </Link>
              </li>
              <li>
                <Link href="/products?category=Workwear" className="hover:text-linen transition-colors">
                  Industrial Heavy Twills
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-linen transition-colors flex items-center gap-1 text-linen font-medium pt-1">
                  Custom Weave Development <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Placeholders */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-linen font-sans">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm text-[#F8F6F0]/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                <span className="text-xs leading-relaxed">
                  {companyInfo.contact.address.displayAddress}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sage shrink-0" />
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="text-xs hover:text-linen transition-colors truncate"
                >
                  {companyInfo.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sage shrink-0" />
                <span className="text-xs">
                  {companyInfo.contact.phone}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-linen text-charcoal font-medium text-xs hover:bg-[#FAF8F4] transition-colors"
              >
                <span>Request B2B Quotation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F8F6F0]/50 space-y-4 sm:space-y-0">
          <div>
            &copy; {currentYear} {companyInfo.name}. All rights reserved. Commissioned by AriseAgency.
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-[11px] text-[#F8F6F0]/40">
              Editorial B2B Manufacturing Digital Experience
            </span>
            <Link href="/contact" className="hover:text-linen transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-linen transition-colors">
              Terms of Supply
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
