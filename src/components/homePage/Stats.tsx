import React from 'react'

const Stats = () => {
    return (
        <>
            {/* STATS */}
            <div className="stats-bar">
                <div className="stats-inner">
                    <div className="stat"><span className="stat-num">30+</span><div className="stat-label">Brands Managed Across Nigeria</div></div>
                    <div className="stat"><span className="stat-num">200%</span><div className="stat-label">Profit Increase for Clients</div></div>
                    <div className="stat"><span className="stat-num">10+</span><div className="stat-label">Skilled Avatas (Human in the loop)</div></div>
                    <div className="stat"><span className="stat-num">4</span><div className="stat-label">Years of Growth Execution</div></div>
                </div>
            </div>
            {/* //  <!-- HITL SECTION-- > */}
            <section className="container text-center w-fit my-4 py-4">
                <div className="">
                    <div className="d-flex justify-content-center">
                        <div className="pt-4 w-50">
                            {/* <div className="label"><span className="text-red">🤖</span> How We Work</div> */}
                            <h1 className='my-2 text-primary'>AI-Driven Execution.<br />Human-Approved Results.</h1>
                            <span className="w-50"><p className='d-inline-block'>Every output goes through our Human-in-the-Loop (HITL) pipeline. AI handles the speed and volume. Expert AVATAs guarantee brand accuracy and strategic quality.</p></span>
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
                </div>
            </section>

        </>
    )
}

export default Stats