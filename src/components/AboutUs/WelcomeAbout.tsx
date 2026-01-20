// import { faBullseye, faFingerprint, faLightbulb } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image";

export const WelcomeAbout = () => {
  return (
    <div className="container-fluid bg-primary about pb-5 pt-5">
      <div className="">
        <div className="d-lg-flex gap-lg-0 align-items-center justify-content-between pe-5 ps-5 about-hero" style={{ marginLeft: "160px", marginRight: "160px" }}>
          <div className="p-0 w-fit about-image">
            <Image
              src={"/aboutUs.png"}
              width={400}
              height={300}
              alt="welcome image"
            />
          </div>
          <div className="col-lg-8 px-lg-5 p-2 py-lg-4">
            <h1 className="display-3 mb-2 text-black">
              Welcome to <span className="text-white">Avataworks</span>
            </h1>
            <p className="text-dark fw-bold">
              We are your, Advanced Virtual Assistance in Technology and
              Advertising.
            </p>
            <p
              className="text-white my-lg-3 fw-bolder pe-lg-5"
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
