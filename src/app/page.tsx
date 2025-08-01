
import Navbar from "./components/Navbar";
import { HeroCarousel } from "../../carousels/BootstrapCarousel";
import Features from "./components/homePage/Features";
import AboutUs from "./components/homePage/AboutUs";
import OurServices from "./components/homePage/OurServices";
import Faq from "./components/homePage/Faq";
import Footer from "./components/Footer";
import Team from "./components/homePage/Team";
import Testimonials from "./components/homePage/Testimonials";


export default async function Home() {
  const request = await fetch('http://localhost:3000/database');
  const data = await request.json();
  const { services, features, faq, ourTeam, reviews, footer } = data;

  return (
    <>
      <Navbar />
      <HeroCarousel />
      <Features featuresData={features} title={'Why Choose Avataworks?'} /> 
      <AboutUs />
      <OurServices services={services} />
      <Team teamMembers={ourTeam.splice(0, 4)} />
      <Testimonials testimonials={reviews} />
      <Faq faqs={faq.homePage} />
      <Footer footer={footer}/>
    </>
  )
}

