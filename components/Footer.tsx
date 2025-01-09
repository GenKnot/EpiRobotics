'use client';

import Link from "next/link";

export default function Footer() {
    const footerLinks = [
        {href: "#home", label: "Home"},
        {href: "#about", label: "About"},
        {href: "#feature", label: "Features"},
        {href: "#team", label: "Team"},
        {href: "#contact", label: "Contact"}
    ];

    return (
        <footer className="pt-20 bg-buisness-light-black">
            <div className="flex flex-wrap justify-between gap-5 mx-auto mb-20 theme-container">
                {/* Company Description */}
                <div className="w-fit max-w-[300px]">
                    <img src="logo-min.png" alt="EpiRobotics logo" className="h-12 w-auto"/>
                    <p className="max-w-[300px] text-white my-6">
                        Leading innovation in medical robotics with advanced AI-powered systems for precise epidural
                        injections, enhancing surgical safety and patient outcomes.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="w-fit max-w-[300px]">
                    <div className="flex flex-col items-start">
                        <h1 className="font-semibold text-white text-18">Quick Links</h1>
                        <ul className="mt-3.5">
                            {footerLinks.map((link) => (
                                <li key={link.href} className="mt-2">
                                    <Link href={link.href}>
                                        <div
                                            className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white">
                                            <svg
                                                className="transition-all duration-300"
                                                width="6"
                                                height="12"
                                                viewBox="0 0 6 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1L5 6L1 11"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="transition-all duration-300">
                                                {link.label}
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact */}
                <div className="w-fit max-w-[300px]">
                    <h1 className="font-semibold text-white text-18">Contact</h1>
                    <div
                        className="flex gap-2 items-center relative group font-medium text-white/50 hover:text-white transition-all duration-300 mt-3.5">
                        <span className="transition-all duration-300">
                            info@epirobotics.com <br/>
                            +1 123 456 7890
                        </span>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="w-fit max-w-[300px]">
                    <h1 className="font-semibold text-white text-18">Join Our Journey</h1>
                    <p className="transition-all duration-300 text-white/50 pt-3.5">
                        Seize the opportunity to revolutionize medical robotics. Join us in shaping the future of
                        surgical precision.
                    </p>
                    <Link href="/contact">
                        <div className="home-two-btn-bg py-3.5 group bg-buisness-red border-buisness-red w-fit mt-2.5">
                            <span
                                className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-buisness-red font-inter">
                                Get Started
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
            </div>

            {/* Copyright */}
            <div className="w-full h-[65px] bg-buisness-dark-black">
                <div className="h-full mx-auto theme-container">
                    <div className="flex items-center justify-center w-full h-full">
                        <span className="text-white/50">
                            2025 © All rights reserved by <b className="text-white">EpiRobotics</b>
                        </span>
                        <div className="relative flex justify-center w-full sm:w-fit">
                            <a
                                href="#"
                                aria-label="go top"
                                className="w-[45px] h-[45px] rounded-full border-[3px] border-buisness-light-black flex justify-center items-center bg-red-600 absolute -top-[55px]"
                            >
                            <span>
                                    <svg
                                        width="13"
                                        height="18"
                                        viewBox="0 0 13 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.33333 1V17M6.33333 1L11.6667 6.33333M6.33333 1L1 6.33333"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}