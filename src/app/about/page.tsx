import React from "react"
import Features from "../components/homePage/Features"
import AboutUs from "../components/homePage/AboutUs"
import Team from "../components/homePage/Team"
import Footer from "../components/Footer"
import { WelcomeAbout } from "../components/AboutUs/WelcomeAbout"
import { Ifeatures, Ifooter, IOurTeam } from "@/types"
// import AboutHero from "../components/AboutUs/AboutHero"

const AboutPage = async function () {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/content`);
    const data = await res.json() as {
        features: Ifeatures[],
        ourTeam: IOurTeam[],
        footer: Ifooter
    }


    const { features, ourTeam, footer } = data;

    return (
        <div>
            <WelcomeAbout />
            <Features featuresData={features} title={'At Avataworks, we ensure digital brand success'} />
            <AboutUs />
            {/* <Faq faqs={faq.servicePage} /> */}
            <Team teamMembers={ourTeam} />
            {/* <AboutGoals /> */}
            <Footer footer={footer} />
        </div>
    )
}
export default AboutPage    