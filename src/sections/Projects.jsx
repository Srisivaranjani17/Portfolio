import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "Startova-AI Startup Intelligence Platform",
        desc: "AI-powered startup validation platform that analyzes business ideas and generates structured insights using LLMs. Built MERN-based full stack architecture Implemented 5+ AI analysis modules (SWOT, scoring, validation) Integrated Gemini API for AI-driven insights Developed responsive dashboard UI Designed REST APIs for dynamic AI features",
        tech: ["React", "Node.js", "MongoDB", "Gemini API"],
        live: "#",
        github: "#",
        image: "bg-gradient-to-br from-purple-900 to-indigo-900" // Placeholder gradient
    },
    {
        title: "AI Document Question Answering System",
        desc: "End-to-end RAG pipeline for intelligent document retrieval and context-aware answer generation.",
        tech: ["Python", "LangChain", "Qdrant", "Gemini API","OpenRouter", "RAG"],
        live: "#",
        github: "#",
        image: "bg-gradient-to-br from-emerald-900 to-teal-900"
    },
    {
        title: "AI Resume Analyzer Chatbot",
        desc: "ATS-style resume analyzer using RAG architecture that provides structured feedback and resume improvement suggestions.",
        tech: ["Python","Streamlit","LangChain","FAISS","Gemini API"],
        live: "#",
        github: "#",
        image: "bg-gradient-to-br from-orange-900 to-red-900"
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-16 md:py-20 bg-primary/70">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
                        Featured <span className="text-accent">Projects</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Real-world solutions built with modern technology stacks.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-accent/40 shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group h-full"
                        >
                            {/* Image Placeholder */}
                            {/* <div className={`h-48 w-full ${project.image} relative group-hover:scale-105 transition-transform duration-500`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                            </div> */}

                            <div className="p-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-text-secondary mb-4 line-clamp-3">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-secondary text-accent text-xs rounded-full border border-accent/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                                    <a href={project.github} className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors">
                                        <FaGithub /> Source
                                    </a>
                                    {/* <a href={project.live} className="flex items-center gap-2 text-accent font-medium hover:underline">
                                        Live Demo <FaExternalLinkAlt className="text-sm" />
                                    </a> */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
