import Link from "next/link";
import ProjectItem from "@/components/ProjectItem";
import SectionLabel from "@/components/SectionLabel";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] dark:bg-[#050505] text-[#111] dark:text-[#ededed] font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <main className="max-w-2xl mx-auto px-6 py-12 sm:py-20 md:py-24 flex flex-col gap-16 sm:gap-24 animate-[fade-in_1s_ease-out_forwards]">
        
        <header className="flex flex-col gap-8">
          <SectionLabel>
            the last working build
          </SectionLabel>
          
          <div className="flex flex-col gap-6 tracking-tight text-pretty">
            <p className="text-2xl sm:text-3xl leading-snug font-medium text-[#111] dark:text-[#ededed]">
              We are a small corner of the internet dedicated to exploring software, infrastructure, and AI. We build products, break things, and occasionally discover the one commit that actually worked.
            </p>
          </div>
        </header>

        <section className="flex flex-col gap-8">
          <SectionLabel>
            Selected Work
          </SectionLabel>
          
          <div className="flex flex-col">
            {projects.filter(p => p.featured).map((project) => (
              <ProjectItem 
                key={project.name} 
                href={project.href || "#"} 
                name={project.name}
                desc={project.desc}
                year={project.year}
              />
            ))}
          </div>
          
          <Link href="/projects" className="text-sm font-medium text-[#777] hover:text-[#111] dark:hover:text-[#ededed] transition-colors self-start mt-4 underline decoration-[#ddd] dark:decoration-[#333] underline-offset-4 hover:decoration-[#111] dark:hover:decoration-[#ededed]">
            View full archive ↗
          </Link>
        </section>

        <footer className="flex flex-col gap-8">
          <SectionLabel>
            Connect
          </SectionLabel>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-base sm:text-lg font-medium">
            <a href="https://github.com/praxzy" target="_blank" rel="noopener noreferrer" className="text-[#111] dark:text-[#ededed] hover:opacity-50 transition-opacity underline decoration-[#ddd] dark:decoration-[#333] underline-offset-4">
              @praxzy
            </a>
            <a href="https://github.com/sattwyk" target="_blank" rel="noopener noreferrer" className="text-[#111] dark:text-[#ededed] hover:opacity-50 transition-opacity underline decoration-[#ddd] dark:decoration-[#333] underline-offset-4">
              @sattwyk
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
}
