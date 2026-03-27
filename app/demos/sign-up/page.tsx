"use client";

import { useState } from "react";
import NextLink from "next/link";
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

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  function validate(): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!firstName.trim()) errs.firstName = "First name is required.";
    if (!lastName.trim()) errs.lastName = "Last name is required.";
    if (!email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Enter a valid email address.";
    if (!password) errs.password = "Password is required.";
    else if (password.length < 8)
      errs.password = "Password must be at least 8 characters.";
    if (password && confirmPassword !== password)
      errs.confirmPassword = "Passwords do not match.";
    if (!agreedToTerms) errs.terms = "You must agree to the terms.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
    }, 1500);
  }

  if (success) {
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
              <Alert status="success">
                <Alert.Title>Account created</Alert.Title>
                <Alert.Description>
                  We&apos;ve sent a verification email to <strong>{email}</strong>.
                  Check your inbox to get started.
                </Alert.Description>
              </Alert>
              <Button className="w-full mt-6" asChild>
                <NextLink href="/demos/check-email">Check your email</NextLink>
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
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
              Create an account
            </Text>
            <Text variant="small">
              Fill in your details to get started.
            </Text>
          </div>

          <div className="border-2 shadow-md bg-card p-6 sm:p-8">
            {errors.form && (
              <div className="mb-6">
                <Alert status="error">
                  <Alert.Description>{errors.form}</Alert.Description>
                </Alert>
              </div>
            )}

            <FormLayout onSubmit={handleSubmit}>
              <FormLayout.Row>
                <FormLayout.Field
                  label="First name"
                  htmlFor="firstName"
                  required
                  error={errors.firstName}
                >
                  <Input
                    id="firstName"
                    placeholder="Jane"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    aria-invalid={!!errors.firstName}
                  />
                </FormLayout.Field>

                <FormLayout.Field
                  label="Last name"
                  htmlFor="lastName"
                  required
                  error={errors.lastName}
                >
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    aria-invalid={!!errors.lastName}
                  />
                </FormLayout.Field>
              </FormLayout.Row>

              <FormLayout.Field
                label="Email"
                htmlFor="signupEmail"
                required
                error={errors.email}
              >
                <Input
                  id="signupEmail"
                  type="email"
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!errors.email}
                />
              </FormLayout.Field>

              <FormLayout.Field
                label="Password"
                htmlFor="signupPassword"
                required
                error={errors.password}
                description={!errors.password ? "At least 8 characters." : undefined}
              >
                <Input
                  id="signupPassword"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-invalid={!!errors.password}
                />
              </FormLayout.Field>

              <FormLayout.Field
                label="Confirm password"
                htmlFor="confirmPassword"
                required
                error={errors.confirmPassword}
              >
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  aria-invalid={!!errors.confirmPassword}
                />
              </FormLayout.Field>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(v) => setAgreedToTerms(v === true)}
                  className="mt-0.5"
                />
                <label htmlFor="terms" className="font-sans text-sm cursor-pointer">
                  I agree to the{" "}
                  <UiLink href="#terms">Terms of Service</UiLink>{" "}
                  and{" "}
                  <UiLink href="#privacy">Privacy Policy</UiLink>
                </label>
              </div>
              {errors.terms && (
                <p className="font-sans text-sm text-destructive -mt-2">
                  {errors.terms}
                </p>
              )}

              <FormLayout.Actions align="left">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? <Loader size="sm" variant="secondary" /> : "Create account"}
                </Button>
              </FormLayout.Actions>
            </FormLayout>

            <Divider label="or sign up with" className="my-6" />

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
            Already have an account?{" "}
            <UiLink asChild>
              <NextLink href="/demos/sign-in">Sign in</NextLink>
            </UiLink>
          </p>
        </div>
      </main>
    </div>
  );
}
