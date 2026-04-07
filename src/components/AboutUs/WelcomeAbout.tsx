// import { faBullseye, faFingerprint, faLightbulb } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
"use client";
import Badge from "../Badge";
import HeroAnimation from "./HeroAnimation";
import { useEffect, useState } from "react";

export const WelcomeAbout = () => {
  const aboutText =
    " At AVATAWorks, we don't just offer services — we deliver transformative growth systems tailored to your brand's needs. As your all-in-one AI-Driven agency, we combine creativity, technology, and strategy to help brands scale faster, stronger, and smarter."

  const [windowSize, setWindowSize] = useState<number>(window.innerHeight);
  useEffect(() => {
    setWindowSize(windowSize);
  }, []);


  return (
    <div className="container-fluid pt-4">
      <div className="container pt-lg-5 pt-3">
        <div className="row w-100">
          <div className="col-lg-6 col-sm-4 order-first order-2">
            <HeroAnimation />
          </div>
          <div className="col-lg-6 pt-lg-4 col-sm-8 col-12 text-white text-center px-0  text-lg-start order-lg-2">
            <Badge text="We are your all in one AI-driven agency." key={'about-hero'} style="bg-primaryLight text-capitalize" />
            <h1 className="text-capitalize text-dark">
              We Ensure Digital Brand
              <br />
              <span className="text-primary"> Success.</span>
            </h1>
            <p
              className="mb-4 fw-bolder w-auto d-inline-block"
              style={{ lineHeight: "30px" }}
            >
              {aboutText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
