// import { faBullseye, faFingerprint, faLightbulb } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image";

export const WelcomeAbout = () => {
  return (
    <div className="container-fluid about-bg py-0 px-0 ">
      <div className="container pb-lg-5 py-5">
        <div className="container d-lg-flex gap-lg-5">
          <div className="text-left mt-lg-4 d-lg-flex justify-content-center align-items-center">
            <div className="p-lg-0">
              <Image
                src={"/aboutUs.png"}
                width={3600}
                height={2400}
                alt="welcome image"
                className="image-fluid w-100 h-100"
              />
            </div>
            <div className="w-100 d-flex justify-content-end">
              {/* <h1 className="text-white text-capitalize px-lg-5">We are your</h1> */}
              <div className="text-dark fw-bold text-bold mx-lg-5 ml-5 my-4 my-lg-0">
                <br />
                <h3 className="py-0 my-2 text-uppercase text-lg-xl text-md"><span className="text-white bg-primary rounded-circle p-3">A</span> - <span className="bg-primary text-white rounded p-3 "> Advanced</span> </h3><br />
                <h3 className="py-0 my-2 text-uppercase text-lg-xl text-md"><span className="text-white bg-primary rounded-circle p-3">V</span> - <span className="bg-primary text-white rounded p-3 "> Virtual</span> </h3><br />
                <h3 className="py-0 my-2 text-uppercase text-lg-xl text-md"><span className="text-white bg-primary rounded-circle p-3">A</span> - <span className="bg-primary text-white rounded p-3 "> Assistant in</span> </h3><br />
                <h3 className="py-0 my-2 text-uppercase text-lg-xl text-md"><span className="text-white bg-primary rounded-circle p-3">T</span> - <span className="bg-primary text-white rounded p-3 "> Technology and</span> </h3><br />
                <h3 className="py-0 my-2 text-uppercase text-lg-xl text-md"><span className="text-white bg-primary rounded-circle p-3">A</span> - <span className="bg-primary text-white rounded p-3 "> Advertising</span> </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


