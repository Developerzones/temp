// Type definitions for the dynamic post system

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface PostBodyComponent {
  type: "POST_BODY"
  content: string
}

export interface HeadingTagComponent {
  type: "HEADING_TAG"
  headingLevel: HeadingLevel
  headingText: string
}

export interface CodeBlockComponent {
  type: "CODE_BLOCK_WITH_COPY"
  code: string
  language?: string
}

export interface TableBlockComponent {
  type: "TABLE_BLOCK"
  tableHeaders: string // JSON string array
  tableRows: string // JSON string 2D array
}

export interface ImageBlockComponent {
  type: "IMAGE_BLOCK"
  src: string
  alt: string
  caption?: string
}

// Union type for all possible components
export type PostComponent =
  | PostBodyComponent
  | HeadingTagComponent
  | CodeBlockComponent
  | TableBlockComponent
  | ImageBlockComponent

// Main post structure
export interface Post {
  headingText: string
  authorName: string
  category: string
  slug: string
  components: PostComponent[]
}
