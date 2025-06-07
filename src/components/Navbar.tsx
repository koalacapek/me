"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Ensure lucide-react is installed

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "about me", href: "/about" },
    { label: "my journey", href: "/journey" },
    { label: "projects", href: "/projects" },
    { label: "contacts", href: "/contacts" },
  ];

  const isActive = (href: string) => pathname.includes(href);

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-1 left-1 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-card "
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-background border-r border-border transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <nav className="mt-20 flex flex-col gap-2 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary ${
                isActive(item.href)
                  ? "bg-secondary font-semibold"
                  : "font-normal"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Desktop sidebar */}
      <div
        className="
          absolute top-0 -left-28 h-full w-36
          hidden md:block
          md:-left-36 lg:-left-44 xl:-left-48
        "
      >
        <nav
          className="
            bg-card sticky top-24 flex flex-col gap-2
            rounded-lg border border-[#443d3b] p-2 shadow-md
            transition-[transform_box-shadow] ease-out hover:shadow-xl
          "
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-1.5 text-sm transition-colors hover:bg-secondary ${
                isActive(item.href)
                  ? "bg-secondary font-semibold"
                  : "font-normal"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
