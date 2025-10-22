"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2, GripVertical, Eye, Code } from "lucide-react"
import type { Post, PostComponent } from "@/components/post/post"
import { PostRenderer } from "@/components/post/postrender"
import { ComponentEditor } from "@/components/post/componentseditor"
import Header from "@/components/fixed/header/Header"

export default function CreatePostPage() {
  const [post, setPost] = useState<Post>({
    headingText: "",
    authorName: "",
    category: "",
    slug: "",
    components: [],
  })

  const [showPreview, setShowPreview] = useState(false)
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)

  const addComponent = (type: PostComponent["type"]) => {
    let newComponent: PostComponent

    switch (type) {
      case "POST_BODY":
        newComponent = { type: "POST_BODY", content: "" }
        break
      case "HEADING_TAG":
        newComponent = { type: "HEADING_TAG", headingLevel: "h2", headingText: "" }
        break
      case "CODE_BLOCK_WITH_COPY":
        newComponent = { type: "CODE_BLOCK_WITH_COPY", code: "" }
        break
      case "TABLE_BLOCK":
        newComponent = {
          type: "TABLE_BLOCK",
          tableHeaders: '["Column 1", "Column 2"]',
          tableRows: '[["Row 1 Col 1", "Row 1 Col 2"]]',
        }
        break
      case "IMAGE_BLOCK":
        newComponent = { type: "IMAGE_BLOCK", src: "", alt: "" }
        break
    }

    setPost((prev) => ({
      ...prev,
      components: [...prev.components, newComponent],
    }))
  }

  const updateComponent = (index: number, component: PostComponent) => {
    setPost((prev) => ({
      ...prev,
      components: prev.components.map((c, i) => (i === index ? component : c)),
    }))
  }

  const deleteComponent = (index: number) => {
    setPost((prev) => ({
      ...prev,
      components: prev.components.filter((_, i) => i !== index),
    }))
  }

  const moveComponent = (fromIndex: number, toIndex: number) => {
    setPost((prev) => {
      const newComponents = [...prev.components]
      const [removed] = newComponents.splice(fromIndex, 1)
      newComponents.splice(toIndex, 0, removed)
      return { ...prev, components: newComponents }
    })
  }

  const handleDragStart = (index: number) => {
    setDraggedIndex(index)
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    if (draggedIndex === null || draggedIndex === index) return
    moveComponent(draggedIndex, index)
    setDraggedIndex(index)
  }

  const handleDragEnd = () => {
    setDraggedIndex(null)
  }

  const exportJSON = () => {
    const json = JSON.stringify(post, null, 2)
    const blob = new Blob([json], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${post.slug || "post"}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const copyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(post, null, 2))
  }

  return (
    <div> <Header/>
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-foreground">Create Blog Post</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setShowPreview(!showPreview)}>
              <Eye className="mr-2 h-4 w-4" />
              {showPreview ? "Edit" : "Preview"}
            </Button>
            <Button variant="outline" onClick={copyJSON}>
              <Code className="mr-2 h-4 w-4" />
              Copy JSON
            </Button>
            <Button onClick={exportJSON}>Export JSON</Button>
          </div>
        </div>

        {showPreview ? (
          <div className="mx-auto max-w-4xl">
            <article className="rounded-lg border border-border bg-card p-8">
              <header className="mb-12 border-b border-border pb-8">
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {post.category || "Category"}
                  </span>
                </div>
                <h1 className="mb-4 text-5xl font-bold text-foreground text-balance">
                  {post.headingText || "Post Title"}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>By {post.authorName || "Author Name"}</span>
                </div>
              </header>
              <PostRenderer components={post.components} />
            </article>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Column - Metadata */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Post Metadata</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="headingText">Post Title</Label>
                    <Input
                      id="headingText"
                      value={post.headingText}
                      onChange={(e) => setPost({ ...post, headingText: e.target.value })}
                      placeholder="Enter post title"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="authorName">Author Name</Label>
                    <Input
                      id="authorName"
                      value={post.authorName}
                      onChange={(e) => setPost({ ...post, authorName: e.target.value })}
                      placeholder="Enter author name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      value={post.category}
                      onChange={(e) => setPost({ ...post, category: e.target.value })}
                      placeholder="Enter category"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      value={post.slug}
                      onChange={(e) => setPost({ ...post, slug: e.target.value })}
                      placeholder="post-url-slug"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Add Component</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button onClick={() => addComponent("POST_BODY")} variant="outline" className="w-full justify-start">
                    <Plus className="mr-2 h-4 w-4" />
                    Text Content
                  </Button>
                  <Button
                    onClick={() => addComponent("HEADING_TAG")}
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Heading
                  </Button>
                  <Button
                    onClick={() => addComponent("CODE_BLOCK_WITH_COPY")}
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Code Block
                  </Button>
                  <Button
                    onClick={() => addComponent("TABLE_BLOCK")}
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Table
                  </Button>
                  <Button
                    onClick={() => addComponent("IMAGE_BLOCK")}
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Image
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Components */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Post Components</h2>
              {post.components.length === 0 ? (
                <Card>
                  <CardContent className="flex h-40 items-center justify-center text-muted-foreground">
                    No components added yet. Add components from the left panel.
                  </CardContent>
                </Card>
              ) : (
                post.components.map((component, index) => (
                  <Card
                    key={index}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragEnd={handleDragEnd}
                    className="cursor-move transition-shadow hover:shadow-md"
                  >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <div className="flex items-center gap-2">
                        <GripVertical className="h-5 w-5 text-muted-foreground" />
                        <CardTitle className="text-base">
                          {component.type
                            .replace(/_/g, " ")
                            .toLowerCase()
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </CardTitle>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => deleteComponent(index)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <ComponentEditor component={component} onChange={(updated) => updateComponent(index, updated)} />
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  )
}
