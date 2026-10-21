"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMoreOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Our Work", href: "/work" },
  ];

  const moreLinks = [
    { label: "Become a Partner", href: "/partner", desc: "Collaborate on mills, brands & supply" },
    { label: "Contact Us", href: "/contact", desc: "Direct enquiries, locations & FAQs" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F8F6F0]/90 backdrop-blur-md border-b border-charcoal/10 py-3 shadow-[0_4px_20px_rgba(32,33,31,0.03)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo Wordmark */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none"
            aria-label="WearNextFabs Homepage"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-tight text-charcoal font-semibold transition-colors duration-200">
              WEAR<span className="italic font-normal">NEXT</span>FABS
            </span>
            <span className="text-[9px] tracking-widestEditorial uppercase text-sage font-medium -mt-1 group-hover:text-charcoal transition-colors">
              Textile & Manufacturing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  isActive(link.href)
                    ? "text-charcoal font-semibold"
                    : "text-charcoal/70 hover:text-charcoal hover:bg-charcoal/5"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-charcoal rounded-full" />
                )}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                onBlur={() => setTimeout(() => setIsMoreOpen(false), 200)}
                aria-expanded={isMoreOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  isActive("/partner") || isActive("/contact")
                    ? "text-charcoal font-semibold"
                    : "text-charcoal/70 hover:text-charcoal hover:bg-charcoal/5"
                }`}
              >
                <span>More</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMoreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMoreOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-[#F8F6F0] border border-charcoal/10 rounded-xl shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  role="menu"
                >
                  {moreLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        isActive(item.href)
                          ? "bg-linen text-charcoal font-medium"
                          : "text-charcoal hover:bg-linen/60"
                      }`}
                    >
                      <div className="font-medium text-charcoal flex items-center justify-between">
                        {item.label}
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
                      </div>
                      <div className="text-xs text-charcoal/60 mt-0.5">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <Link
              href="/quote"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-[#F8F6F0] text-sm font-medium tracking-wide hover:bg-charcoal-light active:scale-[0.98] transition-all shadow-sm group"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4 text-linen group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg text-charcoal hover:bg-charcoal/5 focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-charcoal/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#F8F6F0] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
            role="dialog"
            aria-modal="true"
          >
            <div>
              <div className="flex items-center justify-between border-b border-charcoal/10 pb-5">
                <span className="font-serif text-xl tracking-tight text-charcoal font-semibold">
                  WEAR<span className="italic font-normal">NEXT</span>FABS
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-charcoal hover:bg-charcoal/5 rounded-lg"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 text-lg font-serif rounded-lg transition-colors ${
                      isActive(link.href)
                        ? "bg-linen text-charcoal font-semibold"
                        : "text-charcoal/80 hover:text-charcoal hover:bg-linen/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="pt-4 border-t border-charcoal/10 my-2">
                  <div className="px-4 text-xs font-semibold uppercase tracking-wider text-sage mb-2">
                    Partnerships & Contact
                  </div>
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-3 text-base rounded-lg flex items-center justify-between transition-colors ${
                        isActive(link.href)
                          ? "bg-linen text-charcoal font-semibold"
                          : "text-charcoal/80 hover:text-charcoal hover:bg-linen/50"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-charcoal/40" />
                    </Link>
                  ))}
                </div>
              </nav>
            </div>

            <div className="pt-6 border-t border-charcoal/10">
              <Link
                href="/quote"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-charcoal text-[#F8F6F0] font-medium text-center shadow-md active:scale-[0.98] transition-all"
              >
                <span>Request a Quotation</span>
                <ArrowUpRight className="w-4 h-4 text-linen" />
              </Link>
              <p className="text-center text-xs text-charcoal/50 mt-3 font-mono">
                Concept: “Weaving What&apos;s Next.”
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
