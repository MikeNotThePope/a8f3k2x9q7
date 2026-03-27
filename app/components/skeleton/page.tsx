"use client";

import Link from "next/link";
import { Skeleton } from "@/components/ui/Skeleton";

function SkeletonPropsTable() {
  const props = [
    { name: "className", type: "string", description: "Additional classes for sizing and shape." },
    { name: "...rest", type: "HTMLDivElement attrs", description: "All standard div attributes (style, role, aria-*, etc.)." },
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

export default function SkeletonPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link
            href="/"
            className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block"
          >
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Skeleton</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Placeholder loading indicator that mimics content layout while data is being fetched. No external dependencies.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Text Lines ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Text Lines</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Simulate loading text content with varying widths.
          </p>
          <div className="border-2 p-6 max-w-md flex flex-col gap-3">
            <Skeleton className="h-5 w-[80%]" />
            <Skeleton className="h-5 w-[60%]" />
            <Skeleton className="h-5 w-[90%]" />
            <Skeleton className="h-5 w-[45%]" />
          </div>
        </section>

        {/* ─── Card Skeleton ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Card Skeleton</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Compose multiple skeletons to match a card layout.
          </p>
          <div className="border-2 p-6">
            <div className="border-2 border-border p-4 max-w-xs flex flex-col gap-3">
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-5 w-[70%]" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[50%]" />
            </div>
          </div>
        </section>

        {/* ─── Avatar with Text ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Avatar with Text</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Common pattern for user profile loading states.
          </p>
          <div className="border-2 p-6">
            <div className="flex gap-4 items-center max-w-sm">
              <Skeleton className="h-12 w-12 shrink-0" />
              <div className="flex flex-col gap-2 flex-1">
                <Skeleton className="h-4 w-[40%]" />
                <Skeleton className="h-3 w-[70%]" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Table Rows ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Table Rows</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Skeleton rows for tabular data.
          </p>
          <div className="border-2 p-6 max-w-lg">
            <div className="flex flex-col gap-2">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="flex gap-3">
                  <Skeleton className="h-4 flex-1" />
                  <Skeleton className="h-4 flex-[2]" />
                  <Skeleton className="h-4 flex-1" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <SkeletonPropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`{/* Text placeholder */}
<Skeleton className="h-5 w-[80%]" />

{/* Card skeleton */}
<div className="border-2 p-4 flex flex-col gap-3">
  <Skeleton className="h-40 w-full" />
  <Skeleton className="h-5 w-[70%]" />
  <Skeleton className="h-4 w-[90%]" />
</div>

{/* Avatar + text */}
<div className="flex gap-4 items-center">
  <Skeleton className="h-12 w-12" />
  <div className="flex flex-col gap-2 flex-1">
    <Skeleton className="h-4 w-[40%]" />
    <Skeleton className="h-3 w-[70%]" />
  </div>
</div>`}</div>
        </section>
      </main>
    </div>
  );
}
