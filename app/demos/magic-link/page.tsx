"use client";

import { useState } from "react";
import NextLink from "next/link";
import { Wand2 } from "lucide-react";
import {
  Button,
  Input,
  Alert,
  Divider,
  Loader,
  Link as UiLink,
  Text,
} from "@/components/ui";
import { FormLayout } from "@/components/ui/FormLayout";

export default function MagicLinkPage() {
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
              Sign in with magic link
            </Text>
            <Text variant="small">
              No password needed. We&apos;ll email you a sign-in link.
            </Text>
          </div>

          <div className="border-2 shadow-md bg-card p-6 sm:p-8">
            {submitted ? (
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="border-2 p-4 bg-accent">
                    <Wand2 className="size-8" />
                  </div>
                </div>

                <Alert status="success" className="mb-6 text-left">
                  <Alert.Title>Magic link sent</Alert.Title>
                  <Alert.Description>
                    We&apos;ve sent a sign-in link to{" "}
                    <strong>{email}</strong>. Click the link in the email to
                    sign in — no password required.
                  </Alert.Description>
                </Alert>

                <Alert status="info" className="mb-6 text-left">
                  <Alert.Description>
                    The link expires in 15 minutes. Check your spam folder if
                    you don&apos;t see the email.
                  </Alert.Description>
                </Alert>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                >
                  Use a different email
                </Button>
              </div>
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
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader size="sm" variant="secondary" />
                      ) : (
                        "Send magic link"
                      )}
                    </Button>
                  </FormLayout.Actions>
                </FormLayout>

                <Divider label="or" className="my-6" />

                <Button variant="outline" className="w-full" asChild>
                  <NextLink href="/demos/sign-in">
                    Sign in with password
                  </NextLink>
                </Button>
              </>
            )}
          </div>

          {!submitted && (
            <p className="text-center font-sans text-sm text-muted-foreground mt-6">
              Don&apos;t have an account?{" "}
              <UiLink asChild>
                <NextLink href="/demos/sign-up">Sign up</NextLink>
              </UiLink>
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
