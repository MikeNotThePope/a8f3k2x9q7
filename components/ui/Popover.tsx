"use client";

import * as React from "react";
import * as PopoverPrimitives from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

/* --- Root --- */

const PopoverRoot = PopoverPrimitives.Root;

/* --- Trigger --- */

const PopoverTrigger = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitives.Trigger>
>(({ className, ...props }, ref) => (
  <PopoverPrimitives.Trigger
    ref={ref}
    className={cn(className)}
    {...props}
  />
));
PopoverTrigger.displayName = "Popover.Trigger";

/* --- Content --- */

interface IPopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitives.Content> {}

const PopoverContent = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitives.Content>,
  IPopoverContentProps
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitives.Portal>
    <PopoverPrimitives.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 border-2 border-border bg-background p-4 font-sans text-foreground shadow-md outline-hidden",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </PopoverPrimitives.Portal>
));
PopoverContent.displayName = "Popover.Content";

/* --- Close --- */

const PopoverClose = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitives.Close>
>(({ className, ...props }, ref) => (
  <PopoverPrimitives.Close
    ref={ref}
    className={cn(className)}
    {...props}
  />
));
PopoverClose.displayName = "Popover.Close";

/* --- Composite export --- */

const PopoverComponent = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Close: PopoverClose,
});

export { PopoverComponent as Popover };
