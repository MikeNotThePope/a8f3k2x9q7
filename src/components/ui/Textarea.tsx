import React, { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ITextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      rows={4}
      className={cn(
        "flex w-full border-2 bg-background px-4 py-2 font-sans text-sm shadow-md transition placeholder:text-muted-foreground focus:outline-none focus:shadow-xs disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
