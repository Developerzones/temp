import type React from "react"

type BlogComponent =
  | { type: "POST_BODY"; content: string }
  | { type: "HEADING_TAG"; headingLevel: "h2" | "h3" | "h4"; headingText: string }
  | { type: "CODE_BLOCK_WITH_COPY"; code: string }
  | { type: "TABLE_BLOCK"; tableHeaders: string[]; tableRows: string[][] }
  | { type: "IMAGE_BLOCK"; src: string; alt: string }

export default function PostSections({
  components,
  renderers,
}: {
  components: BlogComponent[]
  renderers?: {
    Code?: React.ComponentType<{ code: string }>
  }
}) {
  const Code = renderers?.Code

  return (
    
    <div className="space-y-6">
        {/* <img alt="new" src={"https://www.hiphopshakespeare.com/wp-content/uploads/2013/11/dummy-image-landscape-1024x585.jpg"}/> */}
      {components.map((comp, idx) => {
        switch (comp.type) {
          case "POST_BODY":
            return (
              <p key={idx} className="text-pretty text-base leading-relaxed">
                {comp.content}
              </p>
            )
          case "HEADING_TAG": {
            const Tag = comp.headingLevel
            return (
              <Tag key={idx} className="text-xl font-semibold">
                {comp.headingText}
              </Tag>
            )
          }
          case "CODE_BLOCK_WITH_COPY":
            return Code ? <Code key={idx} code={comp.code} /> : null
          case "IMAGE_BLOCK":
            return (
              <div key={idx} className="flex justify-center">
                <img
                  src={comp.src || "https://www.hiphopshakespeare.com/wp-content/uploads/2013/11/dummy-image-landscape-1024x585.jpg"}
                  alt={comp.alt || "Post image"}
                  className="max-h-96 rounded-lg shadow-sm"
                />
              </div>
            )
          case "TABLE_BLOCK":
            return (
              <div key={idx} className="overflow-x-auto rounded-md border">
                <table className="w-full border-collapse text-sm">
                  {comp.tableHeaders?.length ? (
                    <thead className="bg-muted/50">
                      <tr>
                        {comp.tableHeaders.map((h, i) => (
                          <th key={i} className="px-3 py-2 text-left font-semibold text-foreground">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  ) : null}
                  <tbody>
                    {Array.isArray(comp.tableRows) && comp.tableRows.length > 0 ? (
                      comp.tableRows.map((row, rIdx) => (
                        <tr key={rIdx} className="even:bg-muted/30">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-3 py-2 text-foreground">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td className="px-3 py-2 text-muted-foreground">No rows</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
