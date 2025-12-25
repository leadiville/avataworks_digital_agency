export const dynamic = "force-dynamic";

import Features from "../components/homePage/Features"
import AboutUs from "../components/homePage/AboutUs"
import Team from "../components/homePage/Team"
import Footer from "../components/Footer"
import { WelcomeAbout } from "../components/AboutUs/WelcomeAbout"
import { Ifeatures, Ifooter, IOurTeam } from "@/types"
import { connectDb } from "../../../lib/mongodb"
import OurTeam from "@/../models/OurTeam";
import FooterM from "@/../models/Footer";
import FeaturesM from "@/../models/Features";

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const AboutPage = async function () {
    await connectDb();
    const ourTeam = await OurTeam.find().lean<Partial<IOurTeam>[]>();
    const footer = await FooterM.findOne().lean<Ifooter>();
    const features = await FeaturesM.find().lean<Partial<Ifeatures>[]>();

    return (
        <>
            <WelcomeAbout />
            <Features featuresData={features} title={'At Avataworks, we ensure digital brand success'} />
            <AboutUs />
            {/* <Faq faqs={faq.servicePage} /> */}
            <Team teamMembers={ourTeam} />
            {/* <AboutGoals /> */}
            {footer && <Footer footer={footer} />}
        </>
    )
}
export default AboutPage    