// import { faBullseye, faFingerprint, faLightbulb } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image";

export const WelcomeAbout = () => {
  return (
    <div className="container-fluid bg-primary py-5 px-0">
      <div className="container">
        <div className="d-lg-flex gap-lg-0 align-items-center justify-content-center">
          <div className="p-0 about-image about-text-container">
            <Image
              src={"/aboutUs.png"}
              width={400}
              height={300}
              alt="welcome image"
              className="image-fluid"
            />
          </div>
          <div className="px-lg-5 py-4 about-text-container">
            <h1 className="display-3 mb-2 text-black header-about">
              Welcome to <span className="text-white">Avataworks</span>
            </h1>
            <p className="text-dark fw-bold">
              We are your, Advanced Virtual Assistant in Technology and
              Advertising.
            </p>
            <p
              className="text-white my-lg-3 fw-bolder about-text"
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
