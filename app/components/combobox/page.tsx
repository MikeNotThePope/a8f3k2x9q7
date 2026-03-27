"use client";

import Link from "next/link";
import { Combobox } from "@/components/ui/Combobox";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

const languages = [
  { value: "typescript", label: "TypeScript" },
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "rust", label: "Rust" },
  { value: "go", label: "Go" },
  { value: "java", label: "Java", disabled: true },
];

function PropsTable() {
  const props = [
    { name: "items", type: "IComboboxItem[]", description: "Array of { value, label, disabled? } objects" },
    { name: "value", type: "string", description: "Controlled selected value" },
    { name: "onValueChange", type: "(value: string) => void", description: "Change handler for controlled mode" },
    { name: "placeholder", type: "string", description: "Placeholder text when nothing is selected" },
    { name: "searchPlaceholder", type: "string", description: "Placeholder for the search input" },
    { name: "emptyText", type: "string", description: "Text shown when no results match search" },
    { name: "disabled", type: "boolean", description: "Disable the combobox" },
    { name: "className", type: "string", description: "Additional classes for the trigger button" },
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

export default function ComboboxPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Combobox</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Searchable dropdown combining Popover, Command, and Button. Supports single and multi-select.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* Default */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <Combobox
            items={frameworks}
            placeholder="Select framework..."
            searchPlaceholder="Search framework..."
            emptyText="No framework found."
          />
        </section>

        {/* With Disabled Items */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Disabled Items</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Java is disabled in this list.
          </p>
          <Combobox
            items={languages}
            placeholder="Select language..."
            searchPlaceholder="Search languages..."
          />
        </section>

        {/* Custom Width */}
        <section>
          <h2 className="font-head text-2xl mb-4">Custom Width</h2>
          <Combobox
            items={frameworks}
            placeholder="Pick your framework..."
            className="w-[300px]"
          />
        </section>

        {/* Multi-Select */}
        <section>
          <h2 className="font-head text-2xl mb-4">Multi-Select</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Select multiple items. Click items to toggle selection.
          </p>
          <Combobox.Multi
            items={languages}
            placeholder="Select languages..."
            searchPlaceholder="Search languages..."
            className="w-[280px]"
          />
        </section>

        {/* Disabled */}
        <section>
          <h2 className="font-head text-2xl mb-4">Disabled</h2>
          <Combobox
            items={frameworks}
            placeholder="Disabled combobox"
            disabled
          />
        </section>

        {/* Props */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* Usage */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`import { Combobox } from "@/components/ui/Combobox";

const items = [
  { value: "next.js", label: "Next.js" },
  { value: "remix", label: "Remix" },
];

<Combobox
  items={items}
  placeholder="Select framework..."
  onValueChange={(value) => console.log(value)}
/>

<Combobox.Multi
  items={items}
  placeholder="Select many..."
  onValuesChange={(values) => console.log(values)}
/>`}</div>
        </section>
      </main>
    </div>
  );
}
