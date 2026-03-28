import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

// ─── Variants ───

export const sectionVariants = cva("w-full py-16 lg:py-24 scroll-mt-[120px]", {
  variants: {
    background: {
      default: "bg-background",
      muted: "bg-muted/30",
      card: "bg-card border-y-2",
      primary: "bg-primary text-primary-foreground",
    },
  },
  defaultVariants: {
    background: "default",
  },
});

// ─── Types ───

export interface SectionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title">,
    VariantProps<typeof sectionVariants> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
}

// ─── Component ───

export function Section({
  title,
  subtitle,
  children,
  className,
  background = "default",
  align = "center",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(sectionVariants({ background }), className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-4">
        {(title || subtitle) && (
          <div
            className={cn(
              "mb-12",
              align === "center" && "text-center",
              align === "left" && "text-left",
            )}
          >
            {title && (
              <h2 className="font-head text-3xl lg:text-4xl mb-3">{title}</h2>
            )}
            {subtitle && (
              <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
