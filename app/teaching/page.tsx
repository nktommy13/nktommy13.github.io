"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Image from "next/image";

const courses = [
    {
        code: null,
        title: "Topics in Economics: Deep Learning",
        period: "2025",
        description: "Deep learning methods and their links to economics. Personalised to each student. PhD Only."
    },
    {
        code: "ECOM90025",
        title: "Advanced Data Analysis",
        period: "2022-",
        description: "A SOTA subject encouraging mutual learning. Real world applications and industrial internship opportunites."
    },
    {
        code: "ECON10005",
        title: "Quantitative Methods 1",
        period: "2020-2024",
        description: "Introduction to statistics and econometrics for year 1 undergraduate students. Not hard stuff, but it is the foundation of your future study."
    },
    {
        code: null,
        title: "Topics in Economics: Bayesian Econometrics",
        period: "2018-2019",
        description: "PhD Only."
    },
    {
        code: "ECON90055",
        title: "Computational Economics",
        period: "2019-2021",
        description: "Optimisation, programming, simulation and statistical methods. Web scraping was added in 2021."
    },
    {
        code: "ECOM40006/ECOM90013",
        title: "Econometric Techniques",
        period: "2014-2019",
        description: "This course is theoretical and demands very intensive matrix algebra and statistics."
    },
    {
        code: "ECOM90014",
        title: "Advanced Econometric Techniques",
        period: "2014-2018",
        description: "I teach Bayesian Econometrics in this course. Requires high skills in both mathematics and programming."
    }
];

export default function TeachingPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <h1 className="text-4xl font-serif font-bold mb-4">Teaching</h1>
                <p className="text-muted-foreground text-lg">
                    I have taught the following courses.
                </p>

                <blockquote className="mt-6 border-l-4 border-primary pl-4 italic text-muted-foreground text-lg">
                    &quot; I do not write reference letter if I do not know you in person or your mark is low.&quot;
                </blockquote>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
                {courses.map((course, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all hover:border-accent/50 group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-primary/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <BookOpen size={24} />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                                {course.period}
                            </span>
                        </div>
                        {course.code && (
                            <div className="text-sm font-semibold text-accent-foreground mb-1">
                                {course.code}
                            </div>
                        )}
                        <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {course.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Funny Section */}
            <section className="mt-24 pt-12 border-t border-border/50">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center gap-8"
                >
                    <h2 className="text-2xl font-serif font-bold">Funny Things</h2>

                    <div className="max-w-2xl space-y-6">
                        <p className="text-xl font-medium text-muted-foreground italic font-serif">
                            &quot;If you think you can pass my exam by intuition&quot;
                        </p>

                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-border">
                            <Image
                                src="/assets/fall1.gif"
                                alt="Funny gif about passing exams"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>

                    <div className="max-w-2xl space-y-6">
                        <p className="text-xl font-medium text-muted-foreground italic font-serif">
                            &quot;You may fail if you do not study hard. Then, you may fail again in the makeup exam, too.&quot;
                        </p>

                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-border">
                            <Image
                                src="/assets/fall2.gif"
                                alt="Funny gif about passing exams"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
