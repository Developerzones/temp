"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"

interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language = "javascript" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative my-6 rounded-lg border border-border bg-muted/50">
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <span className="text-sm font-mono text-muted-foreground">{language}</span>
        <Button variant="ghost" size="sm" onClick={handleCopy} className="h-8 px-2">
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-1" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-1" />
              Copy
            </>
          )}
        </Button>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-sm text-foreground">{code}</code>
      </pre>
    </div>
  )
}
