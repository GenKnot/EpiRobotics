'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Header() {
    const headerRef = useRef<HTMLHeadElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                if (window.scrollY > 98) {
                    headerRef.current.classList.add("bg-buisness-light-black");
                } else {
                    headerRef.current.classList.remove("bg-buisness-light-black");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#feature", label: "Feature" },
        { href: "#team", label: "Team" }
    ];

    return (
        <header
            ref={headerRef}
            className="fixed top-0 z-50 w-full px-4 py-6 transition-all duration-300 ease-in-out border-b border-white/10"
            id="h5-header"
        >
            <div className="relative flex items-center justify-between w-full max-w-[1440px] mx-auto">
                {/* Logo */}
                <Link href="#" className="block">
                    <img
                        src="./logo-min.png"
                        alt="logo"
                        className="h-8 md:h-auto md:max-h-[40px] w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8 lg:gap-10 text-base font-medium text-white">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="text-white transition-colors duration-300 hover:text-buisness-red"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="p-2 md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="space-y-2">
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                    </div>
                </button>

                {/* Desktop CTA Button */}
                <div className="hidden md:block">
                    <Link href="#about">
                        <div className="home-two-btn-bg py-2.5 group bg-buisness-red border-buisness-red">
                            <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-buisness-red font-inter">
                                Learn More
                            </span>
                            <svg
                                className="relative z-10"
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className="transition-all duration-300 group-hover:stroke-buisness-red"
                                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`absolute top-full left-0 w-full bg-buisness-light-black border-b border-white/10 transition-all duration-300 md:hidden ${
                        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                >
                    <nav className="px-4 py-6">
                        <ul className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="block text-white hover:text-buisness-red transition-colors duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-4">
                                <Link href="#about">
                                    <div className="home-two-btn-bg py-2.5 group bg-buisness-red border-buisness-red w-full">
                                        <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-buisness-red font-inter">
                                            Learn More
                                        </span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}