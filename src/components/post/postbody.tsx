interface PostBodyProps {
  content: string
}

export function PostBody({ content }: PostBodyProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="text-foreground leading-relaxed">{content}</p>
    </div>
  )
}
