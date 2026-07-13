
import AboutGrowth from './AboutGrowth'

const AboutAbout = () => {
    
    return (
        <div>
            <div className="position-relative z-1 bg-primaryLight container-fluid py-5">
                <div className="container py-lg-5">
                    <div className="row align-items-center">
                        <div className='col-lg-6 pt-4 py-lg-0 order text-lg-start text-center order-first order-1'>
                            <h2 className="mb-4 text-capitalize text-primary fw-bold">Your all-in-one team <br /> of AI-powered specialists.</h2>
                            <div className="second-section text-gray">
                                <div className=''>
                                    <h3 className='text-grey'>AI Infrastructure, Human Oversight</h3>
                                    <p className=''><small>We build agentic workflows, multi-step AI systems that automate your marketing from content creation to CRM lead capture. Our Avatas make sure it's always right.</small></p>
                                </div>
                                <div className=''>
                                    <h3 className='text-grey'>Tech-Driven Creativity</h3>
                                    <p className=''><small>AI-accelerated execution combined with human creative direction and oversight that delivers high-performing tech solutions at machine speed.</small></p>
                                </div>
                                <div className=''>
                                    <h3 className='text-grey'>1-on-1 Avata Consultation</h3>
                                    <p className=''><small>Every engagement starts with an Avata session to diagnose, prioritize, and map the growth plan that fits your brand.</small></p>
                                </div>
                            </div>
                        </div>
                        {/* get a quote here */}
                        <div className="position-relative col-lg-6 text-start p-0 m-0 order-lg-1">
                            <AboutGrowth bg='bg-primaryDark' />
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