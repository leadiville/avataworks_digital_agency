import { NextResponse } from "next/server";
import Faq from "../../../models/Faq";
import Features from "../../../models/Features";
import Footer from "../../../models/Footer";
import OurTeam from "../../../models/OurTeam";
import Reviews from "../../../models/Reviews";
import Services from "../../../models/Services";
import WhyChooseUs from "../../../models/WhyChooseUs";
import { connectDb } from "@/lib/mongodb";

export const GET = async () => {
  try {
    await connectDb();
    const data = await Promise.all([
      Faq.find(),
      Features.find(),
      Footer.findOne(),
      OurTeam.find(),
      Reviews.find(),
      Services.find(),
      WhyChooseUs.find(),
    ]);
    const [faq, features, footer, ourTeam, reviews, services, whyChooseUs] =
      data;

    return NextResponse.json({
      faq,
      features,
      footer,
      ourTeam,
      reviews,
      services,
      whyChooseUs,
    });
  } catch (err) {
    console.error("could not find data to fetch from mongodb databse:", err);
  }
};
