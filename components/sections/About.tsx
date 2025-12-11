"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import Card from "../ui/Card";

export default function About() {
    return (
        <Section id="about">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-gradient">Me</span></h2>
                    <div className="space-y-4 text-foreground/80">
                        <p>
                            I'm a dedicated Full Stack Developer with a knack for creating seamless, user-centric web applications.
                            I enjoy the challenge of solving complex problems and turning ideas into reality through clean, efficient code.
                        </p>
                        <p>
                            With a strong foundation in both frontend and backend technologies, I bridge the gap between design and functionality.
                            I'm constantly learning and keeping up with the latest industry trends to deliver cutting-edge solutions.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, contributing to open source, or gaming.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <Card className="aspect-square flex items-center justify-center bg-linear-to-br from-white/5 to-white/0 border-white/10">
                        <span className="text-foreground/20 text-6xl font-mono">&lt;/&gt;</span>
                        {/* Placeholder for an image if the user wants one later */}
                    </Card>
                    <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-primary/10 rounded-full blur-3xl"></div>
                </motion.div>
            </div>
        </Section>
    );
}
