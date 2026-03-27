"use client";

import * as React from "react";
import * as AccordionPrimitives from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Root ─── */

const AccordionRoot = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Root>
>(({ className, ...props }, ref) => (
  <AccordionPrimitives.Root
    ref={ref}
    className={cn("flex flex-col gap-2", className)}
    {...props}
  />
));
AccordionRoot.displayName = "Accordion";

/* ─── Item ─── */

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitives.Item
    ref={ref}
    className={cn(
      "overflow-hidden border-2 border-border shadow-md",
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = "Accordion.Item";

/* ─── Trigger ─── */

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitives.Header className="flex">
    <AccordionPrimitives.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between text-left text-base font-head",
        "bg-background text-foreground border-border p-4",
        "transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        "[&[data-state=open]>svg]:rotate-180 data-[state=open]:border-b-2",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="pointer-events-none size-5 shrink-0 transition-transform duration-200" />
    </AccordionPrimitives.Trigger>
  </AccordionPrimitives.Header>
));
AccordionTrigger.displayName = "Accordion.Trigger";

/* ─── Content ─── */

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitives.Content
    ref={ref}
    className="overflow-hidden bg-muted text-sm font-sans transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("p-4", className)}>{children}</div>
  </AccordionPrimitives.Content>
));
AccordionContent.displayName = "Accordion.Content";

/* ─── Compound Export ─── */

const AccordionComponent = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});

export { AccordionComponent as Accordion };
