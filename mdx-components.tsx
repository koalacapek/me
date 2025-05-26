import CustomLink from "@/components/CustomLink";

import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: any) => (
      <h1 {...props}>
        <a className="[visibility:hidden] relative -top-[calc(100vh/3)] block max-h-1 w-32">
          {props.children}
        </a>
      </h1>
    ),
    h2: (props: any) => (
      <h2 {...props}>
        <a className="[visibility:hidden] relative -top-[calc(100vh/3)] block max-h-1 w-32">
          {props.children}
        </a>
      </h2>
    ),
    h3: (props: any) => (
      <h3 {...props}>
        <a className="[visibility:hidden] relative -top-[calc(100vh/3)] block max-h-1 w-32">
          {props.children}
        </a>
        {props.children}
      </h3>
    ),
    h4: (props: any) => (
      <h4 {...props}>
        <a className="[visibility:hidden] relative -top-[calc(100vh/3)] block max-h-1 w-32">
          {props.children}
        </a>
        {props.children}
      </h4>
    ),
    a: (props: any) => (
      <CustomLink href={props.href} {...props}>
        {props.children}
      </CustomLink>
    ),
    // pre: (props: any) => <CopyablePre {...props}>{props.children}</CopyablePre>,
    CustomLink,
    ...components,
  };
}
