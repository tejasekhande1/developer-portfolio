"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Button from "../ui/Button";
import Section from "../ui/Section";

export default function Hero() {
    return (
        <Section className="min-h-screen flex items-center justify-center pt-32">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" />

            <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-primary">
                        Available for work
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight"
                >
                    Building <span className="text-gradient">digital experiences</span> that matter.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-foreground/60 max-w-2xl"
                >
                    Hi, I'm Tejas Ekhande. A Full Stack Developer passionate about building accessible, pixel-perfect, and performant web applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-4 mt-4"
                >
                    <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                        View Work <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Contact Me
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center gap-6 mt-8 text-foreground/60"
                >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">
                        <Mail size={24} />
                    </a>
                </motion.div>
            </div>
        </Section>
    );
}
