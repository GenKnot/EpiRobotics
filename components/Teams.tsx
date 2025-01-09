import Link from "next/link";


export default function TeamTwo() {
    const teamMember  = [
        {
            name: "Dr. Xiaoming Zhang",
            jobTitle: "CEO",
            content: "Over 16 years of robotics and medical device R&D experience leading multinational projects. Published 12 core academic papers and holds 6 patents in surgical robotics",
            image: "ct1.png"
        },
        {
            name: "Dr. Zhixiang LIU",
            jobTitle: "Technical Lead",
            content: "Specialized in multi-system control and adaptive algorithms. Leading development of next-generation robotic surgical systems",
            image: "ct2.png"
        },
        {
            name: "Dr. Tong HE",
            jobTitle: "AI Director",
            content: "Expert in robotic image processing and AI. Pioneered breakthroughs in 3D reconstruction and computer vision for surgical navigation",
            image: "ct3.png"
        },
        {
            name: "Dr. Qingshun XU",
            jobTitle: "CMO",
            content: "10+ years experience in healthcare investment and operations. Successfully co-founded multiple medtech ventures",
            image: "ct4.png"
        }
    ];
    return (
        <section
            id="team"
            className=" py-16 md:py-[130px] relative"
        >
            <div className="w-full mx-auto theme-container">
                <div className="flex flex-col justify-between w-full xl:flex-row">
                    <div className="">
                        <h1 className="font-medium text-gray-900 border border-white/10 bg-white/5 px-5 rounded-[30px] py-1 w-fit">
                            Core Team
                        </h1>
                        <h2 className="pt-5 font-semibold text-gray-900 text-24 sm:text-48">
                            Leading Innovation in Medical Robotics
                        </h2>
                    </div>
                </div>
                <div className="grid gap-[30px] grid-cols-3 md:grid-cols-6 lg:grid-cols-12 mt-10 md:mt-[70px]">
                    {teamMember.map((member,index) => (
                        <div className="col-span-3" key={index}>
                            <div className="relative flex items-center justify-center overflow-hidden group/main">
                                <img
                                    src={member.image}
                                    alt=""
                                    className="object-cover w-4/5 overflow-hidden rounded-lg"
                                />
                            </div>

                            <h1 className="mt-6 font-semibold text-gray-900 text-22 white_card_title">
                                <span>{member.name}</span>
                            </h1>

                            <p className="mt-1 text-red-600 font-black">{member.jobTitle}</p>
                            <p className="mt-1 text-gray-900">{member.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}