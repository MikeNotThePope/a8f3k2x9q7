"use client";

import { useState, useEffect, useCallback } from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { Button, Input, Alert, Loader, Link as UiLink, Text } from "@/components/ui";
import { FormLayout } from "@/components/ui/FormLayout";

export default function TwoFactorSmsPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [cooldown, setCooldown] = useState(0);
  const [resent, setResent] = useState(false);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleResend = useCallback(() => {
    setCooldown(30);
    setResent(true);
    setError("");
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setResent(false);

    if (!code.trim() || code.length < 6) {
      setError("Enter a valid 6-digit code.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
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
              SMS verification
            </Text>
            <Text variant="small">
              We sent a code to <strong className="text-foreground">•••-•••-4242</strong>.
            </Text>
          </div>

          <div className="border-2 shadow-md bg-card p-6 sm:p-8">
            {resent && !error && (
              <div className="mb-6">
                <Alert status="success">
                  <Alert.Description>Code resent successfully.</Alert.Description>
                </Alert>
              </div>
            )}

            {error && (
              <div className="mb-6">
                <Alert status="error">
                  <Alert.Description>{error}</Alert.Description>
                </Alert>
              </div>
            )}

            <FormLayout onSubmit={handleSubmit}>
              <FormLayout.Field label="Verification code" htmlFor="sms-code" required>
                <Input
                  id="sms-code"
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

            <div className="mt-6 text-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleResend}
                disabled={cooldown > 0}
              >
                {cooldown > 0
                  ? `Resend code (${cooldown}s)`
                  : "Resend code"}
              </Button>
            </div>

            <div className="mt-4 flex flex-col items-center gap-2 font-sans text-sm text-muted-foreground">
              <UiLink variant="muted" asChild>
                <NextLink href="/demos/2fa-challenge">
                  Use authenticator app instead
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
