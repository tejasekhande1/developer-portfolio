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
        period: "Jul 2020 - Jun 2024",
        score: "9.23 CGPA",
    },
    {
        title: "HSC",
        institution: "Agasti Arts, Commerce and Dadasaheb Rupwate Science College, Akole",
        period: "Jun 2018 - Feb 2020",
        score: "77.85%",
    },
    {
        title: "SSC",
        institution: "Dnyanganga Vidyaniketan Manchi Hill, Sangamner",
        period: "Jun 2015 - Mar 2018",
        score: "92.40%",
    },
];

const experienceData = [
    {
        id: "noovosoft",
        company: "Noovosoft Technologies LLP",
        fullName: "Noovosoft Technologies LLP",
        title: "Application Developer",
        period: "Aug 2023 - Present",
        location: "Pune",
        description: [
            "Developed and optimized full-stack web applications using Angular, Next.js and Django, improving page load speed by 40% and user retention by 25%.",
            "Built modular, reusable components and collaborated with design and backend teams to deliver responsive interfaces.",
            "Implemented database optimization and a localization framework supporting 5+ languages, ensuring scalability for 10,000+ users.",
            "Achieved 98% test coverage, reducing bugs by 40%, and recognized as the second-highest frontend contributor for consistent delivery of high-quality, maintainable code."
        ],
        skills: ["Next.js", "Angular", "Django", "TypeScript", "PostgreSQL", "Tailwind CSS"]
    },
    {
        id: "core2web",
        company: "Core2web Technologies",
        fullName: "Core2web Technologies",
        title: "Mentor",
        period: "Oct 2022 - Aug 2023",
        location: "Pune",
        description: [
            "Mentored students in core programming concepts including Java, Python, and Data Structures.",
            "Guided students through project development life cycles and code reviews.",
            "Conducted technical sessions and workshops."
        ],
        skills: ["Java", "C++", "Data Structures", "Operating Systems", "Teaching", "Code Review"]
    }
];

export default function About() {
    const [activeTab, setActiveTab] = useState<"about" | "education" | "experience">("about");
    const [activeExperience, setActiveExperience] = useState(0);

    const currentExperience = experienceData[activeExperience];

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

                    {/* Main Tabs */}
                    <div className="flex flex-wrap gap-4 mb-8">
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
                            onClick={() => setActiveTab("experience")}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                activeTab === "experience"
                                    ? "bg-accent/10 border-accent text-accent shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                                    : "bg-white/5 border-transparent text-foreground/60 hover:text-foreground hover:bg-white/10"
                            )}
                        >
                            Experience
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
                            ) : activeTab === "education" ? (
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
                                            <div className="flex justify-between items-center text-xs text-foreground/60 mt-1">
                                                <span>{item.period}</span>
                                                <span className="">{item.score}</span>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="experience"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    {/* Company Tabs */}
                                    <div className="flex space-x-1 bg-white/5 p-2 rounded-xl mb-6 w-fit">
                                        {experienceData.map((exp, idx) => (
                                            <button
                                                key={exp.id}
                                                onClick={() => setActiveExperience(idx)}
                                                className={cn(
                                                    "px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300",
                                                    activeExperience === idx
                                                        ? "bg-accent text-white shadow-lg"
                                                        : "text-foreground/60 hover:text-foreground hover:bg-white/5"
                                                )}
                                            >
                                                {exp.company}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Experience Details */}
                                    <motion.div
                                        key={currentExperience.id}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="text-xl font-bold text-foreground mb-1">{currentExperience.title}</h3>
                                        <p className="text-accent text-sm font-medium mb-4">
                                            {currentExperience.fullName}
                                            <span className="text-foreground/40 font-normal ml-2">| {currentExperience.location}</span>
                                        </p>

                                        <div className="text-xs text-foreground/60 font-mono mb-4 bg-white/5 px-3 py-1 rounded w-fit border border-white/10">
                                            {currentExperience.period}
                                        </div>

                                        <ul className="space-y-2 mb-6">
                                            {currentExperience.description.map((desc, i) => (
                                                <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                                                    <span className="text-accent mt-1.5">▹</span>
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {currentExperience.skills.map((skill) => (
                                                <span key={skill} className="px-2 py-1 text-xs rounded bg-accent/10 border border-accent/20 text-accent">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
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
                    className="relative h-full min-h-[400px] hidden md:flex items-start justify-center pt-10"
                >

                    <Card className="relative z-10 w-full max-w-md p-6 bg-white dark:bg-[#000212]/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors duration-500">
                        {/* Card Header (Mac OS window style) */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>

                        {/* Code Content */}
                        <div className="font-mono text-sm leading-relaxed">
                            <div className="text-pink-500 mb-2">const <span className="text-blue-400">techStack</span> = <span className="text-yellow-400">[</span></div>

                            <div className="pl-4 flex flex-wrap gap-2 gap-y-3 mb-2">
                                {["Angular", "React", "Next.js", "Django", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "AWS", "Docker"].map((tech) => (
                                    <span key={tech} className="px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-xs hover:bg-secondary/20 transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="text-yellow-400">];</div>
                        </div>

                        {/* Subtle Glow */}
                        <div className="absolute -z-10 -right-20 -bottom-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors duration-500" />
                    </Card>

                    {/* Background decoration */}
                    <div className="absolute -z-10 w-full h-full bg-primary/5 rounded-full blur-3xl scale-75"></div>
                </motion.div>
            </div>
        </Section>
    );
}
