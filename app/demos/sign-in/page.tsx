"use client";

import { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { Github, Wand2 } from "lucide-react";
import {
  Button,
  Input,
  Checkbox,
  Alert,
  Divider,
  Loader,
  Link as UiLink,
  Text,
} from "@/components/ui";
import { FormLayout } from "@/components/ui/FormLayout";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!password) {
      setError("Password is required.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Demo: "wrong@example.com" triggers error, anything else succeeds
      if (email === "wrong@example.com") {
        setError("Invalid email or password. Please try again.");
      } else {
        // Simulate 2FA challenge for "2fa@example.com", otherwise go to welcome
        router.push(
          email === "2fa@example.com"
            ? "/demos/2fa-challenge"
            : "/demos/welcome"
        );
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
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Text variant="h2" className="mb-2">
              Sign in
            </Text>
            <Text variant="small">
              Enter your credentials to access your account.
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
              <FormLayout.Field label="Email" htmlFor="email" required>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!error && !email}
                />
              </FormLayout.Field>

              <FormLayout.Field label="Password" htmlFor="password" required>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-invalid={!!error && !password}
                />
                <div className="text-right">
                  <UiLink variant="muted" size="sm" asChild>
                    <NextLink href="/demos/forgot-password">Forgot password?</NextLink>
                  </UiLink>
                </div>
              </FormLayout.Field>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(v) => setRememberMe(v === true)}
                />
                <label htmlFor="remember" className="font-sans text-sm cursor-pointer">
                  Remember me
                </label>
              </div>

              <FormLayout.Actions align="left">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? <Loader size="sm" variant="secondary" /> : "Sign in"}
                </Button>
              </FormLayout.Actions>
            </FormLayout>

            <Divider label="or continue with" className="my-6" />

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 gap-2">
                <Github className="size-4" />
                GitHub
              </Button>
              <Button variant="outline" className="flex-1 gap-2" asChild>
                <NextLink href="/demos/magic-link">
                  <Wand2 className="size-4" />
                  Magic Link
                </NextLink>
              </Button>
            </div>
          </div>

          <p className="text-center font-sans text-sm text-muted-foreground mt-6">
            Don&apos;t have an account?{" "}
            <UiLink asChild>
              <NextLink href="/demos/sign-up">Sign up</NextLink>
            </UiLink>
          </p>
        </div>
      </main>
    </div>
  );
}
