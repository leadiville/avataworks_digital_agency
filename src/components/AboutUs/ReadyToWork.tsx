import Link from 'next/link'
import React from 'react'
import PrimaryButton from '../PrimaryButton'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ReadyToWork = () => {
    return (
        <section className="bg-primary w-100">
            <div className="text-white py-5">
                <div className="container text-center py-5 align-items-center">
                    <h2>Ready to Work With AVATAWorks?</h2>
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <p className='col-lg-5 col-12 py-lg-2 text-white'>Book a free AVATA session. We diagnose, prioritise, and build the growth plan that fits your brand.</p>
                        </div>
                    </div>
                    <Link href={'/get-quote'} className='col-lg-5 col-12'><PrimaryButton text='get a quote' className="btn btn-white" icon={faArrowRight} /></Link>
                </div>
            </div>
        </section >
    )
}

export default ReadyToWork