"use client";

import { unstable_ViewTransition as ViewTransition } from "react";

export default function Name() {
  return (
    <h1 className="font-bold text-xl w-fit">
      <span className="sr-only">Hans Kristian Reynaldi</span>
      <span aria-hidden="true" className="block overflow-hidden group relative">
        <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full whitespace-nowrap">
          Hans Kristian Reynaldi
        </span>
        <span className="inline-block absolute left-0 top-0 transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
          koalacapek
        </span>
      </span>
    </h1>
  );
}
