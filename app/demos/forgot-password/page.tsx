"use client";

import { useState } from "react";
import NextLink from "next/link";
import { Button, Input, Alert, Loader, Link as UiLink, Text } from "@/components/ui";
import { FormLayout } from "@/components/ui/FormLayout";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
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
              Reset your password
            </Text>
            <Text variant="small">
              Enter your email and we&apos;ll send you a reset link.
            </Text>
          </div>

          <div className="border-2 shadow-md bg-card p-6 sm:p-8">
            {submitted ? (
              <>
                <Alert status="success" className="mb-6">
                  <Alert.Title>Check your email</Alert.Title>
                  <Alert.Description>
                    If an account exists for <strong>{email}</strong>, you&apos;ll
                    receive a password reset link shortly.
                  </Alert.Description>
                </Alert>
                <p className="font-sans text-sm text-muted-foreground text-center">
                  <UiLink asChild>
                    <NextLink href="/demos/sign-in">Back to sign in</NextLink>
                  </UiLink>
                </p>
              </>
            ) : (
              <>
                {error && (
                  <div className="mb-6">
                    <Alert status="error">
                      <Alert.Description>{error}</Alert.Description>
                    </Alert>
                  </div>
                )}

                <FormLayout onSubmit={handleSubmit}>
                  <FormLayout.Field label="Email" htmlFor="email" required>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-invalid={!!error}
                    />
                  </FormLayout.Field>

                  <FormLayout.Actions align="left">
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <Loader size="sm" variant="secondary" />
                      ) : (
                        "Send reset link"
                      )}
                    </Button>
                  </FormLayout.Actions>
                </FormLayout>

                <p className="font-sans text-sm text-muted-foreground text-center mt-6">
                  <UiLink asChild>
                    <NextLink href="/demos/sign-in">Back to sign in</NextLink>
                  </UiLink>
                </p>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
