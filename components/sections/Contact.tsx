"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function Contact() {
    return (
        <Section id="contact">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold">Let's work <br /> <span className="text-gradient">together.</span></h2>
                    <p className="text-foreground/60 text-lg">
                        I'm always open to discussing product design work or partnership opportunities.
                    </p>

                    <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-4 text-foreground/80">
                            <div className="p-3 bg-white/5 rounded-full border border-white/10">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <a href="mailto:inbox.tejasekhande@gmail.com" className="hover:text-primary transition-colors">inbox.tejasekhande@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-4 text-foreground/80">
                            <div className="p-3 bg-white/5 rounded-full border border-white/10">
                                <Phone className="w-6 h-6 text-secondary" />
                            </div>
                            <span>+91 7558739236</span>
                        </div>
                        <div className="flex items-center gap-4 text-foreground/80">
                            <div className="p-3 bg-white/5 rounded-full border border-white/10">
                                <MapPin className="w-6 h-6 text-accent" />
                            </div>
                            <span>Pune, Maharashtra</span>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    <Button type="submit" className="w-full">
                        Send Message
                    </Button>
                </motion.form>
            </div>
        </Section>
    );
}
