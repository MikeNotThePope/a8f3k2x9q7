"use client";

import * as React from "react";
import * as CollapsiblePrimitives from "@radix-ui/react-collapsible";
import { cn } from "@/lib/utils";

/* --- Root --- */

const CollapsibleRoot = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitives.Root>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitives.Root
    ref={ref}
    className={cn(className)}
    {...props}
  />
));
CollapsibleRoot.displayName = "Collapsible";

/* --- Trigger --- */

const CollapsibleTrigger = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitives.CollapsibleTrigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitives.CollapsibleTrigger>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitives.CollapsibleTrigger
    ref={ref}
    className={cn("cursor-pointer", className)}
    {...props}
  />
));
CollapsibleTrigger.displayName = "Collapsible.Trigger";

/* --- Content --- */

const CollapsibleContent = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitives.CollapsibleContent>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitives.CollapsibleContent>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitives.CollapsibleContent
    ref={ref}
    className={cn(
      "overflow-hidden data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
      className,
    )}
    {...props}
  />
));
CollapsibleContent.displayName = "Collapsible.Content";

/* --- Composite export --- */

const CollapsibleComponent = Object.assign(CollapsibleRoot, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
});

export { CollapsibleComponent as Collapsible };
