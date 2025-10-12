import React from "react";
import OurServices from "../components/homePage/OurServices";
import Faq from "../components/homePage/Faq";
import Navbar from "../components/Navbar";

export type faqT = {
  answer: string;
  id: number;
  question: string;
  showAnswer: boolean;
}

const page = async () => {
  const request = await fetch("http://localhost:3000/database");
  const response = await request.json();
  const services = response.services

  const servicesFaq : faqT = response.faq.servicePage

  return (
    <div>
      <Navbar />
      <div className="container-fluid p-5 services-hero" >
      </div>
      <div className="container-fluid px-5 py-6">
        <div className="row g-1">
          <OurServices services={services} />
        </div>
      </div>
      <Faq faqs={servicesFaq} />
    </div>
  );
};

export default page;
