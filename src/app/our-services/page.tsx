export const dynamic = "force-dynamic";
import OurServices from "../../components/homePage/OurServices";
import Faq from "../../components/homePage/Faq";
import Services from "../../models/Services";
import Faqs from "../../models/Faq";
import { Ifaq, Iservice } from "@/types";
import { connectDb } from "@/lib/mongodb";
import { cleanMongoShape } from "@/utils/cleanMongoStructure";

export type faqT = {
  answer: string;
  id: number;
  question: string;
  showAnswer: boolean;
}

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const page = async () => {
  await connectDb();
  const services = cleanMongoShape(await Services.find().lean<Partial<Iservice>[]>());
  const faq = cleanMongoShape(await Faqs.find().lean<Partial<Ifaq>[]>());
  const faqServices = faq?.[0].servicePage ?? [];


  return (
    <div>
      <div className="container-fluid p-5 services-hero" >
      </div>
      <div className="container-fluid px-5 py-6">
        <div className="row g-1">
          <OurServices services={services} />
        </div>
      </div>
      <Faq faq={faqServices} />
    </div>
  );
};

export default page;
