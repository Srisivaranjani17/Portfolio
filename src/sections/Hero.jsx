import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaNodeJs, FaPython } from "react-icons/fa";
import { FiBriefcase, FiCpu, FiTrendingUp, FiDownload, FiArrowRight } from "react-icons/fi";
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

                    {/* ── Status Bar ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-start gap-1 p-1.5 rounded-2xl sm:rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] mb-8 shadow-[0_4px_30px_rgba(0,0,0,0.3)] max-w-full"
                    >
                        {[
                            { icon: FiBriefcase, text: "Full-Time Roles" },
                            { icon: FiCpu, text: "AI Projects" },
                            { icon: FiTrendingUp, text: "Continuous Learner" },
                        ].map(({ icon: ChipIcon, text }, idx) => (
                            <div
                                key={text}
                                className="group relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full hover:bg-white/[0.06] transition-all duration-300 cursor-default"
                            >
                                {/* Active glow on hover */}
                                <div className="absolute inset-0 rounded-full bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <ChipIcon className="relative z-10 text-accent text-sm" />
                                <span className="relative z-10 text-xs sm:text-sm text-text-secondary group-hover:text-text-primary font-medium transition-colors duration-300 whitespace-nowrap">
                                    {text}
                                </span>
                                {/* Separator dot between chips */}
                                {idx < 2 && (
                                    <span className="hidden sm:block absolute -right-0.5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/10" />
                                )}
                            </div>
                        ))}
                    </motion.div>

                    {/* ── CTA Buttons ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                    >
                        {/* Primary — Download CV */}
                        <a
                            href="/srisivaranjani-resume.pdf"
                            download
                            className="group relative w-full sm:w-auto overflow-hidden rounded-full"
                        >
                            {/* Glow */}
                            <div className="absolute inset-0 rounded-full bg-accent/25 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 bg-accent text-primary rounded-full font-bold text-base md:text-lg shadow-[0_4px_20px_rgba(245,158,11,0.3)] group-hover:shadow-[0_8px_30px_rgba(245,158,11,0.45)] group-hover:bg-accent-hover transition-all duration-400">
                                <FiDownload className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5" />
                                <span>Download CV</span>
                            </div>
                            {/* Shimmer sweep */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                        </a>

                        {/* Secondary — Let's Connect */}
                        <div className="group relative w-full sm:w-auto">
                            {/* Gradient border */}
                            <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-accent/40 via-white/15 to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="relative flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 bg-transparent border border-text-secondary/50 text-text-primary rounded-full font-bold text-base md:text-lg cursor-pointer transition-all duration-400 group-hover:border-transparent group-hover:bg-white/[0.05]"
                            >
                                <span>Let's Connect</span>
                                <FiArrowRight className="text-lg text-text-secondary group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                            </Link>
                        </div>
                    </motion.div>
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
