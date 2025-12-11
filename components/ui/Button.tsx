import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    className?: string;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-primary/10 text-primary border border-primary/50 hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] backdrop-blur-sm",
        secondary: "bg-secondary/10 text-secondary border border-secondary/50 hover:bg-secondary/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] backdrop-blur-sm",
        ghost: "bg-transparent hover:bg-white/5 text-foreground hover:text-primary transition-colors",
        outline: "border border-white/10 bg-transparent hover:bg-white/5 text-foreground hover:border-primary/50 hover:text-primary",
    };

    const sizes = {
        sm: "px-4 py-1.5 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={twMerge(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
}
