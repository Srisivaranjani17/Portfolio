import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaFigma, FaBrain } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiMysql, SiCanva, SiPostman, SiOpenai, SiLangchain, SiBootstrap } from "react-icons/si";
import { BsChatSquareQuote } from "react-icons/bs";
import { TbApi, TbVectorBezier2, TbDatabaseSearch, TbRobot } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const skillsData = [
    {
        category: "Programming Languages",
        items: [
            { name: "Python", icon: <FaPython className="text-[#3776AB]" />, desc: "General Purpose" },
            { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, desc: "Web Development" },
        ]
    },
    {
        category: "Frontend",
        items: [
            { name: "React", icon: <FaReact className="text-[#61DAFB]" />, desc: "UI Library" },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, desc: "Utility-first CSS" },
            {name: "Bootstrap",icon: <SiBootstrap className="text-[#7952B3]" />, desc: "CSS Framework"},
            { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" />, desc: "Structure" },
            { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" />, desc: "Styling" },
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, desc: "JS Runtime" },
            { name: "Express", icon: <SiExpress className="text-white" />, desc: "Web Framework" },
            { name: "Rest API", icon: <TbApi className="text-[#FF6C37]" />, desc: "API Development" },

        ]
    },
    {
        category: "Databases",
        items: [
            { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, desc: "NoSQL" },
            { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, desc: "Relational DB" },
            { name: "Vector Databases", icon: <TbVectorBezier2 className="text-[#8B5CF6]" />, desc: "AI Applications" },

        ]
    },
    {
        category: "Design",
        items: [
            { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" />, desc: "UI/UX Design" },
            { name: "Canva", icon: <SiCanva className="text-[#00C4CC]" />, desc: "Graphic Design" },
        ]
    },
    {
        category: "Tools",
        items: [
            { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, desc: "Version Control" },
            { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" />, desc: "API Testing" },
            { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" />, desc: "Code Editor" },
        ]
    },
    {
        category: "AI & Generative AI",
        items: [
            { name: "LangChain", icon: <SiLangchain className="text-[#1C3C3C]" />, desc: "LLM Integration" },
            { name: "RAG Architecture", icon: <TbDatabaseSearch className="text-[#22D3EE]" />, desc: "Retrieval Augmented Generation" },
            { name: "Prompt Engineering", icon: <BsChatSquareQuote className="text-accent" />, desc: "Optimization" },
            { name: "LLM Integration", icon: <TbRobot className="text-[#10B981]" />, desc: "AI Model Integration" },
            { name: "NLP Basics", icon: <FaBrain className="text-pink-500" />, desc: "Language Processing" },
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-16 md:py-20 bg-secondary/70">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
                        Technical <span className="text-accent">Skills</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        A comprehensive toolkit of languages, frameworks, and technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {skillsData.map((category, idx) => (
                        <div key={idx} className="space-y-6">
                            <h3 className="text-lg sm:text-xl font-bold text-text-primary border-l-4 border-accent pl-4">
                                {category.category}
                            </h3>
                            <div className="grid gap-4">
                                {category.items.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="bg-card p-3 sm:p-4 rounded-xl border border-white/5 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(246,160,0,0.1)] transition-all group flex items-center gap-3 sm:gap-4"
                                    >
                                        <div className="text-2xl sm:text-3xl p-2 sm:p-3 bg-primary rounded-lg group-hover:scale-110 transition-transform">
                                            {skill.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-text-primary font-bold">{skill.name}</h4>
                                            <p className="text-text-secondary text-sm">{skill.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
