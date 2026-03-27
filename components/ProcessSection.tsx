"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Sourced from the Forest",
        description: "Timber and biomass ethically harvested from managed forests across Northeast India.",
        video: "/videos/process-step1.mp4"
    },
    {
        number: "02",
        title: "Processed and Graded",
        description: "Materials are cut, sorted, and quality-graded at certified facilities.",
        video: "/videos/process-step1.mp4" // Placeholder
    },
    {
        number: "03",
        title: "Listed and Delivered",
        description: "Verified vendors list products on our platform for buyers to discover and order.",
        video: "/videos/process-step1.mp4" // Placeholder
    }
];

const ProcessSection = () => {
    const shouldReduceMotion = useReducedMotion();
    return (
        <section className="py-24 bg-primary text-white overflow-hidden border-y border-white/5">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        Our Workflow
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight">
                        From Forest to Your Doorstep
                    </h2>
                </motion.div>

                <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[100px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : index * 0.2 }}
                            className="relative flex flex-col items-center md:items-start text-center md:text-left z-10 w-full md:w-1/3"
                        >
                            {/* Video Wrap */}
                            <div className="relative w-full aspect-video md:h-[200px] overflow-hidden rounded-2xl mb-8 shadow-2xl transition-transform hover:scale-[1.03] duration-500">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src={step.video} type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]" />
                            </div>

                            {/* Info */}
                            <div className="text-5xl lg:text-6xl font-bold text-accent mb-4 opacity-70">
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                                {step.title}
                            </h3>
                            <p className="text-text-muted text-lg leading-relaxed max-w-[300px]">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
