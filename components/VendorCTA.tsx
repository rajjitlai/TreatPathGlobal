"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";

const VendorCTA = () => {
    const sectionRef = useRef(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[500px] w-full flex items-center justify-center overflow-hidden"
        >
            {/* Parallax Background */}
            <motion.div
                style={{ y: shouldReduceMotion ? 0 : y }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/images/cta-background.jpg"
                    alt="Timber production facility"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                        Grow Your Timber Business With Us
                    </h2>
                    <p className="text-xl md:text-2xl font-inter text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                        List your timber and biomass products and reach thousands of buyers across Northeast India.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 bg-accent hover:bg-accent/90 text-primary font-bold rounded-2xl shadow-2xl transition-all duration-300 transform hover:shadow-accent/20"
                    >
                        Start Listing Today
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default VendorCTA;
