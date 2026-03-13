"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-bg/85 backdrop-blur-md border-b border-dark-border py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
              i<span className="text-brand-primary">PPM</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              href="#features"
              className="text-sm font-medium text-muted hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#platform"
              className="text-sm font-medium text-muted hover:text-white transition-colors"
            >
              Platform
            </Link>
            <Link
              href="#cases"
              className="text-sm font-medium text-muted hover:text-white transition-colors"
            >
              Use Cases
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/login"
              className="text-sm font-medium text-muted hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/demo"
              className="px-5 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover transition-all text-white text-sm font-medium shadow-[0_0_15px_rgba(26,115,232,0.3)] hover:shadow-[0_0_25px_rgba(26,115,232,0.5)]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-muted hover:text-white p-2 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-dark-bg border-b border-dark-border shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 flex flex-col space-y-4">
          <Link
            href="#features"
            className="text-base font-medium text-muted hover:text-white p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#platform"
            className="text-base font-medium text-muted hover:text-white p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Platform
          </Link>
          <Link
            href="#cases"
            className="text-base font-medium text-muted hover:text-white p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Use Cases
          </Link>
          <Link
            href="#contact"
            className="text-base font-medium text-muted hover:text-white p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="h-px bg-dark-border my-2"></div>
          <Link
            href="/login"
            className="text-base font-medium text-white p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sign In
          </Link>
          <Link
            href="/demo"
            className="w-full text-center px-5 py-3 rounded-xl bg-brand-primary text-white text-base font-medium shadow-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
