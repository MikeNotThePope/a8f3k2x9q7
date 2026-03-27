"use client";

import { useState } from "react";
import NextLink from "next/link";
import { Button, Input, Alert, Loader, Link as UiLink, Text } from "@/components/ui";
import { FormLayout } from "@/components/ui/FormLayout";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  function validate(): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!password) errs.password = "Password is required.";
    else if (password.length < 8)
      errs.password = "Password must be at least 8 characters.";
    if (password && confirmPassword !== password)
      errs.confirmPassword = "Passwords do not match.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
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
              Set new password
            </Text>
            <Text variant="small">
              Choose a strong password for your account.
            </Text>
          </div>

          <div className="border-2 shadow-md bg-card p-6 sm:p-8">
            {success ? (
              <>
                <Alert status="success" className="mb-6">
                  <Alert.Title>Password updated</Alert.Title>
                  <Alert.Description>
                    Your password has been reset successfully. You can now sign
                    in with your new password.
                  </Alert.Description>
                </Alert>
                <Button className="w-full" asChild>
                  <NextLink href="/demos/sign-in">Continue to sign in</NextLink>
                </Button>
              </>
            ) : (
              <FormLayout onSubmit={handleSubmit}>
                <FormLayout.Field
                  label="New password"
                  htmlFor="password"
                  required
                  error={errors.password}
                  description={
                    !errors.password ? "At least 8 characters." : undefined
                  }
                >
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-invalid={!!errors.password}
                  />
                </FormLayout.Field>

                <FormLayout.Field
                  label="Confirm password"
                  htmlFor="confirmPassword"
                  required
                  error={errors.confirmPassword}
                >
                  <Input
                    id="confirmPassword"
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
                      "Reset password"
                    )}
                  </Button>
                </FormLayout.Actions>
              </FormLayout>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
