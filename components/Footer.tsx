import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#1A1208] text-text-muted py-24 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-16">
                    {/* Column 1: Brand */}
                    <div className="col-span-1">
                        <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                            Treat Path Global
                        </h3>
                        <p className="text-lg leading-relaxed max-w-xs">
                            Connecting the best of Northeast India's nature with the rest of the world. Your trusted partner for ethical timber and biomass.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="col-span-1">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-4">
                            {["Home", "Products", "About", "Vendors", "Contact"].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={link === "Home" ? "/" : `#${link.toLowerCase()}`}
                                        className="hover:text-accent transition-colors duration-200"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="col-span-1">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
                            Contact
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <span className="text-accent">✉</span>
                                <span>info@treatpathglobal.com</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <span className="text-accent">☏</span>
                                <span>+91-XXXXXXXXXX</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <span className="text-accent">📍</span>
                                <span>Imphal, Manipur, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Follow Us */}
                    <div className="col-span-1">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
                            Follow Us
                        </h4>
                        <div className="flex space-x-6">
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                                f
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                                i
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                                w
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Treat Path Global. All rights reserved.
                    </p>
                    <div className="flex space-x-8 text-sm">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
