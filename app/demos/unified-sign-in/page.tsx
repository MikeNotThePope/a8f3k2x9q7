"use client";

import { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { Github, Wand2, KeyRound } from "lucide-react";
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
import { Tabs } from "@/components/ui/Tabs";
import { FormLayout } from "@/components/ui/FormLayout";

export default function UnifiedSignInPage() {
  const router = useRouter();

  // Password form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  // Magic link state
  const [magicEmail, setMagicEmail] = useState("");
  const [magicLoading, setMagicLoading] = useState(false);
  const [magicError, setMagicError] = useState("");
  const [magicSent, setMagicSent] = useState(false);

  function handlePasswordSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPasswordError("");

    if (!email) {
      setPasswordError("Email is required.");
      return;
    }
    if (!password) {
      setPasswordError("Password is required.");
      return;
    }

    setPasswordLoading(true);
    setTimeout(() => {
      setPasswordLoading(false);
      if (email === "wrong@example.com") {
        setPasswordError("Invalid email or password. Please try again.");
      } else {
        router.push(
          email === "2fa@example.com"
            ? "/demos/2fa-challenge"
            : "/demos/welcome"
        );
      }
    }, 1500);
  }

  function handleMagicSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMagicError("");

    if (!magicEmail.trim()) {
      setMagicError("Email is required.");
      return;
    }

    setMagicLoading(true);
    setTimeout(() => {
      setMagicLoading(false);
      setMagicSent(true);
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
              Choose your preferred sign-in method.
            </Text>
          </div>

          <div className="border-2 shadow-md bg-card p-6 sm:p-8">
            <Tabs defaultValue="password">
              <Tabs.List>
                <Tabs.Trigger value="password">
                  <KeyRound className="size-4 mr-1.5 inline-block" />
                  Password
                </Tabs.Trigger>
                <Tabs.Trigger value="magic">
                  <Wand2 className="size-4 mr-1.5 inline-block" />
                  Magic Link
                </Tabs.Trigger>
              </Tabs.List>

              {/* ─── Password Tab ─── */}
              <Tabs.Content value="password" className="pt-6">
                {passwordError && (
                  <div className="mb-6">
                    <Alert status="error">
                      <Alert.Description>{passwordError}</Alert.Description>
                    </Alert>
                  </div>
                )}

                <FormLayout onSubmit={handlePasswordSubmit}>
                  <FormLayout.Field label="Email" htmlFor="pw-email" required>
                    <Input
                      id="pw-email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-invalid={!!passwordError && !email}
                    />
                  </FormLayout.Field>

                  <FormLayout.Field
                    label="Password"
                    htmlFor="pw-password"
                    required
                  >
                    <Input
                      id="pw-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      aria-invalid={!!passwordError && !password}
                    />
                    <div className="text-right">
                      <UiLink variant="muted" size="sm" asChild>
                        <NextLink href="/demos/forgot-password">
                          Forgot password?
                        </NextLink>
                      </UiLink>
                    </div>
                  </FormLayout.Field>

                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="pw-remember"
                      checked={rememberMe}
                      onCheckedChange={(v) => setRememberMe(v === true)}
                    />
                    <label
                      htmlFor="pw-remember"
                      className="font-sans text-sm cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>

                  <FormLayout.Actions align="left">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={passwordLoading}
                    >
                      {passwordLoading ? (
                        <Loader size="sm" variant="secondary" />
                      ) : (
                        "Sign in"
                      )}
                    </Button>
                  </FormLayout.Actions>
                </FormLayout>
              </Tabs.Content>

              {/* ─── Magic Link Tab ─── */}
              <Tabs.Content value="magic" className="pt-6">
                {magicSent ? (
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
                        <strong>{magicEmail}</strong>. Click the link in the
                        email to sign in — no password required.
                      </Alert.Description>
                    </Alert>

                    <Alert status="info" className="mb-6 text-left">
                      <Alert.Description>
                        The link expires in 15 minutes. Check your spam folder
                        if you don&apos;t see the email.
                      </Alert.Description>
                    </Alert>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setMagicSent(false)}
                    >
                      Use a different email
                    </Button>
                  </div>
                ) : (
                  <>
                    {magicError && (
                      <div className="mb-6">
                        <Alert status="error">
                          <Alert.Description>{magicError}</Alert.Description>
                        </Alert>
                      </div>
                    )}

                    <FormLayout onSubmit={handleMagicSubmit}>
                      <FormLayout.Field
                        label="Email"
                        htmlFor="magic-email"
                        required
                        description="We'll send you a link to sign in instantly."
                      >
                        <Input
                          id="magic-email"
                          type="email"
                          placeholder="you@example.com"
                          value={magicEmail}
                          onChange={(e) => setMagicEmail(e.target.value)}
                          aria-invalid={!!magicError}
                        />
                      </FormLayout.Field>

                      <FormLayout.Actions align="left">
                        <Button
                          type="submit"
                          className="w-full"
                          disabled={magicLoading}
                        >
                          {magicLoading ? (
                            <Loader size="sm" variant="secondary" />
                          ) : (
                            "Send magic link"
                          )}
                        </Button>
                      </FormLayout.Actions>
                    </FormLayout>
                  </>
                )}
              </Tabs.Content>
            </Tabs>

            <Divider label="or continue with" className="my-6" />

            <Button variant="outline" className="w-full gap-2">
              <Github className="size-4" />
              GitHub
            </Button>
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
