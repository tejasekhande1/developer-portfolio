import { motion } from "framer-motion";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function Card({ children, className, hoverEffect = true }: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hoverEffect ? { y: -5 } : {}}
            className={twMerge(
                "glass rounded-2xl p-6 transition-all duration-300 border border-white/5",
                hoverEffect && "hover:bg-white/5 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
                className
            )}
        >
            {children}
        </motion.div>
    );
}
