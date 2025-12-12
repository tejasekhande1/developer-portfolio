"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [variant, setVariant] = useState("default");

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Check for cursor variant
            const target = e.target as HTMLElement;

            // Check for buttons/links
            if (target.closest("button") || target.closest("a")) {
                setVariant("button");
                return;
            }

            // Check for specific data-cursor attributes
            const cursorTarget = target.closest("[data-cursor]");
            if (cursorTarget) {
                setVariant(cursorTarget.getAttribute("data-cursor") || "default");
                return;
            }

            setVariant("default");
        };

        window.addEventListener("mousemove", updatePosition);
        return () => window.removeEventListener("mousemove", updatePosition);
    }, []);

    const variants = {
        magnifier: {
            height: 150,
            width: 150,
            backgroundColor: "transparent",
            border: "none", // Hide the global cursor border, MagnifiedText handles it
            opacity: 0, // Make invisible
            x: position.x - 75,
            y: position.y - 75,
        },
        default: {
            height: 12,
            width: 12,
            backgroundColor: "var(--primary)",
            borderRadius: "50%",
            x: position.x - 6,
            y: position.y - 6,
            mixBlendMode: "normal" as const,
        },
        button: {
            height: 64,
            width: 64,
            backgroundColor: "transparent",
            border: "1px solid var(--primary)",
            opacity: 1,
            x: position.x - 32,
            y: position.y - 32,
            mixBlendMode: "normal" as const,
        },
        card: {
            height: 100,
            width: 100,
            border: "2px solid var(--secondary)",
            backgroundColor: "transparent",
            borderRadius: "0%",
            x: position.x - 50,
            y: position.y - 50,
            rotate: 45,
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none"
            style={{ zIndex: 9999 }}
            animate={variants[variant as keyof typeof variants] || variants.default}
            transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.2 }}
        />
    );
}
