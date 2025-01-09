'use client';

import {Navigation} from "swiper/modules";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import Feature from "@/components/Feature";

export default function ServiceTwo() {
    const swiperOptions = {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".h2-case-study-next",
            prevEl: ".h2-case-study-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    };
    return (
        <section
            id="feature"
            className="w-full py-16 md:py-[130px] -top-2/4 bg-black-seo relative overflow-hidden"
        >
            <div>
                <img
                    src="/assets/images/home-two/shape-1.svg"
                    alt="bg-shape"
                    className="absolute bottom-20 moving-anim tran"
                />
            </div>
            {/* <!-- animated circle bg  --> */}
            <div className="absolute z-0 flex items-center justify-center w-2 h-2 -top-1 -left-1">
                <div className="animated_circle bg-white/5"></div>
                <div className="animated_circle2 bg-white/5"></div>
                <div className="animated_circle3 bg-white/5"></div>
                <div className="animated_circle4 bg-white/5"></div>
            </div>
            {/* <!-- animated circle bg  --> */}

            <div className="relative z-10 w-full mx-auto theme-container">
                <div className="flex flex-col items-center w-full gap-5">
                    <p className="px-5 py-1 text-white rounded-[30px] bg-red-600 font-black">
                        Advanced Medical Robotics Technology
                    </p>
                    <h1 className="text-white text-24 md:text-48 font-semibold max-w-[684px] w-full text-center">
                        Precision robotics and AI revolutionizing spinal care
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-7 md:mt-[70px]">
                    {/* <!-- single card start --> */}
                    <div
                        data-aos-duration="1000"
                        data-aos="fade-left"
                        className="col-span-1 p-5 md:p-[50px] rounded-3xl flex flex-col md:flex-row gap-[50px] relative overflow-hidden group border border-white/5 transition-all duration-300 before:inline-block before:w-[1000px] before:h-[1000px] before:rounded-full before:bg-red-600 before:absolute before:z-0 z-10 before:-bottom-[1000px] before:-right-[1000px] before:transition-all before:duration-1000 hover:before:-bottom-[300px] hover:before:-right-[100px]"
                    >
                        {/* <!-- animation circle  --> */}
                        <div className="absolute z-0 items-center justify-center hidden w-2 h-2 -bottom-1 -right-1 group-hover:flex">
                            <div className="animated_circle_sm bg-white/10"></div>
                            <div className="animated_circle_sm2 bg-white/10"></div>
                            <div className="animated_circle_sm3 bg-white/10"></div>
                            <div className="animated_circle_sm4 bg-white/10"></div>
                        </div>
                        <div className="relative z-10">
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M28 10V46" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M10 28H46" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <path
                                    d="M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z"
                                    stroke="white" strokeWidth="2"/>
                                <path
                                    d="M46 28C46 37.9411 37.9411 46 28 46C18.0589 46 10 37.9411 10 28C10 18.0589 18.0589 10 28 10C37.9411 10 46 18.0589 46 28Z"
                                    stroke="white" strokeWidth="2"/>
                            </svg>
                        </div>
                        <div className="relative z-10">
                            <h1 className="font-semibold text-white text-22">
                                Precision Surgery
                            </h1>
                            <p className="mt-4 transition-all duration-300 group-hover:text-white text-white/50">
                                Our robotic system achieves unprecedented accuracy in epidural injections through
                                advanced imaging processing and real-time navigation, ensuring optimal needle placement
                                with sub-millimeter precision for enhanced patient outcomes
                            </p>
                        </div>
                    </div>
                    {/* <!-- single card end --> */}
                    {/* <!-- single card start --> */}
                    <div
                        data-aos-duration="1000"
                        data-aos="fade-left"
                        data-aos-delay="100"
                        className="col-span-1 p-5 md:p-[50px] rounded-3xl flex flex-col md:flex-row gap-[50px] relative overflow-hidden group border border-white/5 transition-all duration-300 before:inline-block before:w-[1000px] before:h-[1000px] before:rounded-full before:bg-red-600 before:absolute before:z-0 z-10 before:-bottom-[1000px] before:-right-[1000px] before:transition-all before:duration-1000 hover:before:-bottom-[300px] hover:before:-right-[100px]"
                    >
                        {/* <!-- animation circle  --> */}
                        <div className="absolute z-0 items-center justify-center hidden w-2 h-2 -bottom-1 -right-1 group-hover:flex">
                            <div className="animated_circle_sm bg-white/10"></div>
                            <div className="animated_circle_sm2 bg-white/10"></div>
                            <div className="animated_circle_sm3 bg-white/10"></div>
                            <div className="animated_circle_sm4 bg-white/10"></div>
                        </div>
                        <div className="relative z-10">
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M46 18V38C46 41.3137 43.3137 44 40 44H16C12.6863 44 10 41.3137 10 38V18C10 14.6863 12.6863 12 16 12H40C43.3137 12 46 14.6863 46 18Z"
                                    stroke="white" strokeWidth="2"/>
                                <path d="M20 28L28 36L36 28" stroke="white" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M28 12V36" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M16 44H40" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <div className="relative z-10">
                            <h1 className="font-semibold text-white text-22">
                                Intelligent Control
                            </h1>
                            <p className="mt-4 transition-all duration-300 group-hover:text-white text-white/50">
                                Combining AI-powered path planning with real-time force feedback, our system provides
                                intelligent control throughout the entire surgical process, automatically adjusting to
                                patient anatomy and movement
                            </p>
                        </div>
                    </div>
                    {/* <!-- single card end --> */}
                    {/* <!-- single card start --> */}
                    <div
                        data-aos-duration="1000"
                        data-aos="fade-left"
                        data-aos-delay="200"
                        className="col-span-1 p-5 md:p-[50px] rounded-3xl flex flex-col md:flex-row gap-[50px] relative overflow-hidden group border border-white/5 transition-all duration-300 before:inline-block before:w-[1000px] before:h-[1000px] before:rounded-full before:bg-red-600 before:absolute before:z-0 z-10 before:-bottom-[1000px] before:-right-[1000px] before:transition-all before:duration-1000 hover:before:-bottom-[300px] hover:before:-right-[100px]"
                    >
                        {/* <!-- animation circle  --> */}
                        <div className="absolute z-0 items-center justify-center hidden w-2 h-2 -bottom-1 -right-1 group-hover:flex">
                            <div className="animated_circle_sm bg-white/10"></div>
                            <div className="animated_circle_sm2 bg-white/10"></div>
                            <div className="animated_circle_sm3 bg-white/10"></div>
                            <div className="animated_circle_sm4 bg-white/10"></div>
                        </div>
                        <div className="relative z-10">
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M28 8L10 16V28C10 39.0457 17.7434 49.3333 28 52C38.2566 49.3333 46 39.0457 46 28V16L28 8Z"
                                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M28 20L24 28H32L28 36" stroke="white" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="relative z-10">
                            <h1 className="font-semibold text-white text-22">
                                Safety Monitoring
                            </h1>
                            <p className="mt-4 transition-all duration-300 group-hover:text-white text-white/50">
                                Multi-layer safety protocols with continuous monitoring ensure patient protection through automated risk assessment, emergency response systems, and real-time procedure validation
                            </p>
                        </div>
                    </div>
                    {/* <!-- single card end --> */}

                    {/* <!-- single card start --> */}
                    <div
                        data-aos-duration="1000"
                        data-aos="fade-left"
                        data-aos-delay="200"
                        className="col-span-1 p-5 md:p-[50px] rounded-3xl flex flex-col md:flex-row gap-[50px] relative overflow-hidden group border border-white/5 transition-all duration-300 before:inline-block before:w-[1000px] before:h-[1000px] before:rounded-full before:bg-red-600 before:absolute before:z-0 z-10 before:-bottom-[1000px] before:-right-[1000px] before:transition-all before:duration-1000 hover:before:-bottom-[300px] hover:before:-right-[100px]"
                    >
                        {/* <!-- animation circle  --> */}
                        <div className="absolute z-0 items-center justify-center hidden w-2 h-2 -bottom-1 -right-1 group-hover:flex">
                            <div className="animated_circle_sm bg-white/10"></div>
                            <div className="animated_circle_sm2 bg-white/10"></div>
                            <div className="animated_circle_sm3 bg-white/10"></div>
                            <div className="animated_circle_sm4 bg-white/10"></div>
                        </div>
                        <div className="relative z-10">
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M28 16V40" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M16 28H40" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <path
                                    d="M46 28C46 37.9411 37.9411 46 28 46C18.0589 46 10 37.9411 10 28C10 18.0589 18.0589 10 28 10"
                                    stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <path
                                    d="M38 10.5858C40.1716 8.41421 43.8284 8.41421 46 10.5858C48.1716 12.7574 48.1716 16.4142 46 18.5858L28 36.5858L19.4142 28L38 10.5858Z"
                                    stroke="white" strokeWidth="2"/>
                            </svg>
                        </div>
                        <div className="relative z-10">
                            <h1 className="font-semibold text-white text-22">
                                Clinical Integration
                            </h1>
                            <p className="mt-4 transition-all duration-300 group-hover:text-white text-white/50">
                                Seamlessly integrating into existing surgical workflows, our system enhances efficiency
                                while maintaining the highest standards of medical practice through intuitive interfaces
                                and comprehensive data analysis
                            </p>
                        </div>
                    </div>
                    {/* <!-- single card end --> */}

                </div>

                {/* <!-- case study start  --> */}
                <div className="pt-16 md:pt-[130px]" id="caseStudies">
                    <p className="px-5 py-1 text-white rounded-[30px] bg-red-600 font-medium w-fit">
                        Advanced Medical Solutions
                    </p>
                    <div className="flex flex-col items-end justify-between w-full mt-5 sm:flex-row">
                        <h1 className="max-w-[660px] text-24 sm:text-48 text-white font-semibold">
                            Revolutionary Surgical Technology in Action
                        </h1>
                        <div className="flex gap-2.5">
                            <button className="h2-case-study-next w-8 h-8 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-white/10 flex items-center justify-center overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-blue-seo before:bg-blue-seo relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                                <svg
                                    className="relative z-10 pointer-events-none"
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.25 12L1 6.75M1 6.75L6.25 1.5M1 6.75L15 6.75"
                                        stroke="white"
                                        strokeOpacity="0.55"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button className="h2-case-study-prev rotate-180 w-8 h-8 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-white/10 flex items-center justify-center overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-blue-seo before:bg-blue-seo relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                                <svg
                                    className="relative z-10 pointer-events-none"
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.25 12L1 6.75M1 6.75L6.25 1.5M1 6.75L15 6.75"
                                        stroke="white"
                                        strokeOpacity="0.55"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <Swiper
                        {...swiperOptions}
                        className="mt-10 overflow-hidden swiper case_study_slider md:mt-16"
                    >
                        <SwiperSlide>
                            {" "}
                            <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-red-600 before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                                <div className="relative z-10 px-2 md:px-10">
                                    <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-red-600 group-hover:text-white">
                                        Smart Planning System
                                    </p>
                                    <a href="">
                                        <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-white underlines">
                                            AI-powered surgical planning reduces preparation time by 60% while improving accuracy through advanced 3D visualization and risk assessment
                                        </h1>
                                    </a>
                                </div>
                                <img
                                    src="cc1.png"
                                    alt=""
                                    className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                                />
                                {/* <!-- animation circle  --> */}
                                <div className="absolute z-0 items-center justify-center hidden w-2 h-2 bottom-10 -right-1 group-hover:flex">
                                    <div className="animated_circle_sm bg-white/10"></div>
                                    <div className="animated_circle_sm2 bg-white/10"></div>
                                    <div className="animated_circle_sm3 bg-white/10"></div>
                                    <div className="animated_circle_sm4 bg-white/10"></div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            {" "}
                            <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-red-600 before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                                <div className="relative z-10 px-2 md:px-10">
                                    <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-red-600 group-hover:text-white">
                                        Precision Control
                                    </p>
                                    <a href="">
                                        <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-white underlines">
                                            Sub-millimeter accuracy achieved through real-time imaging and optical tracking, with automatic compensation for patient movement
                                        </h1>
                                    </a>
                                </div>
                                <img
                                    src="cc2.png"
                                    alt=""
                                    className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                                />
                                {/* <!-- animation circle  --> */}
                                <div className="absolute z-0 items-center justify-center hidden w-2 h-2 bottom-10 -right-1 group-hover:flex">
                                    <div className="animated_circle_sm bg-white/10"></div>
                                    <div className="animated_circle_sm2 bg-white/10"></div>
                                    <div className="animated_circle_sm3 bg-white/10"></div>
                                    <div className="animated_circle_sm4 bg-white/10"></div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-red-600 before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                                <div className="relative z-10 px-2 md:px-10">
                                    <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-red-600 group-hover:text-white">
                                        Robotic Precision
                                    </p>
                                    <a href="">
                                        <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-white underlines">
                                            Advanced 6-DOF robotic system combines precise control with intelligent force feedback for optimal surgical performance
                                        </h1>
                                    </a>
                                </div>
                                <img
                                    src="cc3.png"
                                    alt=""
                                    className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                                />
                                {/* <!-- animation circle  --> */}
                                <div className="absolute z-0 items-center justify-center hidden w-2 h-2 bottom-10 -right-1 group-hover:flex">
                                    <div className="animated_circle_sm bg-white/10"></div>
                                    <div className="animated_circle_sm2 bg-white/10"></div>
                                    <div className="animated_circle_sm3 bg-white/10"></div>
                                    <div className="animated_circle_sm4 bg-white/10"></div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-red-600 before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                                <div className="relative z-10 px-2 md:px-10">
                                    <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-red-600 group-hover:text-white">
                                        Outcome Validation
                                    </p>
                                    <a href="">
                                        <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-white underlines">
                                            Comprehensive post-operative analysis provides detailed metrics and automated reporting for continuous improvement
                                        </h1>
                                    </a>
                                </div>
                                <img
                                    src="cc4.png"
                                    alt=""
                                    className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                                />
                                {/* <!-- animation circle  --> */}
                                <div className="absolute z-0 items-center justify-center hidden w-2 h-2 bottom-10 -right-1 group-hover:flex">
                                    <div className="animated_circle_sm bg-white/10"></div>
                                    <div className="animated_circle_sm2 bg-white/10"></div>
                                    <div className="animated_circle_sm3 bg-white/10"></div>
                                    <div className="animated_circle_sm4 bg-white/10"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* <!-- case study end  --> */}
            </div>
        </section>
    );
}