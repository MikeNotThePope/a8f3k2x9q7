"use client";

import * as React from "react";
import * as ProgressPrimitives from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

export interface IProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitives.Root> {
  value?: number;
}

const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitives.Root>,
  IProgressProps
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitives.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden border-2 border-border bg-muted",
      className,
    )}
    {...props}
  >
    <ProgressPrimitives.Indicator
      className="h-full w-full flex-1 border-r-2 border-border bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitives.Root>
));
Progress.displayName = "Progress";

export { Progress };
