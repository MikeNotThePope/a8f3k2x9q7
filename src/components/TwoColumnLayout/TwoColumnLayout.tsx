"use client";

import { cn } from "@/lib/utils";
import { Drawer } from "@/components/ui/Drawer";
import { Button } from "@/components/ui/Button";
import { PanelRight } from "lucide-react";
import React, { useState } from "react";

interface TwoColumnLayoutProps {
  children: React.ReactNode;
  className?: string;
  drawerTitle?: string;
}

function TwoColumnLayout({
  children,
  className,
  drawerTitle = "Details",
}: TwoColumnLayoutProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  let leftContent: React.ReactNode = null;
  let rightContent: React.ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    const type = child.type as { displayName?: string };
    if (type.displayName === "TwoColumnLayout.Left") leftContent = child;
    if (type.displayName === "TwoColumnLayout.Right") rightContent = child;
  });

  return (
    <div className={cn("flex flex-col md:flex-row gap-0 min-h-0", className)}>
      {/* Left column — always visible */}
      <div className="flex-1 min-w-0 md:border-r-2">{leftContent}</div>

      {/* Right column — visible on md+, hidden on mobile */}
      <div className="hidden md:block flex-1 min-w-0">{rightContent}</div>

      {/* Mobile drawer trigger */}
      {rightContent && (
        <div className="fixed bottom-6 right-6 md:hidden z-40">
          <Button
            variant="default"
            size="icon"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open right panel"
          >
            <PanelRight className="size-5" />
          </Button>
        </div>
      )}

      {/* Mobile drawer */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="right">
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>{drawerTitle}</Drawer.Title>
          </Drawer.Header>
          <div className="flex-1 overflow-y-auto p-4">{rightContent}</div>
        </Drawer.Content>
      </Drawer>
    </div>
  );
}

interface TwoColumnPanelProps {
  children: React.ReactNode;
  className?: string;
}

function TwoColumnLeft({ children, className }: TwoColumnPanelProps) {
  return <div className={cn("h-full", className)}>{children}</div>;
}
TwoColumnLeft.displayName = "TwoColumnLayout.Left";

function TwoColumnRight({ children, className }: TwoColumnPanelProps) {
  return <div className={cn("h-full", className)}>{children}</div>;
}
TwoColumnRight.displayName = "TwoColumnLayout.Right";

const TwoColumnLayoutComponent = Object.assign(TwoColumnLayout, {
  Left: TwoColumnLeft,
  Right: TwoColumnRight,
});

export { TwoColumnLayoutComponent as TwoColumnLayout };
