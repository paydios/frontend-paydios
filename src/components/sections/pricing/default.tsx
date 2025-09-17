import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn("absolute w-full py-16 sm:py-24 top-[63%] lg:top-[75%]", className)}
    >
      {children}
    </section>
  );
}

// 👇 Export default too (so you can import either way)
export default Section;
