export const dynamic = "force-dynamic";
import Faq from "../../components/homePage/Faq";
import Faqs from "../../models/Faq";
import { Ifaq } from "@/types";
import { connectDb } from "@/lib/mongodb";
import { cleanMongoShape } from "@/utils/cleanMongoStructure";
import CoreServices from "@/components/servicesPage/CoreServices";
import Banner from "@/components/AboutUs/Banner";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Pricing from "@/components/servicesPage/Pricing";
import Badge from "@/components/Badge";
import Image from "next/image";
import { ServicesHero } from "@/components/servicesPage/ServicesHero";

export type faqT = {
  answer: string;
  id: number;
  question: string;
  showAnswer: boolean;
}

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const page = async () => {
  await connectDb();
  const faq = cleanMongoShape(await Faqs.find().lean<Partial<Ifaq>[]>());
  const faqServices = faq?.[0].servicePage ?? [];


  return (
    <div>
      {/* // Hero section  */}
      {/* <Banner title="We are your AI-driven brand builders for hire!" buttonText="Get a Free Consultation" icon={faArrowRight} isWideBanner /> */}
      <ServicesHero />
      <div className="container-fluid ">
        <CoreServices />
      </div>
      <Pricing />
      <Faq faq={faqServices} />
      <Banner buttonText="Book a Free Strategy Session" title="Not Sure Where to Start?" subtitle="Book a free 30-minute AVATA strategy session. We diagnose, prioritise, and recommend the growth plan that fits your brand." icon={faArrowRight} />
    </div>
  );
};

export default page;
