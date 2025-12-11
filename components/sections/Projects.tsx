"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Image from "next/image";

// Placeholder data - user can replace this
const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured shopping platform with cart, checkout, and admin dashboard.",
        tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
        links: { demo: "#", code: "#" },
        image: null // Using placeholder styling if null
    },
    {
        title: "Task Management App",
        description: "Collaborative project management tool with ease-of-use in mind.",
        tags: ["React", "Firebase", "Tailwind"],
        links: { demo: "#", code: "#" },
        image: null
    },
    {
        title: "AI Chat Interface",
        description: "Modern chat interface integration with OpenAI API.",
        tags: ["Next.js", "OpenAI", "Radix UI"],
        links: { demo: "#", code: "#" },
        image: null
    },
];

export default function Projects() {
    return (
        <Section id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                <p className="text-foreground/60">Some of the things I've built recently.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} className="flex flex-col h-full group" hoverEffect={true}>
                        <div className="aspect-video bg-white/5 rounded-xl mb-4 overflow-hidden relative">
                            {/* Placeholder or Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-foreground/20 group-hover:scale-105 transition-transform duration-500">
                                <span className="font-mono text-4xl">Project {index + 1}</span>
                            </div>
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <Button size="sm" variant="secondary" onClick={() => window.open(project.links.demo)}>
                                    <ExternalLink size={16} />
                                </Button>
                                <Button size="sm" variant="outline" onClick={() => window.open(project.links.code)}>
                                    <Github size={16} />
                                </Button>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-foreground/70 mb-4 grow text-sm">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
