import type { MDXComponents } from "mdx/types";
import { notFound } from "next/navigation";
import { useMDXComponents } from "../../../../mdx-components";
import CustomLink from "@/components/CustomLink";
import Name from "@/components/Name";

interface ISlugProp {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "dues" },
    { slug: "idx-foreign-flow-tracker" },
    { slug: "hobbify" },
  ];
}

export default async function Page(props: ISlugProp) {
  const { slug } = await props.params;

  const { default: MDXContent } = await import(
    `@/content/projects/${slug}.mdx`
  );
  const components = useMDXComponents({
    CustomLink,
  } as MDXComponents);

  return (
    <article className="prose prose-stone dark:prose-invert relative">
      <h1 className="font-bold text-xl">Dues</h1>
      <MDXContent components={components} />
    </article>
  );
}
