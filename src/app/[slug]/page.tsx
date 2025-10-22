import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import CopyButton from "@/components/ui/CopyButton"
import PostSections from "@/components/ui/PostSection"
import Image from "next/image"
import Header from "@/components/fixed/header/Header"

type BlogComponent =
  | { type: "POST_BODY"; content: string }
  | { type: "HEADING_TAG"; headingLevel: "h2" | "h3" | "h4"; headingText: string }
  | { type: "CODE_BLOCK_WITH_COPY"; code: string }
  | { type: "TABLE_BLOCK"; tableHeaders: string[]; tableRows: string[][] }
  | { type: "IMAGE_BLOCK"; src: string; alt: string }

interface BlogPostData {
  headingText: string
  authorName: string
  category: string
  components: BlogComponent[]
  createdAt?: string
  componentCount?: number
  id?: number
  slug?: string
}

type RawComponent = {
  componentType?: string
  type?: string
  componentData?: string
  componentOrder?: number
  content?: string
  code?: string
  src?: string
  alt?: string
}

function safeParse<T extends object>(s: unknown): T | null {
  if (typeof s !== "string") return null
  try {
    const parsed = JSON.parse(s)
    return typeof parsed === "object" && parsed !== null ? (parsed as T) : null
  } catch {
    return null
  }
}

