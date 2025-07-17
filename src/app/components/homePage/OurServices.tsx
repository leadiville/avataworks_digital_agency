import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import React from 'react'

const OurServices = ({ services }) => {
 const {icon} = services;
    return (
        <div>
            <div className="container-fluid service py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
                        <h4 className="">Our Services</h4>
                        <h2 className="mb-4 text-primary">Full digital services. <br/> One team. <br/> Infinite possibilities.</h2>
                        <h5 className="mb-0 text-black-50">We offer end-to-end digital services to startups, SMEs, and established brands. These services are delivered by our internal digital team and verified AVATAs (Advanced Virtual Assistants in Tech & Advertising we assign on demand)
                        </h5>
                    </div>
                    <div className="row gy-lg-4 justify-content-evenly">
                        {services.splice(0, 3)?.map((service) => {
                            const { id, title, imgSrc, icon, info } = service;
                            return (
                                <div key={id} className="col-md-4 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="service-item">
                                        <div className="service-img">
                                            <Image width={400} height={400} src={imgSrc} className="img-fluid rounded-top w-100" alt="" />
                                            <div className="service-icon p-3">
                                                <i className="fa fa-users fa-2x"><FontAwesomeIcon icon={icon} /></i>
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
                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                            <a className="btn btn-primary rounded-pill py-3 px-5" href="#">Explore More Services</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;