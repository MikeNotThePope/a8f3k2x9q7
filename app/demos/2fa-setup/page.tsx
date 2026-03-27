"use client";

import { useState } from "react";
import NextLink from "next/link";
import { Copy, Check } from "lucide-react";
import {
  Button,
  Input,
  Alert,
  Divider,
  Loader,
  IconButton,
  Text,
} from "@/components/ui";
import { FormLayout } from "@/components/ui/FormLayout";

const MOCK_SECRET = "JBSWY3DPEHPK3PXP";
const MOCK_RECOVERY_CODES = [
  "a1b2c3d4",
  "e5f6g7h8",
  "i9j0k1l2",
  "m3n4o5p6",
  "q7r8s9t0",
  "u1v2w3x4",
];

export default function TwoFactorSetupPage() {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState<"scan" | "recovery">("scan");
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!code.trim() || code.length < 6) {
      setError("Enter a valid 6-digit code.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep("recovery");
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
              Set up 2FA
            </Text>
            <Text variant="small">
              Add an extra layer of security to your account.
            </Text>
          </div>

          <div className="border-2 shadow-md bg-card p-6 sm:p-8">
            {step === "scan" && (
              <>
                <FormLayout onSubmit={handleVerify}>
                  <FormLayout.Section
                    title="1. Scan QR code"
                    description="Scan this code with your authenticator app."
                  >
                    {/* Mock QR code placeholder */}
                    <div className="border-2 bg-background p-6 flex items-center justify-center">
                      <div className="border-2 w-40 h-40 bg-muted flex items-center justify-center">
                        <Text variant="small" className="text-center px-2">
                          QR Code Placeholder
                        </Text>
                      </div>
                    </div>

                    <Divider label="or enter manually" />

                    <div className="flex items-center gap-2">
                      <code className="flex-1 font-mono text-sm bg-muted border-2 px-3 py-2 tracking-widest">
                        {MOCK_SECRET}
                      </code>
                      <IconButton
                        variant="outline"
                        size="md"
                        onClick={handleCopy}
                        aria-label="Copy secret"
                      >
                        {copied ? (
                          <Check className="size-4" />
                        ) : (
                          <Copy className="size-4" />
                        )}
                      </IconButton>
                    </div>
                  </FormLayout.Section>

                  <FormLayout.Section
                    title="2. Enter verification code"
                    description="Enter the 6-digit code from your authenticator app."
                  >
                    {error && (
                      <Alert status="error">
                        <Alert.Description>{error}</Alert.Description>
                      </Alert>
                    )}

                    <FormLayout.Field label="Code" htmlFor="totp" required>
                      <Input
                        id="totp"
                        type="text"
                        inputMode="numeric"
                        maxLength={6}
                        placeholder="000000"
                        value={code}
                        onChange={(e) =>
                          setCode(e.target.value.replace(/\D/g, ""))
                        }
                        aria-invalid={!!error}
                        className="font-mono tracking-[0.5em] text-center text-lg"
                      />
                    </FormLayout.Field>
                  </FormLayout.Section>

                  <FormLayout.Actions align="left">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader size="sm" variant="secondary" />
                      ) : (
                        "Verify & enable"
                      )}
                    </Button>
                  </FormLayout.Actions>
                </FormLayout>
              </>
            )}

            {step === "recovery" && (
              <>
                <Alert status="warning" className="mb-6">
                  <Alert.Title>Save your recovery codes</Alert.Title>
                  <Alert.Description>
                    Store these codes in a safe place. Each code can only be used
                    once. If you lose your authenticator, these are the only way
                    to access your account.
                  </Alert.Description>
                </Alert>

                <div className="border-2 bg-muted p-4 mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    {MOCK_RECOVERY_CODES.map((rc) => (
                      <code key={rc} className="font-mono text-sm text-center py-1">
                        {rc}
                      </code>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={handleCopy}
                  >
                    {copied ? "Copied!" : "Copy codes"}
                  </Button>
                  <Button className="flex-1" asChild>
                    <NextLink href="/demos/welcome">Done</NextLink>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
