"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "@/components/ui/Command";
import type { ComponentGroup, DemoGroup } from "./types";

export function CommandPalette({
  componentGroups,
  demoGroup,
}: {
  componentGroups: ComponentGroup[];
  demoGroup: DemoGroup;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigate = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router],
  );

  return (
    <Command.Dialog open={open} onOpenChange={setOpen}>
      <Command.Input placeholder="Search components, demos..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        {componentGroups.map((group) => (
          <Command.Group key={group.id} heading={group.title}>
            {group.components.map((c) => (
              <Command.Item
                key={c.name}
                value={`${c.name} ${c.description}`}
                onSelect={() => navigate(c.href)}
              >
                <span className="font-head">{c.name}</span>
                <span className="text-muted-foreground text-xs ml-2 truncate">
                  {c.description}
                </span>
              </Command.Item>
            ))}
          </Command.Group>
        ))}
        <Command.Group heading="Demos">
          {demoGroup.subGroups.flatMap((sg) =>
            sg.demos.map((d) => (
              <Command.Item
                key={d.name}
                value={`${d.name} ${d.description}`}
                onSelect={() => navigate(d.href)}
              >
                <span className="font-head">{d.name}</span>
                <span className="text-muted-foreground text-xs ml-2 truncate">
                  {d.description}
                </span>
              </Command.Item>
            )),
          )}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
