"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { cn } from "@/lib/utils";

const educationData = [
    {
        title: "Bachelor of Engineering, Computer Science",
        institution: "Smt. Kashibai Nawale College of Engineering, Pune",
        period: "Jun 2021 - May 2024",
        score: "CGPA: 9.23",
    },
    {
        title: "HSC",
        institution: "Agasti Arts, Commerce and Dadasaheb Rupwate Science College, Akole",
        period: "Jun 2019 - May 2020",
        score: "Percentage: 77.85%",
    },
    {
        title: "SSC",
        institution: "Dnyanganga Vidyaniketan Manchi Hill, Sangamner",
        period: "Jun 2015 - May 2018",
        score: "Percentage: 92.40%",
    },
];

export default function About() {
    const [activeTab, setActiveTab] = useState<"about" | "education">("about");

    return (
        <Section id="about">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        About <span className="text-gradient">Me</span>
                    </h2>

                    {/* Tabs */}
                    <div className="flex gap-4 mb-8">
                        <button
                            onClick={() => setActiveTab("about")}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                activeTab === "about"
                                    ? "bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                                    : "bg-white/5 border-transparent text-foreground/60 hover:text-foreground hover:bg-white/10"
                            )}
                        >
                            My Story
                        </button>
                        <button
                            onClick={() => setActiveTab("education")}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                activeTab === "education"
                                    ? "bg-secondary/10 border-secondary text-secondary shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                                    : "bg-white/5 border-transparent text-foreground/60 hover:text-foreground hover:bg-white/10"
                            )}
                        >
                            Education
                        </button>
                    </div>

                    <div className="relative min-h-[300px]">
                        <AnimatePresence mode="wait">
                            {activeTab === "about" ? (
                                <motion.div
                                    key="about"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4 text-foreground/80"
                                >
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
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="education"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    {educationData.map((item, index) => (
                                        <div key={index} className="relative pl-6 border-l-2 border-white/10 last:pb-0">
                                            {/* Timeline Dot */}
                                            <div className="absolute top-1.5 -left-[9px] w-4 h-4 rounded-full bg-background border-2 border-secondary box-content shadow-[0_0_10px_rgba(6,182,212,0.3)]"></div>

                                            <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                                            <p className="text-primary text-sm font-medium mb-1">{item.institution}</p>
                                            <div className="flex justify-between items-center text-sm text-foreground/60 mt-1">
                                                <span>{item.period}</span>
                                                <span className="font-mono text-secondary">{item.score}</span>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative h-full min-h-[400px] hidden md:block" // Hide on small screens to save space or adjust
                >
                    <Card className="h-full flex flex-col items-center justify-center bg-linear-to-br from-white/5 to-white/0 border-white/10 relative overflow-hidden group">
                        {/* Tech Sphere / Abstract Decoration */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                            <div className="relative w-64 h-64">
                                <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
                                <div className="absolute inset-4 border-2 border-secondary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                <div className="absolute inset-8 border border-white/10 rounded-full" />
                            </div>
                        </div>

                        <span className="text-foreground/20 text-6xl font-mono relative z-10">&lt;/&gt;</span>
                    </Card>
                    <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-primary/10 rounded-full blur-3xl"></div>
                </motion.div>
            </div>
        </Section>
    );
}
