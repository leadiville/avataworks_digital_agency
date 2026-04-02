"use client";
import PrimaryButton from '../PrimaryButton'
import Link from 'next/link'
import AboutGrowth from '../AboutUs/AboutGrowth'
// import { usePathname } from 'next/navigation'
import { faBook, faBookOpen, faPencil } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    // const path = usePathname();
    return (
        // <div>
        //     <div className="bg-primary container-fluid bg-light py-4 py-lg-0">
        //         <div className="container">
        //             <div className="p-lg-5 mt-lg-4 p-3 h-100 d-flex justify-content-center align-items-center">
        //                 <div>
        //                     <div className="d-flex justify-content-center">
        //                         <h1 className="mb-4 text-capitalize text-white fw-bold display-4 w-75 text-center">Your All-in-One Digital Team Powered by AVATAs</h1>
        //                     </div>

        //                         <h5 className='text-center text-white lh-lg'>1. From the comfort of your home or office, you can access a full team of remote digital experts your personal AVATAs (Advanced Virtual Assistants in Technology and Advertising) dedicated to helping you scale with ease.
        //                         </h5>
        //                         <h5 className='text-center text-white lh-lg'>2. Whether you are an ambitious startup in Africa or a thriving brand aiming for global relevance, AVATAWorks is your all-in-one partner for digital brand success. We combine strategic branding, tech-driven creativity, and result-focused execution to deliver powerful marketing, design, and business growth solutions.
        //                         </h5>
        //                                                 {/* get a quote here */}

        //                     <div className="col-12 text-center wow fadeInUp pt-2">
        //                         {/* {services.length <= 4 && <a className="btn btn-primary rounded-pill py-3 px-5" href="#"></a>} */}
        //                         <Link href={'/about'}><PrimaryButton className='btn btn-white p-3  my-4 border' text='Learn more about us' icon={faBookOpen} /></Link>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <section>
            <div className="pb-5 bg-primary">
                <div className="container text-center py-4 text-white">
                    <div className="py-lg-1 d-inline-block px-lg-4 rounded-pill my-5 text-white bg-primaryLighter">🌍 Lagos → Africa → World</div>
                    <h1 style={{ marginBottom: '16px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>Africa's brands deserve better.<br />We're building the system that delivers it.</h1>
                    <p className='text-white' style={{ maxWidth: '560px', margin: '0 auto 40px' }}>AVATAWorks is not another Lagos agency. It's the AI-driven growth infrastructure African businesses have been waiting for.</p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <PrimaryButton text='Get a Free Strategy Session →' className='btn-white border-primary' />
                        <PrimaryButton text='About AVATAWorks btn-primary' className='btn-primary border-white' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs