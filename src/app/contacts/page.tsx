import type { MDXComponents } from "mdx/types";
import { useMDXComponents } from "../../../mdx-components";
import CustomLink from "@/components/CustomLink";

export default async function Page() {
  const { default: MDXContent } = await import("@/content/contacts/index.mdx");
  const components = useMDXComponents({
    CustomLink,
  } as MDXComponents);

  return (
    <article className="prose prose-stone dark:prose-invert relative">
      <h1 className="font-bold text-xl">contacts</h1>
      <MDXContent components={components} />
    </article>
  );
}
