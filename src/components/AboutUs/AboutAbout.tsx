
import AboutGrowth from './AboutGrowth'

const AboutAbout = () => {
    return (
        <div>
            <div className="position-relative z-1 bg-primaryLight container-fluid py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className='col-lg-6 py-4 py-lg-0 order text-lg-start text-center'>
                            <h2 className="mb-lg-4 text-capitalize text-primary fw-bold">Your all-in-one team <br /> of AI-powered specialists.</h2>
                            <div className="second-section text-gray">
                                <div className=''>
                                    <h3 className='text-grey'>Tech-Driven Creativity</h3>
                                    <p className=''><small>AI-powered execution combined with human creative direction — delivering high-performing solutions at machine speed. </small></p>
                                </div>
                                <div className=''>
                                    <h3 className='text-grey'>1-on-1 Growth Consultation</h3>
                                    <p className=''><small>Every engagement starts with an AVATA session to diagnose, prioritise, and map the growth plan that fits your brand.</small></p>
                                </div>
                                <div className=''>
                                    <h3 className='text-grey'>Productivity Meets Precision</h3>
                                    <p className=''><small>Fast turnarounds, deadline-ready delivery, and data-driven decisions — every project built for measurable results.</small></p>
                                </div>
                            </div>
                        </div>
                        {/* get a quote here */}
                        <div className="position-relative col-lg-6 text-start p-0 m-0">
                            <AboutGrowth bg='bg-primary' />
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