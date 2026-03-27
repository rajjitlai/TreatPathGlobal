"use client";

import { motion, useReducedMotion } from "framer-motion";

const AboutSection = () => {
    const shouldReduceMotion = useReducedMotion();
    const stats = [
        { label: "Vendors", value: "500+" },
        { label: "Districts", value: "12" },
        { label: "Buyers", value: "10,000+" },
    ];

    return (
        <section id="about" className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Column: Video */}
                    <motion.div
                        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster="/images/about-facility.jpg"
                                className="w-full h-full object-cover"
                            >
                                <source src="/videos/about-bg.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
                        className="w-full lg:w-1/2 text-left"
                    >
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                            Who We Are
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-primary mb-8 leading-tight">
                            Rooted in the Forests of Northeast India
                        </h2>
                        <p className="text-lg text-text-muted mb-6 leading-relaxed">
                            Treat Path Global is more than just a marketplace; we are the bridge between the rich natural resources of the Northeast and the growing demand for quality timber and sustainable biomass across India.
                        </p>
                        <p className="text-lg text-text-muted mb-10 leading-relaxed">
                            Our mission is to empower local forest vendors by providing them a global platform, while ensuring our buyers receive ethically sourced, high-grade materials delivered directly to their doorstep.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="text-center md:text-left"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm font-medium text-text-muted uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
