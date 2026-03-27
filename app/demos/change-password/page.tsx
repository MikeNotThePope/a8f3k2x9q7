"use client";

import { useState } from "react";
import NextLink from "next/link";
import { Button, Input, Alert, Loader, Text } from "@/components/ui";
import { FormLayout } from "@/components/ui/FormLayout";

export default function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  function validate(): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!currentPassword) errs.currentPassword = "Current password is required.";
    if (!newPassword) errs.newPassword = "New password is required.";
    else if (newPassword.length < 8)
      errs.newPassword = "Password must be at least 8 characters.";
    else if (newPassword === currentPassword)
      errs.newPassword = "New password must be different from current password.";
    if (newPassword && confirmPassword !== newPassword)
      errs.confirmPassword = "Passwords do not match.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(false);
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }, 1500);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <NextLink
            href="/"
            className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 inline-block"
          >
            &larr; All Components
          </NextLink>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Text variant="h2" className="mb-2">
              Change password
            </Text>
            <Text variant="small">
              Update the password for your account.
            </Text>
          </div>

          <div className="border-2 shadow-md bg-card p-6 sm:p-8">
            {success && (
              <div className="mb-6">
                <Alert status="success">
                  <Alert.Title>Password changed</Alert.Title>
                  <Alert.Description>
                    Your password has been updated successfully.
                  </Alert.Description>
                </Alert>
              </div>
            )}

            <FormLayout onSubmit={handleSubmit}>
              <FormLayout.Field
                label="Current password"
                htmlFor="currentPassword"
                required
                error={errors.currentPassword}
              >
                <Input
                  id="currentPassword"
                  type="password"
                  placeholder="••••••••"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  aria-invalid={!!errors.currentPassword}
                />
              </FormLayout.Field>

              <FormLayout.Field
                label="New password"
                htmlFor="newPassword"
                required
                error={errors.newPassword}
                description={
                  !errors.newPassword ? "At least 8 characters." : undefined
                }
              >
                <Input
                  id="newPassword"
                  type="password"
                  placeholder="••••••••"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  aria-invalid={!!errors.newPassword}
                />
              </FormLayout.Field>

              <FormLayout.Field
                label="Confirm new password"
                htmlFor="confirmNewPassword"
                required
                error={errors.confirmPassword}
              >
                <Input
                  id="confirmNewPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  aria-invalid={!!errors.confirmPassword}
                />
              </FormLayout.Field>

              <FormLayout.Actions align="left">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <Loader size="sm" variant="secondary" />
                  ) : (
                    "Update password"
                  )}
                </Button>
              </FormLayout.Actions>
            </FormLayout>
          </div>
        </div>
      </main>
    </div>
  );
}
