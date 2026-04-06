import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-16 md:py-20 bg-primary/70 relative">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 md:mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-text-primary mb-6">
                        Let's Work <span className="text-accent">Together</span>
                    </h2>
                    <p className="text-text-secondary text-base md:text-lg mb-8">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 md:gap-12">
                        <a href="mailto:srisivaranjanim@gmail.com" className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-accent/50 w-full md:w-64">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                <FaEnvelope className="text-2xl" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-text-primary font-bold mb-1">Email</h3>
                                <p className="text-text-secondary text-sm group-hover:text-accent transition-colors break-all">srisivaranjanim@gmail.com</p>
                            </div>
                        </a>

                        {/* <a href="tel:+916381124874" className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-accent/50 w-full md:w-64">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                <FaPhoneAlt className="text-2xl" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-text-primary font-bold mb-1">Phone</h3>
                                <p className="text-text-secondary text-sm group-hover:text-accent transition-colors">6381124874</p>
                            </div>
                        </a> */}

                        <a href="https://linkedin.com/in/srisivaranjanim17/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-accent/50 w-full md:w-64">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                <FaLinkedin className="text-2xl" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-text-primary font-bold mb-1">LinkedIn</h3>
                                <p className="text-text-secondary text-sm group-hover:text-accent transition-colors">Let's Connect</p>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
