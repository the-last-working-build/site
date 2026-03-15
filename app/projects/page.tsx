import Link from "next/link";
import ProjectItem from "@/components/ProjectItem";
import SectionLabel from "@/components/SectionLabel";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] dark:bg-[#050505] text-[#111] dark:text-[#ededed] font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <main className="max-w-2xl mx-auto px-6 py-12 sm:py-20 md:py-24 flex flex-col gap-16 sm:gap-24 animate-[fade-in_1s_ease-out_forwards]">
        
        <header className="flex flex-col gap-8">
          <Link href="/" className="text-[#888] hover:text-[#111] dark:hover:text-[#ededed] transition-colors self-start mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          </Link>
          <SectionLabel>
            Archive
          </SectionLabel>
          <p className="text-2xl sm:text-3xl leading-snug sm:leading-relaxed font-medium tracking-tight text-[#111] dark:text-[#ededed] text-pretty">
            A comprehensive list of our past works, experiments, and production-ready systems.
          </p>
        </header>

        <section className="flex flex-col gap-8">
          <div className="flex flex-col">
            {projects.map((project, i) => (
              <ProjectItem 
                key={project.name}
                href={project.href || "#"}
                name={project.name}
                desc={project.desc}
                year={project.year}
                delayMs={(i + 1) * 100}
                alwaysShowYear={true}
              />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}