"use client";

import { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { Button, Input, Alert, Loader, Link as UiLink, Text } from "@/components/ui";
import { FormLayout } from "@/components/ui/FormLayout";

export default function TwoFactorChallengePage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!code.trim() || code.length < 6) {
      setError("Enter a valid 6-digit code.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Demo: "000000" triggers error, anything else succeeds
      if (code === "000000") {
        setError("Invalid code. Please try again.");
      } else {
        router.push("/demos/welcome");
      }
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
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <Text variant="h2" className="mb-2">
              Two-factor authentication
            </Text>
            <Text variant="small">
              Enter the 6-digit code from your authenticator app.
            </Text>
          </div>

          <div className="border-2 shadow-md bg-card p-6 sm:p-8">
            {error && (
              <div className="mb-6">
                <Alert status="error">
                  <Alert.Description>{error}</Alert.Description>
                </Alert>
              </div>
            )}

            <FormLayout onSubmit={handleSubmit}>
              <FormLayout.Field label="Authentication code" htmlFor="totp" required>
                <Input
                  id="totp"
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="000000"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                  aria-invalid={!!error}
                  autoFocus
                  className="font-mono tracking-[0.5em] text-center text-lg"
                />
              </FormLayout.Field>

              <FormLayout.Actions align="left">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <Loader size="sm" variant="secondary" />
                  ) : (
                    "Verify"
                  )}
                </Button>
              </FormLayout.Actions>
            </FormLayout>

            <div className="mt-6 flex flex-col items-center gap-2 font-sans text-sm text-muted-foreground">
              <UiLink variant="muted" asChild>
                <NextLink href="/demos/2fa-sms">
                  Use SMS instead
                </NextLink>
              </UiLink>
              <UiLink variant="muted" asChild>
                <NextLink href="/demos/2fa-recovery">
                  Use a recovery code
                </NextLink>
              </UiLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
