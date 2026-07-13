import React from 'react'
import PrimaryButton from '../PrimaryButton'
import { faBook, faChartLine } from '@fortawesome/free-solid-svg-icons'
import HeroAnimation from '../AboutUs/HeroAnimation'

export const ServicesHero = () => {
    return (
        <div className="container-fluid ">
        <div className='container px-0 py-5'>
            <div className="row align-items-center ">
                <div className="col-12 col-lg-7">
                        <div className="position-relative container">
                            <div className="badge" style={{ background: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}>
                                <span className="bdot"></span>AI-Native Services
                            </div>
                            <h1 className="text-darl display-1 fw-bold">We Are <br /> Brand Builders<br />  for Hire - <span className="text-primary">AI-Driven.</span></h1>
                            <p className='text-dark'>Three core service lines - AI-powered social media management, branding and creative strategy, and technology and automation. <br /> Every AI-native delivery system is designed for speed, volume, and is consistently reviewed, and approved by our Human-in-the-Loop Avata specialists.</p>
                            <PrimaryButton icon={faChartLine} text='Start Growing' className='btn-primary mt-2' />
                        </div>
                </div>
                <div className="col-12 col-lg-5 order-first order-sm-1">
                    <HeroAnimation />
                </div>
            </div>
        </div>
        </div>
    )
}
