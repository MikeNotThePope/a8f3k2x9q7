"use client";

import { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { Button, Input, Alert, Loader, Link as UiLink, Text } from "@/components/ui";
import { FormLayout } from "@/components/ui/FormLayout";

export default function TwoFactorRecoveryPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!code.trim()) {
      setError("Recovery code is required.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (code === "invalid") {
        setError("Invalid recovery code. Please try again.");
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
              Recovery code
            </Text>
            <Text variant="small">
              Enter one of the recovery codes you saved when setting up 2FA.
            </Text>
          </div>

          <div className="border-2 shadow-md bg-card p-6 sm:p-8">
            <Alert status="warning" className="mb-6">
              <Alert.Description>
                Each recovery code can only be used once. After using this code,
                it will be invalidated.
              </Alert.Description>
            </Alert>

            {error && (
              <div className="mb-6">
                <Alert status="error">
                  <Alert.Description>{error}</Alert.Description>
                </Alert>
              </div>
            )}

            <FormLayout onSubmit={handleSubmit}>
              <FormLayout.Field label="Recovery code" htmlFor="recovery" required>
                <Input
                  id="recovery"
                  type="text"
                  placeholder="a1b2c3d4"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  aria-invalid={!!error}
                  autoFocus
                  className="font-mono tracking-widest"
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
                <NextLink href="/demos/2fa-challenge">
                  Use authenticator app
                </NextLink>
              </UiLink>
              <UiLink variant="muted" href="#support">
                Contact support
              </UiLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
