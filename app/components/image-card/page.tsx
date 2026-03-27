"use client";

import Link from "next/link";
import { ImageCard } from "@/components/ui/ImageCard";

function PropsTable() {
  const props = [
    { name: "imageUrl", type: "string", description: "URL of the image to display" },
    { name: "caption", type: "string", description: "Caption text rendered below the image" },
    { name: "alt", type: "string", description: "Alt text for the image (defaults to caption)" },
    { name: "className", type: "string", description: "Additional classes on the root figure element" },
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

export default function ImageCardPage() {
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
          <h1 className="font-head text-4xl mb-2">ImageCard</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            A card component for displaying images with captions. No external dependencies.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Default ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <ImageCard
            imageUrl="https://picsum.photos/seed/substrate/400/300"
            caption="A beautiful landscape captured at golden hour."
          />
        </section>

        {/* ─── Custom Width ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Custom Width</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Override the default width with a className.
          </p>
          <ImageCard
            imageUrl="https://picsum.photos/seed/wide/600/300"
            caption="A wider card for panoramic images."
            className="w-[400px]"
          />
        </section>

        {/* ─── Gallery ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Gallery</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Multiple image cards arranged in a flex layout.
          </p>
          <div className="flex flex-wrap gap-4">
            <ImageCard
              imageUrl="https://picsum.photos/seed/one/400/300"
              caption="Mountain vista"
            />
            <ImageCard
              imageUrl="https://picsum.photos/seed/two/400/300"
              caption="Ocean sunset"
            />
            <ImageCard
              imageUrl="https://picsum.photos/seed/three/400/300"
              caption="Forest trail"
            />
          </div>
        </section>

        {/* ─── With Custom Alt ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Custom Alt Text</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Provide an explicit <code className="font-mono bg-muted px-1">alt</code> prop
            for accessibility when the caption is not descriptive enough.
          </p>
          <ImageCard
            imageUrl="https://picsum.photos/seed/brutalism/400/300"
            caption="Brutalist architecture"
            alt="A brutalist building facade with exposed concrete and geometric shapes"
          />
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<ImageCard
  imageUrl="/images/photo.jpg"
  caption="A descriptive caption for the image."
  alt="Detailed alt text for accessibility"
  className="w-[300px]"
/>`}</div>
        </section>
      </main>
    </div>
  );
}
