export default function CtaTwo() {
    return (
        <section className="relative w-full border-b bg-black-seo border-white/5">
            <div className="grid w-full grid-cols-1 mx-auto theme-container xl:grid-cols-2">
                <div className="col-span-1 py-10 md:py-[130px] xl:border-r border-white/5 relative">
                    <h1 className="text-white font-medium py-1 px-5 rounded-[30px] border-[1.2px] bg-red-600 border-white/10 w-fit">
                        Market Opportunity
                    </h1>
                    <h2 className="max-w-[470px] font-semibold text-24 sm:text-48 text-white pt-5 mb-6">
                        Leading the $8.17B Medical Robotics Market
                    </h2>
                    <p className="text-white/70 mb-8 max-w-[450px]">
                        Our specialized robotic system addresses a critical market need in epidural injections. With the global market projected to reach $8.17 billion by 2030 and spinal surgery robotics growing at 12.68% CAGR to $550M by 2032, we're positioned at the forefront of medical innovation.
                    </p>
                </div>

                <div className="col-span-1 pb-16 pt-0 xl:pt-[130px] md:pb-[130px] flex flex-col xl:items-end">
                    <div className="absolute top-0 right-0 z-0 w-full h-full anim-light-bg"></div>
                    <div>
                        <h1 className="text-white font-medium py-1 px-5 rounded-[30px] border-[1.2px] bg-red-600 border-white/10 w-fit">
                            Business Model
                        </h1>
                        <h2 className="max-w-[380px] font-semibold text-24 md:text-48 text-white pt-5 mb-6">
                            Flexible Solutions for Healthcare Providers
                        </h2>
                        <p className="text-white/70 mb-8 max-w-[400px]">
                            We offer flexible acquisition options including direct purchase and leasing models. Our comprehensive approach includes full training programs, technical support, and strategic partnerships with leading medical institutions worldwide.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}