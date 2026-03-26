import React from "react";
import { cn } from "@/lib/utils";

// ─── Types ───

export interface CardGridProps {
  children?: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

// ─── Component ───

const columnClasses = {
  2: "grid gap-4 sm:grid-cols-2",
  3: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
};

export function CardGrid({ children, columns = 3, className }: CardGridProps) {
  const isEmpty = React.Children.count(children) === 0;

  if (isEmpty) {
    return (
      <div
        className={cn(
          "border-2 border-dashed border-border p-12 text-center",
          className,
        )}
      >
        <p className="font-head text-lg text-muted-foreground">
          Nothing here yet
        </p>
      </div>
    );
  }

  return (
    <div className={cn(columnClasses[columns], className)}>
      {children}
    </div>
  );
}
