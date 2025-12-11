import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

export default function Section({ children, id, className }: SectionProps) {
    return (
        <section id={id} className={twMerge("py-20 md:py-32 relative overflow-hidden", className)}>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}
