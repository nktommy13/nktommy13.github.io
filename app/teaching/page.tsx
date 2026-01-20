"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const courses = [
    {
        code: "ECOM90025",
        title: "Advanced Data Analysis",
        period: "2022-",
        description: "I learned a lot from it."
    },
    {
        code: "ECON10005",
        title: "Quantitative Methods 1",
        period: "2020-2024",
        description: "Introduction to statistics and econometrics for year 1 undergraduate students. Not hard stuff, but it is the foundation of your future study. 2020-T2 as a Tutor. Referred to 'the Three-Body Problem'."
    },
    {
        code: null,
        title: "Topics in Economics: Bayesian Econometrics",
        period: "2018-2019",
        description: "This is a special PhD subject."
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
        status: "R.I.P.",
        description: "This course is theoretical and demands very intensive matrix algebra and statistics."
    },
    {
        code: "ECOM90014",
        title: "Advanced Econometric Techniques",
        period: "2014-2018",
        status: "R.I.P.",
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
                    Courses taught at the University of Melbourne.
                </p>
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
                        {course.status && (
                            <span className="inline-block text-xs font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded mb-2">
                                {course.status}
                            </span>
                        )}
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {course.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
