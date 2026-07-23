import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../PrimaryButton'
import Link from 'next/link'

const WorksHero = () => {
    return (
        <div>
            <section className="hero container-fluid" style={{ backgroundColor: "#0A2540", height:"fit-content" }}>
                <div className=" container py-lg-5 gap-4 pb-5">
                    <div className="row hero-grid align-items-center py-4">

                        {/* <!-- Left: editorial --> */}
                        <div className="col-md-6">
                            <div className="hero-eyebrow">
                                <span className="hero-year-badge text-white">Lagos · 2022 – 2026</span>
                                <div className="hero-divider"></div>
                            </div>
                            <h1 className='display-1 lh-1 fw-bold py-2 text-white' style={{ letterSpacing: "0.3rem" }}>Work  That <br /> Moves the<br /><span className="text-primary">Needle.</span></h1>
                            <p className="py-2 text-gray">4+ years of results delivered by expert Avatas for startups and ambitious brands. Real reults from Avataworks. 4+ years of documented outcomes across 30+ clients.</p>
                            <div className="d-md-flex d-grid gap-lg-4 gap-3 w-max-content">
                                <Link href="/our-services"><PrimaryButton className="btn-dark px-md-2" text='Our Services →' /></Link>
                                <Link href="/get-quote"><PrimaryButton className="btn-white px-md-2" text='Start Your Story →' /></Link>
                            </div>
                        </div>

                        {/* <!-- Right: performance cards --> */}
                        <div className="col-md-6 order-first order-md-2">
                            <div className="">
                                <Image src={'/getQuote/work.png'} alt='our-works-hero-image' width={400} height={500} className='w-100 h-100' />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default WorksHero