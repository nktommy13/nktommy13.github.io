import { getAllChapters } from "@/lib/west-rewalk";
import AIPageContent from "@/components/AIPageContent";

export const metadata = {
    title: "AI Research | Yong Song",
    description: "My playpen for AI applications and research.",
};

export default function AIPage() {
    const chapters = getAllChapters();

    return <AIPageContent chapters={chapters} />;
}
