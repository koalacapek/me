import type { MDXComponents } from "mdx/types";
import { useMDXComponents } from "../../../mdx-components";
import CustomLink from "@/components/CustomLink";
import BadgeGroup from "@/components/BadgeGroup";

export default async function Page() {
  const { default: MDXContent } = await import("@/content/projects/index.mdx");
  const components = useMDXComponents({
    CustomLink,
    BadgeGroup,
  } as MDXComponents);

  return (
    <article className="prose prose-stone dark:prose-invert relative">
      <h1 className="font-bold text-xl">projects</h1>
      <MDXContent components={components} />
    </article>
  );
}
