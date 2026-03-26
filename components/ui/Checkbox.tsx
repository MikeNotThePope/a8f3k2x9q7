import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, VariantProps } from "class-variance-authority";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const checkboxVariants = cva("border-2 shrink-0 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50", {
  variants: {
    variant: {
      default:
        "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      outline: "",
      solid:
        "data-[state=checked]:bg-foreground data-[state=checked]:text-background",
    },
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface ICheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

export const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  ICheckboxProps
>(({ className, size, variant, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants({ size, variant }), className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center h-full w-full">
      <Check className="h-full w-full" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = "Checkbox";
