import React from 'react'
import PrimaryButton from '../PrimaryButton'
import { faBook, faChartLine } from '@fortawesome/free-solid-svg-icons'

export const ServicesHero = () => {
    return (
        <div className='container-fluid px-0'>
            <section className="svc-hero py-lg-5">
                <div className="position-relative container px-4 py-lg-5 py-3">

                    <div className="badge" style={{ background: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}>
                        <span className="bdot"></span>AI-Native Services
                    </div>
                    <h1 className="text-white display-1 fw-bold">We Are <br /> Brand Builders<br />  for Hire - <span style={{ color: 'skyBlue' }}>AI-Driven.</span></h1>
                    <p>Three core service lines upgraded into AI-powered delivery systems. Built for startups and ambitious brands ready to scale.</p>
                    <PrimaryButton icon={faChartLine} text='Start Growing' className='btn-primary mt-2' />
                </div>
            </section>
        </div>
    )
}
