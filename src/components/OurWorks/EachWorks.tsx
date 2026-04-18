import { assignWorkImg } from '@/utils/assignWorkImg';
import Stats from '../homePage/Stats'

export type MileStoneT = {
    startTitle: string;
    endTitle: string;
}
export type TestimonialT = {
    name?: string;
    position?: string;
    testimony?: string;
}
type CaseStudiesI = {
    location?: string;
    brand?: string;
    category: string;
    headlineImpact: string
    servicesRendered: string;
    body: string;
    duration?: string;
    milestone?: MileStoneT[];
    isActive: boolean;
    isFirst?: boolean;
    testimonial?: TestimonialT;
}


const EachWorks = ({
    location,
    isActive,
    isFirst,
    brand,
    testimonial,
    category,
    headlineImpact,
    servicesRendered,
    body,
    duration,
    milestone
}: Partial<CaseStudiesI>) => {
    console.log(assignWorkImg("Travel & Tourism"));
    return (
        <div className={`work-container my-2 border px-0 `} >
            <div className={`w-full rounded-top ${!isFirst && 'bg-primary'} position-relative`} style={{ height: `${isFirst ? '400px' : 'fit-content'}`, backgroundImage: `url('${assignWorkImg(brand)}')` }}>
                <div className="text-end w-100 p-3">
                    <p className='bg-primaryLighter d-inline-block text-black py-1 px-3 rounded fw-bold'>{duration}</p>
                </div>
                <div className="d-flex position-relative justify-content-start align-items-end p-0 text-start h-75 ">
                    <span className="text-white p-2 d-grid">
                        <h4 className='bg-dark text-white d-inline-flex px-2 py-1 rounded'>{brand}</h4>
                        <small className='bg-dark text-white fw-light px-2 py-1 rounded'>{servicesRendered}</small>
                    </span>
                </div>
            </div>
            <div className="text-start p-4 container">
                <h3 className="text-">{headlineImpact}</h3>
                <p className="small">{body}</p>
                {isFirst && <div className="text-start ps-4 bg-primaryLight py-3 my-4" style={{ borderLeft: "4px solid blue" }}>
                    <p className='small'>{testimonial?.testimony}</p>
                    <sup className="small text-primary">{`— ${testimonial?.position}, ${brand}, ${testimonial?.name} · ${location}`}</sup>
                </div>}
                <div className="container">
                    <Stats milestone={milestone} isWorks />
                </div>
            </div>
        </div>)
}

export default EachWorks