"use client";

import { useState } from "react";
import NextLink from "next/link";
import { Trash2 } from "lucide-react";
import {
  Button,
  Input,
  Checkbox,
  Alert,
  Divider,
  Dialog,
  Loader,
  Link as UiLink,
  Text,
} from "@/components/ui";
import { FormLayout } from "@/components/ui/FormLayout";

export default function DeleteAccountPage() {
  const [confirmation, setConfirmation] = useState("");
  const [understood, setUnderstood] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const canDelete = confirmation === "DELETE" && understood;

  function handleDelete() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowDialog(false);
      setDeleted(true);
    }, 2000);
  }

  if (deleted) {
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
              <Alert status="info" className="mb-6 text-left">
                <Alert.Title>Account scheduled for deletion</Alert.Title>
                <Alert.Description>
                  Your account will be permanently deleted in 30 days. You can
                  sign in before then to cancel the deletion.
                </Alert.Description>
              </Alert>
              <Button className="w-full" asChild>
                <NextLink href="/demos/sign-in">Done</NextLink>
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
              Delete account
            </Text>
            <Text variant="small">
              Permanently remove your account and all associated data.
            </Text>
          </div>

          <div className="border-2 shadow-md bg-card p-6 sm:p-8">
            <Alert status="error" className="mb-6">
              <Alert.Title>This action is irreversible</Alert.Title>
              <Alert.Description>
                Deleting your account will permanently remove all your data,
                projects, and settings. This cannot be undone.
              </Alert.Description>
            </Alert>

            <Text variant="small" className="mb-4">
              Before deleting, please note:
            </Text>
            <ul className="font-sans text-sm text-muted-foreground space-y-2 mb-6 list-disc list-inside">
              <li>All your projects will be permanently deleted</li>
              <li>Your username will become available to others</li>
              <li>Active subscriptions will be cancelled</li>
              <li>This action has a 30-day grace period</li>
            </ul>

            <Divider className="mb-6" />

            <FormLayout>
              <FormLayout.Field
                label='Type "DELETE" to confirm'
                htmlFor="confirm"
                required
              >
                <Input
                  id="confirm"
                  placeholder="DELETE"
                  value={confirmation}
                  onChange={(e) => setConfirmation(e.target.value)}
                  className="font-mono"
                />
              </FormLayout.Field>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="understand"
                  checked={understood}
                  onCheckedChange={(v) => setUnderstood(v === true)}
                  className="mt-0.5"
                />
                <label
                  htmlFor="understand"
                  className="font-sans text-sm cursor-pointer"
                >
                  I understand that this action is permanent and all my data
                  will be deleted.
                </label>
              </div>

              <Button
                variant="secondary"
                className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
                disabled={!canDelete}
                onClick={() => setShowDialog(true)}
                type="button"
              >
                Delete my account
              </Button>
            </FormLayout>

            <p className="text-center font-sans text-sm text-muted-foreground mt-6">
              Changed your mind?{" "}
              <UiLink asChild>
                <NextLink href="/">Go back to safety</NextLink>
              </UiLink>
            </p>
          </div>
        </div>
      </main>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <Dialog.Content size="sm">
          <Dialog.Header>Final confirmation</Dialog.Header>
          <Dialog.Body>
            <div className="flex justify-center mb-4">
              <div className="border-2 p-3 bg-destructive/10">
                <Trash2 className="size-6 text-destructive" />
              </div>
            </div>
            <Text variant="body" className="text-center">
              This is your last chance. Are you absolutely sure you want to
              delete your account?
            </Text>
          </Dialog.Body>
          <Dialog.Footer>
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Cancel
            </Button>
            <Button
              variant="secondary"
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={handleDelete}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader size="sm" />
              ) : (
                "Delete permanently"
              )}
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </div>
  );
}
