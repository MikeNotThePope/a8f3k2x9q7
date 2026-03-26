import React, { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ type = "text", className, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-10 w-full border-2 bg-background px-4 py-2 font-sans text-sm shadow-md transition placeholder:text-muted-foreground focus:outline-none focus:shadow-xs disabled:cursor-not-allowed disabled:opacity-50",
        props["aria-invalid"] &&
          "border-destructive text-destructive shadow-xs shadow-destructive",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
