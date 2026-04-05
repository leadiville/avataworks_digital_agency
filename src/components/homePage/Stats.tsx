import React from 'react'

const Stats = () => {
    return (
        <div className=''>
            {/* STATS */}
            <div className="bg-primary">
                <div className="position-relative container ">
                    <div className="row rounded gap-0 justify-content-center container">
                        <div className="col-3 text-center text-white py-4 px-0 "><span className="stat-num display-6 fw-bold text-white">30+</span><p className="text-lighter pt-lg-0 pt-1 lh-1 lh-lg-2 m-0"><small>Brands Managed Across Nigeria</small></p></div>
                        <div className="col-3 text-center text-white py-4 px-0 "><span className="stat-num display-6 fw-bold text-white">200%</span><p className="text-lighter pt-lg-0 pt-1 lh-1 lh-lg-2 m-0"><small>Profit Increase for Clients</small></p></div>
                        <div className="col-3 text-center text-white py-4 px-0 "><span className="stat-num display-6 fw-bold text-white">4</span><p className="text-lighter pt-lg-0 pt-1 lh-1 lh-lg-2 m-0"><small>Years of Growth Execution</small></p></div>
                        <div className="col-3 text-center text-white py-4 px-0 "><span className="stat-num display-6 fw-bold text-white">10+</span><p className="text-lighter pt-lg-0 pt-1 lh-1 lh-lg-2 m-0"><small>Skilled Avatas (Human in the loop</small>)</p></div>
                    </div>
                </div>
            </div>
            {/* //  <!-- HITL SECTION-- > */}
            <section className="container text-center my-4 py-4 px-0">
                <div className="container">
                    <div className="pt-4">
                        <h2 className='mb-2 text-primary'>AI-Driven Execution.<br />Human-Approved Results.</h2>
                        <div className="d-flex justify-content-center row">
                            <p className='d-inline-block col-lg-7 col-12'>Every output goes through our Human-in-the-Loop (HITL) pipeline. AI handles the speed and volume. Expert AVATAs guarantee brand accuracy and strategic quality.</p>
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
            </section>

        </div>
    )
}

export default Stats