
import Navbar from "./components/Navbar";
import { HeroCarousel } from "../../carousels/BootstrapCarousel";
import Features from "./components/homePage/Features";
import AboutUs from "./components/homePage/AboutUs";

export default async function Home() {

  const request = await fetch('http://localhost:3000/database');
  const data = await request.json();
  const { services, features } = data;

  return (
    <>
      <Navbar />
      <HeroCarousel />
      <Features featuresData={features} />
      <AboutUs />
    </>
  )
}

