"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

// ─── Types ───

export interface AnnouncementBannerProps {
  children: React.ReactNode;
  dismissible?: boolean;
  className?: string;
}

// ─── Component ───

export function AnnouncementBanner({
  children,
  dismissible = true,
  className,
}: AnnouncementBannerProps) {
  const [visible, setVisible] = React.useState(() => {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem("announcement-dismissed") !== "true";
  });

  const handleDismiss = () => {
    setVisible(false);
    sessionStorage.setItem("announcement-dismissed", "true");
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "w-full bg-primary text-primary-foreground border-b-2",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-center gap-3">
        <p className="font-sans text-sm text-center flex-1">{children}</p>
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="shrink-0 p-2 min-w-[44px] min-h-[44px] inline-flex items-center justify-center hover:bg-foreground/10 transition-colors cursor-pointer"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
