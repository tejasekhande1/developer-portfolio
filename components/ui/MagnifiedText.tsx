"use client";

import { useRef, useState, MouseEvent } from "react";

interface Props {
    children: React.ReactNode;
    className?: string; // Expecting font sizing/styling classes here
}

export default function MagnifiedText({ children, className = "" }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const size = 150; // Size of the lens diameter
    const radius = size / 2;

    return (
        <div
            ref={containerRef}
            className={`relative inline-block cursor-none ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            data-cursor="magnifier" // Triggers the 'hidden' state in CustomCursor
        >
            {/* 
         Layer 1: Original Text 
         Using a slightly dimmed color by default so the pop is stronger?
         Or just inherit.
      */}
            <div className="relative z-10 text-current">
                {children}
            </div>

            {/* 
         Layer 2: Magnified Overlay 
         - Absolute positioned on top
         - Background matches theme (black) to hide layer 1
         - White text
         - Masked by circle
      */}
            <div
                className="absolute inset-0 pointer-events-none z-20 select-none hidden md:block"
                style={{
                    // Move the mask circle to mouse position
                    maskImage: isHovered
                        ? `radial-gradient(circle ${radius}px at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 100%)`
                        : "none",
                    WebkitMaskImage: isHovered
                        ? `radial-gradient(circle ${radius}px at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 100%)`
                        : "none",
                    // Only show this layer when hovered (via opacity or visibility) to save resources
                    opacity: isHovered ? 1 : 0,
                }}
                aria-hidden="true"
            >
                <div
                    className="bg-background text-white w-full h-full"
                    style={{
                        // Scale around the mouse position
                        transform: `scale(1.5)`,
                        transformOrigin: `${mousePos.x}px ${mousePos.y}px`,
                        // Ensure the background is opaque to cover the bottom layer
                    }}
                >
                    {children}
                </div>
            </div>

            {/* 
          Layer 3: The Lens Rim (Visual Circle)
          This replaces the CustomCursor ring.
      */}
            {isHovered && (
                <div
                    className="absolute rounded-full pointer-events-none z-30 hidden md:block"
                    style={{
                        width: size,
                        height: size,
                        left: mousePos.x - radius,
                        top: mousePos.y - radius,
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        background: "rgba(255, 255, 255, 0.02)",
                        boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
                        backdropFilter: "contrast(1.2)", // Adds a bit of 'pop' inside the rim if supported
                    }}
                />
            )}
        </div>
    );
}
