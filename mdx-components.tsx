import CustomLink from "@/components/CustomLink";

import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: any) => <h1 {...props}>{props.children}</h1>,
    h2: (props: any) => (
      <h2 className="text-base font-medium m-0" {...props}>
        {props.children}
      </h2>
    ),
    h3: (props: any) => <h3 {...props}>{props.children}</h3>,
    h4: (props: any) => <h4 {...props}>{props.children}</h4>,
    a: (props: any) => (
      <CustomLink href={props.href} {...props}>
        {props.children}
      </CustomLink>
    ),
    p: (props: any) => <p className="text-sm">{props.children}</p>,
    li: (props: any) => <li className="text-sm my-0">{props.children}</li>,
    // pre: (props: any) => <CopyablePre {...props}>{props.children}</CopyablePre>,
    CustomLink,
    ...components,
  };
}
