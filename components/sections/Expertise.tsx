"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Layout, Server, GitCommit, Layers, Cloud, CreditCard } from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";

export default function Expertise() {
    return (
        <Section id="expertise">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">
                Technical <span className="text-gradient">Expertise</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* 1. Reusable Components */}
                <ExpertiseCard
                    title="Reusable Components"
                    description="Building modular, scalable UI libraries."
                    icon={<Layers className="w-6 h-6 text-blue-400" />}
                >
                    <div className="h-40 flex items-center justify-center relative">
                        {/* Abstract Component Tree / Lego Stacking */}
                        <div className="relative w-32 h-32 flex flex-col-reverse items-center justify-end gap-1">
                            <motion.div
                                className="w-32 h-8 bg-blue-500/20 border border-blue-500/50 rounded-lg flex items-center justify-center text-[10px] text-blue-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                            >
                                Page Layout
                            </motion.div>
                            <div className="flex gap-1">
                                <motion.div
                                    className="w-16 h-8 bg-purple-500/20 border border-purple-500/50 rounded-lg flex items-center justify-center text-[10px] text-purple-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    Sidebar
                                </motion.div>
                                <motion.div
                                    className="w-16 h-8 bg-purple-500/20 border border-purple-500/50 rounded-lg flex items-center justify-center text-[10px] text-purple-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    Feed
                                </motion.div>
                            </div>
                            <div className="flex gap-1 justify-center w-full">
                                {[1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="w-8 h-8 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center justify-center"
                                        initial={{ opacity: 0, y: 20, scale: 0 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ delay: 0.5 + (i * 0.1), type: "spring" }}
                                    >
                                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ExpertiseCard>

                {/* 2. Modern UI & Responsive */}
                <ExpertiseCard
                    title="Modern & Responsive UI"
                    description="Pixel-perfect experiences on any device."
                    icon={<Layout className="w-6 h-6 text-pink-400" />}
                >
                    <div className="h-40 flex items-center justify-center">
                        <motion.div
                            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden relative shadow-2xl"
                            animate={{
                                width: [100, 180, 180, 100],
                                height: [160, 120, 120, 160],
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatDelay: 2,
                                duration: 4,
                                ease: "easeInOut"
                            }}
                        >
                            {/* Fake UI Header */}
                            <div className="h-4 bg-pink-500/20 w-full mb-2" />
                            {/* Fake UI Content */}
                            <div className="p-2 space-y-2">
                                <motion.div
                                    className="h-2 bg-white/10 rounded w-3/4"
                                    layout
                                />
                                <motion.div
                                    className="h-2 bg-white/10 rounded w-1/2"
                                    layout
                                />
                                <div className="flex gap-2 pt-2">
                                    <motion.div className="h-10 w-full bg-white/5 rounded" layout />
                                    <motion.div className="h-10 w-full bg-white/5 rounded" layout />
                                </div>
                            </div>

                            {/* Device Label */}
                            <motion.div
                                className="absolute bottom-2 left-0 right-0 text-center text-[9px] text-white/40 font-mono"
                                animate={{ opacity: [1, 0, 0, 1] }}
                                transition={{ duration: 4, times: [0, 0.4, 0.6, 1] }}
                            >
                                Mobile
                            </motion.div>
                            <motion.div
                                className="absolute bottom-2 left-0 right-0 text-center text-[9px] text-white/40 font-mono"
                                animate={{ opacity: [0, 1, 1, 0] }}
                                transition={{ duration: 4, times: [0, 0.4, 0.6, 1] }}
                            >
                                Desktop
                            </motion.div>
                        </motion.div>
                    </div>
                </ExpertiseCard>

                {/* 3. Database Optimization */}
                <ExpertiseCard
                    title="Database Optimization"
                    description="Efficient querying and indexing strategies."
                    icon={<Database className="w-6 h-6 text-yellow-400" />}
                >
                    <div className="h-40 flex flex-col items-center justify-center gap-4">
                        <div className="w-full max-w-[200px] space-y-3">
                            {/* Slow Query */}
                            <div className="space-y-1">
                                <div className="flex justify-between text-[10px] text-red-400 font-mono">
                                    <span>Query (Unoptimized)</span>
                                    <span>2.4s</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-red-500/50"
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: "90%" }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                    />
                                </div>
                            </div>

                            {/* Fast Query */}
                            <div className="space-y-1">
                                <div className="flex justify-between text-[10px] text-green-400 font-mono">
                                    <span>Query (Indexed)</span>
                                    <span>40ms</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-green-500"
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: "10%" }}
                                        transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    className="p-1.5 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20"
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                                >
                                    <Database size={12} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </ExpertiseCard>

                {/* 4. Background Tasks (Celery) */}
                <ExpertiseCard
                    title="Background Tasks"
                    description="Asynchronous processing with Celery/Redis."
                    icon={<Server className="w-6 h-6 text-orange-400" />}
                >
                    <div className="h-40 flex items-center justify-center relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/5 rounded border border-white/10 text-[10px] text-foreground/60">
                            Queue
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-orange-500/10 rounded border border-orange-500/30 text-[10px] text-orange-400">
                            Worker
                        </div>

                        {/* Task Dots */}
                        <div className="absolute left-16 right-16 top-1/2 h-1 bg-white/5 -translate-y-1/2 overflow-visible">
                            {[0, 1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    className="absolute top-1/2 -mt-1.5 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                                    initial={{ x: 0, opacity: 0 }}
                                    animate={{
                                        x: [0, 100, 180],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2.5,
                                        delay: i * 0.6,
                                        times: [0, 0.8, 1],
                                        ease: "linear"
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </ExpertiseCard>

                {/* 5. Deployments */}
                <ExpertiseCard
                    title="Deployments"
                    description="CI/CD pipelines for automated shipping."
                    icon={<Cloud className="w-6 h-6 text-cyan-400" />}
                >
                    <div className="h-40 flex flex-col items-center justify-center gap-4">
                        <div className="flex items-center gap-2">
                            {['Build', 'Test', 'Deploy'].map((stage, i) => (
                                <div key={stage} className="flex items-center gap-2">
                                    <motion.div
                                        className={`px-3 py-1 rounded text-[10px] font-bold border ${i === 2 ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/50" : "bg-white/5 text-foreground/40 border-white/10"
                                            }`}
                                        animate={{
                                            borderColor: i === 2 ? ["rgba(6,182,212,0.5)", "rgba(6,182,212,1)", "rgba(6,182,212,0.5)"] : undefined,
                                            boxShadow: i === 2 ? ["0 0 0px rgba(6,182,212,0)", "0 0 15px rgba(6,182,212,0.3)", "0 0 0px rgba(6,182,212,0)"] : undefined
                                        }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                    >
                                        {stage}
                                    </motion.div>
                                    {i < 2 && <div className="h-[2px] w-4 bg-white/10" />}
                                </div>
                            ))}
                        </div>

                        <motion.div
                            className="w-full max-w-[200px] h-1.5 bg-white/5 rounded-full overflow-hidden"
                        >
                            <motion.div
                                className="h-full bg-cyan-400"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            />
                        </motion.div>
                        <div className="text-[10px] text-cyan-400/80 font-mono">
                            🚀 Shipped to Production
                        </div>
                    </div>
                </ExpertiseCard>

                {/* 6. Pre-push Hooks */}
                <ExpertiseCard
                    title="Code Quality"
                    description="Automated formatting with Prettier/Black."
                    icon={<GitCommit className="w-6 h-6 text-green-400" />}
                >
                    <div className="h-40 p-4 bg-[#0d1117] rounded-lg border border-white/5 font-mono text-[10px] leading-relaxed overflow-hidden flex flex-col">
                        <div className="flex gap-1.5 mb-2">
                            <div className="w-2 h-2 rounded-full bg-red-500/20" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                            <div className="w-2 h-2 rounded-full bg-green-500/20" />
                        </div>
                        <div className="text-gray-400">
                            $ git push origin main
                        </div>
                        <div className="text-blue-400">
                            Running pre-push hooks...
                        </div>
                        <div className="space-y-0.5 mt-1">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-green-400 flex items-center gap-1"
                            >
                                ✓ Prettier (staged files)
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                                className="text-green-400 flex items-center gap-1"
                            >
                                ✓ Black (python files)
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.5 }}
                                className="text-white mt-1"
                            >
                                Pushing to repository...
                            </motion.div>
                        </div>
                    </div>
                </ExpertiseCard>

                {/* 7. Razorpay Integration */}
                <ExpertiseCard
                    title="Payment Integration"
                    description="Secure payments with Razorpay/Stripe."
                    icon={<CreditCard className="w-6 h-6 text-indigo-400" />}
                >
                    <RazorpayVisualization />
                </ExpertiseCard>

            </div>
        </Section>
    );
}

function RazorpayVisualization() {
    const [status, setStatus] = React.useState<"idle" | "processing" | "success">("idle");

    const handlePay = () => {
        if (status !== "idle") return;
        setStatus("processing");
        setTimeout(() => setStatus("success"), 2000);
        setTimeout(() => setStatus("idle"), 5000);
    };

    return (
        <div className="h-40 flex items-center justify-center bg-[#0d1424] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

            <AnimatePresence mode="wait">
                {status === "idle" && (
                    <motion.button
                        key="pay-btn"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handlePay}
                        className="relative z-10 bg-[#3395ff] hover:bg-[#2b85e4] text-white px-6 py-2 rounded shadow-[0_4px_14px_0_rgba(51,149,255,0.39)] font-medium text-sm flex items-center gap-2"
                    >
                        <span>Pay ₹4,500</span>
                    </motion.button>
                )}

                {status === "processing" && (
                    <motion.div
                        key="processing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-3 relative z-10"
                    >
                        <div className="w-8 h-8 rounded-full border-2 border-[#3395ff] border-t-transparent animate-spin" />
                        <span className="text-xs text-[#3395ff] font-medium">Processing...</span>
                    </motion.div>
                )}

                {status === "success" && (
                    <motion.div
                        key="success"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        className="flex flex-col items-center gap-2 relative z-10"
                    >
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                            <motion.svg
                                viewBox="0 0 24 24"
                                className="w-6 h-6 text-white"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <motion.path
                                    d="M20 6L9 17l-5-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </motion.svg>
                        </div>
                        <span className="text-xs text-green-400 font-bold">Payment Successful</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function ExpertiseCard({ title, description, icon, children }: { title: string, description: string, icon: React.ReactNode, children: React.ReactNode }) {
    return (
        <Card className="p-0 overflow-hidden bg-white/5 border-white/10 hover:border-primary/30 transition-colors group">
            <div className="p-6 pb-2">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white/5 rounded-lg">
                        {icon}
                    </div>
                    <h3 className="font-bold text-lg text-foreground">{title}</h3>
                </div>
                <p className="text-sm text-foreground/60">{description}</p>
            </div>

            {/* Visualization Area */}
            <div className="mt-4 p-4 pt-0">
                <div className="w-full bg-black/20 rounded-xl overflow-hidden border border-white/5">
                    {children}
                </div>
            </div>
        </Card>
    );
}
