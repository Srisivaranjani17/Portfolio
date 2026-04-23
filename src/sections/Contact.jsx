import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import heroAvatar from "../assets/hero-avatar-removebg-preview.png";

const contactLinks = [
    {
        id: "email",
        icon: FaEnvelope,
        label: "Email",
        value: "srisivaranjanim@gmail.com",
        href: "mailto:srisivaranjanim@gmail.com",
        color: "#F59E0B",
    },
    {
        id: "linkedin",
        icon: FaLinkedin,
        label: "LinkedIn",
        value: "Connect with me",
        href: "https://linkedin.com/in/srisivaranjanim17/",
        color: "#0A66C2",
        external: true,
    },
    {
        id: "github",
        icon: FaGithub,
        label: "GitHub",
        value: "View my work",
        href: "https://github.com/Srisivaranjani17",
        color: "#E6EDF3",
        external: true,
    },
];

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-20 md:py-28 relative overflow-hidden"
        >
            {/* ── Ambient Background ── */}
            <div className="absolute inset-0 bg-primary/80 pointer-events-none" />

            {/* Floating gradient orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.25, 1],
                    x: [0, 40, 0],
                    y: [0, -30, 0],
                }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-20 -left-32 w-[420px] h-[420px] bg-accent/8 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute -bottom-20 -right-32 w-[450px] h-[450px] bg-purple-600/6 rounded-full blur-[130px] pointer-events-none"
            />

            {/* Slow-rotating orbital rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-white/[0.03]"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-16 rounded-full border border-dashed border-white/[0.02]"
                />
            </div>

            {/* ── Content ── */}
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10"
            >
                {/* Section Header */}
                <motion.div variants={fadeUp} className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                        </span>
                        <span className="text-accent text-xs font-semibold uppercase tracking-widest">
                            Open to Opportunities
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-4 leading-tight">
                        Let's Create{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-400 to-accent-hover">
                            Amazing Things
                        </span>
                    </h2>
                    <p className="text-text-secondary text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                        Got a project in mind or just want to say hi?
                        I'd love to hear from you.
                    </p>
                </motion.div>

                {/* ── Single Unified Card ── */}
                <motion.div
                    variants={fadeUp}
                    className="relative group"
                >
                    {/* Animated gradient border glow */}
                    <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-accent/30 via-transparent to-purple-500/20 opacity-60 group-hover:opacity-100 transition-opacity duration-700 blur-[1px]" />

                    <div className="relative rounded-[2rem] bg-secondary/60 backdrop-blur-xl border border-white/[0.06] overflow-hidden">

                        {/* Inner ambient glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-40 bg-accent/5 blur-[80px] pointer-events-none" />

                        <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 sm:p-10 md:p-14">

                            {/* ─ Avatar Side ─ */}
                            <motion.div
                                className="relative flex-shrink-0"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                {/* Outer glowing ring */}
                                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/20 via-amber-500/10 to-purple-500/10 blur-md opacity-70" />

                                {/* Pulsing ring */}
                                <motion.div
                                    animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -inset-1 rounded-full border border-accent/30"
                                />

                                {/* Avatar container */}
                                <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden bg-gradient-to-br from-card to-primary border-2 border-white/10">
                                    <img
                                        src={heroAvatar}
                                        alt="Srisivaranjani"
                                        className="w-full h-full object-cover object-top scale-110"
                                    />
                                    {/* Subtle overlay for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                                </div>

                                {/* Status dot */}
                                <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3">
                                    <span className="relative flex h-4 w-4">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-400 border-2 border-secondary" />
                                    </span>
                                </div>
                            </motion.div>

                            {/* ─ Info Side ─ */}
                            <div className="flex-1 text-center md:text-left min-w-0">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-text-primary mb-2">
                                    Srisivaranjani M
                                </h3>
                                <p className="text-accent font-medium text-sm md:text-base mb-4">
                                    Full Stack Developer • Generative AI Engineer
                                </p>
                                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8 max-w-md">
                                    Whether you have a question, a project idea, or just want to connect — 
                                    my inbox is always open. I'll get back to you as soon as I can!
                                </p>

                                {/* Contact Links */}
                                <div className="flex flex-col gap-3">
                                    {contactLinks.map((link, idx) => {
                                        const Icon = link.icon;
                                        return (
                                            <motion.a
                                                key={link.id}
                                                id={`contact-${link.id}`}
                                                href={link.href}
                                                target={link.external ? "_blank" : undefined}
                                                rel={link.external ? "noopener noreferrer" : undefined}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: 0.4 + idx * 0.1,
                                                    duration: 0.5,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                                whileHover={{ x: 6 }}
                                                className="group/link flex items-center gap-4 p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-300 cursor-pointer"
                                            >
                                                {/* Icon circle */}
                                                <div
                                                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/link:scale-110 group-hover/link:shadow-lg"
                                                    style={{
                                                        background: `${link.color}15`,
                                                        boxShadow: `0 0 0 1px ${link.color}18`,
                                                    }}
                                                >
                                                    <Icon
                                                        className="text-lg sm:text-xl"
                                                        style={{ color: link.color }}
                                                    />
                                                </div>

                                                {/* Text */}
                                                <div className="flex-1 min-w-0 text-left">
                                                    <p className="text-text-primary font-semibold text-sm sm:text-base leading-tight">
                                                        {link.label}
                                                    </p>
                                                    <p className="text-text-secondary text-xs sm:text-sm truncate group-hover/link:text-text-primary transition-colors duration-300">
                                                        {link.value}
                                                    </p>
                                                </div>

                                                {/* Arrow */}
                                                <HiArrowUpRight
                                                    className="text-text-secondary/40 text-sm flex-shrink-0 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 group-hover/link:text-text-secondary transition-all duration-300"
                                                />
                                            </motion.a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Bottom accent bar */}
                        <div className="h-[2px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
