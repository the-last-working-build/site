interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <h2 
      className="text-[10px] uppercase tracking-widest text-[#888] dark:text-[#888]" 
      style={{ fontFamily: "var(--font-press-start)" }}
    >
      {children}
    </h2>
  );
}