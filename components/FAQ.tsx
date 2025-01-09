'use client';

import Link from "next/link";
import {useState} from "react";

const faqs = [
    {
        question: "What makes EpiRobotics unique in medical robotics?",
        answer: "We are the first to develop a specialized robotic system for epidural injections, achieving sub-millimeter precision through AI-powered navigation and real-time monitoring. Our system reduces targeting errors from 70% to near-zero while significantly improving surgical efficiency.",
    },
    {
        question: "How does the system enhance patient safety?",
        answer: "Through multi-layer safety protocols, real-time monitoring, and automated risk assessment. Our system features force feedback control, automated path planning, and continuous validation throughout the procedure, ensuring optimal needle placement and minimal invasiveness.",
    },
    {
        question: "What is the integration process for hospitals?",
        answer: "Our system integrates seamlessly with existing hospital workflows through standardized protocols. We provide comprehensive training programs, technical support, and customized implementation plans to ensure smooth adoption and optimal utilization.",
    },
    {
        question: "What are the financial benefits for healthcare providers?",
        answer: "We offer flexible acquisition options including direct purchase and leasing models. The system delivers ROI through increased procedural efficiency, reduced complications, and improved patient outcomes. Our solution includes ongoing support and updates.",
    },
];

export default function FaqFour() {
    const [activeFAQ, setActiveFAQ] = useState(0);

    const toggleFAQ = (index:any) => {
        setActiveFAQ(activeFAQ === index ? 0 : index);
    };

    return (
        <section id="faq" className="py-[70px] sm:py-[130px] bg-white max-w-full">
            <div className="theme-container mx-auto grid grid-cols-6 lg:grid-cols-12 sm:gap-[63px]">
                <div className="col-span-6">
                    <h1 className="px-5 bg-red-600 border border-it-blue/20 text-white font-medium rounded-[30px] w-fit">
                        Technical Support
                    </h1>
                    <h2 className="mt-5 font-semibold text-24 sm:text-48 text-main-black">
                        Advanced Medical Robotics FAQ
                    </h2>
                    <p className="text-paragraph mt-[30px] max-w-[424px] mb-[18px]">
                        Our innovative robotic system represents a paradigm shift in spinal treatment technology, combining AI-powered precision with enhanced safety protocols. Designed to address the growing demand for minimally invasive procedures, our solution delivers superior surgical outcomes while streamlining clinical workflows. With integrated real-time navigation and comprehensive monitoring systems, we're setting new standards in medical robotics and patient care
                    </p>
                </div>
                <div className="col-span-6 mt-5 md:mt-0">
                    <div data-aos="fade-up" className="flex flex-col gap-2.5 w-full">
                        {/* <!-- faq single start  --> */}
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`py-5 px-2 md:px-[30px] w-full rounded-[10px] h7-faq-toggler overflow-hidden transition-all duration-300 max-h-fit h-fit border border-it-blue/15 ${
                                    activeFAQ === index ? "active-h7-faq " : ""
                                }`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex items-center justify-between w-full pointer-events-none h-fit">
                                    <h1 className="font-semibold sm:text-18 text-black">
                                        {faq.question}
                                    </h1>
                                    <svg
                                        width="19"
                                        height="10"
                                        viewBox="0 0 19 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 2L9.5 8L17 2"
                                            stroke="#5F57FF"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                {activeFAQ === index && (
                                    <p className="mt-3.5 text-paragraph pointer-events-none h-fit">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}