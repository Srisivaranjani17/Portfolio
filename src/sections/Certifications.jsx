import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaAward } from "react-icons/fa";

const certifications = [
    {
        title: "Meta Frontend Developer",
        issuer: "Coursera",
        date: "2025",
        image: "/certificates/Front-End Development.png",
    },
    {
        title: "Programming with JavaScript",
        issuer: "Coursera",
        date: "2025",
        image: "/certificates/Programming with JavaScript.png",
    },
    {
        title: "AI Frameworks",
        issuer: "Anthropic",
        date: "2026",
        image: "/certificates/AI Framework.png",
    },
    {
        title: "MongoDB developer course",
        issuer: "Udemy",
        date: "2025",
        image: "/certificates/Mongodb course.png",
    },
    {
        title: "Node js for developers",
        issuer: "Udemy",
        date: "2025",
        image: "/certificates/Nodejs bootcamp.png",
    },
    {
        title: "Microsoft Gen AI",
        issuer: "Microsoft",
        date: "2025",
        image: "/certificates/Gen AI.png",
    },
    {
        title: "NLP-Building your own chatbots using AI",
        issuer: "Udemy",
        date: "2025",
        image: "/certificates/NLP Course.png",
    },
];

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "Escape") setSelectedCert(null);
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    useEffect(() => {
        document.body.style.overflow = selectedCert ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedCert]);

    return (
        <>
            <section id="certifications" className="py-16 md:py-20 bg-secondary/70">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <p className="text-text-secondary uppercase tracking-wider mb-2">My Learning Journey</p>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-text-primary">
                            Certifications <span className="text-accent">& Awards</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                        {certifications.map((cert, index) => (
                            <motion.button
                                type="button"
                                key={index}
                                onClick={() => setSelectedCert(cert)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="w-full text-left group relative bg-card/30 backdrop-blur-sm border border-white/5 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 overflow-hidden hover:border-accent/50 transition-all duration-500 h-full"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_rgba(251,243,164,0.15)] rounded-xl" />

                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary flex items-center justify-center border border-white/10 group-hover:border-accent/50 group-hover:scale-110 transition-all duration-300 relative z-10">
                                    <FaAward className="text-3xl text-accent/80 group-hover:text-accent transition-colors" />
                                </div>

                                <div className="flex-grow relative z-10">
                                    <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300 mb-1">
                                        {cert.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm">
                                        {cert.issuer} | <span className="text-white/60">{cert.date}</span>
                                    </p>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {selectedCert && (
                <div
                    className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 py-6"
                    onClick={() => setSelectedCert(null)}
                >
                    <div
                        className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-white/10 rounded-2xl p-3 sm:p-4"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="absolute top-2 right-2 sm:top-3 sm:right-3 w-9 h-9 rounded-full bg-primary/80 text-text-primary hover:bg-accent hover:text-primary transition-colors"
                            onClick={() => setSelectedCert(null)}
                            aria-label="Close certificate preview"
                        >
                            x
                        </button>
                        <img
                            src={selectedCert.image}
                            alt={selectedCert.title}
                            className="w-full h-full max-h-[78vh] object-contain rounded-xl"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Certifications;
