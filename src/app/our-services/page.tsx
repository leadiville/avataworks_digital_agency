import React from "react";
import OurServices from "../components/homePage/OurServices";
import Faq from "../components/homePage/Faq";
import { Ifaq, Iservice } from "@/types";

export type faqT = {
  answer: string;
  id: number;
  question: string;
  showAnswer: boolean;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const page = async () => {
  const res = await fetch(`${baseUrl}/api/content`, { cache: "no-store" });
  const data = await res.json() as {
    services: Iservice[],
    faq: Ifaq,
  };
  const { services, faq } = data;

  const faqService = faq.servicesPage?.map((each) => each);

  return (
    <div>
      <div className="container-fluid p-5 services-hero" >
      </div>
      <div className="container-fluid px-5 py-6">
        <div className="row g-1">
          <OurServices services={services} />
        </div>
      </div>
      <Faq faq={faqService} />
    </div>
  );
};

export default page;
