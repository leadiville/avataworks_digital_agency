
import React from 'react'
import PrimaryButton from '../PrimaryButton'

export const HtlSectioin = () => {
    return (
        <div>
            {/* //  <!-- HITL SECTION-- > */}
            <section className="container text-center my-4 py-4 px-0 reveal-animate">
                <div className="container">
                    <div className="pt-4">
                        <h2 className='mb-2 text-primary'>AI-Driven Execution.<br />Human-Approved Results.</h2>
                        <div className="d-flex justify-content-center row">
                            <p className='d-inline-block col-lg-7 col-12'>Every output goes through our Human-in-the-Loop (HITL) pipeline. AI handles the speed and volume. Expert Avatas guarantee brand accuracy and strategic quality.</p>
                        </div>
                    </div>
                </div>
                <div className="hitl-flow">
                    <div className="flow-step">
                        <div className="flow-icon ai">01</div>
                        <div className="flow-label">Client Brief</div>
                        <div className="flow-sub">You share goals</div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">
                        <div className="flow-icon ai">02</div>
                        <div className="flow-label">AI Draft</div>
                        <div className="flow-sub">Generated in minutes</div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">
                        <div className="flow-icon human">03</div>
                        <div className="flow-label">AVATA Polish</div>
                        <div className="flow-sub">Human refinement</div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">
                        <div className="flow-icon ai">04</div>
                        <div className="flow-label">Auto Execute</div>
                        <div className="flow-sub">AI deploys 24/7</div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">
                        <div className="flow-icon human">05</div>
                        <div className="flow-label">Client Wins</div>
                        <div className="flow-sub">Measurable results</div>
                    </div>
                </div>
                <div className='w-100 text-center'>
                    <PrimaryButton text='📚 Learn More About Us' className='btn-primary' />
                </div>
            </section>
        </div>
    )
}