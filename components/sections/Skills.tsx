"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import Card from "../ui/Card";
import {
    Monitor,
    Server,
    Cloud,
    Database,
    Wrench,
    GitBranch
} from "lucide-react";

const skills = [
    {
        category: "Frontend",
        icon: <Monitor className="w-6 h-6 text-primary" />,
        items: ["Next.js", "React.js", "Angular", "Tailwind", "Zustand", "RxJS"]
    },
    {
        category: "Backend",
        icon: <Server className="w-6 h-6 text-primary" />,
        items: ["Django", "Node.js", "Celery"]
    },
    {
        category: "Cloud & DevOps",
        icon: <Cloud className="w-6 h-6 text-primary" />,
        items: ["AWS (EC2, S3)", "CI/CD Automation", "Docker", "Nginx"]
    },
    {
        category: "Databases",
        icon: <Database className="w-6 h-6 text-primary" />,
        items: ["PostgreSQL", "Redis"]
    },
    {
        category: "Developer Tools",
        icon: <Wrench className="w-6 h-6 text-primary" />,
        items: ["Postman", "JIRA", "WebStorm", "PyCharm", "VS Code"]
    },
    {
        category: "Version Control",
        icon: <GitBranch className="w-6 h-6 text-primary" />,
        items: ["Git", "GitHub", "GitLab", "Pre-Push Hooks (Husky, Pre-commit)"]
    }
];

export default function Skills() {
    return (
        <Section id="skills" className="bg-white/5">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
                    <p className="text-foreground/60">The technologies I work with to build robust applications.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skillGroup, index) => (
                        <Card key={index} className="h-full hover:border-primary/50 transition-colors duration-300">
                            <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-2">
                                {skillGroup.icon}
                                <h3 className="text-xl font-bold text-foreground">
                                    {skillGroup.category}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {skillGroup.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-foreground/80 hover:bg-secondary/10 hover:border-secondary/30 hover:text-secondary transition-all cursor-default"
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
