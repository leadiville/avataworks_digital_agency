"use client";
import { usePathname } from 'next/navigation'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type About = {
    bg: string;
}

const AboutGrowth = ({ bg }: About) => {
    const path = usePathname();
    const aiStacks = ["n8n", "Relevance AI", "Claude", "ChatGPT", "Gemini", "Midjourney", "Canva", "Nano Banana", "HiggsField", "SeeDance", "Vista Social", "ManyChats", "Webflow", "Bubble", "Airtable", "Vapi", "Retell AI", "ElevenLabs", "Zapier", "Manus"];

    return (
        <div className={`${bg} rounded  p-sm-0 h-fit mt-lg-0 mb-4 mb-lg-0`}>
            <div className="row g-2 justify-content-center w-100 p-3">
                <h5 className="fw-bold text-uppercase text-white text-lg-center text-center"><FontAwesomeIcon icon={faDotCircle} /> Our AI Stack</h5>
                <div className="row gap-4 d-flex justify-content-lg-center jusify-content-between py-4">
                    {aiStacks?.map((each, inx) => (
                        <div key={inx} className="col-lg-5 col-auto text-center bg-primaryLight rounded p-lg-2 w-fit h-fit d-lg-flex justify-content-center align-items-center  mb-0">
                            <small className="text-gray fw-bold fs-xs" data-toggle="counter-up">{each}</small>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default AboutGrowth