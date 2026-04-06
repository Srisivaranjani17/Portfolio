import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "projects" },
        { name: "Experience", to: "experience" },
        { name: "Certifications", to: "certifications" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-primary/80 backdrop-blur-md shadow-lg py-3 md:py-4" : "bg-transparent py-4 md:py-6"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center gap-3">
                <div className="text-lg sm:text-2xl font-bold font-heading text-text-primary cursor-pointer hover:text-accent transition-colors max-w-[75vw] sm:max-w-none truncate">
                    <Link to="hero" smooth={true} duration={500}>
                        Srisivaranjani <span className="text-accent">. M</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="text-text-secondary hover:text-accent cursor-pointer transition-colors font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/srisivaranjani-resume.pdf"
                        download
                        className="px-6 py-2 border border-accent text-accent rounded-full hover:bg-accent hover:text-primary transition-all duration-300 font-medium"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden text-text-primary text-2xl cursor-pointer p-1" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-secondary/95 backdrop-blur-xl border-t border-white/10 px-6 py-5 flex flex-col items-center space-y-5 shadow-2xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="text-xl text-text-primary hover:text-accent font-medium cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/srisivaranjani-resume.pdf"
                        download
                        className="px-8 py-3 bg-accent text-primary rounded-full font-bold hover:bg-opacity-90 transition-all"
                        onClick={() => setIsOpen(false)}
                    >
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
