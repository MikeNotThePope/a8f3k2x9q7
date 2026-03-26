"use client";

import { cn } from "@/lib/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import React, {
  ComponentPropsWithoutRef,
  createContext,
  useContext,
  useState,
} from "react";

// Context to share value control between Tabs root and MoreItem
const TabsValueContext = createContext<{
  setValue: (value: string) => void;
}>({ setValue: () => {} });

interface TabsProps
  extends Omit<
    ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
    "value" | "onValueChange"
  > {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

function TabsRoot({
  className,
  defaultValue,
  value: controlledValue,
  onValueChange,
  ...props
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const setValue = (v: string) => {
    if (!isControlled) setInternalValue(v);
    onValueChange?.(v);
  };

  return (
    <TabsValueContext.Provider value={{ setValue }}>
      <TabsPrimitive.Root
        className={cn("flex flex-col", className)}
        value={currentValue}
        onValueChange={setValue}
        {...props}
      />
    </TabsValueContext.Provider>
  );
}
TabsRoot.displayName = "Tabs";

const TabsList = React.forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "flex items-center gap-0 border-b-2 bg-background",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "font-head text-sm px-4 py-2 cursor-pointer transition-colors",
      "text-muted-foreground hover:text-foreground",
      "border-b-2 border-transparent -mb-[2px]",
      "data-[state=active]:text-foreground data-[state=active]:border-primary",
      "outline-hidden focus-visible:ring-2 focus-visible:ring-primary",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("pt-4 outline-hidden", className)}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";

interface TabsMoreProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
}

function TabsMore({ children, className, label = "More" }: TabsMoreProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={cn(
          "font-head text-sm px-4 py-2 cursor-pointer transition-colors",
          "text-muted-foreground hover:text-foreground",
          "border-b-2 border-transparent -mb-[2px]",
          "outline-hidden focus-visible:ring-2 focus-visible:ring-primary",
          "flex items-center gap-1",
          className,
        )}
      >
        {label}
        <MoreHorizontal className="size-4" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="bottom"
          align="start"
          className="bg-card border-2 shadow-md absolute top-2 min-w-20 z-50"
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
TabsMore.displayName = "TabsMore";

interface TabsMoreItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const TabsMoreItem = React.forwardRef<HTMLDivElement, TabsMoreItemProps>(
  ({ value, children, className, ...props }, ref) => {
    const { setValue } = useContext(TabsValueContext);

    return (
      <DropdownMenu.Item
        ref={ref}
        className={cn(
          "relative text-card-foreground flex cursor-default select-none items-center px-3 py-1.5 text-sm font-head outline-hidden transition-colors hover:bg-primary focus:bg-primary",
          className,
        )}
        onSelect={() => setValue(value)}
        {...props}
      >
        {children}
      </DropdownMenu.Item>
    );
  },
);
TabsMoreItem.displayName = "TabsMoreItem";

const TabsComponent = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
  More: TabsMore,
  MoreItem: TabsMoreItem,
});

export { TabsComponent as Tabs };
