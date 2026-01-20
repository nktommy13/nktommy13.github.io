export function Footer() {
    return (
        <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm text-muted-foreground text-center md:text-left">
                    © {new Date().getFullYear()} Yong Song. All rights reserved.
                </div>
                <div className="flex space-x-6 text-sm font-medium text-muted-foreground">
                    <a
                        href="https://scholar.google.com/citations?user=wzgrhxoAAAAJ&hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                    >
                        Google Scholar
                    </a>
                    <a
                        href="mailto:yong.song@unimelb.edu.au"
                        className="hover:text-primary transition-colors"
                    >
                        Contact
                    </a>
                    {/* Add more social links here if needed */}
                </div>
            </div>
        </footer>
    );
}
