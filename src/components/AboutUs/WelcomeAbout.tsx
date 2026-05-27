// import { faBullseye, faFingerprint, faLightbulb } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
"use client";
import Image from "next/image";
import Badge from "../Badge";
import HeroAnimation from "./HeroAnimation";
import { useEffect, useState } from "react";

export const WelcomeAbout = () => {
  const aboutText =
    " At AVATAWorks, we don't just offer services — we deliver transformative growth systems tailored to your brand's needs. As your all-in-one AI-Driven agency, we combine creativity, technology, and strategy to help brands scale faster, stronger, and smarter."

  const [windowSize, setWindowSize] = useState(window.innerHeight);

  useEffect(() => {
    setWindowSize(windowSize);
  }, []);


  return (
    <div className="container-fluid pt-4 bg-primaryDark pt-lg-5" >
      <div className="container pt-lg-5 pt-3">
        <div className="row w-full">
          <div className="col-lg-4 col-12 text-center position-relative" style={{ minHeight: '250px' }}>
            <Image alt='services-hero-image' fill sizes="(max-width: 768px) 100px, 300px" src={'/aboutLadyCartoon.png'} className='object-fit-contain img-fluid w-100 h-100' />
          </div>
          <div className="col-lg-8 pt-lg-4 col-12 text-white text-center px-0  text-lg-start">
            <Badge text="We are your all in one AI-driven agency." key={'about-hero'} style="bg-primaryLight text-capitalize" />
            <h1 className="text-capitalize">
              We Ensure Digital Brand
              <br />
              <span className="text-primary"> Success.</span>
            </h1>
            <p
              className="mb-4 fw-bolder container d-inline-block"
              style={{ lineHeight: "30px" }}
            >
              {aboutText}
            </p>
          </div>
        </div>
      </div>
    </div >
  );
};
