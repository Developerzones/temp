"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { PostComponent } from "@/components/post/post"

interface ComponentEditorProps {
  component: PostComponent
  onChange: (component: PostComponent) => void
}

export function ComponentEditor({ component, onChange }: ComponentEditorProps) {
  switch (component.type) {
    case "POST_BODY":
      return (
        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            value={component.content}
            onChange={(e) => onChange({ ...component, content: e.target.value })}
            placeholder="Enter text content"
            rows={4}
          />
        </div>
      )

    case "HEADING_TAG":
      return (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="headingLevel">Heading Level</Label>
            <Select
              value={component.headingLevel}
              onValueChange={(value) =>
                onChange({ ...component, headingLevel: value as "h1" | "h2" | "h3" | "h4" | "h5" | "h6" })
              }
            >
              <SelectTrigger id="headingLevel">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="h1">H1</SelectItem>
                <SelectItem value="h2">H2</SelectItem>
                <SelectItem value="h3">H3</SelectItem>
                <SelectItem value="h4">H4</SelectItem>
                <SelectItem value="h5">H5</SelectItem>
                <SelectItem value="h6">H6</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="headingText">Heading Text</Label>
            <Input
              id="headingText"
              value={component.headingText}
              onChange={(e) => onChange({ ...component, headingText: e.target.value })}
              placeholder="Enter heading text"
            />
          </div>
        </div>
      )

    case "CODE_BLOCK_WITH_COPY":
      return (
        <div className="space-y-2">
          <Label htmlFor="code">Code</Label>
          <Textarea
            id="code"
            value={component.code}
            onChange={(e) => onChange({ ...component, code: e.target.value })}
            placeholder="Enter code"
            rows={6}
            className="font-mono text-sm"
          />
        </div>
      )

    case "TABLE_BLOCK":
      return (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tableHeaders">Table Headers (JSON Array)</Label>
            <Input
              id="tableHeaders"
              value={component.tableHeaders}
              onChange={(e) => onChange({ ...component, tableHeaders: e.target.value })}
              placeholder='["Header 1", "Header 2", "Header 3"]'
              className="font-mono text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tableRows">Table Rows (JSON Array of Arrays)</Label>
            <Textarea
              id="tableRows"
              value={component.tableRows}
              onChange={(e) => onChange({ ...component, tableRows: e.target.value })}
              placeholder='[["Row 1 Col 1", "Row 1 Col 2"], ["Row 2 Col 1", "Row 2 Col 2"]]'
              rows={4}
              className="font-mono text-sm"
            />
          </div>
        </div>
      )

    case "IMAGE_BLOCK":
      return (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="src">Image URL</Label>
            <Input
              id="src"
              value={component.src}
              onChange={(e) => onChange({ ...component, src: e.target.value })}
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="alt">Alt Text</Label>
            <Input
              id="alt"
              value={component.alt}
              onChange={(e) => onChange({ ...component, alt: e.target.value })}
              placeholder="Describe the image"
            />
          </div>
          {component.src && (
            <div className="rounded-md border border-border p-2">
              <img src={component.src || "/placeholder.svg"} alt={component.alt} className="h-auto w-full rounded" />
            </div>
          )}
        </div>
      )
  }
}
