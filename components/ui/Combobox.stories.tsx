import type { Meta, StoryObj } from "@storybook/react-vite";
import { Combobox } from "./Combobox";

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

const meta: Meta = {
  title: "Compound/Combobox",
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Combobox
      items={frameworks}
      placeholder="Select framework..."
      searchPlaceholder="Search framework..."
      emptyText="No framework found."
    />
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <Combobox
      items={languages}
      placeholder="Select language..."
      searchPlaceholder="Search languages..."
      emptyText="No language found."
    />
  ),
};

export const CustomWidth: Story = {
  render: () => (
    <Combobox
      items={frameworks}
      placeholder="Pick one..."
      className="w-[300px]"
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <Combobox
      items={frameworks}
      placeholder="Disabled..."
      disabled
    />
  ),
};

export const MultiSelect: Story = {
  render: () => (
    <Combobox.Multi
      items={languages}
      placeholder="Select languages..."
      searchPlaceholder="Search languages..."
      className="w-[280px]"
    />
  ),
};
