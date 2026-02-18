import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'west_rewalk');

export function getChapterSlugs() {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }
    return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md'));
}

export function getChapterBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Extract title from the first line (assuming it starts with # )
    const titleMatch = fileContents.match(/^#\s+(.*)/);
    const title = titleMatch ? titleMatch[1] : realSlug;

    // Remove the title from the content if desired, or keep it. 
    // For now, we'll keep the raw content and let the renderer handle it.

    return {
        slug: realSlug,
        title,
        content: fileContents,
    };
}

export function getAllChapters() {
    const slugs = getChapterSlugs();
    const chapters = slugs.map((slug) => getChapterBySlug(slug)).filter((chapter): chapter is NonNullable<typeof chapter> => chapter !== null);
    // Sort by slug to ensure order (Chapter_01, Chapter_02, etc.)
    return chapters.sort((a, b) => (a.slug > b.slug ? 1 : -1));
}

export function getNextChapter(currentSlug: string) {
    const allChapters = getAllChapters();
    const currentIndex = allChapters.findIndex((chapter) => chapter.slug === currentSlug);

    if (currentIndex === -1 || currentIndex === allChapters.length - 1) {
        return null;
    }

    return allChapters[currentIndex + 1];
}
