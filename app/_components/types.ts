export interface ComponentEntry {
  name: string;
  description: string;
  href: string;
  status: "Ready" | "In Progress" | "Planned";
  builtOn?: string;
}

export interface DemoSubGroup {
  label: string;
  demos: ComponentEntry[];
}

export interface ComponentGroup {
  title: string;
  id: string;
  description: string;
  components: ComponentEntry[];
}

export interface DemoGroup {
  title: string;
  id: string;
  description: string;
  subGroups: DemoSubGroup[];
}
