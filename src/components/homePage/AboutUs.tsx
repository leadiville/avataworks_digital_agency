import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../PrimaryButton'
import Link from 'next/link'

const AboutUs = () => {
    return (
        <div>
            <div className="container-fluid bg-light about pb-5">
                <div className="container pb-5">
                    <div className="row g-5">
                        <div className="col-xl-6 wow fadeInLeft order-lg-first" >
                            <div className="bg-primary rounded p-lg-5 pt-lg-4 mt-lg-4 p-3 h-100">
                                <div>
                                    <h2 className="mb-4 text-capitalize text-white">Your All-in-One Digital Team—Powered by AVATAs</h2>
                                    <p className='text-black-100'>From the comfort of your home or office, you can access a full team of remote digital experts—your personal AVATAs (Advanced Virtual Assistants in Technology and Advertising) dedicated to helping you scale with ease.
                                    </p>
                                    <p className='text-black-100'>Whether you are an ambitious startup in Africa or a thriving brand aiming for global relevance, AVATAWorks is your all-in-one partner for digital brand success. We combine strategic branding, tech-driven creativity, and result-focused execution to deliver powerful marketing, design, and business growth solutions.
                                    </p>
                                    
                                    <Link href={'/about'}><PrimaryButton className='btn-dark p-3 my-4' text='meet our avatas' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInRight order-first order-sm-first">
                            <div className="bg-white rounded p-lg-5 p-sm-0 h-100 mt-4">
                                <div className="row g-4 justify-content-center w-100 p-4">
                                    <div className="col-12">
                                        <div className="counter-item bg-light rounded p-3 h-100">
                                            <div className="counter-counting">
                                                <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">200</span>
                                                <span className="h1 fw-bold text-primary">%</span>
                                            </div>
                                            <h4 className="mb-0 text-dark">Profit Increase</h4>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="counter-item bg-light rounded p-3 h-100">
                                            <div className="counter-counting">
                                                <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">20</span>
                                                <span className="h1 fw-bold text-primary">+</span>
                                            </div>
                                            <h4 className="mb-0 text-dark">Brands Managed</h4>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="counter-item bg-light rounded p-3 h-100">
                                            <div className="counter-counting">
                                                <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">30</span>
                                                <span className="h1 fw-bold text-primary">+</span>
                                            </div>
                                            <h4 className="mb-0 text-dark">Skilled Avatas</h4>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="counter-item bg-light rounded p-3 h-100">
                                            <div className="counter-counting">
                                                <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">4</span>
                                                <span className="h1 fw-bold text-primary">+</span>
                                            </div>
                                            <h4 className="mb-0 text-dark">Success Years</h4>
                                        </div>
                                    </div>
                                </div>
                            {/* get a quote here */}
                             <div className="col-12 text-center wow fadeInUp pt-4">
                            {/* {services.length <= 4 && <a className="btn btn-primary rounded-pill py-3 px-5" href="#"></a>} */}
                            <Link href={"/our-services"} ><PrimaryButton text='Get a Quote' className='py-3 px-5 btn-danger' /></Link>
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