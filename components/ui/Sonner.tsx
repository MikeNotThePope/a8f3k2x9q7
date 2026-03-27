"use client";

import * as React from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Toaster as SonnerToaster, type ToasterProps } from "sonner";

export interface ISonnerProps extends ToasterProps {}

const Toaster = React.forwardRef<HTMLDivElement, ISonnerProps>(
  ({ ...props }, _ref) => {
    const { theme = "system" } = useTheme() as { theme?: string };

    return (
      <SonnerToaster
        theme={theme as ToasterProps["theme"]}
        style={{ fontFamily: "inherit", overflowWrap: "anywhere" }}
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              "bg-background text-foreground border-border border-2 font-head shadow-md text-[13px] flex items-center gap-2.5 p-4 w-[356px] [&:has(button)]:justify-between",
            description: "font-sans",
            actionButton:
              "font-sans border-2 text-[12px] h-6 px-2 bg-primary text-primary-foreground border-border shrink-0",
            cancelButton:
              "font-sans border-2 text-[12px] h-6 px-2 bg-muted text-foreground border-border shrink-0",
            error: "bg-error text-error-foreground border-error-foreground",
            loading:
              "[&[data-sonner-toast]_[data-icon]]:flex [&[data-sonner-toast]_[data-icon]]:size-4 [&[data-sonner-toast]_[data-icon]]:relative [&[data-sonner-toast]_[data-icon]]:justify-start [&[data-sonner-toast]_[data-icon]]:items-center [&[data-sonner-toast]_[data-icon]]:flex-shrink-0",
          },
        }}
        {...props}
      />
    );
  },
);
Toaster.displayName = "Toaster";

export { Toaster };
