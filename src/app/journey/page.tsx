import { getMDXComponents } from "../../../mdx-components";

export default async function Page() {
  const { default: MDXContent } = await import("@/content/journey/index.mdx");
  const components = getMDXComponents({});

  return (
    <article className="prose prose-stone dark:prose-invert relative">
      <h1 className="font-bold text-xl">my journey</h1>
      <MDXContent components={components} />
    </article>
  );
}
