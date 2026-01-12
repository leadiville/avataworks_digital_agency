import { Iservice } from '@/types';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../PrimaryButton';
import Link from 'next/link';

interface ServicesProps {
    services: Iservice[];
}
const OurServices = ({ services }: ServicesProps) => {
    return (
        <div>
            <div className="container-fluid service py-5">
                <div className="container py-5 p-4">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: "800px" }}>
                        <h2 className="mb-4 text-primary">Full digital services. <br /> One team. <br /> Infinite possibilities.</h2>
                        <h5 className="mb-0 text-black-50">We offer end-to-end digital services to startups, SMEs, and established brands. These services are delivered by our internal digital team and verified AVATAs (Advanced Virtual Assistants in Tech & Advertising we assign on demand)
                        </h5>
                    </div>
                    <div className="row gy-lg-4 justify-content-evenly">
                        {services?.map((service) => {
                            const { _id, title, imgSrc, icon, info } = service;
                            return (
                                <div key={_id} className="col-md-6 col-lg-4 wow fadeInUp">
                                    <div className="service-item">
                                        <div className="service-img">
                                            <Image width={400} height={400} src={imgSrc as string} className="img-fluid rounded-top w-100" alt="" />
                                            <div className="service-icon p-3">
                                                <i className="fa fa-users fa-2x"><FontAwesomeIcon icon={icon as IconDefinition} /></i>
                                            </div>
                                        </div>
                                        <div className="service-content p-4">
                                            <div className="service-content-inner">
                                                <h2 className="d-inline-block h4 mb-4">{title}</h2>
                                                <p className="mb-4">{info}.</p>
                                                {/* <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Read more</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="col-12 text-center wow fadeInUp mt-5 pt-4">
                            {/* {services.length <= 4 && <a className="btn btn-primary rounded-pill py-3 px-5" href="#"></a>} */}
                            <Link href={"/our-services"} ><PrimaryButton text='Get a Quote' className='py-3 px-5 btn-danger'/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;