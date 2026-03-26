import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "./Label";

/* ---------------------------------- Root ---------------------------------- */

interface IFormLayoutProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const FormLayoutRoot = React.forwardRef<HTMLFormElement, IFormLayoutProps>(
  ({ className, ...props }, ref) => (
    <form ref={ref} className={cn("space-y-8", className)} {...props} />
  ),
);
FormLayoutRoot.displayName = "FormLayout";

/* -------------------------------- Section --------------------------------- */

interface IFormSectionProps extends React.HTMLAttributes<HTMLFieldSetElement> {
  title?: string;
  description?: string;
}

const FormSection = React.forwardRef<HTMLFieldSetElement, IFormSectionProps>(
  ({ className, title, description, children, ...props }, ref) => (
    <fieldset
      ref={ref}
      className={cn("space-y-6 border-0 p-0 m-0", className)}
      {...props}
    >
      {(title || description) && (
        <div className="space-y-1 border-b-2 border-border pb-4">
          {title && (
            <legend className="font-head text-lg font-normal">
              {title}
            </legend>
          )}
          {description && (
            <p className="font-sans text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      )}
      <div className="space-y-4">{children}</div>
    </fieldset>
  ),
);
FormSection.displayName = "FormLayout.Section";

/* --------------------------------- Field ---------------------------------- */

interface IFormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  htmlFor?: string;
  description?: string;
  error?: string;
  required?: boolean;
}

const FormField = React.forwardRef<HTMLDivElement, IFormFieldProps>(
  (
    { className, label, htmlFor, description, error, required, children, ...props },
    ref,
  ) => (
    <div ref={ref} className={cn("space-y-2", className)} {...props}>
      {label && (
        <Label htmlFor={htmlFor}>
          {label}
          {required && (
            <span className="ml-0.5 text-destructive" aria-hidden="true">
              *
            </span>
          )}
        </Label>
      )}
      {children}
      {description && !error && (
        <p className="font-sans text-xs text-muted-foreground">{description}</p>
      )}
      {error && (
        <p className="font-sans text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  ),
);
FormField.displayName = "FormLayout.Field";

/* --------------------------------- Row ------------------------------------ */

interface IFormRowProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormRow = React.forwardRef<HTMLDivElement, IFormRowProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2", className)}
      {...props}
    />
  ),
);
FormRow.displayName = "FormLayout.Row";

/* -------------------------------- Actions --------------------------------- */

interface IFormActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "left" | "right" | "center" | "between";
}

const alignMap = {
  left: "justify-start",
  right: "justify-end",
  center: "justify-center",
  between: "justify-between",
} as const;

const FormActions = React.forwardRef<HTMLDivElement, IFormActionsProps>(
  ({ className, align = "right", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-3 border-t-2 border-border pt-6",
        alignMap[align],
        className,
      )}
      {...props}
    />
  ),
);
FormActions.displayName = "FormLayout.Actions";

/* -------------------------------- Export ---------------------------------- */

const FormLayout = Object.assign(FormLayoutRoot, {
  Section: FormSection,
  Field: FormField,
  Row: FormRow,
  Actions: FormActions,
});

export { FormLayout };
export type {
  IFormLayoutProps,
  IFormSectionProps,
  IFormFieldProps,
  IFormRowProps,
  IFormActionsProps,
};
