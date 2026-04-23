import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaFigma, FaBrain } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiMysql, SiCanva, SiPostman, SiLangchain, SiBootstrap } from "react-icons/si";
import { BsChatSquareQuote } from "react-icons/bs";
import { TbApi, TbVectorBezier2, TbDatabaseSearch, TbRobot } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const categoryColors = {
    "Languages": "#FBF3A4",
    "Frontend": "#61DAFB",
    "Backend": "#34D399",
    "Database": "#A78BFA",
    "AI": "#22D3EE",
    "Design & Tools": "#FB923C",
};

const allSkills = [
    { name: "Python", icon: <FaPython />, color: "#3776AB", category: "Languages" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", category: "Languages" },
    { name: "React", icon: <FaReact />, color: "#61DAFB", category: "Frontend" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4", category: "Frontend" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3", category: "Frontend" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", category: "Frontend" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", category: "Frontend" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933", category: "Backend" },
    { name: "Express", icon: <SiExpress />, color: "#FFFFFF", category: "Backend" },
    { name: "REST API", icon: <TbApi />, color: "#FF6C37", category: "Backend" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", category: "Database" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1", category: "Database" },
    { name: "Vector DB", icon: <TbVectorBezier2 />, color: "#8B5CF6", category: "Database" },
    { name: "LangChain", icon: <SiLangchain />, color: "#22D3EE", category: "AI" },
    { name: "RAG", icon: <TbDatabaseSearch />, color: "#22D3EE", category: "AI" },
    { name: "Prompt Eng.", icon: <BsChatSquareQuote />, color: "#FBF3A4", category: "AI" },
    { name: "LLM", icon: <TbRobot />, color: "#10B981", category: "AI" },
    { name: "NLP", icon: <FaBrain />, color: "#EC4899", category: "AI" },
    { name: "Figma", icon: <FaFigma />, color: "#F24E1E", category: "Design & Tools" },
    { name: "Canva", icon: <SiCanva />, color: "#00C4CC", category: "Design & Tools" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032", category: "Design & Tools" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37", category: "Design & Tools" },
    { name: "VS Code", icon: <VscVscode />, color: "#007ACC", category: "Design & Tools" },
];

// Diamond honeycomb pattern: 4 → 5 → 6 → 5 → 3
const desktopRows = [
    allSkills.slice(0, 4),
    allSkills.slice(4, 9),
    allSkills.slice(9, 15),
    allSkills.slice(15, 20),
    allSkills.slice(20, 23),
];

// Hex dimensions for honeycomb math
const HEX_W_DESKTOP = 115;
const HEX_GAP = 8;
const HEX_OVERLAP_DESKTOP = 22;
const DESKTOP_MAX_COLUMNS = Math.max(...desktopRows.map((row) => row.length));
const DESKTOP_STEP = HEX_W_DESKTOP + HEX_GAP;
const DESKTOP_GRID_WIDTH = DESKTOP_MAX_COLUMNS * DESKTOP_STEP - HEX_GAP + DESKTOP_STEP / 2;

const HEX_W_MOBILE = 90;
const HEX_GAP_MOBILE = 6;
const HEX_OVERLAP_MOBILE = 18;
const MOBILE_COLUMNS = 2;
const MOBILE_STEP = HEX_W_MOBILE + HEX_GAP_MOBILE;
const MOBILE_GRID_WIDTH = MOBILE_COLUMNS * MOBILE_STEP - HEX_GAP_MOBILE + MOBILE_STEP / 2;

const HexItem = ({ skill, index, activeCategory }) => {
    const [hovered, setHovered] = useState(false);
    const catColor = categoryColors[skill.category];
    const isHighlighted = activeCategory === skill.category;
    const isDimmed = activeCategory && activeCategory !== skill.category;
    const isGlowing = hovered || isHighlighted;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: index * 0.04,
                duration: 0.4,
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
            className="hex-item relative cursor-default"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                opacity: isDimmed ? 0.12 : 1,
                filter: isDimmed ? 'grayscale(1) brightness(0.5)' : 'none',
                transition: 'opacity 0.4s ease, filter 0.4s ease, transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
        >
            {/* Hex outer — category-colored border */}
            <div
                className="hex-shape w-[90px] h-[100px] md:w-[115px] md:h-[125px] flex items-center justify-center"
                style={{
                    background: isGlowing
                        ? `linear-gradient(135deg, ${catColor}, ${catColor}80)`
                        : `linear-gradient(135deg, ${catColor}30, ${catColor}10)`,
                    transition: 'background 0.35s ease',
                }}
            >
                {/* Inner hex fill */}
                <div
                    className="hex-shape w-[86px] h-[96px] md:w-[111px] md:h-[121px] flex flex-col items-center justify-center gap-1.5"
                    style={{
                        background: isGlowing
                            ? `radial-gradient(circle at center, ${catColor}15 0%, #1a1a1a 70%)`
                            : 'radial-gradient(circle at center, #1e1e1e 0%, #151515 80%)',
                        transition: 'background 0.35s ease',
                    }}
                >
                    <span
                        className="text-2xl sm:text-[28px] md:text-[34px] transition-all duration-300"
                        style={{
                            color: skill.color,
                            filter: isGlowing ? `drop-shadow(0 0 10px ${skill.color}90)` : 'none',
                        }}
                    >
                        {skill.icon}
                    </span>
                    <span
                        className="text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-wide text-center leading-tight px-1 transition-colors duration-300"
                        style={{ color: isGlowing ? '#F5F5F5' : '#777777' }}
                    >
                        {skill.name}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

const LegendItem = ({ label, color, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 cursor-pointer border ${
            isActive
                ? 'border-white/20 scale-105'
                : 'border-white/[0.04] bg-card/40 hover:border-white/10'
        }`}
        style={{
            backgroundColor: isActive ? `${color}18` : undefined,
            boxShadow: isActive ? `0 0 18px ${color}35, inset 0 0 12px ${color}10` : undefined,
        }}
    >
        <span
            className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all duration-300"
            style={{
                backgroundColor: color,
                boxShadow: isActive ? `0 0 10px ${color}90` : `0 0 4px ${color}30`,
            }}
        />
        <span className={`text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
            isActive ? 'text-text-primary' : 'text-text-secondary'
        }`}>
            {label}
        </span>
    </button>
);

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const mobileRows = [];

    const handleCategoryClick = (cat) => {
        setActiveCategory(prev => prev === cat ? null : cat);
    };

    for (let i = 0; i < allSkills.length; i += MOBILE_COLUMNS) {
        mobileRows.push(allSkills.slice(i, i + MOBILE_COLUMNS));
    }

    let globalIdx = 0;

    return (
        <section id="skills" className="py-16 md:py-20 bg-secondary/70 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-14"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
                        Technical <span className="text-accent">Skills</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        A comprehensive toolkit of languages, frameworks, and technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                {/* Clickable Category Legend */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-10"
                >
                    {Object.entries(categoryColors).map(([label, color]) => (
                        <LegendItem
                            key={label}
                            label={label}
                            color={color}
                            isActive={activeCategory === label}
                            onClick={() => handleCategoryClick(label)}
                        />
                    ))}
                </motion.div>

                {/* Desktop Honeycomb Diamond - md and up */}
                <div className="hidden md:flex justify-center">
                    <div className="relative" style={{ width: `${DESKTOP_GRID_WIDTH}px` }}>
                        {desktopRows.map((row, rowIdx) => {
                            const centerOffset = ((DESKTOP_MAX_COLUMNS - row.length) * DESKTOP_STEP) / 2;

                            return (
                                <div
                                    key={rowIdx}
                                    className="flex justify-start"
                                    style={{
                                        gap: `${HEX_GAP}px`,
                                        marginTop: rowIdx > 0 ? `-${HEX_OVERLAP_DESKTOP}px` : '0',
                                        paddingLeft: `${centerOffset}px`,
                                    }}
                                >
                                    {row.map((skill) => {
                                        const idx = globalIdx++;
                                        return (
                                            <HexItem
                                                key={skill.name}
                                                skill={skill}
                                                index={idx}
                                                activeCategory={activeCategory}
                                            />
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Layout - below md */}
                <div className="md:hidden flex justify-center">
                    <div className="relative" style={{ width: `${MOBILE_GRID_WIDTH}px` }}>
                        {mobileRows.map((row, rowIdx) => {
                            const isOddRow = rowIdx % 2 === 1;
                            const centerOffset = ((MOBILE_COLUMNS - row.length) * MOBILE_STEP) / 2;
                            const honeycombOffset = isOddRow ? MOBILE_STEP / 2 : 0;

                            return (
                                <div
                                    key={rowIdx}
                                    className="flex justify-start"
                                    style={{
                                        gap: `${HEX_GAP_MOBILE}px`,
                                        marginTop: rowIdx > 0 ? `-${HEX_OVERLAP_MOBILE}px` : '0',
                                        paddingLeft: `${centerOffset + honeycombOffset}px`,
                                    }}
                                >
                                    {row.map((skill, i) => (
                                        <HexItem
                                            key={skill.name}
                                            skill={skill}
                                            index={rowIdx * MOBILE_COLUMNS + i}
                                            activeCategory={activeCategory}
                                        />
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
