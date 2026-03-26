import { ElementType, JSX, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

// ─── Variant → default element mapping ───

const variantElements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
  small: "p",
  code: "code",
} as const satisfies Record<string, keyof JSX.IntrinsicElements>;

// ─── Variant → class mapping ───

const variantClasses: Record<keyof typeof variantElements, string> = {
  h1: "font-head text-4xl lg:text-5xl",
  h2: "font-head text-3xl lg:text-4xl",
  h3: "font-head text-2xl",
  h4: "font-head text-xl",
  h5: "font-head text-lg",
  h6: "font-head text-base",
  body: "font-sans text-base",
  small: "font-sans text-sm text-muted-foreground",
  code: "font-mono text-sm bg-muted px-1.5 py-0.5 border",
};

// ─── Types ───

type Variant = keyof typeof variantElements;

type TextProps<T extends ElementType = "p"> = {
  variant?: Variant;
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "className">;

// ─── Component ───

export function Text<T extends ElementType = "p">({
  variant = "body",
  as,
  className,
  ...props
}: TextProps<T>) {
  const Tag = as ?? variantElements[variant];
  return <Tag className={cn(variantClasses[variant], className)} {...props} />;
}
