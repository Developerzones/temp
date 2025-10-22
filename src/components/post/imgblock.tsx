
interface ImageBlockProps {
  src: string
  alt: string
  caption?: string
}

export function ImageBlock({ src, alt, caption }: ImageBlockProps) {
  return (
    <figure className="my-8">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border">
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>
      {caption && <figcaption className="mt-2 text-center text-sm text-muted-foreground">{caption}</figcaption>}
    </figure>
  )
}
