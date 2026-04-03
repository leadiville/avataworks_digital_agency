export const dynamic = "force-dynamic";

import Features from "../../components/homePage/Features"
import AboutUs from "../../components/homePage/AboutUs"
import Team from "../../components/homePage/Team"
import Footer from "../../components/Footer"
import { WelcomeAbout } from "../../components/AboutUs/WelcomeAbout"
import { Ifeatures, IOurTeam, Ireviews } from "@/types"
import OurTeam from "../../models/OurTeam";
import FeaturesM from "../../models/Features";
import { connectDb } from "@/lib/mongodb";
import { cleanMongoShape } from "@/utils/cleanMongoStructure";
import Testimonials from "@/components/homePage/Testimonials";
import Reviews from "@/models/Reviews";
import AboutAbout from "@/components/AboutUs/AboutAbout";

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const AboutPage = async function () {
    await connectDb();
    const ourTeam = cleanMongoShape(await OurTeam.find().lean<Partial<IOurTeam>[]>());
    const features = cleanMongoShape(await FeaturesM.find().lean<Ifeatures[]>());
    const testimonials = cleanMongoShape(await Reviews.find().lean<Partial<Ireviews>[]>());
    return (
        <>
            <WelcomeAbout />
            <AboutAbout />
            <Features featuresData={features} title={'We ensure digital brand success'} />
            <Testimonials testimonials={testimonials} />
            <Team teamMembers={ourTeam} />
            <Footer />
        </>
    )
}
export default AboutPage        