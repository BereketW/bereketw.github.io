"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="md:sticky top-5 z-50 max-w-4xl mx-auto bg-white lg:rounded-full max-sm:border-0 lg:border-2 md:border-amber-50">
      <div className="  mx-auto px-4 sm:px-6 lg:px-8  py-2 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/t.png"
              alt="Tigat Tech"
              width={80}
              height={36}
              className=" object-contain"
            />
           
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              "Home",
              "Services",
              "Works",
              "Process",
              "About",
              "Careers",
              "Blogs",
            ].map((item) => (
              <Link
                key={item}
                href={`/${item==="Home" ? "":item.toLowerCase()}`}

                className="text-sm transition-colors hover:opacity-70"
                style={{ color: "var(--tigat-gray-medium)" }}
              >
                {item}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="hover:pointer">
            <Button
              className="hidden md:block text-white"
              style={{ backgroundColor: "var(--tigat-accent)" }}
            >
              Contact Us
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex justify-center items-center bg-gr mx-auto flex-col gap-4">
            {[
              "Home",
              "Services",
              "Works",
              "Process",
              "About",
              "Careers",
              "Blogs",
            ].map((item) => (
              <Link
                key={item}
                href={`/${item==="Home" ? "":item.toLowerCase()}`}
                className="text-sm bg-gray-100 w-full text-center  py-2 rounded-lg"
                style={{ color: "var(--tigat-gray-medium)" }}
              >
                {item}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
