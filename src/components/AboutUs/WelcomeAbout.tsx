// import { faBullseye, faFingerprint, faLightbulb } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
"use client";
import Badge from "../Badge";
import HeroAnimation from "./HeroAnimation";
import { useEffect, useState } from "react";

export const WelcomeAbout = () => {
  const aboutText =
    " At our core, we are a results-driven digital agency based in Nigeria, committed to transforming businesses through strategic, data - informed innovation. AVATAWorks takes a holistic approach to help businesses thrive in an ever - evolving digital landscape. Our services are not one - size - fits - all; they are tailored to crafting your brand identity, building responsive websites, executing full - scale digital marketing campaigns, or managing world - class events, we focus on one ultimate goal, achieving digital brand success."

  const [windowSize, setWindowSize] = useState<number>(window.innerHeight);
  const [isText, setIsText] = useState(false);
  useEffect(() => {
    setWindowSize(windowSize);
  }, []);


  return (
    <div className="container-fluid pt-4">
      <div className="container pt-5">
        <div className="row g-lg-5 w-100">
          <div className="col-lg-6 px-lg-5 col-sm-4">
            <HeroAnimation />
          </div>
          <div className="col-lg-6 px-lg-5 pt-4 col-sm-8 text-white text-center px-0  text-lg-start">
            <Badge text="We are your all in one AI-driven agency." key={'about-hero'} style="bg-primaryLight text-capitalize" />
            <h1 className="display-3 mb-2 mb-4 text-capitalize text-dark">
              Welcome to <span className="text-primary">Avataworks</span>
            </h1>
            <p
              className="mb-4 fw-bolder about-hero-text"
              style={{ lineHeight: "30px" }}
            >
              {!isText ? aboutText.slice(0, 258) : aboutText}...
              <a href="#" className="text-dark" onClick={() => setIsText(!isText)}>{isText ? ' hide' : " read more"}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
