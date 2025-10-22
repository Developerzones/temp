import type { HeadingLevel } from "@/components/post/post"

interface HeadingTagProps {
  headingLevel: HeadingLevel
  headingText: string
}

export function HeadingTag({ headingLevel, headingText }: HeadingTagProps) {
  const Tag = headingLevel

  const styles = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-semibold",
    h4: "text-xl font-semibold",
    h5: "text-lg font-medium",
    h6: "text-base font-medium",
  }

  return <Tag className={`${styles[headingLevel]} text-foreground mt-8 mb-4`}>{headingText}</Tag>
}
