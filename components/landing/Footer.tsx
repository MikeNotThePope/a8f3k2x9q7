import * as React from "react";
import { cn } from "@/lib/utils";

// ─── Types ───

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterProps {
  brand: React.ReactNode;
  tagline?: string;
  groups?: FooterLinkGroup[];
  bottom?: React.ReactNode;
  className?: string;
}

// ─── Component ───

export function Footer({
  brand,
  tagline,
  groups = [],
  bottom,
  className,
}: FooterProps) {
  return (
    <footer className={cn("w-full border-t-2 bg-background", className)}>
      <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_repeat(auto-fit,1fr)]">
          {/* Brand column */}
          <div className="max-w-xs">
            <div className="font-head text-2xl mb-2">{brand}</div>
            {tagline && (
              <p className="font-sans text-sm text-muted-foreground">
                {tagline}
              </p>
            )}
          </div>

          {/* Link groups */}
          {groups.length > 0 && (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 col-span-full lg:col-span-1">
              {groups.map((group) => (
                <div key={group.title}>
                  <h4 className="font-head text-sm uppercase mb-3">
                    {group.title}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom bar */}
        {bottom && (
          <div className="mt-12 pt-6 border-t-2 font-sans text-sm text-muted-foreground">
            {bottom}
          </div>
        )}
      </div>
    </footer>
  );
}
