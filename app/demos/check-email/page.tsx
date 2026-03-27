"use client";

import { useState } from "react";
import NextLink from "next/link";
import { Mail } from "lucide-react";
import { Button, Alert, Loader, Link as UiLink, Text } from "@/components/ui";

export default function CheckEmailPage() {
  const [resending, setResending] = useState(false);
  const [resent, setResent] = useState(false);

  function handleResend() {
    setResending(true);
    setResent(false);
    setTimeout(() => {
      setResending(false);
      setResent(true);
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
        <div className="w-full max-w-md text-center">
          <div className="border-2 shadow-md bg-card p-8">
            <div className="flex justify-center mb-6">
              <div className="border-2 p-4 bg-accent">
                <Mail className="size-8" />
              </div>
            </div>

            <Text variant="h3" className="mb-2">
              Check your email
            </Text>
            <Text variant="small" className="mb-6">
              We&apos;ve sent a verification link to{" "}
              <strong className="text-foreground">jane@example.com</strong>.
              Click the link in the email to verify your account.
            </Text>

            {resent && (
              <div className="mb-4">
                <Alert status="success">
                  <Alert.Description>
                    Verification email resent successfully.
                  </Alert.Description>
                </Alert>
              </div>
            )}

            <Alert status="info" className="mb-6 text-left">
              <Alert.Description>
                Didn&apos;t receive the email? Check your spam folder or request
                a new one below.
              </Alert.Description>
            </Alert>

            <Button
              variant="secondary"
              className="w-full mb-3"
              onClick={handleResend}
              disabled={resending}
            >
              {resending ? <Loader size="sm" /> : "Resend verification email"}
            </Button>

            <p className="font-sans text-sm text-muted-foreground">
              Wrong email?{" "}
              <UiLink asChild>
                <NextLink href="/demos/sign-up">Go back</NextLink>
              </UiLink>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
