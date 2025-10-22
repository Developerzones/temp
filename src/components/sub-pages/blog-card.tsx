import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { BlogPost } from "./blog"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Card className="group flex flex-col h-full transition-all hover:border-primary/50 hover:shadow-lg bg-black text-white">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium  uppercase tracking-wider text-blue-500">{post.category}</span>
          <time className="text-xs text-background font-mono" dateTime={post.date}>
            {formattedDate}
          </time>
        </div>
        <h2 className="text-xl font-semibold leading-tight text-balance group-hover:text-gray-100 transition-colors">
          {post.title}
        </h2>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-gray-300 leading-relaxed text-pretty">{post.description}</p>
      </CardContent>

      <CardFooter>
        <Link
          href={`/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-yellow-500 font-bold hover:gap-3 transition-all"
        >
          Read more
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
