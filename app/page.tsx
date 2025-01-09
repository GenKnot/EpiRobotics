import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ServiceTwo from "@/components/Service";
import TeamTwo from "@/components/Teams";
import OtherAbout from "@/components/OtherAbout";
import CtaTwo from "@/components/Cta";
import FaqFour from "@/components/FAQ";

export default function Home() {
    return (
        <div>
            <Header/>
            <Hero/>
            <Feature />
            <ServiceTwo />
            <TeamTwo />
            <OtherAbout />
            <About />
            <CtaTwo />
            <FaqFour />
            <Footer />
        </div>
    );
}
