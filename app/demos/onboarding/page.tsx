"use client";

import { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import {
  Button,
  Input,
  Checkbox,
  Divider,
  Loader,
  Text,
} from "@/components/ui";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Switch } from "@/components/ui/Switch";
import { FormLayout } from "@/components/ui/FormLayout";

export default function OnboardingPage() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/demos/welcome");
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
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <Text variant="h2" className="mb-2">
              Complete your profile
            </Text>
            <Text variant="small">
              Tell us a bit about yourself. You can always change this later.
            </Text>
          </div>

          <div className="border-2 shadow-md bg-card p-6 sm:p-8">
            <FormLayout onSubmit={handleSubmit}>
              <FormLayout.Section
                title="Profile"
                description="This information will be visible to other users."
              >
                {/* Avatar placeholder */}
                <div className="flex items-center gap-4">
                  <div className="border-2 w-16 h-16 bg-muted flex items-center justify-center shrink-0">
                    <Text variant="h4">JD</Text>
                  </div>
                  <Button variant="outline" size="sm" type="button">
                    Upload photo
                  </Button>
                </div>

                <FormLayout.Field
                  label="Display name"
                  htmlFor="displayName"
                  required
                >
                  <Input
                    id="displayName"
                    placeholder="Jane Doe"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                </FormLayout.Field>

                <FormLayout.Field
                  label="Bio"
                  htmlFor="bio"
                  description="Brief description for your profile. Max 160 characters."
                >
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself..."
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    maxLength={160}
                    rows={3}
                  />
                </FormLayout.Field>

                <FormLayout.Field label="Role" htmlFor="role">
                  <Select value={role} onValueChange={setRole}>
                    <Select.Trigger>
                      <Select.Value placeholder="Select your role..." />
                    </Select.Trigger>
                    <Select.Content>
                      <Select.Item value="developer">Developer</Select.Item>
                      <Select.Item value="designer">Designer</Select.Item>
                      <Select.Item value="pm">Product Manager</Select.Item>
                      <Select.Item value="founder">Founder</Select.Item>
                      <Select.Item value="other">Other</Select.Item>
                    </Select.Content>
                  </Select>
                </FormLayout.Field>
              </FormLayout.Section>

              <Divider />

              <FormLayout.Section
                title="Notifications"
                description="Choose what you&apos;d like to hear about."
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-sans text-sm font-medium">
                      Product updates
                    </p>
                    <p className="font-sans text-xs text-muted-foreground">
                      Get notified about new features and improvements.
                    </p>
                  </div>
                  <Switch
                    checked={emailUpdates}
                    onCheckedChange={setEmailUpdates}
                  />
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="marketing"
                    checked={marketingEmails}
                    onCheckedChange={(v) => setMarketingEmails(v === true)}
                    className="mt-0.5"
                  />
                  <label
                    htmlFor="marketing"
                    className="font-sans text-sm cursor-pointer"
                  >
                    Send me occasional marketing emails and tips.
                  </label>
                </div>
              </FormLayout.Section>

              <FormLayout.Actions align="between">
                <Button variant="ghost" type="button" asChild>
                  <NextLink href="/demos/welcome">Skip for now</NextLink>
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <Loader size="sm" variant="secondary" />
                  ) : (
                    "Complete setup"
                  )}
                </Button>
              </FormLayout.Actions>
            </FormLayout>
          </div>
        </div>
      </main>
    </div>
  );
}
