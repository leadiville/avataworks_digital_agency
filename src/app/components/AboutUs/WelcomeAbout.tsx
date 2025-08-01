import { faBullseye, faFingerprint, faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const WelcomeAbout = () => {
    return (<>
        <div className="container-fluid bg-light about pt-5">
            <div className="container">
                <div className="row g-5 w-100">
                    <div className='col-lg-12 px-5 py-3 col-sm-12' >
                        <h1 className="display-3 mb-2">Welcome to <span className="text-primary">Avataworks</span></h1>
                        <p className='text-primary'>We are your – Advanced Virtual Assistance in Technology and Advertising.</p>
                        <h6 className="text-grey my-4"> At our core, we are a results-driven digital agency based in Nigeria, committed to transforming businesses through strategic, data-informed innovation. AVATAWorks takes a holistic approach to help businesses thrive in an ever-evolving digital landscape. Our services are not one-size-fits-all; they are tailored to crafting your brand identity, building responsive websites, executing full-scale digital marketing campaigns, or managing world-class events, we focus on one ultimate goal—achieving digital brand success.
                        </h6>
                        <p className=""></p>
                    </div>

                    <div className="">
                        <div className="d-flex flex-row justify-content p-4 bg-primary">
                            <div className="d-flex text-white mb-5">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4" style={{ width: "60px", height: "60px" }}>
                                    <FontAwesomeIcon icon={faBullseye} height={20} width={20} style={{ width: '25px', height: '25px' }} />
                                </div>
                                <div className="ps-4">
                                    <h3>Our Mission</h3>
                                    <p className="mb-0">To supercharge businesses in Africa with innovative solutions that drive brand visibility, engagement, and profitability. We blend advanced technology, experiential marketing, and data-driven strategies to empower our clients and deliver measurable growth
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex text-white mb-2">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4" style={{ width: "60px", height: "60px" }}>
                                    <FontAwesomeIcon icon={faLightbulb} style={{ width: '25px', height: '25px' }} />
                                </div>
                                <div className="ps-4">
                                    <h3>Our Vision</h3>
                                    <p className="mb-0">To become Africa’s premier digital agency that delivers full-scale digital solutions in dynamic branding, experiential marketing, and business growth on a global stage—helping businesses to achieve maximum visibility, engagement, and sustainable digital brand success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}