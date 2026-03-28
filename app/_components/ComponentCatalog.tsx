"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import NextLink from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Text } from "@/components/ui/Text";
import { Search, X } from "lucide-react";
import type { ComponentEntry, ComponentGroup, DemoGroup } from "./types";

function ComponentCard({ component }: { component: ComponentEntry }) {
  return (
    <Card variant="interactive" asChild>
      <NextLink href={component.href} className="block p-4 sm:p-6">
        <Text variant="h4" className="mb-2">
          {component.name}
        </Text>
        <Text variant="small">{component.description}</Text>
        {component.builtOn && (
          <span className="font-mono text-xs text-muted-foreground mt-2 inline-block">
            {component.builtOn}
          </span>
        )}
        {component.status !== "Ready" && (
          <Badge
            variant={
              component.status === "In Progress" ? "warning" : "outline"
            }
            size="sm"
            className="mt-2"
          >
            {component.status}
          </Badge>
        )}
      </NextLink>
    </Card>
  );
}

function matchesQuery(c: ComponentEntry, q: string): boolean {
  return (
    c.name.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    (c.builtOn?.toLowerCase().includes(q) ?? false)
  );
}

export function ComponentCatalog({
  componentGroups,
  demoGroup,
}: {
  componentGroups: ComponentGroup[];
  demoGroup: DemoGroup;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: "/" or Cmd+K to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === "/" || (e.metaKey && e.key === "k")) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredGroups = useMemo(() => {
    if (!searchQuery.trim()) return componentGroups;
    const q = searchQuery.toLowerCase();
    return componentGroups
      .map((group) => ({
        ...group,
        components: group.components.filter((c) => matchesQuery(c, q)),
      }))
      .filter((group) => group.components.length > 0);
  }, [searchQuery, componentGroups]);

  const filteredDemoGroup = useMemo(() => {
    if (!searchQuery.trim()) return demoGroup;
    const q = searchQuery.toLowerCase();
    const filteredSubGroups = demoGroup.subGroups
      .map((sg) => ({
        ...sg,
        demos: sg.demos.filter((d) => matchesQuery(d, q)),
      }))
      .filter((sg) => sg.demos.length > 0);
    return { ...demoGroup, subGroups: filteredSubGroups };
  }, [searchQuery, demoGroup]);

  const totalCount = componentGroups.reduce(
    (sum, g) => sum + g.components.length,
    0,
  ) + demoGroup.subGroups.reduce((sum, sg) => sum + sg.demos.length, 0);

  const filteredCount =
    filteredGroups.reduce((sum, g) => sum + g.components.length, 0) +
    filteredDemoGroup.subGroups.reduce((sum, sg) => sum + sg.demos.length, 0);

  const hasResults = filteredCount > 0;
  const isFiltering = searchQuery.trim().length > 0;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-16 w-full">
      {/* Search/filter */}
      <div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <input
            ref={searchRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search components..."
            aria-label="Search components"
            className="w-full border-2 border-border bg-card pl-10 pr-16 py-3 font-sans text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-muted transition-colors cursor-pointer"
              aria-label="Clear search"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          ) : (
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none inline-flex items-center justify-center h-6 w-6 border-2 border-border bg-muted font-mono text-xs text-muted-foreground">
              /
            </kbd>
          )}
        </div>
        {isFiltering && (
          <p className="mt-2 text-sm text-muted-foreground font-sans">
            Showing {filteredCount} of {totalCount} components
          </p>
        )}
      </div>

      {!hasResults && (
        <div className="text-center py-12">
          <Text variant="body" className="text-muted-foreground">
            No components found for &ldquo;{searchQuery}&rdquo;
          </Text>
        </div>
      )}

      {filteredGroups.map((group) => (
        <section key={group.id} id={group.id}>
          <Text variant="h3" className="mb-1">
            {group.title}{" "}
            <span className="text-muted-foreground font-sans text-lg">
              ({group.components.length})
            </span>
          </Text>
          <Text variant="small" className="mb-6">
            {group.description}
          </Text>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.components.map((component) => (
              <ComponentCard key={component.name} component={component} />
            ))}
          </div>
        </section>
      ))}

      {filteredDemoGroup.subGroups.length > 0 && (
        <section id={demoGroup.id}>
          <Text variant="h3" className="mb-1">
            {demoGroup.title}{" "}
            <span className="text-muted-foreground font-sans text-lg">
              (
              {filteredDemoGroup.subGroups.reduce(
                (s, sg) => s + sg.demos.length,
                0,
              )}
              )
            </span>
          </Text>
          <Text variant="small" className="mb-6">
            {demoGroup.description}
          </Text>

          <div className="flex flex-col gap-10">
            {filteredDemoGroup.subGroups.map((subGroup) => (
              <div key={subGroup.label}>
                <Text
                  variant="body"
                  className="font-head text-xs tracking-widest text-muted-foreground uppercase mb-4 border-l-4 border-primary pl-3"
                >
                  {subGroup.label}
                </Text>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {subGroup.demos.map((demo) => (
                    <ComponentCard key={demo.name} component={demo} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
