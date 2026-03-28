"use client";

import NextLink from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Drawer } from "@/components/ui/Drawer";
import { AlignJustify, X } from "lucide-react";

const navLinks = [
  { label: "Components", href: "#primitives" },
  { label: "Demos", href: "#demos" },
  { label: "Tokens", href: "/tokens" },
];

export function SiteNav() {
  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-40 bg-background text-foreground border-b-[4px] border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <NextLink href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary flex items-center justify-center border-2 border-border">
            <span className="font-head text-primary-foreground text-sm">S</span>
          </div>
          <span className="font-head text-lg">Substrate UI</span>
        </NextLink>
        <div className="flex items-center gap-3">
          {navLinks.map((link) => (
            <NextLink
              key={link.label}
              href={link.href}
              className="hidden sm:inline-block font-head text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </NextLink>
          ))}
          <a
            href="https://github.com/MikeNotThePope/substrate-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-background text-foreground border-2 border-border px-3 py-1 font-head text-sm shadow-sm hover:shadow-none transition-shadow"
            aria-label="View on GitHub"
          >
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <ThemeToggle variant="outline" />

          {/* Mobile menu button */}
          <Drawer direction="right">
            <Drawer.Trigger asChild>
              <button
                className="sm:hidden inline-flex items-center justify-center w-9 h-9 border-2 border-border bg-background hover:bg-muted transition-colors cursor-pointer"
                aria-label="Open menu"
              >
                <AlignJustify className="h-4 w-4" />
              </button>
            </Drawer.Trigger>
            <Drawer.Content>
              <Drawer.Header className="border-b-2">
                <div className="flex items-center justify-between">
                  <Drawer.Title>Menu</Drawer.Title>
                  <Drawer.Close asChild>
                    <button
                      className="inline-flex items-center justify-center w-9 h-9 border-2 border-border bg-background hover:bg-muted transition-colors cursor-pointer"
                      aria-label="Close menu"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Drawer.Close>
                </div>
              </Drawer.Header>
              <div className="flex flex-col p-4 gap-1">
                {navLinks.map((link) => (
                  <Drawer.Close key={link.label} asChild>
                    <NextLink
                      href={link.href}
                      className="font-head text-base py-3 px-4 hover:bg-muted transition-colors"
                    >
                      {link.label}
                    </NextLink>
                  </Drawer.Close>
                ))}
                <Drawer.Close asChild>
                  <a
                    href="https://github.com/MikeNotThePope/substrate-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-head text-base py-3 px-4 hover:bg-muted transition-colors"
                  >
                    GitHub
                  </a>
                </Drawer.Close>
              </div>
            </Drawer.Content>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
