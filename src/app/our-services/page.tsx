export const dynamic = "force-dynamic";
import Faq from "../../components/homePage/Faq";
import Services from "../../models/Services";
import Faqs from "../../models/Faq";
import { Ifaq, Iservice } from "@/types";
import { connectDb } from "@/lib/mongodb";
import { cleanMongoShape } from "@/utils/cleanMongoStructure";
import CoreServices from "@/components/servicesPage/CoreServices";

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
      <div className="container-fluid">
        <div className="row g-1">
          <CoreServices  />
        </div>
      </div>
      <Faq faq={faqServices} />
    </div>
  );
};

export default page;
