import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

export const iconButtonVariants = cva(
  "font-head transition-all outline-hidden cursor-pointer duration-200 inline-flex justify-center items-center disabled:opacity-60 disabled:cursor-not-allowed border-2 border-border",
  {
    variants: {
      variant: {
        default:
          "shadow-md hover:shadow active:shadow-none bg-primary text-primary-foreground transition hover:translate-y-1 active:translate-y-2 active:translate-x-1 hover:bg-primary-hover",
        secondary:
          "shadow-md hover:shadow active:shadow-none bg-secondary text-secondary-foreground shadow-primary transition hover:translate-y-1 active:translate-y-2 active:translate-x-1",
        outline:
          "shadow-md hover:shadow active:shadow-none bg-transparent transition hover:translate-y-1 active:translate-y-2 active:translate-x-1",
        ghost: "bg-transparent hover:bg-accent border-transparent shadow-none",
      },
      size: {
        sm: "p-1.5 [&_svg]:size-4",
        md: "p-2 [&_svg]:size-5",
        lg: "p-3 [&_svg]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface IIconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IIconButtonProps>(
  (
    {
      children,
      className = "",
      variant = "default",
      size = "md",
      asChild = false,
      ...props
    }: IIconButtonProps,
    forwardedRef,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={forwardedRef}
        className={cn(iconButtonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

IconButton.displayName = "IconButton";
