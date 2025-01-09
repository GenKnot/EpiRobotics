'use client';

import React, {useEffect} from "react";
import {Autoplay, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Link from "next/link";
import AOS from 'aos';

// import dynamic from 'next/dynamic';
//
// const GLightbox = dynamic(() => import('glightbox'), {
// });

export default function HeroFive() {
    const swiperOptions = {
        modules: [Autoplay, Navigation],
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        pagination: false,
        navigation: {
            nextEl: ".h5-hero-next",
            prevEl: ".h5-hero-prev",
        },
    };

    const context = [
        {
            id: "c001",
            title1: "Transforming Spinal Surgery",
            title2: "The First Robotic System for Precise Epidural Injections",
            buttons: "Learn More"
        },

        {
            id: "c002",
            title1: "Precision Meets Innovation",
            title2: "The Future of Lumbar Transforaminal Epidural Injections",
            buttons: "Learn More"
        },

        {
            id: "c003",
            title1: "Enhanced Safety. Better Outcomes.",
            title2: "The Next Generation Solution for Spinal Treatments",
            buttons: "Learn More"
        }
    ]

    const context2 = [
        {
            id: "c004",
            title: "Precision Surgery",
            content: "Advanced robotic system delivering unprecedented accuracy in epidural injections with real-time navigation",
            svgPath: {
                path1: "M16 4L16 28M4 16H28M19 16C19 17.6569 17.6569 19 16 19C14.3431 19 13 17.6569 13 16C13 14.3431 14.3431 13 16 13C17.6569 13 19 14.3431 19 16ZM26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16Z"
            }
        },
        {
            id: "c005",
            title: "Enhanced Safety",
            content: "Minimizing risks through automated path planning and force feedback control for optimal patient outcomes",
            svgPath: {
                path1: "M16 2L4 7V14C4 20.7 9.1 27.1 16 29C22.9 27.1 28 20.7 28 14V7L16 2ZM16 15.9H24C23.4 20.7 20.1 25.1 16 26.8V16H8V8.9L16 5.2V15.9Z"
            }
        },
        {
            id: "c006",
            title: "AI-Powered Control",
            content: "Intelligent system combining X-ray imaging, 3D registration, and machine learning for precise surgical guidance",
            svgPath: {
                path1: "M28 22V10C28 8.9 27.1 8 26 8H6C4.9 8 4 8.9 4 10V22C4 23.1 4.9 24 6 24H26C27.1 24 28 23.1 28 22ZM12 16L16 20L20 16",
                path2: "M16 4V20M8 28H24"
            }
        }
    ]

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    // useEffect(() => {
    //     const lightbox = GLightbox({
    //         selector: ".video-play-btn",
    //         touchNavigation: true,
    //         loop: false,
    //     });
    //
    //     return () => lightbox.destroy();
    // }, []);

    return (
        <section className="relative w-full py-3 overflow-hidden bg-white" id="home">
            {/* <!-- background  --> */}
            <img src="/b5.png" alt="" className="w-full object-cover absolute top-0 z-0 buisness-dark-black min-h-[520px]"/>
            {/* <!-- content  --> */}

            <div className="relative z-10 w-full mx-auto theme-container">
                <div className="grid grid-cols-7 lg:grid-cols-12 pt-[113px] xl:pt-[213px] pb-[114px]">
                    <div className="col-span-7">
                        <div>
                            <Swiper {...swiperOptions} className="h5_hero_slider">
                                {context.map((item:any, index:any) => (
                                    <SwiperSlide className="pb-4" key={index}>
                                        <div
                                            className="flex gap-2.5 relative z-10 px-3 sm:px-6 py-1.5 sm:py-3 rounded-[40px] border border-white/10 bg-white/5 items-center w-fit">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_460_23214)">
                                                    <path
                                                        d="M9.99955 10.9371L0.0498047 7.62184C0.131053 7.4156 0.315423 7.26529 0.534167 7.23435L6.68714 6.32812L9.99955 10.9371Z"
                                                        fill="#FEC461"
                                                    />
                                                    <path
                                                        d="M10.0002 10.937V16.6775L4.49725 19.6149C4.28475 19.7274 4.03195 19.709 3.83789 19.5649L10.0002 10.937Z"
                                                        fill="#F7B84E"
                                                    />
                                                    <path
                                                        d="M10.0005 10.937L3.83784 19.5646C3.64753 19.4243 3.55035 19.1837 3.59128 18.9431L4.64094 12.7248L10.0005 10.937Z"
                                                        fill="#FEC461"
                                                    />
                                                    <path
                                                        d="M10 10.9368L4.64079 12.7246L0.190595 8.31813C0.0190365 8.14938 -0.0437743 7.89595 0.0312237 7.66814C0.0377861 7.65252 0.0405985 7.63658 0.0502858 7.62158L10 10.9368Z"
                                                        fill="#F7B84E"
                                                    />
                                                    <path
                                                        d="M9.99992 0.312012V10.9367L6.6875 6.32748L9.44055 0.665128C9.54368 0.449196 9.76242 0.312012 9.99992 0.312012Z"
                                                        fill="#FEC461"
                                                    />
                                                    <path
                                                        d="M13.3124 6.32748L10 10.9367V0.312012C10.2375 0.312012 10.4562 0.449196 10.5594 0.665128L13.3124 6.32748Z"
                                                        fill="#F7B84E"
                                                    />
                                                    <path
                                                        d="M19.9497 7.62167L10 10.9369L13.3124 6.32764L19.4654 7.23386C19.6841 7.26511 19.8685 7.41511 19.9497 7.62167Z"
                                                        fill="#FEC461"
                                                    />
                                                    <path
                                                        d="M19.8123 8.31813L15.3592 12.7246L10 10.9368L19.9497 7.62158C19.9591 7.63689 19.9622 7.65283 19.9688 7.66814C20.0435 7.89626 19.981 8.14938 19.8123 8.31813Z"
                                                        fill="#F7B84E"
                                                    />
                                                    <path
                                                        d="M16.1623 19.5646L10 10.937L15.3592 12.7248L16.4092 18.9431C16.4498 19.184 16.353 19.4243 16.1623 19.5646Z"
                                                        fill="#FEC461"
                                                    />
                                                    <path
                                                        d="M16.1623 19.5646C15.9686 19.7087 15.7155 19.7274 15.5033 19.6146L10 16.6775V10.937L16.1623 19.5646Z"
                                                        fill="#F7B84E"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_460_23214">
                                                        <rect width="20" height="20" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span className="font-semibold text-white text-18 sm:text-20">
                                          {item.title1}
                                        </span>
                                        </div>
                                        <h1 className="mt-4 font-semibold text-white text-24 sm:text-48 xl:text-75 sm:mt-8">
                                            {item.title2}
                                        </h1>
                                        <div className="flex flex-col gap-8 pt-5 sm:flex-row sm:pt-11">
                                            <Link href="/services">
                                                <div
                                                    className="home-two-btn-bg group bg-buisness-red border-buisness-red py-3 sm:py-[15px]">
                                                <span
                                                    className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-buisness-red font-inter">
                                                  {item.buttons}
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
                                                            className="transition-all duration-300 group-hover:stroke-buisness-red stroke-white"
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
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div
                        className="flex items-end justify-end w-full h-full col-span-7 gap-2 xl:col-span-5 xl:flex-col xl:justify-center">
                        <button
                            className="group h5-hero-prev border border-white/15 w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white/10 overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-buisness-red before:bg-buisness-red relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                            <svg
                                className="relative z-10 pointer-events-none"
                                width="12"
                                height="10"
                                viewBox="0 0 12 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button
                            className="group rotate-180 h5-hero-next border border-white/15 w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white/10 overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-buisness-red before:bg-buisness-red relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                            <svg
                                className="relative z-10 pointer-events-none"
                                width="12"
                                height="10"
                                viewBox="0 0 12 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>


                {/* <!-- cards  --> */}
                <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[30px] pb-16 sm:pb-[130px]">
                    {context2.map((item: any, i:any) => (
                        <div data-aos="fade-up" key={i}
                             className="px-6 py-5 sm:px-[50px] col-span-4 sm:py-10 bg-white rounded-[20px] group shadow-card">
                            <div
                                className="p-5 transition-all duration-300 ease-out rounded-full bg-buisness-red/5 group-hover:bg-buisness-red group-hover:shadow-business-red w-fit">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path className="transition-all duration-300 group-hover:stroke-white"
                                          d={item.svgPath.path1}
                                          stroke="#D90A2C"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                    />
                                    {item.svgPath.path2 && (
                                        <path className="transition-all duration-300 group-hover:stroke-white"
                                              d={item.svgPath.path2}
                                              stroke="#D90A2C"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                        />
                                    )}
                                </svg>
                            </div>
                            <Link href="#services">
                                <h1 className="pt-6 font-semibold text-22 text-main-black">
                                    {item.title}
                                </h1>
                            </Link>
                            <p className="text-paragraph pt-3.5">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}