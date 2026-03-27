"use client";

import NextLink from "next/link";
import { Lock } from "lucide-react";
import { Button, Alert, Divider, Link as UiLink, Text } from "@/components/ui";

export default function AccountLockedPage() {
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
              <div className="border-2 p-4 bg-destructive/10">
                <Lock className="size-8 text-destructive" />
              </div>
            </div>

            <Text variant="h3" className="mb-2">
              Account locked
            </Text>

            <Alert status="error" className="mb-6 text-left">
              <Alert.Title>Security alert</Alert.Title>
              <Alert.Description>
                Your account has been locked due to multiple failed sign-in
                attempts. This is to protect your account from unauthorized
                access.
              </Alert.Description>
            </Alert>

            <Text variant="small" className="mb-6">
              To unlock your account, reset your password or contact our
              support team for assistance.
            </Text>

            <Button variant="secondary" className="w-full mb-3" asChild>
              <NextLink href="/demos/forgot-password">
                Reset your password
              </NextLink>
            </Button>

            <Divider label="or" className="my-4" />

            <Button variant="outline" className="w-full mb-4" asChild>
              <a href="#support">Contact support</a>
            </Button>

            <p className="font-sans text-sm text-muted-foreground">
              <UiLink variant="muted" href="#security">
                Learn more about account security
              </UiLink>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
