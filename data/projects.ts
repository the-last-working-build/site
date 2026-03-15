export interface Project {
  name: string;
  desc: string;
  year: string;
  href?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  { name: "Cascade", desc: "Hourly payments using stablcoins", year: "2025", featured: true, href: "https://cascade.tlwb.tech" },
  { name: "Autodocs", desc: "Generate docs for open source repos", year: "2026", featured: true, href: "" },
];
