import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

export const cardVariants = cva(
  "bg-card text-card-foreground border-2 border-border",
  {
    variants: {
      variant: {
        default: "shadow-md",
        outlined: "shadow-none",
        elevated: "shadow-lg",
        interactive:
          "shadow-md hover:shadow active:shadow-none transition-all hover:translate-y-1 active:translate-y-2 active:translate-x-1 cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ICardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const CardRoot = React.forwardRef<HTMLDivElement, ICardProps>(
  (
    {
      children,
      className = "",
      variant = "default",
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(cardVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
CardRoot.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-4 border-b-2 border-border", className)}
    {...props}
  />
));
CardHeader.displayName = "Card.Header";

const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4", className)} {...props} />
));
CardBody.displayName = "Card.Body";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-4 border-t-2 border-border flex items-center gap-2", className)}
    {...props}
  />
));
CardFooter.displayName = "Card.Footer";

const CardComponent = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});

export { CardComponent as Card };
