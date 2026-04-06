import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaNodeJs, FaPython } from "react-icons/fa";
import { FiBriefcase, FiCpu, FiTrendingUp } from "react-icons/fi";
import { SiJavascript, SiReact } from "react-icons/si";
import Typewriter from "typewriter-effect";
import heroAvatar from "../assets/hero-avatar-removebg-preview.png";

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-20"
        >
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 w-full">

                {/* Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-1 md:order-1"
                >
                    {/* Social Icons Strip - Top Left */}
                    <div className="flex gap-4 mb-5 md:mb-6 text-text-secondary text-xl sm:text-2xl">
                        <a href="https://github.com/Srisivaranjani17" className="hover:text-white transition-colors"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/srisivaranjanim17/" className="hover:text-white transition-colors"><FaLinkedin /></a>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-text-primary mb-5 md:mb-6 leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover inline-block">
                            <Typewriter
                                options={{
                                    strings: ["MERN Full Stack Developer", "Generative AI Developer", "Designer"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h2>
                    <p className="text-text-secondary max-w-lg mb-7 md:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
                        A passionate <span className="text-text-primary font-semibold">Full Stack Developer specializing in MERN stack and Generative AI applications</span>
                        I build AI-powered web platforms, RAG pipelines, and intelligent automation tools using modern technologies.

                        Actively seeking entry-level opportunities where I can design scalable AI-driven applications
                        and deliver real-world user value.
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                        <div className="group flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-accent/60 hover:bg-white/10 transition-all duration-300">
                            <FiBriefcase className="text-accent text-base" />
                            <span className="text-xs sm:text-sm md:text-base text-text-secondary group-hover:text-text-primary transition-colors">
                                Open to <span className="font-semibold text-text-primary">Full-Time Roles</span>
                            </span>
                        </div>
                        <div className="group flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-accent/60 hover:bg-white/10 transition-all duration-300">
                            <FiCpu className="text-accent text-base" />
                            <span className="text-xs sm:text-sm md:text-base text-text-secondary group-hover:text-text-primary transition-colors">
                                AI Projects
                            </span>
                        </div>
                        <div className="group flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-accent/60 hover:bg-white/10 transition-all duration-300">
                            <FiTrendingUp className="text-accent text-base" />
                            <span className="text-xs sm:text-sm md:text-base text-text-secondary group-hover:text-text-primary transition-colors">
                                Continuous Learner
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <a
                            href="/srisivaranjani-resume.pdf"
                            download
                            className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 bg-accent text-primary rounded-full font-bold text-base md:text-lg hover:bg-accent-hover transition-all shadow-[0_4px_14px_0_rgba(246,160,0,0.39)]"
                        >
                            Download CV
                        </a>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 bg-transparent border border-text-secondary text-text-primary rounded-full font-bold text-base md:text-lg hover:border-accent hover:text-accent transition-all cursor-pointer"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div >

                {/* Right Side: 3D Avatar Image */}
                < motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-2 md:order-2 relative flex justify-center items-center"
                >
                    <div className="relative w-full max-w-[320px] sm:max-w-md aspect-square">
                        <motion.div
                            animate={{ y: [0, -14, 0] }}
                            transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}
                            className="absolute top-8 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 bg-card/90 border border-white/10 rounded-xl flex items-center justify-center shadow-lg z-20"
                        >
                            <SiJavascript className="text-[#F7DF1E]" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.6 }}
                            className="absolute top-14 right-5 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-card/90 border border-white/10 rounded-xl flex items-center justify-center shadow-lg z-20"
                        >
                            <SiReact className="text-[#61DAFB]" />
                        </motion.div>
                        <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.3 }}
                            className="absolute bottom-10 left-8 sm:left-10 w-10 h-10 sm:w-12 sm:h-12 bg-card/90 border border-white/10 rounded-xl flex items-center justify-center shadow-lg z-20"
                        >
                            <FaPython className="text-[#3776AB]" />
                        </motion.div>
                        <motion.div
                            animate={{ x: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.9 }}
                            className="absolute bottom-8 right-8 sm:right-10 w-10 h-10 sm:w-12 sm:h-12 bg-card/90 border border-white/10 rounded-xl flex items-center justify-center shadow-lg z-20"
                        >
                            <FaNodeJs className="text-[#339933]" />
                        </motion.div>
                        {/* Main Avatar Area */}
                        <div className="w-full h-full relative z-10 flex items-center justify-center">
                            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.08, 0.96, 1],
                                        x: [0, 10, -8, 0],
                                        y: [0, -8, 10, 0],
                                        borderRadius: ["48% 52% 50% 50%", "58% 42% 46% 54%", "45% 55% 60% 40%", "48% 52% 50% 50%"],
                                    }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-6 md:inset-8 bg-accent/10 blur-2xl z-0"
                                />
                                <div className="absolute inset-4 md:inset-6 rounded-full border border-accent/40 shadow-[0_0_60px_rgba(245,158,11,0.45)] z-0" />
                                <img
                                    src={heroAvatar}
                                    alt="Developer Avatar"
                                    className="relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] animate-float"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div >
            </div >
        </section >
    );
};

export default Hero;
