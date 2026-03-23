import React from "react";
import { cn } from "@/lib/utils";

// ─── Types ───

export interface SimplePageProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

// ─── Component ───

export function SimplePage({
  title,
  subtitle,
  actions,
  children,
  className,
}: SimplePageProps) {
  return (
    <div className={cn("min-h-screen", className)}>
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="font-head text-4xl mb-2">{title}</h1>
              {subtitle && (
                <p className="font-sans text-lg text-muted-foreground max-w-xl">
                  {subtitle}
                </p>
              )}
            </div>
            {actions && (
              <div className="shrink-0 flex items-center gap-2">{actions}</div>
            )}
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {children}
      </main>
    </div>
  );
}
