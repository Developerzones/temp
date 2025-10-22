"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { BlogCard } from "./blog-card"
import type { BlogPost } from "./blog"

interface BlogListProps {
  posts: BlogPost[]
  searchPlaceholder?: string
}

export function BlogList({ posts, searchPlaceholder = "Search articles..." }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return posts
    }

    const query = searchQuery.toLowerCase()
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query),
    )
  }, [searchQuery, posts])

  return (
    <div className="space-y-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-12 text-base bg-card border-border"
        />
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No articles found matching &quot;{searchQuery}&quot;</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
