"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function Contact() {
    return (
        <Section id="contact" className="py-10"> {/* Significantly reduced padding */}
            <div className="max-w-lg mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Let's <span className="text-gradient">Connect</span></h2>
                    <p className="text-foreground/60 text-sm">
                        Open for opportunities. Drop me a line!
                    </p>
                </motion.div>

                <div className="flex justify-center">
                    <a
                        href="mailto:inbox.tejasekhande@gmail.com"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                    >
                        <Mail className="w-5 h-5" /> Say Hello
                    </a>
                </div>
            </div>
        </Section>
    );
}
