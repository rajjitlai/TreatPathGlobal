"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        name: "Rajan Singh",
        location: "Imphal, Manipur",
        quote: "Treat Path Global helped me reach buyers I never could have found on my own. My timber sales have doubled in 6 months.",
        image: "/images/about-facility.jpg" // Placeholder for testimonial-1
    },
    {
        name: "Mohan Das",
        location: "Dimapur, Nagaland",
        quote: "The listing process was simple and the platform team was very supportive throughout.",
        image: "/images/about-facility.jpg" // Placeholder for testimonial-2
    },
    {
        name: "Bikash Sharma",
        location: "Guwahati, Assam",
        quote: "Best platform for timber and biomass in the Northeast. Highly recommended for any wood supplier.",
        image: "/images/about-facility.jpg" // Placeholder for testimonial-3
    }
];

const TestimonialsSection = () => {
    const shouldReduceMotion = useReducedMotion();
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        Our Success Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary leading-tight">
                        Trusted by Vendors Across the Region
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : index * 0.15 }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="flex flex-col items-center mb-6">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-accent/20">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h4 className="text-lg font-bold text-primary dark:text-white">
                                    {item.name}
                                </h4>
                                <p className="text-sm text-accent font-medium">
                                    {item.location}
                                </p>
                            </div>

                            {/* Stars */}
                            <div className="flex justify-center mb-4 space-x-1 text-accent">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-lg">★</span>
                                ))}
                            </div>

                            <p className="text-text-muted italic leading-relaxed">
                                &quot;{item.quote}&quot;
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
