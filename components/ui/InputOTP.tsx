"use client";

import * as React from "react";
import { OTPInput, OTPInputContext, type OTPInputProps } from "input-otp";
import { Dot } from "lucide-react";
import { cn } from "@/lib/utils";

export type IInputOTPProps = OTPInputProps & {
  containerClassName?: string;
};

const InputOTPRoot = React.forwardRef<HTMLInputElement, IInputOTPProps>(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName,
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  ),
);
InputOTPRoot.displayName = "InputOTP";

export interface IInputOTPGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const InputOTPGroup = React.forwardRef<HTMLDivElement, IInputOTPGroupProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center", className)}
      {...props}
    />
  ),
);
InputOTPGroup.displayName = "InputOTP.Group";

export interface IInputOTPSlotProps
  extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
}

const InputOTPSlot = React.forwardRef<HTMLDivElement, IInputOTPSlotProps>(
  ({ index, className, ...props }, ref) => {
    const inputOTPContext = React.useContext(OTPInputContext);
    const { char, hasFakeCaret, isActive } =
      inputOTPContext?.slots[index] ?? {};

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex size-10 items-center justify-center border-y-2 border-r-2 border-border bg-background font-sans text-sm text-foreground shadow-md transition-all first:border-l-2",
          isActive && "z-10 ring-2 ring-primary",
          className,
        )}
        {...props}
      >
        {char}
        {hasFakeCaret && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
          </div>
        )}
      </div>
    );
  },
);
InputOTPSlot.displayName = "InputOTP.Slot";

export interface IInputOTPSeparatorProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  IInputOTPSeparatorProps
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot className="size-4" />
  </div>
));
InputOTPSeparator.displayName = "InputOTP.Separator";

const InputOTPComponent = Object.assign(InputOTPRoot, {
  Group: InputOTPGroup,
  Slot: InputOTPSlot,
  Separator: InputOTPSeparator,
});

export { InputOTPComponent as InputOTP };
