export const dynamic = "force-dynamic";

import Navbar from "../components/Navbar";
import Features from "../components/homePage/Features";
import AboutUs from "../components/homePage/AboutUs";
import OurServices from "../components/homePage/OurServices";
import Faq from "../components/homePage/Faq";
import Footer from "../components/Footer";
import Team from "../components/homePage/Team";
import Testimonials from "../components/homePage/Testimonials";
import { Ifaq, Ifeatures, Ifooter, IOurTeam, Ireviews, Iservice } from "@/types";
import { HeroCarousel } from "../components/carousels/BootstrapCarousel";
import FooterM from "../models/Footer";
import OurTeam from "../models/OurTeam";
import FeaturesM from "../models/Features";
import FaqM from "../models/Faq";
import ServicesM from "../models/Services";
import Reviews from "../models/Reviews";
import { connectDb } from "@/lib/mongodb";
import { cleanMongoShape } from "@/utils/cleanMongoStructure";

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default async function Home() {
  // Connect to database first (mongodb)
  await connectDb();
  const features = cleanMongoShape(await FeaturesM.find().lean<Partial<Ifeatures>[]>());
  const faq = cleanMongoShape(await FaqM.find().lean<Partial<Ifaq>[]>());
  const services = cleanMongoShape(await ServicesM.find().lean<Partial<Iservice>[]>());
  const ourTeam = cleanMongoShape(await OurTeam.find().lean<Partial<IOurTeam>[]>());
  const reviews = cleanMongoShape(await Reviews.find().lean<Partial<Ireviews>[]>()).map(review => ({ ...review, _id: review?._id?.toString() }));
  const footer = cleanMongoShape(await FooterM.findOne<Partial<Ifooter>>()) || null;

  const faqHome = faq?.[0].homePage ?? [];

  return (
    <>
      <Navbar />
      <HeroCarousel />
      <Features featuresData={features} title={'Why Choose Avataworks?'} />
      <AboutUs />
      <OurServices services={services?.splice(0, 3)} />
      <Team teamMembers={ourTeam?.splice(0, 4)} />
      <Testimonials testimonials={reviews} />
      <Faq faq={faqHome} />
      {footer && <Footer footer={footer} />}
    </>
  )
}

