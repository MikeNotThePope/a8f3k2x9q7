"use client";

import * as React from "react";
import * as TooltipPrimitives from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

/* --- Provider --- */

interface ITooltipProviderProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitives.Provider> {}

const TooltipProvider = ({
  delayDuration = 0,
  ...props
}: ITooltipProviderProps) => (
  <TooltipPrimitives.Provider delayDuration={delayDuration} {...props} />
);
TooltipProvider.displayName = "Tooltip.Provider";

/* --- Root --- */

const TooltipRoot = TooltipPrimitives.Root;

/* --- Trigger --- */

const TooltipTrigger = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitives.Trigger>
>(({ className, ...props }, ref) => (
  <TooltipPrimitives.Trigger
    ref={ref}
    className={cn(className)}
    {...props}
  />
));
TooltipTrigger.displayName = "Tooltip.Trigger";

/* --- Content --- */

interface ITooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitives.Content> {}

const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitives.Content>,
  ITooltipContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitives.Portal>
    <TooltipPrimitives.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden border-2 border-border bg-background px-3 py-1.5 text-sm font-sans text-foreground shadow-md",
        "animate-in fade-in-0 zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </TooltipPrimitives.Portal>
));
TooltipContent.displayName = "Tooltip.Content";

/* --- Composite export --- */

const TooltipComponent = Object.assign(TooltipRoot, {
  Provider: TooltipProvider,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
});

export { TooltipComponent as Tooltip };
