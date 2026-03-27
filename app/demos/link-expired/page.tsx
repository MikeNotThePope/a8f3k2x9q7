"use client";

import NextLink from "next/link";
import { Clock } from "lucide-react";
import { Button, Alert, Link as UiLink, Text } from "@/components/ui";

export default function LinkExpiredPage() {
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
              <div className="border-2 p-4 bg-muted">
                <Clock className="size-8" />
              </div>
            </div>

            <Text variant="h3" className="mb-2">
              Link expired
            </Text>

            <Alert status="warning" className="mb-6 text-left">
              <Alert.Description>
                This link has expired for security reasons. Please request a
                new one to continue.
              </Alert.Description>
            </Alert>

            <div className="flex flex-col gap-3 mb-3">
              <Button variant="secondary" className="w-full" asChild>
                <NextLink href="/demos/forgot-password">
                  Request password reset
                </NextLink>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <NextLink href="/demos/magic-link">
                  Request magic link
                </NextLink>
              </Button>
            </div>

            <p className="font-sans text-sm text-muted-foreground">
              <UiLink asChild>
                <NextLink href="/demos/sign-in">Back to sign in</NextLink>
              </UiLink>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
