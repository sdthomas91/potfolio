"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils"; // If using Shadcn's utility, else just concatenate

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">
          Potfolio
        </Link>
        <nav className="space-x-6 text-sm font-medium">
          <Link href="#projects" className="hover:underline">
            Projects
          </Link>
          <Link href="#about" className="hover:underline">
            About
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
