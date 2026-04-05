"use client";
import Link from 'next/link'
import PrimaryButton from '../PrimaryButton'
import { usePathname } from 'next/navigation'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type About = {
    bg: string;
}

const AboutGrowth = ({ bg }: About) => {
    const path = usePathname();
    return (
        <div className={`${bg} rounded p-lg-5 p-sm-0 h-100 mt-4`}>
            <div className="row g-4 justify-content-center w-100 p-4">
                <h4 className="mb-4 fw-bold text-uppercase "><FontAwesomeIcon className="text-dark" icon={faDotCircle} /> Our AI Stack</h4>
                <div className="col-12">
                    <div className="counter-item bg-light rounded p-3 h-100">
                        <div className="counter-counting">
                            <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">Claude AI</span>
                            {/* <span className="h1 fw-bold text-primary">%</span> */}
                        </div>
                        {/* <h4 className="mb-0 text-dark">Profit Increase</h4> */}
                    </div>
                </div>
                <div className="col-12">
                    <div className="counter-item bg-light rounded p-3 h-100">
                        <div className="counter-counting">
                            <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">Vapi Voice AI</span>
                            {/* <span className="h1 fw-bold text-primary">+</span> */}
                        </div>
                        {/* <h4 className="mb-0 text-dark">Brands Managed</h4> */}
                    </div>
                </div>
                <div className="col-12">
                    <div className="counter-item bg-light rounded p-3 h-100">
                        <div className="counter-counting">
                            <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">Madgicx</span>
                            {/* <span className="h1 fw-bold text-primary">+</span> */}
                        </div>
                        {/* <h4 className="mb-0 text-dark">Skilled Avatas</h4> */}
                    </div>
                </div>
                <div className="col-12">
                    <div className="counter-item bg-light rounded p-3 h-100">
                        <div className="counter-counting">
                            <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">Airtable</span>
                            {/* <span className="h1 fw-bold text-primary">+</span> */}
                        </div>
                        {/* <h4 className="mb-0 text-dark">Success Years</h4> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutGrowth