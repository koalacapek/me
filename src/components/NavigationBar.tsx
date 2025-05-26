"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavigationBar() {
  const pathname = usePathname();

  const navItems = [
    { label: "about", href: "/about" },
    { label: "projects", href: "/project" },
    { label: "contact", href: "/contact" },
  ];

  return (
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
          rounded-lg border p-2 shadow-md
          transition-[transform_box-shadow] ease-out hover:shadow-xl
        "
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-1.5 text-sm transition-colors hover:bg-secondary ${
                isActive ? "bg-secondary font-semibold" : "font-normal"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
