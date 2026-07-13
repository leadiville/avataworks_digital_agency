import { faBullseye, faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const AboutGoals = () => {

    return (
        <div className="pb-5 container-fluid">
            <div className="container">
                <div className="d-flex bg-primary flex-row justify-content-center px-4 rounded-3">
                    <div className="d-flex my-5">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4" style={{ width: "60px", height: "60px" }}>
                            <FontAwesomeIcon icon={faBullseye} height={20} width={20} style={{ width: '25px', height: '25px' }} />
                        </div>
                        <div className="px-4">
                            <h3>Our Mission</h3>
                            <p className="mb-0 me-5 text-white">To build brands across the globe with innovative marketing and tech solutions that drive digital brand success.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex my-5">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4" style={{ width: "60px", height: "60px" }}>
                            <FontAwesomeIcon icon={faLightbulb} style={{ width: '25px', height: '25px' }} />
                        </div>
                        <div className="ps-4">
                            <h3>Our Vision</h3>
                            <p className="mb-0 text-white">To become brand builders that integrate marketing systems and tech-innovative strategies into the core of their operations, strategies, and client deliverables
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}