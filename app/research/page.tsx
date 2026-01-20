"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const papers = [
    {
        title: "Bayesian inference for dynamic spatial quantile models with interactive effects",
        authors: ["Tomohiro Ando", "Jushan Bai", "Kunpeng Li", "Yong Song"],
        year: "Working Paper",
        journal: null,
        links: {
            ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5161549"
        }
    },
    {
        title: "Atlantic Trade and the Decline of Conflict in Europe",
        authors: ["Reshad Ahsan", "Laura Panza", "Yong Song"],
        year: "2024",
        journal: "Economic Journal",
        links: {
            ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3503195",
            doi: "https://doi.org/10.1093/ej/ueae102",
            vox: "https://voxeu.org/article/atlantic-trade-and-decline-conflict-europe"
        }
    },
    {
        title: "Identification and forecasting of bull and bear markets using multivariate returns",
        authors: ["John Maheu", "Jia Liu", "Yong Song"],
        year: "2024",
        journal: "Journal of Applied Econometrics, 39(5), 723-745",
        links: {
            wiley: "https://onlinelibrary.wiley.com/doi/abs/10.1002/jae.3048"
        }
    },
    {
        title: "Bull and Bear Markets During the COVID-19 Pandemic",
        authors: ["John Maheu", "Thomas McCurdy", "Yong Song"],
        year: "2021",
        journal: "Finance Research Letters, Volume 42",
        links: {
            arxiv: "https://arxiv.org/abs/2012.01623"
        }
    },
    {
        title: "Sparse Change-point VAR models",
        authors: ["Arnaud Dufays", "Zhuo Li", "Jeroen Rombouts", "Yong Song"],
        year: "2021",
        journal: "Journal of Applied Econometrics, 2021; 1–25",
        links: {
            ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3461692",
            wiley: "https://onlinelibrary.wiley.com/doi/10.1002/jae.2844"
        }
    },
    {
        title: "Corrigendum to 'Predictability of stock returns and asset allocation under structural breaks' Journal of Econometrics 164 (2011) 60-78",
        authors: ["Davide Pettenuzzo", "Allan Timmermann", "Yong Song"],
        year: "2021",
        journal: "Journal of Econometrics",
        links: {}
    },
    {
        title: "Markov Switching",
        authors: ["Tomasz Wozniak", "Yong Song"],
        year: "2021",
        journal: "Oxford Research Encyclopedia of Economics and Finance",
        links: {
            arxiv: "https://arxiv.org/abs/2002.03598"
        }
    },
    {
        title: "Oil Price Shocks and Economic Growth: The Volatility Link",
        authors: ["John Maheu", "Qiao Yang", "Yong Song"],
        year: "2020",
        journal: "International Journal of Forecasting, 36: 570-587",
        links: {
            drive: "https://drive.google.com/open?id=1HvhXnAsDk_Pfu_sI2NkB4diiwZVAsXgc"
        }
    },
    {
        title: "The evolution of Ottoman-European market linkages, 1469-1914: evidence from dynamic factor models",
        authors: ["Zhuo Li", "Laura Panza", "Yong Song"],
        year: "2019",
        journal: "Explorations in Economic History, 71: 112-134",
        links: {
            pdf: "https://drive.google.com/file/d/0B9XOQG8qXKr4a29ubWw4cEJUaWs/view?usp=sharing",
            appendix: "https://drive.google.com/file/d/1yfXyhnwibStqqh92ezDUbHDV_-ruOsxG/view?usp=sharing"
        }
    },
    {
        title: "Measuring Inflation Expectations Uncertainty Using High-Frequency Data",
        authors: ["Joshua Chan", "Yong Song"],
        year: "2018",
        journal: "Journal of Money, Credit and Banking, 50: 1139-1166",
        links: {
            pdf: "http://joshuachan.org/papers/inflation-RV.pdf",
            doi: "https://doi.org/10.1111/jmcb.12498"
        }
    },
    {
        title: "Heterogeneous Traders, the Leverage Effect and Volatility of the Chinese P2P Market",
        authors: ["Xing Fang", "Bo Wang", "Lanbiao Liu", "Yong Song"],
        year: "2018",
        journal: "Journal of Management Science and Engineering, 3(1): 39-56",
        links: {}
    },
    {
        title: "An Efficient Bayesian Approach to Multiple Structural Change in Multivariate Time Series",
        authors: ["John Maheu", "Yong Song"],
        year: "2018",
        journal: "Journal of Applied Econometrics, 33: 251-270",
        links: {}
    },
    {
        title: "A Fast Estimation Procedure for Discrete Choice Random Coefficients Demand Model",
        authors: ["Donghyuk Kim", "Huaxin Xu", "Yong Song"],
        year: "2017",
        journal: "Applied Economics, 49(58): 5849-5855",
        links: {}
    },
    {
        title: "Identifying speculative bubbles with an infinite hidden Markov model",
        authors: ["Shuping Shi", "Yong Song"],
        year: "2016",
        journal: "Journal of Financial Econometrics, 14(1): 159-184",
        links: {}
    },
    {
        title: "Modeling Regime Switching and Structural Breaks with an Infinite Hidden Markov Switching Model",
        authors: ["Yong Song"],
        year: "2014",
        journal: "Journal of Applied Econometrics, 29:825-842",
        links: {}
    },
    {
        title: "A New Structural Break Model, with an Application to Canadian Inflation Forecasting",
        authors: ["John Maheu", "Yong Song"],
        year: "2014",
        journal: "International Journal of Forecasting, 30(1):144-160",
        links: {}
    },
    {
        title: "Components of bull and bear markets: bull corrections and bear rallies",
        authors: ["John Maheu", "Tom McCurdy", "Yong Song"],
        year: "2012",
        journal: "Journal of Business and Economic Statistics 30(3):391-403",
        links: {}
    },
    {
        title: "A note on message passing in junction trees",
        authors: ["Yong Song"],
        year: "Note",
        journal: null,
        links: {
            pdf: "https://www.dropbox.com/scl/fi/c572fswikz49va1u27kli/sy_message_passing_junction_tree.pdf?rlkey=vcnawcpthphpdld62a2ahjudm&st=4tv8k7m0&dl=0"
        }
    }
];

