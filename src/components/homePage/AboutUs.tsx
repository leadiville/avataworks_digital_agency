"use client";
import PrimaryButton from '../PrimaryButton'
import Link from 'next/link'
import AboutGrowth from '../AboutUs/AboutGrowth'
import { usePathname } from 'next/navigation'
import { faBook, faBookOpen, faPencil } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    const path = usePathname();
    return (
        <div>
            <div className="container-fluid bg-light about pb-5">
                <div className="container pb-5">
                    <div className="row g-5">
                        <div className="col-xl-6 wow fadeInLeft order-lg-first" >
                            <div className="bg-primary rounded p-lg-5 mt-lg-4 p-3 h-100 d-flex justify-content-center align-items-center">
                                <div>
                                    <h2 className="mb-4 text-capitalize text-white">Your All-in-One Digital Team—Powered by AVATAs</h2>
                                    <p className='text-white'>From the comfort of your home or office, you can access a full team of remote digital experts—your personal AVATAs (Advanced Virtual Assistants in Technology and Advertising) dedicated to helping you scale with ease.
                                    </p>
                                    <p className='text-white'>Whether you are an ambitious startup in Africa or a thriving brand aiming for global relevance, AVATAWorks is your all-in-one partner for digital brand success. We combine strategic branding, tech-driven creativity, and result-focused execution to deliver powerful marketing, design, and business growth solutions.
                                    </p>
                                    {/* get a quote here */}
                                    {path !== "/about" ?
                                        <div className="col-12 text-start wow fadeInUp pt-2">
                                            {/* {services.length <= 4 && <a className="btn btn-primary rounded-pill py-3 px-5" href="#"></a>} */}
                                            <Link href={'/about'}><PrimaryButton className='btn btn-white p-3  my-4 border' text='Learn more about us' icon={faBookOpen}/></Link>
                                        </div> :
                                        <div className="col-12 text-start wow fadeInUp pt-4">
                                            {/* {services.length <= 4 && <a className="btn btn-primary rounded-pill py-3 px-5" href="#"></a>} */}
                                            <Link href={"/get-quote"} ><PrimaryButton text='Get a Quote' className='py-3 px-5 btn-danger' icon={faPencil} /></Link>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInRight order-first order-sm-first">
                            <AboutGrowth bg='bg-white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs