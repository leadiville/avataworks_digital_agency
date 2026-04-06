"use client";
import { usePathname } from 'next/navigation'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type About = {
    bg: string;
}

const AboutGrowth = ({ bg }: About) => {
    const path = usePathname();
    const aiStacks = ["n8n", "WhatsApp Business Cloud API", "Claude/GPT-4o", "Midjourney/Canva Magic", "Vista Social/Madgicx"," Relevance AI", "Webflow/Bubble", "Vapi/Retell AI", "ElevenLabs", "Airtable", "Make/Zapier", "Manus"];

    return (
        <div className={`${bg} rounded  p-sm-0 h-fit mt-2 mt-lg-0`}>
            <div className="row g-2 justify-content-center w-100 p-4">
                <h4 className=" fw-bold text-uppercase text-white text-lg-center text-center"><FontAwesomeIcon icon={faDotCircle} /> Our AI Stack</h4>
                <div className="row gap-2 d-lg-flex justify-content-center py-4">
                    {aiStacks?.map((each, inx) => (
                        <div className="col-lg-5 text-center bg-primaryLight rounded p-2 w-fit h-fit d-lg-flex justify-content-center align-items-center mb-2 mb-lg-0">
                            <h5 className="text-gray fw-bold" data-toggle="counter-up">{each}</h5>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default AboutGrowth