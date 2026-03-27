"use client";

import NextLink from "next/link";
import { Sparkles } from "lucide-react";
import { Button, Alert, Divider, Link as UiLink, Text } from "@/components/ui";

export default function WelcomePage() {
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
              <div className="border-2 p-4 bg-primary">
                <Sparkles className="size-8" />
              </div>
            </div>

            <Text variant="h2" className="mb-2">
              Welcome aboard!
            </Text>
            <Text variant="body" className="mb-6 text-muted-foreground">
              Your account is all set up and ready to go. Here are a few things
              you can do next.
            </Text>

            <Alert status="success" className="mb-6 text-left">
              <Alert.Title>You&apos;re all set</Alert.Title>
              <Alert.Description>
                Your profile is complete and your account is verified.
              </Alert.Description>
            </Alert>

            <div className="flex flex-col gap-3">
              <Button className="w-full" asChild>
                <NextLink href="/">Go to dashboard</NextLink>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <NextLink href="/">Explore components</NextLink>
              </Button>
            </div>

            <Divider className="my-6" />

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              <UiLink variant="muted" size="sm" asChild>
                <NextLink href="/demos/change-password">Change password</NextLink>
              </UiLink>
              <UiLink variant="muted" size="sm" asChild>
                <NextLink href="/demos/sessions">Sessions</NextLink>
              </UiLink>
              <UiLink variant="muted" size="sm" asChild>
                <NextLink href="/demos/2fa-setup">Set up 2FA</NextLink>
              </UiLink>
              <UiLink variant="muted" size="sm" asChild>
                <NextLink href="/demos/delete-account">Delete account</NextLink>
              </UiLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
