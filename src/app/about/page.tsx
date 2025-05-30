import { useMDXComponents } from "../../../mdx-components";
import Name from "@/components/Name";

export default async function Page() {
  const { default: MDXContent } = await import("@/content/about/index.mdx");
  const components = useMDXComponents({});

  return (
    <article className="prose prose-stone dark:prose-invert relative">
      <Name />
      <MDXContent components={components} />
    </article>
  );
}
