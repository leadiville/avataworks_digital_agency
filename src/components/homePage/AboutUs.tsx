import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../PrimaryButton'
import Link from 'next/link'
import AboutGrowth from '../AboutUs/AboutGrowth'

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

                                    <Link href={'/about'}><PrimaryButton className='btn-light p-3 my-4' text='speak to an avata' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInRight order-first order-sm-first">
                            <AboutGrowth bg='bg-white'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs