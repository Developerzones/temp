"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  code: string
}

export default function CopyButton({ code, className, ...props }: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false)

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      const t = setTimeout(() => setCopied(false), 1500)
      return () => clearTimeout(t)
    } catch {
      // no-op
    }
  }

  return (
    <Button
      type="button"
      variant="secondary"
      size="sm"
      aria-label={copied ? "Code copied" : "Copy code"}
      onClick={onCopy}
      className={cn("gap-2", className)}
      {...props}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      <span className="sr-only">{copied ? "Code copied" : "Copy code"}</span>
    </Button>
  )
}
