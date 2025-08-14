import type { MDXComponents } from "mdx/types"
import { useMDXComponents } from "../../../../mdx-components"
import CustomLink from "@/components/CustomLink"

interface ISlugProp {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return [
    { slug: "dues" },
    { slug: "idx" },
    { slug: "hobbify" },
    { slug: "airtable" },
    { slug: "gmail" },
  ]
}

const title = [
  { id: "dues", title: "Dues" },
  { id: "idx", title: "IDX Foreign Flow Tracker" },
  { id: "hobbify", title: "Hobbify" },
  { id: "airtable", title: "Airtable Clone" },
  { id: "gmail", title: "Gmail Clone" },
]

export default async function Page(props: ISlugProp) {
  const { slug } = await props.params

  const pageTitle = title.find((item) => item.id === slug)?.title

  const { default: MDXContent } = await import(`@/content/projects/${slug}.mdx`)
  const components = useMDXComponents({
    CustomLink,
  } as MDXComponents)

  return (
    <article className="prose prose-stone dark:prose-invert relative">
      <h1 className="font-bold text-xl">{pageTitle}</h1>
      <MDXContent components={components} />
    </article>
  )
}
