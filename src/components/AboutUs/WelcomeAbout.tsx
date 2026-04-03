// import { faBullseye, faFingerprint, faLightbulb } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image";
import HeroAnimation from "./HeroAnimation";

export const WelcomeAbout = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="container pt-5">
        <div className="row g-5 w-100">
          <div className="col-lg-6 px-5 col-sm-4">
            <HeroAnimation />
          </div>
          <div className="col-lg-6 px-5 pt-4 col-sm-8 text-white">
            <span className="fw-bold hero-badge bg-white">
              <span className="badge-dot"></span>
              <span className="badge-text text-primary ">We are your – Advanced Virtual Assistance in Technology and
                Advertising.</span>
            </span>
            <h1 className="display-3 mb-2 text-black mb-4 text-capitalize">
              Welcome <br /> to <span className="text-primary">Avataworks</span>
            </h1>
            <p
              className="mb-4 fw-bolder text-primary"
              style={{ lineHeight: "30px" }}
            >
              {" "}
              At our core, we are a results-driven digital agency based in
              Nigeria, committed to transforming businesses through strategic,
              data-informed innovation. AVATAWorks takes a holistic approach to
              help businesses thrive in an ever-evolving digital landscape. Our
              services are not one-size-fits-all; they are tailored to crafting
              your brand identity, building responsive websites, executing
              full-scale digital marketing campaigns, or managing world-class
              events, we focus on one ultimate goal—achieving digital brand
              success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
