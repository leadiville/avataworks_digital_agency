import React from 'react'
import PrimaryButton from '../PrimaryButton'
import Link from 'next/link'
import { faBookOpen, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import AboutGrowth from './AboutGrowth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutAbout = () => {
    return (
        <div>
            <div className="bg-primaryLight container-fluid py-lg-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className='col-lg-6 py-4 py-lg-0 order'>
                            <h2 className="mb-lg-4 text-capitalize  fw-bold ">Your all-in-one team <br /> of AI-powered specialists.</h2>
                            <div className="second-section ">
                                <div className=''>
                                    <h4>Tech-Driven Creativity</h4>
                                    <p className=''><small>AI-powered execution combined with human creative direction — delivering high-performing solutions at machine speed. </small></p>
                                </div>
                                <div className=''>
                                    <h4>1-on-1 Growth Consultation</h4>
                                    <p className=''><small>Every engagement starts with an AVATA session to diagnose, prioritise, and map the growth plan that fits your brand.</small></p>
                                </div>
                                <div className=''>
                                    <h4>Productivity Meets Precision</h4>
                                    <p className=''><small>Fast turnarounds, deadline-ready delivery, and data-driven decisions — every project built for measurable results.</small></p>
                                </div>
                            </div>
                        </div>
                        {/* get a quote here */}
                        <div className="col-lg-6 py-4 py-lg-0 z-1">
                            <AboutGrowth bg='bg-white' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutAbout

// <div className="col-lg-12  wow fadeInUp pt-lg-2">
//     {/* {services.length <= 4 && <a className="btn btn-primary rounded-pill py-3 px-5" href="#"></ className=''a>} */}
//     <Link href={'/about'}><Pr<small>imaryButton className='btn btn-white p-3  my-lg-4 border' text='Learn more about us' icon={faBookOpen} /></small></Link>
// </div>