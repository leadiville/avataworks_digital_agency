import React from 'react'
import PrimaryButton from '../PrimaryButton'
import Link from 'next/link'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import AboutGrowth from './AboutGrowth'

const AboutAbout = () => {
    return (
        <div>
            <div className="bg-primary container-fluid bg-light py-lg-5">
                <div className="container">
                    <div className="d-lg-flex justify-content-between align-items-center">
                        <div className='col-lg-6 py-4 py-lg-0 order'>
                            <h1 className="mb-lg-4 text-capitalize text-white fw-bold display-4 ">Your All-in-One Digital Team Powered by AVATAs</h1>
                            <p className='text-white'>From the comfort of your home or office, you can access a full team of remote digital experts your personal AVATAs (Advanced Virtual Assistants in Technology and Advertising) dedicated to helping you scale with ease.
                            </p>
                            <p className=' text-white'>Whether you are an ambitious startup in Africa or a thriving brand aiming for global relevance, AVATAWorks is your all-in-one partner for digital brand success. We combine strategic branding, tech-driven creativity, and result-focused execution to deliver powerful marketing, design, and business growth solutions.
                            </p>
                            {/* get a quote here */}

                            <div className="col-lg-12  wow fadeInUp pt-lg-2">
                                {/* {services.length <= 4 && <a className="btn btn-primary rounded-pill py-3 px-5" href="#"></a>} */}
                                <Link href={'/about'}><PrimaryButton className='btn btn-white p-3  my-lg-4 border' text='Learn more about us' icon={faBookOpen} /></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 py-4 py-lg-0">
                            <AboutGrowth bg='bg-white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default AboutAbout