"use client";

import React from "react";
import Link from "next/link";
import { isMobile, isTablet } from "react-device-detect";

export default function CustomLink({
  href,
  children,
  target,
}: {
  href: string;
  children: React.ReactNode;
  target?: React.HTMLAttributeAnchorTarget;
}) {
  const linkClass = [
    "text-muted-foreground hover:text-foreground font-normal transition-colors [&>p]:m-0",
    isMobile || isTablet ? "underline underline-offset-2" : "no-underline",
  ].join(" ");

  const spanClass =
    "bg-foreground absolute bottom-0 left-0 rounded-full h-0 w-0 opacity-0 transition-[opacity_width] duration-300 group-hover:h-[1px] group-hover:w-full group-hover:opacity-100";

  return (
    <object className="group relative m-0 inline-block w-fit">
      <Link href={href} className={linkClass} target={target ?? "_blank"}>
        {children}
      </Link>
      <span className={spanClass}></span>
    </object>
  );
}
