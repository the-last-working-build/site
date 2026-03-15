import Link from "next/link";
import { CSSProperties } from "react";

interface ProjectItemProps {
  name: string;
  desc: string;
  year: string;
  href?: string;
  delayMs?: number;
  alwaysShowYear?: boolean;
}

export default function ProjectItem({ name, desc, year, href = "#", delayMs, alwaysShowYear = false }: ProjectItemProps) {
  const isAnimated = typeof delayMs === "number";
  const isExternal = href.startsWith("http");

  return (
    <Link 
      href={href} 
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group flex flex-col sm:flex-row sm:items-baseline justify-between py-5 border-b border-[#eee] dark:border-[#1a1a1a] last:border-none hover:pl-1 transition-all duration-300 ease-out ${isAnimated ? 'opacity-0 animate-[fade-in_1s_ease-out_forwards]' : ''}`}
      style={isAnimated ? { animationDelay: `${delayMs}ms` } as CSSProperties : undefined}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 lg:gap-6 flex-1 min-w-0 pr-4">
        <span className="text-base sm:text-lg font-medium text-[#111] dark:text-[#ededed] group-hover:opacity-60 transition-opacity whitespace-nowrap shrink-0">
          {name}
        </span>
        <span className="text-sm text-[#777] dark:text-[#777] truncate">
          {desc}
        </span>
      </div>
      <div 
        className={`hidden sm:block text-[10px] text-[#999] transition-all duration-300 shrink-0 ${alwaysShowYear ? 'opacity-30 group-hover:opacity-100 translate-x-0' : 'opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0'}`} 
        style={{ fontFamily: "var(--font-press-start)" }}
      >
        {year}
      </div>
    </Link>
  );
}