"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Command } from "./Command";
import { Popover } from "./Popover";

/* ─── Types ─── */

export interface IComboboxItem {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface IComboboxProps {
  items: IComboboxItem[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  className?: string;
  disabled?: boolean;
}

/* ─── Combobox ─── */

const ComboboxRoot = React.forwardRef<HTMLButtonElement, IComboboxProps>(
  (
    {
      items,
      value: controlledValue,
      onValueChange,
      placeholder = "Select...",
      searchPlaceholder = "Search...",
      emptyText = "No results found.",
      className,
      disabled = false,
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState("");

    const value = controlledValue ?? internalValue;
    const setValue = React.useCallback(
      (newValue: string) => {
        if (onValueChange) {
          onValueChange(newValue);
        } else {
          setInternalValue(newValue);
        }
      },
      [onValueChange],
    );

    const selectedItem = items.find((item) => item.value === value);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className={cn("w-[200px] justify-between", className)}
          >
            {selectedItem ? selectedItem.label : placeholder}
            <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        </Popover.Trigger>
        <Popover.Content className="w-[200px] border-0! p-0">
          <Command>
            <Command.Input placeholder={searchPlaceholder} />
            <Command.List>
              <Command.Empty>{emptyText}</Command.Empty>
              <Command.Group>
                {items.map((item) => (
                  <Command.Item
                    key={item.value}
                    value={item.value}
                    disabled={item.disabled}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 size-4",
                        value === item.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {item.label}
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.List>
          </Command>
        </Popover.Content>
      </Popover>
    );
  },
);
ComboboxRoot.displayName = "Combobox";

/* ─── Multi-Select Combobox ─── */

export interface IComboboxMultiProps {
  items: IComboboxItem[];
  values?: string[];
  onValuesChange?: (values: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  className?: string;
  disabled?: boolean;
}

const ComboboxMulti = React.forwardRef<HTMLButtonElement, IComboboxMultiProps>(
  (
    {
      items,
      values: controlledValues,
      onValuesChange,
      placeholder = "Select...",
      searchPlaceholder = "Search...",
      emptyText = "No results found.",
      className,
      disabled = false,
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const [internalValues, setInternalValues] = React.useState<string[]>([]);

    const values = controlledValues ?? internalValues;
    const setValues = React.useCallback(
      (newValues: string[]) => {
        if (onValuesChange) {
          onValuesChange(newValues);
        } else {
          setInternalValues(newValues);
        }
      },
      [onValuesChange],
    );

    const selectedLabels = items
      .filter((item) => values.includes(item.value))
      .map((item) => item.label);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className={cn("w-[200px] justify-between", className)}
          >
            <span className="truncate">
              {selectedLabels.length > 0
                ? selectedLabels.join(", ")
                : placeholder}
            </span>
            <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        </Popover.Trigger>
        <Popover.Content className="w-[200px] border-0! p-0">
          <Command>
            <Command.Input placeholder={searchPlaceholder} />
            <Command.List>
              <Command.Empty>{emptyText}</Command.Empty>
              <Command.Group>
                {items.map((item) => (
                  <Command.Item
                    key={item.value}
                    value={item.value}
                    disabled={item.disabled}
                    onSelect={(currentValue) => {
                      const newValues = values.includes(currentValue)
                        ? values.filter((v) => v !== currentValue)
                        : [...values, currentValue];
                      setValues(newValues);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 size-4",
                        values.includes(item.value)
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                    {item.label}
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.List>
          </Command>
        </Popover.Content>
      </Popover>
    );
  },
);
ComboboxMulti.displayName = "Combobox.Multi";

/* ─── Composite export ─── */

const ComboboxComponent = Object.assign(ComboboxRoot, {
  Multi: ComboboxMulti,
});

export { ComboboxComponent as Combobox };
