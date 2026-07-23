"use client";
import { useState } from 'react'
import Badge from '../Badge'
import data from '../../../caseStudies.json';
import EachWorks, { TestimonialT } from './EachWorks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCategoryIcon } from '@/utils/iconMap';


const CaseStudies = () => {
    let categories = data?.map(each => each.category);
    const uniqueCategory = new Set(categories);

    const [selectedCategory, setSelectedCategory] = useState<string>("Fashion");

    const categoriseItems = data?.filter((each) => each.category === selectedCategory);

    return (
        <div className="container mt-5 text-center flex-grow-1">
            <div className='mb-5'>
                <Badge style='' text='Case studies' key={'case-studies'} textStyle='text-uppercase' />
                <h2 className="text-capitalize py-2">Real work. <br /> Real outcomes.</h2>
                <p>Every result below was built by our Avatas, expert human specialists running your brand with precision and accountability.</p>
            </div>
            {/* works category section */}
            <div className="category-tags d-inline-flex gap-lg-4 gap-2">
                {[...uniqueCategory].map((each, inx) => {
                    return (
                        <button key={inx} onClick={(() => {
                            setSelectedCategory(each)
                        })}
                            className={`${each === selectedCategory ? 'bg-white text-primary' : 'category-btn'} border border-primary d-flex align-items-center rounded-pill '}`}>
                            <FontAwesomeIcon icon={getCategoryIcon(each)} className={`${each === selectedCategory ? 'bg-white text-primary' : 'category-btn'} me-2 border-0`} width={16} height={16} />
                            <small>{each}</small>
                        </button>
                    )
                })}
            </div>
            {/* workd main section */}
            <div className="row gap-0 my-5 ">
                <div className="col-lg-8" style={{ height: "fit-content" }}>

                    {categoriseItems.map((each, inx) => {
                        if (categoriseItems.indexOf(each) == 0) return (
                            <div className="pb-lg-5" key={inx} >
                                <EachWorks brand={each.brand} body={each.body} category={each.category} isActive={each.isActive} servicesRendered={each.servicesRendered} headlineImpact={each.headlineImpact} testimonial={each?.testimonial as TestimonialT} duration={each.duration} milestone={each.milestone} key={inx} location={each?.location} isFirst />
                            </div>
                        )
                    })}
                </div>
                <div className="col-lg-4 ">

                    {categoriseItems.map((each, inx) => {
                        return (
                            categoriseItems.indexOf(each) !== 0 &&
                            <div className="pb-2" key={inx}>
                                <EachWorks brand={each.brand} body={each.body} category={each.category} isActive={each.isActive} servicesRendered={each.servicesRendered} headlineImpact={each.headlineImpact} milestone={each.milestone} duration={each.duration} key={inx} location={each?.location} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CaseStudies