"use client";

import * as React from "react";
import * as HoverCardPrimitives from "@radix-ui/react-hover-card";
import { cn } from "@/lib/utils";

/* --- Root --- */

const HoverCardRoot = HoverCardPrimitives.Root;

/* --- Trigger --- */

const HoverCardTrigger = React.forwardRef<
  React.ComponentRef<typeof HoverCardPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitives.Trigger>
>(({ className, ...props }, ref) => (
  <HoverCardPrimitives.Trigger
    ref={ref}
    className={cn(className)}
    {...props}
  />
));
HoverCardTrigger.displayName = "HoverCard.Trigger";

/* --- Content --- */

interface IHoverCardContentProps
  extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitives.Content> {}

const HoverCardContent = React.forwardRef<
  React.ComponentRef<typeof HoverCardPrimitives.Content>,
  IHoverCardContentProps
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitives.Portal>
    <HoverCardPrimitives.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-64 border-2 border-border bg-background p-4 font-sans text-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </HoverCardPrimitives.Portal>
));
HoverCardContent.displayName = "HoverCard.Content";

/* --- Composite export --- */

const HoverCardComponent = Object.assign(HoverCardRoot, {
  Trigger: HoverCardTrigger,
  Content: HoverCardContent,
});

export { HoverCardComponent as HoverCard };
