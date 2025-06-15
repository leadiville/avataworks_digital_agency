import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <div className="container-fluid bg-light about pb-5">
                <div className="container pb-5">
                    <div className="row g-5">
                        <div className="col-xl-6 wow fadeInLeft " data-wow-delay="0.2s">
                            <div className="about-item-content bg-white rounded p-5 h-100 d-flex align-items-center">
                                <div>
                                    <h4 className="">About Avataworks</h4>
                                    <h2 className="mb-4 text-capitalize text-primary">Your All-in-One Digital Team—Powered by AVATAs</h2>
                                    <p className='text-black-50'>From the comfort of your home or office, you can access a full team of remote digital experts—your personal AVATAs (Advanced Virtual Assistants in Technology and Advertising)—dedicated to helping you scale with ease.
                                    </p>
                                    <p className='text-black-50'>Whether you are an ambitious startup in Africa or a thriving brand aiming for global relevance, AVATAWorks is your all-in-one partner for digital brand success. We combine strategic branding, tech-driven creativity, and result-focused execution to deliver powerful marketing, design, and business growth solutions.
                                    </p>
                                    {/* <p className="text-dark"><i className="fa fa-check text-primary me-3"></i>We can save your money.</p>
                                    <p className="text-dark"><i className="fa fa-check text-primary me-3"></i>Speed up production</p>
                                    <p className="text-dark mb-4"><i className="fa fa-check text-primary me-3"></i>Our Our plans are flexible</p> */}
                                    <a className="btn btn-danger rounded-pill py-3 px-5 text-capitalize" href="#">meet the avatas</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                            <div className="bg-white rounded p-5 h-100">
                                <div className="row g-4 justify-content-center">
                                    <div className="col-12">
                                        <div className="rounded bg-light">
                                            <Image width={800} height={600} src="/Cross-platform software-pana.png" className="img-fluid w-75 h-50" alt="about-us-image" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="counter-item bg-light rounded p-3 h-100">
                                            <div className="counter-counting">
                                                <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">50</span>
                                                <span className="h1 fw-bold text-primary">+</span>
                                            </div>
                                            <h4 className="mb-0 text-dark">Businesses Managed</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="counter-item bg-light rounded p-3 h-100">
                                            <div className="counter-counting">
                                                <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">30</span>
                                                <span className="h1 fw-bold text-primary">+</span>
                                            </div>
                                            <h4 className="mb-0 text-dark">Skilled Agents</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="counter-item bg-light rounded p-3 h-100">
                                            <div className="counter-counting">
                                                <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">5</span>
                                                <span className="h1 fw-bold text-primary">+</span>
                                            </div>
                                            <h4 className="mb-0 text-dark">Success Years</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="counter-item bg-light rounded p-3 h-100">
                                            <div className="counter-counting">
                                                <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">20</span>
                                                <span className="h1 fw-bold text-primary">+</span>
                                            </div>
                                            <h4 className="mb-0 text-dark">Team Members</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs