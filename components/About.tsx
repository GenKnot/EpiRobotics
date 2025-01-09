import Link from "next/link";

export default function About() {
    return (
        <section>
            <div className="w-full mx-auto theme-container my-[70px] sm:my-[130px]">
                <div className="grid grid-cols-6 xl:grid-cols-12 gap-y-10">
                    <div className="col-span-6">
                        <div className="max-w-[476px]">
                            <h1 className="border text-main-black border-buisness-red/10 py-0.5 px-5 rounded-[30px] w-fit bg-buisness-red/5 font-medium">
                                Technology Excellence
                            </h1>
                            <h2 className="pt-5 font-semibold text-24 sm:text-48 text-main-black">
                                Advanced Robotic System for Enhanced Surgical Precision
                            </h2>
                            <p className="pt-5 text-paragraph sm:pt-10">
                                Our integrated solution delivers superior accuracy and safety in epidural procedures through real-time navigation and AI-powered control
                            </p>
                            <ul className="flex flex-col gap-0.5 mt-6 mb-11">
                                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-buisness-red tick-before before:flex before:justify-center before:items-center text-main-black">
                                    Sub-millimeter precision with 3D visualization
                                </li>
                                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-buisness-red tick-before before:flex before:justify-center before:items-center text-main-black">
                                    Multi-layer safety monitoring system
                                </li>
                                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-buisness-red tick-before before:flex before:justify-center before:items-center text-main-black">
                                    Real-time force feedback control
                                </li>
                                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-buisness-red tick-before before:flex before:justify-center before:items-center text-main-black">
                                    Automated surgical path planning
                                </li>
                                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-buisness-red tick-before before:flex before:justify-center before:items-center text-main-black">
                                    Comprehensive outcome validation
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="relative col-span-6 flex flex-col sm:flex-row justify-center items-center gap-[30px]">
                        <svg
                            className="absolute z-0 max-w-full -top-16"
                            width="465"
                            height="465"
                            viewBox="0 0 465 465"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="232.5"
                                cy="232.5"
                                r="231.9"
                                stroke="#161519"
                                strokeOpacity="0.07"
                                strokeWidth="1.2"
                            />
                        </svg>
                        <img
                            data-aos="fade-left"
                            src="c02.png"
                            alt=""
                            className="relative z-10 hidden sm:block"
                        />
                        <img
                            data-aos="fade-left"
                            data-aos-delay="100"
                            src="c03.png"
                            alt=""
                            className="relative z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
