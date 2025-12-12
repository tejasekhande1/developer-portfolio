"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Terminal, GitBranch, LayoutDashboard, Wrench } from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Button from "../ui/Button";

const projects = [
    {
        id: "git-visualizer",
        title: "Git Repository Visualizer",
        description: "Real-time Git analysis tool transforming raw data into interactive insights. Explore commit history, contributors, and repository structure.",
        tags: ["Next.js", "Go", "PostgreSQL"],
        links: { demo: "#", code: "#" }, // Placeholder links
        type: "git"
    },
    {
        id: "green-vegease",
        title: "Green-Vegease Backend",
        description: "E-commerce backend for grocery delivery. Handles auth, inventory, orders, and payments with a monolithic Node.js architecture.",
        tags: ["Node.js", "PostgreSQL", "TypeScript", "Drizzle", "Zod"],
        links: { demo: "#", code: "#" },
        type: "backend"
    },
    {
        id: "profit-lens",
        title: "ProfitLens",
        description: "Intuitive admin dashboard for monitoring sales and operational insights. Features real-time analytics and role-based management.",
        tags: ["React.js", "Tailwind", "TypeScript"],
        links: { demo: "#", code: "#" },
        type: "dashboard"
    },
];

const GitVisualization = () => (
    <div className="w-full h-full bg-[#0d1117] p-3 text-xs font-mono flex flex-col gap-3 relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between text-white/50 border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
                <GitBranch className="w-3 h-3" />
                <span className="text-[10px] font-bold tracking-wider">PROJECT ANALYTICS</span>
            </div>
            <div className="flex gap-2">
                <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[8px] text-green-400">Live</span>
                </div>
            </div>
        </div>

        {/* Heatmap Section */}
        <div className="space-y-1">
            <div className="text-[9px] uppercase tracking-wider text-white/30">Contribution Activity</div>
            <div className="flex gap-[2px] opacity-80">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="flex flex-col gap-[2px]">
                        {Array.from({ length: 4 }).map((_, j) => {
                            // Use deterministic value instead of Math.random() to prevent hydration mismatch
                            const intensity = ((i * 7 + j * 3 + i * j) % 19) / 19;
                            let color = "bg-white/5"; // Empty
                            if (intensity > 0.8) color = "bg-[#2da44e]"; // High
                            else if (intensity > 0.5) color = "bg-[#006d32]"; // Medium
                            else if (intensity > 0.3) color = "bg-[#0e4429]"; // Low

                            return (
                                <motion.div
                                    key={`${i}-${j}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: i * 0.02 + j * 0.02 }}
                                    className={`w-2 h-2 rounded-[1px] ${color}`}
                                />
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>

        {/* File Analysis & Insights */}
        <div className="flex gap-2 h-full">
            {/* File Hotspots */}
            <div className="flex-1 bg-white/5 rounded p-2 flex flex-col gap-1.5">
                <div className="text-[9px] uppercase tracking-wider text-white/30 border-b border-white/5 pb-1 flex justify-between">
                    <span>Hotspots</span>
                    <span>Fixes</span>
                </div>
                <div className="space-y-1.5">
                    {[
                        { name: "auth-utils.ts", fixes: 18, severity: "high" },
                        { name: "payment_gw.go", fixes: 8, severity: "medium" },
                        { name: "main.tsx", fixes: 2, severity: "low" }
                    ].map(file => (
                        <div key={file.name} className="flex items-center justify-between group cursor-default">
                            <span className="text-[9px] text-white/70 truncate max-w-[70px] group-hover:text-blue-400 transition-colors">{file.name}</span>
                            <div className="flex items-center gap-1.5">
                                <span className={`text-[8px] px-1 rounded ${file.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                                    file.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-white/10 text-white/50'
                                    }`}>
                                    {file.fixes}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Insights Panel */}
            <div className="flex-1 flex flex-col gap-2">
                {/* Refactor Suggestion Card */}
                <div className="bg-blue-500/5 border border-blue-500/20 rounded p-2 flex flex-col justify-center h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-1 opacity-20">
                        <Wrench className="w-8 h-8 text-blue-500" />
                    </div>
                    <div className="text-[9px] text-blue-300 font-bold mb-1">AI INSIGHT</div>
                    <p className="text-[9px] text-blue-200/70 leading-relaxed">
                        High churn detected in <b className="text-white">auth-utils.ts</b>.
                        Suggest refactoring module to reduce complexity.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const BackendVisualization = () => (
    <div className="w-full h-full bg-[#1e1e1e] p-4 font-mono text-[10px] sm:text-xs text-green-400 overflow-hidden relative">
        <div className="flex items-center gap-2 mb-2 text-white/50 border-b border-white/10 pb-2">
            <Terminal className="w-3 h-3" />
            <span>server-logs</span>
        </div>
        <div className="space-y-1">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                &gt; npm start
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-blue-400"
            >
                &gt; Server listening on port 8000 🚀
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, repeat: Infinity, repeatDelay: 4 }}
            >
                &gt; POST /api/auth/login 200 OK
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, repeat: Infinity, repeatDelay: 4 }}
                className="text-yellow-400"
            >
                &gt; UPDATE inventory SET stock = ...
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, repeat: Infinity, repeatDelay: 4 }}
            >
                &gt; GET /api/products 200 OK
            </motion.div>
        </div>
        {/* Cursor Blink */}
        <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2 h-4 bg-green-400 mt-1"
        />
    </div>
);

const DashboardVisualization = () => (
    <div className="w-full h-full bg-slate-900 p-3 relative overflow-hidden flex flex-col gap-2">
        {/* Fake Header/Nav */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2 text-white/70">
                <LayoutDashboard className="w-3 h-3" />
                <span className="text-[10px] font-bold">Admin Panel</span>
            </div>
            <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-2 gap-2 h-full">
            {/* Widget 1: Line/Area Chart */}
            <div className="bg-white/5 rounded p-2 flex flex-col relative overflow-hidden col-span-1">
                <div className="text-[8px] text-white/40 mb-1">Revenue</div>
                <div className="text-xs font-bold text-white mb-2">₹42.5k <span className="text-green-400 text-[8px]">+12%</span></div>
                <div className="mt-auto h-8 relative w-full">
                    {/* SVG Area Chart */}
                    <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <motion.path
                            d="M0 40 L0 30 C 20 20, 40 35, 60 15 C 80 5, 100 20, 100 20 L 100 40 Z"
                            fill="url(#gradient)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                        <motion.path
                            d="M0 30 C 20 20, 40 35, 60 15 C 80 5, 100 20, 100 20"
                            fill="none"
                            stroke="#8b5cf6"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                    </svg>
                </div>
            </div>

            {/* Widget 2: Circular Progress */}
            <div className="bg-white/5 rounded p-2 flex flex-col items-center justify-center col-span-1">
                <div className="relative w-10 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#333" strokeWidth="3" />
                        <motion.path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#06b6d4"
                            strokeWidth="3"
                            strokeDasharray="100, 100"
                            initial={{ strokeDashoffset: 100 }}
                            whileInView={{ strokeDashoffset: 25 }} // 75%
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </svg>
                    <span className="absolute text-[8px] font-bold">75%</span>
                </div>
                <div className="text-[8px] text-white/40 mt-1">Target</div>
            </div>

            {/* Widget 3: Bar Chart (Bottom) */}
            <div className="bg-white/5 rounded p-2 col-span-2 flex items-end gap-1 overflow-hidden h-12">
                {[40, 70, 45, 90, 60, 80, 50, 95, 60, 75, 40, 95].map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 0.8, delay: i * 0.05 }}
                        className="flex-1 bg-primary/40 rounded-t-[1px] hover:bg-primary/80 transition-colors"
                    />
                ))}
            </div>
        </div>
    </div>
);

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
                    <Card
                        key={project.id}
                        className="flex flex-col h-full bg-transparent p-0 overflow-hidden" // P-0 to let visualization fill top
                        data-cursor="card"
                    >
                        {/* Visualization Header */}
                        <div className="h-48 border-b border-white/10 relative group bg-[#000212]">
                            {project.type === "git" && <GitVisualization />}
                            {project.type === "backend" && <BackendVisualization />}
                            {project.type === "dashboard" && <DashboardVisualization />}


                        </div>

                        <div className="p-6 flex flex-col grow">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-foreground/70 mb-4 grow text-sm leading-relaxed">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
