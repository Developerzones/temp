import type { PostComponent } from "@/components/post/post"
import { PostBody } from "./postbody"
import { HeadingTag } from "./heading"
import { CodeBlock } from "./copycode"
import { TableBlock } from "./tableblock"
import { ImageBlock } from "./imgblock"

interface PostRendererProps {
  components: PostComponent[]
}

export function PostRenderer({ components }: PostRendererProps) {
  return (
    <div className="space-y-4">
      {components.map((component, index) => {
        // Use index as key since components can repeat
        const key = `${component.type}-${index}`

        switch (component.type) {
          case "POST_BODY":
            return <PostBody key={key} content={component.content} />

          case "HEADING_TAG":
            return <HeadingTag key={key} headingLevel={component.headingLevel} headingText={component.headingText} />

          case "CODE_BLOCK_WITH_COPY":
            return <CodeBlock key={key} code={component.code} language={component.language} />

          case "TABLE_BLOCK":
            return <TableBlock key={key} tableHeaders={component.tableHeaders} tableRows={component.tableRows} />

          case "IMAGE_BLOCK":
            return (
              <ImageBlock
                key={key}
                src={component.src || "/placeholder.svg"}
                alt={component.alt}
                caption={component.caption}
              />
            )

          default:
            // TypeScript exhaustiveness check
            const _exhaustive: never = component
            return null
        }
      })}
    </div>
  )
}
