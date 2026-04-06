import { FaReact, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiLangchain } from "react-icons/si";
import { motion } from "framer-motion";
import aboutAvatar from "../assets/about-me-removebg-preview.png";

const About = () => {
    return (
        <section id="about" className="py-16 md:py-20 bg-secondary/70 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative flex justify-center order-2 md:order-1"
                    >
                        {/* Star Background & Avatar */}
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">

                            {/* Star SVG Background */}
                            <div className="absolute inset-0 flex items-center justify-center z-0">
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent/10 fill-current overflow-visible">
                                    <path d="M100,10 L125,75 L195,75 L140,115 L160,185 L100,145 L40,185 L60,115 L5,75 L75,75 Z" transform="scale(0.9) translate(10,10)" />
                                </svg>
                                {/* Rotated squares for depth/glow effect behind */}
                                <div className="absolute w-full h-full bg-accent/5 rotate-12 scale-90 rounded-3xl -z-10 blur-xl" />
                            </div>

                            {/* Avatar */}
                            <div className="relative z-10 w-[80%] h-[80%] flex items-center justify-center">
                                <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full z-0" />
                                <img
                                    src={aboutAvatar}
                                    alt="About Me"
                                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Floating Tech Icons */}
                            {/* React - Top Right */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-[#1a1a1a] p-2 sm:p-3 rounded-2xl border border-white/10 shadow-xl z-20 flex items-center justify-center"
                            >
                                <FaReact className="text-[#61DAFB] text-2xl sm:text-3xl" />
                            </motion.div>

                            {/* JS - Bottom Left */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-1 sm:-bottom-2 -left-2 sm:-left-4 bg-[#1a1a1a] p-2 sm:p-3 rounded-2xl border border-white/10 shadow-xl z-20 flex items-center justify-center"
                            >
                                <FaJs className="text-[#F7DF1E] text-2xl sm:text-3xl" />
                            </motion.div>

                            {/* Tailwind - Top Left */}
                            <motion.div
                                animate={{ x: [0, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                                className="absolute top-8 sm:top-10 -left-5 sm:-left-10 bg-[#1a1a1a] p-2 sm:p-3 rounded-2xl border border-white/10 shadow-xl z-20 flex items-center justify-center"
                            >
                                <SiTailwindcss className="text-[#38B2AC] text-2xl sm:text-3xl" />
                            </motion.div>

                            {/* Design/Palette - Bottom Right */}
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
                                className="absolute bottom-8 sm:bottom-10 -right-5 sm:-right-10 bg-[#1a1a1a] p-2 sm:p-3 rounded-2xl border border-white/10 shadow-xl z-20 flex items-center justify-center"
                            >
                                <SiLangchain className="text-[#00D4FF] text-2xl sm:text-3xl" />
                            </motion.div>

                        </div>
                    </motion.div>

                    {/* Right Side: Text & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-1 md:order-2"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-text-primary mb-6">
                            About <span className="text-accent">Me</span>
                        </h2>
                        <p className="text-text-secondary text-sm sm:text-base mb-6 leading-relaxed">
                            I'm a <span className="text-text-primary font-semibold">Full Stack Developer and Generative AI Developer</span> at the beginning of my professional journey,
                            with hands-on experience building AI-powered MERN applications, RAG pipelines, and LLM-integrated systems.
                            <br /><br />
                            I enjoy designing intelligent features using prompt engineering, vector databases, and modern 
                            frontend frameworks. My focus is on building scalable backend systems combined with seamless 
                            user interfaces to create real-world AI applications.                            
                            I'm actively seeking entry-level opportunities where I can contribute to AI-driven product 
                            development, collaborate with teams, and grow as a Full Stack AI Developer.
                        </p>


                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 mb-8 border-t border-white/5 pt-8">
                            <div className="text-left">
                                <h4 className="text-xl sm:text-2xl font-bold text-accent">MERN + Gen AI</h4>
                                <p className="text-text-secondary text-sm">Tech Stack</p>
                            </div>
                            <div className="text-left">
                                <h4 className="text-xl sm:text-2xl font-bold text-accent">3+</h4>
                                <p className="text-text-secondary text-sm">Practice Projects</p>
                            </div>
                            <div className="text-left">
                                <h4 className="text-xl sm:text-2xl font-bold text-accent">Daily</h4>
                                <p className="text-text-secondary text-sm">Learning & Building</p>
                            </div>
                        </div>

                        {/* <button className="px-8 py-3 border border-accent text-accent rounded-full font-bold hover:bg-accent hover:text-primary transition-all">
                            Learn More
                        </button> */}
                    </motion.div>

                </div >
            </div >
        </section >
    );
};

export default About;


