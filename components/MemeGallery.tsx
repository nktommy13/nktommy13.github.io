"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export function MemeGallery() {
    return (
        <section id="memes" className="py-24 border-t border-border/50 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-serif font-bold mb-4">Meme Gallery</h2>
                    <p className="text-muted-foreground">
                        A growing collection of my favourite economic humour.
                    </p>
                </motion.div>

                {/* Empty State / Placeholder */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {/* Example 1 - Placeholder */}
                    <div className="aspect-square rounded-2xl bg-muted/30 border-2 border-dashed border-border flex flex-col items-center justify-center p-6 text-center hover:bg-muted/50 transition-colors">
                        <span className="text-4xl mb-4">📉</span>
                        <p className="font-medium text-muted-foreground">Meme #1</p>
                        <p className="text-xs text-muted-foreground mt-2">Coming soon...</p>
                    </div>

                    {/* Example 2 - Placeholder */}
                    <div className="aspect-square rounded-2xl bg-muted/30 border-2 border-dashed border-border flex flex-col items-center justify-center p-6 text-center hover:bg-muted/50 transition-colors">
                        <span className="text-4xl mb-4">📈</span>
                        <p className="font-medium text-muted-foreground">Meme #2</p>
                        <p className="text-xs text-muted-foreground mt-2">Coming soon...</p>
                    </div>

                    {/* Add New Instruction Card */}
                    <div className="aspect-square rounded-2xl bg-primary/5 border-2 border-primary/20 flex flex-col items-center justify-center p-6 text-center">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                            <Plus size={24} />
                        </div>
                        <p className="font-semibold text-primary">Add Your Memes</p>
                        <p className="text-xs text-muted-foreground mt-2 max-w-[200px]">
                            Add images to <code>public/assets</code> and update <code>components/MemeGallery.tsx</code>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
