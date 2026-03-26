import * as React from "react";
import * as RadioPrimitive from "@radix-ui/react-radio-group";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const radioVariants = cva("border-2 border-border shrink-0 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50", {
  variants: {
    variant: {
      default: "",
      outline: "",
      solid: "",
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

const radioIndicatorVariants = cva("flex", {
  variants: {
    variant: {
      default: "bg-primary border-2 border-border",
      outline: "border-2 border-border",
      solid: "bg-border",
    },
    size: {
      sm: "h-2 w-2",
      md: "h-2.5 w-2.5",
      lg: "h-3.5 w-3.5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

const RadioGroupRoot = React.forwardRef<
  React.ComponentRef<typeof RadioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioPrimitive.Root
    ref={ref}
    className={cn("grid gap-2", className)}
    {...props}
  />
));
RadioGroupRoot.displayName = "RadioGroup";

export interface IRadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioPrimitive.Item>,
    VariantProps<typeof radioVariants> {}

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioPrimitive.Item>,
  IRadioGroupItemProps
>(({ className, size, variant, children, ...props }, ref) => (
  <RadioPrimitive.Item
    ref={ref}
    className={cn(radioVariants({ size, variant }), className)}
    {...props}
  >
    <RadioPrimitive.Indicator className="flex justify-center items-center">
      <span className={radioIndicatorVariants({ size, variant })} />
    </RadioPrimitive.Indicator>
    {children}
  </RadioPrimitive.Item>
));
RadioGroupItem.displayName = "RadioGroup.Item";

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Item: RadioGroupItem,
});
