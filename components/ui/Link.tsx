import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { AnchorHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

export const linkVariants = cva(
  "font-head inline-flex items-center gap-1 cursor-pointer transition-colors duration-200 underline-offset-4",
  {
    variants: {
      variant: {
        default:
          "text-primary-foreground underline decoration-primary hover:decoration-2",
        muted:
          "text-muted-foreground underline decoration-muted hover:text-foreground hover:decoration-foreground",
        destructive:
          "text-destructive underline decoration-destructive hover:decoration-2",
        plain: "text-foreground hover:underline",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface ILinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, ILinkProps>(
  (
    {
      children,
      className = "",
      variant = "default",
      size = "md",
      asChild = false,
      ...props
    }: ILinkProps,
    forwardedRef,
  ) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        ref={forwardedRef}
        className={cn(linkVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Link.displayName = "Link";
