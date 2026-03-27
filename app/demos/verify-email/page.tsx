"use client";

import { useState } from "react";
import NextLink from "next/link";
import { Button, Alert, Link as UiLink, Text } from "@/components/ui";

type Status = "success" | "expired" | "invalid";

export default function VerifyEmailPage() {
  const [status, setStatus] = useState<Status>("success");

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
          {/* Status switcher for demo purposes */}
          <div className="flex gap-2 mb-6 justify-center">
            {(["success", "expired", "invalid"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`font-sans text-xs px-3 py-1 border-2 cursor-pointer ${
                  status === s
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="border-2 shadow-md bg-card p-8 text-center">
            {status === "success" && (
              <>
                <Alert status="success" className="mb-6 text-left">
                  <Alert.Title>Email verified</Alert.Title>
                  <Alert.Description>
                    Your email has been verified successfully. You can now sign
                    in to your account.
                  </Alert.Description>
                </Alert>
                <Button className="w-full" asChild>
                  <NextLink href="/demos/onboarding">Continue to setup</NextLink>
                </Button>
              </>
            )}

            {status === "expired" && (
              <>
                <Alert status="warning" className="mb-6 text-left">
                  <Alert.Title>Link expired</Alert.Title>
                  <Alert.Description>
                    This verification link has expired. Please request a new
                    one.
                  </Alert.Description>
                </Alert>
                <Button variant="secondary" className="w-full mb-3" asChild>
                  <NextLink href="/demos/check-email">
                    Request new link
                  </NextLink>
                </Button>
                <p className="font-sans text-sm text-muted-foreground">
                  <UiLink asChild>
                    <NextLink href="/demos/sign-in">Back to sign in</NextLink>
                  </UiLink>
                </p>
              </>
            )}

            {status === "invalid" && (
              <>
                <Alert status="error" className="mb-6 text-left">
                  <Alert.Title>Invalid link</Alert.Title>
                  <Alert.Description>
                    This verification link is invalid or has already been used.
                  </Alert.Description>
                </Alert>
                <Button variant="secondary" className="w-full mb-3" asChild>
                  <NextLink href="/demos/check-email">
                    Request new link
                  </NextLink>
                </Button>
                <p className="font-sans text-sm text-muted-foreground">
                  Need help?{" "}
                  <UiLink href="#support">Contact support</UiLink>
                </p>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