export default function ResearchPage() {
    const workingPapers = papers.filter(p => !p.journal);
    const publications = papers.filter(p => p.journal);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <h1 className="text-4xl font-serif font-bold mb-4">Research</h1>
                <p className="text-muted-foreground text-lg">
                    My main research interests lie in Bayesian Econometrics and Time Series Analysis.
                </p>
            </motion.div>

            <div className="space-y-16">
                {/* Working Papers */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
                        Working Papers
                    </h2>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="space-y-6"
                    >
                        {workingPapers.map((paper, idx) => (
                            <motion.div key={idx} variants={item} className="bg-card border border-border/50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                                <p className="text-muted-foreground mb-3">{paper.authors.join(", ")}</p>
                                <div className="flex flex-wrap gap-2">
                                    {Object.entries(paper.links).map(([key, url]) => (
                                        <a
                                            key={key}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 bg-primary/5 px-3 py-1 rounded-full transition-colors"
                                        >
                                            {key.toUpperCase()}
                                            <ExternalLink className="ml-1 h-3 w-3" />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Publications */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
                        Publications
                    </h2>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="space-y-6"
                    >
                        {publications.map((paper, idx) => (
                            <motion.div key={idx} variants={item} className="group relative pl-4 border-l-2 border-border hover:border-primary transition-colors">
                                <h3 className="text-xl font-medium mb-1 group-hover:text-primary transition-colors">{paper.title}</h3>
                                <div className="text-sm text-accent-foreground font-medium mb-1">{paper.journal}, {paper.year}</div>
                                <p className="text-muted-foreground text-sm mb-2">{paper.authors.join(", ")}</p>
                                <div className="flex gap-3">
                                    {Object.entries(paper.links).map(([key, url]) => (
                                        <a
                                            key={key}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center"
                                        >
                                            <FileText className="mr-1 h-3 w-3" />
                                            {key.toUpperCase()}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </div>
        </div>
    );
}
