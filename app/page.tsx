"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-theme(spacing.20))]">
      <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <main className="max-w-4xl mx-auto space-y-24">

          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mt-12 pb-12">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 text-center md:text-left space-y-6"
            >
              <div className="space-y-2">
                <h2 className="text-primary font-medium tracking-wide text-sm uppercase">
                  Associate Professor of Economics
                </h2>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground tracking-tight">
                  Yong Song
                </h1>
                <p className="text-xl text-muted-foreground font-light">
                  University of Melbourne
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0">
                My research focuses on Bayesian nonparametric modelling, financial econometrics, time series analysis, and empirical macroeconomics. I am interested in applying machine learning techniques to economic problems.
              </p>
              <blockquote className="mt-6 border-l-4 border-primary pl-4 italic text-muted-foreground text-lg">
                &quot;天堂有路你不走，学海无涯苦作舟&quot;
              </blockquote>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <Link
                  href="/research"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
                >
                  View Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/teaching"
                  className="inline-flex items-center justify-center px-6 py-3 border border-input bg-background/50 backdrop-blur-sm text-base font-medium rounded-md text-foreground hover:bg-accent transition-all hover:text-accent-foreground"
                >
                  Teaching
                </Link>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-shrink-0 relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-background ring-1 ring-border/20">
                <Image
                  src="/assets/profile.jpg"
                  alt="Yong Song"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {/* Decorative background blob */}
              <div className="absolute -z-10 top-4 -right-4 w-full h-full bg-primary/10 rounded-2xl blur-xl" />
            </motion.div>

          </div>

        </main>
      </div>
    </div>
  );
}
