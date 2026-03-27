"use client";

import * as React from "react";
import * as ReactDialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const Dialog = ReactDialog.Root;
const DialogTrigger = ReactDialog.Trigger;

/* ─── Overlay ─── */

const overlayVariants = cva(
  "fixed inset-0 z-50 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
  {
    variants: {
      variant: {
        default: "bg-black/85",
        none: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface IDialogOverlayProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof overlayVariants> {}

const DialogOverlay = React.forwardRef<HTMLDivElement, IDialogOverlayProps>(
  ({ variant = "default", className, ...props }, ref) => (
    <ReactDialog.Overlay
      ref={ref}
      className={cn(overlayVariants({ variant }), className)}
      {...props}
    />
  ),
);
DialogOverlay.displayName = "Dialog.Overlay";

/* ─── Content ─── */

const dialogContentVariants = cva(
  "fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] border-2 border-border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        full: "max-w-[90vw]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface IDialogContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogContentVariants> {
  overlay?: IDialogOverlayProps;
}

const DialogContent = React.forwardRef<HTMLDivElement, IDialogContentProps>(
  ({ children, size = "md", className, overlay, ...props }, ref) => (
    <ReactDialog.Portal>
      <DialogOverlay {...overlay} />
      <ReactDialog.Content
        ref={ref}
        className={cn(dialogContentVariants({ size }), className)}
        {...props}
      >
        <VisuallyHidden>
          <ReactDialog.Title />
        </VisuallyHidden>
        <div className="flex flex-col relative">{children}</div>
      </ReactDialog.Content>
    </ReactDialog.Portal>
  ),
);
DialogContent.displayName = "Dialog.Content";

/* ─── Header ─── */

const DialogHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-between border-b-2 border-border bg-primary text-primary-foreground px-4 min-h-12",
      className,
    )}
    {...props}
  >
    {children}
    <ReactDialog.Close className="cursor-pointer" asChild>
      <X size={18} />
    </ReactDialog.Close>
  </div>
));
DialogHeader.displayName = "Dialog.Header";

/* ─── Body ─── */

const DialogBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4", className)} {...props} />
));
DialogBody.displayName = "Dialog.Body";

/* ─── Description ─── */

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof ReactDialog.Description>
>(({ className, ...props }, ref) => (
  <ReactDialog.Description
    ref={ref}
    className={cn("font-sans text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = "Dialog.Description";

/* ─── Footer ─── */

const DialogFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-end border-t-2 border-border px-4 py-2 gap-2",
      className,
    )}
    {...props}
  />
));
DialogFooter.displayName = "Dialog.Footer";

/* ─── Composite export ─── */

const DialogComponent = Object.assign(Dialog, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  Header: DialogHeader,
  Body: DialogBody,
  Description: DialogDescription,
  Footer: DialogFooter,
});

export { DialogComponent as Dialog, dialogContentVariants };