async function getBlogPost(slug: string): Promise<BlogPostData | null> {
  try {
    const res = await fetch(`https://scms-lqwu.onrender.com/post/post/${slug}`, {
      cache: "no-store",
    })
    if (!res.ok) {
      return null
    }

    const json: unknown = await res.json()
    const payload = (json as { data?: unknown })?.data ?? json

    const rawComponents = Array.isArray((payload as { components?: unknown })?.components)
      ? ((payload as { components: unknown }).components as RawComponent[])
      : []

    rawComponents.sort(
      (a, b) => (a?.componentOrder ?? Number.POSITIVE_INFINITY) - (b?.componentOrder ?? Number.POSITIVE_INFINITY),
    )

    const components: BlogComponent[] = rawComponents
      .map((c) => {
        const type = (c.componentType ?? c.type) as string | undefined
        const dataObj = safeParse<Record<string, unknown>>(c.componentData)

        switch (type) {
          case "POST_BODY": {
            const content =
              (dataObj && typeof dataObj.content === "string" && dataObj.content) ||
              (typeof c.content === "string" && c.content) ||
              (typeof c.componentData === "string" && c.componentData) ||
              ""
            return { type: "POST_BODY", content }
          }
          case "HEADING_TAG": {
            const level =
              (dataObj && (dataObj.as === "h2" || dataObj.as === "h3" || dataObj.as === "h4") && dataObj.as) || "h2"
            const text = (dataObj && typeof dataObj.text === "string" && dataObj.text) || ""
            return { type: "HEADING_TAG", headingLevel: level, headingText: text }
          }
          case "CODE_BLOCK_WITH_COPY": {
            const code =
              (dataObj && typeof dataObj.code === "string" && dataObj.code) ||
              (typeof c.code === "string" ? c.code : "")
            return { type: "CODE_BLOCK_WITH_COPY", code }
          }
          case "TABLE_BLOCK": {
            const headers =
              (dataObj && Array.isArray((dataObj as Record<string, unknown>).headers)
                ? (dataObj as { headers: string[] }).headers
                : []) || []
            const rows =
              (dataObj && Array.isArray((dataObj as Record<string, unknown>).rows)
                ? (dataObj as { rows: string[][] }).rows
                : []) || []
            return { type: "TABLE_BLOCK", tableHeaders: headers, tableRows: rows }
          }
          case "IMAGE_BLOCK": {
            const src =
              (dataObj &&
                typeof (dataObj as Record<string, unknown>).src === "string" &&
                (dataObj as { src: string }).src) ||
              (typeof c.src === "string" ? c.src : "")
            const alt =
              (dataObj &&
                typeof (dataObj as Record<string, unknown>).alt === "string" &&
                (dataObj as { alt: string }).alt) ||
              (typeof c.alt === "string" ? c.alt : "Blog image")
            return { type: "IMAGE_BLOCK", src, alt }
          }

          case "TEXT":
            return { type: "POST_BODY", content: c?.componentData ?? c?.content ?? "" }
          case "IMAGE":
            return { type: "IMAGE_BLOCK", src: c?.componentData ?? c?.src ?? "", alt: c?.alt ?? "Blog image" }
          case "CODE":
            return { type: "CODE_BLOCK_WITH_COPY", code: c?.componentData ?? c?.code ?? "" }
          default:
            return null
        }
      })
      .filter((v): v is BlogComponent => v !== null)

    const p = payload as {
      headingText?: string
      title?: string
      name?: string
      authorName?: string
      author?: string
      author_name?: string
      category?: string
      categoryName?: string
      category_name?: string
      createdAt?: string
      componentCount?: number
      id?: number
      slug?: string
    }

    return {
      headingText: p.headingText ?? p.title ?? p.name ?? "",
      authorName: p.authorName ?? p.author ?? p.author_name ?? "",
      category: p.category ?? p.categoryName ?? p.category_name ?? "",
      components,
      createdAt: p.createdAt,
      componentCount: typeof p.componentCount === "number" ? p.componentCount : undefined,
      id: typeof p.id === "number" ? p.id : undefined,
      slug: typeof p.slug === "string" ? p.slug : undefined,
    }
  } catch {
    return null
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const post = await getBlogPost(slug)
  if (!post) return notFound()

  return (
    <div> <Header/>
    <main className="mx-auto max-w-3xl p-6 space-y-8">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-balance text-3xl font-bold">{post.headingText || "Untitled"}</h1>

        {/* Meta bar (author + category) */}
        {(post.authorName || post.category) && (
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>
              {"By "}
              <span className="font-medium">{post.authorName || "Unknown author"}</span>
            </p>
            {post.category ? (
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {post.category}
              </span>
            ) : null}
          </div>
        )}

        {/* Created at (if available) */}
        {post.createdAt ? (
          <p className="text-xs text-muted-foreground">
            Published <time dateTime={post.createdAt}>{new Date(post.createdAt).toLocaleString()}</time>
          </p>
        ) : null}
      </header>

      {/* Content */}
      <article className="space-y-6">
        {post.components.length === 0 ? (
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-0">
              <Image
                unoptimized
                src="/blog-post-header-placeholder.jpg"
                alt="Placeholder illustration for this post"
                width={1024}
                height={256}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-6 space-y-2">
              <h2 className="text-xl font-semibold">Content coming soon</h2>
              <p className="text-sm text-muted-foreground">
                This post was created on{" "}
                <time dateTime={post.createdAt ?? ""}>
                  {post.createdAt ? new Date(post.createdAt).toLocaleString() : "recently"}
                </time>
                , but the author hasn’t added sections yet.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                {post.authorName ? (
                  <span>
                    By <span className="font-medium">{post.authorName}</span>
                  </span>
                ) : null}
                {post.authorName && post.category ? <span>•</span> : null}
                {post.category ? <span className="italic">{post.category}</span> : null}
                {typeof post.componentCount === "number" ? (
                  <>
                    <span>•</span>
                    <span>
                      {post.componentCount} section{post.componentCount === 1 ? "" : "s"} planned
                    </span>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <PostSections
            components={post.components}
            renderers={{
              Code: ({ code }) => (
                <Card className="relative">
                  <CopyButton code={code} className="absolute right-2 top-2" />
                  <CardContent className="p-4 overflow-x-auto">
                    <pre className="whitespace-pre-wrap font-mono text-sm leading-6">{code}</pre>
                  </CardContent>
                </Card>
              ),
            }}
          />
        )}
      </article>
    </main>
    </div>
  )
}
