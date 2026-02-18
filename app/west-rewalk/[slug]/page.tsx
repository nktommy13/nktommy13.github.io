import { getChapterBySlug, getChapterSlugs, getNextChapter } from "@/lib/west-rewalk";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
    const slugs = getChapterSlugs();
    return slugs.map((file) => ({
        slug: file.replace(/\.md$/, ""),
    }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const chapter = getChapterBySlug(params.slug);
    if (!chapter) {
        return {
            title: "Chapter Not Found",
        };
    }
    return {
        title: `${chapter.title} | Yong Song`,
        description: `Read ${chapter.title} from West Rewalk series.`,
    };
}

export default async function ChapterPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const chapter = getChapterBySlug(params.slug);

    if (!chapter) {
        notFound();
    }

    // Remove the H1 title from content if it exists, as we render it separately
    // This is a simple check, assuming the title is the first line starting with #
    const contentWithoutTitle = chapter.content.replace(/^#\s+.*$/m, "").trim();

    const nextChapter = getNextChapter(params.slug);

    return (
        <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                    <Link
                        href="/ai"
                        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to AI Page
                    </Link>
                </div>

                <article className="prose prose-lg dark:prose-invert max-w-none font-serif">
                    {/* Render the extracted title nicely */}
                    <h1 className="mb-8 text-3xl md:text-4xl font-bold tracking-tight text-foreground border-b pb-4 border-border">
                        {chapter.title}
                    </h1>

                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            // Override default element styling if needed
                            p: ({ children }) => <p className="leading-relaxed mb-6 text-foreground/90">{children}</p>,
                            h2: ({ children }) => <h2 className="text-2xl font-bold mt-12 mb-6 text-foreground">{children}</h2>,
                            h3: ({ children }) => <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">{children}</h3>,
                            blockquote: ({ children }) => (
                                <blockquote className="border-l-4 border-primary pl-4 italic my-8 text-muted-foreground bg-muted/20 py-2 pr-2 rounded-r">
                                    {children}
                                </blockquote>
                            ),
                            ul: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
                            ol: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
                            li: ({ children }) => <li className="mb-1">{children}</li>,
                            strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
                            a: ({ href, children }) => (
                                <a href={href} className="text-primary hover:underline underline-offset-4 decoration-primary/50">
                                    {children}
                                </a>
                            ),
                            // Add custom component for 'img' if needed
                        }}
                    >
                        {contentWithoutTitle}
                    </ReactMarkdown>
                </article>

                <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
                    <Link
                        href="/ai"
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Overview
                    </Link>

                    {nextChapter && (
                        <Link
                            href={`/west-rewalk/${nextChapter.slug}`}
                            className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4 decoration-primary/50 transition-all group"
                        >
                            <span className="mr-2">Next: {nextChapter.title}</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
