import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const experiences = [
    {
        role: "Full Stack Developer",
        company: "Infisq Innovations Pvt Ltd | Salem",
        desc: [
            "Developed full-stack MERN applications",
            "Engineered prompt pipelines for automated content generation",
            "Built responsive UI using React.js and Tailwind CSS",

        ]
    },
    {
        role: "Generative AI Intern",
        company: "Datapattern.ai",
        desc: [
            "Developed chatbot prototypes using LLM tools",
            "Implemented prompt engineering workflows",
            "Explored NLP fundamentals and transformers",
            "Worked on intelligent response generation systems"
        ]
    },
    {
        role: "Frontend Developer Intern",
        company: "Vault of Codes",
        desc: [
            "Developed responsive user interfaces using React.js and Tailwind CSS",
            "Integrated frontend with backend APIs and managed state effectively",
            "Collaborated in an Agile environment to deliver high-quality web applications"
        ]
    }
];


const Experience = () => {
    return (
        <section id="experience" className="py-16 md:py-20 bg-primary/70 flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-20"
                >
                    <p className="text-text-secondary uppercase tracking-wider mb-2 text-sm font-semibold">My Journey</p>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-text-primary">
                        Work <span className="text-accent">Experience</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Central Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />

                    {/* Mobile Line */}
                    <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />

                    <div className="space-y-10 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center justify-between w-full relative ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Spacer for Desktop */}
                                <div className="hidden md:block w-5/12" />

                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-accent shadow-[0_0_15px_rgba(246,160,0,0.5)] z-10 flex items-center justify-center">
                                    <div className="w-3 h-3 bg-accent rounded-full" />
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-5/12 pl-16 sm:pl-20 md:pl-0">
                                    <div className={`
                                        bg-card p-5 sm:p-6 rounded-2xl border border-white/5 
                                        hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-2xl 
                                        group relative overflow-hidden
                                        ${index % 2 === 0 ? "md:text-right" : "md:text-left"}
                                    `}>
                                        {/* Background Glow Effect */}
                                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : "md:items-start"} mb-4`}>
                                            {exp.duration && (
                                                <span className="inline-flex items-center gap-2 text-accent font-mono text-sm mb-2 bg-accent/10 py-1 px-3 rounded-full border border-accent/20">
                                                    <FaCalendarAlt className="text-xs" /> {exp.duration}
                                                </span>
                                            )}
                                            <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
                                                {exp.role}
                                            </h3>
                                            <p className="text-text-secondary font-medium flex items-center gap-2 mt-1">
                                                {exp.company}
                                            </p>
                                        </div>

                                        <ul className={`space-y-2 text-text-secondary text-sm md:text-base ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                            {exp.desc.map((item, i) => (
                                                <li key={i} className="leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
