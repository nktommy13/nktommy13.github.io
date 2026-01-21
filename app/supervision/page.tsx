"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap } from "lucide-react";

const students = {
    active: [
        { name: "Zheng Fan", status: "current" },
    ],
    placements: [
        { name: "Tao Sum", year: "2025", placement: "University of Melbourne" },
        { name: "Xuan Vu", year: "2024", placement: "University of Melbourne" },
        { name: "Alex Ballantyne", year: "2022", placement: "Grattan Institute" },
        { name: "Zhuo Li", year: "2021", placement: "Postdoctoral Research Fellow at Monash University" }
    ]
};

export default function SupervisionPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <h1 className="text-4xl font-serif font-bold mb-4">Supervision</h1>
                <p className="text-muted-foreground text-lg">
                    I have supervised the following PhD students.
                </p>
            </motion.div>

            <div className="space-y-12">
                {/* Active Students */}
                <motion.section
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Users className="text-primary" />
                        Current Students
                    </h2>
                    <ul className="grid gap-4 sm:grid-cols-2">
                        {students.active.map((student, idx) => (
                            <li key={idx} className="bg-muted/30 p-4 rounded-lg border border-border/50 flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="font-medium">{student.name}</span>
                            </li>
                        ))}
                    </ul>
                </motion.section>

                {/* First Placements */}
                <motion.section
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <GraduationCap className="text-accent-foreground" />
                        First Placements
                    </h2>
                    <div className="space-y-4">
                        {students.placements.map((student, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-card border border-border rounded-lg shadow-sm">
                                <div>
                                    <h3 className="font-bold text-lg">{student.name}</h3>
                                    <p className="text-primary font-medium">{student.placement}</p>
                                </div>
                                <div className="mt-2 sm:mt-0 text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded self-start sm:self-center">
                                    {student.year}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
