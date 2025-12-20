
import Navbar from "./components/Navbar";
import { HeroCarousel } from "../../carousels/BootstrapCarousel";
import Features from "./components/homePage/Features";
import AboutUs from "./components/homePage/AboutUs";
import OurServices from "./components/homePage/OurServices";
import Faq from "./components/homePage/Faq";
import Footer from "./components/Footer";
import Team from "./components/homePage/Team";
import Testimonials from "./components/homePage/Testimonials";
import { Ifaq, Ifeatures, Ifooter, IOurTeam, Ireviews, Iservice } from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default async function Home() {
  const res = await fetch(`${baseUrl}/api/content`, { cache: "no-store" });
  const data = await res.json() as {
    services: Iservice[],
    features: Ifeatures[],
    faq: Ifaq[];
    ourTeam: IOurTeam[];
    reviews: Ireviews[];
    footer: Ifooter;
  };
  const { services, features, faq, ourTeam, reviews, footer } = data;

  const faqHome = faq?.[0].homePage ?? [];
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <Features featuresData={features} title={'Why Choose Avataworks?'} />
      <AboutUs />
      <OurServices services={services} />
      <Team teamMembers={ourTeam.splice(0, 4)} />
      <Testimonials testimonials={reviews} />
      <Faq faq={faqHome} />
      <Footer footer={footer} />
    </>
  )
}

