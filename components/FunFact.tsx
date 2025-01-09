"use client";

export default function FunFact() {
    const context = [

    ]

    return (
        <section id="fun-fact">
            <div className="fun-fact-wrapper w-full xl:pb-[130px] pb-[60px]">
                <div className="mx-auto theme-container">
                    <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-[155px]">
                        <div className="w-full">
                            <span className="mb-5 section-title-top-tag">Our Fun Fact</span>
                            <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[50px]">
                                We worked with diverse clients and industries.
                            </h2>
                            <p className="text-paragraph mb-[40px] pl-5 border-l-[3px] border-red-600">
                                Defined by digital dynamism, our digital marketing agency
                                emerges beacon of innovation and strategic prowess.
                            </p>
                        </div>
                        <div className="relative flex flex-wrap w-full gap-5 mt-10 xl:mt-0 xl:flex-none">
                            <div className="xl:absolute left-20 top-0 rounded-[20px] w-[300px] h-[178px] border border-[#e7e3fa] bg-main-gray overflow-hidden group">
                                <div className="relative flex items-center justify-center p-8">
                                    <div className="relative z-10 flex flex-col items-center justify-between space-y-5">
                                        <p className="font-semibold text-center md:text-48 text-34 text-main-black">
                                            K+
                                        </p>
                                        <hr className="border-[3px] border-red-600 w-[80px]" />
                                        <p className="font-semibold text-center text-paragraph text-18">
                                            Project Complete
                                        </p>
                                    </div>
                                    <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-100 xl:opacity-0 group-hover:opacity-100">
                                        <img
                                            src="home-one-ff-item-shape.png"
                                            className="w-full h-full"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="xl:absolute left-0 bottom-5 rounded-[20px] w-[300px] h-[178px] border border-[#e7e3fa] bg-main-gray overflow-hidden group">
                                <div className="relative flex items-center justify-center p-8">
                                    <div className="relative z-10 flex flex-col items-center justify-between space-y-5">
                                        <p className="font-semibold text-center md:text-48 text-34 text-main-black">
                                            K+
                                        </p>
                                        <hr className="border-[3px] border-red-600 w-[80px]" />
                                        <p className="font-semibold text-center text-paragraph text-18">
                                            Satisfactions Customer
                                        </p>
                                    </div>
                                    <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-100 xl:opacity-0 group-hover:opacity-100">
                                        <img
                                            src="home-one-ff-item-shape.png"
                                            className="w-full h-full"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="xl:absolute -right-12 bottom-20 rounded-[20px] w-[300px] h-[178px] border border-[#e7e3fa] bg-main-gray overflow-hidden group">
                                <div className="relative flex items-center justify-center p-8">
                                    <div className="relative z-10 flex flex-col items-center justify-between space-y-5">
                                        <p className="font-semibold text-center md:text-48 text-34 text-main-black">
                                            K+
                                        </p>
                                        <hr className="border-[3px] border-red-600 w-[80px]" />
                                        <p className="font-semibold text-center text-paragraph text-18">
                                            Years Of Experience
                                        </p>
                                    </div>
                                    <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-100">
                                        <img
                                            src="home-one-ff-item-shape.png"
                                            className="w-full h-full"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}