import * as React from "react"

import { cn } from "@/lib/utils"

// This interface extends React's TextareaHTMLAttributes with custom properties
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // Adding at least one property to avoid the empty interface error
  /** Optional custom variant for the textarea */
  variant?: 'default' | 'filled' | 'outlined'
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
