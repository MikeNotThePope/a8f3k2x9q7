"use client";

import { useState } from "react";
import NextLink from "next/link";
import { Monitor, Smartphone, Globe } from "lucide-react";
import {
  Button,
  Alert,
  Divider,
  IconButton,
  Dialog,
  Text,
} from "@/components/ui";

interface Session {
  id: string;
  device: string;
  browser: string;
  location: string;
  lastActive: string;
  current: boolean;
  icon: "desktop" | "mobile" | "web";
}

const MOCK_SESSIONS: Session[] = [
  {
    id: "1",
    device: "MacBook Pro",
    browser: "Chrome 120",
    location: "San Francisco, CA",
    lastActive: "Now",
    current: true,
    icon: "desktop",
  },
  {
    id: "2",
    device: "iPhone 15",
    browser: "Safari",
    location: "San Francisco, CA",
    lastActive: "2 hours ago",
    current: false,
    icon: "mobile",
  },
  {
    id: "3",
    device: "Windows PC",
    browser: "Firefox 121",
    location: "New York, NY",
    lastActive: "3 days ago",
    current: false,
    icon: "web",
  },
];

const iconMap = {
  desktop: Monitor,
  mobile: Smartphone,
  web: Globe,
};

export default function SessionsPage() {
  const [sessions, setSessions] = useState(MOCK_SESSIONS);
  const [revokeId, setRevokeId] = useState<string | null>(null);
  const [revokedAll, setRevokedAll] = useState(false);

  const sessionToRevoke = sessions.find((s) => s.id === revokeId);

  function handleRevoke() {
    if (!revokeId) return;
    setSessions((prev) => prev.filter((s) => s.id !== revokeId));
    setRevokeId(null);
  }

  function handleRevokeAll() {
    setSessions((prev) => prev.filter((s) => s.current));
    setRevokedAll(false);
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
              Active sessions
            </Text>
            <Text variant="small">
              Manage devices and browsers that are signed in to your account.
            </Text>
          </div>

          <div className="border-2 shadow-md bg-card">
            <Alert status="info" className="m-4">
              <Alert.Description>
                If you see a session you don&apos;t recognize, revoke it
                immediately and change your password.
              </Alert.Description>
            </Alert>

            <div className="divide-y-2">
              {sessions.map((session) => {
                const Icon = iconMap[session.icon];
                return (
                  <div
                    key={session.id}
                    className="flex items-center gap-4 px-6 py-4"
                  >
                    <div className="border-2 p-2 bg-muted shrink-0">
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-sans text-sm font-medium truncate">
                          {session.device} &middot; {session.browser}
                        </p>
                        {session.current && (
                          <span className="font-head text-[10px] px-1.5 py-0.5 border-2 bg-primary text-primary-foreground shrink-0">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="font-sans text-xs text-muted-foreground">
                        {session.location} &middot; {session.lastActive}
                      </p>
                    </div>
                    {!session.current && (
                      <IconButton
                        variant="ghost"
                        size="sm"
                        onClick={() => setRevokeId(session.id)}
                        aria-label={`Revoke ${session.device}`}
                      >
                        <span className="text-destructive text-xs font-mono">
                          ✕
                        </span>
                      </IconButton>
                    )}
                  </div>
                );
              })}

              {sessions.length === 1 && (
                <div className="px-6 py-4">
                  <Text variant="small" className="text-center">
                    No other active sessions.
                  </Text>
                </div>
              )}
            </div>

            {sessions.length > 1 && (
              <>
                <Divider />
                <div className="p-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setRevokedAll(true)}
                  >
                    Revoke all other sessions
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      {/* Revoke single session dialog */}
      <Dialog open={!!revokeId} onOpenChange={() => setRevokeId(null)}>
        <Dialog.Content size="sm">
          <Dialog.Header>Revoke session</Dialog.Header>
          <Dialog.Body>
            <Text variant="body">
              Are you sure you want to revoke the session on{" "}
              <strong>{sessionToRevoke?.device}</strong>? This device will be
              signed out immediately.
            </Text>
          </Dialog.Body>
          <Dialog.Footer>
            <Button variant="outline" onClick={() => setRevokeId(null)}>
              Cancel
            </Button>
            <Button variant="secondary" onClick={handleRevoke}>
              Revoke
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>

      {/* Revoke all dialog */}
      <Dialog open={revokedAll} onOpenChange={() => setRevokedAll(false)}>
        <Dialog.Content size="sm">
          <Dialog.Header>Revoke all sessions</Dialog.Header>
          <Dialog.Body>
            <Alert status="warning" className="mb-4">
              <Alert.Description>
                All devices except this one will be signed out immediately.
              </Alert.Description>
            </Alert>
            <Text variant="body">
              You will need to sign in again on each device.
            </Text>
          </Dialog.Body>
          <Dialog.Footer>
            <Button variant="outline" onClick={() => setRevokedAll(false)}>
              Cancel
            </Button>
            <Button variant="secondary" onClick={handleRevokeAll}>
              Revoke all
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </div>
  );
}
