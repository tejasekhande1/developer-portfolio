"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Button from "../ui/Button";
import Section from "../ui/Section";

export default function Hero() {
    return (
        <Section className="min-h-screen flex items-center justify-start pt-32">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10" />

            <div className="flex flex-col items-start text-left gap-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-primary font-medium tracking-wide">Hey, I'm</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
                        Tejas Ekhande.
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground/60">
                        I craft modern, high-performance digital experiences.
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-foreground/60 max-w-2xl leading-relaxed"
                >
                    I'm a Full-Stack Developer with a passion for building fast, scalable,
                    and user-focused web applications. I blend clean architecture with
                    stunning UI to create digital products that feel effortless to use.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap items-center gap-4 mt-4"
                >
                    <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        <Mail className="mr-2 w-4 h-4" /> Contact Me
                    </Button>

                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">
                            <Github className="mr-2 w-4 h-4" /> GitHub
                        </Button>
                    </a>

                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">
                            <Linkedin className="mr-2 w-4 h-4" /> LinkedIn
                        </Button>
                    </a>
                </motion.div>
            </div>
        </Section>
    );
}
