"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import Card from "../ui/Card";

const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Go", "GraphQL"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Postman"] },
];

export default function Skills() {
    return (
        <Section id="skills" className="bg-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
                    <p className="text-foreground/60">The technologies I work with to build robust applications.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {skills.map((skillGroup, index) => (
                        <Card key={index} className="h-full">
                            <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-foreground/80 hover:bg-white/10 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
