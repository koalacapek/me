import type { MDXComponents } from "mdx/types";
import { useMDXComponents } from "../../../mdx-components";
import CustomLink from "@/components/CustomLink";

export default async function Page() {
  const { default: MDXContent } = await import("@/content/about.mdx");
  const components = useMDXComponents({
    CustomLink,
  } as MDXComponents);

  return (
    <article className="prose prose-stone dark:prose-invert relative">
      <h1 className="group relative">
        <a id="top" className="[visibility:hidden] relative -top-16 block"></a>
        Hans Kristian Reynaldi
      </h1>
      <MDXContent />
    </article>
    // <article className="prose mx-auto px-4 py-10">
    //   <MDXContent components={components} />
    // </article>
  );
}
