import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

export const badgeVariants = cva(
  "font-head uppercase border-2 border-border inline-flex items-center",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        success: "bg-emerald-400 text-black",
        warning: "bg-amber-400 text-black",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "bg-transparent text-foreground",
      },
      size: {
        sm: "px-1.5 py-0.5 text-[10px]",
        md: "px-2 py-0.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface IBadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, IBadgeProps>(
  (
    {
      children,
      size = "md",
      className = "",
      variant = "default",
      asChild = false,
      ...props
    }: IBadgeProps,
    forwardedRef,
  ) => {
    const Comp = asChild ? Slot : "span";
    return (
      <Comp
        ref={forwardedRef}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Badge.displayName = "Badge";
