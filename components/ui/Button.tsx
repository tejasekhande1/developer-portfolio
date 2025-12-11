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
        primary: "bg-primary text-white hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]",
        secondary: "bg-secondary text-white hover:bg-secondary/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]",
        ghost: "bg-transparent hover:bg-white/10 text-foreground",
        outline: "border border-white/20 bg-transparent hover:bg-white/10 text-foreground",
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
