import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const dividerVariants = cva("border-border", {
  variants: {
    orientation: {
      horizontal: "w-full border-t-2",
      vertical: "h-full border-l-2 self-stretch",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface IDividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  label?: React.ReactNode;
}

export const Divider = React.forwardRef<HTMLDivElement, IDividerProps>(
  ({ className, orientation = "horizontal", label, ...props }, ref) => {
    if (label && orientation === "horizontal") {
      return (
        <div
          ref={ref}
          role="separator"
          className={cn("flex items-center gap-3 w-full", className)}
          {...props}
        >
          <div className="flex-1 border-t-2 border-border" />
          <span className="font-sans text-sm text-muted-foreground shrink-0">
            {label}
          </span>
          <div className="flex-1 border-t-2 border-border" />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="separator"
        className={cn(dividerVariants({ orientation }), className)}
        {...props}
      />
    );
  },
);

Divider.displayName = "Divider";
