"use client";

import Link from "next/link";
import { Carousel } from "@/components/ui/Carousel";

function PropsTable() {
  const props = [
    { name: "opts", type: "EmblaOptionsType", description: "Embla carousel options (align, loop, etc.)." },
    { name: "plugins", type: "EmblaPluginType[]", description: "Embla carousel plugins." },
    { name: "orientation", type: "'horizontal' | 'vertical'", description: "Scroll direction. Default horizontal." },
    { name: "setApi", type: "(api: CarouselApi) => void", description: "Callback to access the Embla API instance." },
    { name: "className", type: "string", description: "Additional classes for the root element." },
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

export default function CarouselPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Carousel</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            A carousel with slide navigation. Built on Embla Carousel.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Default ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <div className="mx-auto max-w-xs">
            <Carousel>
              <Carousel.Content>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Carousel.Item key={i}>
                    <div className="border-2 border-border bg-muted p-12 text-center">
                      <span className="text-4xl font-head">{i + 1}</span>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel.Content>
              <Carousel.Previous />
              <Carousel.Next />
            </Carousel>
          </div>
        </section>

        {/* ─── Multiple Slides ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Multiple Slides Visible</h2>
          <div className="mx-auto max-w-md">
            <Carousel opts={{ align: "start" }}>
              <Carousel.Content className="-ml-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Carousel.Item key={i} className="basis-1/3 pl-2">
                    <div className="border-2 border-border bg-muted p-6 text-center">
                      <span className="text-2xl font-head">{i + 1}</span>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel.Content>
              <Carousel.Previous />
              <Carousel.Next />
            </Carousel>
          </div>
        </section>

        {/* ─── With Loop ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Loop</h2>
          <div className="mx-auto max-w-xs">
            <Carousel opts={{ loop: true }}>
              <Carousel.Content>
                {["A", "B", "C", "D"].map((letter) => (
                  <Carousel.Item key={letter}>
                    <div className="border-2 border-border bg-primary text-primary-foreground p-12 text-center">
                      <span className="text-4xl font-head">{letter}</span>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel.Content>
              <Carousel.Previous />
              <Carousel.Next />
            </Carousel>
          </div>
        </section>

        {/* ─── Vertical ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Vertical</h2>
          <div className="mx-auto max-w-xs">
            <Carousel orientation="vertical" className="max-h-[200px]">
              <Carousel.Content className="-mt-2 h-[200px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Carousel.Item key={i} className="basis-full pt-2">
                    <div className="border-2 border-border bg-muted p-8 text-center">
                      <span className="text-4xl font-head">{i + 1}</span>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel.Content>
              <Carousel.Previous />
              <Carousel.Next />
            </Carousel>
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
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`import { Carousel } from "@/components/ui/Carousel";

<Carousel>
  <Carousel.Content>
    <Carousel.Item>Slide 1</Carousel.Item>
    <Carousel.Item>Slide 2</Carousel.Item>
    <Carousel.Item>Slide 3</Carousel.Item>
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel>

{/* With options */}
<Carousel opts={{ loop: true, align: "start" }}>
  ...
</Carousel>

{/* Multiple visible slides */}
<Carousel.Item className="basis-1/3">...</Carousel.Item>

{/* Vertical */}
<Carousel orientation="vertical">...</Carousel>`}</div>
        </section>
      </main>
    </div>
  );
}
