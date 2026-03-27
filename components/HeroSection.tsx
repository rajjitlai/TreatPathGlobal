"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, Variants, useReducedMotion } from "framer-motion";

const HeroSection = () => {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    const textVariants: Variants = {
        hidden: shouldReduceMotion ? { opacity: 0 } : { y: 50, opacity: 0 },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: shouldReduceMotion ? 0 : i * 0.2,
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1],
            },
        }),
    };

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden flex items-center justify-center"
        >
            {/* Background Video/Image */}
            <motion.div
                style={{ y: isMobile ? 0 : y }}
                className="absolute inset-0 z-0"
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/category-timber.jpg"
                    className="h-full w-full object-cover"
                >
                    <source src="/videos/hero-bg.mp4" type="video/mp4" />
                </video>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10" />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto">
                <motion.span
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="block text-accent font-inter font-bold tracking-[0.2em] uppercase text-sm mb-6"
                >
                    Northeast India's Timber Marketplace
                </motion.span>

                <motion.h1
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-8 leading-tight"
                >
                    Nature&apos;s Resources, <br />
                    Delivered to Your Door
                </motion.h1>

                <motion.p
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="text-lg md:text-xl font-inter text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Connecting timber and biomass vendors with buyers across India.
                </motion.p>

                <motion.div
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <a
                        href="#products"
                        className="px-10 py-4 bg-accent hover:bg-accent/90 text-primary font-bold rounded-lg transition-all duration-300 shadow-xl min-w-[200px]"
                    >
                        Browse Products
                    </a>
                    <a
                        href="/vendors"
                        className="px-10 py-4 border-2 border-white hover:bg-white/10 text-white font-bold rounded-lg transition-all duration-300 min-w-[200px]"
                    >
                        List With Us
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 1.5,
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <svg
                    className="w-8 h-8 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7-7-7"
                    />
                </svg>
            </motion.div>
        </section>
    );
};

export default HeroSection;
