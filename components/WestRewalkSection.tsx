"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Map, BookOpen } from "lucide-react";

interface Chapter {
    slug: string;
    title: string;
}

interface WestRewalkSectionProps {
    chapters: Chapter[];
}

export default function WestRewalkSection({ chapters }: WestRewalkSectionProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Ensure we have exactly 4 items for the 1x4 grid, filling with placeholders if needed
    const gridItems = Array(4).fill(null).map((_, index) => {
        return chapters[index] || null;
    });

    return (
        <section>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between group"
            >
                <div className="flex flex-col items-start text-left">
                    <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                        <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
                        一路往西再往西
                    </h2>
                    <p className="text-sm text-muted-foreground ml-10">
                        个人爱好， 同时检测 antigravity+Gemini 3.0 pro的上下文能力
                    </p>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                            {gridItems.map((chapter, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="h-full"
                                >
                                    {chapter ? (
                                        <Link href={`/west-rewalk/${chapter.slug}`} className="block h-full">
                                            <div className="bg-card border border-border/50 rounded-lg p-6 h-full shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between group">
                                                <div>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                                                            Chapter {index + 1}
                                                        </span>
                                                        <BookOpen className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
                                                    </div>
                                                    <h3 className="text-lg font-medium leading-snug line-clamp-3 group-hover:text-primary transition-colors">
                                                        {chapter.title}
                                                    </h3>
                                                </div>
                                                <div className="mt-4 pt-4 border-t border-border/30 flex items-center text-xs text-muted-foreground group-hover:text-primary transition-colors">
                                                    Read Chapter <span className="ml-1">→</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div className="bg-muted/30 border border-border/30 rounded-lg p-6 h-full flex flex-col items-center justify-center text-center border-dashed">
                                            <Map className="w-8 h-8 text-muted-foreground/30 mb-2" />
                                            <p className="text-sm text-muted-foreground/50 font-medium">Coming Soon</p>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
