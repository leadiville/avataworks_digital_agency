// import { faBullseye, faFingerprint, faLightbulb } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image";

export const WelcomeAbout = () => {
  return (
    <div className="container-fluid bg-primary py-5 px-0">
      <div className="container py-lg-5">
        <div className="container d-lg-flex gap-lg-5">
          <div className="text-left mt-lg-4 d-lg-flex justify-content-center align-items-center">
            <div className="p-lg-0">
              <Image
                src={"/aboutUs.png"}
                width={600}
                height={400}
                alt="welcome image"
                className="image-fluid "
              />
            </div>
            <div className="container">
              <div className=" w-full"><h1 className="text-white text-capitalize px-lg-5">We are your</h1>
              </div>
              <div className="text-dark fw-bold text-bold mx-lg-5">
                <br />
                <h3 className="py-0 my-0 text-uppercase"><span className="text-white">A</span> - Advanced </h3><br />
                <h3 className="py-0 my-0 text-uppercase"><span className="text-white">V</span> - Virtual </h3><br />
                <h3 className="py-0 my-0 text-uppercase"><span className="text-white">A</span> - Assistant in </h3><br />
                <h3 className="py-0 my-0 text-uppercase"><span className="text-white">T</span> - Technology and </h3><br />
                <h3 className="py-0 my-0 text-uppercase"><span className="text-white">A</span> - Advertising </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
