"use client";

import { useState, useEffect } from "react";
import NextLink from "next/link";
import { ShieldAlert } from "lucide-react";
import { Button, Alert, Text } from "@/components/ui";

export default function RateLimitedPage() {
  const [seconds, setSeconds] = useState(120);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

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
                <ShieldAlert className="size-8" />
              </div>
            </div>

            <Text variant="h3" className="mb-2">
              Too many attempts
            </Text>

            <Alert status="warning" className="mb-6 text-left">
              <Alert.Description>
                You&apos;ve made too many requests. Please wait before trying
                again.
              </Alert.Description>
            </Alert>

            {seconds > 0 ? (
              <div className="border-2 bg-muted p-4 mb-6">
                <Text variant="small" className="mb-1">
                  Try again in
                </Text>
                <p className="font-mono text-3xl font-bold tabular-nums">
                  {minutes}:{secs.toString().padStart(2, "0")}
                </p>
              </div>
            ) : (
              <Alert status="success" className="mb-6">
                <Alert.Description>
                  You can now try again.
                </Alert.Description>
              </Alert>
            )}

            <Button
              className="w-full"
              disabled={seconds > 0}
              asChild={seconds <= 0}
            >
              {seconds > 0 ? (
                "Please wait…"
              ) : (
                <NextLink href="/demos/sign-in">Try again</NextLink>
              )}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
