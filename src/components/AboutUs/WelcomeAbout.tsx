// import { faBullseye, faFingerprint, faLightbulb } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image";

export const WelcomeAbout = () => {
  return (
    <div className="container-fluid bg-primary py-5 px-0">
      <div className="container">
        <div className="container d-lg-flex gap-lg-5 ">
          <div className="p-0 about-image about-text-container">
            <Image
              src={"/aboutUs.png"}
              width={600}
              height={400}
              alt="welcome image"
              className="image-fluid"
            />
          </div>
          <div className="container text-left mt-4 d-flex justify-content-center align-items-center">
            <div className="">

              <h1 className="display-3 text-light ">
                Welcome to
              </h1>
              <div className="px-lg-5 w-fit"><h1 className="text-white px-lg-5">Avataworks</h1>
              </div>
              <h5 className="text-dark fw-bold text-bold mx-lg-5 px-lg-5">
                <br/><span className="text-white">A</span>... Advanced <br/><span className="text-white">V</span>... Virtual <br/><span className="text-white">A</span>... Assistant in <br/><span className="text-white">T</span>... Technology and
                <br/><span className="text-white">A</span>... Advertising
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
