export const dynamic = "force-dynamic";
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
import { Timeline } from "@/components/AboutUs/Timeline";
import ReadyToWork from "@/components/AboutUs/ReadyToWork";
import Banner from "@/components/AboutUs/ReadyToWork";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
            {/* <Features featuresData={features} title={'We ensure digital brand success'} /> */}
            <Timeline />
            <Team teamMembers={ourTeam} />
            <Testimonials testimonials={testimonials} />
            <Banner title="Ready to Work With AVATAWorks?" subtitle="Book a free AVATA session. We diagnose, prioritise, and build the growth plan that fits your brand." buttonText="Get a Quote" icon={faArrowRight} />
            <Footer />
        </>
    )
}
export default AboutPage        