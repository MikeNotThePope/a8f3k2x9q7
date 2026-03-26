"use client";

import { useState } from "react";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui";

const signedOutLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

const signedInLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Projects", href: "/projects" },
  { label: "Settings", href: "/settings" },
];

function PropsTable() {
  const props = [
    { name: "brand", type: "{ name: string; logo?: string; href?: string }", description: "Brand identity shown on the left" },
    { name: "links", type: "{ label: string; href: string }[]", description: "Navigation links displayed in the center" },
    { name: 'auth (signed-out)', type: '{ state: "signed-out"; href: string; label?: string }', description: "Single CTA button for unauthenticated users" },
    { name: 'auth (signed-in)', type: '{ state: "signed-in"; user: { name, avatar? }; menuItems: NavMenuItem[] }', description: "Avatar dropdown for authenticated users" },
    { name: "className", type: "string", description: "Additional classes on the root nav element" },
  ];

  return (
    <div className="border-2 overflow-x-auto">
      <table className="w-full font-sans text-sm">
        <thead>
          <tr className="border-b-2 bg-muted">
            <th className="text-left p-3 font-head">Prop</th>
            <th className="text-left p-3 font-head">Type</th>
            <th className="text-left p-3 font-head">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b last:border-b-0">
              <td className="p-3 font-mono text-xs">{prop.name}</td>
              <td className="p-3 font-mono text-xs text-muted-foreground">{prop.type}</td>
              <td className="p-3">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function NavBarPage() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link
            href="/"
            className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block"
          >
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">NavBar</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Responsive navigation bar with signed-in/signed-out states, mobile
            drawer, and configurable links.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Live Demo ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Live Demo</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Resize your browser to see responsive behavior. Toggle auth state below.
          </p>
          <div className="mb-4">
            <Button size="sm" onClick={() => setIsSignedIn(!isSignedIn)}>
              Switch to {isSignedIn ? "Signed Out" : "Signed In"}
            </Button>
          </div>
          <div className="border-2 shadow-md overflow-hidden">
            <NavBar
              brand={{ name: "Acme Co" }}
              links={isSignedIn ? signedInLinks : signedOutLinks}
              auth={
                isSignedIn
                  ? {
                      state: "signed-in",
                      user: { name: "Jane" },
                      menuItems: [
                        { label: "Profile", href: "/profile" },
                        { label: "Account", href: "/account" },
                        {
                          label: "Sign Out",
                          onClick: () => setIsSignedIn(false),
                        },
                      ],
                    }
                  : {
                      state: "signed-out",
                      href: "/sign-up",
                    }
              }
              className="!sticky !top-auto"
            />
          </div>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<NavBar
  brand={{ name: "Acme Co" }}
  links={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Projects", href: "/projects" },
  ]}
  auth={{
    state: "signed-out",
    href: "/sign-up",
    label: "Get Started",  // optional
  }}
/>`}</div>
        </section>

        {/* ─── Responsive Behavior ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Responsive Behavior</h2>
          <div className="border-2 overflow-x-auto">
            <table className="w-full font-sans text-sm">
              <thead>
                <tr className="border-b-2 bg-muted">
                  <th className="text-left p-3 font-head">Breakpoint</th>
                  <th className="text-left p-3 font-head">Layout</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">Desktop (1024px+)</td>
                  <td className="p-3">Brand — Links — Auth, single row</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">Tablet (640-1023px)</td>
                  <td className="p-3">Brand — Auth CTA — Hamburger</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs">Phone (&lt;640px)</td>
                  <td className="p-3">Brand — Hamburger. Everything in drawer.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
