"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const products = [
    {
        name: "Sawn Timber",
        description: "Premium grade teak and hardwood planks",
        image: "/images/category-timber.jpg",
        alt: "Sawn Timber"
    },
    {
        name: "Wood Chip Biomass",
        description: "Processed biomass for industrial use",
        image: "/images/category-biomass.jpg",
        alt: "Wood Chip Biomass"
    },
    {
        name: "Raw Logs",
        description: "Unprocessed timber logs direct from source",
        image: "/images/category-logs.jpg",
        alt: "Raw Logs"
    }
];

const ProductsSection = () => {
    const shouldReduceMotion = useReducedMotion();
    return (
        <section id="products" className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        Our Catalog
                    </span>
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary dark:text-white leading-tight">
                        Browse by Category
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : index * 0.15 }}
                            className="group cursor-pointer"
                        >
                            {/* Card Container */}
                            <div className="relative overflow-hidden rounded-3xl aspect-square shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-accent/20">
                                {/* Next Image */}
                                <Image
                                    src={product.image}
                                    alt={product.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-accent/20 transition-colors duration-500" />
                                
                                {/* Text Overlay (Optional, but prompt says "In Playfair Display") */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white z-10">
                                    <div className="bg-primary/40 backdrop-blur-md p-6 rounded-2xl border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-2xl font-playfair font-bold mb-2">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {product.description}
                                        </p>
                                        <motion.div
                                            className="w-12 h-0.5 bg-accent"
                                            whileHover={{ width: "100%" }}
                                        />
                                        <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-accent border-b border-transparent hover:border-accent transition-all">
                                            View Listings
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
