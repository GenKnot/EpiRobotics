import Link from "next/link";

export default function OtherAbout() {
    return (
        <div className="bg-black-seo" id="about">
            {/* <!-- about start  --> */}
            <section className="bg-black-seo py-[70px] sm:py-[130px]">
                <div className="grid grid-cols-7 mx-auto theme-container lg:grid-cols-12">
                    <div className="col-span-6 md:col-span-7">
                        <div className="relative w-fit">
                            <img
                                src="m01.png"
                                alt=""
                                className=""
                            />
                        </div>
                    </div>
                    <div className="col-span-7 md:col-span-5">
                        <div className="flex items-center h-full">
                            <div className="mt-10 md:mt-0">
                                <h1 className="px-5 bg-red-600 border border-white/20 text-white font-medium rounded-[30px] w-fit">
                                    Pioneering Medical Innovation
                                </h1>
                                <h2 className="max-w-[747px] font-semibold text-24 sm:text-48 text-white mt-5">
                                    Transforming Spinal Treatment Through AI-Powered Robotics
                                </h2>
                                <p className="mb-10 text-white mt-9">
                                    With 60-80% of the global population affected by lower back pain, our advanced robotic system revolutionizes epidural injections. EpiRobotics combines cutting-edge AI technology with precision engineering to achieve unprecedented accuracy in spinal procedures, reducing risks and improving patient outcomes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- about end  --> */}
        </div>
    );
}
