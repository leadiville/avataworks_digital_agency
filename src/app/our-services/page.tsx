export const dynamic = "force-dynamic";
import Faq from "../../components/homePage/Faq";
import Faqs from "../../models/Faq";
import { Ifaq } from "@/types";
import { connectDb } from "@/lib/mongodb";
import { cleanMongoShape } from "@/utils/cleanMongoStructure";
import CoreServices from "@/components/servicesPage/CoreServices";
import Banner from "@/components/AboutUs/ReadyToWork";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Pricing from "@/components/servicesPage/Pricing";

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
      <div className="container-fluid p-5 services-hero" >
      </div>
      <Banner title="We are brand builders for hire!" subtitle="AVATAWorks digital agency is a growth engine and Managed Marketing Service Provider (MMSP) for startups and ambitious brands. We build brands, execute conversion-ready digital transformations, and operate growth systems with Avatas across social media, creative strategy & branding, website & app development." buttonText="Get a Free Consultation" icon={faArrowRight} isWideBanner/>
      <div className="container-fluid">
          <CoreServices />
      </div>
      <Pricing />
      <Faq faq={faqServices} />
      <Banner buttonText="Book a Free Strategy Session" title="Not Sure Where to Start?" subtitle="Book a free 30-minute AVATA strategy session. We diagnose, prioritise, and recommend the growth plan that fits your brand." icon={faArrowRight} />
    </div>
  );
};

export default page;
