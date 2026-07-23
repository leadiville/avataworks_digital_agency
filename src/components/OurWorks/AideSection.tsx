import ScrollAnimate from '@/utils/ScrollAnimate'
import React from 'react'

const AideSection = () => {
    return (
        <div className="container aide-teaser mb-5 ">
            <div className="aide-grid">

                {/* <!-- Left: Honest positioning copy --> */}
                <ScrollAnimate>

                    <div className="aide-left">
                        <div className="aide-eyebrow text-primary"><span className="pdot"></span>Now accepting clients</div>
                        <h2>Every result above was<br />built by <em>human Avatas.</em><br />Now AI makes it faster.</h2>
                        <p>For 4 years, our Avatas have delivered these results manually — strategy, creative, execution, reporting. That work is real and it's proven. AI doesn't replace it rather it gives those same expert Avatas the infrastructure that lets them work 5× faster, handle more brands at once, and deliver without adding overhead. The quality stays. The speed multiplies.</p>

                        <div className="aide-proof-line">
                            <div className="apl-icon">✅</div>
                            <div className="apl-body">
                                <div className="apl-title">What stays the same: Avata quality control</div>
                                <div className="apl-sub">Every AI-accelerated output is reviewed and approved by an Avata before it reaches your audience.</div>
                            </div>
                        </div>
                        <div className="aide-proof-line">
                            <div className="apl-icon">⚡</div>
                            <div className="apl-body">
                                <div className="apl-title">What changes: speed and scale</div>
                                <div className="apl-sub">Content that took days gets drafted in minutes. Campaigns that needed weeks of setup get deployed in hours. Same results — delivered faster than any traditional agency can match.</div>
                            </div>
                        </div>

                        <div className="aide-cta-row">
                            <a href="https://avataworks.com/get-quote" className="btn btn-white">Get Started →</a>
                            <a href="https://avataworks.com/our-services" className="btn btn-primary">See Our Services</a>
                        </div>
                        <div className="waitlist-badge">
                            <span className="wb-dot"></span>
                            <span className="text-primary"><strong className='text-white'>Now accepting clients</strong></span>
                        </div>
                    </div>
                </ScrollAnimate>
                {/* <!-- Right: Velocity visual --> */}
                <div className="aide-right">
                    <ScrollAnimate>
                        <div className="av-header">Delivery speed comparison</div>

                        <div className="vel-item">
                            <div className="vel-label">Brand brief → first draft</div>
                            <div className="vel-bars">
                                <div className="vel-bar-row">
                                    <div className="vel-bar-bg"><div className="vel-bar-fill vb-manual w-100"></div></div>
                                    <span className="vel-tag vt-now">2–3 days</span>
                                </div>
                                <div className="vel-bar-row">
                                    <div className="vel-bar-bg"><div className="vel-bar-fill vb-aide" style={{ width: '18%', animation: 'none' }}></div></div>
                                    <span className="vel-tag vt-soon">~2 hours ⚡</span>
                                </div>
                            </div>
                        </div>

                        <div className="vel-item">
                            <div className="vel-label">Monthly content calendar</div>
                            <div className="vel-bars">
                                <div className="vel-bar-row">
                                    <div className="vel-bar-bg"><div className="vel-bar-fill vb-manual w-100"></div></div>
                                    <span className="vel-tag vt-now">1–2 weeks</span>
                                </div>
                                <div className="vel-bar-row">
                                    <div className="vel-bar-bg"><div className="vel-bar-fill vb-aide" style={{ width: '14%' }}></div></div>
                                    <span className="vel-tag vt-soon">~1 day ⚡</span>
                                </div>
                            </div>
                        </div>

                        <div className="vel-item">
                            <div className="vel-label">Ad campaign setup</div>
                            <div className="vel-bars">
                                <div className="vel-bar-row">
                                    <div className="vel-bar-bg"><div className="vel-bar-fill vb-manual" style={{ width: '100%' }}></div></div>
                                    <span className="vel-tag vt-now">3–5 days</span>
                                </div>
                                <div className="vel-bar-row">
                                    <div className="vel-bar-bg"><div className="vel-bar-fill vb-aide" style={{ width: '12%' }}></div></div>
                                    <span className="vel-tag vt-soon">~8 hours ⚡</span>
                                </div>
                            </div>
                        </div>

                        <div className="vel-item">
                            <div className="vel-label">Performance report</div>
                            <div className="vel-bars">
                                <div className="vel-bar-row">
                                    <div className="vel-bar-bg"><div className="vel-bar-fill vb-manual" style={{ width: '100%' }}></div></div>
                                    <span className="vel-tag vt-now">2–3 days</span>
                                </div>
                                <div className="vel-bar-row">
                                    <div className="vel-bar-bg"><div className="vel-bar-fill vb-aide" style={{ width: '10%' }}></div></div>
                                    <span className="vel-tag vt-soon">Auto-live ⚡</span>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimate>

                    <div className="vel-legend">
                        <div className="vleg"><div className="vleg-dot vd-now"></div><span className="vleg-txt">Old Avata delivery</span></div>
                        <div className="vleg"><div className="vleg-dot vd-soon"></div><span className="vleg-txt">AI-Driven + Avata delivery</span></div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default AideSection