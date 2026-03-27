"use client";

import * as React from "react";
import {
  Group,
  Panel,
  Separator,
  type GroupProps,
  type PanelProps,
  type SeparatorProps,
} from "react-resizable-panels";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── PanelGroup ─── */

const ResizablePanelGroup = ({
  className,
  ...props
}: GroupProps) => (
  <Group
    className={cn(
      "flex h-full w-full font-sans data-[panel-group-direction=vertical]:flex-col",
      className,
    )}
    {...props}
  />
);
ResizablePanelGroup.displayName = "Resizable.PanelGroup";

/* ─── Panel ─── */

const ResizablePanel = ({
  className,
  ...props
}: PanelProps) => (
  <Panel
    className={cn(className)}
    {...props}
  />
);
ResizablePanel.displayName = "Resizable.Panel";

/* ─── Handle ─── */

interface IResizableHandleProps extends SeparatorProps {
  withHandle?: boolean;
}

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: IResizableHandleProps) => (
  <Separator
    className={cn(
      "relative flex w-0.5 items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-0.5 data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center border-2 border-border bg-muted">
        <GripVertical className="size-2.5" />
      </div>
    )}
  </Separator>
);
ResizableHandle.displayName = "Resizable.Handle";

/* ─── Composite export ─── */

const ResizableComponent = Object.assign(ResizablePanelGroup, {
  Panel: ResizablePanel,
  Handle: ResizableHandle,
});

export { ResizableComponent as Resizable };
